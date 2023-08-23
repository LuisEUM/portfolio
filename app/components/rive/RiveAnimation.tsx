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

  return <RiveComponent />;
};
