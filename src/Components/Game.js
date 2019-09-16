import React from "react";
import Square from "./Square"
import O from "../images/o.png";
import X from "../images/x.png";
import Nocircle from "../images/Nocircle.png";

import { Table, Container, Header } from "semantic-ui-react";
import { selectImg } from "./Helpers";

class Game extends React.Component {
  state = {
    squares: [{id: 1, img: Nocircle},
      {id: 2, img: Nocircle},
      {id: 3, img: Nocircle},
      {id: 4, img: Nocircle},
      {id: 5, img: Nocircle},
      {id: 6, img: Nocircle},
      {id: 7, img: Nocircle},
      {id: 8, img: Nocircle},
      {id: 9, img: Nocircle},],
      next: true
  }
  renderSquares = () => {
    return this.state.squares.map( square => 
    <Square key={square.id} onClick={this.handleClick(square.id)} { ...square } style={{width: "200px", height: "200px"}} /> )
  };

  handleClick = (i) => {
    let nextLetter;
    let clickedSquare = this.state.squares.filter( square => {
      if (square.id === i)
        return square
    });
    this.state.next === true ? nextLetter = selectImg("o") : nextLetter = selectImg("x");
    this.setState((clickedSquare.img: nextLetter));
    this.checkWinner({...this.state.squares});
  };

  checkWinner = (squares) => {
    // I couldn't figure out how to compare the winner for the life of me, so I found this solution online
     const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (squares.img[a] && squares.img[a] === squares.img[b] && squares.img[a] === squares.img[c]) {
        return squares[a];
      }
    }
    return null;
  }

  // the goal of componentDidUpdate was to have my square component re-render everytime the state was modified, changing the image from the default to an X or O
  // I've just never used component did update and had no clue where to put it. I tried putting it in the square component, but that seemd to mess things up
  componentDidUpdate = (prevProps) => {
    if (this.props.img !== prevProps.img) {
      this.fetchData(this.props.img);
    }
  };

  render() {
    return (
      <Container style={{ marginTop: "100px", width: "500px", display: "flex", flexWrap: "wrap" }}>
        <div>

        { this.renderSquares() }
        
        </div>

      </Container>
    );
  };
};

export default Game;