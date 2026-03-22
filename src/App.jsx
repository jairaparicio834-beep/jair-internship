import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CollectionPage from "./pages/CollectionPage";
import CollectionsPage from "./pages/CollectionsPage";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import UserPage from "./pages/UserPage";

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
<<<<<<< HEAD
        <Route path="/item" element={<ItemPage />} />
        <Route path="/user/:id" element={<UserPage />} />
=======
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/user" element={<UserPage />} />
>>>>>>> jair-item-details
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
