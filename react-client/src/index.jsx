import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import AddOrRead from './components/AddOrRead.jsx';
import MenuBar from './components/MenuBar.jsx';
import FillAddress from './components/FillAddress.jsx';
import ListAddress from './components/ListAddress.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { 
      cards: [],
      currentCard: null,
      menuBar: {
        options: { next: false,
                   prev: false 
                 },
      },
      formData: { 
        fullname: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
      }
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/cards', 
      success: (data) => {
        this.setState({
          cards: data,
        })
        console.log('this.state.cards', this.state.cards)
      },
      error: (err) => {
        console.log('err', err);
        console.log('error within componentDidMount')
      }
    });
  }

  handleInputChange(event) {
    let formData = Object.assign({}, this.state.formData);
    formData[event.target.name] = event.target.value;
    this.setState({formData});
  }
   
  handleSubmit(event) {
    // event.preventDefault();
    // check to make sure none of the values in form are blank
    // update with $.post to serve then db
    $.post('/cards', {formData: this.state.formData}, ()=> { console.log('post success'); });
  }

  render () {
    return (<div>
      <h1>Address Book</h1>
      
      {/*<div className="AddOrRead">
            <AddOrRead choice={this.state.choice}/>
            </div>*/}


      <div className="col-mid-7">
        <FillAddress inputChange={this.handleInputChange} submitChange={this.handleSubmit}/> 
        <ListAddress address={this.state.currentCard}/>
      </div>

      <div className="col-md-4">
        <List cards={this.state.cards}/>
      </div>

      <div className="menuBar">
        <MenuBar items={this.state.menuBar} />
      </div>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));