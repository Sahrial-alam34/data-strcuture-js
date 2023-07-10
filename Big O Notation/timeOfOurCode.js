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

function multipleArray(n){
    for (let i=0;i<=n;i++){
        for(let j=0;j<=n ;j++){
            console.log(i,j);
        }
    }
}

// n+n = O(n2)
multipleArray(5)