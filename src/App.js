import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      <Home />
      <Footer />
    </Router>
  );
};

export default App;
