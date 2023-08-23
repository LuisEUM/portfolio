// import { Locale } from "@/i18n.config";
// import { getDictionary } from "@/lib/dictionary";
// import TailwindGrid from "../components/grid/TailwindGrid";
// import PostPreviews from "../components/sections/blog/PostPreviews";
// import Category from "../components/sections/category/Category";
// import Hero from "../components/sections/hero/Hero";
// import Passion from "../components/sections/passion/Passion";
// import ProjectsPreview from "../components/sections/projects/ProjectsPreview";
// import BigQuote from "../components/sections/quote/BigQuote";
// import Skills from "../components/sections/skills/Skills";
// import Testimonials from "../components/sections/testimonials/Testimonials";

// export default async function Home({
//   params: { lang },
// }: {
//   params: { lang: Locale };
// }) {
//   const text = await getDictionary(lang);

//   return (
//     <>
//       <TailwindGrid>
//         <Hero text={text} />
//       </TailwindGrid>
//       <Category text={text} />
//       <ProjectsPreview text={text} />
//       <Skills text={text} />

//       <PostPreviews text={text} />

//       <BigQuote text={text} />
//       <TailwindGrid>
//         <Passion text={text} />
//       </TailwindGrid>

//       <Testimonials text={text} />
//     </>
//   );
// }
