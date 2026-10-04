import "./App.css";

import WelcomeScreen from "./components/WelcomeScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyUs from "./components/WhyUs";
import Learning from "./components/Learning";
import Network from "./components/Network";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <WelcomeScreen />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Courses />
        <WhyUs />
        <Learning />
        <Network />
        <Events />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;