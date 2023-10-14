import HeroFloatingElements from "./HeroFloatingElements";
import HeroPictureTriangle from "./HeroPictureTriangle";


type HeroIMageProps = {
  srcBody?: string;
  srcHead?: string;
};

function HeroImage({ srcBody, srcHead }: HeroIMageProps) {
  return (
    <section className="order-1 overflow-x-hidden w-full md:overflow-visible overflow-y-clip -mb-[5vw] md:mb-[0] pl-[8vw] md:pl-[0] mr-[7.25vw] md:order-2 col-start-1 col-end-5 md:col-start-6 md:col-end-9  lg:col-start-8  lg:col-end-13 items-center  flex pt-[4vw]">
      <div className="aspect-square w-10/12 max-w-screen  md:absolute md:w-[40vw] md:h-[40vw] lg:relative lg:left-[0] md:left-[50vw] z-10 lg:z-30 lg:h-[40vw] lg:-ml-[10vw] group -slate-700/30 relative ">
        <HeroFloatingElements />
        <HeroPictureTriangle srcBody={srcBody} srcHead={srcHead}  />

      </div>
    </section>
  );
}

export default HeroImage;
