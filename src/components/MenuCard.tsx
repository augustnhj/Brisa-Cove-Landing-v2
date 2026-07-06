import Image from "next/image";
import { MenuItem, NutritionLabels, itemAllergens, itemImages } from "@/data/menu";

const nutritionLabel = (label: string, value: string) => (
  <div className="flex flex-col text-xs uppercase tracking-[0.2em] text-deepteal/70">
    <span>{label}</span>
    <span className="text-sm font-semibold text-deepteal">{value}</span>
  </div>
);

export default function MenuCard({
  item,
  labels,
  alignBottom = false,
}: {
  item: MenuItem;
  labels: NutritionLabels;
  alignBottom?: boolean;
}) {
  const NO_NUTRITION_IDS = new Set([
    "riptide-fries", "sunset-sweet-fries", "nacho-shore-platter",
    "sunrise-mango-smoothie", "sunset-margherita", "pipeline-pepperoni",
    "hawaii-pizza", "sunset-margherita-small", "pipeline-pepperoni-small",
    "hawaii-pizza-small", "maverick-meat-lovers", "maverick-meat-lovers-small",
  ]);
  const SIMPLE_IDS = new Set(["soda", "coffee"]);
  const showDetails = !item.comingSoon && !SIMPLE_IDS.has(item.id);
  const showNutrition = showDetails && !NO_NUTRITION_IDS.has(item.id);
  const allergens = showDetails ? itemAllergens[item.id] : undefined;
  const image = itemImages[item.id];

  return (
    <div className="glass flex h-full overflow-hidden">
      {image && (
        <div className="relative w-44 min-h-48 shrink-0">
          <Image
            src={image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="176px"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between gap-3 p-5">
        <div className="flex flex-col gap-1.5">
          <h3 className={`text-xl font-bold text-deepteal ${item.comingSoon ? "line-through decoration-red-600 decoration-2" : ""}`}>
            {item.name}
          </h3>
          {item.comingSoon && (
            <p className="text-xs font-bold uppercase tracking-widest text-red-600">Coming Soon</p>
          )}
          {showDetails && (
            <p className="text-sm text-deepteal/60">{item.description}</p>
          )}
          {showNutrition && (
            <div className="mt-2 grid grid-cols-2 gap-2">
              {nutritionLabel(labels.kcal, item.nutrition.kcal)}
              {nutritionLabel(labels.protein, item.nutrition.protein)}
              {nutritionLabel(labels.fat, item.nutrition.fat)}
              {nutritionLabel(labels.carbs, item.nutrition.carbs)}
            </div>
          )}
          {allergens !== undefined && (
            <p className="mt-1 text-xs text-deepteal/50">
              <span className="font-semibold uppercase tracking-[0.12em]">{labels.allergens}: </span>
              {allergens.length > 0 ? allergens.map((a) => labels.allergenNames[a] ?? a).join(", ") : labels.none}
            </p>
          )}
        </div>
        {!item.comingSoon && (
          <span className="text-xl font-bold text-deepteal">{item.price}</span>
        )}
      </div>
    </div>
  );
}
