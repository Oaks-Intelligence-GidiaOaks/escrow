import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./routes/routeConfig";
import "./App.css";
import ReactGA from "react-ga";

const MEASUREMENT_ID = "G-LJPRLX47EX";
ReactGA.initialize(MEASUREMENT_ID);

function App() {
  return (
    <>
      <Router>
        <RouterConfig />
      </Router>
    </>
  );
}

export default App;
