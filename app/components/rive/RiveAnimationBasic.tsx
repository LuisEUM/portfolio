import { useRive } from "@rive-app/react-canvas";

type RiveAnimationProps = {
  artboardName?: string;
  hoverAnimationName?: string;
};

export const RiveAnimation = ({
  hoverAnimationName = "Hover",
  artboardName = "Design",
}: RiveAnimationProps) => {
  const { rive, RiveComponent } = useRive({
    src: "/rive/web_portfolio.riv",
    autoplay: true,
    artboard: artboardName, //elegir el artboard
    onLoop: () => console.log("looped"), ///acción al terminar el loop
    onStateChange: (state) => console.log("state", state),
  });

  const animationNames = rive?.animationNames;
  const activeArtboard = rive?.activeArtboard;
  const playingAnimationNames = rive?.playingAnimationNames;

  console.log("animationNames", animationNames); // nos devuelve la lista de las animaciones dentro del artboard
  console.log("activeArtboard", activeArtboard); // nos devuelve el nombre del artboard
  console.log("playingAnimationNames", playingAnimationNames); // nos devuelve la lista de las animaciones dentro del stateMachine
  console.log("contents", rive?.contents); // nos devuelve la estructura del json completo


  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play(hoverAnimationName)}
      // onMouseLeave={() => rive && rive.pause()}
    />
  );
};
