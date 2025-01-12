// import { Header } from "@/components/custom/nav";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isLoggedIn = false;
  return (
    <section>
      {isLoggedIn ? (
        <>
          <>To log in</>
        </>
      ) : (
        <>
          {/* <Header /> */}
          <div className="flex">
            <div className="w-1/2">
              <Outlet />
            </div>
            <div
              // style={{ height: "calc(100vh - 4.7rem)" }}
              className="w-1/2 bg-img1 bg-cover h-screen bg-center"
            ></div>
          </div>
        </>
      )}
    </section>
  );
};

export default AuthLayout;
