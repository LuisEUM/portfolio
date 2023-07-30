import React from "react";
import ParallaxText from "../../slider/ParallaxText";
import TailwindGrid from "../../grid/TailwindGrid";

function BigQuote() {
  return (
    <section className="relative max-w-full  py-72 w-screen flex flex-col justify-center content-center items-center">
      <TailwindGrid fullSize>
        <section className="absolute self-center overflow-hidden max-w-full -z-50">
          <ParallaxText baseVelocity={-2}>The Power of Passion</ParallaxText>
        </section>
      </TailwindGrid>
      <TailwindGrid >
        <h3 className=" self-center w-full absolute col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 text-center text-[8vw] leading-[10vw] md:text-[6vw] md:leading-[6vw] lg:text-[4vw] lg:leading-[4vw] font-black  max-w-full ">
          <span className="text-primary">“&nbsp;</span>
          <span className="">Web dev is my love</span>
          <span className="text-primary">,</span>
          <span>
            <br />
            video games are my passion
          </span>
          <span className="text-primary ">&nbsp;”</span>
        </h3>
      </TailwindGrid>
    </section>
  );
}

export default BigQuote;
{
  /* <section className="px-9 grid grid-cols-12 gap-6 fixed max-w-full w-100 w-screen -z-50 "> */
}
