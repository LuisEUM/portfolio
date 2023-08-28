"use client";
import useScreenWidth from "@/app/components/ui/carousel/flex-carousel/hooks/useScreenWitdh";
import TailwindGrid from "../../grid/TailwindGrid";
import ResponsiveList from "../../list/ResponsiveList";
import ParallaxText from "../../slider/ParallaxText";
import TestimonialsDesktopCard from "../../ui/carousel/flex-carousel/cards/TestimonialsDesktopCard";
import FlexCarousel from "../../ui/carousel/flex-carousel/FlexCarousel";

function Testimonials({ text }) {
  const dataTestimonials = text.home.testimonialsSection;
  const screenCenter = useScreenWidth();
  const screenWidth = useScreenWidth();

  return (
    <div className="relative col-span-full max-w-full  bg-orange-500/0 pb-[14vw] md:pb-[7vw] lg:pb-[9vw]">
      <TailwindGrid fullSize>
        <section className="absolute pt-5 -z-50 overflow-hidden max-w-full">
          <ParallaxText baseVelocity={0.18}>
            {dataTestimonials.textScroller}
          </ParallaxText>
        </section>
      </TailwindGrid>
      <div className="col-span-full max-w-full   flex flex-col justify-center content-center items-center ">
        <TailwindGrid>
          <div className=" self-center  col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 w-full  flex flex-col">
            <h3 className="text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black">
              {dataTestimonials.title}
              <span className="md:hidden">
                <br />
              </span>
              <span className="text-primary">
                {" "}
                {dataTestimonials.titlePrimary}
              </span>
            </h3>
            <div className="hidden md:block pt-9">
              <ResponsiveList
                tablet={3}
                desktop={3}
                mobile={1}
                className=" w-full max-w-full "
              >
                {dataTestimonials.testimonials &&
                  dataTestimonials.testimonials.map((testimonial, index) => (
                    <section
                      key={testimonial + index}
                      className="w-full relative flex flex-col items-center justify-center"
                    >
                      <TestimonialsDesktopCard container={testimonial} />
                    </section>
                  ))}
              </ResponsiveList>
            </div>
          </div>
        </TailwindGrid>
      </div>

      <div className="inline md:hidden">
        {screenCenter && (
          <FlexCarousel
            dataCards={dataTestimonials.testimonials}
            width={70}
            reduceGap={15}
            key={screenWidth + dataTestimonials.carrouselKey}
            type="testimonial"
          />
        )}
      </div>
    </div>
  );
}

export default Testimonials;
