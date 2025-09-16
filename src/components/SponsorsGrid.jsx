/**
 * @param {{sponsors?: {name:string,logo:string}[], columns?: number | {base?:number,sm?:number,md?:number,lg?:number,xl?:number}, maxHeight?: number}} props
 */
export default function SponsorsGrid({
  sponsors = [],
  columns = 4,
  maxHeight = 140
}) {
  // Helper to map number to Tailwind grid-cols-*
  const colClass = (n) => `grid-cols-${n}`;
  // Responsive grid classes
  let gridClasses = "";
  if (typeof columns === "object") {
    const breakpoints = {
      base: '',
      sm: 'sm:',
      md: 'md:',
      lg: 'lg:',
      xl: 'xl:'
    };
    gridClasses = Object.entries(columns)
      .filter(([bp, n]) => n && breakpoints[bp] !== undefined)
      .map(([bp, n]) => `${breakpoints[bp]}${colClass(n)}`)
      .join(' ');
  } else {
    // fallback to old behavior
    gridClasses = colClass(columns);
  }

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
