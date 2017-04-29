import React from 'react';
import ListItem from './ListAddress.jsx';

const List = (props) => (
  <div>
    <h4> Address List Component </h4>
    There are { props.cards.length } addresses.
    {/* ternary on props.card exist*/}

    {props.cards ?
       props.cards.map(address => <ListAddress card={address}/>) 
      : null}
  </div>
)

export default List;