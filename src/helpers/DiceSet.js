export default class DiceSet
{
    // TODO enable dice argument to be either array of dice or single die
    constructor(dice = [], name = "Custom dice set")
    {
        // TODO validate dice argument before assigning property
        this.dice = dice;
        this.name = name;
        Object.seal(this);
    }
    
    get setName() {
        return this.name;
    }
    
    set setName(name){
        this.name = name;
    }
    
    addDice(dice)
    {
        // TODO push entire array at once(?)
        for(let i = 0; i < dice.length; i++)
        {
            this.dice.push(dice[i]);
        }
    }
    
    removeDie(die)
    {
        this.dice.splice(this.dice.indexOf(die), 1);
    }
        
    rollDice()
    {
        let rolls = [];
        this.dice.forEach(function(die){
            rolls.push(die.roll());
        });
        return rolls;
    }
}