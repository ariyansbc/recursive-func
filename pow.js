

function pow(x, n) {

    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result = result *  x;
    }
  
    return result;
  }
 console.log(pow(2, 4));
