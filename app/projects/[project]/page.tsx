'use client'
import TextSlider from "@/app/components/slider/TextSlider";
import SocialButtons from "@/app/components/ui/contact/SocialButtons";
import { LanguageContext } from "@/app/context/languageContext";
import { useContext } from "react";

function Project() {
  const { text } = useContext(LanguageContext)

  return (
    <div className="flex -mt-8">
      <section className="w-[60%] min-h-[50vh] bg-red-500 relative overflow-hidden ">
        <TextSlider />
      </section>
      <section className="w-[40%] min-h-[100vh] bg-neutral-300 text-zinc-800 flex-row justify-center items-center py-36 px-11">
        <div className="border-l px-5 border-zinc-800 flex flex-col ">
          <h1 className="text-3xl font-black text-stone-950 ">Mouthfeels</h1>
          <h2 className="text-zinc-800 text-xl font-medium uppercase mt-3">Categories: UX/UI - WEB DESIGN</h2>
        </div>
        <div className="px-5">
          <p className="my-3">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Sunt qui esse pariatur duis
            deserunt mollit dolore cillum minim tempor enim.
          </p>
          <SocialButtons text={text}/>
        </div>
      </section>
    </div>
  );
}

export default Project;
