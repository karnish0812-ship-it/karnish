// var a=10;
// let b=20;
// const c=30;
// console.log(a);
// console.log(b);
// console.log(c);

//const { cacheSignal } = require("react")

// var num=10;
// var str="karnish";
// var undefinedVar;
// var Null=null;
// var boolean=true;
 
// console.log( typeof num);
// console.log( typeof str);
// console.log( typeof undefinedVar);
// console.log( typeof Null);
// console.log( typeof boolean);

// var bigint=123n;
// var symbol=Symbol("karnish");

// console.log( bigint);
// console.log( symbol)
// ;
// var arr =[1,2,3,4,5];
// console.log(typeof  arr, arr);

// var obj={
//     name:"karnish",
//     dept:["cse","it"],
// }
// console.log( typeof obj, obj);


// var a=10;
// var b=2;
// console.log(a+b);   
// console.log(a-b);
// console.log(a*b);
// console.log (a%b);
// console.log(a/b);

// // logical operators

// var a=true;
// var b=false;
// console.log(a && b);
// console.log(a || b);
// console.log(!a);    

// // relational operators

// var a=10;
// var b=20;
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);  


// // assignment operator

// var a=10;
// var b=20;
 
// a+=b;
// console.log(a);
// a-=b;
// console.log(a);
// a*=b;
// console.log(a);
// a/=b;
// console.log(a);
// a%=b;
// console.log(a);
// a**=b;
// console.log(a);

// var a=10;
//  console.log(a++);
//  console.log (++a);

//  var a=10;
//  console.log(a--);
//  console.log(--a);


// var a=1;
// var b=1;
// var c=0;

// var result = a++ + --b + ++c - ++a + ++b + c++ + b++ + a;
// console.log (result)


// if(true )
// {
//     console.log("if condition statment ")

// }

// if condition 

// var a=10;
// var b=20;

// if(true)
// {
//     // template literals
//     console.log(`${a}+${b}=${a+b}`)
// }

// var a; hoisting 

// console.log(a);
// var a = 10;

// var a=10;
// let b=10;
// if (true){
//     console.log(a);
//     let b=30;
//     console.log(b);
// }
// console.log (a);
// console.log(b);


// var a=10;
// if(a%2===0)
// {
//     console.log (`${a} is even`);
// }
// else 
// {
//     console.log(`${a}is odd`);
// }

//  var mark = 90;
//  if(mark>=90)
//  {
//     console.log(" O Grade");
//  }
//  else if(mark>=70)
//  {
//     console.log("A Grade");
//  }
//  else if(mark>=35)
//  {
//     console.log("PASS");
//  }
//  else
//  {
//     console.log("Fail");
//  }

// var a="10";
// var result = a%2===0 ? "Even" : "Odd" ;
// console.log(result)

// var mark=20;
// var result = (mark>=90) ? "O mark" :
//              (mark>=75) ? "A mark" :
//              (mark>=35) ? "PASS":
//              "Fail"
// console.log(result);

// var day=2;
// switch(day){
// case 1:{
//     console.log("sunday");
//     break;
// }
// case 2:{
//     console.log("monday");
//     break;
// }
// case 3:{
//     console.log("tuesday");
//     break;
// }
// case 4:{
//     console.log("wednesday");
//     break;
// }
// case 5:{
//     console.log("thursday");
//     break;
// }
// case 6:{
//     console.log("friday");
//     break;
// }
// case 7:{
//     console.log("saturday");
//     break;
// }
// default:{
//     console.log("Invaid Input");
// }
// }

//  for( var i=1;i<=10;i++ )
//  {
//     console.log(i);
//  }

// var val ="1068824";
// var count =0;
// while( val>0)
// {
//     count++;
//     val = Math.floor(val/10);
// }
// console.log(count)

// for(let i=1;i<=10;i++)
// {
//     if(i%2===0){
//     continue;
//     }
// console.log(i);
// }

// function

// add();
//  function add(){
//     console.log(10+20);
//  }

//  function add(a,b){
//     console.log(a+b);
//  }
//  add(10,20);


//  function add(a=5,b=6){
//     console.log(a+b);
//  }
//  add();

// var demo =()=>{
//     console.log(10+20)
// }
// demo();

// var demo =(a,b)=>{
//     console.log(a+b)
// }
// demo(10,20);

// var demo =(a,b)=>{
//     console.log(a+b)
// }
// demo();


// var demo =(a=6,b=7)=>{
//     console.log(a+b)
// }
// demo();



// // spread opertion(...)
// var arr =[10,20,30,]
// var arr2=[...arr,40,50]
// console.log(arr)
// console.log(arr2)

// destructuring opertion

// var [m1,m2,m3,m4,m5]=[90,91,92,93,94,]
// console.log(m1,m2,m3,m4,m5)


// var obj ={name,mobile,dept,email,isActive}={
//     name:"karnish",
//     mobile:9655241185,
//     dept:["AIDS","CT"],
//     email:"karnish0812@gmail.com",
//     isActive:true
// }
// console.log(name,mobile,dept,email,isActive)
    
//  for..in 

// var arr =[10,20,30,40,50];

// for(let index in arr){
//     console.log(index)
// }

// // for of 

// for(let value of arr){
//     console.log(value)
// }


// var obj ={
    // name:"karnish",
    // mobile:9655241185,
    // dept:["AIDS","CT"]
// }
// for(let key in obj)
// {
//     console.log(key,obj[key]);
// }

// var arr =[1,2,3,4,5];
// var result = arr.map((val)=>(val*2));
// console.log(result);

// var even = arr.filter((val)=>(val%2===0));
// console.log(even)

// var odd =arr.filter((val)=>(val%2!==0))
// console.log(odd)

// var sum =arr.reduce((add,val)=>(add+val),0);
// console.log(sum)

var username ={
    name:"karnish",
    mobile:9655241185,
    dept:["AIDS","CT"],
    programming:["java", "javascript", "c","c++"],
    database:[SQL]

}
var user ={
    ...username,
    password:1234567
}

console.log(password)