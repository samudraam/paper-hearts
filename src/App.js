import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Steps from "./Steps";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/paper-hearts" element={<Home />} />
        {/* Steps Route */}
        <Route path="/paper-hearts/steps" element={<Steps />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
