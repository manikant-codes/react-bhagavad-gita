import React, { useContext } from "react";
import { languageContext } from "../App";

function Footer() {
  const { language } = useContext(languageContext);
  return (
    <div className="bg-gray-800 text-white p-4 text-center">
      <p>
        {language === "english"
          ? "May the world know god and in doing so may it know peace."
          : "सारी दुनिया भगवान को पहचाने, और पहचान में शांति पाए।"}
      </p>
    </div>
  );
}

export default Footer;
