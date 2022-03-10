import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './Searchbox';
import 'tachyons';
import { friends } from './friends';


class App extends Component {            // It is a Smart component (it has a state), therefore the class syntax
  constructor() {
    super()                              // This just has to be there
    this.state = {                       // Creates a Component state to perform communication between two sub-components
      friendsList: friends,              
      searchfieldContent: ''
    }
  }

  onSearchChange = (event) => {          // This function is passed to SearchBox component, it is triggered when SearchBox is changed.
    this.setState({ searchfieldContent: event.target.value })        // This assigns the value of SearchBox into State of the App Component
  }

  render() {
    const filteredFriends = this.state.friendsList.filter(friend => {             // A function that creates a new list of friends containing the Searchbox content
      return friend.name.toLowerCase().includes(this.state.searchfieldContent.toLowerCase())
    })
    return (               // Whole website content is rendered here
      <div className='tc'>
        <h1>MyFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList friends={filteredFriends}/>

      </div>
    );
  }
}

export default App;
