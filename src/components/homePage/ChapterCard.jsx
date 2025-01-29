import React from "react";
import { useNavigate } from "react-router-dom";

function ChapterCard({ number, name, desc, totalVerses }) {
  const navigate = useNavigate();

  function goToChapter() {
    navigate(`/chapter/${number}`);
  }

  return (
    <div
      onClick={goToChapter}
      className="bg-white cursor-pointer hover:bg-orange-100 border border-gray-300 rounded-lg p-4"
    >
      <p className="text-orange-500 font-bold">Chapter {number}</p>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 line-clamp-5">{desc}</p>
      <p className="mt-4">{totalVerses} Verses</p>
    </div>
  );
}

export default ChapterCard;
