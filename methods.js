//reduce method
let arr=[2,3,4,5,6];
let output=arr.reduce((prev,cur) =>{
    return prev < cur ? prev : cur;
}
)
console.log(output)


