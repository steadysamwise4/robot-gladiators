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

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}
var fight = function(enemyName) {
     // repeat and execute as long as the enemy-robot is alive
     while(playerHealth > 0 && enemyHealth > 0) {
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    // if player picks "skip" confirm and then stop the loop
         if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        }
    }    
   
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
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
        // generate random damage
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage);
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
        enemyHealth = randomNumber(40, 60);
        // 
        fight(pickedEnenmyName);
        // if player is still alive and we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1) {
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
// function for the shop feature
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );
        // use switch to carry out action
        switch (shopOptionPrompt) {
            case "Refill":
            case "REFILL": 
            case "refill":
                if (playerMoney >= 7) {
                    window.alert("Refilling player's health by 20 for 7 Robo Bucks.");

                    // increase health and decrease money
                    playerHealth = playerHealth + 20;
                    playerMoney = playerMoney - 7;
                } else {
                    window.alert("You don't have enough money!");
                }
                    break;
            case "UPGRADE":
            case "Upgrade":
            case "upgrade":
                if (playerMoney >= 7) {
                    window.alert("Upgrading player's attack by 6 for 7 Robo Bucks.");

                    // increase attack and decrease money
                    playerAttack = playerAttack + 6;
                    playerMoney = playerMoney - 7;
                } else {
                    window.alert("You don't have enough money!");
                }
                    break;
            case "leave":
            case "LEAVE":
            case "Leave":
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

// start the game when the page loads
startGame();