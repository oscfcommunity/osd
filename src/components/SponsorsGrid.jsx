/**
 * @param {{sponsors?: {name:string,logo:string}[], columns?: number | {base?:number,sm?:number,md?:number,lg?:number,xl?:number}, maxHeight?: number}} props
 */


export default function SponsorsGrid({
  sponsors = [],
  columns = 3,
  maxHeight = 140
}) {
  // Simple mapping to common grid layouts
  const gridClassMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'
  };

  const gridClasses = gridClassMap[columns] || gridClassMap[3];

  return (
    <div className={`grid ${gridClasses} gap-4 items-center`}>
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
