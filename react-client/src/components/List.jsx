import React from 'react';
import ListAddress from './ListAddress.jsx';

const List = (props) => (
  <div>
    <h4> Address Lists </h4>
    There are { props.cards.length } addresses.

    {/* ternary on props.card exist*/}
    
    
    {props.cards.map(card => <ListAddress 
      fullname={card.fullname} 
      street={card.street}
      city={card.city}
      state={card.state}
      zipCode={card.zipCode}
      country={card.country}
      />) }
    

  </div>
)

export default List;


