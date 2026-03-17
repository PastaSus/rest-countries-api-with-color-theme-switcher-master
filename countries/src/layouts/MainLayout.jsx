import Header from "../components/Header";

import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
