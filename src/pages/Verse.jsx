import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Divider from "../components/versePage/Divider";

function Verse() {
  const { chapterNumber, verseNumber } = useParams();
  const [loading, setLoading] = useState(true);
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState("");

  async function getVerse() {
    try {
      const response = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/${verseNumber}/`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "fa01877758msh83537b5a81e1c29p16d732jsnab8ca9c33787",
            "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com"
          }
        }
      );
      const data = await response.json();
      setVerse(data);
    } catch (error) {
      setError("Failed to load verse.");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getVerse();
  }, [chapterNumber, verseNumber]);

  function getEnglishTranslation() {
    const foundTranslation = verse.translations.find((translationObject) => {
      return translationObject.language === "english";
    });

    if (foundTranslation) {
      return foundTranslation.description;
    }
    return "No translation found.";
  }

  function getEnglishCommentary() {
    const foundCommentary = verse.commentaries.find((commentryObject) => {
      return commentryObject.language === "english";
    });

    if (foundCommentary) {
      return foundCommentary.description;
    }

    return "No commentary found.";
  }

  if (loading) {
    return (
      <div className="p-8">
        <p className="text-center text-xl font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <p className="text-center text-xl font-semibold text-red-700">
          {error}
        </p>
      </div>
    );
  }

  if (verse === null) {
    return (
      <div className="p-8">
        <p className="text-center text-xl font-semibold text-red-700">
          Failed to load verse.
        </p>
      </div>
    );
  }

  console.log("verse", verse);

  return (
    <div className="p-8 max-w-[1200px] m-auto">
      <div>
        <p className="text-4xl font-bold text-center mb-8">
          {chapterNumber}.{verseNumber}
        </p>
        <h2 className="text-center text-orange-500 text-2xl mb-8">
          {verse.text}
        </h2>
        <p className="text-xl text-center mb-8">{verse.transliteration}</p>
        <p className="text-xl text-center">{verse.word_meanings}</p>
      </div>
      <Divider />
      <div>
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Translation</h2>
          <p className="text-xl text-center">{getEnglishTranslation()}</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-center mb-8">Commentry</h2>
          <p className="text-xl text-center">{getEnglishCommentary()}</p>
        </div>
      </div>
    </div>
  );
}

export default Verse;
