// lets assume we have an api which returns some array of objects as a response . 

let counter = 0

const getData=()=>{
    console.log("Search....", counter++)
    // getTriggerData() Debounce functionality case 2
}

// So in this case if it was an network call then the api will hit the server with every key pressing which is not a optimized way.The optimize way is to provide some delay between the network calls 

// const getDebounced = (fn, d) =>{
//     let timer

//     return function (...args){

//         let context = this ;
//         clearTimeout(timer)
//        timer =  setTimeout(()=>{

//             fn.apply(context,args)

//         },d)
//     }
// }

function getDebounced(fn,delay){
    let timer

    return function(...args){
const context = this
clearTimeout(timer)
      timer=  setTimeout(()=>{
            fn.apply(args,context)
        },delay)

    }

}


const getTriggerData = getDebounced(getData,300)


