import React from 'react';

const ListAddress = (props) => (
   // ternary on props.card exist
    
	  <div>
	  <input type="checkbox"/> completed
	    <div className="name">
	      { props.fullname }
	    </div>
	    <div className="address">
	     { props.street}
	    </div>
	    <div className="city">
	      { props.city }
	    </div>
	    <div className="state">
	      { props.state }
	    </div>
	    <div className="zipCode">
	      { props.zipCode }
	    </div>
	    <div className="country">
	      { props.country }
	    </div>
	    ----------------------------------
	  </div>
  		

)

export default ListAddress;