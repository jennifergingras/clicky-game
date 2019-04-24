import React, { Component } from 'react';
import Header from "./components/header"
import patternCard from "./components/patternCard";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards
  };


  render() {
    return (
      <div>
        <Header />
        {this.state.cards.map(card => (
          <patternCard
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))};
      </div>
    );
  };
}

export default App;
