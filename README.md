# Threeter

[Threeter live](https://nandini0407.github.io/Threeter/)

Threeter is a 3D web game inspired by [Teeter Pro](https://play.google.com/store/apps/details?id=pl.surix.teeterpro&hl=en). Threeter is a one-player game, and the player's objective is to move the small brown ball and make it collide with the big brown ball, navigating it through a maze of walls.

## Instructions

Players can use the arrow keys to move the small brown ball on the board. They will need to navigate it through a maze of walls. Obstacles in the form of static elliptical stones or rotating cuboids will need to be avoided, else the game will reset.

## Features & Implementation

![threeter] (assets/images/threeter.png)

The [live link](https://nandini0407.github.io/Threeter/) provides simple instructions on how to play the game.

To render 3D objects, I used `three.js` library. The physics component was added using `cannon.js` library, as implemented by a `THREEx` extension [`threex.cannonjs`](https://github.com/jeromeetienne/threex.cannonjs). The state of the keyboard was maintained using another `THREEx` extension, [`threex.keyboardstate`](https://github.com/jeromeetienne/threex.keyboardstate).

## Future Directions for the Project

### Levels of difficulty

Different types of obstacles will be added at more points on the board.

### Score

A score will be rendered as a measure of time taken from start to finish.
