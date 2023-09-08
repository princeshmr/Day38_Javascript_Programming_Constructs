//UC1 - Random Function to get Single Digit.
var random=Math.floor(Math.random()*10);
console.log("single digit number "+random);
//------------------------------------------

//UC2 - Use Random to get Dice Number between 1 to 6

random=Math.floor(Math.random()*6)+1;
console.log("dice number "+random);
//-------------------------------------------

//UC3 - Add two Random Dice Number and Print the Result
var randomOne=Math.floor(Math.random()*6)+1;
var randomTwo=Math.floor(Math.random()*6)+1;
random=randomOne+randomTwo;
console.log("Add two Random Dice Number "+random);
//----------------------------------------------

//UC4 - reads 5 Random 2 Digit values find their sum and the average
var randomOne = Math.floor(Math.random()%99)+10;
var randomTwo = Math.floor(Math.random()%99)+10;
var randomThree = Math.floor(Math.random()%99)+10;
var randomFour = Math.floor(Math.random()%99)+10;
var randomFive = Math.floor(Math.random()%99)+10;
var sum=randomOne+randomTwo+randomThree+randomFour+randomFive;
var average=sum/5;

console.log("sum = "+sum);
console.log("average = "+average);
//--------------------------------------------------------------

//UC5 - Unit Conversion
const  Onefeet = 12;
console.log("42 inch = "+42/Onefeet+" feet");

const  one_feet = 0.3048;
var Rectangular_length = 60;
var  Rectangular_width = 40;
console.log("Rectangular_length = "+60*one_feet+" meters");
console.log("Rectangular_width = "+40*one_feet+" meters");

const one_acre = 6;
console.log("25 such plots : "+25/one_acre+" acres");