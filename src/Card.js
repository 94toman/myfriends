import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className='tc w-20 br2 grow dib pa3 ma2 bw2 shadow-5 bg-white'>
      <img src={`https://ozgrozer.github.io/100k-faces/0/1/00107${id}.jpg`} alt="friend" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
