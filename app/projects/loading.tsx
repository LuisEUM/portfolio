import TailwindGrid from "../components/grid/TailwindGrid";

const filteredData = [
  "ALL",
  "CREACIÓN_DE_MARCA",
  "DISEÑO_WEB",
  "UI/UX",
  "REALIDAD_EXTENDIDA",
  "ARTE_3D",
  "GRÁFICOS_ANIMADOS",
];

export default function MoviesLoading() {
  return (
    // <div className="my-24 text-center">
    //   <h1 className="text-2xl flex justify-center items-center">
    //     Movies Fetched with
    //     <span className="inline-block bg-white/20 p-2 mx-2 rounded-md text-sm">
    //       loading.tsx
    //     </span>
    //   </h1>
    //   <div className="my-12 animate-pulse">
    //     {Array.from({ length: 12 }, (movie, i) => (
    //       <div
    //         className="text-white flex flex-col justify-center items-center my-12"
    //         key={i}
    //       >
    //         <div className="bg-gray-700/50 my-6 px-6 rounded-lg">
    //           <h2 className="text-lg  invisible">This is a skeleton render</h2>
    //         </div>
    //         <div className="w-full lg:w-1/2 bg-gray-700/50 h-48 lg:h-96 rounded-2xl"></div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
      <TailwindGrid>
        <section className="mt-20 md:mt-24 lg:mt-20 md:pt-8 flex items-center flex-col gap-6 w-full mb-6  col-span-full">
          <h1 className="bg-gray-700/50 text-transparent animate-pulse font-black pr-[min(3rem,1.5vw)] md:pr-3 xl:pr-4 leading-[min(3rem,9.5vw)] text-[min(3rem,9.5vw)] md:leading-[2.5vw] md:text-[5vw] lg:text-[5.3vw] lg:leading-[5.3vw] xl:text-[5.4vw] xl:leading-[5.4vw] 2xl:text-[5.5vw] 2xl:leading-[5.5vw]  uppercase">
            PROYECTOS
          </h1>
          <p className="bg-gray-700/50 text-transparent animate-pulse self-center text-center md:self-start md:text-start leading-[min(3rem,3.5vw)] text-[min(3rem,3.5vw)] md:text-[1.8vw] md:leading-[1.8vw] lg:text-[1.5vw] lg:leading-[1.5vw] font-medium mx-auto uppercase">
            MÁS DE 10.000 HERMOSOS Y MODERNOS TRABAJOS, DISEÑOS, ILUSTRACIONES Y
            ELEMENTOS GRÁFICOS PARA IOS
          </p>
        </section>
      </TailwindGrid>



      <section className="w-full border-b border-white h-1"/>
      
      <section className="max-w-6/12 gap-x-9 grid grid-cols-6 justify-center items-center content-center ">
        <div className="w-full h-10 animate-pulse bg-gray-700/50"></div>
        <div className="w-full h-10 animate-pulse bg-gray-700/50"></div>
        <div className="w-full h-10 animate-pulse bg-gray-700/50"></div>
        <div className="w-full h-10 animate-pulse bg-gray-700/50"></div>
        <div className="w-full h-10 animate-pulse bg-gray-700/50"></div>
        <div className="w-full h-10 animate-pulse bg-gray-700/50"></div>
      </section>

      <TailwindGrid>
        <div className=" self-center  col-span-full w-full justify-center items-center flex flex-col">
          <div className="grid-cols-1 md:grid-cols-3 pt-12 w-full max-w-full lg:min-h-[35vw] gap-4  md:gap-6  lg:gap-6 grid gap-y-10 content-center justify-center">
            <div className="w-full aspect-video animate-pulse bg-gray-700/50"></div>
            <div className="w-full aspect-video animate-pulse bg-gray-700/50"></div>
            <div className="w-full aspect-video animate-pulse bg-gray-700/50"></div>
            <div className="w-full aspect-video animate-pulse bg-gray-700/50"></div>
            <div className="w-full aspect-video animate-pulse bg-gray-700/50"></div>
            <div className="w-full aspect-video animate-pulse bg-gray-700/50"></div>
          </div>
        </div>
      </TailwindGrid>
      <section className=" w-full mt-5 mb-10 h-10 animate-pulse bg-gray-700/50"></section>
    </>
  );
}
