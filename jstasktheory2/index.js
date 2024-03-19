// let a=1
// let b=a++
// let c=b++
// let d=a++
// let e=c++
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// *******************************************

let num1=10;
let num2=15;
if(num1>num2){
    console.log("num1 is greater")
}
else if(num1==num2){
    console.log("num1 and num2 is equal")
}
else if(num1<num2){
    console.log("num1 is smaller")
}
else{
    console.log("not vaild")
}

// ****************************************************************************

let  lightcolor= "green"

if(lightcolor=="green"){
    console.log("Go")
}
else if(lightcolor=="yellow"){
    console.log("Slow down")
}
else{
    console.log("Stop")
}

// ********************************************************

let age=68;
if(age<18){
        console.log("Minor")
}
else if(age>= 18 && age<=65){
    console.log("Adult")
}
else{
    console.log("Senior")
}

// *********************************************************************************

let percentage=78;

if(percentage >= 60 && percentage<=100){
    console.log("I Division")
}
else if(percentage >= 45 && percentage <= 59){
    console.log("II Division")
}
else if(percentage >= 33 && percentage <= 44){
    console.log("III Division")
}
else{
    console.log("Fail")
}

// ************************************************************************

let num=-8;

if(num>=0){
    console.log("number is positive")
}

else{
    console.log("Number is negative")
}

// ****************************************************************************************
let Number =7;

if(Number % 2 ==0){
    console.log("number is even")
}

else{
    console.log("Number is odd")
}

// ************************************************************************************************

let price=101;

if(price >= 100){
    console.log("Discount of 20")
}
else if(price >=50 && price <= 99){
    console.log("Discount of 10")
}
else{
    console.log("Discount of 0")
}

// ***********************************************************************************

let time=6;

if(time <=12){
    console.log("Good morning")
}
else if(time >=13 && time <=17){
    console.log("Good afternoon")
}
else if(time >=18 && time <=19){
    console.log("Good evening")
}
else{
    console.log("Good night")
}

// *****************************************************************************************************

let weight =100;
let height = 5;
let BMI= weight/(height * height);

if(BMI < 40 ){
    console.log("normal")
}
else if(BMI >=40 && BMI <=60){
    console.log("healthy")
}
else{
    console.log("overweight")
}

// *********************************************************************************

let x = 10;
let y= 20;
x > y ? console.log("x is greater") : console.log("x is smaller");
