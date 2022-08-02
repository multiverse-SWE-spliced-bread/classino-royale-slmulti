// write your classes:

class Die{

    constructor(sides){
        this.sides = sides
    }

    roll(){
        return Math.floor(Math.random()*this.sides)+1
    }
}


var myDie = new Die (6)
console.log("My dice has " + myDie.sides + " sides!")
// myDie.roll()

// class Cup{


// }

// test your classes with console.log
// to show they work as intended:


