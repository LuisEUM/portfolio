import { useRive } from '@rive-app/react-canvas';

export const Simple = () => {
  

  const { rive, RiveComponent } = useRive({
    src: 'https://public.rive.app/hosted/119472/75798/Qn1tecHJtEi85ArBD7R8Fw.riv',
    autoplay: false,
    onLoop: () => console.log('looped'),
    onStateChange: (state) => console.log('state', state)    
  });

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}

