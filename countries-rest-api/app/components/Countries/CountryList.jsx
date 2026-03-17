import CountryCard from "./CountryCard";

function CountryList({ countries, filterRegion, searchQuery }) {
  const filteredCountries = countries.filter((country) => {
    const matchRegion = filterRegion ? country.region === filterRegion : true;
    const matchSearch = searchQuery
      ? (country.name?.common || country.name || "")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      : true;
    return matchRegion && matchSearch;
  });

  return (
    <section
      aria-labelledby="country-list-heading"
      className="mt-8 md:mx-auto md:max-w-xl xl:max-w-7xl"
    >
      <h2 id="country-list-heading" className="sr-only">
        List of Countries
      </h2>
      <ul className="m-0 grid list-none gap-10 p-0 md:grid-cols-2 xl:grid-cols-4">
        {filteredCountries.map((country) => (
          <li className="rounded-md bg-element shadow-md" key={country.cca3}>
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CountryList;
