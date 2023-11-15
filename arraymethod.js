// var a=[1,2,3,4,5];
// var b=[6,7,8,9,10];
// console.log(a.join(" "));
// var c=["hxsb","udyu","sauui","ayyuy"]
// console.log(c.sort());//effect original array
// console.log(c.reverse());
// console.log(a.push(4))//push the element at the last and it return the new length of the array.
// console.log(a);
//console.log(a.pop())//it will return the deleted element and by using delete function only element will delete but space remain same.
//console.log(a.shift())//it will delete first element and return the element which has deleted.
//console.log(a.unshift(6))//insert the element at begining and it will return the length of the array
//console.log(a)
//console.log(a.concat(b))
// console.log(a.concat("abu"))//which doesnot effect the original array and it will return the array
// console.log(a)
//console.log(a.splice(1,0,40))//IT WILL RETURN THE DELETED ELEMENT IF NO ELEMENT IS DELETED IT WILL RETURN EMPTY ELEMENT.
 //console.log(a)
 //console.log(a.slice(0,4))//return the sliced array it will not effect the original string.
 //console.log(a)
// var a=new Date();//it will change based on current time  
// console.log(a);
//var d1=new Date(2002,1,20,7,30,30,100);//static
 //console.log(d1)
var d2=new Date(2002,1,20,9,23)
console.log(d2)//Wed Feb 20 2002 09:23:00 GMT+0530 (India Standard Time)
var d3=new Date(2002,1,20)
console.log(d3)//Wed Feb 20 2002 00:00:00 GMT+0530 (India Standard Time)
var d4=new Date(2002,1)
console.log(d4)//Fri Feb 01 2002 00:00:00 GMT+0530 (India Standard Time)
var d5=new Date(2002)//treated as millisecone
console.log(d5)//Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)
var d6=new Date(-2002000000)//treated as millisecone
console.log(d6)
var d7=new Date(78)//default 19 year will added
console.log(d7)
var d8=new Date("2002 febraury 20,19:30:50:900")
console.log(d8)