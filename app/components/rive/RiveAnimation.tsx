import { useRive } from "@rive-app/react-canvas";

type RiveAnimationProps = {
  artboardName?: string;
  hoverAnimationName?: string;
  hover?: boolean;
};

export const RiveAnimation = ({
  hoverAnimationName = "Hover",
  artboardName = "Design",
  hover = false,
}: RiveAnimationProps) => {
  const { rive, RiveComponent } = useRive({
    src: "/web_portfolio.riv",
    autoplay: true,
    artboard: artboardName,
  });

  if (hover && rive) rive.play(hoverAnimationName);
  if (!hover && rive) rive.play("Loop");

  return (
    <div className="w-full h-full flex justify-center items-center">
      <RiveComponent className="h-[80%] w-full md:h-full" />
    </div>
  );
};
