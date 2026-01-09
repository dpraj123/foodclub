const BANNER_URL =
  'https://assets.box8.co.in/horizontal-rectangle/web/banner/2516';

export const TOP_OFFERS = [
  {
    id: '1',
    title: 'Value Fun Pizzas',
    price: '₹99',
    image: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2396',
  },
  {
    id: '2',
    title: '99 Store',
    price: '₹99',
    image: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2390',
  },
  {
    id: '3',
    title: "What's New",
    price: '₹99',
    image: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2483',
  },
  {
    id: '4',
    title: 'Protein Meals',
    price: '₹139',
    image: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2397',
  },
  {
    id: '5',
    title: 'Happy Hours',
    price: '₹99',
    image: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2400',
  },
];

export const CATEGORIES = [
  {
    id: 'c1',
    title: 'Pizza',
    img: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2504',
  },
  {
    id: 'c2',
    title: 'Daily Meal',
    img: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2506',
  },
  {
    id: 'c3',
    title: 'Thali',
    img: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2505',
  },
  {
    id: 'c4',
    title: 'Rolls',
    img: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2501',
  },
  {
    id: 'c5',
    title: 'Biryani',
    img: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2503',
  },
  {
    id: 'c6',
    title: 'Bowl',
    img: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2500',
  },
  {
    id: 'c7',
    title: 'ThinCrust',
    img: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2498',
  },
  {
    id: 'c8',
    title: 'Light Meal',
    img: 'https://assets.box8.co.in/horizontal-rectangle/web/banner/2507',
  },
];
export const RESTAURANTS = [

  {
    id: 'r2',
    name: 'Burger Junction',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349',
    rating: 4.3,
    time: '20–25 min',
    cuisines: 'Burger, Fries',
    price: '₹180 for one',
    offer: '30% OFF',
  }, {
    id: 'r1',
    name: 'Italian Pizza Hub',
    image:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    rating: 4.5,
    time: '25–30 min',
    cuisines: 'Pizza, Burger, Fast Food',
    price: '₹200 for one',
    offer: '40% OFF',
  },
  {
    id: 'r3',
    name: 'Biryani Palace',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349',
    rating: 4.6,
    time: '30–35 min',
    cuisines: 'Biryani, North Indian',
    price: '₹250 for one',
    offer: '50% OFF',
  },
];

//offers screen
const TOP_CHIPS = ['All Offers', 'Flat OFF', 'Payment Partners'];

const PROMOS = [
  {
    id: 'p1',
    titleTop: 'For New Users',
    titleMain: 'Flat ₹150 OFF on\nfirst 3 orders',
    code: 'WELCOME3',
  },
  {
    id: 'p2',
    titleTop: 'For All Users',
    titleMain: 'Get Free Delivery',
    code: 'FREEDEL',
  },
  {
    id: 'p3',
    titleTop: 'For All Users',
    titleMain: 'Flat 50% OFF\nupto ₹100',
    code: 'EC50',
  },
];

//cart screeen
const mockRecommendations = [
  {
    id: 'rec1',
    name: 'Choco Lava Cake',
    price: 99,
    image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8430',
    veg: true,
  },
  {
    id: 'rec2',
    name: 'Masala Lemonade [200 ml]',
    price: 29,
    image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8431',
    veg: true,
  },
  {
    id: 'rec3',
    name: 'Death By Choc [BELGIUM]',
    price: 99,
    image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8432',
    veg: true,
  },
];




export type CustomizationOption = {
  id: string;
  name: string;
  price: number;
  ingredients?: string;
  image?: string; // Optional for icons
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  veg: boolean;
  customizationConfig?: CustomizationGroup[];
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
};

export type CustomizationGroup = {
  id: string;
  title: string;
  required: boolean;
  type: 'radio' | 'checkbox';
  defaultOptionId?: string; // Optional: Pre-select this option by default
  options: CustomizationOption[];
};

export type CustomizationSelection = {
  groupId: string;
  options: CustomizationOption[]; // Array to support multi (checkbox)
};

const commonAddOns: CustomizationOption[] = [
  { id: 'mini_aloo_samosa', name: 'Mini Aloo Samosa [Pack of 3]', price: 39 },
  { id: 'thums_up', name: 'Thums up [250 ml]', price: 20 },
  { id: 'coke_zero', name: 'Coke Zero [250 ml]', price: 20 },
  { id: 'sprite', name: 'Sprite [250 ml]', price: 20 },
  { id: 'masala_raita', name: 'Masala Raita', price: 25 },
  { id: 'masala_lemonade', name: 'Masala Lemonade', price: 20 },
  { id: 'classic_masala_chaas', name: 'Classic Masala Chaas [200 ml]', price: 25 },
  { id: 'punjabi_lassi', name: 'Punjabi Lassi [200 ml]', price: 49 },
];

const vegHalfOptions: CustomizationOption[] = [
  { id: 'double_cheese_margherita', name: 'Double Cheese Margherita', price: 0, ingredients: 'Good Ol\' Classic' },
  { id: 'farmers_market', name: 'Farmer\'s Market', price: 0, ingredients: 'Capsicum, Onion' },
  { id: 'corn_cheese_jalapenos', name: 'Corn Cheese & Jalapenos', price: 50, ingredients: 'Spicy Jalapenos, Golden Corn, Mozzarella Cheese' },
  { id: 'zesty_veggie_delight', name: 'Zesty Veggie Delight', price: 60, ingredients: 'Tomato, Onion, Spicy Jalapenos' },
  { id: 'fabulous_three', name: 'Fabulous Three', price: 60, ingredients: 'Capsicum, Onion, Red Paprika' },
  { id: 'olive_garden', name: 'Olive Garden', price: 70, ingredients: 'Black Olive, Golden Corn, Capsicum' },
  { id: 'spicy_mexicano', name: 'Spicy Mexicano', price: 90, ingredients: 'Red Paprika, Spicy Jalapeno, Golden Corn, Onion' },
  { id: 'magic_mushrooms', name: 'Magic Mushrooms', price: 90, ingredients: 'Mushroom, Capsicum, Tomato' },
  { id: 'paneer_tikka', name: 'Paneer Tikka', price: 90, ingredients: 'Paneer Tikka, Onion' },
  { id: 'italian_fiesta', name: 'Italian Fiesta', price: 120, ingredients: 'Mushroom, Black Olive, Spicy Jalapeno, Golden Corn' },
  { id: 'veggie_paradise', name: 'Veggie Paradise', price: 120, ingredients: 'Black Olive, Red Paprika, Capsicum, Tomato, Onion' },
  { id: 'peri_peri_paneer', name: 'Peri Peri Paneer', price: 120, ingredients: 'Peri Peri Paneer, Golden Corn, Capsicum' },
];

export const MENU: Record<string, MenuCategory[]> = {
  Pizza: [
    {
      id: '10',
      name: 'Value Fun Pizza @ 99',
      description:
        'Made with 100% real dairy cheese. 0% Mayonnaise. Pocket friendly pizzas, at just ₹99',
      items: [
        {
          id: '11',
          name: 'Spicy Jalapeno Pizza [Regular 7"]',
          description:
            'Tangy, Spicy Jalapenos with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise',
          originalPrice: 195,
          discountedPrice: 99,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8074',
          veg: true,
        },
        {
          id: '12',
          name: 'Golden Corn Pizza [Regular 7"]',
          description:
            'Golden Corn with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise',
          originalPrice: 195,
          discountedPrice: 99,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/7753',
          veg: true,
        },
        {
          id: '13',
          name: 'Capsicum Pizza [Regular 7"]',
          description:
            'Roasted Capsicum with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise',
          originalPrice: 195,
          discountedPrice: 99,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/7752',
          veg: true,
        },
        // Add more populated data
        {
          id: '15',
          name: 'Onion Pizza [Regular 7"]',
          description:
            'Crunchy Onion with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise',
          originalPrice: 195,
          discountedPrice: 99,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/9236',
          veg: true,
        },
      ],
    },
    {
      id: '11',
      name: '1 Plus 1 @ 119 each',
      description:
        'Any 2 Regular 7 Pizzas @ just ₹119 each. Any 2 Big 10 Pizzas @ just ₹199 each. No more choosing b/w favourites - get em both',
      items: [
        {
          id: '21',
          name: 'Spicy Jalapeno Pizza [Regular 7"]',
          description:
            'Tangy, Spicy Jalapenos with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise',
          originalPrice: 195,
          discountedPrice: 99,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8074',
          veg: true,
        },
        {
          id: '24',
          name: 'Golden Corn Pizza [Regular 7"]',
          description:
            'Golden Corn with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise',
          originalPrice: 195,
          discountedPrice: 99,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/7753',
          veg: true,
        },
        {
          id: '22',
          name: 'Capsicum Pizza [Regular 7"]',
          description:
            'Roasted Capsicum with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise',
          originalPrice: 195,
          discountedPrice: 99,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/7752',
          veg: true,
        },
        // Add more
        {
          id: '25',
          name: 'Mushroom Pizza [Regular 7"]',
          description:
            'Fresh Mushrooms with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise',
          originalPrice: 195,
          discountedPrice: 99,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/847',
          veg: true,
        },
      ],
    },
    {
      id: 'half',
      name: 'Half & Half Pizzas [Big 10"]',
      description:
        "Can't make up your mind? No worries! Get 2 different halves in 1 big 10-inch Pizza. No more choosing b/w favourites - get em both",
      items: [
        {
          id: 'veg_veg_big',
          name: 'Veg & Veg [Big 10" Serves 2-3]',
          description:
            'Choice is yours! Pick a half each of any 2 Veg Pizzas & make one Big 10 inch Pizza.',
          originalPrice: 409,
          discountedPrice: 299, // Adjusted base without membership; use discounted as base
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/333', // Example
          veg: true,
          customizationConfig: [
            {
              id: 'crust',
              title: 'Choice of Crust',
              required: true,
              type: 'radio',
              options: [
                { id: 'pan_tossed', name: 'Pan Tossed', price: 0 },
                { id: 'thin_crust', name: 'Thin Crust', price: 0 },
                { id: 'cheese_blast', name: 'Cheese Blast', price: 100 },
                { id: 'thin_crust_cheese_blast', name: 'Thin Crust Cheese Blast', price: 100 },
              ],
            },
            {
              id: 'first_half',
              title: 'First Veg Half',
              required: true,
              type: 'radio',
              options: vegHalfOptions,
            },
            {
              id: 'second_half',
              title: 'Second Veg Half',
              required: true,
              type: 'radio',
              options: vegHalfOptions,
            },
          ],
        },
        // Can add Non-Veg & Veg or others if needed
      ],
    },
    // Add more categories if needed
  ],
  Biryani: [
    {
      id: '20',
      name: 'Daily Value Biryani @ 99',
      description: 'Delectable Mughal biryanis at super pocket-friendly prices. All the more tempting!',
      items: [
        {
          id: '21',
          name: 'Dum Aloo Value Biryani Bowl',
          description: '[Half KG, Serves 1, Raita not included] Mughal style biryani with flavour-packed Aloo',
          originalPrice: 150,
          discountedPrice: 99,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/7849',
          veg: true,
        },
        // Add more biryani items
        {
          id: '22',
          name: 'Tangdi Chicken Value Biryani Bowl',
          description: '[1 Leg Pc with Bone, Half KG, Serves 1, Raita not included] Juicy marinated chicken slow-cooked with aromatic rice. ',
          originalPrice: 195,
          discountedPrice: 125,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/5821',
          veg: true,
        },
      ],
    },
    {
      id: '21',
      name: '1 + 1 BOGO Biryani @ 129 each',
      description: 'Any 2 Half KG Biryanis @ ₹129 each only. A tempting deal, you cant resist!',
      items: [
        {
          id: '21',
          name: '2 Half KG Biryanis @ 129 each',
          description: '[Serves 2] Get any 2 Half KG Biryanis at just ₹129 each.',
          originalPrice: 450,
          discountedPrice: 258,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/6243',
          veg: true,
        },
      ],
    },
  ],
  Bowl: [
    {
      id: '24',
      name: 'Multi Bowl Combos [FREE items of ₹120]',
      description: 'All other offers applicable on Multi Bowl Combos. Get that party started!',
      items: [
        {
          id: '21',
          name: 'Any 2 Rice Bowls [FREE Choco Lava Delight Cake]',
          description: 'Get Choco Lava Delight Cake worth ₹100 FREE. All other offers applicable on this combo.',
          originalPrice: 450,
          discountedPrice: 399,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/4748',
          veg: true,
        },
        // Add more biryani items
        {
          id: '22',
          name: 'Any 4 Rice Bowls [FREE - 2 Cokes & 2 Choco Lava Cakes]',
          description: 'Get 2 Drink & 2 Choco Lava Delight Cakes worth Rs. 240 FREE. All other offers applicable on this combo.',
          originalPrice: 995,
          discountedPrice: 725,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/4750',
          veg: true,
        },
      ],
    },
    {
      id: '29',
      name: 'Everyday Classics',
      description: 'Forever favourites that bring joy to the table, these bowls are a treat for the soul!',
      items: [
        {
          id: '21',
          name: 'Desi Ghee Dal Khichdi Bowl',
          description: 'Chilka moong dal, basmati rice, desi ghee, hing, jeera, degi mirch & masalas.',
          originalPrice: 250,
          discountedPrice: 158,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8250',
          veg: true,
        },
      ],
    },
  ],
  Rolls: [
    {
      id: '28',
      name: 'Multi Roll Combos [FREE items of ₹120]',
      description: 'All other offers applicable on Multi Bowl Combos. Get that party started!',
      items: [
        {
          id: '21',
          name: 'Any 2 Rolls [FREE Choco Lava Volcano]',
          description: 'Get Choco Lava Volcano worth ₹100 FREE. All other offers applicable on this combo.',
          originalPrice: 400,
          discountedPrice: 339,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/10665',
          veg: true,
        },
        {
          id: '32',
          name: 'Any 4 Rolls [FREE - 2 Cokes & 2 Choco Lava Cakes]',
          description: 'Get 2 Drinks & 2 Choco Lava Volcanoes worth Rs. 240 FREE. All other offers applicable on this combo',
          originalPrice: 995,
          discountedPrice: 675,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/10666',
          veg: true,
        },
      ],
    },
    {
      id: '29',
      name: 'Everyday Classics',
      description: 'Forever favourites that bring joy to the table, these bowls are a treat for the soul!',
      items: [
        {
          id: '21',
          name: 'Desi Ghee Dal Khichdi Bowl',
          description: 'Chilka moong dal, basmati rice, desi ghee, hing, jeera, degi mirch & masalas.',
          originalPrice: 250,
          discountedPrice: 158,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8250',
          veg: true,
        },
      ],
    },
  ],
  Thali: [
    {
      id: '28',
      name: 'All-In-1-Meals',
      description: 'Our Contemporary Take on the Authentic Royal Thali. Bon Appetit!',
      items: [
        {
          id: '21',
          name: 'Dilli Rajma Meal',
          description: 'Authentic Dilli style Rajma + Dal Makhani/Chole/Rajma + Paratha/Rice + Salad + Chutney + Dessert.',
          originalPrice: 359,
          discountedPrice: 259,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/751',
          veg: true,
        },
        {
          id: '32',
          name: 'Amritsari Chole Meal',
          description: 'Amritsari chole + Dal Makhani/Chole/Rajma + Paratha/Rice + Salad + Chutney + Dessert.',
          originalPrice: 259,
          discountedPrice: 175,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/756',
          veg: true,
        },
      ],
    },
    {
      id: '259',
      name: 'Mini Meals',
      description: 'Lip-smacking curries + Paratha/Rice + Salad in perfectly curated portions to satisfy 1 person hunger',
      items: [
        {
          id: '21',
          name: 'Aloo Palak Mini Meal',
          description: 'Chilka moong dal, basmati rice, desi ghee, hing, jeera, degi mirch & masalas.',
          originalPrice: 219,
          discountedPrice: 458,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8360',
          veg: true,
        },
      ],
    },
  ],

  'Daily Meal': [
    {
      id: 'daily_thali',
      name: 'Thali Meals',
      description: 'Complete thali options with add-ons.',
      items: [
        {
          id: 'tadka_curd_rice',
          name: 'Ghee Tadka Dal Khichdi Thali',
          description: 'Made with moong dal, ghee, hing, jeera, garam masala & degi mirch + Papad + Pickle + Onions.',
          originalPrice: 298, // From image (base price?)
          discountedPrice: 199,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8275', // Replace with real URL
          veg: true,
          customizationConfig: [
            {
              id: 'addons',
              title: 'Make it a Complete Meal [Additional]',
              required: false,
              type: 'checkbox',
              options: commonAddOns,
            },
          ],
        },
      ],
    },
    {
      id: 'light_meals',
      name: 'Veg Homely - Light Meals',
      description: 'Light meals with base choice and add-ons.',
      items: [
        {
          id: 'egg_curry_light',
          name: 'Egg Curry - Light Meal',
          description: 'Flavourful curry with Phulkas/Parathas/Rice. Cozy meal with homestyle goodness!',
          originalPrice: 149, // From image
          discountedPrice: 199,
          image: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/6646', // Replace
          veg: false, // Egg is non-veg
          customizationConfig: [
            {
              id: 'meal_base',
              title: 'Meal Base',
              required: true,
              type: 'radio',
              defaultOptionId: 'tikona_parathas', // Pre-select first
              options: [
                { id: 'tikona_parathas', name: '3 Tikona Parathas [Made in 100% Ghee]', price: 0 },
                { id: 'basmati_rice', name: 'Basmati Rice [Full]', price: 0 },
              ],
            },
            {
              id: 'addons',
              title: 'Make it a Complete Meal [Additional]',
              required: false,
              type: 'checkbox',
              options: commonAddOns.slice(0, 6), // From image, shorter list
            },
          ],
        },
        // Add more light meals similarly
      ],
    },
  ],
};