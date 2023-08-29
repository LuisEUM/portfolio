import Image from "next/image";
import TailwindGrid from "../../grid/TailwindGrid";
import DotFollower from "../../mouse/DotFollower";
import ParallaxIcon from "../../slider/ParallaxIcons";
import ParallaxText from "../../slider/ParallaxText";

function Skills({ text }) {
  const dataSkills = text.home.skillsSection;

  return (
    <div className=" relativew-full h-full flex   z-20 relative  bg-pink-500/0 -mt-[6.75vw] md:-mt-[8.5vw] lg:-mt-[8.75vw] -mb-[1vw] md:-mb-[5.25vw] lg:-mb-[5.25vw]">
      <div className="relative  w-full  overflow-hidden ">
        <DotFollower></DotFollower>

        <TailwindGrid fullSize>
          <section className="absolute self-center overflow-hidden max-w-full -z-50 -top-[9.75vw] md:-top-[2.5vw] lg:top-0 left-0 ">
            <ParallaxText baseVelocity={dataSkills.velocityScroller}>
              {dataSkills.textScroller}
            </ParallaxText>
          </section>
        </TailwindGrid>
        <section className="relative max-w-full  pt-[8.25vw] w-full flex flex-col justify-center content-center items-center">
          <TailwindGrid>
            <div className=" self-center lg:col-start-2  col-span-full lg:col-span-11  w-full  flex flex-col">
              <h3
                className="text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black z-40 pointer-events-none"
                style={{
                  textShadow:
                    "-1px -1px 0 #0F0F0F, 1px -1px 0 #0F0F0F, -1px 1px 0 #0F0F0F, 1px 1px 0 #0F0F0F",
                }}
              >
                {dataSkills.title}
                <span className="md:hidden">
                  <br />
                </span>
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
          <section className="col-span-12 self-center overflow-hidden max-w-full z-20 mt-9">
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
