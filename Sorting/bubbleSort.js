// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0; j<arr.length-1; j++){
//             //console.log(arr[i],arr[j])
//            // console.log(arr[j], arr[j+1])
//            if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//            }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([2, 53, 23, 1, -3]))


// optimize
function bubbleSort(arr){
    let isSwap
    for(let i=0;i<arr.length;i++){
        isSwap = false
        for(let j=0; j<arr.length-1; j++){
            //console.log(arr[i],arr[j])
           // console.log(arr[j], arr[j+1])
           if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            isSwap = true
           }
        }
        if(!isSwap){
            break;
        }
    }
    return arr
}

console.log(bubbleSort([2, 53, 23, 1, -3]))