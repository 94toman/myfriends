import React from 'react';
import './Card.css'

// A single card of a friend with profile picture, name and email.

// https://github.com/ozgrozer/100k-faces

// Random IMG URL (It's slow and there are problems with CORS) <img className='cardImg' src={url} alt='friend'/>
// Alternative image without Promise: <img id={`photo${id}`} src={`https://ozgrozer.github.io/100k-faces/0/${Number(String(id)[0])}/00${id}.jpg`} alt='friend' />  

const Card = ({id, name, email, url}) => {

  return (
    <div className='tc br2 grow dib pa3 ma2 bw2 shadow-5 bg-white'>
      <img className='cardImg' src={`https://ozgrozer.github.io/100k-faces/0/${Number(String(id)[0])}/00${id}.jpg`} alt='friend' />  
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;