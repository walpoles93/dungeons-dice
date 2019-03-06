export default class DiceSet
{
    constructor(dice)
    {
        // TODO validate dice argument before assigning property
        this.dice = dice;
        Object.freeze(this);
    }
    
    addDice(dice)
    {
        this.dice.push(dice);
    }
    
    removeDie(index)
    {
        this.dice.splice(index, 1);
    }
}