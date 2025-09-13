/**
 * @param {{sponsors?: {name:string,logo:string}[], columns?: number, maxHeight?: number}} props
 */
export default function SponsorsGrid({
  sponsors = [],
  columns = 4,
  maxHeight = 140
}) {
  // Responsive grid classes: default to 2 cols on small, grow on md/lg
  const baseCols =
    {
      1: "grid-cols-1",
      2: "grid-cols-2 sm:grid-cols-3 md:grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-3 md:grid-cols-4",
      6: "grid-cols-3 md:grid-cols-3 lg:grid-cols-6"
    }[columns] || "grid-cols-3";

  return (
    <div className={`grid ${baseCols} gap-6 items-center`}>
      {sponsors.map((s) => (
        <div
          key={s.name}
          className="flex items-center justify-center p-3 bg-white rounded-lg transition"
          style={{ minHeight: `${Math.min(maxHeight, 110)}px` }}
        >
          <img
            src={s.logo}
            alt={s.name}
            loading="lazy"
            className="w-auto object-contain max-w-full"
            style={{ maxHeight: `${maxHeight}px` }}
          />
        </div>
      ))}
    </div>
  );
}
