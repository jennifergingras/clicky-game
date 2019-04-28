import React, { Component } from 'react';
import Header from "./components/header"
import ImageBox from "./components/imageBox";
import card from "./cards.json";
import Counter from "./components/counter"

class App extends Component {
  state = {
    card,
    score: 0,
    highScore: 0,

  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return (
      <div>
        <Header />
        <Counter />
        <div>
          {this.state.card.map(card => (
            <ImageBox
              id={card.id}
              key={card.id}
              image={card.image}
              onClick={card.handleIncrement}
            />
          ))};
        </div>
      </div>
    );
  };
}

export default App;
