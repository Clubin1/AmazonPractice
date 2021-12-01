function isUnique(s){
   /*
    returns true if string contains all unique characters
    input: parameter s
    output: true or false

    brute force approach: iterate through with two pointers
    check current char and next char, if a match is met, stop loop and return false
    if loop done without stopping, return true

    O(n) time complexity and O(n) space complexity

    let map = new map
    for let i = 0; i < s1.length; i++ {
        if map.hasOwnProperty(s[i]) {
            map[s[i]] = true
            return false
        } else {
            map[s[i]] = false
        }
    }
    return true
   */  
    let map = new Map();
    for(let i = 0; i< s.length; i++){ 
        if(map.hasOwnProperty(s[i])) {
            map[s[i]] = true;
            return false;
        } else {
            map[s[i]] = false;
        }
    }
    return true;
}

function checkPermutation(s1, s2){
    /*
    Summary: check if two strings are permutations of each other, assuming that both strings contain 
    a-z, case sensitivity matters
    input: takes two strings
    output: returns if both strings are a permutation of each other

    optimal solution: O(n) time and space complexity
    check if lengths match, then proceed on the algorithim
    create two arrays and push matching strings to each array
    sort arrays, stringify them then compare, if equal return true, else return false

    if s1.length != s2.length
        return false
    
    let arr1 = []
    let arr2 = []
    for let i = 0; i < s2.length; i++ 
        arr1.push(s1[i])
        arr2.push(s2[i])

    let bool = stringify(str1.sort()) === stringify(str2.sort())
    return bool 
    */ 

    if(s1.length != s2.length) return false;

    let charArr1 = [];
    let charArr2 = [];
    for(let i = 0; i < s1.length; i++) {
        charArr1.push(s1[i]);
        charArr2.push(s2[i]);
    }
    let bool = JSON.stringify(charArr1.sort()) === JSON.stringify(charArr2.sort());
    return bool;
}

function stringCompression(s){
    /*
    Summary: return new array of each unique character and its num of occurences
    input: array of characters
    output array of character and its num

    optimal solution: O(n) time and space complexity

    let map = new Map()
    output = []
    for(let i = 0; i < s1.length; i++)
        if map.hasOwnProperty(s[i]){
            map[s[i]]++
        } else {
            map[s[]] = 1
        }
    s1 = [...new Set(s1)]
    for(let i = 0; s1.length; i++)
        let currChar = s[i]
        let currNum = map[s[i]]
        output.push(currChar)
        output.push(JSON.stringify(currNum))
    return output
    */
   let map = new Map();
   let output = [];

   for(let i = 0; i < s.length; i++) {
       if(map.hasOwnProperty(s[i])){
           map[s[i]]++;
       } else {
           map[s[i]] = 1;
       }
   }

   s = [...new Set(s)];
   for(let i = 0; i < s.length; i++) {
       let currChar = s[i];
       let currNum = map[s[i]];

       output.push(currChar);
       output.push(JSON.stringify(currNum))
   }
   return output;
}
console.log(stringCompression('aaabbbcccd'));
