//update the value
// let studentname=["shri","datta","ram"]
// let num=[2,3,4,5,6,7]
// console.log(num)
// num[1]=30
// console.log(num)


//loops in array
//for loop for array
// let studentname=["shri","datta","ram"]
// for (i=0;i<studentname.length;i++){
//     console.log(studentname[i])
// }
// marks=[10,20,30,40,50]
// for (i=0;i<marks.length;i++){
//     console.log(marks[i])
// }


//loops in array
// marks=[10,20,30,40,50]
// for(let i of marks){
//     console.log(i)
// }

// let studentname=["shri","datta","ram"]

// for (let i of studentname){
//     console.log(i.toUpperCase())
// }




//Q here they give a arrayerage  find avg from given arraay

// marks=[85,97,44,37,76,60]
// let sum=0
// let averagelen=marks.length
// for (let i of marks){
//     sum=sum+i
// }
// console.log(averagelen)
// console.log(sum)
// console.log(`average of array is ${sum/averagelen}`)

// for given array with prices of 5 items [250,645,300,900,50]
//al items have an offer of 10% OFF on them .change the 
//array to store final price after applying offer

// let items=[250,645,300,900,50]
// for (let i of items){
//     ten=(i-(i/10))
//     console.log(ten)
// }




// let Fooditems=["potato","tomato","apple","lichi"]
// Fooditems.push("chips")
// console.log(Fooditems)
// Fooditems.pop()
// console.log(Fooditems)





// let Fooditems=["potato","tomato","apple","lichi"]
// console.log(Fooditems)
// console.log(Fooditems.toString())

//add element and delete 
// let num=[1,2,3,4,5]
// num.splice(2,2,22,33);
 
// lets practice question

// create an array to store comapies
//A. remove first company from array
//B. Remove Uber & Add Olain its Place
//c Add Amezone at the end


let companies=["Blooberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log(companies)
companies.shift()
console.log(companies)

companies.splice(1,1,"OLA")
console.log(companies)

 companies.push("Amezone")
console.log(companies)
