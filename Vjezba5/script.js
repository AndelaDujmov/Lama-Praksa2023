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

var arr1 = new Array();
var arr2 = new Array();
var inBetween = new Array();

var mainFunction = () => {
    var number1 = document.getElementById("data1").value;
    var number2 = document.getElementById("data2").value;

    arr1[arr1.length] = number1;
    arr2[arr2.length] = number2;

    arr1.forEach(x => console.log(x));
    arr2.forEach(x => console.log(x));
}

var showAll = () => {

    var arith1 = returnArithmeticMean(arr1, arr1.length);
    var arith2 = returnArithmeticMean(arr2, arr2.length);

    var min = returnMin(arith1, arith2);
    var max = returnMax(arith1, arith2);

    for(var i=0;i<arith1.length;i++){
        if(min < arr1[i] && arr1[i] < max){
            inBetween[len] = arr1[i];
            len++;
        }
        
    }

    for(var i=0;i<arith2.length;i++){
        if(min < arr2[i] && arr2[i] < max){
            inBetween[len] = arr2[i];
            len++;
        }   
    }

    
    if(inBetween.length==0){
        document.getElementById("result").innerHTML += "<p id='red'>There is no arithmetic mean for these arrays</p>";
    } 
    else{
        for(var j=0;j<content.length;j++){
            var content = "<p>The numbers inbetween are:</p><br>";
    
            content += [...inBetween] + "<br>";
    
            document.getElementById("result").innerHTML += content;
        }
    }
}


