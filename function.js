// function add(a,b){
//     console.log(a+b)
// }
// add(2,3)

// function sum(a,b){
//     return a+b;
// }
// //arrow functions
// const arrowsum=(a,b)=>{
//     console.log(a+b)
// };

// const arrowmulti=(a,b)=>{
//     console.log(a*b)
// }


function countviowls(str){
    let count=0
    for(const char of str){
       if (char ==="a" || char ==="e" ||char ==="i" ||char ==="o" ||char ==="u"){
        count++;
       }     

    }
    console.log(count)
}


// const  countarrow=str=>{
//     let count=0
//     for(const char of str){
//        if (char ==="a" || char ==="e" ||char ==="i" ||char ==="o" ||char ==="u"){
//         count++;
//        }     

//     }
//     console.log(count)
// }

function onebyone(str){
    let count=0
    for (let i of str){
        if (i==="a"|| i==="b"){
            count=count+1;
        }
    }
    console.log(count)
}
onebyone("anilandar")






