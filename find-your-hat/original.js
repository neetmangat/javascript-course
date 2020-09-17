const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.xcord = 0;
    this.ycord = 0;
    this.field[0][0] = pathCharacter;
  }
  
  print() {
    this.field.forEach(row => {
      console.log(row.join(''));
    })
  }

  valid(check) {
    if (check === "u" || 
        check ==="d" || 
        check ==="l" || 
        check === "r") {
      return true;
    } else {
      return false;
    }
  }

  move(response) {
    switch (response) {
      case "u":
        this.ycord -= 1;
        break;
      case "d":
        this.ycord += 1;
        break;
      case "l":
        this.xcord -= 1;
        break;
      case "r":
        this.xcord += 1;
        break;
    };
  }

  play() {
    let playing = true;

    while (playing) {
      // Print the board
      this.print();

      // Ask for response & check validity
      const response = prompt('Which way? ').toLowerCase();
      const valid = this.valid(response);

      // Check if invalid response.
      // Change the board & check if hole, out of bounds, or win. 
      if (!valid) {
        console.log("Pick a valid direction.");
      } else {
        this.move(response);

        if (this.isOutOfBounds()){
          console.log("You went out of bounds!");
          playing = false;
          break;
        } else if (this.isHole()){
          console.log("You fell into a hole!");
          playing = false;
          break;
        } else if (this.isAWin()) {
          console.log("You Won!");
          playing = false;
          break;
        }

        // Update current spot and print the board
        this.field[this.ycord][this.xcord] = pathCharacter;
      };
    };
  }

  isOutOfBounds() {
    if (this.ycord < 0 || 
      this.ycord > this.field.length - 1 ||
      this.xcord < 0 ||
      this.xcord > this.field[1].length - 1) {
        return true;
    } 
  }

  isHole() {
    if (this.field[this.ycord][this.xcord] === hole) {
      return true;
    }
  }

  isAWin() {
    if(this.field[this.ycord][this.xcord] === hat) {
      return true;
    }
  }
}


const myField = new Field([
  [pathCharacter, fieldCharacter, hole],
  [fieldCharacter, hole, fieldCharacter],
  [fieldCharacter, hat, fieldCharacter],
]);

myField.play();

