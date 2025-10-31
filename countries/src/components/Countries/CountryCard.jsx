function CountryCard({ country }) {
  return (
    <article className="rounded-md shadow-md">
      <img
        src={country.flags.svg}
        alt={`${country.name} flag`}
        className="rounded-t-md"
      ></img>
      <div className="px-6 pt-3 pb-12">
        <h2 className="font-bold">{country.name}</h2>
        <div className="mt-4">
          <p className="mt-0">
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </article>
  );
}

export default CountryCard;
