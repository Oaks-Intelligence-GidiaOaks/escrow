import { Routes, Route } from "react-router-dom";
import { LandingPage, ContacPage, AboutPage, ServicePage } from "../page";
import { CONTACT, LANDING, ABOUT, SERVICES } from "./CONSTANT";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={LANDING} element={<LandingPage />} />
        <Route path={CONTACT} element={<ContacPage />} />
        <Route path={ABOUT} element={<AboutPage />} />
        <Route path={SERVICES} element={<ServicePage />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
