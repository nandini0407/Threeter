## Threeter

[Live Link][TBD]

### Background

Threeter is a 3D web game inspired by [Teeter Pro](https://play.google.com/store/apps/details?id=pl.surix.teeterpro&hl=en). Threeter is a one-player game, and the player's objective is to move the ball to the destination hole, navigating it through a maze of walls. Obstacles in the form of black colored holes need to be avoided.

### Functionality & MVP

In Threeter, users can
- [ ] Move the ball through the maze of walls, towards the red hole
- [ ] View a help modal with basic instructions

### Wireframes

This game will have a single screen with the board, nav links to Github, LinkedIn and Help modal.

![wireframe](docs/wireframes/threeter.png)

### Architecture and Technologies

This project will be implemented using the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic
- `three.js` and `THREEx` game extensions for 3D graphics and game physics
- Webpack to bundle and serve up the various scripts

In addition to the webpack entry file, there will be the following scripts:

- `game.js`: This script is responsible for instantiating the map on the board and starts the game loop/render loop.
- `board.js`: This is the game board, on which other objects are built.
- `ball.js`: A single ball for the game which reacts to player's keyboard input.
- `wall.js`: Generates a wall of given dimensions on the board.
- `destination.js`: Generates a location on the board, which ends the game in a win if the ball hits this.
- `hole.js`: Creates different locations on the board which trap the ball and end the game with a loss.
- `map.js`: Builds a single map of walls and holes on the board.

### Implementation Timeline

**Day 1**:

- Learn basics of `three.js` and the extensions to start rendering objects
- Explore other similar games implemented with `three.js`

**Day 2**:

- Build board, ball, wall and holes
- Incorporate the physics of each class

**Day 3**:

- Build map and game classes

**Day 4**:

- Refine and polish with textures and colors

### Bonus features

A few features that may be added in the future:
- [ ] Different levels of difficulty
- [ ] Score as a measure of time taken from start to finish
