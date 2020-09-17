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

  // Generate a random field with a given height and width with percentage of holes
  static generateField(height, width, percentage) {
    const field = new Array(height).fill(0).map(element => new Array(width));
    const percentConvert = percentage / 100;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const probability = Math.random();
            field[y][x] = probability > percentConvert ? fieldCharacter : hole;
        }
    }

    // Place the "hat" on the field in a random location 
    const hatLocation = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
    }

    // Check hat location isn't starting point
    while (hatLocation.x === 0 && hatLocation.y === 0) {
        hatLocation.x = Math.floor(Math.random() * width);
        hatLocation.y = Math.floor(Math.random() * height);
    }

    // Place the hat character on the field
    field[hatLocation.y][hatLocation.x] = hat;
    return field
  }
  
  // Print out the field array with no separators
  print() {
    this.field.forEach(row => {
      console.log(row.join(''));
    })
  }

  // Ask user for response & check validity
  askQuestion() {
    const response = prompt('Which way? ').toUpperCase();

    switch (response) {
      case "U":
        this.ycord -= 1;
        break;
      case "D":
        this.ycord += 1;
        break;
      case "L":
        this.xcord -= 1;
        break;
      case "R":
        this.xcord += 1;
        break;
      default:
        console.log("Pick U, D, L, or R");
        this.askQuestion();
        break;
    };
  }

  // Main game function
  play() {
    let playing = true;

    while (playing) {
      // Print the board
      this.print();

      // Ask question & move current coordinate
      this.askQuestion();

      // Check if current position is a hole, out of bounds, or a win. 
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
      };

      // Update current spot and print the board
      this.field[this.ycord][this.xcord] = pathCharacter;
    }
  }

  // Logic check if current position is out of bounds.
  isOutOfBounds() {
    if (this.ycord < 0 || 
      this.ycord > this.field.length - 1 ||
      this.xcord < 0 ||
      this.xcord > this.field[1].length - 1) {
        return true;
    } 
  }

  // Logic check if current position is a hole.
  isHole() {
    if (this.field[this.ycord][this.xcord] === hole) {
      return true;
    }
  }

  // Logic check if current position lands on the hat.
  isAWin() {
    if(this.field[this.ycord][this.xcord] === hat) {
      return true;
    }
  }
}

const myField = new Field(Field.generateField(5,5,10));

myField.play();