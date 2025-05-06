import CompaniesLogo from "./components/CompaniesLogo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header/>
      <Hero/>
      <CompaniesLogo/>
      <Footer/>
    </div>
  );
}

export default App;
