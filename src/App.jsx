import CompaniesLogo from "./components/CompaniesLogo";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header/>
      <Hero/>
      <CompaniesLogo/>
    </div>
  );
}

export default App;
