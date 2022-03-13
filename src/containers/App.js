import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Sticky from '../components/Sticky'
import 'tachyons';


class App extends Component {            // It is a Smart component (it has a state), therefore the class syntax
  constructor() {
    super()                              // This just has to be there
    this.state = {                       // Creates a Component state to perform communication between two sub-components
      friendsList: [],              
      searchfieldContent: ''
    }
  }

  componentDidMount() {
    fetch('https://gorest.co.in/public/v2/users')
    .then(response => response.json())
    .then(users => this.setState ({friendsList: users}))
  }

  onSearchChange = (event) => {          // It is not part of React, therefore the Arrow function. This function is passed to SearchBox component, it is triggered when SearchBox is changed.
    this.setState({ searchfieldContent: event.target.value })        // This assigns the value of SearchBox into State of the App Component
  }

  render() {
    const { friendsList, searchfieldContent} = this.state;
    const filteredFriends = friendsList.filter(friend => {             // A function that creates a new list of friends containing the Searchbox content
      return friend.name.toLowerCase().includes(searchfieldContent.toLowerCase())
    })
    if (!friendsList.length) {
      return <h1 className='tc f1'>Loading</h1>
    } else 
      return (               // Whole website content is rendered here
      <div className='tc'>
        <Sticky>
          <h1 className='f1'>MyFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
        </Sticky>
        <CardList friends={filteredFriends}/>
      </div>
    );
  }
}

export default App;
