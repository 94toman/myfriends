import React from 'react';
import GetRandomImage from './GetRandomImage';

// A single card of a friend with profile picture, name and email.

// https://github.com/ozgrozer/100k-faces



const Card = ({id, name, email}) => {
  return (
    <div className='tc w-20 br2 grow dib pa3 ma2 bw2 shadow-5 bg-white'>
      <GetRandomImage />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
