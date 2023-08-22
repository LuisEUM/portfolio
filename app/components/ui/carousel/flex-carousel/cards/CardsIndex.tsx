import CategoriesCard from "./CategoriesCard";
import TestimonialsDesktopCard from "./ClassicCard";
import ClasicCard from "./ClassicCard";
import ImagesCard from "./ImageCard";
import PostsCard from "./PostsCard";
import PostsDesktopCard from "./PostsDesktopCard";
import TestimonialsCard from "./TestimonialsCard";

// Configure our tabs and tab content here
const CardsIndex = [
  {
    id: "classic",
    content: ClasicCard,
  },
  {
    id: "image",
    content: ImagesCard,
  },
  {
    id: "testimonial",
    content: TestimonialsCard,
  },
  {
    id: "testimonialDesktop",
    content: TestimonialsDesktopCard,
  },
  {
    id: "category",
    content: CategoriesCard,
  },
  {
    id: "post",
    content: PostsCard,
  },
  {
    id: "postDesktop",
    content: PostsDesktopCard,
  },
];

export default CardsIndex;
