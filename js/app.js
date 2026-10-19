/* =========================
   DATOS DE LA TIENDA
========================= */

const BRANDS = [

  {
    id:'adidas',
    name:'Adidas',
    color:'#111827',
    dark:'#111111',

    shoes:[

      {
        name:'Adidas Ultraboost 22',
        model:'Modelo GX5462',
        price:145
      },

      {
        name:'Adidas Superstar Classic',
        model:'Modelo EG4958',
        price:85
      },

      {
        name:'Adidas Gazelle Retro',
        model:'Modelo BB5478',
        price:95
      },

      {
        name:'Adidas Forum Low',
        model:'Modelo FY7757',
        price:90
      }

    ]

  },

  {
    id:'nike',
    name:'Nike',
    color:'#111827',
    dark:'#111111',

    shoes:[

      {
        name:'Nike Air Max 270',
        model:'Modelo AH8050',
        price:150
      },

      {
        name:"Nike Air Force 1 '07",
        model:'Modelo CW2288',
        price:110
      },

      {
        name:'Nike Pegasus 40',
        model:'Modelo DV3853',
        price:120
      },

      {
        name:'Nike Dunk Low Retro',
        model:'Modelo DD1391',
        price:125
      }

    ]

  },

  {
    id:'puma',
    name:'Puma',
    color:'#111827',
    dark:'#111111',

    shoes:[

      {
        name:'Puma RS-X Efekt',
        model:'Modelo 39390901',
        price:100
      },

      {
        name:'Puma Suede Classic XXI',
        model:'Modelo 374915',
        price:70
      },

      {
        name:'Puma Cali Star',
        model:'Modelo 37453301',
        price:85
      },

      {
        name:'Puma Future Rider',
        model:'Modelo 37461601',
        price:80
      }

    ]

  },

  {
    id:'vans',
    name:'Vans',
    color:'#111827',
    dark:'#111111',

    shoes:[

      {
        name:'Vans Old Skool',
        model:'Modelo VN000D3H',
        price:65
      },

      {
        name:'Vans Sk8-Hi',
        model:'Modelo VN000D5I',
        price:70
      },

      {
        name:'Vans Authentic',
        model:'Modelo VN000EE3',
        price:55
      },

      {
        name:'Vans Era',
        model:'Modelo VN0A4BV4',
        price:60
      }

    ]

  },

  {
    id:'newbalance',
    name:'New Balance',
    color:'#c8102e',
    dark:'#1c1c1c',

    shoes:[

      {
        name:'New Balance 550',
        model:'Modelo BB550WT1',
        price:120
      },

      {
        name:'New Balance 574 Core',
        model:'Modelo ML574EVG',
        price:85
      },

      {
        name:'New Balance 990v6',
        model:'Modelo M990GL6',
        price:190
      },

      {
        name:'New Balance 2002R',
        model:'Modelo M2002RDC',
        price:140
      }

    ]

  },

  {
    id:'jordan',
    name:'Jordan',
    color:'#b91c1c',
    dark:'#0d0d0d',

    shoes:[

      {
        name:'Air Jordan 1 Retro High OG',
        model:'Modelo 555088',
        price:180
      },

      {
        name:'Air Jordan 4 Retro',
        model:'Modelo DH6927',
        price:210
      },

      {
        name:'Air Jordan 11 Retro',
        model:'Modelo CT8012',
        price:220
      },

      {
        name:'Air Jordan 3 Retro',
        model:'Modelo CT8532',
        price:200
      }

    ]

  },

  {
    id:'reebok',
    name:'Reebok',
    color:'#1d4ed8',
    dark:'#101010',

    shoes:[

      {
        name:'Reebok Classic Leather',
        model:'Modelo 49797',
        price:70
      },

      {
        name:'Reebok Club C 85',
        model:'Modelo AR0456',
        price:70
      },

      {
        name:'Reebok Nano X3',
        model:'Modelo 100072947',
        price:125
      },

      {
        name:'Reebok Zig Kinetica',
        model:'Modelo FZ1233',
        price:95
      }

    ]

  },

  {
    id:'dc',
    name:'DC Shoes',
    color:'#111827',
    dark:'#111111',

    shoes:[

      {
        name:'DC Shoes Pure High-Top',
        model:'Modelo ADYS400043',
        price:70
      },

      {
        name:'DC Shoes Kalis Vulc',
        model:'Modelo ADYS300624',
        price:65
      },

      {
        name:'DC Shoes Manteca 4',
        model:'Modelo ADYS100647',
        price:75
      },

      {
        name:'DC Shoes Legacy 98',
        model:'Modelo ADYS100562',
        price:60
      }

    ]

  },

  {
    id:'converse',
    name:'Converse',
    color:'#111827',
    dark:'#c8102e',

    shoes:[

      {
        name:'Converse Chuck Taylor All Star',
        model:'Modelo M9160',
        price:60
      },

      {
        name:'Converse Chuck 70',
        model:'Modelo 162050C',
        price:85
      },

      {
        name:'Converse One Star',
        model:'Modelo 162595C',
        price:70
      },

      {
        name:'Converse Run Star Hike',
        model:'Modelo 166800C',
        price:100
      }

    ]

  }

];


const SIZES =
[
  7,
  7.5,
  8,
  8.5,
  9,
  9.5
];


const STORE_EMAIL =
'shoes.el.salvador@gmail.com';


const WHATSAPP_NUMBER =
'50369887899';


let cart = [];
let currentShoe = null;
let selectedSize = null;
let selectedPayTab = 'card';
let currentPageId = 'home';
let featuredProducts = [];
let featuredIndex = 0;
let featuredTimer = null;
let featuredPaused = false;

const FEATURED_INTERVAL = 4500;


/* =========================
   DIBUJO DEL ZAPATO
========================= */

const PRODUCT_IMAGE = 'img/webp/product-placeholder.webp';

const BRAND_LOGOS = {
  adidas:'img/webp/logos/Adidas_logo.webp',
  nike:'img/webp/logos/Nike_logo.webp',
  puma:'img/webp/logos/Puma_logo.webp',
  vans:'img/webp/logos/Vans_logo.webp',
  newbalance:'img/webp/logos/New_Balance_logo.webp',
  jordan:'img/webp/logos/Jordan_logo.webp',
  converse:'img/webp/logos/Converse_logo.webp',
  reebok:'img/webp/logos/Reebok_logo.webp',
  dc:'img/webp/logos/DC_logo.webp'
};

const PRODUCT_IMAGES = {
  adidas: [
    "img/webp/catalog/adidas-ultraboost-22.webp",
    "img/webp/catalog/adidas-superstar-classic.webp",
    "img/webp/catalog/adidas-gazelle-retro.webp",
    "img/webp/catalog/adidas-forum-low.webp"
  ],
  nike: [
    "img/webp/catalog/W+NIKE+AIR+MAX+270.webp",
    "img/webp/catalog/AIR+FORCE+1+'07.webp",
    "img/webp/catalog/New-listing-Nike-Air-Zoom.webp",
    "img/webp/catalog/buty-nike-dunk-low-retro.webp"
  ],
  puma: [
    "img/webp/catalog/puma rs-x.webp",
    "img/webp/catalog/Suede-Classic-XXI-Trainers.webp",
    "img/webp/catalog/cali star.webp",
    "img/webp/catalog/future rider.webp"
  ],
  vans: [
    "img/webp/catalog/Vans Old Skool.webp",
    "img/webp/catalog/Vans Sk8-Hi.webp",
    "img/webp/catalog/Vans Authentic.webp",
    "img/webp/catalog/vans era.webp"
  ],
  newbalance: [
    "img/webp/catalog/New Balance 550.webp",
    "img/webp/catalog/574 core lace.webp",
    "img/webp/catalog/New Balance 990v6.webp",
    "img/webp/catalog/New Balance 2002R.webp"
  ],
  jordan: [
    "img/webp/catalog/Air Jordan 1 Retro High OG.webp",
    "img/webp/catalog/Air Jordan 4 Retro.webp",
    "img/webp/catalog/Air Jordan 11 Retro.webp",
    "img/webp/catalog/Air Jordan 3 Retro.webp"
  ],
  reebok: [
    "img/webp/catalog/reebok classic leather.webp",
    "img/webp/catalog/Reebok Club C 85.webp",
    "img/webp/catalog/Reebok Nano X3.webp",
    "img/webp/catalog/Reebok Zig Kinetica.webp"
  ],
  dc: [
    "img/webp/catalog/DC Shoes Pure High-Top.webp",
    "img/webp/catalog/DC Shoes Kalis Vulc.webp",
    "img/webp/catalog/DC Shoes Manteca 4.webp",
    "img/webp/catalog/DC Shoes Legacy 98.webp"
  ],
  converse: [
    "img/webp/catalog/Converse Chuck Taylor All Star.webp",
    "img/webp/catalog/Converse Chuck 70.webp",
    "img/webp/catalog/Converse One Star.webp",
    "img/webp/catalog/Converse Run Star Hike.webp"
  ]
};

function getProductImage(brandId, shoeIndex){
  const brandImages = PRODUCT_IMAGES[brandId];
  return brandImages && brandImages[shoeIndex]
    ? brandImages[shoeIndex]
    : PRODUCT_IMAGE;
}

function shoeSVG(primary,secondary,image=PRODUCT_IMAGE,alt='Zapato Shoes_sv'){

  return `

    <img
      class="shoe-product-image"
      src="${image}"
      alt="${alt}"
      width="912"
      height="1136"
      decoding="async"
      loading="lazy"
      onerror="this.onerror=null;this.src='${PRODUCT_IMAGE}'">

  `;

}

/* =========================
   MARCAS
========================= */

function renderBrandGrid(){

  const grid =
    document.getElementById('brandGrid');

  document
    .getElementById('brandCount')
    .textContent =
      `${BRANDS.length} marcas disponibles`;

  grid.innerHTML =
    BRANDS.map(b => `

      <button
        class="brand-tile"
        style="--brand-color:${b.color}"
        aria-label="Ver catálogo de ${b.name}"
        onclick="showPage('brand-${b.id}')">

        <div
          class="brand-mark">

          ${BRAND_LOGOS[b.id]
            ? `<img
                class="brand-logo"
                src="${BRAND_LOGOS[b.id]}"
                alt="Logo de ${b.name}"
                loading="lazy"
                decoding="async">`
            : `<span class="brand-wordmark">${b.name}</span>`}

        </div>

        <div class="tag">
          Ver catálogo
        </div>

      </button>

    `).join('');

}


function renderFeaturedProducts(){

  featuredProducts =
    BRANDS.map(brand => ({
      brand,
      shoe:brand.shoes[0],
      shoeIndex:0
    }));

  document
    .getElementById('featuredIndicators')
    .innerHTML =
      featuredProducts.map((product,productIndex) => `

        <button
          class="featured-indicator"
          type="button"
          aria-label="Mostrar ${product.shoe.name} de ${product.brand.name}"
          aria-current="${productIndex === featuredIndex}"
          onclick="showFeatured(${productIndex});restartFeaturedCarousel()">
        </button>

      `).join('');

  const carousel =
    document.getElementById('featuredCarousel');

  carousel.addEventListener(
    'pointerenter',
    stopFeaturedCarousel
  );

  carousel.addEventListener(
    'pointerleave',
    startFeaturedCarousel
  );

  carousel.addEventListener(
    'focusin',
    stopFeaturedCarousel
  );

  carousel.addEventListener(
    'focusout',
    event => {
      if(!carousel.contains(event.relatedTarget)){
        startFeaturedCarousel();
      }
    }
  );

  carousel.addEventListener(
    'keydown',
    event => {
      if(event.key === 'ArrowLeft'){
        event.preventDefault();
        navigateFeatured(-1);
      }else if(event.key === 'ArrowRight'){
        event.preventDefault();
        navigateFeatured(1);
      }
    }
  );

  document.addEventListener(
    'visibilitychange',
    () => {
      if(document.hidden){
        stopFeaturedCarousel();
      }else{
        startFeaturedCarousel();
      }
    }
  );

  showFeatured(0);
  startFeaturedCarousel();

}


function showFeatured(index){

  if(featuredProducts.length === 0){
    return;
  }

  featuredIndex =
    (index + featuredProducts.length) %
    featuredProducts.length;

  const { brand, shoe, shoeIndex } =
    featuredProducts[featuredIndex];

  const slide =
    document.getElementById('featuredSlide');

  slide.innerHTML = `

    <div class="featured-image">
      ${shoeSVG(
        brand.color,
        brand.dark,
        getProductImage(brand.id,shoeIndex),
        `${shoe.name} de ${brand.name}`
      )}
    </div>

    <div class="featured-copy">

      <span class="featured-brand">
        ${brand.name} · Selección destacada
      </span>

      <h3 class="featured-name">
        ${shoe.name}
      </h3>

      <span class="featured-price">
        $${shoe.price.toFixed(2)}
      </span>

      <button
        class="featured-buy"
        type="button"
        onclick="openDetail('${brand.id}',${shoeIndex})">
        Ver tallas y comprar
      </button>

    </div>

  `;

  slide.setAttribute(
    'aria-label',
    `${shoe.name} de ${brand.name}`
  );

  document
    .querySelectorAll('.featured-indicator')
    .forEach((indicator,productIndex) => {
      indicator.setAttribute(
        'aria-current',
        String(productIndex === featuredIndex)
      );
    });

}


function navigateFeatured(direction){

  showFeatured(featuredIndex + direction);
  restartFeaturedCarousel();

}


function toggleFeaturedCarousel(){

  featuredPaused = !featuredPaused;

  const button =
    document.getElementById('featuredToggle');

  button.textContent =
    featuredPaused
      ? 'Reanudar'
      : 'Pausar';

  button.setAttribute(
    'aria-label',
    featuredPaused
      ? 'Reanudar carrusel'
      : 'Pausar carrusel'
  );

  if(featuredPaused){
    stopFeaturedCarousel();
  }else{
    startFeaturedCarousel();
  }

}


function stopFeaturedCarousel(){

  if(featuredTimer !== null){
    window.clearInterval(featuredTimer);
    featuredTimer = null;
  }

}


function startFeaturedCarousel(){

  stopFeaturedCarousel();

  if(
    featuredPaused ||
    document.hidden ||
    document
      .getElementById('featuredCarousel')
      .matches(':hover, :focus-within') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ){
    return;
  }

  featuredTimer =
    window.setInterval(
      () => showFeatured(featuredIndex + 1),
      FEATURED_INTERVAL
    );

}


function restartFeaturedCarousel(){

  startFeaturedCarousel();

}


/* =========================
   PÁGINAS DE MARCAS
========================= */

function renderBrandPages(){

  const container =
    document.getElementById('brandPagesContainer');

  container.innerHTML =
    BRANDS.map(b => `

      <section
        class="page"
        id="page-brand-${b.id}">

        <div
          class="brand-banner"
          style="--brand-color:${b.color}">

          <h2>
            ${b.name}
          </h2>

          <button
            class="back-btn"
            onclick="showPage('home')">

            ← Todas las marcas

          </button>

        </div>

        <div class="shoe-grid">

          ${b.shoes.map((s,i) => `

            <div class="shoe-card">

              <div class="shoe-thumb">

                ${shoeSVG(
                  b.color,
                  b.dark,
                  getProductImage(b.id,i)
                )}

              </div>

              <p class="shoe-name">
                ${s.name}
              </p>

              <p class="shoe-model">
                ${s.model}
              </p>

              <div class="shoe-price">
                $${s.price.toFixed(2)}
              </div>

              <button
                class="view-btn"
                onclick="openDetail('${b.id}',${i})">

                Ver tallas y comprar

              </button>

            </div>

          `).join('')}

        </div>

      </section>

    `).join('');

}


/* =========================
   NAVEGACIÓN
========================= */

function showPage(pageId,updateHistory=true){

  const target =
    document.getElementById(
      'page-' + pageId
    );

  if(!target){
    return;
  }

  document
    .querySelectorAll('.page')
    .forEach(
      p =>
      p.classList.remove('active')
    );

  target.classList.add('active');
  currentPageId = pageId;

  document
    .getElementById('detailOverlay')
    .classList.remove('active');

  currentShoe = null;
  selectedSize = null;

  if(updateHistory){
    const route = getPageRoute(pageId);

    if(window.location.hash !== `#${route}`){
      window.history.pushState(null,'',`#${route}`);
    }
  }

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });

}


function getPageRoute(pageId){

  if(pageId === 'home'){
    return 'home';
  }

  return `brand/${pageId.replace(/^brand-/,'')}`;

}


function restoreRoute(){

  const route =
    window.location.hash.slice(1);

  if(!route || route === 'home'){
    showPage('home',false);
    return;
  }

  const brandRoute =
    route.match(/^brand\/([a-z0-9-]+)$/) ||
    route.match(/^brand-([a-z0-9-]+)$/);

  if(brandRoute){
    const brandExists =
      BRANDS.some(brand => brand.id === brandRoute[1]);

    if(brandExists){
      showPage(`brand-${brandRoute[1]}`,false);
      return;
    }
  }

  const productRoute =
    route.match(/^product\/([a-z0-9-]+)\/(\d+)(?:\?from=([a-z0-9-]+))?$/);

  if(productRoute){
    const [,brandId,indexText,requestedPage] =
      productRoute;
    const brand =
      BRANDS.find(item => item.id === brandId);
    const shoeIndex =
      Number(indexText);
    const pageExists =
      requestedPage === 'home' ||
      BRANDS.some(item => `brand-${item.id}` === requestedPage);

    if(brand && brand.shoes[shoeIndex]){
      const pageId =
        pageExists
          ? requestedPage
          : `brand-${brandId}`;

      showPage(pageId,false);
      openDetail(brandId,shoeIndex,false);
      return;
    }
  }

  showPage('home',false);
  window.history.replaceState(
    null,
    '',
    `${window.location.pathname}${window.location.search}#home`
  );

}


/* =========================
   DETALLE
========================= */

function openDetail(
  brandId,
  shoeIndex,
  updateHistory = true
){

  const brand =
    BRANDS.find(
      b => b.id === brandId
    );

  const shoe =
    brand.shoes[shoeIndex];

  currentShoe = {
    brandId,
    shoeIndex
  };

  selectedSize = null;

  document
    .getElementById('detailThumb')
    .innerHTML =
      shoeSVG(
        brand.color,
        brand.dark,
        getProductImage(brandId,shoeIndex)
      );

  document
    .getElementById('detailName')
    .textContent =
      shoe.name;

  document
    .getElementById('detailModel')
    .textContent =
      shoe.model +
      ' · ' +
      brand.name;

  document
    .getElementById('detailPrice')
    .textContent =
      '$' +
      shoe.price.toFixed(2);

  const sizeGrid =
    document.getElementById(
      'sizeGrid'
    );

  sizeGrid.innerHTML =
    SIZES.map(sz => `

      <button
        class="size-btn"
        onclick="selectSize(${sz},this)">

        ${sz}

      </button>

    `).join('');

  const btn =
    document.getElementById(
      'addCartBtn'
    );

  btn.disabled = true;

  btn.textContent =
    'Selecciona una talla';

  document
    .getElementById(
      'detailOverlay'
    )
    .classList.add('active');

  if(updateHistory){
    const route =
      `product/${brandId}/${shoeIndex}?from=${currentPageId}`;

    if(window.location.hash !== `#${route}`){
      window.history.pushState(null,'',`#${route}`);
    }
  }

}


function closeDetail(){

  document
    .getElementById(
      'detailOverlay'
    )
    .classList.remove('active');

  currentShoe = null;
  selectedSize = null;

  window.history.replaceState(
    null,
    '',
    `#${getPageRoute(currentPageId)}`
  );

}


function selectSize(sz,el){

  selectedSize = sz;

  document
    .querySelectorAll(
      '.size-btn'
    )
    .forEach(
      b =>
      b.classList.remove(
        'selected'
      )
    );

  el.classList.add('selected');

  const btn =
    document.getElementById(
      'addCartBtn'
    );

  btn.disabled = false;

  btn.textContent =
    'Agregar al carrito — Talla ' +
    sz;

}


function addToCart(){

  if(
    !currentShoe ||
    selectedSize === null
  )
    return;

  const brand =
    BRANDS.find(
      b =>
      b.id === currentShoe.brandId
    );

  const shoe =
    brand.shoes[
      currentShoe.shoeIndex
    ];

  cart.push({

    brandId:
      brand.id,

    brandName:
      brand.name,

    brandColor:
      brand.color,

    brandDark:
      brand.dark,

    image:
      getProductImage(brand.id,currentShoe.shoeIndex),

    name:
      shoe.name,

    model:
      shoe.model,

    price:
      shoe.price,

    size:
      selectedSize,

    cartId:
      Date.now() +
      Math.random()

  });

  renderCart();

  closeDetail();

  toggleCart(true);

}


/* =========================
   CARRITO
========================= */

function renderCart(){

  const list =
    document.getElementById(
      'cartItemsList'
    );

  const countEl =
    document.getElementById(
      'cartCount'
    );

  const totalEl =
    document.getElementById(
      'cartTotal'
    );

  const subtotalEl =
    document.getElementById(
      'cartSubtotal'
    );

  const discountEl =
    document.getElementById(
      'cartDiscount'
    );

  const discountInfo =
    document.getElementById(
      'discountInfo'
    );

  const checkoutBtn =
    document.getElementById(
      'checkoutBtn'
    );

  countEl.textContent =
    cart.length;

  if(cart.length === 0){

    list.innerHTML =
      '<div class="cart-empty">' +
      'Tu carrito está vacío.<br>' +
      'Elige una marca y agrega tu par favorito.' +
      '</div>';

    checkoutBtn.disabled = true;

  }else{

    list.innerHTML =
      cart.map(
        item => `

          <div class="cart-item">

            <div class="ci-thumb">

              ${shoeSVG(
                item.brandColor,
                item.brandDark,
                item.image
              )}

            </div>

            <div class="ci-info">

              <p class="ci-name">
                ${item.name}
              </p>

              <p class="ci-meta">
                ${item.brandName}
                · Talla ${item.size}
              </p>

              <div class="ci-price">
                $${item.price.toFixed(2)}
              </div>

              <button
                class="ci-remove"
                onclick="removeFromCart('${item.cartId}')">

                Quitar

              </button>

            </div>

          </div>

        `
      ).join('');

    checkoutBtn.disabled = false;

  }

  const subtotal =
    cart.reduce(
      (sum,item) =>
      sum + item.price,
      0
    );

  let discount = 0;

  if(cart.length >= 5){

    discount =
      subtotal * 0.50;

    discountInfo.innerHTML =
      '<span class="discount-badge">' +
      '🔥 5+ ZAPATOS' +
      '</span><br>' +

      '<strong>Tarjeta:</strong> 50% de descuento · ' +

      '<strong>Efectivo:</strong> 15% de descuento';

  }else{

    const faltan =
      5 - cart.length;

    discountInfo.textContent =
      'Agrega ' +
      faltan +
      ' zapato(s) más para activar las ofertas.';

  }

  const totalCard =
    subtotal - discount;

  subtotalEl.textContent =
    '$' +
    subtotal.toFixed(2);

  discountEl.textContent =
    cart.length >= 5
      ? '-$' + discount.toFixed(2)
      : '$0.00';

  totalEl.textContent =
    '$' +
    (
      cart.length >= 5
        ? totalCard
        : subtotal
    ).toFixed(2);

  updatePaymentTotals();

}


function updatePaymentTotals(){

  const subtotal =
    cart.reduce(
      (sum,item) =>
      sum + item.price,
      0
    );

  let cardDiscount = 0;

  let cashDiscount = 0;

  if(cart.length >= 5){

    cardDiscount =
      subtotal * 0.50;

    cashDiscount =
      subtotal * 0.15;

  }

  const cardTotal =
    subtotal -
    cardDiscount;

  const cashTotal =
    subtotal -
    cashDiscount;

  document
    .getElementById(
      'cardTotalDisplay'
    )
    .textContent =
      '$' +
      cardTotal.toFixed(2);

  document
    .getElementById(
      'cashTotalDisplay'
    )
    .textContent =
      '$' +
      cashTotal.toFixed(2);

}


function removeFromCart(cartId){

  cart =
    cart.filter(
      i =>
      String(i.cartId) !==
      String(cartId)
    );

  renderCart();

}


function toggleCart(open){

  document
    .getElementById(
      'cartDrawer'
    )
    .classList.toggle(
      'active',
      open
    );

  document
    .getElementById(
      'cartOverlay'
    )
    .classList.toggle(
      'active',
      open
    );

}


/* =========================
   PAGO
========================= */

function openCheckout(){

  if(cart.length === 0)
    return;

  document
    .getElementById(
      'checkoutBody'
    )
    .style.display =
      'block';

  document
    .getElementById(
      'successBox'
    )
    .style.display =
      'none';

  selectPayTab('card');

  document
    .getElementById(
      'checkoutOverlay'
    )
    .classList.add(
      'active'
    );

  toggleCart(false);

}


function closeCheckout(){

  document
    .getElementById(
      'checkoutOverlay'
    )
    .classList.remove(
      'active'
    );

}


function selectPayTab(tab){

  selectedPayTab =
    tab;

  document
    .getElementById(
      'tabCard'
    )
    .classList.toggle(
      'selected',
      tab === 'card'
    );

  document
    .getElementById(
      'tabCash'
    )
    .classList.toggle(
      'selected',
      tab === 'cash'
    );

  document
    .getElementById(
      'formCard'
    )
    .classList.toggle(
      'active',
      tab === 'card'
    );

  document
    .getElementById(
      'formCash'
    )
    .classList.toggle(
      'active',
      tab === 'cash'
    );

  updatePaymentTotals();

}


/* =========================
   RESUMEN
========================= */

function orderSummaryText(){

  const subtotal =
    cart.reduce(
      (sum,i) =>
      sum + i.price,
      0
    );

  const quantity =
    cart.length;

  const lines =
    cart.map(
      i =>
      `- ${i.name} (${i.brandName}) · Talla ${i.size} · $${i.price.toFixed(2)}`
    );

  return {
    lines,
    subtotal,
    quantity
  };

}


/* =========================
   WHATSAPP
========================= */

function buildWhatsAppMessage(paymentMethod, customer = {}){

  const { lines, subtotal, quantity } = orderSummaryText();
  const rate = paymentMethod === 'Tarjeta' ? 0.50 : 0.15;
  const discount = quantity >= 5 ? subtotal * rate : 0;
  const total = subtotal - discount;

  return `🛍️ *NUEVO PEDIDO - SHOES_SV*

👟 *PRODUCTOS:*
${lines.join('\n')}

📦 *Cantidad de zapatos:* ${quantity}
💰 *Subtotal:* $${subtotal.toFixed(2)}
🏷️ *Descuento:* -$${discount.toFixed(2)}
💵 *TOTAL:* $${total.toFixed(2)}
💳 *Método de pago:* ${paymentMethod}

👤 *DATOS DEL CLIENTE:*
${customer.name ? `Nombre: ${customer.name}\n` : ''}${customer.email ? `Correo: ${customer.email}\n` : ''}${customer.address ? `Dirección: ${customer.address}\n` : ''}${customer.phone ? `Teléfono: ${customer.phone}\n` : ''}
¡Gracias por comprar en Shoes_sv!`;
}

function openWhatsAppOrder(message, existingWindow = null){
  const whatsappURL =
    'https://wa.me/' + WHATSAPP_NUMBER +
    '?text=' + encodeURIComponent(message);

  // Use a pre-opened window on async checkout to avoid popup blockers.
  if(existingWindow){
    existingWindow.location.href = whatsappURL;
  }else{
    window.open(whatsappURL, '_blank');
  }
}

/* =========================
   PAGO TARJETA
========================= */

function submitCard(e){

  e.preventDefault();

  const {
    subtotal,
    quantity
  } =
    orderSummaryText();

  let discount = 0;

  if(quantity >= 5){

    discount =
      subtotal * 0.50;

  }

  const total =
    subtotal -
    discount;

  const customerName =
    document.getElementById('cardName').value.trim();

  // No se envían ni se incluyen datos de tarjeta, vencimiento o CVV en WhatsApp.
  openWhatsAppOrder(
    buildWhatsAppMessage('Tarjeta', { name: customerName })
  );

  document
    .getElementById(
      'checkoutBody'
    )
    .style.display =
      'none';

  const box =
    document.getElementById(
      'successBox'
    );

  box.style.display =
    'block';

  document
    .getElementById(
      'successTitle'
    )
    .textContent =
      quantity >= 5
        ? '🎉 ¡50% de descuento aplicado!'
        : '¡Pago con tarjeta exitoso!';

  document
    .getElementById(
      'successMsg'
    )
    .innerHTML =

      quantity >= 5

      ?

      `Compraste <b>${quantity} zapatos</b>.<br>
       Subtotal: <b>$${subtotal.toFixed(2)}</b><br>
       Descuento del 50%:
       <b>-$${discount.toFixed(2)}</b><br>
       Total a pagar:
       <b>$${total.toFixed(2)}</b><br><br>
       ¡Gracias por comprar en Shoes_sv!`

      :

      `Total pagado:
       <b>$${total.toFixed(2)}</b>.<br>
       Gracias por tu compra en Shoes_sv.`;

  cart = [];

  renderCart();

}


/* =========================
   PAGO EFECTIVO
========================= */

async function submitCash(e){

  e.preventDefault();

  const email =
    document
      .getElementById(
        'cashEmail'
      )
      .value
      .trim();

  const address =
    document
      .getElementById(
        'cashAddress'
      )
      .value
      .trim();

  const phone =
    document
      .getElementById(
        'cashPhone'
      )
      .value
      .trim();

  if(
    !email ||
    !address ||
    !phone
  ){

    alert(
      'Por favor completa todos los datos.'
    );

    return;

  }

  // Abrimos la pestaña desde el clic del usuario para evitar bloqueos del navegador.
  const whatsappWindow = window.open('about:blank', '_blank');

  const {
    lines,
    subtotal,
    quantity
  } =
    orderSummaryText();

  let discount = 0;

  if(quantity >= 5){

    discount =
      subtotal * 0.15;

  }

  const total =
    subtotal -
    discount;

  const whatsappMessage = buildWhatsAppMessage('Efectivo', {
    email,
    address,
    phone
  });
  openWhatsAppOrder(whatsappMessage, whatsappWindow);

  const subject =
    'Nuevo pedido - Shoes_sv';

  const body =
`Nuevo pedido de Shoes_sv

Productos:
${lines.join('\n')}

Cantidad de zapatos: ${quantity}

Subtotal:
$${subtotal.toFixed(2)}

Descuento:
$${discount.toFixed(2)}

Total:
$${total.toFixed(2)}

Datos del cliente:
Correo: ${email}
Dirección: ${address}
Teléfono: ${phone}`;

  const button =
    document.querySelector(
      '#formCash .submit-pay'
    );

  if(button){

    button.disabled =
      true;

    button.textContent =
      'Enviando...';

  }

  try{

    const response =
      await fetch(
        'https://formsubmit.co/ajax/' +
        STORE_EMAIL,
        {
          method:'POST',

          headers:{
            'Content-Type':
              'application/json',

            'Accept':
              'application/json'
          },

          body:
            JSON.stringify({

              _subject:
                subject,

              _template:
                'table',

              _captcha:
                'false',

              _replyto:
                email,

              customer_email:
                email,

              address:
                address,

              phone:
                phone,

              quantity:
                quantity,

              subtotal:
                '$' +
                subtotal.toFixed(2),

              discount:
                '-$' +
                discount.toFixed(2),

              order:
                lines.join('\n'),

              total:
                '$' +
                total.toFixed(2),

              message:
                body

            })

        }

      );

    const result =
      await response.json();

    if(
      !response.ok ||
      result.success === false
    ){

      throw new Error(
        'No se pudo enviar el pedido.'
      );

    }

    document
      .getElementById(
        'checkoutBody'
      )
      .style.display =
      'none';

    const box =
      document.getElementById(
        'successBox'
      );

    box.style.display =
      'block';

    document
      .getElementById(
        'successTitle'
      )
      .textContent =
      quantity >= 5
        ? '🎉 ¡15% de descuento aplicado!'
        : '¡Pedido enviado correctamente!';

    document
      .getElementById(
        'successMsg'
      )
      .innerHTML =

        quantity >= 5

        ?

        `Compraste <b>${quantity} zapatos</b>.<br>
         Subtotal: <b>$${subtotal.toFixed(2)}</b><br>
         Descuento del 15%:
         <b>-$${discount.toFixed(2)}</b><br>
         Total a pagar:
         <b>$${total.toFixed(2)}</b>.<br><br>
         Tu pedido fue enviado correctamente a
         <b>${STORE_EMAIL}</b>.<br><br>
         📱 Se abrió WhatsApp con el pedido preparado para el vendedor. Pulsa <b>Enviar</b> para entregarlo.`

        :

        `Tu pedido por
         <b>$${total.toFixed(2)}</b>
         fue enviado correctamente a
         <b>${STORE_EMAIL}</b>.<br><br>
         📱 Se abrió WhatsApp con el pedido preparado para el vendedor. Pulsa <b>Enviar</b> para entregarlo.`;

    cart = [];

    renderCart();

  }catch(error){

    console.error(error);

    if(button){

      button.disabled =
        false;

      button.textContent =
        'Confirmar pedido en efectivo';

    }

    alert(
      'No se pudo enviar automáticamente el pedido. ' +
      'Verifica que el correo de la tienda haya sido activado en FormSubmit.'
    );

  }

}


/* =========================
   INICIAR TIENDA
========================= */

renderBrandGrid();

renderFeaturedProducts();

renderBrandPages();

renderCart();

window.addEventListener('popstate',restoreRoute);

restoreRoute();
