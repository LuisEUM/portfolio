import Image from "next/image";
import React from "react";

function Skills({ text }) {
  const dataTestimonials = text.home.skillsSection;

  return (
    <>
      <div className=" h-[108.87px] justify-start items-center gap-[34px] inline-flex">
        {dataTestimonials.firstLine &&
          dataTestimonials.firstLine.map((skill) => (
            <div className="flex-col justify-center items-center gap-2 inline-flex">
              <div className="w-24 h-24 relative bg-stone-950 rounded-xl s hadow-inner flex-col justify-center items-center flex">
                <Image
                  src={skill.src}
                  width={50}
                  height={50}
                  alt="skill"
                  className="max-w-10/12  object-cover"
                />
              </div>
              <div className="w-[79.12px] h-[12.23px] text-center text-zinc-500 text-[9.17px] font-bold uppercase tracking-wide">
                {skill.name}
              </div>
            </div>
          ))}
      </div>
      <div className=" h-[108.87px] justify-start items-center gap-[34px] inline-flex mt-5">
        {dataTestimonials.secondLine &&
          dataTestimonials.secondLine.map((skill) => (
            <div className="flex-col justify-center items-center gap-2 inline-flex">
              <div className="w-24 h-24 relative bg-stone-950 rounded-xl s hadow-inner flex-col justify-center items-center flex">
                <Image
                  src={skill.src}
                  width={50}
                  height={50}
                  alt="skill"
                  className="max-w-10/12  object-cover"
                />
              </div>
              <div className="w-[79.12px] h-[12.23px] text-center text-zinc-500 text-[9.17px] font-bold uppercase tracking-wide">
                {skill.name}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Skills;
