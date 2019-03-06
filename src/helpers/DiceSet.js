export default class DiceSet
{
    // TODO enable dice argument to be either array of dice or single die
    constructor(dice = [])
    {
        // TODO validate dice argument before assigning property
        this.dice = dice;
        Object.freeze(this);
    }
    
    addDice(dice)
    {
        // TODO push entire array at once(?)
        for(var i = 0; i < dice.length; i++)
        {
            this.dice.push(dice[i]);
        }
    }
    
    removeDie(index)
    {
        this.dice.splice(index, 1);
    }
}