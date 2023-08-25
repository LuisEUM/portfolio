import PrimaryButton from "../../ui/buttons/PrimaryButton";
import SecondaryButton from "../../ui/buttons/SecondaryButton";
import HeroImage from "./HeroImage";

function Hero({ text }) {
  const hero = text.home.heroSection;

  return (
    <>
      <section className="col-start-1  col-end-5 md:col-end-6 lg:col-start-2 lg:col-end-8 pt-[5vw] w-full order-2 md:order-1 z-30">
        <div className="flex-col justify-start items-start gap-4  inline-flex lg:pt-[1.5vw]">
          <p className="hidden md:block pb-4">
            <span className="text-primary font-black lg:text-[2.4vw] lg:leading-[1.2vw] ">
              {hero.subtitle.before}
            </span>

            <span className="font-black lg:text-[2.4vw] lg:leading-[1.2vw]">
              {hero.subtitle.text}
            </span>

            <span className="text-primary font-black lg:text-[2.4vw] lg:leading-[1.2vw]  ">
              {hero.subtitle.after}
            </span>
          </p>
          <h1
            style={{
              textShadow:
                "-0.40px -0.40px 0 #0F0F0F, 0.40px -0.40px 0 #0F0F0F, -0.40px 0.40px 0 #0F0F0F, 0.40px 0.40px 0 #0F0F0F",
            }}
          >
            <span className="font-black pr-[min(3rem,1.5vw)] md:pr-3 xl:pr-4 leading-[3.5vw]  text-[min(3rem,9.5vw)] md:leading-[2.5vw] md:text-[5vw] lg:text-[5.3vw]  xl:text-[5.4vw] 2xl:text-[5.5vw] ">
              {hero.title.before}
            </span>
            <span className="text-primary font-black leading-[3.5vw]  text-[min(3rem,9.5vw)] md:leading-[2.5vw] md:text-[5vw] lg:text-[5.3vw] xl:text-[5.4vw] 2xl:text-[5.5vw] md:pr-2 xl:pr-2 ">
              {hero.title.name}
            </span>
            <span className="text-primary font-black leading-[3.5vw]  text-[min(3rem,9.5vw)] md:leading-[2.5vw] md:text-[5vw] lg:text-[5.3vw] xl:text-[5.4vw] 2xl:text-[5.5vw] ">
              {hero.title.lastname}
            </span>
          </h1>
          <p className="font-bold md:w-8/12 lg:w-full text-[min(1.25rem,6.33vw)] lg:text-[1.5vw] max-w-[80%]">
            {hero.quote}
          </p>
          <div className="bg-white w-5/12 lg:w-3/12 h-[0.1rem] " />
          <p className="text-[min(1rem,,3.16vw)] lg:text-[1.2vw] font-medium uppercase  w-11/12 md:w-10/12  lg:w-2/3 ">
            {hero.description}
          </p>
        </div>
        <div className="flex-col justify-center items-center gap-[23px] flex col-span-4  lg:col-start-2 justify- lg:gap-10 lg:inline-flex mt-12 md:flex-row w-full lg:justify-start">
          <PrimaryButton text={hero.buttons.primary} />
          <SecondaryButton>{hero.buttons.secondary}</SecondaryButton>
        </div>
      </section>

      <HeroImage />
    </>
  );
}

export default Hero;
