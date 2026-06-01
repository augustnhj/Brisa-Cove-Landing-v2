import { MenuItem, NutritionLabels } from "@/data/menu";

const nutritionLabel = (label: string, value: string) => (
  <div className="flex flex-col text-xs uppercase tracking-[0.2em] text-deepteal/70">
    <span>{label}</span>
    <span className="text-sm font-semibold text-deepteal">{value}</span>
  </div>
);

export default function MenuCard({
  item,
  labels,
}: {
  item: MenuItem;
  labels: NutritionLabels;
}) {
  return (
    <div className="glass flex h-full flex-col overflow-hidden">
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className={`text-lg font-semibold text-deepteal ${item.comingSoon ? "line-through decoration-red-600 decoration-2" : ""}`}>
              {item.name}
            </h3>
            {item.comingSoon && (
              <p className="mt-0.5 text-xs font-bold uppercase tracking-widest text-red-600">Coming Soon</p>
            )}
            <p className="mt-1 text-sm text-deepteal/70">{item.description}</p>
          </div>
          <span className="text-sm font-semibold text-deepteal">{item.price}</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {nutritionLabel(labels.kcal, item.nutrition.kcal)}
          {nutritionLabel(labels.protein, item.nutrition.protein)}
          {nutritionLabel(labels.fat, item.nutrition.fat)}
          {nutritionLabel(labels.carbs, item.nutrition.carbs)}
        </div>
      </div>
    </div>
  );
}
