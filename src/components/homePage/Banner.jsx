import React from "react";

function Banner() {
  return (
    <div className="relative">
      <img src="./home-banner.webp" alt="" style={{ width: "100%" }} />
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl text-white font-bold">
        Experience the Gita <br />
        <span className="text-yellow-200">Anywhere, Anytime</span>
      </p>
    </div>
  );
}

export default Banner;
