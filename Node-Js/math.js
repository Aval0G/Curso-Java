const math = {};

function suma(x1,x2){
    return x1+x2
}
function resta(x1,x2){
    return x1-x2
}
function multi(x1,x2){
    return x1*x2
}
function divi(x1,x2){
    return x1/x2
}


math.divi = divi;
math.resta = resta;
math.multi = multi;
math.suma = suma;

module.exports = math;


