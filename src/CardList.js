import React from 'react';
import Card from './Card';
import { friends } from './friends';

const CardList = () => {
  return (
    <div>
        {
            friends.map((user, i) => {
                return (
                    <Card 
                        key={[i]}
                        id={friends[i].id} 
                        name={friends[i].name} 
                        email={friends[i].email}
                    />  
                )
            })
        }
    </div>
  );
}

export default CardList;
