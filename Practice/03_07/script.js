/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const boardgame = {
  name: "Board Game",
  numberOfPieces: 15,
  theme: "game",
  difficulty: "medium",
  numberOfPlayers: 4,
  playingGame: false,
  playGame: function (gameStatus) {
    this.playimgGame = gameStatus;
  },
  gamepiece: {
    shape: "cube",
    pieceName: "dice",
  },
};

console.log(boardgame);
