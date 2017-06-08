var getDieRoll = function(dieSize) {
    console.log(dieSize);
    return Math.ceil(dieSize * Math.random());
};
var showResult = function(){
    console.log(firstDie)
    console.log(secondDie)
    console.log(firstDie + secondDie)
}
var firstDie = (getDieRoll(10));
var secondDie = (getDieRoll(10));
showResult();

