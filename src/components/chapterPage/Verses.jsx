import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Verses() {
  const { number } = useParams();
  const [loading, setLoading] = useState(true);
  const [verses, setVerses] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function goToVerse(verseNumber) {
    navigate(`/chapter/${number}/verse/${verseNumber}`);
  }

  async function getAllVerses() {
    try {
      const response = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${number}/verses/`,
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
      setVerses(data);
    } catch (error) {
      setError("Failed to load verses.");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllVerses();
  }, [number]);

  console.log("verses", verses);

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

  if (verses === null) {
    return (
      <div className="p-8">
        <p className="text-center text-xl font-semibold text-red-700">
          Failed to load verses.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ul className="flex flex-col gap-4 my-4">
        {verses.map((verseObject) => {
          return (
            <li
              onClick={() => {
                goToVerse(verseObject.verse_number);
              }}
              className="grid grid-cols-[100px_1fr] p-4 hover:bg-orange-100 cursor-pointer"
            >
              <p className="text-orange-500">
                Verse {verseObject.verse_number}
              </p>
              <p>{verseObject.transliteration}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Verses;
