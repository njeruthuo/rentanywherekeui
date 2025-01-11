import { AuthLayout, MainLayout } from "@/layouts";
import { Home, SignInPage, SignUpPage } from "@/pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" index element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="sign-in/" element={<SignInPage />} />
          <Route path="sign-up/" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
