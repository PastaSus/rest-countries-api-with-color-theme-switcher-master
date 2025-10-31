import Header from "./components/Header";
import Controls from "./components/Controls/Controls";
import CountryList from "./components/Countries/CountryList";

import { useState } from "react";

function App() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <Header></Header>
      <main className="px-4 py-8">
        <Controls
          onRegionChange={setRegion}
          onSearchChange={setSearch}
        ></Controls>
        <CountryList filterRegion={region} searchQuery={search}></CountryList>
      </main>
    </>
  );
}

export default App;
