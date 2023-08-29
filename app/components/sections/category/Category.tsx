"use client";
import { useEffect, useState } from "react";
import TailwindGrid from "../../grid/TailwindGrid";
import DynamicList from "../../list/DynamicList";
import ParallaxText from "../../slider/ParallaxText";
import FlexCarousel from "../../ui/carousel/flex-carousel/FlexCarousel";
import useScreenWidth from "../../ui/carousel/flex-carousel/hooks/useScreenWitdh";
import CategoryTitleChanger from "./CategoryTitleChanger";

function Category({ text }) {
  const dataCategoriesSection = text.home.categoriesSection;
  const [wordCategory, setWordCategory] = useState(1);
  const currentWord = text.home.categoriesSection.categories[wordCategory];
  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (screenWidth >= 768) {
      setWordCategory(1);
    }

    return () => {};
  }, [screenWidth]);

  return (
    <section className="pt-[14vw] md:pt-[6vw] lg:pt-[4vw] bg-green-500/0">
      <TailwindGrid fullSize>
        <section className="absolute self-center overflow-hidden max-w-full -z-50 -top-[17vw] md:-top-[11vw] lg:-top-[8.5vw] left-0 ">
          <ParallaxText baseVelocity={dataCategoriesSection.velocityScroller}>{dataCategoriesSection.textScroller}</ParallaxText>
        </section>
      </TailwindGrid>
      <TailwindGrid>
        <div className="self-center lg:col-start-2  col-span-full lg:col-span-11  w-full  flex flex-col">
          <CategoryTitleChanger
            key={currentWord.name}
            name={currentWord.name}
            subtitle={dataCategoriesSection.subtitle}
          />
        </div>
      </TailwindGrid>
      <TailwindGrid>
        <section className="col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13  hidden md:grid">
            {dataCategoriesSection.categories && (
              <DynamicList
                key={screenWidth}
                setWordCategory={setWordCategory}
                categories={dataCategoriesSection.categories}
              />
            )}
        </section>
      </TailwindGrid>

      <div className="col-span-full max-w-full inline md:hidden w-full">
        <FlexCarousel
          dataCards={dataCategoriesSection.categories}
          width={70}
          reduceGap={15}
          key={screenWidth + dataCategoriesSection.carrouselKey}
          type="category"
          setWordCategory={setWordCategory}
        />
      </div>
    </section>
  );
}

export default Category;
