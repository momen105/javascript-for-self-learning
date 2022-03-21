// number
var numNumber = 20;
console.log(typeof(numNumber))


//string 
var numString = "20";
console.log(typeof(numString))


//convert data type : number to string
var numConvert = 20;
numConvert = toString(numConvert)
console.log(typeof(numConvert))


//convert data type : string to Number
var stringConvert = "20";
// for int number
stringConvert = parseInt(stringConvert)
// for float number
// stringConvert = parseFloat(stringConvert)
console.log(typeof(stringConvert))


// after point show 2 digit
var number = 2.5678;
console.log(number.toFixed(2))


// total digit
var number = 2.5678;
console.log(number.toPrecision(1))


// Number function work to convert data type to number data type from another data type
console.log(Number("20"))
console.log(Number(true))
console.log(Number(false))