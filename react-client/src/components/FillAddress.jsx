import React from 'react';

class FillAddress extends React.Component {
	constructor(props) {
		super(props);    
	}

	render () {
		return (<div>
    <h4> Enter New Address </h4>
    <form onSubmit={this.props.submitChange}>
      Full Name: <br/>
      <input type="text" name="fullname" onChange={this.props.inputChange} />
      <br></br> Address: <br/>
		  <input type="text" name="street" onChange={this.props.inputChange} />
		  <br></br> City: <br/>
      <input type="text" name="city" onChange={this.props.inputChange} />
      <br></br> State: <br/>
      <input type="text" name="state" onChange={this.props.inputChange} />
		  <br></br> Zip Code: <br/>
      <input type="text" name="zipCode" onChange={this.props.inputChange} />
      <br></br> Country: <br/>
      <input type="text" name="country" onChange={this.props.inputChange} /> 
      <br/>
      <input type="submit" value="Submit" />
      
    </form>
    
  </div>)
	} // end render

} //end class


export default FillAddress;