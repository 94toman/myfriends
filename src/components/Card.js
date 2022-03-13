import React from 'react';

// A single card of a friend with profile picture, name and email.

// https://github.com/ozgrozer/100k-faces

const Card = ({id, name, email}) => {
  return (
    <div className='tc w-20 br2 grow dib pa3 ma2 bw2 shadow-5 bg-white'>
      <img src={`https://ozgrozer.github.io/100k-faces/0/4/00${id}.jpg`} alt="friend" />  
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;