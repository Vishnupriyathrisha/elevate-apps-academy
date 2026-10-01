import "./App.css";

import WelcomeScreen from "./components/WelcomeScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

<components></components>
function App() {
  return (
    <div className="app">
      <WelcomeScreen />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Courses/>
        <WhyUs />
        <Contact />
      </main>

       <Footer />
       
    </div>
  );
}

export default App;