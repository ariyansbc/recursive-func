
function sumOfNum(n) {

    if( n <= 10) {
        
        return n + sumOfNum(n+1);
       // return n + sumOfNum(n+1)+sumOfNum(n+1);
    }
    else {
        return 0;
    }
}
let result = sumOfNum(1);
console.log(result);