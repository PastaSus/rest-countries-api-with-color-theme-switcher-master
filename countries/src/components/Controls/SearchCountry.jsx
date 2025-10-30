function SearchCountry() {
  return (
    <search>
      <label for="country-search" className="sr-only">
        Search for a country
      </label>
      <div class="search-wrapper">
        <button type="button" aria-label="Search">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
            <path d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
          </svg>
        </button>
        <input
          type="search"
          id="country-search"
          placeholder="Search for a country..."
        />
      </div>
    </search>
  );
}

export default SearchCountry;
