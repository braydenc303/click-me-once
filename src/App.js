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

  // Create a copy of the array and set all of the clicked values to false.
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
// Find the array member that was clicked on and set its clicked value to true
    if(clicked === false){
      let clickedCards = [...this.state.cards];
      for(let i = 0; i < clickedCards.length; i++){
        if(clickedCards[i].id === id){
          clickedCards[i].clicked = true;
        }
      }
      //Update state with current values
      this.setState({
        cards : clickedCards
      }
      )
      //If they clicked all images only once, reset the game
      if(this.state.score === 11) {
        alert("You Won!");
        if(this.state.highscore <= 12) {
          this.setState(
            {
              score: 0,
              highscore: 12,
              cards: this.resetCards()
            })
        }
      //If player's score and high score are the same and less than 12 increment both scores
      }else if(this.state.score === this.state.highscore && this.state.highscore < 12){
        this.setState(
          { 
            score: score + 1,
            highscore: highscore + 1
          })
      //If high score is 12, only increment player's score
      }else if(this.state.highscore <= 12){
          this.setState(
            {
              score: score + 1
            }
          )
      }
      //If the player clicks an image that has been clicked before during this round, reset the game.
    } else if(clicked === true){
      this.setState(
        {
          score: 0,
          cards: this.resetCards()
        }
      )
    }
    //Shuffle the images.
    this.setState(
      {cards: _.shuffle(this.state.cards)}
    )
  }

  render() {
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
