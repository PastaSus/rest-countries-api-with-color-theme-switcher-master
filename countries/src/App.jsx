import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import NotFoundPage from "./pages/NotFoundPage";
import CountryDetails, {
  countryLoader,
} from "./components/Countries/CountryDetails";

const App = () => {
  // before returning RouterProvider we usually declare our apps CRUD with async/await to fetch from our api after that we use createBrowserRouter and nest in createRoutesFromElements where we place a parent route in which its element would be our mainlayout and inside parent it should have our children route and place elements to each route of main layout where we pass in their respective props to call the function/CRUD function and loader to the component where we have to fetch data and then return RouterProvider which has a prop router and return our router variable?

  const countriesLoader = async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,cca3,flags,capital,population,region,subregion,tld,currencies,languages",
    );
    if (!res.ok) throw new Error("Failed to fetch countries");

    return res.json();
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={<Hero />}
          loader={countriesLoader}
          errorElement={<NotFoundPage />}
          // errorElement={<NotFoundPage />}
        />
        <Route
          path={`/country/:cca3`}
          element={<CountryDetails />}
          errorElement={<NotFoundPage />}
          loader={countryLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
