var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  //Alert players of round start
  window.alert("Welcome to Robot Gladiators!");

  //Subtract the value of playerAttack from enemyHealth, use result to update enemyHealth
  enemyHealth = enemyHealth - playerAttack;

  //Log a message to console to show that it worked
  console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " +enemyHealth + " health remaining."
  );
  //Subtract the value of enemyAttack from playerHealth, use result to update playerHealth
    playerHealth = playerHealth - enemyAttack;

  //Log a message to the console to show that it worked
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  )
}
  
  
fight ();
