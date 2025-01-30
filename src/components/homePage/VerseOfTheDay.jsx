import React, { useContext } from "react";
import { languageContext } from "../../App";

function VerseOfTheDay() {
  const { language } = useContext(languageContext);
  return (
    <div className="p-8 bg-orange-100">
      <p className="text-orange-500 font-bold">Verse of the day - BG 1.27</p>
      <p className="text-lg text-gray-500 font-semibold italic">
        He saw fathers-in-law and friends in both the armies. The son of Kunti,
        Arjuna, seeing all those kinsmen thus standing arrayed, spoke
        sorrowfully, deeply filled with pity.
      </p>
      <button className="mt-4 font-semibold uppercase cursor-pointer hover:text-gray-700">
        See More
      </button>
    </div>
  );
}

export default VerseOfTheDay;
