function SearchCountry({ onSearchChange }) {
  return (
    <search className="w-full rounded-md bg-element px-8 py-4 text-text shadow-lg xl:w-1/3">
      <label htmlFor="country-search" className="sr-only">
        Search for a country
      </label>
      <div className="search-wrapper flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          className="fill-search"
          focusable="false"
          aria-hidden="true"
        >
          <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
        </svg>

        <input
          type="search"
          aria-label="Seach country"
          id="country-search"
          className="w-full border-none bg-element p-0 text-text placeholder:text-text"
          placeholder="Search for a country..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </search>
  );
}

export default SearchCountry;
