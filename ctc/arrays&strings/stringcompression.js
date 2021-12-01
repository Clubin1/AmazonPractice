function stringCompression(s){
    // create hash map
    // loop through string and add each char as a key, count of each occurence as value
    // preform lookup, for each char return key value and format to output string
    let finalString = "";
    let map = new Map(); 

    for(let i = 0; i < s.length; i++){
        if(map.hasOwnProperty(s[i])){
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    for(let i = 0; i < s.length; i++){
        // remove duplicates so we get clean array
        s = [...new Set(s)]
        let currChar = s[i];
        let currCount = map[s[i]]; 
        finalString += `${currChar}${currCount}`;
    }

    if(finalString.length < s.length) return s;
    return finalString;
}

console.log(stringCompression('assbvvsscv'))