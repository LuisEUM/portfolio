import PassionFloatingElements from "./PassionFloatingElements";
import PassionPictureTriangle from "./PassionPictureTriangle";

type PassionImageProps = {
  srcBody?: string;
  srcHead?: string;
};

function PassionImage({ srcBody, srcHead }: PassionImageProps) {
  return (
    <section className="order-1 overflow-x-hidden md:overflow-visible overflow-y-clip -mb-[ 5vw] md:mb-[0] pl-[8vw] md:pl-[0] md:order-2 col-start-1 col-end-5 md:col-start-6 md:col-end-9  lg:col-start-9  lg:col-end-12 items-center  -purple-500/10 flex pt-[4vw]  ">
      <div className="    aspect-square w-10/12 max-w-screen  md:absolute md:w-[40vw] md:h-[40vw]  lg:relative lg:left-[0] md:left-[50vw] z-10 lg:z-30 lg:h-[30vw] lg:w-[30vw] lg:-ml-[10vw] group -slate-700/30 relative ">
        <PassionFloatingElements />
        <PassionPictureTriangle />
      </div>
    </section>
  );
}

export default PassionImage;
