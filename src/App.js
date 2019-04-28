import React, { Component } from 'react';
import Header from "./components/header"
import ImageBox from "./components/imageBox";
import cards from "./cards.json";
import Counter from "./components/counter"

let clickedArr = [];

class App extends Component {
  state = {
    cards,
    score: 0,
    highScore: 0,
    clickedArr: []
  };

  // Click event - 
  cardClick = (card) => {
    console.log("click!");
    console.log(card.target.id);
    // if the image is in the clicked array the game is over
    if (clickedArr.includes(card.target.id)) {
      alert("already clicked");
    } else {
      // when an image is clicked it goes into the clicked array
      clickedArr.push(card.target.id);
      console.log(clickedArr);
      // the images randomly shuffle
      // this.state.cards.sort()
      // the score goes up by one
    }

    // when score is 12 - the game is won
  }


  render() {
    return (
      <div>
        <Header />
        <Counter />
        <div className="card-wrapper">
          {this.state.cards.map(card => (
            <ImageBox
              id={card.id}
              key={card.id}
              image={card.image}
              cardClick={this.cardClick}
            />
          ))};
        </div>
      </div>
    );
  };
}

export default App;
