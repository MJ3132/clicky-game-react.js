import React, { Component } from 'react';
import './App.css';
//  my compoenent
import Navbar from './components/navbar';

import IconCard from './components/Imgcard';
import Icons from './icons.json';
//
import "./App.css"
import "./components/imgcard.css";
//
// import "tachyons";
// // import "hover";
// // import "animate";


const shuffleArray = (array) => {
  let counter = array.length;
  // While there are elements in the array
  var i , randomIndex, allArrays
  for (var i = array.length -1; i > 0 ; i-- ){

    randomIndex = Math.floor(Math.random() * (i + 1));

    allArrays = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = allArrays;

  }
  return array;
};
class App extends Component {

  state = {

    result: "",
    clicked: [],
    currentScore: 0,
    topScore: 0,
    Icons,
    gameOver: false
  };

  // When the page loads and the component mounts,
  // display starting message
  componentDidMount() {
    this.setState({result: "Click an Icon to get started"})
  }

  // When an icon gets clicked,
  // increase points and add id of element to array.
  clickedIcon = (id) => {
    console.log(`Picture clicked with id: ${id}`);
    if(!this.state.clicked.includes(id)){
      this.pointIncrease();
      this.state.clicked.push(id);

    } else {
      this.resetGame();
    }
  }

  // When the user makes a new click, increment the points by 1
  // and check if the user has won
  pointIncrease = () => {
    let score = this.state.currentScore + 1;
    console.log(`the score is ${score}`);
    if (score === this.state.Icons.length) {
      this.setState({
        result: "You win!",
        topScore: score,
        currentScore: 0,
        clicked: [],
        Icons,
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        result: "New High Score!",
      });
    } else {
      this.setState({
        currentScore: score,
        result: "Spacestastic!"
      });
    }
    this.resetIconArray();
  }

  // reset the game when the user chooses a duplicate
  resetGame = () => {
    this.setState({
  
      topScore: this.state.topScore,
      result: "Huston we have lost!",
      clicked: [],
      points: 0,
      currentScore:0,
      Icons,
      gameOver: true
    });
    console.log('Game over? ', this.state.gameOver);
    this.resetIconArray();
  }

  // set the array to be mapped to a new scrambled version using shuffle algorithm
  resetIconArray = () => {
    let newScramble = shuffleArray(Icons);
    this.setState({Icons: newScramble})
  }

  render() {
    return (
      <div className='container'>
        <Navbar topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result}/>
  
        <div className='iconStyle'>
        {this.state.Icons.map(icon => (
        <IconCard
          id={icon.id}
          image={icon.image}
          clickedIcon={this.clickedIcon}
        />
        ))}
        </div>
      </div>
    );
  }
}

export default App;