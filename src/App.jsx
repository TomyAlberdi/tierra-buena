import { useEffect } from "react";
import AppContextComponent from "./Hooks/AppContextComponent";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Pages/Header/Header";
import SecondIntro from "./Pages/SecondIntro/SecondIntro";
import { register } from "swiper/element";
import Courses from "./Pages/Courses/Courses";
import Contact from "./Pages/Contact/Contact";
import MobileNavbar from "./Mobile/MobileNavbar/MobileNavbar";

function App() {
  useEffect(() => {
    register();
  }, []);

  return (
    <AppContextComponent>
      <div className="App">
        <Navbar />
        <MobileNavbar />
        <main>
          <Header />
          <SecondIntro />
          <Courses />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppContextComponent>
  );
}

export default App;
