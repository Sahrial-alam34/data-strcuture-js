// character count

function charCount(str){
    let charlist = {}

    for(let i =0; i< str.length; i++){
        let char = str[i].toLowerCase()
       // console.log(char)

       if(charlist[char] > 0){
        charlist[char]++

       }
       else{
        charlist[char] = 1
       }
    }
    return charlist;
}

console.log(charCount("hello Everyone"))