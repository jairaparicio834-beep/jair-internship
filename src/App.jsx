import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CollectionPage from "./pages/CollectionPage";
import CollectionsPage from "./pages/CollectionsPage";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import UserPage from "./pages/UserPage";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration in ms
      offset: 200,
    })
  }, [])
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/item" element={<ItemPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
