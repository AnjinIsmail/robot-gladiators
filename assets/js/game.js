
var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //alert users that they are starting the round
    window.alert ("Welcome to Robot Gladiators!"); }
var promptFight = window. prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
//substract the value of "playerAttack"from the value of "enemyHealth'" and use the result to update the value in the 'enemyHealth' varaible
    // enemyHealth = enemyHealth - playerAttack; }
    // log a resulting message to the console so we know that it workd.

// if player choses to fight, then fight

if (promptFight === "fight" || promptFight === "FIGHT") {
 //Rremove enemy's health by subtracting the amount set in the playerattack varialbe
    enemyHealth = enemyHealth - playerAttack; 
 console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.") ;

// check enemy's health
if(enemyHealth <= 0) {
    window.alert(enemyName + " has died!" );
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// remove player's health by subtracting the amount set in the enemyAttack variable

 playerHealth = playerHealth - enemyAttack;
 console.log(enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining.");
//check players health

if(playerHealth <= 0) {
    window. alert(playerName + " has died !");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.")
}
//if player choses to skip

} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm user wants to skip
    var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye! ");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
  //IF NO (false) , ask question again by running fight() again 
  else {
      fight()
  }
} else {
    window.alert(" You need to a pick a valid option. Try again!");
}



