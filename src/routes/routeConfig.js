import { Routes, Route } from "react-router-dom";
import {  } from "@/pages";
import {

} from "./CONSTANTS";


const RouterConfig = () => {
  return (
    <div>
      <Routes>
          <Route path={DASHBOARD} element={<DashboardPage />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
