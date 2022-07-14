import "./App.css";
import Home from "./portfolioContainer/Home/Home";
import AboutMe from "./portfolioContainer/AboutMe/AboutMe";
import ContactMe from "./portfolioContainer/ContactMe/ContactMe";
//import TestMon from "./portfolioContainer/Testmonial/TestMon";
function App() {
  return (
    <div className="App">
      <h1 class="text-3xl font-bold underline">
        <Home />
        <AboutMe />
        <ContactMe />
        {/* //<Testimon /> */}
        {/* <TestMon /> */}
      </h1>
    </div>
  );
}

export default App;
