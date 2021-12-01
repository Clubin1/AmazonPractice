// Given two strings, determine if one is a permutation of another
function isPermutation(s1,s2){
    // sort, check for case sensitivity and for white space
    if(s1.length != s2.length){return false;}
    // assuming they are the same size, iterate through a string, push vals to array
    let strArr = [] 
    let strArr2 = []
    for(let i = 0; i < s1.length; i++){
        strArr.push(s1[i]);
        strArr2.push(s2[i]);
    }
    let bool = JSON.stringify(strArr2.sort()) === JSON.stringify(strArr.sort())
    return strArr;
}

console.log(isPermutation("Dog", "god"))