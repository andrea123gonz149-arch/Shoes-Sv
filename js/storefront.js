const CART_STORAGE_KEY = 'shoes-sv-cart';
const cart = readCart();
let selectedProduct = null;
let selectedSize = null;

function readCart(){
  try{
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    const items = saved ? JSON.parse(saved) : [];
    if(!Array.isArray(items)) return [];
    return items.flatMap(item => {
      if(!item || typeof item !== 'object') return [];
      const brand = BRANDS.find(entry => entry.id === item.brandId);
      if(!brand || !Number.isFinite(Number(item.size)) || !SIZES.includes(Number(item.size))) return [];
      const index = brand.shoes.findIndex(shoe =>
        shoe.name === item.name && shoe.model === item.model
      );
      if(index < 0) return [];
      const suppliedId = String(item.cartId || '');
      return [{
        cartId:/^[\w-]{1,100}$/.test(suppliedId)
          ? suppliedId
          : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        brandId:brand.id,
        brandName:brand.name,
        name:brand.shoes[index].name,
        model:brand.shoes[index].model,
        price:brand.shoes[index].price,
        size:Number(item.size),
        image:productImage(brand.id,index)
      }];
    });
  }catch(error){
    console.error('No se pudo leer el carrito guardado.',error);
    return [];
  }
}

function saveCart(){
  try{
    localStorage.setItem(CART_STORAGE_KEY,JSON.stringify(cart));
    updateCartCount();
    return true;
  }catch(error){
    console.error('No se pudo guardar el carrito.',error);
    showNotice('No se pudo guardar el carrito en este navegador.','error');
    return false;
  }
}

function productImage(brandId,index){
  return PRODUCT_IMAGES[brandId]?.[index] || PRODUCT_IMAGE;
}

function formatPrice(price){
  return `$${Number(price).toFixed(2)}`;
}

function showNotice(message,state='success'){
  let notice = document.querySelector('.notice');
  if(!notice){
    notice = document.createElement('div');
    notice.className = 'notice';
    notice.setAttribute('role','status');
    document.body.append(notice);
  }
  notice.dataset.state = state;
  notice.textContent = message;
  window.clearTimeout(showNotice.timeout);
  showNotice.timeout = window.setTimeout(() => notice.remove(),3200);
}

function brandTile(brand){
  const logo = BRAND_LOGOS[brand.id];
  const mark = logo
    ? `<img class="brand-logo" src="${logo}" alt="${brand.name}" loading="lazy">`
    : `<span class="brand-wordmark">${brand.name}</span>`;
  return `
    <a class="brand-tile" href="${brand.id}.html">
      ${mark}
      <span class="brand-tile-label">Ver colección</span>
    </a>`;
}

function productCard(brand,index){
  const shoe = brand.shoes[index];
  return `
    <article class="shoe-card" data-brand="${brand.id}" data-price="${shoe.price}">
      <a class="shoe-image-wrap" href="${brand.id}.html" data-open-product="${brand.id}" data-index="${index}" aria-label="Ver ${shoe.name}">
        <img src="${productImage(brand.id,index)}" alt="${shoe.name}" loading="lazy" decoding="async">
      </a>
      <div class="shoe-info">
        <p class="shoe-brand">${brand.name}</p>
        <h2 class="shoe-name">${shoe.name}</h2>
        <p class="shoe-model">${shoe.model}</p>
        <p class="shoe-price">${formatPrice(shoe.price)}</p>
        <button class="button" type="button" data-open-product="${brand.id}" data-index="${index}">Ver tallas</button>
      </div>
    </article>`;
}

function renderBrands(){
  const grid = document.getElementById('brandGrid');
  if(grid){
    grid.innerHTML = BRANDS.map(brandTile).join('');
  }
}

function renderFeaturedProduct(index){
  const featured = document.getElementById('featureSlide');
  if(!featured || BRANDS.length === 0) return;
  const brand = BRANDS[index % BRANDS.length];
  const shoe = brand.shoes[0];
  featured.innerHTML = `
    <img class="feature-slide-image" src="${productImage(brand.id,0)}" alt="${shoe.name}" loading="lazy">
    <div class="feature-slide-info">
      <p class="eyebrow">${brand.name} · Destacado</p>
      <h3>${shoe.name}</h3>
      <p>${shoe.model} · ${formatPrice(shoe.price)}</p>
    </div>`;
  featured.dataset.slideIndex = String(index);
}

function initFeaturedCarousel(){
  const featured = document.getElementById('featureSlide');
  if(!featured) return;
  let index = 0;
  renderFeaturedProduct(index);
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.setInterval(() => {
    index = (index + 1) % BRANDS.length;
    renderFeaturedProduct(index);
  },5000);
}

function renderCatalog(){
  const grid = document.getElementById('catalogGrid');
  if(!grid) return;
  grid.innerHTML = BRANDS.flatMap(brand =>
    brand.shoes.map((shoe,index) => productCard(brand,index))
  ).join('');

  const brandFilters = document.getElementById('brandFilters');
  brandFilters.innerHTML = BRANDS.map(brand => `
    <label class="filter-check">
      <input type="checkbox" value="${brand.id}" name="brandFilter">
      <span>${brand.name}</span>
    </label>`).join('');

  const filterState = {priceBand:'all',budget:''};
  const filterElements = [
    document.getElementById('catalogSearch'),
    document.getElementById('brandFilters'),
    document.getElementById('budgetInput')
  ];
  const applyFilters = () => {
    const query = document.getElementById('catalogSearch').value.trim().toLocaleLowerCase('es');
    const selectedBrands = [...brandFilters.querySelectorAll('input:checked')].map(input => input.value);
    const priceRange = filterState.priceBand === 'low' ? {min:0,max:75}
      : filterState.priceBand === 'mid' ? {min:75.01,max:100}
        : filterState.priceBand === 'high' ? {min:100.01,max:150}
          : {min:0,max:Infinity};
    const hasBudget = filterState.budget !== '';
    const minPrice = hasBudget ? 0 : priceRange.min;
    const maxPrice = hasBudget ? Number(filterState.budget) : priceRange.max;
    let visibleCount = 0;

    grid.querySelectorAll('.shoe-card').forEach(card => {
      const price = Number(card.dataset.price);
      const matches = (!selectedBrands.length || selectedBrands.includes(card.dataset.brand))
        && card.textContent.toLocaleLowerCase('es').includes(query)
        && price >= minPrice && price <= maxPrice;
      card.hidden = !matches;
      if(matches) visibleCount++;
    });

    document.getElementById('catalogResults').textContent =
      `${visibleCount} ${visibleCount === 1 ? 'producto' : 'productos'}`;
    document.getElementById('catalogEmpty').hidden = visibleCount > 0;
  };

  filterElements.forEach(element => {
    element?.addEventListener('input',() => {
      if(element.id === 'budgetInput'){
        filterState.budget = element.value;
        filterState.priceBand = 'all';
        document.querySelectorAll('[data-price-band]').forEach(button => {
          button.setAttribute('aria-pressed',String(button.dataset.priceBand === 'all'));
        });
      }
      applyFilters();
    });
  });

  document.querySelectorAll('[data-price-band]').forEach(button => {
    button.addEventListener('click',() => {
      filterState.priceBand = button.dataset.priceBand;
      filterState.budget = '';
      document.getElementById('budgetInput').value = '';
      document.querySelectorAll('[data-price-band]').forEach(option => {
        option.setAttribute('aria-pressed',String(option === button));
      });
      applyFilters();
    });
  });

  document.getElementById('resetCatalogFilters').addEventListener('click',() => {
    document.getElementById('catalogSearch').value = '';
    document.getElementById('budgetInput').value = '';
    brandFilters.querySelectorAll('input').forEach(input => { input.checked = false; });
    filterState.priceBand = 'all';
    filterState.budget = '';
    document.querySelectorAll('[data-price-band]').forEach(button => {
      button.setAttribute('aria-pressed',String(button.dataset.priceBand === 'all'));
    });
    applyFilters();
  });

  applyFilters();
}

function renderBrandPage(){
  const brandId = document.body.dataset.brand;
  const brand = BRANDS.find(item => item.id === brandId);
  if(!brand) return;
  document.title = `${brand.name} | Shoes_sv`;
  const title = document.getElementById('brandTitle');
  const logo = document.getElementById('brandPageLogo');
  if(title) title.textContent = brand.name;
  if(logo && BRAND_LOGOS[brand.id]){
    logo.src = BRAND_LOGOS[brand.id];
    logo.alt = `Logo de ${brand.name}`;
  }else if(logo){
    logo.hidden = true;
  }
  const grid = document.getElementById('brandProducts');
  if(grid){
    grid.innerHTML = brand.shoes
      .map((shoe,index) => productCard(brand,index))
      .join('');
  }
}

function closeProductView(){
  const dialog = document.getElementById('productView');
  if(dialog?.open) dialog.close();
  selectedProduct = null;
  selectedSize = null;
  document.body.classList.remove('product-view-open');
}

function createProductDialog(){
  const dialog = document.createElement('dialog');
  dialog.className = 'product-fullscreen';
  dialog.id = 'productView';
  dialog.setAttribute('aria-labelledby','dialogTitle');
  dialog.innerHTML = `
    <header class="product-view-header">
      <a class="brand-lockup" href="index.html"><img src="img/webp/logos/Shoes-SV-Icon.webp" alt=""><span>SHOES <strong>SV</strong></span></a>
      <button class="icon-button" type="button" data-close-product aria-label="Cerrar producto">×</button>
    </header>
    <div class="product-view-content">
      <div class="product-view-image"><img id="dialogImage" alt=""></div>
      <section class="product-view-details">
        <p class="eyebrow" id="dialogBrand"></p>
        <h1 id="dialogTitle"></h1>
        <p class="dialog-model" id="dialogModel"></p>
        <p class="dialog-price" id="dialogPrice"></p>
        <p class="field-label">Selecciona una talla (US)</p>
        <div class="size-list" id="sizeList"></div>
        <button class="button" id="dialogAdd" type="button" disabled>Selecciona una talla</button>
        <a class="product-view-back" href="#" data-close-product>Volver a la colección</a>
      </section>
    </div>`;
  document.body.append(dialog);

  dialog.addEventListener('click',event => {
    if(event.target.closest('[data-close-product]')){
      event.preventDefault();
      closeProductView();
    }
    const sizeButton = event.target.closest('[data-size]');
    if(sizeButton){
      selectedSize = Number(sizeButton.dataset.size);
      dialog.querySelectorAll('[data-size]').forEach(button => {
        button.setAttribute('aria-pressed',String(button === sizeButton));
      });
      const addButton = document.getElementById('dialogAdd');
      addButton.disabled = false;
      addButton.textContent = `Agregar · Talla ${selectedSize}`;
    }
  });

  dialog.addEventListener('cancel',event => {
    event.preventDefault();
    closeProductView();
  });
  document.addEventListener('keydown',event => {
    if(event.key === 'Escape' && dialog.open){
      event.preventDefault();
      closeProductView();
    }
  });

  document.getElementById('dialogAdd').addEventListener('click',addSelectedProduct);
}

function openProduct(brandId,index){
  const brand = BRANDS.find(item => item.id === brandId);
  const shoe = brand?.shoes[index];
  if(!brand || !shoe) return;

  selectedProduct = {brand,index,shoe};
  selectedSize = null;
  const dialog = document.getElementById('productView');
  const image = document.getElementById('dialogImage');
  image.src = productImage(brand.id,index);
  image.alt = shoe.name;
  document.getElementById('dialogBrand').textContent = brand.name;
  document.getElementById('dialogTitle').textContent = shoe.name;
  document.getElementById('dialogModel').textContent = shoe.model;
  document.getElementById('dialogPrice').textContent = formatPrice(shoe.price);
  document.getElementById('sizeList').innerHTML = SIZES.map(size =>
    `<button class="size-option" type="button" data-size="${size}" aria-pressed="false">${size}</button>`
  ).join('');
  const addButton = document.getElementById('dialogAdd');
  addButton.disabled = true;
  addButton.textContent = 'Selecciona una talla';
  document.body.classList.add('product-view-open');
  dialog.showModal();
}

function addSelectedProduct(){
  if(!selectedProduct || selectedSize === null) return;
  const {brand,index,shoe} = selectedProduct;
  cart.push({
    cartId:`${Date.now()}-${Math.random().toString(16).slice(2)}`,
    brandId:brand.id,
    brandName:brand.name,
    name:shoe.name,
    model:shoe.model,
    price:shoe.price,
    size:selectedSize,
    image:productImage(brand.id,index)
  });
  if(!saveCart()) return;
  closeProductView();
  showNotice(`${shoe.name} se agregó al carrito.`);
}

function cartTotals(){
  const subtotal = cart.reduce((sum,item) => sum + Number(item.price),0);
  return {subtotal,quantity:cart.length};
}

function updateCartCount(){
  const count = cart.length;
  document.querySelectorAll('[data-cart-count]').forEach(element => {
    element.textContent = count;
  });
}

function renderCart(){
  const list = document.getElementById('cartItems');
  if(!list) return;
  const empty = document.getElementById('cartEmpty');
  const content = document.getElementById('cartContent');
  const success = document.getElementById('orderSuccess');
  const {subtotal,quantity} = cartTotals();

  const hasSuccess = success && !success.hidden;
  if(empty) empty.hidden = quantity > 0 || hasSuccess;
  if(content) content.hidden = quantity === 0 || hasSuccess;
  list.innerHTML = cart.map(item => `
    <article class="cart-item">
      <img class="cart-item-image" src="${item.image || PRODUCT_IMAGE}" alt="${item.name}">
      <div>
        <h2 class="cart-item-name">${item.name}</h2>
        <p class="cart-item-meta">${item.brandName} · Talla ${item.size} · ${item.model}</p>
        <button class="text-button" type="button" data-remove-item="${item.cartId}">Quitar</button>
      </div>
      <strong class="cart-item-price">${formatPrice(item.price)}</strong>
    </article>`).join('');

  const payType = document.querySelector('input[name="payment"]:checked')?.value || 'card';
  const discountRate = quantity >= 5 ? (payType === 'cash' ? .15 : .5) : 0;
  const discount = subtotal * discountRate;
  const total = subtotal - discount;

  document.getElementById('cartQuantity').textContent = quantity;
  document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
  document.getElementById('cartDiscount').textContent = `-${formatPrice(discount)}`;
  document.getElementById('cartTotal').textContent = formatPrice(total);
  document.getElementById('checkoutSubmit').disabled = quantity === 0;
  document.getElementById('discountHint').textContent = quantity >= 5
    ? `Descuento ${discountRate * 100}% aplicado para pago ${payType === 'cash' ? 'en efectivo' : 'con tarjeta'}.`
    : `Agrega ${5 - quantity} par(es) más para activar las ofertas.`;
}

function handleCartActions(event){
  const removeButton = event.target.closest('[data-remove-item]');
  if(!removeButton) return;
  const index = cart.findIndex(item => String(item.cartId) === removeButton.dataset.removeItem);
  if(index >= 0){
    cart.splice(index,1);
    saveCart();
    renderCart();
  }
}

function isValidLuhn(value){
  const digits = value.replace(/\D/g,'');
  let sum = 0;
  let doubleDigit = false;
  for(let index = digits.length - 1; index >= 0; index--){
    let digit = Number(digits[index]);
    if(doubleDigit){
      digit *= 2;
      if(digit > 9) digit -= 9;
    }
    sum += digit;
    doubleDigit = !doubleDigit;
  }
  return digits.length >= 13 && digits.length <= 19 && sum % 10 === 0;
}

function identifyCardBrand(value){
  const digits = value.replace(/\D/g,'');
  if(/^4/.test(digits)) return 'Visa';
  if(/^(5[1-5]|2(?:2[2-9]|[3-6]\d|7[01]|720))/.test(digits)) return 'Mastercard';
  return '';
}

function isFutureExpiry(value){
  const match = /^(\d{2})\/(\d{2})$/.exec(value);
  if(!match) return false;
  const month = Number(match[1]);
  const year = 2000 + Number(match[2]);
  if(month < 1 || month > 12) return false;
  const current = new Date();
  return year > current.getFullYear()
    || (year === current.getFullYear() && month >= current.getMonth() + 1);
}

function setCardPaymentEnabled(enabled){
  const cardInputs = document.querySelectorAll('#mockCardFields input');
  cardInputs.forEach(input => {
    input.disabled = !enabled;
    input.required = enabled;
    if(!enabled) input.value = '';
  });
  document.getElementById('mockCardFields').hidden = !enabled;
  if(!enabled){
    document.getElementById('cardBrandStatus').textContent =
      'Los datos de tarjeta se eliminaron del formulario.';
    document.getElementById('cardValidationMessage').textContent = '';
  }
  document.getElementById('checkoutSubmit').textContent =
    enabled ? 'Continuar' : 'Continuar por WhatsApp';
  document.getElementById('checkoutMessage').textContent = '';
  renderCart();
}

function isCustomerDetailsValid(){
  const fields = document.querySelectorAll('#customerFields input');
  for(const field of fields){
    if(!field.reportValidity()) return false;
  }
  return true;
}

function completeMockPayment(brand){
  const {subtotal,quantity} = cartTotals();
  const payment = document.querySelector('input[name="payment"]:checked')?.value || 'card';
  const rate = quantity >= 5 ? (payment === 'cash' ? .15 : .5) : 0;
  const total = subtotal - subtotal * rate;
  const year = String(new Date().getFullYear()).slice(-2);
  const orderNumber = `SSV-${year}-${String(Math.floor(Math.random() * 1000000)).padStart(6,'0')}`;

  try{
    localStorage.removeItem(CART_STORAGE_KEY);
  }catch(error){
    console.error('No se pudo vaciar el carrito después del pago de prueba.',error);
    document.getElementById('checkoutMessage').textContent =
      'No se pudo actualizar el carrito guardado. No se completó la simulación; inténtalo de nuevo.';
    return false;
  }

  cart.length = 0;
  updateCartCount();
  document.getElementById('cartContent').hidden = true;
  document.getElementById('cartEmpty').hidden = true;
  document.getElementById('orderSuccess').hidden = false;
  document.getElementById('orderNumber').textContent = orderNumber;
  document.getElementById('orderPaymentBrand').textContent = brand;
  document.getElementById('orderTotal').textContent = formatPrice(total);
  window.scrollTo({top:0,behavior:'smooth'});
  return true;
}

function processMockPayment(){
  const form = document.getElementById('checkoutForm');
  if(!isCustomerDetailsValid()) return;
  const numberInput = document.getElementById('mockCardNumber');
  const digits = numberInput.value.replace(/\D/g,'');
  const brand = identifyCardBrand(digits);
  const status = document.getElementById('cardValidationMessage');
  const testCards = {
    '4242424242424242':'Visa',
    '5555555555554444':'Mastercard'
  };

  if(!brand || !isValidLuhn(digits)){
    status.dataset.state = 'error';
    status.textContent = 'Número no válido para la demostración. Selecciona Visa o Mastercard para cargar un número de ejemplo.';
    numberInput.focus();
    return;
  }
  if(testCards[digits] !== brand){
    status.dataset.state = 'error';
    status.textContent = 'Este formulario solo acepta los números de ejemplo que se cargan al seleccionar Visa o Mastercard. No ingreses datos de una tarjeta real.';
    numberInput.focus();
    return;
  }
  if(!document.getElementById('mockCardholder').value.trim()){
    status.dataset.state = 'error';
    status.textContent = 'Escribe un nombre de prueba para continuar.';
    document.getElementById('mockCardholder').focus();
    return;
  }
  if(!isFutureExpiry(document.getElementById('mockCardExpiry').value)){
    status.dataset.state = 'error';
    status.textContent = 'Escribe una fecha futura en formato MM/AA.';
    document.getElementById('mockCardExpiry').focus();
    return;
  }
  if(!/^\d{3}$/.test(document.getElementById('mockCardCvc').value)){
    status.dataset.state = 'error';
    status.textContent = 'El código debe tener 3 dígitos.';
    document.getElementById('mockCardCvc').focus();
    return;
  }

  document.getElementById('mockCardNumber').value = '';
  document.getElementById('mockCardExpiry').value = '';
  document.getElementById('mockCardCvc').value = '';
  document.getElementById('mockCardholder').value = '';
  if(completeMockPayment(brand)){
    status.dataset.state = 'success';
    status.textContent = `Tarjeta ${brand} identificada. No se realizó ningún cobro.`;
    form.reset();
  }
}

function sendCashOrder(){
  if(cart.length === 0 || !isCustomerDetailsValid()) return;
  const customer = {
    name:document.getElementById('customerName').value.trim(),
    email:document.getElementById('customerEmail').value.trim(),
    address:document.getElementById('customerAddress').value.trim(),
    phone:document.getElementById('customerPhone').value.trim()
  };
  const {subtotal,quantity} = cartTotals();
  const rate = quantity >= 5 ? .15 : 0;
  const discount = subtotal * rate;
  const total = subtotal - discount;
  const lines = cart.map(item =>
    `- ${item.name} (${item.brandName}) · Talla ${item.size} · ${formatPrice(item.price)}`
  );
  const message = [
    '🛍️ *NUEVO PEDIDO - SHOES_SV*',
    '',
    '*PRODUCTOS:*',
    ...lines,
    '',
    `Cantidad: ${quantity}`,
    `Subtotal: ${formatPrice(subtotal)}`,
    `Descuento: -${formatPrice(discount)}`,
    `TOTAL: ${formatPrice(total)}`,
    'Pago: Efectivo',
    '',
    '*CLIENTE:*',
    `Nombre: ${customer.name}`,
    `Correo: ${customer.email}`,
    `Dirección: ${customer.address}`,
    `Teléfono: ${customer.phone}`
  ].join('\n');
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url,'_blank','noopener,noreferrer');
  document.getElementById('checkoutMessage').textContent =
    'Se preparó tu pedido en WhatsApp. Revísalo y pulsa Enviar para confirmarlo.';
}

function sendOrder(event){
  event.preventDefault();
  if(cart.length === 0) return;
  const payment = document.querySelector('input[name="payment"]:checked')?.value || 'card';
  if(payment === 'card'){
    processMockPayment();
  }else{
    if(!isCustomerDetailsValid()) return;
    sendCashOrder();
  }
}

document.addEventListener('click',event => {
  const productButton = event.target.closest('[data-open-product]');
  if(productButton){
    event.preventDefault();
    openProduct(productButton.dataset.openProduct,Number(productButton.dataset.index));
  }
});

document.addEventListener('DOMContentLoaded',() => {
  renderBrands();
  initFeaturedCarousel();
  renderCatalog();
  renderBrandPage();
  createProductDialog();
  updateCartCount();
  renderCart();

  const cartItems = document.getElementById('cartItems');
  cartItems?.addEventListener('click',handleCartActions);
  document.getElementById('checkoutForm')?.addEventListener('submit',sendOrder);
  document.querySelectorAll('input[name="payment"]').forEach(input => {
    input.addEventListener('change',() => setCardPaymentEnabled(input.value === 'card'));
  });
  if(document.getElementById('mockCardFields')){
    setCardPaymentEnabled(
      document.querySelector('input[name="payment"]:checked')?.value === 'card'
    );
  }
  document.getElementById('mockCardNumber')?.addEventListener('input',event => {
    const digits = event.currentTarget.value.replace(/\D/g,'').slice(0,19);
    event.currentTarget.value = digits.replace(/(.{4})/g,'$1 ').trim();
    const brand = identifyCardBrand(digits);
    document.getElementById('cardBrandStatus').textContent =
      brand ? `Marca detectada: ${brand}` : 'Selecciona una marca o usa un número de ejemplo.';
  });
  document.getElementById('mockCardExpiry')?.addEventListener('input',event => {
    const digits = event.currentTarget.value.replace(/\D/g,'').slice(0,4);
    event.currentTarget.value = digits.length > 2 ? `${digits.slice(0,2)}/${digits.slice(2)}` : digits;
  });
  document.querySelectorAll('[data-test-card]').forEach(button => {
    button.addEventListener('click',() => {
      document.getElementById('mockCardNumber').value =
        button.dataset.testCard.replace(/(.{4})/g,'$1 ').trim();
      document.getElementById('mockCardholder').value = 'CLIENTE DE PRUEBA';
      document.getElementById('mockCardExpiry').value =
        `12/${String(new Date().getFullYear() + 1).slice(-2)}`;
      document.getElementById('mockCardCvc').value = '123';
      document.getElementById('cardBrandStatus').textContent =
        `Marca detectada: ${button.dataset.testBrand}`;
      document.getElementById('cardValidationMessage').textContent = '';
    });
  });

  document.getElementById('checkoutForm')?.addEventListener('input',event => {
    if(event.target.closest('#customerFields')){
      document.getElementById('checkoutMessage').textContent = '';
    }
  });

  document.getElementById('checkoutForm')?.addEventListener('reset',() => {
    window.setTimeout(() => setCardPaymentEnabled(true),0);
  });

  window.addEventListener('storage',event => {
    if(event.key !== CART_STORAGE_KEY) return;
    cart.splice(0,cart.length,...readCart());
    updateCartCount();
    renderCart();
  });

  document.querySelectorAll('.primary-nav a').forEach(link => {
    if(link.pathname === window.location.pathname){
      link.setAttribute('aria-current','page');
    }
  });
});
