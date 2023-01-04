
function Alien(name,tech){           //Whenever we are creating new object that refers to this function
    this.name = name;
    this.tech = tech;
     
}

let alien = new Alien('sumanth','java')      //Creating new object
let alien1 = new Alien('Uday', 'Python')  
let alien2 = new Alien('Charan', 'FSD')     //Creating new object
console.log(alien,alien1,alien2);