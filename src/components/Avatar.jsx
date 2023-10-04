import React from 'react';
import Part from './Part';

function Avatar({
  body,
  eyes,
  eyebrows,
  hair,
  facialhair,
  mouths,
  glasses,
  earrings,
  hats,
  neckwear,
  clothing1,
  clothing2,
  clothing3,
}) {
  return (
    <div className="avatar" style={{ position: 'relative' }}>
      <Part path="body" index={body} zIndex={0} />
      <Part path="eyes" index={eyes} zIndex={1} />
      <Part path="eyebrows" index={eyebrows} zIndex={1} />
      <Part path="hair" index={hair} zIndex={6} />
      <Part path="facial_hair" index={facialhair} zIndex={7} />
      <Part path="mouths" index={mouths} zIndex={8} />
      <Part path="noses" index={0} zIndex={4} />
      <Part path="accessories/glasses" index={glasses} zIndex={5} />
      <Part path="accessories/earrings" index={earrings} zIndex={5} />
      <Part path="accessories/hats" index={hats} zIndex={7} />
      <Part path="accessories/neckwear" index={neckwear} zIndex={5} />
      <Part path="clothes/layer_1" index={clothing1} zIndex={2} />
      <Part path="clothes/layer_2" index={clothing2} zIndex={3} />
      <Part path="clothes/layer_3" index={clothing3} zIndex={4} />
    </div>
  );
}

export default Avatar;
