import React, { Component } from "react";
import Card from "./Card";

class CardSet extends Component {
  constructor() {
    super();

    this.state = {
      chosenCards: []
    };
  }

  saveCourse = (event, index) => {
    console.log(index);
    console.dir(event.target); // will not have value because we are clicking a button and not a text object.

    // 1 DO NOT UPDATE STATE DIRECTLY
    // this.state.chosenCards.push(this.props.cards[index])

    // 2 We can "mutate" the "copy" using .push()
    // const copyOfCards = this.state.chosenCards.slice() // Another way
    const copyOfCards = [...this.state.chosenCards];
    copyOfCards.push(this.props.cards[index]);

    this.setState({
      chosenCards: copyOfCards
    });
  };

  handleDelete = index => {
    const copyOfCards = [...this.state.chosenCards];
    copyOfCards.splice(index, 1);
    this.setState({
      chosenCards: copyOfCards
    });
  };

  render() {
    console.log(this.state.chosenCards); // initial render []

    // Build array chosen cards
    const savedCards = this.state.chosenCards.map((card, i) => {
      return (
        // <div key={i} onClick={() => this.handleDelete(i)}>
        //   <h3>{card.course}</h3>
        // </div>

        // Call handleDelete()
        // <div key={i} className="col s3" onClick={() => this.handleDelete(i)}>
        //   <Card card={card} />
        // </div>

        // Pass handleDelete method to Card
        <div key={i} className="col s3">
          <Card card={card} cl={() => this.handleDelete(i)} />
        </div>
      );
    });

    // Build array of cards from data
    const cardList = this.props.cards.map((card, i) => {
      return (
        <div key={i} className="col s3">
          <Card card={card} />
          <button
            onClick={event => this.saveCourse(event, i)}
            className="btn waves-light waves-effect"
          >
            Save
          </button>
        </div>
      );
    });

    return (
      <div>
        {cardList}
        {savedCards}
      </div>
    );
  }
}

export default CardSet;
