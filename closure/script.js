// function x(){
//     var a =7;
//     function y(){
//         console.log(a)
//     }
//     return y
// }
// var z =  x()
// console.log(z)

// function outer(){
//     var val = 900
//     function inner(){
//         var num = 10
//         function inner2(){
//             console.log(val,num)
//         }
//         inner2()
//     }
//     inner()
// }
// outer()


/// Set Timeout & Closure

// function Timeout (){
//     var i= 1 
//     setTimeout(()=>{
//         console.log(i)
//     },4000)
//     console.log("Welcome to life of javascript")
// }
// Timeout()

// problem1
// function prb1(){
//     for(var i =1;i<=5;i++)
//     {
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }

// }
// prb1()

// to solve this problem we can use let 
// if if interviewer wants to use it using var then 

// function prb2(){
//     for(var i=1;i<=5;i++){
//         function revive(a){
//             setTimeout(()=>{
//                 console.log(a)
//             },a*1000)
//         }
//         revive(i)

//     }

// }
// prb2()

// function counter(){
//     let count = 0
//     function incremnetCounter(){
//         count ++
//         return count
//     }
//     return incremnetCounter;
// }


// const myCounter = counter()
// console.log(myCounter())

// console.log(`1st time ${myCounter()}`)
// console.log(`2nd time ${myCounter()}`)



function executeAfterDelay(callback, delay) {
    // This function returns a new function which is the closure
     function a() {
        // Inside this closure, the original callback function is executed after the specified delay
        setTimeout(callback, delay);
    };
    a()
}

// Example usage:

// Define a callback function
function myCallback() {
    console.log('Callback executed after delay!');
}

// Create a new function that will execute the callback after 2000 milliseconds (2 seconds)
 executeAfterDelay(myCallback, 2000);




