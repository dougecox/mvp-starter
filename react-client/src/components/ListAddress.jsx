import React from 'react';

const ListAddress = (props) => (
   // ternary on props.card exist
   props.card ? 
	  <div>
	    <div className="name">
	      { props.card.fullname }
	    </div>
	    <div className="address">
	      { props.card.address }
	    </div>
	    <div className="city">
	      { props.card.city }
	    </div>
	    <div className="state">
	      { props.card.state }
	    </div>
	    <div className="zipCode">
	      { props.card.zipCode }
	    </div>
	    <div className="country">
	      { props.card.country }
	    </div>
	  </div>
  		: null

)

export default ListAddress;