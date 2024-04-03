// {
//     var a= 10;
//     let b =20
// }

// console.log(a)
// console.log(b) // This is becase b is in block scope. This means let and cosnt are store in a seprate memory space for this block . Whether for a it is in global space

/// Example of shadowing
var a = 100
{
 let b = 10
 var a = 90
 console.log(a)
}
console.log(a) 
// instead of priting 90 & 100 it prints 90 and 90 because when a is assinged to 90 the var doesnt created this in block scope it just replace the value of a in global scope because of this it prints 90 twice 

//In case of let & const 
let ac= 100
{

    let ac =10

}

console.log(ac) // 


// // Illegal Shadowing 
// let shadow= 20
// {
//     var shadow = 10
// }
// this will throw error becase we cant redelcare but for var we can do it 
var illegalShow = 100
{
    let illegalShow=10

}
 // we can do this 


 // Since var is function scoped, It is not a prblem for below code 

 let fn= 20
 function x(){
    var fn =10
    console.log(`Var is function scope ${fn}`)
 }
 x()