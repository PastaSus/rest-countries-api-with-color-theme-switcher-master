import SearchCountry from "./SearchCountry";
import FilterCountry from "./FilterCountry";

function Controls({ onRegionChange, onSearchChange }) {
  return (
    <form className="flex flex-col gap-10 md:mx-auto md:max-w-xl xl:max-w-7xl xl:flex-row xl:justify-between">
      <SearchCountry onSearchChange={onSearchChange}></SearchCountry>
      <FilterCountry onRegionChange={onRegionChange}></FilterCountry>
    </form>
  );
}

export default Controls;
