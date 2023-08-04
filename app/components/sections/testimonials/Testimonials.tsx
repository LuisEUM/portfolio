import Image from "next/image";
import React, { useState } from "react";
import ProjectCard from "../../card/ProjectCard";
import TailwindGrid from "../../grid/TailwindGrid";
import ResponsiveList from "../../list/ResponsiveList";
import ParallaxText from "../../slider/ParallaxText";
import CardsCarouselSlider from "../../ui/carousel/CardsCarouselSlider";
import LuisCarousel from "../../ui/carousel/LuisCarousel";

const dataTestimonials = ["1", "2", "3"];

function Testimonials({ text }) {
  const projects = useState(text.portfolio.projects);
  const [contentStart, setContentStart] = useState(
    Math.floor(Math.random() * (text.portfolio.projects.length - 6))
  );
  const [contentEnd, setContentEnd] = useState(
    Math.min(contentStart + 6, text.portfolio.projects.length)
  );

  return (
    <>
      <TailwindGrid fullSize>
        <section className="absolute pt-5 -z-50 overflow-hidden max-w-full">
          <ParallaxText baseVelocity={1.8}>Listen to my community</ParallaxText>
        </section>
      </TailwindGrid>
      <section className=" max-w-full pt-24 pb-10  md:pt-36   w-screen flex flex-col justify-center content-center items-center">
        <TailwindGrid>
          <div className=" self-center  col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 w-full  flex flex-col">
            <h3 className="text-start text-[7vw] leading-[7vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black">
              Voices of Success:
              <span className="md:hidden">
                <br />
              </span>
              <span className="text-primary"> Client Testimonials</span>
            </h3>
            <div className="hidden md:block">
              <ResponsiveList
                tablet={3}
                desktop={3}
                mobile={1}
                className="pt-12 w-full max-w-full "
              >
                {text.portfolio.projects &&
                  dataTestimonials.map((project) => (
                    <section className="w-full relative bg-zinc-900 rounded-[13.87px]  shadow flex flex-col gap-y-2 items-center justify-center text-center px-6 py-5">
                      <Image
                        className=" rounded-full pointer-events-none w-3/12 aspect-square"
                        width={700}
                        height={700}
                        alt={project}
                        src="https://picsum.photos/id/199/900/1600"
                      />
                      <h4 className=" text-center text-white md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw]  font-bold">
                        Mark Johnson
                      </h4>
                      <h5 className=" text-zinc-400 text-xs md:text-[1.4vw] lg:text-[1.2vw] 2xl:text-[0.8vw]  font-medium">
                        CEO of XYZ Company.
                      </h5>
                      <p className="max-w-full   text-slate-50   md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal tracking-tight ">
                        I had the pleasure of collaborating with Luis on a
                        design project, and the results exceeded my
                        expectations. Their attention to detail, creativity, and
                        ability to bring my vision to life was outstanding.
                      </p>
                    </section>
                  ))}
              </ResponsiveList>
            </div>
          </div>
        </TailwindGrid>
      </section>
      <TailwindGrid fullSize>
        <CardsCarouselSlider height={300} />
      </TailwindGrid>
        <LuisCarousel/>
        </>
  );
}

export default Testimonials;
