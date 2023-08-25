import Image from "next/image";
import TailwindGrid from "../../grid/TailwindGrid";
import DotFollower from "../../mouse/DotFollower";
import ParallaxIcon from "../../slider/ParallaxIcons";
import ParallaxText from "../../slider/ParallaxText";

function Skills({ text }) {
  const dataSkills = text.home.skillsSection;

  return (
    <>
      <div className="w-full h-full flex pt-[min(7.5vw,11rem)]  z-40 relative  ">
        <div className="relative  w-full  overflow-hidden ">
          <DotFollower></DotFollower>
          <section className="relative max-w-full mt-20  pt-10 w-screen flex flex-col justify-center content-center items-center">
            <TailwindGrid fullSize>
              <section className="absolute self-center overflow-hidden max-w-full -z-50">
                <ParallaxText baseVelocity={0.3}>{dataSkills.textScroller}</ParallaxText>
              </section>
            </TailwindGrid>
            <TailwindGrid>
              <div className=" self-center  col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 w-full  flex flex-col">
                <h3
                  className="text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black z-40 pointer-events-none"
                  style={{
                    textShadow:
                      "-1px -1px 0 #0F0F0F, 1px -1px 0 #0F0F0F, -1px 1px 0 #0F0F0F, 1px 1px 0 #0F0F0F",
                  }}
                >
                  {dataSkills.title}
                  <span className="md:hidden"></span>
                  <span className="text-primary"> {dataSkills.titlePrimary}</span>
                  {/* <div
                    ref={initialPosition}
                    className="w-[0.55vw] h-[0.55vw] bg-primary rounded-full inline-block self-baseline -mb-[0.5px] ml-[1.5px]"
                    style={{
                      boxShadow:
                        "-1px -1px 0 #0F0F0F, 1px -1px 0 #0F0F0F, -1px 1px 0 #0F0F0F, 1px 1px 0 #0F0F0F",
                    }}
                  /> */}
                </h3>
              </div>
            </TailwindGrid>
          </section>
          <TailwindGrid fullSize>
            <section className="col-span-12 self-center overflow-hidden max-w-full z-20 mt-[6vw] md:mt-[5vw] lg:mt-[2.5vw]">
              <ParallaxIcon baseVelocity={-0.2}>
                <div className=" justify-start items-center gap-8  inline-flex ">
                  {dataSkills.firstLine &&
                    dataSkills.firstLine.map((skill, index) => (
                      <SkillsItems skill={skill} key={index + skill.name} />
                    ))}
                </div>
              </ParallaxIcon>
            </section>
            <section className="col-span-12 self-center overflow-hidden max-w-full z-20 mb-[3vw] md:mb-[5vw] mt-[6vw] md:mt-[1vw]">
              <ParallaxIcon baseVelocity={0.2}>
                <div className=" justify-start items-center gap-8 inline-flex  ">
                  {dataSkills.secondLine &&
                    dataSkills.secondLine.map((skill, index) => (
                      <SkillsItems skill={skill} key={index + skill.name} />
                    ))}
                </div>
              </ParallaxIcon>
            </section>
          </TailwindGrid>
        </div>
      </div>
    </>
  );
}

export default Skills;

function SkillsItems({ skill }) {
  return (
    <div className=" group flex-col justify-center items-center gap-2 inline-flex  ">
      <div className="w-[20vw] h-[20vw] md:w-[16vw] md:h-[16vw] lg:w-[8vw] lg:h-[8vw] relative bg-stone-950  rounded-xl s hadow-inner flex-col justify-center items-center flex">
        <Image
          src={skill.src}
          width={50}
          height={50}
          alt="skill"
          className="max-w-10/12  object-cover group-hover:scale-125 transition-all duration-200 z-30"
        />
      </div>
      <p className=" text-center text-xs lg:text-[#0F0F0F] text-[0.60vw] font-bold uppercase tracking-wide group-hover:scale-125 transition-all duration-200 ">
        {skill.name}
      </p>
    </div>
  );
}
