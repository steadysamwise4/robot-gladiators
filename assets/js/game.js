var playerName = window.prompt("Please provideth your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Mr. Roboto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators! Are you not ENTERTAINED??");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " punched " + enemyName + " furiously. " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " kicked " + playerName + " with all his power! " + playerName + " now has " + playerHealth + " health remaining."
        )
};

fight();