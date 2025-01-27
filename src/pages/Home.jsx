import React from "react";
import Navbar from "../components/common/Navbar";
import Banner from "../components/homePage/Banner";
import VerseOfTheDay from "../components/homePage/VerseOfTheDay";
import Chapters from "../components/homePage/Chapters";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <VerseOfTheDay />
      <Chapters />
    </div>
  );
}

export default Home;
