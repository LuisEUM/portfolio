type TailwindGridProps = {
  children: React.ReactNode;
  show?: boolean;
  fullSize?: boolean;
  className?: string;
};

function TailwindGrid({ children, show, className, fullSize }: TailwindGridProps) {
  const color = className;

  return (
    <>
      <section className={`px-4 min-w-[360px]  md:px-6 lg:px-8  w-full bg-red-500/10 -z-50`}>
        <section className=" gap-4 grid-cols-4  md:gap-6 md:grid-cols-8 lg:gap-6 lg:grid-cols-12 grid relative  w-full -z-50  justify-center">
          {show && (
            <div className="gap-4 grid-cols-4  md:gap-6 md:grid-cols-8 lg:gap-6  lg:grid-cols-12 grid absolute w-full -z-50  justify-center">
              <div
                className={`h-screen text-center text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                1
              </div>
              <div
                className={`h-screen text-center text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                2
              </div>
              <div
                className={`h-screen text-center text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                3
              </div>
              <div
                className={`h-screen text-center text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                4
              </div>
              <div
                className={`hidden md:block h-screen text-center text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                5
              </div>
              <div
                className={`hidden md:block h-screen text-center text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                6
              </div>
              <div
                className={`hidden md:block h-screen text-center text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                7
              </div>
              <div
                className={`hidden md:block h-screen text-center text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                8
              </div>
              <div
                className={`hidden lg:block h-screen text-center text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                9
              </div>
              <div
                className={`hidden lg:block h-screen text-center text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                10
              </div>
              <div
                className={`hidden lg:block h-screen text-center text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                11
              </div>
              <div
                className={` hidden lg:block h-screen text-center  text-zinc-900 col-span-1 ${
                  color || "bg-blue-200/20"
                }`}
              >
                12
              </div>
            </div>
          )}
        </section>
      </section>
      <section className={` ${!fullSize && "px-4 md:px-6 lg:px-8"} min-w-[360px] w-full   gap-4 grid-cols-4  md:gap-6 md:grid-cols-8 lg:gap-6  lg:grid-cols-12 grid relative  items-center justify-center`}>
        {children}
      </section>
      
    </>
  );
}

export default TailwindGrid;
