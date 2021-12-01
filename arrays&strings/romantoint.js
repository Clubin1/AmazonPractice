function romanToInt(s) {
    let romanMap = {
        "I" :1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }   
    let count = 0;
    s = s.toUpperCase();
    
    for(let i = 0; i < s.length;i++){
        if(romanMap[s[i]] < romanMap[s[i+1]]){
            count -= romanMap[s[i]];
        } else {
            count += romanMap[s[i]];
        }
    }
    return count;
}

console.log(romanToInt("iv"))
