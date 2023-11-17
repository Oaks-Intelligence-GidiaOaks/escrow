import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  ContacPage,
  AboutPage,
  ServicePage,
  PortfolioPage,
} from "../page";
import { CONTACT, LANDING, ABOUT, SERVICES, PORTFOLIO } from "./CONSTANT";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={LANDING} element={<LandingPage />} />
        <Route path={CONTACT} element={<ContacPage />} />
        <Route path={ABOUT} element={<AboutPage />} />
        <Route path={SERVICES} element={<ServicePage />} />
        <Route path={PORTFOLIO} element={<PortfolioPage />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
