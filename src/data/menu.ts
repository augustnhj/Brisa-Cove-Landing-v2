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
  allergens: string;
  none: string;
  allergenNames: Record<string, string>;
};

export const nutritionLabels: Record<MenuLanguage, NutritionLabels> = {
  en: { kcal: "Kcal", protein: "Protein", fat: "Fat", carbs: "Carbs", allergens: "Allergens", none: "None",
    allergenNames: { Egg: "Egg", Milk: "Milk", Gluten: "Gluten", Soya: "Soya" } },
  no: { kcal: "kcal", protein: "Protein", fat: "Fett", carbs: "Karbo", allergens: "Allergener", none: "Ingen",
    allergenNames: { Egg: "Egg", Milk: "Melk", Gluten: "Gluten", Soya: "Soya" } },
  de: { kcal: "kcal", protein: "Eiweiß", fat: "Fett", carbs: "Kohlenhydrate", allergens: "Allergene", none: "Keine",
    allergenNames: { Egg: "Ei", Milk: "Milch", Gluten: "Gluten", Soya: "Soja" } },
};

export const itemImages: Record<string, string> = {
  "acai-anchor-bowl":           "/images/menu/Acai Anchor Bowl.png",
  "mango-wave-bowl":            "/images/menu/Mango Wave Bowl.png",
  "nacho-shore-platter":        "/images/menu/Nacho Shore Platter.png",
  "hawaii-pizza":               "/images/menu/Hang Ten Hawaiian.png",
  "hawaii-pizza-small":         "/images/menu/Hang Ten Hawaiian.png",
  "maverick-meat-lovers":       "/images/menu/Maverick Meat Lovers.png",
  "maverick-meat-lovers-small": "/images/menu/Maverick Meat Lovers.png",
  "sunrise-mango-smoothie":     "/images/menu/Sunrise Mango Smoothie.png",
};

export const itemAllergens: Record<string, string[]> = {
  "riptide-fries":          [],
  "sunset-sweet-fries":     [],
  "nacho-shore-platter":    ["Milk"],
  "bali-berry-bowl":        ["Milk"],
  "mango-wave-bowl":        ["Milk"],
  "acai-anchor-bowl":       ["Milk"],
  "sunrise-mango-smoothie": [],
  "sunset-margherita":      ["Gluten", "Milk"],
  "pipeline-pepperoni":     ["Gluten", "Milk", "Soya"],
  "hawaii-pizza":           ["Gluten", "Milk"],
  "sunset-margherita-small":      ["Gluten", "Milk"],
  "pipeline-pepperoni-small":     ["Gluten", "Milk", "Soya"],
  "hawaii-pizza-small":           ["Gluten", "Milk"],
  "maverick-meat-lovers":         ["Gluten", "Milk"],
  "maverick-meat-lovers-small":   ["Gluten", "Milk"],
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
          description: "Crispy fries, aioli or ketchup",
          nutrition: { kcal: "520", protein: "4 g", fat: "37 g", carbs: "41 g" },
          price: "49 kr",
        },
        {
          id: "sunset-sweet-fries",
          name: "Sunset Sweet Fries",
          description: "Sweet potato fries, aioli or ketchup",
          nutrition: { kcal: "560", protein: "4 g", fat: "36 g", carbs: "52 g" },
          price: "59 kr",
        },
      ],
    },
    {
      title: "NACHOS",
      items: [
        {
          id: "nacho-shore-platter",
          name: "Nacho Shore Platter",
          description: "Nachos, cheddar, salsa, jalapeños, black beans, onions, ground beef",
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
          description: "Skyr, berries, banana",
          nutrition: { kcal: "~420", protein: "25 g", fat: "9 g", carbs: "62 g" },
          price: "119 kr",
        },
        {
          id: "mango-wave-bowl",
          name: "Mango Wave Bowl",
          description: "Skyr, mango, banana",
          nutrition: { kcal: "~430", protein: "25 g", fat: "9 g", carbs: "68 g" },
          price: "115 kr",
        },
        {
          id: "acai-anchor-bowl",
          name: "Açaí Anchor Bowl",
          description: "Açaí, skyr, banana, berries",
          nutrition: { kcal: "~530", protein: "22 g", fat: "20 g", carbs: "70 g" },
          price: "139 kr",
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
          price: "79 kr",
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
          price: "219 kr",
        },
        {
          id: "pipeline-pepperoni",
          name: "Pipeline Pepperoni",
          description: "Tomato sauce, cheese, pepperoni",
          nutrition: { kcal: "1500", protein: "75 g", fat: "70 g", carbs: "140 g" },
          price: "239 kr",
        },
        {
          id: "hawaii-pizza",
          name: "Hang Ten Hawaiian",
          description: "Tomato sauce, cheese, ham, pineapple",
          nutrition: { kcal: "1300", protein: "65 g", fat: "40 g", carbs: "155 g" },
          price: "259 kr",
        },
        {
          id: "sunset-margherita-small",
          name: "Sunset Margherita (Small)",
          description: "Tomato sauce, cheese, basil",
          nutrition: { kcal: "516", protein: "26 g", fat: "18 g", carbs: "56 g" },
          price: "159 kr",
        },
        {
          id: "pipeline-pepperoni-small",
          name: "Pipeline Pepperoni (Small)",
          description: "Tomato sauce, cheese, pepperoni",
          nutrition: { kcal: "645", protein: "32 g", fat: "30 g", carbs: "60 g" },
          price: "175 kr",
        },
        {
          id: "hawaii-pizza-small",
          name: "Hang Ten Hawaiian (Small)",
          description: "Tomato sauce, cheese, ham, pineapple",
          nutrition: { kcal: "559", protein: "28 g", fat: "17 g", carbs: "67 g" },
          price: "185 kr",
        },
        {
          id: "maverick-meat-lovers",
          name: "Maverick Meat Lovers",
          description: "Tomato sauce, cheese, pepperoni, ham, beef",
          nutrition: { kcal: "1650", protein: "85 g", fat: "78 g", carbs: "140 g" },
          price: "279 kr",
        },
        {
          id: "maverick-meat-lovers-small",
          name: "Maverick Meat Lovers (Small)",
          description: "Tomato sauce, cheese, pepperoni, ham, beef",
          nutrition: { kcal: "710", protein: "37 g", fat: "34 g", carbs: "60 g" },
          price: "195 kr",
        },
      ],
    },
    {
      title: "DRINKS",
      items: [
        {
          id: "sunrise-mango-smoothie",
          name: "Sunrise Mango Smoothie",
          description: "Mango, banana, pineapple juice",
          nutrition: { kcal: "360", protein: "3 g", fat: "1 g", carbs: "85 g" },
          price: "79 kr",
        },
        {
          id: "soda",
          name: "Soda",
          description: "Assorted flavors",
          nutrition: { kcal: "120", protein: "0 g", fat: "0 g", carbs: "30 g" },
          price: "27 kr",
        },
        {
          id: "coffee",
          name: "Coffee",
          description: "",
          nutrition: { kcal: "0", protein: "0 g", fat: "0 g", carbs: "0 g" },
          price: "25 kr",
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
          description: "Sprø pommes frites, aioli eller ketchup",
          nutrition: { kcal: "520", protein: "4 g", fat: "37 g", carbs: "41 g" },
          price: "49 kr",
        },
        {
          id: "sunset-sweet-fries",
          name: "Sunset Sweet Fries",
          description: "Søtpotetfries, aioli eller ketchup",
          nutrition: { kcal: "560", protein: "4 g", fat: "36 g", carbs: "52 g" },
          price: "59 kr",
        },
      ],
    },
    {
      title: "NACHOS",
      items: [
        {
          id: "nacho-shore-platter",
          name: "Nacho Shore Platter",
          description: "Nachos, cheddar, salsa, jalapeños, svarte bønner, løk, kjøttdeig",
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
          description: "Skyr, bær, banan",
          nutrition: { kcal: "~420", protein: "25 g", fat: "9 g", carbs: "62 g" },
          price: "119 kr",
        },
        {
          id: "mango-wave-bowl",
          name: "Mango Wave Bowl",
          description: "Skyr, mango, banan",
          nutrition: { kcal: "~430", protein: "25 g", fat: "9 g", carbs: "68 g" },
          price: "115 kr",
        },
        {
          id: "acai-anchor-bowl",
          name: "Açaí Anchor Bowl",
          description: "Açaí, skyr, banan, bær",
          nutrition: { kcal: "~530", protein: "22 g", fat: "20 g", carbs: "70 g" },
          price: "139 kr",
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
          price: "79 kr",
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
          price: "219 kr",
        },
        {
          id: "pipeline-pepperoni",
          name: "Pipeline Pepperoni",
          description: "Tomatsaus, ost, pepperoni",
          nutrition: { kcal: "1500", protein: "75 g", fat: "70 g", carbs: "140 g" },
          price: "239 kr",
        },
        {
          id: "hawaii-pizza",
          name: "Hang Ten Hawaiian",
          description: "Tomatsaus, ost, skinke, ananas",
          nutrition: { kcal: "1300", protein: "65 g", fat: "40 g", carbs: "155 g" },
          price: "259 kr",
        },
        {
          id: "sunset-margherita-small",
          name: "Sunset Margherita (Liten)",
          description: "Tomatsaus, ost, basilikum",
          nutrition: { kcal: "516", protein: "26 g", fat: "18 g", carbs: "56 g" },
          price: "159 kr",
        },
        {
          id: "pipeline-pepperoni-small",
          name: "Pipeline Pepperoni (Liten)",
          description: "Tomatsaus, ost, pepperoni",
          nutrition: { kcal: "645", protein: "32 g", fat: "30 g", carbs: "60 g" },
          price: "175 kr",
        },
        {
          id: "hawaii-pizza-small",
          name: "Hang Ten Hawaiian (Liten)",
          description: "Tomatsaus, ost, skinke, ananas",
          nutrition: { kcal: "559", protein: "28 g", fat: "17 g", carbs: "67 g" },
          price: "185 kr",
        },
        {
          id: "maverick-meat-lovers",
          name: "Maverick Meat Lovers",
          description: "Tomatsaus, ost, pepperoni, skinke, kjøttdeig",
          nutrition: { kcal: "1650", protein: "85 g", fat: "78 g", carbs: "140 g" },
          price: "279 kr",
        },
        {
          id: "maverick-meat-lovers-small",
          name: "Maverick Meat Lovers (Liten)",
          description: "Tomatsaus, ost, pepperoni, skinke, kjøttdeig",
          nutrition: { kcal: "710", protein: "37 g", fat: "34 g", carbs: "60 g" },
          price: "195 kr",
        },
      ],
    },
    {
      title: "DRIKKE",
      items: [
        {
          id: "sunrise-mango-smoothie",
          name: "Sunrise Mango Smoothie",
          description: "Mango, banan, ananasjuice",
          nutrition: { kcal: "360", protein: "3 g", fat: "1 g", carbs: "85 g" },
          price: "79 kr",
        },
        {
          id: "soda",
          name: "Brus",
          description: "Diverse smaker",
          nutrition: { kcal: "120", protein: "0 g", fat: "0 g", carbs: "30 g" },
          price: "27 kr",
        },
        {
          id: "coffee",
          name: "Kaffe",
          description: "",
          nutrition: { kcal: "0", protein: "0 g", fat: "0 g", carbs: "0 g" },
          price: "25 kr",
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
          description: "Knusprige Pommes, Aioli oder Ketchup",
          nutrition: { kcal: "520", protein: "4 g", fat: "37 g", carbs: "41 g" },
          price: "49 kr",
        },
        {
          id: "sunset-sweet-fries",
          name: "Sunset Sweet Fries",
          description: "Süßkartoffelpommes, Aioli oder Ketchup",
          nutrition: { kcal: "560", protein: "4 g", fat: "36 g", carbs: "52 g" },
          price: "59 kr",
        },
      ],
    },
    {
      title: "NACHOS",
      items: [
        {
          id: "nacho-shore-platter",
          name: "Nacho Shore Platter",
          description: "Nachos, Cheddar, Salsa, Jalapeños, schwarze Bohnen, Zwiebeln, Rinderhackfleisch",
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
          description: "Skyr, Beeren, Banane",
          nutrition: { kcal: "~420", protein: "25 g", fat: "9 g", carbs: "62 g" },
          price: "119 kr",
        },
        {
          id: "mango-wave-bowl",
          name: "Mango Wave Bowl",
          description: "Skyr, Mango, Banane",
          nutrition: { kcal: "~430", protein: "25 g", fat: "9 g", carbs: "68 g" },
          price: "115 kr",
        },
        {
          id: "acai-anchor-bowl",
          name: "Açaí Anchor Bowl",
          description: "Açaí, Skyr, Banane, Beeren",
          nutrition: { kcal: "~530", protein: "22 g", fat: "20 g", carbs: "70 g" },
          price: "139 kr",
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
          price: "79 kr",
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
          price: "219 kr",
        },
        {
          id: "pipeline-pepperoni",
          name: "Pipeline Pepperoni",
          description: "Tomatensauce, Käse, Peperoni",
          nutrition: { kcal: "1500", protein: "75 g", fat: "70 g", carbs: "140 g" },
          price: "239 kr",
        },
        {
          id: "hawaii-pizza",
          name: "Hang Ten Hawaiian",
          description: "Tomatensauce, Käse, Schinken, Ananas",
          nutrition: { kcal: "1300", protein: "65 g", fat: "40 g", carbs: "155 g" },
          price: "259 kr",
        },
        {
          id: "sunset-margherita-small",
          name: "Sunset Margherita (Klein)",
          description: "Tomatensauce, Käse, Basilikum",
          nutrition: { kcal: "516", protein: "26 g", fat: "18 g", carbs: "56 g" },
          price: "159 kr",
        },
        {
          id: "pipeline-pepperoni-small",
          name: "Pipeline Pepperoni (Klein)",
          description: "Tomatensauce, Käse, Peperoni",
          nutrition: { kcal: "645", protein: "32 g", fat: "30 g", carbs: "60 g" },
          price: "175 kr",
        },
        {
          id: "hawaii-pizza-small",
          name: "Hang Ten Hawaiian (Klein)",
          description: "Tomatensauce, Käse, Schinken, Ananas",
          nutrition: { kcal: "559", protein: "28 g", fat: "17 g", carbs: "67 g" },
          price: "185 kr",
        },
        {
          id: "maverick-meat-lovers",
          name: "Maverick Meat Lovers",
          description: "Tomatensauce, Käse, Peperoni, Schinken, Rinderhack",
          nutrition: { kcal: "1650", protein: "85 g", fat: "78 g", carbs: "140 g" },
          price: "279 kr",
        },
        {
          id: "maverick-meat-lovers-small",
          name: "Maverick Meat Lovers (Klein)",
          description: "Tomatensauce, Käse, Peperoni, Schinken, Rinderhack",
          nutrition: { kcal: "710", protein: "37 g", fat: "34 g", carbs: "60 g" },
          price: "195 kr",
        },
      ],
    },
    {
      title: "GETRÄNKE",
      items: [
        {
          id: "sunrise-mango-smoothie",
          name: "Sunrise Mango Smoothie",
          description: "Mango, Banane, Ananassaft",
          nutrition: { kcal: "360", protein: "3 g", fat: "1 g", carbs: "85 g" },
          price: "79 kr",
        },
        {
          id: "soda",
          name: "Limonade",
          description: "Verschiedene Sorten",
          nutrition: { kcal: "120", protein: "0 g", fat: "0 g", carbs: "30 g" },
          price: "27 kr",
        },
        {
          id: "coffee",
          name: "Kaffee",
          description: "",
          nutrition: { kcal: "0", protein: "0 g", fat: "0 g", carbs: "0 g" },
          price: "25 kr",
        },
      ],
    },
  ],
};

const favoriteIds = [
  "pipeline-pepperoni",
  "acai-anchor-bowl",
  "nacho-shore-platter",
  "sunset-sweet-fries",
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
