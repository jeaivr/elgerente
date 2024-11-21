import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./sites/landingpage";
import { Gerente } from "./sites/gerente";
import { MariaJose } from "./sites/mariajose";
import PDF from "./sites/pdf";

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="*" element={<Gerente/>}/>
            <Route path="/mariajose" element={<MariaJose/>}/>
            <Route path="/pdf" element={<PDF/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
