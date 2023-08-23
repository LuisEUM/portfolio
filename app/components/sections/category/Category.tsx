  "use client"
import { useState } from "react";
import TailwindGrid from "../../grid/TailwindGrid";
import DynamicList from "../../list/DynamicList";
import FlexCarousel from "../../ui/carousel/flex-carousel/FlexCarousel";
import CategoryTitleChanger from "./CategoryTitleChanger";


function Category({ text }) {
  const dataCategoriesSection = text.home.categoriesSection;
  const [index, setIndex] = useState(1);
  const currentWord = text.home.categoriesSection.categories[index];

  return (
    <div className="mt-20   pt-10 lg:py-[min(7.5vw,11rem)] ">
      <TailwindGrid >
        <section className="col-start-1 lg:col-start-2 col-end-5 md:col-end-9 lg:col-end-13  ">
          <section
            className="flex-col space-y-5 relative"
          >
            <CategoryTitleChanger key={currentWord.name} name={currentWord.name} subtitle={dataCategoriesSection.subtitle}/>


            {dataCategoriesSection.categories && (
              <DynamicList
                setIndex={setIndex}
                categories={dataCategoriesSection.categories}
              />
            )}
          </section>
        </section>
      </TailwindGrid>

      <div className="col-span-12 max-w-full block lg:hidden w-full">
        <FlexCarousel
          dataCards={dataCategoriesSection.categories}
          width={70}
          reduceGap={15}
          key="category"
          type="category"
        />
      </div>
    </div>
  );
}

export default Category;
