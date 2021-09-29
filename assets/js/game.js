var playerName = window.prompt("Please provideth your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Mr. Roboto", "Amy Android", "Kilroy"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "Win" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less
var fight = function(enemyName) {
     // repeat and execute as long as the enemy-robot is alive
     while(enemyHealth > 0) {
    //window.alert("Welcome to Robot Gladiators! Are you not ENTERTAINED??");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " punched " + enemyName + " furiously. " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
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
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight(enemyName);
        }
        
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};
};
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnenmyName = enemyNames[i];
    enemyHealth = 50;
    
    fight(pickedEnenmyName);
}