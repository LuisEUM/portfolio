import { useRive } from '@rive-app/react-canvas';

export const Simple = () => {
  

  const { rive, RiveComponent } = useRive({
    src: '/rive/web_portfolio.riv',
    autoplay: true,
    artboard: "design", //elegir el artboard
    onLoop: () => console.log('looped'), ///acción al terminar el loop
    onStateChange: (state) => console.log('state', state)    
  });

  const animationNames = rive?.animationNames;
  const activeArtboard = rive?.activeArtboard;
  const playingAnimationNames = rive?.playingAnimationNames;

  console.log('animationNames', animationNames) // nos devuelve la lista de las animaciones dentro del artboard
  console.log('activeArtboard', activeArtboard) // nos devuelve la lista de los artboard
  console.log('playingAnimationNames', playingAnimationNames) // nos devuelve la lista de las animaciones dentro del stateMachine
  console.log('contents', rive?.contents)


  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play("PenAnimation")}
      // onMouseLeave={() => rive && rive.pause()}
    />
  );
}

