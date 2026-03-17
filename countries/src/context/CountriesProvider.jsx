// import React, { createContext, useContext, useEffect, useState } from "react";

// // Context + hook
// const CountriesContext = createContext(null);

// export const useCountries = () => useContext(CountriesContext);

// // Provider fetches countries and normalizes data
// export function CountriesProvider({ children }) {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let mounted = true;

//     const fetchCountries = async () => {
//       try {
//         const res = await fetch(
//           "https://restcountries.com/v3.1/all?fields=name,cca3,flags,capital,population,region,subregion,tld,currencies,languages",
//         );
//         if (!res.ok) throw new Error("Failed to fetch countries");
//         const data = await res.json();
//         if (!mounted) return;

//         setCountries(data);
//         setLoading(false);
//       } catch (err) {
//         if (!mounted) return;
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchCountries();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return (
//     <CountriesContext.Provider value={{ countries, loading, error }}>
//       {children}
//     </CountriesContext.Provider>
//   );
// }
