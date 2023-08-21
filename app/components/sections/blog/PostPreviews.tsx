import useScreenWidth from "@/app/components/ui/carousel/flex-carousel/hooks/useScreenWitdh";
import TailwindGrid from "../../grid/TailwindGrid";
import ResponsiveList from "../../list/ResponsiveList";
import ParallaxText from "../../slider/ParallaxText";
import FlexCarousel from "../../ui/carousel/flex-carousel/FlexCarousel";
import Link from "next/link";
import { apiMedium } from "../../api/apiMedium";
import React from "react";
import PostsDesktopCard from "../../ui/carousel/flex-carousel/cards/PostsDesktopCard";

function PostPreviews({ text }) {
  const screenCenter = useScreenWidth();
  const { posts, isLoading } = apiMedium();

  // const extractParagraphContent = (description) => {
  //   const paragraphRegex = /<p>(.*?)<\/p>/;
  //   const match = paragraphRegex.exec(description);
  //   if (match && match[1]) {
  //     return match[1];
  //   }
  //   return "";
  // };

  // const transformHTML = (htmlContent) => {
  //   const transformedContent = htmlContent
  //     .replace(/\<em\>/g, " <em> ")
  //     .replace(/\<\/em\>/g, " </em> ")
  //     .replace(/\<strong\>/g, " <strong> ")
  //     .replace(/\<\/strong\>/g, " </strong> ");

  //   return transformedContent;
  // };

  // const renderWord = (words, word, index) => {
  //   if (word === "<strong>" || word === "<em>") {
  //     const tag = word.slice(1, -1);
  //     let content = "";
  //     let currentIndex = index + 1;

  //     while (
  //       currentIndex < words.length &&
  //       words[currentIndex] !== `</${tag}>`
  //     ) {
  //       content += `${words[currentIndex]} `;
  //       currentIndex++;
  //     }

  //     return React.createElement(tag, { key: index }, transformHTML(content)); // Transform content here
  //   } else if (!word.startsWith("</") && !word.startsWith("<")) {
  //     return (
  //       <span key={index} className={` inline-flex mr-1 last:mr-0`}>
  //         {word}
  //         {"\u00A0"}
  //       </span>
  //     );
  //   }
  //   return null; // Ignore other cases
  // };

  return (
    <div className="col-span-12 max-w-full py-[min(7.5vw,11rem)]">
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
                  posts.slice(0, 3).map((post, index) => (
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

      <div className="block md:hidden">
        {screenCenter && (
          <FlexCarousel
            dataCards={posts.slice(0, 3)}
            width={70}
            reduceGap={15}
            key={screenCenter}
            type="testimonial"
          />
        )}
      </div>
    </div>
  );
}

export default PostPreviews;

function ParagrapHTML({ paragraph, className, limit, unlimited }) {
  const wordsLimit = limit || 40; // Set the number of words you want to show initially
  const wordsArray = paragraph.split(" ");
  const truncatedDescription = unlimited
    ? paragraph
    : wordsArray.slice(0, wordsLimit).join(" ");

  const transformHTML = (htmlContent) => {
    const elements = [];
    const regex = /<(\w+)>(.*?)<\/\1>/g;
    let match;
    let currentIndex = 0;

    while ((match = regex.exec(htmlContent)) !== null) {
      const beforeText = htmlContent.slice(currentIndex, match.index);
      if (beforeText) {
        elements.push(beforeText);
      }

      const tag = match[1];
      const content = match[2];
      if (tag === "strong" || tag === "em") {
        elements.push(React.createElement(tag, { key: currentIndex }, content));
      } else {
        elements.push(content);
      }

      currentIndex = match.index + match[0].length;
    }

    if (currentIndex < htmlContent.length) {
      elements.push(htmlContent.slice(currentIndex));
    }

    return elements;
  };

  const transformedContent = transformHTML(truncatedDescription);

  return <p className={className}>{transformedContent} ...</p>;
}
