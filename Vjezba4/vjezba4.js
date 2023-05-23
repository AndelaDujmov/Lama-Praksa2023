let returnMultiplication = (a, b, c) => {
    return a*b*c;
}

let returnAddition = (a, b, c) => {
    return a+b+c;
}


let dataEntry = () => {
    var num1 = parseInt(prompt("Unesite cijeli broj!"));
    var num2 = parseInt(prompt("Unesite cijeli broj!"));
    var num3 = parseInt(prompt("Unesite cijeli broj!"));

    if(returnMultiplication(num1, num2, num3) > returnAddition(num1, num2, num3))
        return "<p id='red'>Umnožak brojeva x, y i z veći je od zboja brojeva</p>";
    else if(returnMultiplication(num1, num2, num3) < returnAddition(num1, num2, num3))
        return "<p id='blue'>Zbroj brojeva x, y i z je veći od njihovog umnoška</p>";
    else
        return "<p id='green'>Zbroj brojeva x, y i z veći je jednak njihovom umnošku</p>";
    
}

document.getElementById("solution").innerHTML = dataEntry();