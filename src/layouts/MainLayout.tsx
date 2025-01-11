import { Header } from "@/components/custom/nav";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const isLoggedIn = true;
  return (
    <section className="">
      {isLoggedIn ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <>To log in</>
      )}
    </section>
  );
};

export default MainLayout;
