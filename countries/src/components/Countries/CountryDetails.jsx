import { Link, useParams } from "react-router-dom";
import data from "./../../assets/data.json";
import slugify from "../../utils/slugify";
import Header from "../Header";

function CountryDetails() {
  const { slug } = useParams();

  // find country by slug
  const country = data.find((c) => slugify(c.name) === slug);

  if (!country) {
    return (
      <div className="px-4 py-8">
        <Link to="/" className="mb-6 inline-block text-sm">
          ← Back
        </Link>
        <p>Country not found.</p>
      </div>
    );
  }

  const flagSrc = country.flags?.svg || country.flag || "";
  const countryName = country.name || country.name?.common || "";

  // languages: array of objects or array of strings
  const languages =
    country.languages && Array.isArray(country.languages)
      ? country.languages.map((l) => (l.name ? l.name : l))
      : country.languages && typeof country.languages === "object"
        ? Object.values(country.languages)
        : [];

  // currencies: array of objects or object
  const currencies =
    country.currencies && Array.isArray(country.currencies)
      ? country.currencies.map((c) => c.name)
      : country.currencies && typeof country.currencies === "object"
        ? Object.values(country.currencies).map((c) => c.name || c)
        : [];

  // border countries: find by alpha3Code
  const borderCountries = (country.borders || [])
    .map((code) => data.find((c) => (c.alpha3Code || c.cca3) === code))
    .filter(Boolean);

  return (
    <>
      <Header />

      <div className="px-4 py-8 md:mx-auto md:max-w-xl md:px-0 xl:max-w-7xl">
        <Link
          to="/"
          className="mb-6 inline-block rounded-sm bg-white px-6 py-2 text-(--Grey-950) no-underline shadow-md dark:bg-slate-800"
        >
          ← Back
        </Link>

        <div className="mt-8 xl:grid xl:grid-cols-2 xl:items-center xl:gap-20">
          <div className="mb-8 w-full xl:mb-0">
            <img
              src={flagSrc}
              alt={`Flag of ${countryName}`}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="">
            <h1 className="mb-4 text-2xl font-bold xl:text-3xl xl:font-extrabold">
              {countryName}
            </h1>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3">
                <p>
                  <span className="font-semibold">Native Name:</span>{" "}
                  {country.nativeName ||
                    country.nativeName ||
                    country.altSpellings?.[1] ||
                    countryName}
                </p>
                <p>
                  <span className="font-semibold">Population:</span>{" "}
                  {Number(country.population).toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Region:</span>{" "}
                  {country.region}
                </p>
                <p>
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {country.subregion}
                </p>
                <p>
                  <span className="font-semibold">Capital: </span>{" "}
                  {Array.isArray(country.capital)
                    ? country.capital[0]
                    : country.capital}
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  {Array.isArray(country.topLevelDomain)
                    ? country.topLevelDomain.join(", ")
                    : country.topLevelDomain}
                </p>
                <p>
                  <span className="font-semibold">Currencies:</span>{" "}
                  {currencies.length
                    ? currencies.join(", ")
                    : country.currencies?.[0]?.name || "—"}
                </p>
                <p>
                  <span className="font-semibold">Languages:</span>{" "}
                  {languages.length
                    ? languages.join(", ")
                    : country.languages || "—"}
                </p>
              </div>
            </div>

            <div className="mt-8 xl:flex xl:items-center">
              <h2 className="mb-3 font-semibold xl:text-xl">
                Border Countries:
              </h2>
              <div className="flex flex-wrap gap-3">
                {borderCountries.length ? (
                  borderCountries.map((b) => (
                    <Link
                      key={b.name}
                      to={`/country/${slugify(b.name)}`}
                      className="rounded-sm bg-white px-4 py-2 text-(--Grey-950) no-underline shadow-md dark:bg-slate-800"
                    >
                      {b.name}
                    </Link>
                  ))
                ) : (
                  <span>None</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
