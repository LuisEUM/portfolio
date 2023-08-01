import React, { useState } from "react";
import ProjectCard from "../../card/ProjectCard";
import TailwindGrid from "../../grid/TailwindGrid";
import ResponsiveList from "../../list/ResponsiveList";
import ParallaxText from "../../slider/ParallaxText";
import CarouselSlider from "../../ui/carousel/CarouselSlider";

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
              <ResponsiveList tablet={3} desktop={3} mobile={1}>
                {text.portfolio.projects &&
                  dataTestimonials.map((project) => (
                    <div className="w-[316px] h-[248px] relative">
                      <div className="w-[316px] h-[248px] left-0 top-0 absolute bg-zinc-900 rounded-[13.87px] shadow" />
                      <img
                        className="w-[60px] h-[60px] left-[128px] top-[16px] absolute rounded-full"
                        src="https://via.placeholder.com/60x60"
                      />
                      <div className="left-[99px] top-[82px] absolute text-center text-white text-base font-bold">
                        Mark Johnson
                      </div>
                      <div className="left-[100px] top-[107.66px] absolute text-center text-zinc-400 text-[11.10px] font-medium">
                        CEO of XYZ Company.
                      </div>
                      <div className="w-[276px] left-[20px] top-[131px] absolute text-justify text-slate-50 text-sm font-normal tracking-tight">
                        I had the pleasure of collaborating with Luis on a
                        design project, and the results exceeded my
                        expectations. Their attention to detail, creativity, and
                        ability to bring my vision to life was outstanding.
                      </div>
                    </div>
                  ))}
              </ResponsiveList>
            </div>
          </div>
        </TailwindGrid>
      </section>
      <TailwindGrid fullSize>
        <CarouselSlider />
      </TailwindGrid>
    </>
  );
}

export default Testimonials;
