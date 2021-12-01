function firstUniqChar(s){
    // // return non repeating char index, if no return -1
    // // if string empty, return -1
    // if(s.length === 0) return -1
    // // loop through arr and compare index of occurences of current letter
    // for(let i = 0; i < s.length; i++){
    //     let letter = s[i]
    //     if(s.indexOf(letter) === s.lastIndexOf(letter)) return i
    // }
    // // return -1 as default
    // return -1
    //
   if(s.length === 0) return -1;
   for(let i = 0; i < s.length; i++){
       if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
           return i;
       }
   }
}

console.log(firstUniqChar('aaaasssdddf'))