import { Link } from "react-router-dom";
import slugify from "../../utils/slugify";

function CountryCard({ country }) {
  // safe access for flag and capital
  const flagSrc = country.flags?.svg || country.flag || "";
  const countryName = country.name || country.name?.common || "";

  const capital = Array.isArray(country.capital)
    ? country.capital[0]
    : country.capital;

  return (
    <Link
      to={`/country/${slugify(countryName)}`}
      className="block text-text no-underline"
    >
      <article className="">
        <img
          src={flagSrc}
          alt={`${countryName} flag`}
          loading="lazy"
          className="h-40 w-full rounded-t-md object-cover shadow-sm"
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
              <span className="font-semibold">Capital: </span>
              {/* {country.capital} */}
              {capital || "No capital"}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
