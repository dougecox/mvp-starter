import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Address Book</h1>
      
      <div className="AddOrRead">
        <AddOrRead choice={this.state.choice}/>
      </div>


      <div className="col-md-5">
        <List items={this.state.items}/>
      </div>


      <div className="Address">
        <MenuBar items={this.state.menuBar} />
      </div>


       

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));