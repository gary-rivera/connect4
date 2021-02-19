/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */
class Game {
  constructor(height, width){
    this.height = height;
    this.width = width;
    this.board = [];
    this.currPlayer = 1;
    this.htmlBoard = document.getElementById('board'); 
    this.top = document.createElement('tr');
    this.headCell = document.createElement('td');
    this.cell = document.createElement('td');
  }

  makeBoard() {
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
    return this.board;
  }

  makeHtmlBoard() {
    this.htmlBoard   //intialize variable here
  
    // make column tops (clickable area for adding a piece to that column)
    this.top.setAttribute('id', 'column-top');
    this.top.addEventListener('click', handleClick.bind(null, this.top));
  
    for (let x = 0; x < this.width; x++) {
      this.headCell.setAttribute('id', x);
      this.top.append(this.headCell);
    } 
  
    this.htmlBoard.append(this.top);
  
    // make main part of board
    for (let y = 0; y < this.height; y++) {
  
      for (let x = 0; x < this.width; x++) {
        this.cell.setAttribute('id', `${y}-${x}`);
        this.row.append(this.cell);
      }
  
      this.htmlBoard.append(this.row);
    }
  }

  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y, x) {
    const piece = document.createElement('div'); //intialize variable here
    piece.classList.add('piece');
    piece.classList.add(`p${this.currPlayer}`);
    piece.style.top = -50 * (y + 2);
  
    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }
  
  /** endGame: announce game end */
  
  endGame(msg) {
    alert(msg);
  }
  
  /** handleClick: handle click of column top to play piece */
  
  handleClick(evt) {
    // get x from ID of clicked cell
    const x = +evt.target.id;
  
    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }
  
    // place piece in board and add to HTML table
    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);
    
    // check for win
    if (this.checkForWin()) {
      return this.endGame(`Player ${this.currPlayer} won!`);
    }
    
    // check for tie
    if (board.every(row => row.every(cell => cell))) {
      return this.endGame('Tie!');
    }
      
    // switch players
    this.currPlayer = this.currPlayer === 1 ? 2 : 1;
  }
  
  /** checkForWin: check board cell-by-cell for "does a win start here?" */
  
  // checkForWin() {
  //   _win(cells) {
  //     // Check four cells to see if they're all color of current player
  //     //  - cells: list of four (y, x) cells
  //     //  - returns true if all are legal coordinates & all match currPlayer
  
  //     return cells.every(
  //       ([y, x]) =>
  //         y >= 0 &&
  //         y < this.height &&
  //         x >= 0 &&
  //         x < this.width &&
  //         this.board[y][x] === this.currPlayer
  //     );
  //   }
  
  //   for (let y = 0; y < this.height; y++) {
  //     for (let x = 0; x < this.width; x++) {
  //       // get "check list" of 4 cells (starting here) for each of the different
  //       // ways to win
  //       const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
  //       const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
  //       const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
  //       const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
  //       // find winner (only checking each win-possibility as needed)
  //       if (this._win(horiz) || this._win(vert) || this._win(diagDR) || this._win(diagDL)) {
  //         return true;
  //       }
  //     }
  //   }
  // }
  // this.makeBoard();
  // this.makeHtmlBoard();
  
}
; // active player: 1 or 2 
//let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *   board = array of rows, each row is array of cells  (board[y][x])
 */

// function makeBoard() {
//   for (let y = 0; y < HEIGHT; y++) {
//     board.push(Array.from({ length: WIDTH }));
//   }
// }

/** makeHtmlBoard: make HTML table and row of column tops. */


/** findSpotForCol: given column x, return top empty y (null if filled) */


/** placeInTable: update DOM to place piece into HTML table of board */



let board = new Game(6, 7);
