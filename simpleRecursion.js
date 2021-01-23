
function simpleRecursion(n) {

    if(n==10) {
        return;
    }
    console.log(n);
    n++;
    console.log(n);
    simpleRecursion(n);
}
var result  = simpleRecursion(0)
console.log(result);
//node simpleRecursion