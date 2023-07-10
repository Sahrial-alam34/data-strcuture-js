// function uniqueName(arr){
//     let uniqueName = []
//     for(let i=0; i<arr.length; i++){ // time n2
//         let ele = arr[i]; // s
//         if(!uniqueName.includes(ele)){
//             uniqueName.push(ele);
//         }
//     }
//     return uniqueName //space n
// }

// time complexity ==n2
//space complexity == n
// let nameArray = ["rafi","tasif","sunny","rafi" ]
// console.log(uniqueName(nameArray))


// const myObject = {
//     name: "abc",
//     class: "first year",
//     result:[3 , 4 , 2 , 6]
// }

// console.log(Object.keys(myObject)) // O(n)
// console.log(Object.values(myObject)) // O(n)
// console.log(Object.entries(myObject)) // O(n)

// console.log(myObject.hasOwnProperty("class")) // true  class, er modda ase O(1)


let myArray = ['hello', 'gallo','bello']
//                0        1          2     O(1)

//but if you change first element then change all
let myArray2 = ['pello','hello', 'gallo','bello']
//used unshift for added in first area then O(n) 
//used shift for remote in first area then O(n) 


//Big O of Array
// insertion = depends
// removal = depends
// searching = O(n)
//access = O(1)