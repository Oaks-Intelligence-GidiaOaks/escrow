import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./routes/routeConfig";
import "./App.css";
import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-LJPRLX47EX";
ReactGA.initialize(MEASUREMENT_ID);

ReactGA.send({ hitType: "pageview", page: document.location.pathname });

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
