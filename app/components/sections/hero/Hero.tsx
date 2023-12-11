import Link from "next/link";
import TailwindGrid from "../../grid/TailwindGrid";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import SecondaryButton from "../../ui/buttons/SecondaryButton";
import HeroImage from "./HeroImage";

function Hero({ text }) {
  const hero = text.home.heroSection;

  return (
    <TailwindGrid>
      <section className="col-start-1 max-w-full w-full col-end-full md:col-start-1 md:col-end-6 lg:col-start-2 lg:col-end-8 pt-[5vw] md:pt-[8vw] lg:pt-[5vw] order-2 md:order-1 z-30 -mt-[7vw] md:-mt-[7vw] lg:-mt-[9vw] col-span-full">
        <div className="flex-col justify-start items-start gap-4  inline-flex lg:pt-[1.5vw]">
          <p className="hidden md:block  lg:pb-4 lg:text-[2.4vw] lg:leading-[1.2vw] font-black md:text-[3vw] md:leading-[6.4vw]">
            <span className="text-primary">{hero.subtitle.before}</span>

            <span className="">{hero.subtitle.text}</span>

            <span className="text-primary">{hero.subtitle.after}</span>
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
            <span className="text-primary font-black leading-[3.5vw]  text-[min(3rem,9.5vw)] md:leading-[2.5vw] md:text-[5vw] lg:text-[5.3vw] xl:text-[5.4vw] 2xl:text-[5.5vw] pr-2 ">
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
        <div className="flex-col justify-center items-center gap-[23px] flex col-span-full  lg:col-start-2  lg:gap-10 lg:inline-flex mt-6 md:mt-12 md:flex-row w-full lg:justify-start ">
          <a
            href={hero.files.src}
            download={hero.files.name}
          >
            <PrimaryButton text={hero.buttons.primary} />
          </a>
          <Link href="/projects?category=All&page=1" className="w-full">
            <SecondaryButton>{hero.buttons.secondary}</SecondaryButton>
          </Link>
        </div>
      </section>
      <HeroImage />
    </TailwindGrid>
  );
}

export default Hero;
