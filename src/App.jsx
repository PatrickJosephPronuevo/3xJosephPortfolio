import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />

        <Header />

        <AppRoutes />

        <Footer />
      </Router>
    </>
  );
}

export default App;
