function fibonaccIterative(num) {
    
    var fibo = [0,1];
    for(var i = 2 ; i<= num ; i++) {
        var nextElement = fibo[i-1]+ fibo[i-2];
        
        fibo.push(nextElement);
    }

    return fibo;
}

// var result = fibonaccIterative(5);
// console.log(result);
//node fiboIterative

function fibonacciRecursive(n) {
    if(n == 0) {
        
        return [0];
    }
    if (n == 1) {

        return [0,1];
    }
    else {
        
        var fibo = fibonacciRecursive(n-1);
        var nextElement = fibo[n-1] + fibo [n-2];
        fibo.push(nextElement);
    }
   return fibo;
}
var result = fibonacciRecursive(5);
console.log(result);