import React from "react";

function ChapterCard({ number, name, desc, totalVerses }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4">
      <p className="text-orange-500 font-bold">Chapter {number}</p>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 line-clamp-5">{desc}</p>
      <p className="mt-4">{totalVerses} Verses</p>
    </div>
  );
}

export default ChapterCard;
