import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import "./style.css";
const AppLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div div className="grid h-screen grid-rows-[auto_1fr_auto] font-poppins ">
      {isLoading && <Loader />}
      <Header />

      <main className=" mx-auto flex  w-full flex-col ">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
