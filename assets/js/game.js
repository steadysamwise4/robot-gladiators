var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}




// Game States
// "Win" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less

// function to generate a random numeric value

    
   
    
    
       


var fight = function(enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;

    // randomly change turn order
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }


     // repeat and execute as long as the enemy-robot is alive
     while(playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
        var promptFight = window.prompt("Would you like to FIGHT " + enemy.name + "? or SKIP this battle? Press enter to'FIGHT' or type 'skip' to skip.");
        promptFight = promptFight.toLowerCase();
    
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                shop();
                
            }
        }
    
        window.alert(enemy.name + " has " + enemy.health + " health points!");
        //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
        // generate random damage value based on player's attack power
        
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that it worked.
        window.alert(
            playerInfo.name + " punched " + enemy.name + " furiously. " /*+ enemy.name + " now has " + enemy.health + " health remaining." */
        );
        //check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " was savagely dealt " + damage + " damage points! It seems that the mighty " + enemy.name + " has fallen, and he can't get up.");

            //award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while ()loop since enemy is dead
            break;
        }
        else {
            window.alert(enemy.name + " has taken " + damage + " damage! However, he remains engaged in the fight.");
        }
        } else {
        // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        // generate random damage
        var damage = randomNumber(enemy.attack - 4, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
            window.alert(
                enemy.name + " kicked " + playerInfo.name + " with all his power! " + playerInfo.name + " takes " + damage + " damage!"
            )
            // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has taken " + damage + " points of damage! Alas, the incredible " + playerInfo.name + " will fight no more.");
            // leave while()loop if player is dead
            break;
        }
        else {
            window.alert(playerInfo.name + " has " + playerInfo.health + " health points remaining.");
        }
        }
        // switch turn order for next round
        isPlayerTurn = !isPlayerTurn;
    }
}; 
        // if no (false), ask question again by running fight() again
        /*else {
            fight(enemy.name);
        }
        
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};
}; */
var startGame = function() {
    // anounce player health points
    window.alert(playerInfo.name + " has rolled " + playerInfo.health + " health points.");
    
    // reset player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + ". Are you not ENTERTAINED??");
            //debugger;
        var pickedEnemyObj = enemyInfo[i];
        //pickedEnemyObj.health = randomNumber(40, 60);
        // 
        fight(pickedEnemyObj);
        // if player is still alive and we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            // if yes, take them to the store() function
            if (storeConfirm) {
            shop();
            }
        }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins!

    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }
    // if player has more money than the high score, player has new high score!
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);
        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "! Well done! This shall hereby be recorded in this browser until a new champion shall arise.")
    } else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ", previously recorded by " + localStorage.name + ". Maybe next time!");
    }
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + " Robo Bucks...  Nice!");
    }else {
        window.alert("You've lost your robot in battle.");
    }
   
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        window.alert("Thank you for playing Robot Gladiators! To play gain, refresh the browser.")
    }else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
// function for the shop feature
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
        );
        shopOptionPrompt = parseInt(shopOptionPrompt);
        // use switch to carry out action
        switch (shopOptionPrompt) {
            case 1:
            
                playerInfo.refillHealth();
                break;
                
            case 2:
            
                playerInfo.upgradeAttack();
                break;
               
            case 3:
            
                window.alert("Leaving the store.");

                // do nothing, so function will end
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");

                // call shop() again to force player to pick a valid option
                shop();
                break;

        }
        
};
// funtion to bug/fix the player name input
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("Please provideth your robot's name");
    }
    console.log("Your robot's name is " + name);
    return name;
};
// player info object
var playerInfo = {
    name: getPlayerName(),
    health: randomNumber(170,190),
    attack: randomNumber(15,25),
    money: 25,

    reset: function() {
        this.health = randomNumber(170,190);
        this.money = 25;
        this.attack = randomNumber(15,25);
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }

};

//console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

// enemy info array
var enemyInfo = [
    {
        name: "Mr. Roboto",
        attack: randomNumber(10, 12),
        health: randomNumber(30, 60)
    },
    {
        name: "Johnny Five",
        attack: randomNumber(12, 14),
        health: randomNumber(30, 70)
    },
    {
        name: "Kilroy",
        attack: randomNumber(15, 18),
        health: randomNumber(40, 60)
    },
    {
        name: "Ultron",
        attack: randomNumber(18,20),
        health: randomNumber(75, 80)
    },
    {
        name: "T-800",
        attack: randomNumber(20, 30),
        health: randomNumber(100, 150)
    }
];
// start the game when the page loads
startGame();