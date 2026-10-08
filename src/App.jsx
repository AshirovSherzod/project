import { Route, Routes } from "react-router-dom";
import "./App.css";
import Service from "./pages/service/Service";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/header/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes> 
    </>
  );
}
