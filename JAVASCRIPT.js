//DAY-1
//internal javasript type
//types of variable declaration
//1.VAR
// var firstNum;
// firstNum=20;
//  firstNum=10;
// var firstNum="hi";
// console.log(firstNum);
//2.LET
// let secondNum;
//  secondNum=10;
//  let x=10;
// let secondNum;
//redeclaration not possible
// let secondNum=40;
// console.log(secondNum); 
// //3.CONST
// const a= 10;
// console.log(a);
//DAY-2
// let num=13;
// console.log(num);
// console.log(typeof num);
// console.log(window);
// console.log(window.console.log("window is a object hence js is also called object language"));
// window.console.warn("to give warning");
// window.console.error("to give error message");
//USE OF ALERT
// window.alert("it has ok option only");
// var num1=Number(prompt("enter num1"));
// var num2=Number(prompt("enter num2"));
// var sum=num1+num2;
// alert(sum);
//USE OF CONFIRM
// var ans=confirm("are you 18+");
// if(ans==true){
//     alert("welcome to web page");
// }
// else if(ans==false){
//     alert("go and watch series");
// }
// else{
//     alert("invalid");
//}
//DIFFERENCE BETWEEN WRITE AND WRITELN FUNCTION
// document.write("to print the line without single character space at last");
// document.writeln("to print the line with single character space at last");
// document.write(12)
// document.writeln(15)
// //Number() is used to convert any of datatype to number datatype
// var a=Number(true);
// console.log(typeof a);
// var b= Number("anu");
// console.log(typeof b);
//Number methods
// var num=12.64567;
// console.log(parseInt(num));
// console.log(parseFloat(num))
// console.log(typeof  num.toString());
// console.log(num.toFixed());
// console.log(num.toPrecision())
//NAN
// var num1=12;
// var num2='z';
// console.log(num1 | num2);
// //STRING METHODS
// let str="hi";
// console.log(typeof str);
// let str1="hi 1";
// console.log(typeof str1);
// // //to print string with single quote
// console.log('"hi"')
// console.log("'hi'");
// let str2='hello'
// console.log(str2)
// console.log(typeof str2)
//  let name1="raju";

// let id=123;
// console.log("the name is "+name1+"and id is"+id);
// console.log(`the name is ${name1} and id is ${id}`);
// console.log(name1[0]);
// console.log(name1.charAt(2));
// console.log(name1.charCodeAt(1));
// console.log(name1.charCodeAt(2));
// console.log(String.fromCharCode(106));
// console.log(name1.toLowerCase());
// console.log(name1.toUpperCase());
//CONCATINATION OPERATOR
// let name1="rajD12346";
// let val="is a good boy"
// let greet=" and gm"
// console.log(name1.length);
// console.log(name1.concat(val,greet));
// console.log(name1+val)

// console.log(name1.indexOf('1'));
//LOGICS
// let name1="RAJESH"
// var ans=""
// for(let i=0;i<name1.length;i++)
// {
//     if(i%2!=0)
// {
// ans+=(String.fromCharCode(name1.charCodeAt(i)+32));
// }
// }
//console.log(ans);
//SLICE METHOD 
// let str="hi hello gm"
//  console.log(str.slice(3,8));
//  console.log(str.slice(-8,-3));
//  console.log(str.slice(3));
//  //SUBSTRING : it is also fetch the character from string based on the index value if try to pass negative index value as a argument it will be consider as zero
//   //this method also accept the 2 arguments
//   console.log(str.substring(3,8));
//console.log(str.substring(-8));
//   //SUBSTR - this methods accepts 2 arguments 1st is starting index value second is count of the character needs to be fetch
//   console.log(str.substr(0))
//   console.log(str.substr(3,1))
//TRIM METHOD -THIS METHOD IS USED TO REMOVE WHITE SPACES FROM THE BEGIN AND END OF THE STRING 
//TRIMSTART METHOD :IT REMOVES WHITE SPACES FROM THE BEGINING OF THE STRING 
//TRIMEND : IT REMOVES THE WHITE SPACES FROM THE END OF THE STRING
// var str="        abc def           ";
// console.log(str)
// console.log(str.length)
// console.log(str.trimStart().length)
// console.log(str.trimStart());
// console.log(str.trimEnd().length);
// console.log(str.trimEnd());
//INDEXOF: THIS METHOD RETURNS THE INDEX VALUE OF THE SPECIFIED CHARACTER WHICH MATCHES FIRST CHARACTER
//THIS METHOD ACCEPTS THE TWO PARAMETER FIRST ARGUMENTS IS THE SEARCH CHARACTER SECOND ARGUMENT IS THE INDEX VALUE TO SPECIFY THE SEARCH FOR THE CHARACTER 
//var str="hi hello gm"
//console.log(str.indexOf(h))


//lastindex(): this method returnd the specified character from last of the string

//INCLUDES():this method is used to check whether the specified string is present in the  given string
 //var str="hi hello hey";
//console.log(str.includes("hey"));
// console.log(str.includes("hey1"));

//STARTSWITH():THIS METHOD IS USED TO CHECK WHETHER THE SPACIFIED STRING VALUE IS STARTING WITH THE GIVEN STRING
// var str="hi hello hey";
// console.log(str.startsWith("hi"))
// console.log(str.startsWith("hello",3))
//console.log(str.endsWith("hey"))
// padstart: this method pads a string from the start of the string with the specified maximum length
// var str="hi"
// console.log(str.padStart(10,"gm hellow hi"))
// console.log(str.padEnd(10,"gm hellow hi"));
// var str1="5";
// console.log(str.padStart(,1));
// implentation of INCLUDES() METHOD
// String.prototype.includes = function(searchString, position) {
//   // 1. Convert the string to a primitive string value.
//   const str = String(this);

//   // 2. Get the length of the string.
//   const len = str.length;

//   // 3. Set the starting index based on the 'position' argument.
//   const start = position ? Math.min(position, len) : 0;

//   // 4. Loop through the string from the 'start' position.
//   for (let i = start; i < len; i++) {
//     // 5. Check if the substring starting at 'i' matches 'searchString'.
//     let match = true;
//     for (let j = 0; j < searchString.length; j++) {
//       if (str[i + j] !== searchString[j]) {
//         match = false;
//         break;
//       }
//     }

//     // 6. If a match is found, return true.
//     if (match) {
//      return true;
     
//     }
//   }

//   // 7. If no match is found, return false.
//   return false;
  
// };
//IMPLENTATION FOR TRIM() METHOD

// String.prototype.customTrim = function() {
//   // 1. Convert the string to a primitive string value.
//   const str = String(this);

//   // 2. Get the length of the string.
//   const len = str.length;

//   // 3. Initialize two variables, 'start' and 'end', to track the trimming positions.
//   let start = 0;
//   let end = len - 1;

//   // 4. Loop through the string from the beginning and find the first non-whitespace character.
//   while (start < len && (str[start] === ' ' || str[start] === '\t' || str[start] === '\n')) {
//     start++;
//   }

//   // 5. Loop through the string from the end and find the last non-whitespace character.
//   while (end >= 0 && (str[end] === ' ' || str[end] === '\t' || str[end] === '\n')) {
//     end--;
//   }

//   // 6. Extract the trimmed substring from 'start' to 'end' positions.
//   const trimmed = str.slice(start, end + 1);

//   // 7. Return the trimmed string.
//   return trimmed;
// };
// var a=12;
// var b=13;
// var c=a+b;
// let d;
// console.log(c);
// console.log(d);
// d="hi"
// console.log(d);
//SPILT METHOD: this method is used to split the string character into an array eith respect to the specified seperator, this method returns new arry. return type is array
// var str ="hi hello bay"
//  var str="hi hello bay"
//  var arr=[];
// for(var i=0;i<str.length;i++)
//  {
//   arr[i]=str[i];
 //}
//console.log(str.split(" "))
//console.log(str.reverse());
// console.log(str.split(" ").reverse().join(""));
 ////console.log(arr);
//REPLACE(): this method will replace the specified string value with a new value
//console.log(str.replace("hi","gm"));
//REPALCEALL():this method will replace all the specified string value with the new value
// console.log(str.replaceAll("h",9))
//EXAMPLE TASK OF METHOD JOINY
// var str1="malayalam";
// var ans= str1.split("").reverse().join("");
// console.log(ans);
// console.log(ans==str1);
//Boolean: boolean is a primitive datatype in java script which as two value either two or false Which is used to check the condition is true or false 
// var a=true
// var b=false
// console.log(typeof a)
// console.log(typeof b)
// if(1<2){
//   console.log("enter the condition loop")
// }
//the process of coverting one type of data to anothe type is called type conversion
//we have typed 1.implicit and 2. explicit 
//EXAMPLE FOR IMPLICIT TYPE CASTING
// console.log("1"+1)//num to string
// console.log("1"-1)//string to num
// console.log("1"/1)//string to num
// console.log("1"*1)//string to num
// console.log("hi"*2)//string to num
// console.log(true+1)//boolean to num
// console.log(false+"2")//boolean to string
// console.log(typeof Infinity)

//
// let str="    hi am anu"
// let  final="";
// let flag=true;
// for(let i=0;i<str.length;i++)
// {
//   if(str[i]===" " && flag===true)
//    continue
//     else
// {
//   flag=false;
//   final=final+str[i]
// }
// }
// console.log(final.length)
// console.log(str.length)
// console.log(`${str}`)
// console.log(`${final}`)
//NULL-represents empty value
// var a=null;
// console.log(a);
// console.log(typeof a)
//UNDEFINED-it is default value assigned to the variable is declared without initialisation
// var a=undefined;
//var c;
// console.log(a)
 //console.log(c)
// console.log(typeof a)
//console.log(typeof c)
//THERE ARE TWO WAYS TO DECLARE THE BIGINT 
// var a=BigInt(15)//constructor
// var b=13n;//literal
// console.log(a)
// console.log(b)
// console.log(typeof b)
//we cannot assign floating number into bigibt
// var a=BigInt(15.341)
// console.log(a)
//WE CANNOT MIX BIGINT DATATYPE INTO OTHER TYPE LIKE INTEGER AND STRING
// var a=BigInt(12)
// console.log(a+23)
// console.log(a+"23")
// var a=Symbol(12)
// console.log(a)//Symbol(12)
// console.log(a.description)//12
// console.log(typeof a)//symbol
// console.log(`-------`)
// var b=Symbol(12)
// console.log(b)
// console.log(b.description)
// console.log(typeof b)
// console.log(a==b)//false
//1.   PROGRAM
//write a javascript program to find sum of factorial of given numbe
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// function sumOfFactorial(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += factorial(i);
//   }
//   return sum;
// }

// const inputNumber = parseInt(prompt("Enter a number:"));
// const result = sumOfFactorial(inputNumber);

//console.log(`The sum of factorials from 1 to ${inputNumber} is ${result}`);
//2. //to find sum of factorial of each digit in a given number
// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

// function sumOfFactorialDigits(number) {
//   const numString = number.toString();
//   let sum = 0;

//   for (let i = 0; i < numString.length; i++) {
//     const digit = parseInt(numString[i]);
//     sum += factorial(digit);
//   }

//   return sum;
// }

// const inputNumber = 146; // Replace with the number you want to find the sum of factorial digits for.
// const result = sumOfFactorialDigits(inputNumber);
// console.log(`Sum of factorial digits of ${inputNumber} is ${result}`);
//3.reverse the given number 
// function reverseNumber(number) {
//   const reversed = parseInt(number.toString().split('').reverse().join(''));
//   return reversed;
// }

// const inputNumber = 12345; // Replace with the number you want to reverse.
// const reversedNumber = reverseNumber(inputNumber);
// console.log(`Reversed number: ${reversedNumber}`);
//4 . reverse the given number without using the inbuilt methods
// function reverseNumber(number) {
//   let reversed = 0;
//   let flag = false;

//   if (number < 0) {
//     flag = true;
//     number = Math.abs(number); // Make the number positive for reversing.
//   }

//   while (number > 0) {
//     const lastDigit = number % 10;
//     reversed = reversed * 10 + lastDigit;
//     number = Math.floor(number / 10);
//   }

//   return isNegative ? -reversed : reversed;
// }

// const inputNumber = 12345; // Replace with the number you want to reverse.
// const reversedNumber = reverseNumber(inputNumber);
// console.log(`Reversed number of ${inputNumber} is ${reversedNumber}`);
//USE OF Math.abs METHODS
// var num =-98;
// console.log(Math.abs(num));
//5.
// var start=2;
// var end=9;
// for(let i=start;i<=end;i++)
// {
//   var num=i;
//   var ans=1;
//   while(num!=0)
//   {
//     ans=ans*num;
//     num--;
//   }
//   console.log(ans)
// }
//6.
