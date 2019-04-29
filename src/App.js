import React, { Component } from 'react';
import Header from "./components/header"
import ImageBox from "./components/imageBox";
import cards from "./cards.json";
import Counter from "./components/counter"
import "./App.css";

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
    if (this.state.clickedArr.includes(parseInt(card.target.id))) {
      alert("already clicked");
    } else {
      // when an image is clicked it goes into the clicked array
      this.state.clickedArr.push(parseInt(card.target.id));
      console.log(this.state.clickedArr);
      // the images randomly shuffle
      this.setState(this.state.cards.sort(() => Math.random() - 0.5));

      console.log(cards);

      // the score goes up by one
      this.setState({ score: this.state.score + 1 }); 
    }

    // when score is 12 - the game is won
    if (this.state.score === 12) {
      alert("winner!");
      this.setState({
        score: 0,
        highScore: 0,
        

      });
    };
  }


  render() {
    return (
      <div>
        <div className="top-wrapper">
          <Header />
          <Counter
            score={this.state.score}
            highScore={this.state.highScore}
          />
        </div>
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
