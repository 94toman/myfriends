import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './Searchbox';
import 'tachyons';
import { friends } from './friends';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: friends,
      searchfieldContent: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfieldContent: event.target.value })
  }

  render() {
    const filteredFriends = this.state.friendsList.filter(friend => {
      return friend.name.toLowerCase().includes(this.state.searchfieldContent.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1>MyFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList friends={filteredFriends}/>

      </div>
    );
  }
}

export default App;
