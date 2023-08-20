import Image from "next/image";

type LuisItemCarouselProps = {
  container: {
    order: number;
    src?: string;
  };
  containers: Array<{
    order: number;
    src?: string;
  }>;
  index?: number;
  children?: React.ReactNode;
  className?: string;
};

function ImagesCard({ container, index }: LuisItemCarouselProps) {
  return (
    <>
      <div
        className=" w-full aspect-video   max-h-full rounded-xl overflow-hidden   "
        key={index}
      >
        <Image
          src={container.src}
          alt="d"
          width={1920}
          height={1080}
          className="mx-auto  max-h-full aspect-video object-cover pointer-events-none rounded-xl"
        />
      </div>
    </>
  );
}

export default ImagesCard;
