import { Link } from "react-router-dom";
import slugify from "../../utils/slugify";

function CountryCard({ country }) {
  // safe access for flag and capital
  const flagSrc = country.flags?.svg || country.flag || "";
  const countryName = country.name || country.name?.common || "";

  return (
    <Link
      to={`/country/${slugify(countryName)}`}
      className="block text-(--Grey-950) no-underline"
    >
      <article className="">
        <img
          src={flagSrc}
          alt={`${countryName} flag`}
          className="rounded-t-md"
        ></img>
        <div className="px-6 pt-3 pb-12">
          <h2 className="font-bold">{countryName}</h2>
          <div className="mt-4">
            <p className="mt-0">
              <span className="font-semibold">Population:</span>{" "}
              {Number(country.population).toLocaleString()}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Capital:</span>
              {/* {country.capital} */}
              {Array.isArray(country.capital)
                ? country.capital[0]
                : country.capital}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
