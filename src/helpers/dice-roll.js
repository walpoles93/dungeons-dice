// Example dice set
var diceSet = [10, 10, 8, 12, 6]

var diceRolls = GenerateRolls(diceSet);

// Get a random roll value for each die in the set
function GenerateRolls(dice) 
{
    var rolls = [];
    for (i = 0; i < dice.length; i++) 
    {
        var roll = Math.floor(Math.random() * dice[i]) + 1;
        rolls.push(roll);
    }
    return rolls;
}
