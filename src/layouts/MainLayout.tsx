import { Outlet } from "react-router-dom";
import { Header } from "@/components/custom/nav";

const MainLayout = () => {
  const isLoggedIn = true;
  return (
    <section className="">
      {isLoggedIn ? (
        <>
          <Header />
          <div className="w-[90%] mx-auto">
            <Outlet />
          </div>
        </>
      ) : (
        <>To log in</>
      )}
    </section>
  );
};

export default MainLayout;
