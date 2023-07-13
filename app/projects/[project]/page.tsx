'use client'
import TextSlider from "@/app/components/slider/TextSlider";
import SocialButtons from "@/app/components/ui/contact/SocialButtons";
import { LanguageContext } from "@/app/context/languageContext";
import { useContext } from "react";

function Project() {
  const { text } = useContext(LanguageContext)

  return (
    <div className="flex">
      <section className="w-[60%] h-[50vh] bg-red-500 relative overflow-hidden ">
        <TextSlider />
      </section>
      <section className="w-[40%] h-[50vh]  bg-neutral-300 text-zinc-800">
        <div>
          <h1>Mouthfeels</h1>
          <h2>Categories: UX/UI - WEB DESING</h2>
        </div>
        <div>
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Sunt qui esse pariatur duis
            deserunt mollit dolore cillum minim tempor enim. Contact
          </p>
        </div>
        <SocialButtons text={text}/>
      </section>
    </div>
  );
}

export default Project;
