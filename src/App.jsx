import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CollectionPage from "./pages/CollectionPage";
import CollectionsPage from "./pages/CollectionsPage";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import UserPage from "./pages/UserPage";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
<<<<<<< HEAD

=======
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200,
    });
  }, []);
>>>>>>> jair-popular-collection
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
