#Short description about the code

i)  app.js (my implementation)

		1)The first step of initiating the game is to create a Character class,
		  which will initiate an objects that will stand for the character that the user will move through the game.
		2)To achieve that I used a constructor which is the most efficient and up-to-date way to create objects,
		  which contain some properties and methods.
		3)Contains: i)   X and Y coordinates of the objects
					ii)  The path of the image/spite to be loaded
					iii) A render method to 'visualize' the character (copied by the Enemy code)
					ix)  A handleInput method which is called by document.addEventListener and moves the the 
						 player corresponding to the pressed key and simultaneously checks if the player is still in the 
						 "playground"
					x)   An update method checks if the char has crashed with any of the enemy objects or reached the river
					xi)  An reset method which place the player to the initial position as soon as the game starts, he/she collides
						 with an enemy or reaches the river
		4) I initialized a Character object by the name player(Defined by you! :P)

		5)Same structure was followed for the enemy objects as well
		6)An allEnemies array was created in order to host all Enemy objects
		7)AFterwards they are rendered using the function renderEntities() from the engine.js file.
		8)Using the Enemy.prototype.update (and it comments) we constantly update the position of the enemy object.
		  We make its exit and entrance seems smoother by making it to appear and disappear one 'square' 
		  after and before respectively.
		9)I adjusted the enemy class in order to accept three arguments which are the original x and y coordinates
		  of the enemy speed.
ii) engine.js (provided)
		It is the .js file that creates the background of the game and serves as the game engine for the whole game (by constantly running aa IIFE that loads the game)

iii)resources.js (provided)
		It is the file that hosts the resources (images) that compose the game and keep the cached in order to make the game loop more efficient.

   
#Loading the game
The only thing that someone has to do in order to load the game is to load to browser the index.html file and then HAVE FUN!!

#Playing the game
In order the player to move the Character, he/she has to use the arrows keys.
Once the player has collided with an enemy or reached the river of the game then its position is reset to the starting point.