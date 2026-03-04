/**
 * @param {{sections?: Record<string, {name:string,role?:string,image?:string}[]>}} props
 */
function PersonCard({ person }) {
  if (person.linkedin) {
    return (
      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-full min-h-[220px]">
          <img src={person.image} alt={person.name} className="w-28 h-28 rounded-full object-cover mb-4" />
          <div className="font-semibold">{person.name}</div>
          {person.roles ? (
            <div className="text-sm text-gray-600 mt-2">
              {person.roles.map((r, i) => (
                <div key={i}>{r}</div>
              ))}
            </div>
          ) : person.role ? (
            <div className="text-sm text-gray-600 mt-2">{person.role}</div>
          ) : null}
        </div>
      </a>
    );
  }

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm h-full min-h-[220px]">
      <img src={person.image} alt={person.name} className="w-28 h-28 rounded-full object-cover mb-4" />
      <div className="font-semibold">{person.name}</div>
      {person.roles ? (
        <div className="text-sm text-gray-600 mt-2">
          {person.roles.map((r, i) => (
            <div key={i}>{r}</div>
          ))}
        </div>
      ) : person.role ? (
        <div className="text-sm text-gray-600 mt-2">{person.role}</div>
      ) : null}
    </div>
  );
}

export default function TeamSection({ sections = {} }) {
  return (
    <div className="space-y-12">
      {Object.entries(sections).map(([key, list]) => (
        <section key={key} className="">
          <h3 className="text-2xl font-bold mb-6 capitalize">{key.replace("-", " ")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
