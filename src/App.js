import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./sites/landingpage";
import { Gerente } from "./sites/gerente";
import { MariaJose } from "./sites/mariajose";

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="*" element={<Gerente/>}/>
            <Route path="/mariajose" element={<MariaJose/>}/>
            
          </Routes>
        </Router>
      </>
  );
}

export default App;
