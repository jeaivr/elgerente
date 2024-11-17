import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./sites/landingpage";
import { Gerente } from "./sites/gerente";

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="*" element={<Gerente/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
