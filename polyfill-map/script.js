console.log("hi")

//Polyfill for map
Array.prototype.myMap= function (cb){
    let temp = []
    for (let i =0;i<this.length; i++){

        temp.push(cb(this[i],i,this))
    }
    return temp
}


const myTeam = [{
    name:"Sunil",
    Pos:"Striker"
},{
    name:"Anwar",
    pos:"CB"
},{
    name:"Sahal",
    pos:"Mid"
}]

const playerName = myTeam.myMap((item)=>item?.name)
console.log(playerName)


//Polyfill for filter 
Array.prototype.myFilter = function(cb){
    let temp =[]
    for (let i=0;i<this.length;i++){
        if(cb(this[i],i,this))

           temp.push(this[i])
        
    }
    return temp
}




const myFtTeam= [{
    name:"Sunil",
    Pos:"Striker",
    isForeigner:false
},{
    name:"Anwar",
    pos:"CB",
    isForeigner:false

},{
    name:"Sahal",
    pos:"Mid",
    isForeigner:false
},{
    name:"Hector Yuste",
    pos:"Def",
    isForeigner:true
},{
    name:"Hugo Boumous",
    pos:"Mid",
    isForeigner:true
}]


const foreignMembers = myFtTeam.myFilter(item => item?.isForeigner)

console.log(foreignMembers)

//Polyfill for reduce


Array.prototype.myReduce = function(cb,initValues){

    let acc = initValues ? initValues : this[0]
    let startIndex = initValues ? 0 : 1;
    for (let i =startIndex;i<this.length;i++){
        acc= cb(acc,this[i],i,this) 
    }

    return acc

}

const arr = [1, 2, 3, 4, 5];
const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); 




const array = [1,1,0,1,0,0,0,1,1,1,0,0,1]
let arrayWihZero =[]
let arrayWihOne = []

for(let i =0;i<array.length;i++){
    if(array[i]=== 0){
        arrayWihZero.push(array[i])
    }
    else if (array[i]=== 1){
        arrayWihOne.push(array[i])

        
    }
}

const result = arrayWihZero.concat(arrayWihOne)

console.log(result)