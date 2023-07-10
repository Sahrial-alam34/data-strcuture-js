function logarithmsN(n){
    while(n > 1){
        console.log(n)
        n /=2
    }

    console.log("Done")
}
logarithmsN(8)


//another (recursive)
function anotherLogN(n){
    if(n <=1){
        console.log("Done")
    }
    console.log(n)
    anotherLogN(n/2)
}
anotherLogN(8) //log2(n) is better