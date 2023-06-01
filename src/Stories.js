import React, { useState } from 'react';
import danki_bg from './resources/danki_bg.jpg';

export default function Stories() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className='stories'>
      <div
        className={`storiesCard ${hovered ? 'zoomed' : ''}`}
        style={{ backgroundImage: `url(${danki_bg})` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p>Luiz Pedro</p>
      </div>
      {/* ...rest of the storiesCard elements */}
    </div>
  );
}
