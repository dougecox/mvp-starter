import React from 'react';
// import ListItem from './ListItem.jsx';
// ignore for now
const AddOrRead = (props) => (
  <div>
    <h4> Add Address </h4>
    <button onClick />
    There are { props.items.length } items.
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default AddOrRead;