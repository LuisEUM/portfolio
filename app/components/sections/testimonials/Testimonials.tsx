import useScreenWidth from "@/app/components/ui/carousel/flex-carousel/hooks/useScreenWitdh";
import TailwindGrid from "../../grid/TailwindGrid";
import ResponsiveList from "../../list/ResponsiveList";
import ParallaxText from "../../slider/ParallaxText";
import TestimonialsDesktopCard from "../../ui/carousel/flex-carousel/cards/TestimonialsDesktopCard";
import FlexCarousel from "../../ui/carousel/flex-carousel/FlexCarousel";

const dataTestimonials = [
  {
    order: 1,
    src: "https://picsum.photos/id/202/900/1600",
  },
  {
    order: 2,
    src: "https://picsum.photos/id/203/900/1600",
  },
  {
    order: 3,
    src: "https://picsum.photos/id/204/900/1600",
  },
  {
    order: 4,
    src: "https://picsum.photos/id/201/900/1600",
  },
  {
    order: 5,
    src: "https://picsum.photos/id/199/900/1600",
  },
];
function Testimonials({ text }) {
  const dataTestimonials = text.home.testimonialsSection;
  const screenCenter = useScreenWidth();

  return (
    <div className="col-span-12 max-w-full py-[min(7.5vw,11rem)]">
      <TailwindGrid fullSize>
        <section className="absolute pt-5 -z-50 overflow-hidden max-w-full">
          <ParallaxText baseVelocity={0.18}>Listen to my community</ParallaxText>
        </section>
      </TailwindGrid>
      <section className=" max-w-full pt-24 pb-10  md:pt-36   w-screen flex flex-col justify-center content-center items-center">
        <TailwindGrid>
          <div className=" self-center  col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 w-full  flex flex-col">
            <h3 className="text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black">
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
                  dataTestimonials.map((testimonial, index) => (
                    <section className="w-full relative bg-zinc-900 rounded-[13.87px]  shadow flex flex-col gap-y-2 items-center justify-center text-center px-6 py-5">
                      <TestimonialsDesktopCard
                        className="items-center justify-center text-center bg-zinc-900 rounded-xl shadow flex flex-col gap-y-2 mx-auto"
                        container={testimonial}
                        index={index}
                      />
                    </section>
                  ))}
              </ResponsiveList>
            </div>
          </div>
        </TailwindGrid>
      </section>

      <div className="block md:hidden">
        {screenCenter && (
          <FlexCarousel
            dataCards={dataTestimonials}
            width={70}
            reduceGap={20}
            key={screenCenter}
            type="testimonial"
          />
        )}
      </div>
    </div>
  );
}

export default Testimonials;
