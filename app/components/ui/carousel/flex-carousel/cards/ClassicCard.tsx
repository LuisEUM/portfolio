import Image from "next/image";

type ClasicCardProps = {
  container: {
    order: number;
    src: string;
    name?: string;
    position?: string;
    description?: string;

  };
  containers: Array<{
    order: number;
    src: string;
  }>;
  index?: number;
  children?: React.ReactNode;
  className?: string;
};

function ClasicCard({ container, children, index }: ClasicCardProps) {
  return (
    <div className="items-center justify-center text-center bg-zinc-900 rounded-xl shadow flex flex-col gap-y-2 mx-auto px-10 py-5 my-10 ">
      <Image
        className=" rounded-full pointer-events-none w-3/12 aspect-square"
        width={700}
        height={700}
        alt={`${container.order}`}
        src={container.src}
      />
      <h4 className=" text-center text-white md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw]  font-bold">
        {container.name}
      </h4>
      <h5 className=" text-zinc-400 text-xs md:text-[1.4vw] lg:text-[1.2vw] 2xl:text-[0.8vw]  font-medium">
        {container.position}
      </h5>
      <p className="max-w-full   text-slate-50   md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight ">
        {container.description}
      </p>
    </div>
  );
}

export default ClasicCard;
