import CategoryCard from "./CategoryCard";
import TestimonialsDesktopCard from "./ClassicCard";
import ClasicCard from "./ClassicCard";
import ImagesCard from "./ImageCard";
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
    content: CategoryCard,
  },
  {
    id: "postDesktop",
    content: PostsDesktopCard,
  },
];

export default CardsIndex;
