import SearchCountry from "./SearchCountry";
import FilterCountry from "./FilterCountry";

function Controls() {
  return (
    <form className="flex flex-col gap-10">
      <SearchCountry></SearchCountry>
      <FilterCountry></FilterCountry>
    </form>
  );
}

export default Controls;
