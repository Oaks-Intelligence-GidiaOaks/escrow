import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContacPage from "./page/ContacPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/contact" element={<ContacPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
