"use client";
import useScreenWidth from "@/app/components/ui/carousel/flex-carousel/hooks/useScreenWitdh";
import TailwindGrid from "../../grid/TailwindGrid";
import ResponsiveList from "../../list/ResponsiveList";
import ParallaxText from "../../slider/ParallaxText";
import FlexCarousel from "../../ui/carousel/flex-carousel/FlexCarousel";
import React from "react";
import PostsDesktopCard from "../../ui/carousel/flex-carousel/cards/PostsDesktopCard";
import { apiMedium } from "../../api/apiMedium";

function PostPreviews({ text }) {
  const screenCenter = useScreenWidth();
  const { posts, isLoading } = apiMedium();

  const processedPostData = posts.slice(0, 3);

  return (
    <div className="col-span-full max-w-full py-[min(7.5vw,11rem)]">
      <TailwindGrid fullSize>
        <section className="absolute pt-5 -z-50 overflow-hidden max-w-full">
          <ParallaxText baseVelocity={0.18}>
            Listen to my community
          </ParallaxText>
        </section>
      </TailwindGrid>
      <section className=" max-w-full pt-24 pb-10  md:pt-36   w-screen flex flex-col justify-center content-center items-center">
        <TailwindGrid>
          <div className=" self-center  col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13 w-full  flex flex-col">
            <h3 className="text-start text-[7vw] leading-[8vw] md:text-[4.8vw] md:leading-[4.8vw] lg:text-[3vw] lg:leading-[3vw] font-black">
              If you want more
              <span className="md:hidden">
                <br />
              </span>
              <span className="text-primary"> read my blog:</span>
            </h3>
            <div className="hidden md:block">
              <ResponsiveList
                tablet={3}
                desktop={3}
                mobile={1}
                className="pt-12 w-full max-w-full "
              >
                {posts &&
                  processedPostData.map((post, index) => (
                    <section className="w-full relative  flex flex-col  items-center justify-center">
                      <PostsDesktopCard
                        className=" items-center justify-center text-center px-6 py-5 bg-zinc-900 rounded-2xl shadow flex flex-col gap-y-2 mx-auto"
                        container={post}
                        index={index}
                      />
                    </section>
                  ))}
              </ResponsiveList>
            </div>
          </div>
        </TailwindGrid>
      </section>

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
