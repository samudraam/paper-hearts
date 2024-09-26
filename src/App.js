import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Steps from './Steps'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        {/* Steps Route */}
        <Route path="/steps" element={<Steps />} />
      </Routes>
      <Home />
      <Footer />
    </Router>
  );
};

export default App;
