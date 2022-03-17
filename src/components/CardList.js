import React from 'react';
import Card from './Card';

// Creates a list of friends from "friends" list passed from the App.js component

const CardList = ({ friends }) => {
  return (
    <div>
        {
            friends.map((friend,i) => {
                return (
                    <Card 
                        key={i}
                        id={friends[i].id} 
                        name={friends[i].name} 
                        email={friends[i].email}   
                        url={friends[i].url}   
                    />  
                )
            })
        }
    </div>
  );
}

export default CardList;



