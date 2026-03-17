import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import CountryList from "./Countries/CountryList";
import Controls from "./Controls/Controls";

const Hero = () => {
  const countries = useLoaderData(); // loader data
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  return (
    <main className="px-4 py-8 text-text">
      <Controls
        onRegionChange={setRegion}
        onSearchChange={setSearch}
        selectedRegion={region}
      ></Controls>
      <CountryList
        countries={countries}
        filterRegion={region}
        searchQuery={search}
      ></CountryList>
    </main>
  );
};

export default Hero;
