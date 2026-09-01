import staticData from "../assets/data.json";

const API_BASE = "https://api.restcountries.com/countries/v5";
const AUTH_HEADER = {
  Authorization: `Bearer ${process.env.REST_COUNTRIES_API_KEY}`,
};

function normalizeV5Country(c) {
  return {
    name: {
      common: c.names?.common || "",
      official: c.names?.official || "",
      nativeName: c.names?.native || {},
    },
    cca3: c.codes?.alpha_3 || "",
    flags: {
      svg: c.flag?.url_svg || "",
      png: c.flag?.url_png || "",
      alt: c.flag?.description || "",
    },
    capital: c.capitals?.map((cap) => cap.name) || [],
    population: c.population || 0,
    region: c.region || "",
    subregion: c.subregion || "",
    tld: c.tlds || [],
    currencies: c.currencies?.reduce((acc, cur) => {
      acc[cur.code] = { name: cur.name, symbol: cur.symbol };
      return acc;
    }, {}) || {},
    languages: c.languages?.reduce((acc, lang) => {
      acc[lang.bcp47 || lang.iso639_1 || lang.name] = lang.name;
      return acc;
    }, {}) || {},
    borders: c.borders || [],
  };
}

function normalizeV2Country(c) {
  return {
    name: {
      common: c.name || "",
      official: c.name || "",
      nativeName: c.nativeName
        ? { eng: { common: c.nativeName, official: c.nativeName } }
        : {},
    },
    cca3: c.alpha3Code || "",
    flags: {
      svg: c.flags?.svg || c.flag || "",
      png: c.flags?.png || "",
      alt: "",
    },
    capital: Array.isArray(c.capital) ? c.capital : c.capital ? [c.capital] : [],
    population: c.population || 0,
    region: c.region || "",
    subregion: c.subregion || "",
    tld: c.topLevelDomain || [],
    currencies: c.currencies?.reduce((acc, cur) => {
      acc[cur.code] = { name: cur.name, symbol: cur.symbol };
      return acc;
    }, {}) || {},
    languages: c.languages?.reduce((acc, lang) => {
      acc[lang.iso639_1 || lang.name] = lang.name;
      return acc;
    }, {}) || {},
    borders: c.borders || [],
  };
}

export function getStaticCountries() {
  return staticData.map(normalizeV2Country);
}

async function apiFetch(url, retries = 5) {
  for (let attempt = 0; attempt < retries; attempt++) {
    const res = await fetch(url, {
      headers: AUTH_HEADER,
      next: { revalidate: 86400 },
    });
    if (res.status === 429) {
      await new Promise((r) => setTimeout(r, 5000 * (attempt + 1)));
      continue;
    }
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  }
  throw new Error("API rate limited after retries");
}

export async function getCountryByCode(cca3) {
  const data = await apiFetch(
    `${API_BASE}?q=${encodeURIComponent(cca3)}&limit=100`,
  );
  const objects = data.data?.objects || [];
  const match = objects.find(
    (c) => c.codes?.alpha_3?.toUpperCase() === cca3.toUpperCase(),
  );
  return match ? normalizeV5Country(match) : null;
}

export async function getBorderCountries(borders = []) {
  if (!borders.length) return [];

  const results = await Promise.all(
    borders.map((code) => getCountryByCode(code)),
  );

  return results.filter(Boolean).map((c) => ({
    name: { common: c.name.common },
    cca3: c.cca3,
  }));
}
