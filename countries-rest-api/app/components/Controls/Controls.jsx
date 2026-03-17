"use client";

import { useState } from "react";
import SearchCountry from "./SearchCountry";
import FilterCountry from "./FilterCountry";
import CountryList from "../Countries/CountryList";

function Controls({ countries }) {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <form className="flex flex-col gap-10 md:mx-auto md:max-w-xl xl:max-w-7xl xl:flex-row xl:justify-between">
        <SearchCountry onSearchChange={setSearch} />
        <FilterCountry onRegionChange={setRegion} selectedRegion={region} />
      </form>
      <CountryList
        countries={countries}
        filterRegion={region}
        searchQuery={search}
      />
    </>
  );
}

export default Controls;
