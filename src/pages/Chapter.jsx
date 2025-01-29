import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Verses from "../components/chapterPage/Verses";

function Chapter() {
  // const params = useParams();
  // const number = params.number;
  // OR
  const { number } = useParams();

  const [loading, setLoading] = useState(true);
  const [chapter, setChapter] = useState(null);
  const [error, setError] = useState("");

  async function getChapter() {
    try {
      const response = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${number}/`,
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

      setChapter(data);
    } catch (error) {
      setError("Failed to load chapter.");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getChapter();
  }, [number]);

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

  if (chapter === null) {
    return (
      <div className="p-8">
        <p className="text-center text-xl font-semibold text-red-700">
          Failed to load chapter.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-[1200px] m-auto">
      <div className="mb-8">
        <p className="text-center uppercase mb-4 text-lg font-semibold text-orange-500">
          Chapter {number}
        </p>
        <h1 className="text-3xl mb-4 font-bold text-center">
          {chapter.name_translated}
        </h1>
        <p className="text-lg m-auto">{chapter.chapter_summary}</p>
      </div>
      <hr className="border border-gray-300" />
      <p className="my-4 font-bold">{chapter.verses_count} Verses</p>
      <hr className="border border-gray-300" />
      <Verses />
    </div>
  );
}

export default Chapter;
