import React from "react";
import ParallaxText from "../../slider/ParallaxText";

function BigQuote() {
  return (
    <div className="relative">

      <div className="w-[1032px] text-center">
        <span className="text-green-600 text-[50px] font-black leading-[46.15px]">
          “
        </span>
        <span className="text-green-600 text-4xl font-black leading-[33.23px]">
          {" "}
        </span>
        <span className="text-white text-[50px] font-black leading-[46.15px]">
          Web dev is my love
        </span>
        <span className="text-green-600 text-[50px] font-black leading-[46.15px]">
          ,
        </span>
        <span className="text-white text-[50px] font-black leading-[46.15px]">
          {" "}
          <br />
          video games are my passion
        </span>
        <span className="text-white text-4xl font-black leading-[33.23px]"> </span>
        <span className="text-green-600 text-[50px] font-black leading-[46.15px]">
          ”
        </span>
      </div>
      <div className="-z-10">
        <ParallaxText baseVelocity={-2}>
          The Power of Passion in Development
        </ParallaxText>
      </div>
    </div>
  );
}

export default BigQuote;
