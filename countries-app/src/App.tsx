import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { CountryDetails } from "./pages/CountryDetails/CountryDetails";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:cca3" element={<CountryDetails />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
