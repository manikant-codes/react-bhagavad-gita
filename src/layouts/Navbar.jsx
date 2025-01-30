import React, { useContext } from "react";
import { languageContext } from "../App";

function Navbar() {
  const { language, setLanguage } = useContext(languageContext);

  function changeLanguage(e) {
    setLanguage(e.target.value);
  }

  return (
    <div className=" px-8 py-4 border-b border-b-gray-300 flex justify-between items-center">
      <h1 className="text-3xl font-semibold">
        {language === "english" ? "Bhagawad Gita" : "भागवद गीता"}
      </h1>
      <select onChange={changeLanguage} name="language" id="language">
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
      </select>
    </div>
  );
}

export default Navbar;
