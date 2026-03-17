import CountryList from "./components/Countries/CountryList";
import Controls from "./components/Controls/Controls";

async function getCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca3,flags,capital,population,region",
    { next: { revalidate: 86400 } },
  );
  if (!res.ok) throw new Error("Failed to fetch countries");
  return res.json();
}

export default async function Home() {
  const countries = await getCountries();

  return (
    <main className="px-4 py-8 text-text">
      <Controls countries={countries} />
    </main>
  );
}
