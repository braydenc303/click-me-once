import React, { Component } from 'react';
import ImageCard from "./components/imageCard";
import Wrapper from "./components/wrapper";
import cards from  "./cards.json";
import './App.css';
import _ from "lodash";


class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0
  };

  resetCards = () => {
    const allCards = [...this.state.cards];
    for(let i = 0; i < allCards.length; i++) {
      allCards[i].clicked = false;
    }
    return allCards;
  }

  
  handleClick = (id, clicked) => {
    let score = this.state.score;
    let highscore = this.state.highscore;



    console.log (id);
    console.log (clicked);
    console.log (this.state.cards[id-1]);

    if(clicked === false){
      let clickedCards = [...this.state.cards];
      for(let i = 0; i < clickedCards.length; i++){
        if(clickedCards[i].id === id){
          clickedCards[i].clicked = true;
        }
      }
      this.setState({
        cards : clickedCards
      }
      )
      
      if(this.state.score === 11) {
        alert("You Won!");
        if(this.state.highscore <= 12 && this.state.highscore <= this.state.score) {
          this.setState(
            {
              score: 0,
              highscore: 12,
              cards: this.resetCards()
            })
        }
      }else if(this.state.score === this.state.highscore && this.state.highscore < 12){
        this.setState(
          { 
            score: score + 1,
            highscore: highscore + 1
          })
      }else if(this.state.highscore <= 12){
          this.setState(
            {
              score: score + 1
            }
          )
      }
    } else if(clicked === true){
      this.setState(
        {
          score: 0,
          cards: this.resetCards()
        }
      )
    }
    this.setState(
      {cards: _.shuffle(this.state.cards)}
    )
    console.log(this.state.cards);
  }

  render() {
    console.log(cards);
    return (
      <Wrapper>
        <h1 className = "title">Apples and Oranges:</h1>
        <h2 className = "instructions">Click on an image to earn points, but don't click on any more than once!</h2>
        <h2 className = "scoreboard">Score: {this.state.score} Highscore: {this.state.highscore} </h2>
        {this.state.cards.map(card => (
          <ImageCard
            name = {card.name}
            image = {card.image}
            clicked = {card.clicked}
            key = {card.id}
            id = {card.id}
            handleClick = {this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
};

export default App;
