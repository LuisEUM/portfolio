"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "../../../buttons/PrimaryButton";
import Link from "next/link";

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
}: PostsDesktopCardProps) {

  const extractParagraphContent = (description) => {
    const paragraphRegex = /<p>(.*?)<\/p>/;
    const match = paragraphRegex.exec(description);
    if (match && match[1]) {
      return match[1];
    }
    return "";
  };



  return (
    <motion.div
      layout="position"
      className="max-h-fit w-full justify-between items-center  text-center bg-zinc-900 rounded-xl shadow flex flex-col gap-y-2 mx-auto "
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

      <div className="h-full items-center flex flex-col justify-center gap-y-2 mx-auto px-[8%] py-[5%] ">
        <h2 className="text-center  md:text-[1.8vw] lg:text-[1.6vw] 2xl:text-[1.15vw] font-bold ">
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
          <ParagrapHTML
            className="max-w-full md:text-[1.6vw] lg:text-[1.4vw] 2xl:text-[1vw] font-normal text-center tracking-tight "
            paragraph={extractParagraphContent(container.description)}
            limit={25}
            showFullDescription
          />
          <Link href={container.link} key={container.title} target="_blank">
            <div className="mt-4 mb-2 inline-flex">
              <PrimaryButton text={"Go to Medium"} icon="medium" textLeft />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
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
