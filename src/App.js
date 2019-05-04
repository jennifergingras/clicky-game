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

  reset = () => {
    this.setState({
      score: 0,
      clickedArr: []
    });
  };

  handleHighScore = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      });
    }
  }

  // Click event - 
  cardClick = (card) => {
    console.log("click!");
    console.log(card.target.id);
    // if the image is in the clicked array the game is over
    if (this.state.clickedArr.includes(parseInt(card.target.id))) {
      alert("Already clicked. Game over!")
      this.reset();
    } else {
      // when an image is clicked it goes into the clicked array
      this.state.clickedArr.push(parseInt(card.target.id));
      // console.log(this.state.clickedArr);
      this.setState({
        // the images randomly shuffle
        cards: this.state.cards.sort(() => Math.random() - 0.5),
        // console.log(cards);
        // the score goes up by one
        score: this.state.score + 1
      }, cb => this.handleHighScore());
      this.handleHighScore();
    }
    // when score is 12 - the game is won
    if (this.state.score === 12) {
      alert("winner!");
      this.reset();
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
            message={this.state.message}
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
