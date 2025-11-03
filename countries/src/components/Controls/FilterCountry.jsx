function FilterCountry({ onRegionChange }) {
  const handleOpenSelect = () => {
    document.getElementById("region-filter")?.showPicker?.(); // modern browsers
  };

  return (
    <div
      className="region-filter inline-flex w-fit items-center gap-10 rounded-md bg-element px-6 py-4 text-text shadow-lg"
      onClick={handleOpenSelect}
    >
      <label htmlFor="region-filter" className="sr-only">
        Filter by Region
      </label>
      <select
        id="region-filter"
        name="region"
        className="select-country appearance-none border-0 bg-element p-0 text-text"
        onChange={(e) => onRegionChange(e.target.value)}
      >
        <option defaultValue={""} selected disabled hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      {/* make the svg pseudo instead no need full custom add event to div so when div is clicked or anything inside div select opens*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=""
        viewBox="0 0 512 512"
        width="14"
        height="14"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M112 184l144 144 144-144"
        />
      </svg>
    </div>
  );
}

export default FilterCountry;
