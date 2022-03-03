//Game States
// "WIN" - Player robot has defeated all enemy-robots
//  *Fight all enemy robots
//  *Defeat each enemy robot
// "LOSE" - Player robot's health is 0 or less

var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  //Alert players of round start
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

  //if player choose to fight, then fight
  if (promptFight === "fight"|| promptFight === "FIGHT") {
  //Subtract the value of playerAttack from enemyHealth, use result to update enemyHealth
  enemyHealth = enemyHealth - playerAttack;

  //Log a message to console to show that it worked
  console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " +enemyHealth + " health remaining."
  );

  //Check enemy health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  }
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  //Subtract the value of enemyAttack from playerHealth, use result to update playerHealth
    playerHealth = playerHealth - enemyAttack;

  //Log a message to the console to show that it worked
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );
  //check player health
  if (playerHealth <=0) {
    window.alert(playerName + " has died!");
  }
  else{
    window.alert(playerName + " still has " + playerHealth + " health left.")
  }
//if player chooses to skip
} else if (promptFight === "skip"||promptFight === "SKIP") {
  //confirm player skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  //if true leave fight
  if (confirmSkip) {
    window.alert (playerName + " has decided to skip this fight. Goodbye!");
    //subtract money for skipping
    playerMoney = playerMoney - 2;
  }
  //if false, ask question again by running fight
  else {
    fight()
  }
} else {
  window.alert("You need to choose a valid option. Try again!")
}
}
  
  
//fight ();
