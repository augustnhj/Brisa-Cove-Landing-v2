import Image from "next/image";
import { MenuItem, itemImages } from "@/data/menu";

export default function PizzaCard({
  large,
  small,
  smallLabel,
  largeLabel,
}: {
  large: MenuItem;
  small?: MenuItem;
  smallLabel: string;
  largeLabel: string;
}) {
  const image = itemImages[large.id];

  return (
    <div className="glass flex h-full flex-col overflow-hidden sm:flex-row">
      {image && (
        <div className="relative h-56 w-full shrink-0 sm:h-auto sm:w-56 sm:min-h-56">
          <Image
            src={image}
            alt={large.name}
            fill
            className="object-cover [object-position:center_65%]"
            sizes="(max-width: 640px) 100vw, 224px"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between gap-3 p-5">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-bold text-deepteal">{large.name}</h3>
          {large.description && (
            <p className="text-sm text-deepteal/60">{large.description}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {small && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-deepteal/60">{smallLabel}</span>
              <span className="text-lg font-bold text-deepteal">{small.price}</span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-sm text-deepteal/60">{largeLabel}</span>
            <span className="text-lg font-bold text-deepteal">{large.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
