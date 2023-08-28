import ParallaxText from "../../slider/ParallaxText";
import TailwindGrid from "../../grid/TailwindGrid";

function BigQuote({ text }) {
  const parallax = text.home.bigQuoteSection.textScroller;
  const quote = text.home.bigQuoteSection.quote;

  return (
    <section className="relative max-w-full  h-[30vw] md:h-[18vw] lg:h-[10.25vw]   w-full flex flex-col justify-center content-center items-center -z-10 bg-yellow-500/0">
      <TailwindGrid fullSize>
        <section className="absolute self-center overflow-hidden max-w-full -z-50">
          <ParallaxText baseVelocity={-0.2}>{parallax}</ParallaxText>
        </section>
      </TailwindGrid>
      <TailwindGrid>
        <h3 className=" self-center w-full absolute top-1/2 -translate-y-1/2 col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 text-center text-[8vw] leading-[10vw] md:text-[6vw] md:leading-[6vw] lg:text-[4vw] lg:leading-[4vw] font-black  max-w-full ">
          <span className="text-primary">“&nbsp;</span>
          <span className="">{quote.lineOne}</span>
          <span className="text-primary">,</span>
          <span>
            <br />
            {quote.lineTwo}
          </span>
          <span className="text-primary ">&nbsp;”</span>
        </h3>
      </TailwindGrid>
    </section>
  );
}

export default BigQuote;
