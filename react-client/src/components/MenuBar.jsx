import React from 'react';
import ListItem from './ListAddress.jsx';

class MenuBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			next: false,
			prev: false
		}
	}

	render () {
		return (<div>

			<h4> Menu Bar </h4>

			</div>)
	}
}

export default MenuBar;