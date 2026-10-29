
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

import AdminLogin from "./components/AdminLogin";
import AdminEnquiries from "./components/AdminEnquiries";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminCourses from "./pages/AdminCourses";
import AdminDashboard from "./pages/AdminDashboard";

function HomePage() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<ProtectedRoute />}>
           <Route
           path="/admin/dashboard"
           element={<AdminDashboard />}
           />
          <Route
            path="/admin/enquiries"
            element={<AdminEnquiries />}
          />
          <Route
  path="/admin/courses"
  element={<AdminCourses />}
/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
