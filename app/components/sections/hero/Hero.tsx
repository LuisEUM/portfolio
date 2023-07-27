import PrimaryButton from "../../ui/buttons/PrimaryButton";
import SecondaryButton from "../../ui/buttons/SecondaryButton";
import HeroImage from "./HeroImage";

function Hero({ text }) {
  return (
    <div className=" h-scren flex flex-col items-center justify-center relative bg-red-">
      <section className="px-9 grid grid-cols-12 gap-x-6 max-w-full w-100 w-screen z-40 ">
        <section className="col-start-2 col-end-8 pt-10">
          <div className="flex-col justify-start items-start gap-4  inline-flex ">
            <p className="pb-4">
              <span className="text-primary text-[2.4vw] leading-[1.2vw] font-black">
                &lt;
              </span>
              <span className="text-[2.4vw] leading-[1.2vw] font-black">
                HelloWorld
              </span>
              <span className="text-primary text-[2.4vw] leading-[1.2vw] font-black">
                &#47;&gt;
              </span>
            </p>
            <h1>
              <span className="pr-4 md:pr-3 xl:pr-4 leading-[3.5vw] text-[4.5vw] md:leading-[2.5vw] md:text-[5vw] lg:text-[5.3vw]  xl:text-[5.4vw] 2xl:text-[5.5vw] font-black">
                I’m
              </span>
              <span className="pr-4 md:pr-2 xl:pr-4 text-primary leading-[3.5vw] text-[4.5vw] md:leading-[2.5vw] md:text-[5vw] lg:text-[5.3vw] xl:text-[5.4vw] 2xl:text-[5.5vw] font-black">
                Luis
              </span>
              <span className="text-primary leading-[3.5vw] text-[4.5vw] md:leading-[2.5vw] md:text-[5vw] lg:text-[5.3vw] xl:text-[5.4vw] 2xl:text-[5.5vw] font-black">
                Urdaneta
              </span>
            </h1>
            <p className="text-[1.5vw] font-bold ">
              FullStack Web Developer, Graphic Designer, Digital Marketing
            </p>
            <div className="w-3/12 h-[0.1rem] bg-white" />
            <p className="text-[1.2vw] font-medium uppercase w-2/3">
              ayudo a negocios a mejorar su comunicación, digitalización y
              conexión con su marca.
            </p>
          </div>
          <div className=" col-start-2 justify-start items-center gap-10 inline-flex mt-12">
            <PrimaryButton text={text}/>
            <SecondaryButton text={text}/>
          </div>
        </section>

        <HeroImage />
      </section>
    </div>
  );
}

export default Hero;
