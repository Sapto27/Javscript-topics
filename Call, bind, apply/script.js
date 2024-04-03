const userDetails ={
    name: "Saptarshi",
    Age:27,
    printName: function (){
        console.log(this.name)

    }
}
// userDetails.printName()

const userDetails2={
    name: "Mukherjee",
    age:29
} 
// userDetails.printName.call(userDetails2)

// Also if printNmae is in global scope 

const printName = function(){
    console.log(this.name)
}

printName.call(userDetails)
printName.call(userDetails2)


// Apply method -------------------------------------------------------------------------------------------

let printAge= {
    Age:25
}

const printD= function(details){
    console.log(`${this.Age} ${details} `)
}

printD.apply(printAge,["Thats to much"])

//Bind Method----------------------------------------------------------------------

let user = {
    fullName:"Sunil chetri"
}

let sayHi = function (){
    console.log(this.fullName)
}

const bindFunc = sayHi.bind(user)
bindFunc()



const customer = {
    designation:"SE",
    country:"India"
}


/// This is a currying function

const getUserInfo = (obj)=>{


    return (custInfo)=>{
        return obj[custInfo]

    }

}

const sub = getUserInfo(customer)
// console.log(sub("designation"))

function add (a){

    return function (b){
        return a+b
    }
}

const add5 = add(5)
// console.log(add5(3))


//Example of indefinite Currying 

  

  function sum(a) {
    return function(b){
      if(!b){
          return a;
      }
      return sum(a+b);
    }
  }
  console.log(sum(10)(20)(30)(40));