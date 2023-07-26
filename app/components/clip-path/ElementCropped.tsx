import React from 'react';
import CustomClipPathSVG from '../svg/CustomClipPathSVG';

const ElementoRecortado = () => {
  return (
    <div
      className="custom-clip-path"
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'blue',
        clipPath: 'url(#mask)',
      }}
    ></div>
  );
};

export default ElementoRecortado;
