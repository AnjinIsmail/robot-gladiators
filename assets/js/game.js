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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        //remove enemy's health by subtracting the amount set in the playerAttack variable
        // if (promptFight === "fight" || promptFight === "FIGHT") {
        //Rremove enemy's health by subtracting the amount set in the playerattack varialbe
        enemyHealth = Math.max(0, enemyHealth - playerAttack);
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
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0,playerHealth- damage);

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


//function to start the game

var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {
            //     //let user know what round they are in, remeber that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            //pick new enemy to fight based on the index of the enemyNames array 

            var pickedEnemyName = enemyNames[i];
            //     //rest enemyHealth before starting new fight
           //generate random daamge value based on player's atack power
           var damage = randomNumber(playerAttack -3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);
            //pass the pickedEnemyName variable's value into the fight function, where wil assume the value of the enemyname parameter 
            fight(pickedEnemyName);
            //if we're not at the last enemy in the array
            //if player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask if user wants to use the sotre before the next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round ");

                //if yes, take them to the store() function
                if (storeConfirm) {
                    // shop();
                    // console.log (window.shopOptionPrompt);
                    switch (shop()) {
                        case "REFILL":// new case 
                        case "refill":
                            if (playerMoney >= 7) {
                                window.alert(" Refilling player's health by 20 for 7 dollars.");

                                //increase health and decrease money
                                playerHealth = playerHealth + 20;
                                playerMoney = playerMoney - 7;

                            }
                            else {
                                window.alert("You don't have enough money!");
                            }
                            break;

                        case "UPGRADE":// new case
                        case "upgrade":
                            if (playerMoney >= 7) {
                                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                                // increase attack and decrease money
                                playerAttack = playerAttack + 6;
                                playerMoney = playerMoney - 7;
                            }
                            else {
                                window.alert("You don't have enough money!");
                            }
                            break;

                        case "LEAVE":// new case 
                        case "leave":
                            window.alert("Leaving the store.");

                            //do nothing, so function will end
                            break;
                        default:
                            window.alert("You did not pick a valid option. Try again.");

                            //call shop()again to force player to pick a valid option 
                            shop();
                            break;
                    }

                }
            }

        }


        else {
            window.alert("You have lost your robot in battle! Game over!");
        }
        break;
        //play again
        // startGame();
        endGame();
    }
}

// function to end the entire game
var endGame = function () {
    window.alert("The game has now ended. let's see how you did!");
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert(" Great job, you've survived the game! you now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battles.");
    }
    //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    //ask player if they'd like to paly again 

    var playAgainConfirm = window.confirm("Would you like to play again?")
    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}


function shop() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to 'REFILL', your health, 'UPGRADE', your attack, or 'LEAVE' to make a choice."
    );
    return shopOptionPrompt; 
};

var randomNumber = function() {
    var value = Math.floor(Math.random() * (21)) +40 ;


    return value;
};

startGame()




