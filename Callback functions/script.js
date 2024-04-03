setTimeout(()=>{
    console.log("timer")
},4000)

const x = (y)=>{
    console.log("x")
    y()
}

x(()=>{
    console.log("y")
})

// so bascially the function which logs  y is a callback function here


function add(a){
    return function (b){
        if(b){
            return add(a+b)
        }
        else 
        return a
    }
}

console.log(add(4)(5)(7)())

function sum (a){
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}

console.log(sum(1)(2)(3))