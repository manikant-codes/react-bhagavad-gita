import React, { useContext, useEffect, useState } from "react";
import ChapterCard from "./ChapterCard";
import { languageContext } from "../../App";

function Chapters() {
  const { language } = useContext(languageContext);
  //   let chapters;
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState(null);
  const [error, setError] = useState("");

  console.log("chapters", chapters);

  async function getAllChapters() {
    try {
      const response = await fetch(
        "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18",
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
      setChapters(data);
      //   console.log("data", data);
      //   chapters = data;
      //   console.log("chapters", chapters);
    } catch (error) {
      setError("Something went wrong...");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllChapters();
  }, []);

  if (loading) {
    return (
      <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold">Chapters</h2>
        <p className="mt-8 text-xl animate-pulse w-fit">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold">Chapters</h2>
        <p className="mt-8 text-xl text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-semibold">
        {language === "english" ? "Chapters" : "अध्याय"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
        {chapters.map((chapterObject) => {
          return (
            <ChapterCard
              key={chapterObject.chapter_number}
              number={chapterObject.chapter_number}
              name={
                language === "english"
                  ? chapterObject.name_translated
                  : chapterObject.name
              }
              desc={
                language === "english"
                  ? chapterObject.chapter_summary
                  : chapterObject.chapter_summary_hindi
              }
              totalVerses={chapterObject.verses_count}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Chapters;
