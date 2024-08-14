import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Pages/Header/Header";

function App() {
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
