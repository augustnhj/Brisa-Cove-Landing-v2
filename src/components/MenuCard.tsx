import { MenuItem, NutritionLabels, itemAllergens } from "@/data/menu";

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
    "hawaii-pizza-small",
  ]);
  const showDetails = !item.comingSoon && item.id !== "soda";
  const showNutrition = showDetails && !NO_NUTRITION_IDS.has(item.id);
  const allergens = showDetails ? itemAllergens[item.id] : undefined;

  return (
    <div className="glass flex h-full flex-col overflow-hidden">
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className={`text-lg font-semibold text-deepteal ${item.comingSoon ? "line-through decoration-red-600 decoration-2" : ""}`}>
            {item.name}
          </h3>
          {!item.comingSoon && <span className="shrink-0 text-sm font-semibold text-deepteal">{item.price}</span>}
        </div>
        {item.comingSoon && (
          <p className="text-xs font-bold uppercase tracking-widest text-red-600">Coming Soon</p>
        )}
        {showDetails && (
          <p className="text-sm text-deepteal/70">{item.description}</p>
        )}
        {showNutrition && (
          <div className="grid grid-cols-2 gap-3">
            {nutritionLabel(labels.kcal, item.nutrition.kcal)}
            {nutritionLabel(labels.protein, item.nutrition.protein)}
            {nutritionLabel(labels.fat, item.nutrition.fat)}
            {nutritionLabel(labels.carbs, item.nutrition.carbs)}
          </div>
        )}
        {alignBottom && <div className="flex-1" />}
        {allergens !== undefined && (
          <div className="border-t border-deepteal/10 pt-3 text-xs text-deepteal/60">
            <span className="font-semibold uppercase tracking-[0.15em]">{labels.allergens}: </span>
            {allergens.length > 0 ? allergens.join(", ") : labels.none}
          </div>
        )}
      </div>
    </div>
  );
}
