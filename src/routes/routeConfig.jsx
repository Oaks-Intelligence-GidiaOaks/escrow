import { Routes, Route } from "react-router-dom";
import { LandingPage, ContacPage } from "../page";
import { CONTACT, LANDING } from "./CONSTANT";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={LANDING} element={<LandingPage />} />
        <Route path={CONTACT} element={<ContacPage />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
