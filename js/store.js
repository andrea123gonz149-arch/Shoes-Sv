/* Datos del catálogo, imágenes y contacto de Shoes_sv. */

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

const PRODUCT_IMAGE = 'img/webp/logos/Shoes-SV-Icon.webp';

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
