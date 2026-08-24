export const CATEGORIES = ['Todos', 'Para Ella', 'Para Él', 'Unisex']

export const PRODUCTS = [
  {
    id: 'ch-good-girl-blush',
    image: '/ch-good-girl-blush.jpeg',
    brand: 'Carolina Herrera',
    name: 'Good Girl Blush',
    category: 'Para Ella',
    family: 'Floral empolvado',
    sizes: [
      { label: '5mL', price: 65000 },
      { label: '10mL', price: 120000 },
    ],
    notes: {
      salida: 'Bergamota y mandarina.',
      corazon: 'Peonía y agua de rosas.',
      fondo: 'Vainilla y haba tonka.',
      review:
        'La versión más suave y femenina de la línea. Ligera, floral y con un toque empolvado. Perfecta para el día o climas cálidos, sin perder sofisticación.',
    },
  },
  {
    id: 'ch-very-good-girl',
    image: '/ch-very-good-girl.jpeg',
    brand: 'Carolina Herrera',
    name: 'Very Good Girl',
    category: 'Para Ella',
    family: 'Floral frutal',
    sizes: [
      { label: '5mL', price: 60000 },
      { label: '10mL', price: 110000 },
    ],
    notes: {
      salida: 'Grosella roja y lichi.',
      corazon: 'Rosa.',
      fondo: 'Vetiver y vainilla.',
      review:
        'Más moderna y chispeante que la original. Romántica, frutal y juguetona, mantiene el ADN de Good Girl pero con un giro más juvenil y menos oscuro.',
    },
  },
  {
    id: 'ch-good-girl',
    image: '/ch-good-girl.jpeg',
    brand: 'Carolina Herrera',
    name: 'Good Girl',
    category: 'Para Ella',
    family: 'Floral avainillado',
    sizes: [
      { label: '5mL', price: 55000 },
      { label: '10mL', price: 100000 },
    ],
    notes: {
      salida: 'Almendra, café, bergamota y limón.',
      corazon: 'Jazmín sambac, nardos, raíz de lirio y rosa de Bulgaria.',
      fondo: 'Haba tonka, cacao, vainilla, sándalo y canela.',
      review:
        'Ícono absoluto de sensualidad. Es dulce, profundo y misterioso; proyecta elegancia nocturna y poder femenino. Ideal para noches frías o eventos formales.',
    },
  },
  {
    id: 'xerjoff-erba-pura',
    image: '/xerjoff-erba-pura.jpeg',
    brand: 'Xerjoff',
    name: 'Erba Pura',
    category: 'Unisex',
    family: 'Frutal cremoso',
    sizes: [
      { label: '5mL', price: 100000 },
      { label: '10mL', price: 160000 },
    ],
    notes: {
      salida: 'Naranja, limón y bergamota de Sicilia.',
      corazon: 'Frutas mediterráneas.',
      fondo: 'Almizcle blanco, ámbar y vainilla.',
      review:
        'Una explosión de frutas con un fondo cremoso. Ultra lujoso, versátil y adictivo. Es luminoso pero con gran elegancia, ideal para destacar sin exagerar.',
    },
  },
  {
    id: 'versace-eros',
    image: '/versace-eros.jpeg',
    brand: 'Versace',
    name: 'Eros',
    category: 'Para Él',
    family: 'Fougère amaderado',
    sizes: [
      { label: '5mL', price: 50000 },
      { label: '10mL', price: 90000 },
    ],
    notes: {
      salida: 'Menta, manzana verde y limón.',
      corazon: 'Haba tonka, ambroxan y geranio.',
      fondo: 'Vainilla, vetiver, cedro y musgo de roble.',
      review:
        'Icónico y vibrante. Juvenil pero seductor, combina frescura con sensualidad oriental. Excelente proyección, ideal para citas o noches sociales.',
    },
  },
  {
    id: 'armani-stronger-with-you-intensely',
    image: '/armani-stronger-with-you-intensely.jpeg',
    brand: 'Emporio Armani',
    name: 'Stronger With You Intensely',
    category: 'Para Él',
    family: 'Oriental especiado',
    sizes: [
      { label: '5mL', price: 55000 },
      { label: '10mL', price: 95000 },
    ],
    notes: {
      salida: 'Pimienta rosa, enebro y violeta.',
      corazon: 'Toffee, canela, lavanda y salvia.',
      fondo: 'Vainilla, ámbar, haba tonka y gamuza.',
      review:
        'Dulce, cálido y carismático. Ideal para el frío o salidas nocturnas. Seductor pero con clase; deja una estela cremosa e inolvidable.',
    },
  },
  {
    id: 'pr-invictus-victory-elixir',
    image: '/pr-invictus-victory-elixir.jpeg',
    brand: 'Paco Rabanne',
    name: 'Invictus Victory Elixir',
    category: 'Para Él',
    family: 'Oriental amaderado',
    sizes: [
      { label: '5mL', price: 60000 },
      { label: '10mL', price: 95000 },
    ],
    notes: {
      salida: 'Cardamomo, incienso y lavanda.',
      corazon: 'Vainilla y haba tonka.',
      fondo: 'Ámbar y pachulí.',
      review:
        'Intenso, adictivo y poderoso. Funde dulzura oriental con toques amaderados oscuros. Perfume de energía dominante, ideal para ocasiones especiales.',
    },
  },
  {
    id: 'ysl-y-edp',
    image: '/ysl-y-edp.jpeg',
    brand: 'Yves Saint Laurent',
    name: 'Y Eau de Parfum',
    category: 'Para Él',
    family: 'Aromático fougère',
    sizes: [
      { label: '5mL', price: 60000 },
      { label: '10mL', price: 95000 },
    ],
    notes: {
      salida: 'Manzana, jengibre y bergamota.',
      corazon: 'Salvia, enebro y geranio.',
      fondo: 'Vetiver, cedro, haba tonka y olíbano.',
      review:
        'Limpio, fresco y moderno, con un toque sexy de elegancia casual. Excelente para uso diario o eventos profesionales; equilibrio entre juventud y madurez.',
    },
  },
  {
    id: 'valentino-born-in-roma-intense',
    image: '/valentino-born-in-roma-intense.jpeg',
    brand: 'Valentino',
    name: 'Born in Roma Intense',
    category: 'Para Él',
    family: 'Amaderado aromático',
    sizes: [
      { label: '5mL', price: 70000 },
      { label: '10mL', price: 100000 },
    ],
    notes: {
      salida: 'Vainilla bourbon.',
      corazon: 'Lavanda.',
      fondo: 'Vetiver.',
      review:
        'Rebelde y sofisticado. La vainilla se mezcla con notas aromáticas y un fondo amaderado que lo hacen magnético. Muy versátil, de día o de noche.',
    },
  },
  {
    id: 'dior-sauvage-elixir',
    image: '/dior-sauvage-elixir.jpeg',
    brand: 'Dior',
    name: 'Sauvage Elixir',
    category: 'Para Él',
    family: 'Amaderado especiado',
    sizes: [
      { label: '5mL', price: 95000 },
      { label: '10mL', price: 145000 },
    ],
    notes: {
      salida: 'Canela, nuez moscada, cardamomo y pomelo.',
      corazon: 'Lavanda.',
      fondo: 'Sándalo, ámbar, regaliz, pachulí y vetiver de Haití.',
      review:
        'Poder absoluto. Aromático, especiado y dominante. Proyección intensa y durabilidad sobresaliente. Perfume de presencia; transmite autoridad y confianza.',
    },
  },
]
