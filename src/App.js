import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/Searchbox';
import Sticky from './components/Sticky';
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
    // Tried fetching random image URL, but it was really slow, so I used another way.
    // const getImgUrl = async function(){
    //   try{
    //     const imgUrl = await Promise.resolve(
    //         fetch('https://100k-faces.glitch.me/random-image-url')
    //         .then(resp => resp.json())
    //         )
    //         return imgUrl;
    //   } catch (err) {
    //     console.log('There was an error in getting the image URL', err)
    //   }
    // }
  fetch('https://gorest.co.in/public/v2/users')
  .then(response => response.json())
  .then(array => {
    this.setState ({friendsList: array})
    // // This was used to update each friend picture with random image URL
    // array.map((friend, i) => {
    //   getImgUrl()
    //   .then(data => (friend.url = data.url))
    //   .then(() => this.setState ({friendsList: array}))
    // })
  })
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



