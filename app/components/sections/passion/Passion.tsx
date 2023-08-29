import TailwindGrid from "../../grid/TailwindGrid";
import { RiveAnimation } from "../../rive/RiveAnimation";
import BigQuote from "../quote/BigQuote";
import PassionImage from "./PassionImage";

function Passion({ text }) {
  const passionData = text.home.passionSection;
  return (
    <div>
      <BigQuote text={passionData.bigQuote} />
      <div className="mt-[7vw] md:mt-[15.5vw] lg:mt-[6.5vw] mb-[3.5vw] md:mb-[7.75vw] lg:mb-0 ">
        <TailwindGrid>
          <section className="flex col-start-1  col-end-5 md:col-end-5 lg:col-start-2 lg:col-end-7 w-full h-full order-2 md:order-1 z-30 ">
            <div className="flex flex-col justify-center items-center gap-4 align-middle">
              <h3 className="self-center text-center  md:self-start md:text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black">
                {passionData.title}
                <span className="md:hidden">
                  <br />
                </span>
                <span className="text-primary ">
                  {passionData.titlePrimary}
                </span>
              </h3>
              <p className="max-w-full text-center md:text-left text-slate-50 md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight">
                {passionData.description}
              </p>
            </div>
          </section>
          <PassionImage artboardName={passionData.artboardName} />
        </TailwindGrid>
      </div>
    </div>
  );
}

export default Passion;
