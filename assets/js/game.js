var fightOrSkip = function () {
  //ask user if they'd like to fight or skip using function
  var promptFight = window.prompt(
    ' Would you like FIGHT or SKIP this battle? Enter "FIGHT" or SKIP" to choose'
  );

  //conditional recursive funcation call
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
  //if user pciks "skip" confirm and then stop the loop
  promptFight = promptFight.toLowerCase();
  if (promptFight === "skip") {
    //confirm users wants to skip
    var confirmSkip = window.prompt("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
      window.alert(
        playerInfo.name + "has decided to skip this fight. Goodbye!"
      );
      //subtract money from playerMoney for skipping
      playerInfo.playerMoney = playerInfo.money - 10;
      //return turn if user wants to leave 
    
      
    //  shop();
     return true;
    }
  }
};

var fight = function (enemy) {
  while (playerInfo.health > 0 && enemy.health>0) {
    //ask user if they'd liked to fight or skip using fightOrSkip function 
    if (fightOrSkip());{
      //if true, leave fight by breaking loop
      break
    };
  }
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
  
  var promptFight= window.prompt (
    ' Would you like FIGHT or SKIP this battle? Enter "FIGHT" or SKIP" to choose'
  );

  //if user picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm user wants to skip
    var confirmSkip = window.prompt("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(
        playerInfo.name + " has decided to skip this fight. Goodbye! "
      );
      //subtract money from playerInfo.money for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      console.log("playerInfo.money", playerInfo.money);
      // break;
      }
    }

  

  //remove enemy's health by subtracting the amount set in the playerInfo.attack variable
  // if (promptFight === "fight" || promptFight === "FIGHT") {
  //Rremove enemy's health by subtracting the amount set in the playerInfo.attack varialbe
  enemy.health = Math.max(0, enemy.health - playerInfo.attack);
  console.log(
    playerInfo.name +
      " attacked " +
      enemy.name +
      ". " +
      enemy.name +
      " now has " +
      enemy.health +
      " health remaining."
  );

  // check enemy's health
  if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");

    //award player money for winning
    playerInfo.money = playerInfo.money + 20;

    //leave while () loop since enemy is dead
    //   break;
  } else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemy.attack variable
  var damage = randomNumber(enemy.attack - 3, enemy.attack);
  playerInfo.health = Math.max(0, playerInfo.health - damage);

  console.log(
    enemy.name +
      " attacked " +
      playerInfo.name +
      " . " +
      playerInfo.name +
      " now has " +
      playerInfo.health +
      " health remaining."
  );

  //check players health

  if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + " has died !");
    //leave while ()loop if player is dead
    // break;
  } else {
    window.alert(
      playerInfo.name + " still has " + playerInfo.health + " health left."
    );
  }
}; 

// else {
//     window.alert(" You need to a pick a valid option. Try again!");

//function to start the game

var startGame = function () {
  //reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      //     //let user know what round they are in, remeber that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      //pick new enemy to fight based on the index of the enemy.names array
      var randomenemy = Math.floor(Math.random(1) * 3);
      var pickedEnemyObj = enemyInfo[randomenemy];
      //     //rest enemy.health before starting new fight
      //generate random daamge value based on player's atack power
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      //   pickedEnemyObj.Health = randomNumber(40, 60);

      //pass the pickedenemy.name variable's value into the fight function, where wil assume the value of the enemy.name parameter
      fight(pickedEnemyObj);
      //if we're not at the last enemy in the array
      //if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        //ask if user wants to use the sotre before the next round
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round "
        );

        //if yes, take them to the store() function
        if (storeConfirm) {
          // shop();
          // console.log (window.shopOptionPrompt);
          switch (shop()) {
            case "REFILL": // new case
            case "refill":
              playerInfo.refillHealth();
              break;
            case "UPGRADE": // new case
            case "upgrade":
              playerInfo.upgradeAttack();
              break;

            case "LEAVE": // new case
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
    } else {
      window.alert("You have lost your robot in battle! Game over!");
    }
    break;
    //play again
    // startGame();
    endGame();
  }
};

// function to end the entire game
var endGame = function () {
  window.alert("The game has now ended. let's see how you did!");
  //if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert(
      " Great job, you've survived the game! you now have a score of " +
        playerInfo.money +
        "."
    );
  } else {
    window.alert("You've lost your robot in battles.");
  }
  //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  //ask player if they'd like to paly again

  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    //restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

function shop() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to 'REFILL', your health, 'UPGRADE', your attack, or 'LEAVE' to make a choice."
  );
  //   playerInfo.health = playerInfo.health + 20;
  //   playerInfo.money = playerInfo.money - 7;
  return shopOptionPrompt;
}

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  //   var value = Math.floor(Math.random() * 21) + 40;

  return value;
};

//function to set name
var getPlayerName = function () {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("what is your robot's name?");
  }

  return name;
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // coma
  refillHealth: function () {
    console.log(
      "this.money: ",
      this.money,
      "health: ",
      this.health,
      "attack:",
      this.attack
    );
    if (this.money >= 7) {
      window.alert("refilling player's health by 20 to 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money! ");
    }
  }, // comma
  upgradeAttack: function () {
    if (this.money >= 7) {
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

var enemyInfo = [
  {
    name: "Roberto",
    attack: randomNumber(10, 14),
    health: randomNumber(40, 60),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
    health: randomNumber(40, 60),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
    health: randomNumber(40, 60),
  },
];

startGame();
