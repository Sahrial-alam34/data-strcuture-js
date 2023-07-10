// function sumOfAll(n){
//     let total  = 0;
//     for (let i = 0;i<=n ;i++){
//         total +=i
//     }
//     return total

// }
// complexity O(n)



// function sumOfAll(n){
//     return n * (n+1)/2
// }
//complexity O(1)



// console.log(sumOfAll(10))

// function multipleArray(n){
//     for (let i=0;i<=n;i++){
//         for(let j=0;j<=n ;j++){
//             console.log(i,j);
//         }
//     }
// }

// // n+n = O(n2)
// multipleArray(5)



function min5Log(n){
    for(let i =0 ;i<= Math.max(5,n);i++){
        console.log(i);
    }
}
min5Log(100) // O(n)


function max5Log(n){
    for(let i =0 ;i<= Math.min(5, n);i++){
        console.log(i)
    }
}
max5Log(2)  // O(1)


// time complexity
// O(1), O(log n) = amazing
// O(n) = fair
// O(n log n) = bad
// O(n2) = terrible
// O(2n) = terrible
// O(n!) = terrible


//space complexity
function sum(arr){
    let total = 0;
    for(let i =0; i< arr.length; i++){
        total =+ arr[i]
    }
    return total;
}
console.log(sum([23, 4, 6])) //O(1) karon result one number 

function double(arr){
    let newArr = []
    for(let i =0; i<arr.length; i++){

        newArr.push(arr[i]*2)
    }
    return newArr;

}
console.log(double([3, 4, 5])) // O(n) it return n number of array
