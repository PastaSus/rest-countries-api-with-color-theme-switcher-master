import CountryCard from "./CountryCard";
import data from "./../../assets/data.json";

function CountryList({ filterRegion, searchQuery }) {
  const filteredCountries = data.filter((country) => {
    const matchRegion = filterRegion ? country.region === filterRegion : true;
    const matchSearch = searchQuery
      ? country.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchRegion && matchSearch;
  });

  return (
    <section
      aria-labelledby="country-list-heading"
      className="mx-auto mt-8 max-w-xs"
    >
      <h2 id="country-list-heading" className="sr-only">
        List of Countries
      </h2>
      <ul className="m-0 grid list-none gap-10 p-0">
        {filteredCountries.map((country) => (
          <li key={country.name}>
            <CountryCard country={country}></CountryCard>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CountryList;
