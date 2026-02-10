export type Nutrition = {
  kcal: string;
  protein: string;
  fat: string;
  carbs: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  nutrition: Nutrition;
  price: string;
  image: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type MenuLanguage = "en" | "no";

export type NutritionLabels = {
  kcal: string;
  protein: string;
  fat: string;
  carbs: string;
};

export const nutritionLabels: Record<MenuLanguage, NutritionLabels> = {
  en: { kcal: "Kcal", protein: "Protein", fat: "Fat", carbs: "Carbs" },
  no: { kcal: "kcal", protein: "Protein", fat: "Fett", carbs: "Karbo" },
};

export const menuNotes: Record<MenuLanguage, string> = {
  en: "Nutritional values are estimates and may vary.",
  no: "Næringsverdier er estimater og kan variere.",
};

const imagePalette = {
  warm: "/images/favorite-1.jpg",
  spice: "/images/favorite-2.jpg",
  fresh: "/images/favorite-3.jpg",
  bold: "/images/favorite-4.jpg",
};

export const menuSections: Record<MenuLanguage, MenuSection[]> = {
  en: [
    {
      title: "AIR FRYER",
      items: [
        {
          id: "riptide-fries",
          name: "Riptide Fries",
          description: "Crispy fries, lime aioli",
          nutrition: { kcal: "520", protein: "4 g", fat: "37 g", carbs: "41 g" },
          price: "79 kr",
          image: imagePalette.warm,
        },
        {
          id: "sunset-sweet-fries",
          name: "Sunset Sweet Fries",
          description: "Sweet potato fries, lime aioli",
          nutrition: { kcal: "560", protein: "4 g", fat: "36 g", carbs: "52 g" },
          price: "89 kr",
          image: imagePalette.warm,
        },
      ],
    },
    {
      title: "CHICKEN WINGS",
      items: [
        {
          id: "sunset-sweet-chili-wings",
          name: "Sunset Sweet-Chili Wings",
          description: "Chicken wings, sweet chili, lime",
          nutrition: { kcal: "660", protein: "54 g", fat: "45 g", carbs: "16 g" },
          price: "149 kr",
          image: imagePalette.spice,
        },
        {
          id: "reef-bbq-wings",
          name: "Reef BBQ Wings",
          description: "Chicken wings, BBQ glaze",
          nutrition: { kcal: "650", protein: "54 g", fat: "45 g", carbs: "12 g" },
          price: "145 kr",
          image: imagePalette.spice,
        },
        {
          id: "lava-sriracha-honey-wings",
          name: "Lava Sriracha-Honey Wings",
          description: "Chicken wings, sriracha, honey",
          nutrition: { kcal: "760", protein: "54 g", fat: "52 g", carbs: "26 g" },
          price: "155 kr",
          image: imagePalette.spice,
        },
      ],
    },
    {
      title: "NACHOS",
      items: [
        {
          id: "nacho-shore-platter",
          name: "Nacho Shore Platter",
          description: "Nachos, cheddar, salsa, jalapeños",
          nutrition: { kcal: "820", protein: "16 g", fat: "48 g", carbs: "78 g" },
          price: "139 kr",
          image: imagePalette.warm,
        },
      ],
    },
    {
      title: "SMOOTHIE BOWLS",
      items: [
        {
          id: "bali-berry-bowl",
          name: "Bali Berry Bowl",
          description: "Skyr, berries, banana, granola",
          nutrition: { kcal: "600", protein: "28 g", fat: "16 g", carbs: "88 g" },
          price: "139 kr",
          image: imagePalette.fresh,
        },
        {
          id: "mango-wave-bowl",
          name: "Mango Wave Bowl",
          description: "Skyr, mango, banana, granola",
          nutrition: { kcal: "570", protein: "25 g", fat: "9 g", carbs: "95 g" },
          price: "135 kr",
          image: imagePalette.fresh,
        },
        {
          id: "acai-anchor-bowl",
          name: "Açaí Anchor Bowl",
          description: "Açaí, banana, berries, granola",
          nutrition: { kcal: "650", protein: "10 g", fat: "28 g", carbs: "90 g" },
          price: "169 kr",
          image: imagePalette.fresh,
        },
      ],
    },
    {
      title: "SMOOTHIES",
      items: [
        {
          id: "sunrise-mango-smoothie",
          name: "Sunrise Mango Smoothie",
          description: "Mango, banana, pineapple juice",
          nutrition: { kcal: "360", protein: "3 g", fat: "1 g", carbs: "85 g" },
          price: "89 kr",
          image: imagePalette.fresh,
        },
      ],
    },
    {
      title: "SWEET",
      items: [
        {
          id: "banana-boardwalk-bread",
          name: "Banana Boardwalk Bread",
          description: "Banana bread",
          nutrition: { kcal: "230", protein: "5 g", fat: "9 g", carbs: "32 g" },
          price: "49 kr",
          image: imagePalette.fresh,
        },
      ],
    },
    {
      title: "GRIDDLE",
      items: [
        {
          id: "coconut-chicken-wrap",
          name: "Coconut Chicken Wrap",
          description: "Chicken, mango, salad, coconut dressing",
          nutrition: { kcal: "760", protein: "45 g", fat: "38 g", carbs: "68 g" },
          price: "159 kr",
          image: imagePalette.spice,
        },
        {
          id: "bali-avocado-toast",
          name: "Bali Avocado Toast",
          description: "Avocado, lime, chili, coriander",
          nutrition: { kcal: "430", protein: "8 g", fat: "25 g", carbs: "46 g" },
          price: "139 kr",
          image: imagePalette.spice,
        },
        {
          id: "wave-rider-burger",
          name: "Wave Rider Burger",
          description: "Burger, cheddar, salad, pickles",
          nutrition: { kcal: "780", protein: "38 g", fat: "48 g", carbs: "52 g" },
          price: "179 kr",
          image: imagePalette.spice,
        },
      ],
    },
    {
      title: "PIZZA",
      items: [
        {
          id: "sunset-margherita",
          name: "Sunset Margherita",
          description: "Tomato sauce, cheese, basil",
          nutrition: { kcal: "1200", protein: "60 g", fat: "42 g", carbs: "130 g" },
          price: "179 kr",
          image: imagePalette.bold,
        },
        {
          id: "pipeline-pepperoni",
          name: "Pipeline Pepperoni",
          description: "Tomato sauce, cheese, pepperoni",
          nutrition: { kcal: "1500", protein: "75 g", fat: "70 g", carbs: "140 g" },
          price: "199 kr",
          image: imagePalette.bold,
        },
        {
          id: "bali-chicken-mango",
          name: "Bali Chicken Mango",
          description: "Chicken, mango, red onion, sweet chili",
          nutrition: { kcal: "1450", protein: "85 g", fat: "45 g", carbs: "165 g" },
          price: "199 kr",
          image: imagePalette.bold,
        },
      ],
    },
    {
      title: "DRINKS",
      items: [
        {
          id: "coconut-cold-brew",
          name: "Coconut Cold Brew",
          description: "Cold brew, coconut milk",
          nutrition: { kcal: "140", protein: "1 g", fat: "9 g", carbs: "14 g" },
          price: "69 kr",
          image: imagePalette.bold,
        },
        {
          id: "pineapple-mint-cooler",
          name: "Pineapple Mint Cooler",
          description: "Pineapple juice, lime, mint",
          nutrition: { kcal: "110", protein: "0 g", fat: "0 g", carbs: "27 g" },
          price: "59 kr",
          image: imagePalette.bold,
        },
        {
          id: "slush",
          name: "Slush",
          description: "Flavor of the day",
          nutrition: { kcal: "120-200", protein: "N/A", fat: "N/A", carbs: "N/A" },
          price: "49 kr",
          image: imagePalette.bold,
        },
      ],
    },
  ],
  no: [
    {
      title: "AIRFRYER",
      items: [
        {
          id: "riptide-fries",
          name: "Riptide Fries",
          description: "Sprø pommes frites, lime-aioli",
          nutrition: { kcal: "520", protein: "4 g", fat: "37 g", carbs: "41 g" },
          price: "79 kr",
          image: imagePalette.warm,
        },
        {
          id: "sunset-sweet-fries",
          name: "Sunset Sweet Fries",
          description: "Søtpotetfries, lime-aioli",
          nutrition: { kcal: "560", protein: "4 g", fat: "36 g", carbs: "52 g" },
          price: "89 kr",
          image: imagePalette.warm,
        },
      ],
    },
    {
      title: "KYLLINGVINGER",
      items: [
        {
          id: "sunset-sweet-chili-wings",
          name: "Sunset Sweet-Chili Wings",
          description: "Kyllingvinger, sweet chili, lime",
          nutrition: { kcal: "660", protein: "54 g", fat: "45 g", carbs: "16 g" },
          price: "149 kr",
          image: imagePalette.spice,
        },
        {
          id: "reef-bbq-wings",
          name: "Reef BBQ Wings",
          description: "Kyllingvinger, BBQ-glaze",
          nutrition: { kcal: "650", protein: "54 g", fat: "45 g", carbs: "12 g" },
          price: "145 kr",
          image: imagePalette.spice,
        },
        {
          id: "lava-sriracha-honey-wings",
          name: "Lava Sriracha-Honey Wings",
          description: "Kyllingvinger, sriracha, honning",
          nutrition: { kcal: "760", protein: "54 g", fat: "52 g", carbs: "26 g" },
          price: "155 kr",
          image: imagePalette.spice,
        },
      ],
    },
    {
      title: "NACHOS",
      items: [
        {
          id: "nacho-shore-platter",
          name: "Nacho Shore Platter",
          description: "Nachos, cheddar, salsa, jalapeños",
          nutrition: { kcal: "820", protein: "16 g", fat: "48 g", carbs: "78 g" },
          price: "139 kr",
          image: imagePalette.warm,
        },
      ],
    },
    {
      title: "SMOOTHIEBOWLS",
      items: [
        {
          id: "bali-berry-bowl",
          name: "Bali Berry Bowl",
          description: "Skyr, bær, banan, granola",
          nutrition: { kcal: "600", protein: "28 g", fat: "16 g", carbs: "88 g" },
          price: "139 kr",
          image: imagePalette.fresh,
        },
        {
          id: "mango-wave-bowl",
          name: "Mango Wave Bowl",
          description: "Skyr, mango, banan, granola",
          nutrition: { kcal: "570", protein: "25 g", fat: "9 g", carbs: "95 g" },
          price: "135 kr",
          image: imagePalette.fresh,
        },
        {
          id: "acai-anchor-bowl",
          name: "Açaí Anchor Bowl",
          description: "Açaí, banan, bær, granola",
          nutrition: { kcal: "650", protein: "10 g", fat: "28 g", carbs: "90 g" },
          price: "169 kr",
          image: imagePalette.fresh,
        },
      ],
    },
    {
      title: "SMOOTHIES",
      items: [
        {
          id: "sunrise-mango-smoothie",
          name: "Sunrise Mango Smoothie",
          description: "Mango, banan, ananasjuice",
          nutrition: { kcal: "360", protein: "3 g", fat: "1 g", carbs: "85 g" },
          price: "89 kr",
          image: imagePalette.fresh,
        },
      ],
    },
    {
      title: "SØTT",
      items: [
        {
          id: "banana-boardwalk-bread",
          name: "Banana Boardwalk Bread",
          description: "Bananbrød",
          nutrition: { kcal: "230", protein: "5 g", fat: "9 g", carbs: "32 g" },
          price: "49 kr",
          image: imagePalette.fresh,
        },
      ],
    },
    {
      title: "STEKEPLATE",
      items: [
        {
          id: "coconut-chicken-wrap",
          name: "Coconut Chicken Wrap",
          description: "Kylling, mango, salat, kokosdressing",
          nutrition: { kcal: "760", protein: "45 g", fat: "38 g", carbs: "68 g" },
          price: "159 kr",
          image: imagePalette.spice,
        },
        {
          id: "bali-avocado-toast",
          name: "Bali Avocado Toast",
          description: "Avokado, lime, chili, koriander",
          nutrition: { kcal: "430", protein: "8 g", fat: "25 g", carbs: "46 g" },
          price: "139 kr",
          image: imagePalette.spice,
        },
        {
          id: "wave-rider-burger",
          name: "Wave Rider Burger",
          description: "Burger, cheddar, salat, pickles",
          nutrition: { kcal: "780", protein: "38 g", fat: "48 g", carbs: "52 g" },
          price: "179 kr",
          image: imagePalette.spice,
        },
      ],
    },
    {
      title: "PIZZA",
      items: [
        {
          id: "sunset-margherita",
          name: "Sunset Margherita",
          description: "Tomatsaus, ost, basilikum",
          nutrition: { kcal: "1200", protein: "60 g", fat: "42 g", carbs: "130 g" },
          price: "179 kr",
          image: imagePalette.bold,
        },
        {
          id: "pipeline-pepperoni",
          name: "Pipeline Pepperoni",
          description: "Tomatsaus, ost, pepperoni",
          nutrition: { kcal: "1500", protein: "75 g", fat: "70 g", carbs: "140 g" },
          price: "199 kr",
          image: imagePalette.bold,
        },
        {
          id: "bali-chicken-mango",
          name: "Bali Chicken Mango",
          description: "Kylling, mango, rødløk, sweet chili",
          nutrition: { kcal: "1450", protein: "85 g", fat: "45 g", carbs: "165 g" },
          price: "199 kr",
          image: imagePalette.bold,
        },
      ],
    },
    {
      title: "DRIKKE",
      items: [
        {
          id: "coconut-cold-brew",
          name: "Coconut Cold Brew",
          description: "Cold brew, kokosmelk",
          nutrition: { kcal: "140", protein: "1 g", fat: "9 g", carbs: "14 g" },
          price: "69 kr",
          image: imagePalette.bold,
        },
        {
          id: "pineapple-mint-cooler",
          name: "Pineapple Mint Cooler",
          description: "Ananasjuice, lime, mynte",
          nutrition: { kcal: "110", protein: "0 g", fat: "0 g", carbs: "27 g" },
          price: "59 kr",
          image: imagePalette.bold,
        },
        {
          id: "slush",
          name: "Slush",
          description: "Dagens smak",
          nutrition: { kcal: "120-200", protein: "N/A", fat: "N/A", carbs: "N/A" },
          price: "49 kr",
          image: imagePalette.bold,
        },
      ],
    },
  ],
};

const favoriteIds = [
  "riptide-fries",
  "sunset-sweet-chili-wings",
  "bali-berry-bowl",
  "sunset-margherita",
];

const buildFavorites = (sections: MenuSection[]) => {
  const allItems = sections.flatMap((section) => section.items);
  return favoriteIds
    .map((id) => allItems.find((item) => item.id === id))
    .filter((item): item is MenuItem => Boolean(item));
};

export const favorites: Record<MenuLanguage, MenuItem[]> = {
  en: buildFavorites(menuSections.en),
  no: buildFavorites(menuSections.no),
};
