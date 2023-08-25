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
      {container.src && (
        <div className=" w-full aspect-video  max-h-full rounded-xl overflow-hidden   ">
          <Image
            src={container.src}
            alt={container.src}
            width={768}
            height={768}
            className="mx-auto  max-h-full aspect-video object-cover pointer-events-none rounded-xl"
          />
        </div>
      )}
    </>
  );
}

export default ImagesCard;
