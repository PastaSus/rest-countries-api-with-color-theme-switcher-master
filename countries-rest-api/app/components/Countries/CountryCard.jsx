// import Image from "next/image";
import Link from "next/link";

function CountryCard({ country }) {
  const flagSrc = country.flags?.svg || country.flag || "";
  const countryName = country.name?.common || country.name || "";
  const capital = Array.isArray(country.capital)
    ? country.capital[0]
    : country.capital;

  return (
    <Link
      href={`/country/${country.cca3}`}
      className="block text-text no-underline"
    >
      <article>
        <img
          src={flagSrc}
          alt={`${countryName} flag`}
          loading="lazy"
          className="h-40 w-full rounded-t-md object-cover shadow-sm"
        />
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
              <span className="font-semibold">Capital:</span>{" "}
              {capital || "No capital"}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
