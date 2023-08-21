"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type PostsDesktopCardProps = {
  container: {
    link?: string;
    title?: string;
    thumbnail?: string;
    pubDate?: string;
    order?: number;
    description?: string;
  };
  containers?: Array<{
    order: number;
    src?: string;
  }>;
  index?: number;
  children?: React.ReactNode;
  className?: string;
  centerOrder?: number;
};

function PostsDesktopCard({
  container,
  index,
  className,
}: PostsDesktopCardProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const extractParagraphContent = (description) => {
    const paragraphRegex = /<p>(.*?)<\/p>/;
    const match = paragraphRegex.exec(description);
    if (match && match[1]) {
      return match[1];
    }
    return "";
  };

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  const renderDescription = () => {
    if (!showFullDescription) {
      return (
        <>
          <ParagrapHTML
            className="max-w-full md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal text-center tracking-tight px-[2%]"
            paragraph={extractParagraphContent(container.description)}
            limit={25}
            showFullDescription
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-primary font-normal underline md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw]  cursor-pointer z-30 p-2"
            onClick={toggleDescription}
            dragListener={false}
          >
            Read More
          </motion.button>
        </>
      );
    } else {
      return (
        <>
          <ParagrapHTML
            className="max-w-full md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal text-center tracking-tight px-[2%]"
            paragraph={extractParagraphContent(container.description)}
            unlimited
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-primary font-normal underline md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw]  cursor-pointer z-30 p-2"
            onClick={toggleDescription}
            dragListener={false}
          >
            Read Less
          </motion.button>
        </>
      );
    }
  };

  return (
    // <Link href={container.link} key={container.title}>
    <motion.div
      layout="position"
      className="max-h-fit w-full justify-between items-center  text-center bg-zinc-900 rounded-xl shadow flex flex-col gap-y-2 mx-auto"
    >
      <div className="w-full aspect-video bg-zinc-800 rounded-tl-xl rounded-tr-xl justify-center items-center inline-flex">
        <Image
          width={1080}
          height={1080}
          className="w-full aspect-video  rounded-tl-xl rounded-tr-xl justify-center items-center inline-flex object-cover"
          src={container.thumbnail}
          alt={container.title}
        />
      </div>

      <div className="h-full items-center flex flex-col justify-center gap-y-2 mx-auto py-2">
        <h2 className="text-center  md:text-[1.8vw] lg:text-[1.6vw] 2xl:text-[1.2vw] font-bold ">
          {container.title}
        </h2>
        <p className="text-zinc-400 text-xs md:text-[1.4vw] lg:text-[1.2vw] 2xl:text-[0.8vw] font-medium">
          {container.pubDate}
        </p>
        <motion.div
          layout="position"
          layoutId={container.title}
          transition={{ duration: 0.25 }}
        >
          {renderDescription()}
        </motion.div>
      </div>
    </motion.div>
    // </Link>
  );
}

export default PostsDesktopCard;

function ParagrapHTML({
  paragraph,
  className,
  limit = 40,
  unlimited = false,
  showFullDescription = false,
}) {
  const wordsArray = paragraph.split(" ");
  const truncatedDescription = unlimited
    ? paragraph
    : wordsArray.slice(0, limit).join(" ");

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

  return (
    <p className={className}>
      {transformedContent} {showFullDescription && "..."}
    </p>
  );
}
