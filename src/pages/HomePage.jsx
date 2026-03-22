import React, { useEffect } from "react";
import SelectedCollection from "../components/home/SelectedCollection.jsx";
import NewCollections from "../components/home/NewCollections.jsx";
import PopularCollections from "../components/home/PopularCollections.jsx";
import Trending from "../components/home/Trending.jsx";

// import 'aos/dist/aos.css';
// AOS.init();

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SelectedCollection />
      <Trending />
      <NewCollections />
      <PopularCollections />
    </>
  );
}
