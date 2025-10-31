import SearchCountry from "./SearchCountry";
import FilterCountry from "./FilterCountry";

function Controls({ onRegionChange, onSearchChange }) {
  return (
    <form className="flex flex-col gap-10">
      <SearchCountry onSearchChange={onSearchChange}></SearchCountry>
      <FilterCountry onRegionChange={onRegionChange}></FilterCountry>
    </form>
  );
}

export default Controls;
