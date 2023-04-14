let returnArithmeticMean = (arr1, len) => {
    
    var sum = 0;

    for(var i=0;i<len;i++){
        sum += arr1[i];
    }

    return parseInt(sum/len);
}

var returnMax = (n1, n2) => {
    if(n1 > n2)
        return n1;
    else 
        return n2;
}

var returnMin = (n1, n2) => {
    if(n1 < n2)
        return n1;
    else 
        return n2;
}

var arr1 = [];
var arr2 = [];
var inBetween = [];
var len = 0;


var size1 = parseInt(prompt("Enter the number of elements in first array!"));
var size2 = parseInt(prompt("Enter the number of elements in second array!"));

for(var i=0;i<size1;i++){
    arr1[i] = parseInt(prompt("Enter first array element:" + (i+1)));
}

for(var i=0;i<size2;i++){
    arr2[i] = parseInt(prompt("Enter second array element:" + (i+1)));
}


var arith1 = returnArithmeticMean(arr1, size1);
var arith2 = returnArithmeticMean(arr2, size2);

var min = returnMin(arith1, arith2);
var max = returnMax(arith1, arith2);

for(var i=0;i<size1;i++){
    if(min < arr1[i] && arr1[i] < max){
        inBetween[len] = arr1[i];
        len++;
    }
    
}

for(var i=0;i<size2;i++){
    if(min < arr2[i] && arr2[i] < max){
        inBetween[len] = arr2[i];
        len++;
    }   
}

if(len==0){
    document.getElementById("result").innerHTML = "<p id='red'>There is no arithmetic mean for these arrays</p>"
}

for(var j=0;j<len;j++){
    document.getElementById("result").innerHTML += "<p>" + inBetween[j] + ", <p>";
}

