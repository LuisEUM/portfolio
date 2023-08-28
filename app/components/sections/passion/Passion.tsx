import TailwindGrid from "../../grid/TailwindGrid";
import BigQuote from "../quote/BigQuote";
import PassionImage from "./PassionImage";

function Passion({ text }) {
  return (
    <div>
      <BigQuote text={text} />
      <div className="mt-[14vw] md:mt-[7vw] lg:mt-[9vw]">
        <TailwindGrid>
          <section className="flex col-start-1  col-end-5 md:col-end-5 lg:col-start-2 lg:col-end-7 w-full h-full order-2 md:order-1 z-30 ">
            <div className="flex flex-col justify-center items-center gap-4 align-middle">
              <h3 className="self-center text-center  md:self-start md:text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black">
                But why
                <span className="md:hidden">
                  <br />
                </span>
                <span className="text-primary "> Video Games?</span>
              </h3>
              <p className="max-w-full text-center md:text-left text-slate-50 md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight">
                Once upon a time, there was a passionate developer named Luis
                Urdaneta. With a heart full of creativity and a mind brimming
                with ideas, Luis embarked on a journey into the world of game
                development. Through dedication and skill, he crafted immersive
                digital experiences that captivated players and transported them
                to new realms of excitement.
              </p>
            </div>
          </section>
          <PassionImage />
        </TailwindGrid>
      </div>
    </div>
  );
}

export default Passion;
