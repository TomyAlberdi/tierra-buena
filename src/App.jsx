import { useEffect } from "react";
import AppContextComponent from "./Hooks/AppContextComponent";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Pages/Header/Header";
import SecondIntro from "./Pages/SecondIntro/SecondIntro";
import { register } from "swiper/element";
import Courses from "./Pages/Courses/Courses";
import Location from "./Pages/Location/Location";

function App() {
  useEffect(() => {
    register();
  }, []);

  return (
    <AppContextComponent>
      <div className="App">
        <Navbar />
        <main>
          <Header />
          <SecondIntro />
          <Courses />
          <Location />
        </main>
        <Footer />
      </div>
    </AppContextComponent>
  );
}

export default App;
