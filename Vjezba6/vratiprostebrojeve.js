var isPrime = (number) => {
    for(var j = 2; j<number; j++){
        if(number%j == 0)
            return false;
    }
    return true;
}

var returnAllPrimeNumbers = (number) => {
    var primeArray = [];
    var len = 0;
    var isTrue;

    for(var i=1;i<number;i++){
        
        if(isPrime(i))
        {
            primeArray[len] = i;
            len ++;
        }
    }
    return primeArray;
}


const input = require('prompt-sync')();

var positiveNumber = parseInt(input("Please enter the positive number"));

if (positiveNumber < 0){
    console.log("You did not enter a positive number");
}
else{
    console.log("You entered a positive number");
    var primes = returnAllPrimeNumbers(positiveNumber);


    console.log("The array of prime numbers is:");

    for(var i=0;i<primes.length/2;i++){
        console.log(primes[i] + ", ")
    }
}

