"use client";
import TailwindGrid from "../../grid/TailwindGrid";
import ResponsiveList from "../../list/ResponsiveList";
import ParallaxText from "../../slider/ParallaxText";
import FlexCarousel from "../../ui/carousel/flex-carousel/FlexCarousel";
import React from "react";
import PostsDesktopCard from "../../ui/carousel/flex-carousel/cards/PostsDesktopCard";
import { apiMedium } from "../../api/apiMedium";

function PostPreviews({ text }) {
  const dataBlogSection = text.home.blogSection;
  const { posts, isLoading } = apiMedium();

  const processedPostData = posts.slice(0, 3);

  return (
    <div className="relative col-span-full max-w-full  bg-orange-500/0">
      <TailwindGrid fullSize>
        <section className="absolute self-center overflow-hidden max-w-full -z-50 -top-[17vw] md:-top-[11vw] lg:-top-[8.5vw] left-0 ">
          <ParallaxText baseVelocity={dataBlogSection.velocityScroller}>
            {dataBlogSection.textScroller}
          </ParallaxText>
        </section>
      </TailwindGrid>
      <div className="col-span-full max-w-full   flex flex-col justify-center content-center items-center ">
        <TailwindGrid>
          <div className=" self-center  col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 w-full  flex flex-col">
            <h3 className="text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black">
              {dataBlogSection.title}
              <span className="md:hidden">
                <br />
              </span>
              <span className="text-primary">
                {" "}
                {dataBlogSection.titlePrimary}
              </span>
            </h3>
            <div className="hidden md:block pt-9">
              <ResponsiveList
                tablet={3}
                desktop={3}
                mobile={1}
                className="w-full max-w-full "
              >
                {processedPostData &&
                  processedPostData.map((post, index) => (
                    <section
                      className="w-full relative  flex flex-col  items-center justify-center"
                      key={post.title}
                    >
                      <PostsDesktopCard container={post} index={index} />
                    </section>
                  ))}
              </ResponsiveList>
            </div>
          </div>
        </TailwindGrid>
      </div>

      {!isLoading && (
        <div className="inline md:hidden">
          <FlexCarousel
            dataCards={processedPostData}
            width={70}
            reduceGap={15}
            key="post"
            type="post"
          />
        </div>
      )}
    </div>
  );
}

export default PostPreviews;
