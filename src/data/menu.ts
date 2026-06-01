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
  comingSoon?: boolean;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type MenuLanguage = "en" | "no" | "de";

export type NutritionLabels = {
  kcal: string;
  protein: string;
  fat: string;
  carbs: string;
};

export const nutritionLabels: Record<MenuLanguage, NutritionLabels> = {
  en: { kcal: "Kcal", protein: "Protein", fat: "Fat", carbs: "Carbs" },
  no: { kcal: "kcal", protein: "Protein", fat: "Fett", carbs: "Karbo" },
  de: { kcal: "kcal", protein: "Eiweiß", fat: "Fett", carbs: "Kohlenhydrate" },
};

export const menuNotes: Record<MenuLanguage, string> = {
  en: "Nutritional values are estimates and may vary.",
  no: "Næringsverdier er estimater og kan variere.",
  de: "Nährwerte sind Schätzungen und können variieren.",
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
        },
        {
          id: "sunset-sweet-fries",
          name: "Sunset Sweet Fries",
          description: "Sweet potato fries, lime aioli",
          nutrition: { kcal: "560", protein: "4 g", fat: "36 g", carbs: "52 g" },
          price: "89 kr",
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
          comingSoon: true,
        },
        {
          id: "reef-bbq-wings",
          name: "Reef BBQ Wings",
          description: "Chicken wings, BBQ glaze",
          nutrition: { kcal: "650", protein: "54 g", fat: "45 g", carbs: "12 g" },
          price: "145 kr",
          comingSoon: true,
        },
        {
          id: "lava-sriracha-honey-wings",
          name: "Lava Sriracha-Honey Wings",
          description: "Chicken wings, sriracha, honey",
          nutrition: { kcal: "760", protein: "54 g", fat: "52 g", carbs: "26 g" },
          price: "155 kr",
          comingSoon: true,
        },
      ],
    },
    {
      title: "NACHOS",
      items: [
        {
          id: "nacho-shore-platter",
          name: "Nacho Shore Platter",
          description: "Nachos, cheddar, salsa, jalapeños, black beans, onions",
          nutrition: { kcal: "820", protein: "16 g", fat: "48 g", carbs: "78 g" },
          price: "139 kr",
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
        },
        {
          id: "mango-wave-bowl",
          name: "Mango Wave Bowl",
          description: "Skyr, mango, banana, granola",
          nutrition: { kcal: "570", protein: "25 g", fat: "9 g", carbs: "95 g" },
          price: "135 kr",
        },
        {
          id: "acai-anchor-bowl",
          name: "Açaí Anchor Bowl",
          description: "Açaí, banana, berries, granola",
          nutrition: { kcal: "650", protein: "10 g", fat: "28 g", carbs: "90 g" },
          price: "169 kr",
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
          comingSoon: true,
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
          comingSoon: true,
        },
        {
          id: "bali-avocado-toast",
          name: "Bali Avocado Toast",
          description: "Avocado, lime, chili, coriander",
          nutrition: { kcal: "430", protein: "8 g", fat: "25 g", carbs: "46 g" },
          price: "139 kr",
          comingSoon: true,
        },
        {
          id: "wave-rider-burger",
          name: "Wave Rider Burger",
          description: "Burger, cheddar, salad, pickles",
          nutrition: { kcal: "780", protein: "38 g", fat: "48 g", carbs: "52 g" },
          price: "179 kr",
          comingSoon: true,
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
        },
        {
          id: "pipeline-pepperoni",
          name: "Pipeline Pepperoni",
          description: "Tomato sauce, cheese, pepperoni",
          nutrition: { kcal: "1500", protein: "75 g", fat: "70 g", carbs: "140 g" },
          price: "199 kr",
        },
        {
          id: "hawaii-pizza",
          name: "Hang Ten Hawaiian",
          description: "Tomato sauce, cheese, ham, pineapple",
          nutrition: { kcal: "1300", protein: "65 g", fat: "40 g", carbs: "155 g" },
          price: "189 kr",
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
        },
        {
          id: "pineapple-mint-cooler",
          name: "Pineapple Mint Cooler",
          description: "Pineapple juice, lime, mint",
          nutrition: { kcal: "110", protein: "0 g", fat: "0 g", carbs: "27 g" },
          price: "59 kr",
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
        },
        {
          id: "sunset-sweet-fries",
          name: "Sunset Sweet Fries",
          description: "Søtpotetfries, lime-aioli",
          nutrition: { kcal: "560", protein: "4 g", fat: "36 g", carbs: "52 g" },
          price: "89 kr",
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
          comingSoon: true,
        },
        {
          id: "reef-bbq-wings",
          name: "Reef BBQ Wings",
          description: "Kyllingvinger, BBQ-glaze",
          nutrition: { kcal: "650", protein: "54 g", fat: "45 g", carbs: "12 g" },
          price: "145 kr",
          comingSoon: true,
        },
        {
          id: "lava-sriracha-honey-wings",
          name: "Lava Sriracha-Honey Wings",
          description: "Kyllingvinger, sriracha, honning",
          nutrition: { kcal: "760", protein: "54 g", fat: "52 g", carbs: "26 g" },
          price: "155 kr",
          comingSoon: true,
        },
      ],
    },
    {
      title: "NACHOS",
      items: [
        {
          id: "nacho-shore-platter",
          name: "Nacho Shore Platter",
          description: "Nachos, cheddar, salsa, jalapeños, svarte bønner, løk",
          nutrition: { kcal: "820", protein: "16 g", fat: "48 g", carbs: "78 g" },
          price: "139 kr",
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
        },
        {
          id: "mango-wave-bowl",
          name: "Mango Wave Bowl",
          description: "Skyr, mango, banan, granola",
          nutrition: { kcal: "570", protein: "25 g", fat: "9 g", carbs: "95 g" },
          price: "135 kr",
        },
        {
          id: "acai-anchor-bowl",
          name: "Açaí Anchor Bowl",
          description: "Açaí, banan, bær, granola",
          nutrition: { kcal: "650", protein: "10 g", fat: "28 g", carbs: "90 g" },
          price: "169 kr",
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
          comingSoon: true,
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
          comingSoon: true,
        },
        {
          id: "bali-avocado-toast",
          name: "Bali Avocado Toast",
          description: "Avokado, lime, chili, koriander",
          nutrition: { kcal: "430", protein: "8 g", fat: "25 g", carbs: "46 g" },
          price: "139 kr",
          comingSoon: true,
        },
        {
          id: "wave-rider-burger",
          name: "Wave Rider Burger",
          description: "Burger, cheddar, salat, pickles",
          nutrition: { kcal: "780", protein: "38 g", fat: "48 g", carbs: "52 g" },
          price: "179 kr",
          comingSoon: true,
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
        },
        {
          id: "pipeline-pepperoni",
          name: "Pipeline Pepperoni",
          description: "Tomatsaus, ost, pepperoni",
          nutrition: { kcal: "1500", protein: "75 g", fat: "70 g", carbs: "140 g" },
          price: "199 kr",
        },
        {
          id: "hawaii-pizza",
          name: "Hang Ten Hawaiian",
          description: "Tomatsaus, ost, skinke, ananas",
          nutrition: { kcal: "1300", protein: "65 g", fat: "40 g", carbs: "155 g" },
          price: "189 kr",
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
        },
        {
          id: "pineapple-mint-cooler",
          name: "Pineapple Mint Cooler",
          description: "Ananasjuice, lime, mynte",
          nutrition: { kcal: "110", protein: "0 g", fat: "0 g", carbs: "27 g" },
          price: "59 kr",
        },
      ],
    },
  ],
  de: [
    {
      title: "AIRFRYER",
      items: [
        {
          id: "riptide-fries",
          name: "Riptide Fries",
          description: "Knusprige Pommes, Limetten-Aioli",
          nutrition: { kcal: "520", protein: "4 g", fat: "37 g", carbs: "41 g" },
          price: "79 kr",
        },
        {
          id: "sunset-sweet-fries",
          name: "Sunset Sweet Fries",
          description: "Süßkartoffelpommes, Limetten-Aioli",
          nutrition: { kcal: "560", protein: "4 g", fat: "36 g", carbs: "52 g" },
          price: "89 kr",
        },
      ],
    },
    {
      title: "CHICKEN WINGS",
      items: [
        {
          id: "sunset-sweet-chili-wings",
          name: "Sunset Sweet-Chili Wings",
          description: "Chicken Wings, Sweet Chili, Limette",
          nutrition: { kcal: "660", protein: "54 g", fat: "45 g", carbs: "16 g" },
          price: "149 kr",
          comingSoon: true,
        },
        {
          id: "reef-bbq-wings",
          name: "Reef BBQ Wings",
          description: "Chicken Wings, BBQ-Glasur",
          nutrition: { kcal: "650", protein: "54 g", fat: "45 g", carbs: "12 g" },
          price: "145 kr",
          comingSoon: true,
        },
        {
          id: "lava-sriracha-honey-wings",
          name: "Lava Sriracha-Honey Wings",
          description: "Chicken Wings, Sriracha, Honig",
          nutrition: { kcal: "760", protein: "54 g", fat: "52 g", carbs: "26 g" },
          price: "155 kr",
          comingSoon: true,
        },
      ],
    },
    {
      title: "NACHOS",
      items: [
        {
          id: "nacho-shore-platter",
          name: "Nacho Shore Platter",
          description: "Nachos, Cheddar, Salsa, Jalapeños, schwarze Bohnen, Zwiebeln",
          nutrition: { kcal: "820", protein: "16 g", fat: "48 g", carbs: "78 g" },
          price: "139 kr",
        },
      ],
    },
    {
      title: "SMOOTHIE BOWLS",
      items: [
        {
          id: "bali-berry-bowl",
          name: "Bali Berry Bowl",
          description: "Skyr, Beeren, Banane, Granola",
          nutrition: { kcal: "600", protein: "28 g", fat: "16 g", carbs: "88 g" },
          price: "139 kr",
        },
        {
          id: "mango-wave-bowl",
          name: "Mango Wave Bowl",
          description: "Skyr, Mango, Banane, Granola",
          nutrition: { kcal: "570", protein: "25 g", fat: "9 g", carbs: "95 g" },
          price: "135 kr",
        },
        {
          id: "acai-anchor-bowl",
          name: "Açaí Anchor Bowl",
          description: "Açaí, Banane, Beeren, Granola",
          nutrition: { kcal: "650", protein: "10 g", fat: "28 g", carbs: "90 g" },
          price: "169 kr",
        },
      ],
    },
    {
      title: "SMOOTHIES",
      items: [
        {
          id: "sunrise-mango-smoothie",
          name: "Sunrise Mango Smoothie",
          description: "Mango, Banane, Ananassaft",
          nutrition: { kcal: "360", protein: "3 g", fat: "1 g", carbs: "85 g" },
          price: "89 kr",
        },
      ],
    },
    {
      title: "SÜSSES",
      items: [
        {
          id: "banana-boardwalk-bread",
          name: "Banana Boardwalk Bread",
          description: "Bananenbrot",
          nutrition: { kcal: "230", protein: "5 g", fat: "9 g", carbs: "32 g" },
          price: "49 kr",
          comingSoon: true,
        },
      ],
    },
    {
      title: "GRILLPLATTE",
      items: [
        {
          id: "coconut-chicken-wrap",
          name: "Coconut Chicken Wrap",
          description: "Hähnchen, Mango, Salat, Kokosdressing",
          nutrition: { kcal: "760", protein: "45 g", fat: "38 g", carbs: "68 g" },
          price: "159 kr",
          comingSoon: true,
        },
        {
          id: "bali-avocado-toast",
          name: "Bali Avocado Toast",
          description: "Avocado, Limette, Chili, Koriander",
          nutrition: { kcal: "430", protein: "8 g", fat: "25 g", carbs: "46 g" },
          price: "139 kr",
          comingSoon: true,
        },
        {
          id: "wave-rider-burger",
          name: "Wave Rider Burger",
          description: "Burger, Cheddar, Salat, Pickles",
          nutrition: { kcal: "780", protein: "38 g", fat: "48 g", carbs: "52 g" },
          price: "179 kr",
          comingSoon: true,
        },
      ],
    },
    {
      title: "PIZZA",
      items: [
        {
          id: "sunset-margherita",
          name: "Sunset Margherita",
          description: "Tomatensauce, Käse, Basilikum",
          nutrition: { kcal: "1200", protein: "60 g", fat: "42 g", carbs: "130 g" },
          price: "179 kr",
        },
        {
          id: "pipeline-pepperoni",
          name: "Pipeline Pepperoni",
          description: "Tomatensauce, Käse, Peperoni",
          nutrition: { kcal: "1500", protein: "75 g", fat: "70 g", carbs: "140 g" },
          price: "199 kr",
        },
        {
          id: "hawaii-pizza",
          name: "Hang Ten Hawaiian",
          description: "Tomatensauce, Käse, Schinken, Ananas",
          nutrition: { kcal: "1300", protein: "65 g", fat: "40 g", carbs: "155 g" },
          price: "189 kr",
        },
      ],
    },
    {
      title: "GETRÄNKE",
      items: [
        {
          id: "coconut-cold-brew",
          name: "Coconut Cold Brew",
          description: "Cold Brew, Kokosmilch",
          nutrition: { kcal: "140", protein: "1 g", fat: "9 g", carbs: "14 g" },
          price: "69 kr",
        },
        {
          id: "pineapple-mint-cooler",
          name: "Pineapple Mint Cooler",
          description: "Ananassaft, Limette, Minze",
          nutrition: { kcal: "110", protein: "0 g", fat: "0 g", carbs: "27 g" },
          price: "59 kr",
        },
      ],
    },
  ],
};

const favoriteIds = [
  "pipeline-pepperoni",
  "nacho-shore-platter",
  "bali-berry-bowl",
  "pineapple-mint-cooler",
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
  de: buildFavorites(menuSections.de),
};
