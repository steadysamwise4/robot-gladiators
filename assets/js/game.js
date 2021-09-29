var playerName = window.prompt("Please provideth your robot's name?");
var playerHealth = 120;
var playerAttack = 14;
var playerMoney = 10;

//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Mr. Roboto", "Amy Android", "Kilroy"];
var enemyHealth = 50;
var enemyAttack = 8;

// Game States
// "Win" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less
var fight = function(enemyName) {
     // repeat and execute as long as the enemy-robot is alive
     while(playerHealth > 0 && enemyHealth > 0) {
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    // if player picks "skip" confirm and then stop the loop
         if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }    
   
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " punched " + enemyName + " furiously. " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;

            // leave while ()loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
            console.log(
                enemyName + " kicked " + playerName + " with all his power! " + playerName + " now has " + playerHealth + " health remaining."
            )
            // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while()loop if player is dead
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}; 
        // if no (false), ask question again by running fight() again
        /*else {
            fight(enemyName);
        }
        
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};
}; */
var startGame = function() {

    //debugger;
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + ". Are you not ENTERTAINED??");
    
        var pickedEnenmyName = enemyNames[i];
        enemyHealth = 50;
        // 
        fight(pickedEnenmyName);
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
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " Robo Bucks...  Nice!");
    }else {
        window.alert("You've lost your robot in battle.");
    }
    window.alert("The game has now ended. Let's see how you did!");
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// start the game when the page loads
startGame();