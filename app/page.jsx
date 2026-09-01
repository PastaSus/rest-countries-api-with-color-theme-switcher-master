import CountryList from "./components/Countries/CountryList";
import Controls from "./components/Controls/Controls";
import { getStaticCountries } from "./utils/countries-api";

export default async function Home() {
  const countries = await getStaticCountries();

  return (
    <main className="px-4 py-8 text-text">
      <Controls countries={countries} />
    </main>
  );
}
