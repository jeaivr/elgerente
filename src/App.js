import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./sites/landingpage";

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}>
            </Route>
          </Routes>
        </Router>
      </>
  );
}

export default App;
