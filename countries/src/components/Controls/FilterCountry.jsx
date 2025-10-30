function FilterCountry() {
  return (
    <div class="region-filter">
      <label for="region-filter" class="sr-only">
        Filter by Region
      </label>
      <select id="region-filter" name="region">
        <option value="" disabled selected hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default FilterCountry;
