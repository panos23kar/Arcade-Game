// Enemies our player must avoid
//Enemy class modified in order to accept X,Y and speed of each enemy object
var Enemy = function(x = 0,y = 60,speed = 150) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //coordinates of each enemy object
    this.coordX = x;
    // to be alligned with the 'squares' of the playground
    this.coordY = y;

    //speed of each enemy object
    this.speed = speed;

    //the distance that the enemy objects will move in every loop/frame of the game
    this.moveDistance = 101;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //multipling any movement by the dt parameter (as it is 
    //mentioned above) after we have checked if the enemy 
    //object remains in the 'playground'
    if (this.coordX < 550){
        this.coordX += this.speed * dt
    }
    else{
        //resets the enemy object and makes its entrance to the
        //'playground' 'smooth'
        this.coordX = -150;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.coordX, this.coordY);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//My class to produce the player (as defined by U) objects.
//It contains its original coordinates and the path of the image/sprite
//It contains a render method (copied by the ENEMY code)
//It contains the handleInput method which is called by document.addEventListener
class Character {
    constructor(){
        //sets the player to his/her original position
        this.reset();
        this.sprite = 'images/char-pink-girl.png'
    }
    print(){
        console.log(this.sprite, typeof this.sprite)
    }
    reset(){
        //these values represent the middle square of our canvas. They came out experimentation
        this.coordX = 200;
        this.coordY = 400;
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.coordX, this.coordY);
    }
    //It moves the player corresponding to the pressed key
    // I took the 101 and 83 pixels values from the render method of the engine.js file
    // since they represent the dimensions of each square of the canvas
    // I assigned one extra check in order to be sure that my player wont leave the screen! :P
    handleInput(presKey){
        if (presKey === 'left'){
            if (this.coordX > 0){
                this.coordX -= 101;
            }
        }
        else if (presKey === 'up'){
            if (this.coordY > 0){
                this.coordY -= 83;
            }
        }
        else if (presKey === 'right'){
            if (this.coordX < 400){
                this.coordX += 101;
            }
        }
        else if (presKey === 'down'){
            if (this.coordY < 400){
                this.coordY += 83;
            }
        }
    }
    //checks if the char has crashed with any of the enemy objects or reached 
    //the river
    update(){
        for (let enemy of allEnemies){
            //console.log(enemy);
            console.log('edw eisai x, y ==',this.coordX, this.coordY);
            // let diffX = Math.abs(enemy.x) - Math.abs(this.coordX)
            // let diffY = Math.abs(enemy.Y) - Math.abs(this.coordY)
            let diffX = Math.abs(Number(enemy.coordX) - Number(this.coordX))
            let diffY = Math.abs(Number(enemy.coordY) - Number(this.coordY))
            //console.log(Number(enemy.coordX));
            //console.log(diffX, diffY);
            if ((diffX < 20) && (diffY < 15)){
                console.log('mpaineiiiii');
                this.reset();
            }
            //Y coordinate of 
            else if (Number(this.coordY) === -15){
                this.reset();
            }
        }

    }
}


// Now instantiate your objects.



// Place the player object in a variable called player
let player = new Character();
player.print();

// Place all enemy objects in an array called allEnemies


//difining the enemies array
allEnemies =[];

//create enemy objects
let enem1 = new Enemy(0,60,150);
let enem2 = new Enemy(0,60+83,100);
let enem3 = new Enemy(0,60+166,250);
let enem4 = new Enemy(0,60+83,300);
let enem5 = new Enemy(0,60+166,200);
//insert an enemy object in enemies array in order to be visualized
allEnemies.push(enem1,enem2,enem3,enem4,enem5);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
