
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 12;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;

var fight = function (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        //ask user if they'd liked to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye! ');
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        //remove enemy's health by subtracting the amount set in the playerAttack variable
        // if (promptFight === "fight" || promptFight === "FIGHT") {
        //Rremove enemy's health by subtracting the amount set in the playerattack varialbe
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.');

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while () loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + ' attacked ' + playerName + ' . ' + playerName + ' now has ' + playerHealth + ' health remaining.');


        //check players health

        if (playerHealth <= 0) {
            window.alert(playerName + ' has died !');
            //leave while ()loop if player is dead
            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    }
};
// else {
//     window.alert(" You need to a pick a valid option. Try again!");

for (var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
        //     //let user know what round they are in, remeber that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        //pick new enemy to fight based on the index of the enemyNames array 

        var pickedEnemyName = enemyNames[i];
        //     //rest enemyHealth before starting new fight
        enemyHealth = 50;
        //pass the pickedEnemyName variable's value into the fight function, where wil assume the value of the enemyname parameter 
        fight(pickedEnemyName);
    } if (playerHealth < 0) {
        window.alert ("You have lost your robot in battle! Game over!");
        break;
    }
}


