import { useEffect } from "react";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Pages/Header/Header";
import { register } from "swiper/element";

function App() {

  useEffect(() => {
    register()
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Header />
      </main>
      <Footer />
    </div>
  );
}

export default App;
