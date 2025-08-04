// console.log("Hello world");
// console.log("Rajan singh");
// let pencilePrice = 10;
// let eraserPrice =20;
// console.log(``)


// let age = 18;
// console.log(age <= 18);
// console.log("before my if statement");
// let age = 16;
// if(age >= 18){
//     console.log("you can vote");
//     console.log("you can drive");
// }
// if (age <18){
//     console.log("you cant vote");
// }

// console.log("after my if statement");


// let color = "red";
// if(color == "red"){
//     console.log("stop");
// }
// if(color =="yellow"){
//     console.log("get ready")

// }
// if(color == "green"){
//     console.log("walk");
// }

// let age =14;
// if(age>=18){
//     console.log("you can vote")
// }
// else if(age<18){
//     console.log("you cant vote")
// }

// let marks = 75;
// if(marks>=88){
//     console.log("A+")
// }
// else if(marks>=60){
//     console.log("A")
// }
// else if(marks>=33){
//     console.log("B")
// }
// else if(marks<33){
//     console.log("fail")
// }



// let age = 18;
// if(age>=18){
//     console.log("you can vote")
// }
// else{
//     console.log("you cant vote")
// }


// let size ="L";
// if(size === "XL"){
//     console.log("Price is RS.250")
// }
// else if(size ==="L"){
//     console.log("Price is RS.200")
// }
// else if(size ==="M"){
//     console.log("Price is RS.100")
// }
// else{
//     console.log("Price is RS.50")
// }


// alert("something is wrong")
// console.error("this is an error message");
// console.warn

// let firsname =prompt("enter ur name")


// let firstname=prompt("enter first name");
// let lastname=prompt("enter last name");
// // let msg=("welcome" , firstname ," " ,lastname);
// // console.log("welcome",firstname,lastname);
// console.log(`welcome ${firstname} ${lastname}`);


// let msg = "  hello  ";
// let password =prompt("set ur password ");
// console.log(password.trim());

// let name="apna college"


// let msg = "ILoveCoding"
// console.log(msg.indexOf("Love"));

// let msg = "   hello   ";
// let newmsg = msg.trim().toUpperCase();
// console.log(newmsg);


// let msg = "hello";
// console.log(msg.slice(-3))

// let msg = "IloveCoding"
// console.log(msg.replace("love","do"));
// console.log(msg.repeat(2));

// question
// let msg = "help"
// console.log(msg.trim().toUpperCase());

// let msg = "ApnaCollege"
// let nwemsg = msg.slice(4)
// console.log(msg.slice(4).replace("l","t"));


// let student1 = "Rajan";
// let student2 = "Piyush";
// let student3 = "Rohan";

// let students = ["Rajan","Piyush","Rohan"]
// console.log(students);


// for(let i=1; i<=15; i++){
//     if(i%2!=0);
//     console.log(i);


// for(let i=2; i<=10; i=i+2){
// console.log(i);

// }

// infinite loop
// for(let i=1; i>=0;i++){
//     console.log(i);
// }

// for(let i =5;i<=50;i=i+5){
//     console.log(i);
// }

// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(i);
//     }
// }



// const favMovie = "avatar";
// let guess = prompt("Guess my favourite movie (type 'quit' to stop):");

// while (guess !== favMovie && guess !== "quit") {
//     guess = prompt("Wrong guess. Please try again (or type 'quit' to stop):");
// }

// if (guess === favMovie) {
//     console.log("Congrats!! You guessed it right.");
// } else {
//     console.log("You quit the game.");
// }



// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// let result = deleteOccurrences(arr,num);
// console.log(result);


// practice question -4
// let arr=[1, 2, 3, 4, 5, 6, 2, 3];
// for(let i =0; i<arr.length;i++){
//     if(arr[i]==2){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);


// question -2
// let numb=287152;
// let count=0;

// let copy=numb;
// while(copy>0){
//     copy=Math.floor(copy/10);
//     count++;
// }
// console.log(count);

// ques-3
// let numb = 287152;
// let sum = 0;

// let copy = numb;
// while (copy > 0) {
//     let digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy / 10);
// }
// console.log("Sum of digits:", sum);


// ques-4
// let input = prompt("enter the number for which you want to find factorial");
// let fac=1;
// for(let i =1;i<=input;i++){
//     fac*=i;
// }
// console.log(fac);

// ques-5
// let arr = [12, 45, 67, 89, 23, 90, 56];

// let max = arr[0]; 

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log("Largest number :", max); 

// const student = {
//     name:"Rajan",
//     age:22,
//     eng:95,
//     math:93,
//     phy:97,
//     getAvg(){
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);

//     }

// }
// function getAvg(){
//     console.log(this);
// }


// try and catch
// console.log("hello");
// console.log("hello");
// let a = 5;
// try {
// console.log(a);
// } catch(err){

// console.log("caught an error.. a is not defined");
// console.log("err");
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");


// let cars = ["audi","bmw","maruti","Rollroyce"];


// let primary = ["red","yellow","blue"];
// let secondary = ["orange","violet","green"];
// primary.concat(secondary);

// let cars = ["maruti","suzuki","bmw","gwagon","rr"];


// misclanious 
// const sum = (a,b) => {
//     console.log(a+b);

// }

// const cube = n =>(
//     n * n * n
// )


// this



// practice questions
// let button = document.createElement("button");
// let input = document.createElement("input");
// bottom.innerText="click me";
// document.querySelector("body").append(input);
// document.querySelector("body").append(bottom);


// bottom.setAttribute("id","btn");
// input.setAttribute("body").append(bottom);



// async

// async function greet(){
//     // throw "404 page not found";
//     return "Hello";

// }

// greet()
//   .then((result) =>{
//     console.log("promise was resolved");
//     console.log("result was : ", result);
//   })
//   .catch((err) =>{
//   console.log("promise was rejected with err:",err);
  
//   });

//   let demo = async ()=>{
//     Ab.abc()
//     return 5;
//   }

// use of await function in async

// function getNum(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             let num = Math.floor(Math.random() * 10) +1;
//             console.log(num);
//             resolve();

//         },3000);

//     });
// }

// async function demo(){
//    await getNum();
//    await getNum();
//     getNum();
// }



// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed !");

//         },delay);
//     });
// }
// async function demo(){
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("green",1000);
//     await changeColor("blue",1000);
// }


// handling rejection with await
// h1 = document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             let num = Math.floor(Math.random() * 5) + 1;
//             if (num > 3){
//                 reject("promisse rejected");
//             }

//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed !");

//         },delay);
//     });
// }
// async function demo(){
//     try{
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("green",1000);
//     await changeColor("blue",1000);

// } catch (err){
//     console.log("error caught");
//     console.log(err);
// }
// }



// first url request
// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) =>{
//     // console.log(res);
//     return res.json();
// })
// // .catch((err) =>{
// //     console.log(error)
// // });
// .then((data) =>{
//     console.log("data1 =",data.fact);
//     return fetch(url);
// })
// .then((res) =>{
//     return res.json();
// })
// .then((data2) =>{
//     console.log("data2 =",data2.fact);
// })
// .catch((err) =>{
//     console.log("ERROR - ",err);
// })
// console.log("I am happy");


// use of await
// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch (e){
//         console.log("error - ", e);
//     }
//     console.log("bye");
// }


// axios
// let btn = document.querySelector("#catBtn");
// let btn2= document.querySelector("#dogBtn");
// let url = "https://catfact.ninja/fact";
// let url2="https://dog.ceo/api/breeds/image/random"
// catBtn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// dogBtn.addEventListener("click", async () => {
//     let imgUrl = await getImage();
//     if (imgUrl) {
//         let img = document.querySelector("#dogImage");
//         img.src = imgUrl;
//     }
// });
// async function getFacts(){
//     try {
//         let res= await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log("ERROR - ",e);
//         return "NO FACT FOUND";
//     }
// }

// async function getImage(){
//     try {
//         let res = await axios.get(url2);
//         return res.data.message; 
//     } catch (e) {
//         console.log("ERROR - ", e);
//         return null;
//     }
// }


// sending header with api request
// const url = "https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const config = {headers:{ Accept: "application/json"}};
//         let res= await axios.get(url,config);
//         console.log(res.data);
//     } catch(err){
//         console.log(err);
//     }
// }


