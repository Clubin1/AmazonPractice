function stringCompressionArr(stringArr){
    // input ['a','b','b','b']
    // output ['a', 1, 'b', 3]
    // summary: loop through char array, return occurences of char
    // map = new Map
    // for i; i < stringArr.length; i++
    //      if map.hasProperty(currchar)
    //          map[currchar]++
    //      map[currchar] = 1
    //
    // for i; i < stringArr.length; i++
    //      stringArr = Set(stringArr)
    //      currChar = s[i]
    //      map[currChar]
    //      output = ['currChar, map[currChar']
    // if output < stringArr.length return stringArr
    // return output

    let map = new Map();
    let output = [];

    for(let i = 0; i < stringArr.length; i++){
        if(map.hasOwnProperty(stringArr[i])){
            map[stringArr[i]]++;
        } else {
            map[stringArr[i]] = 1;
        }
    }
    stringArr = [...new Set(stringArr)];
    for(let i = 0; i < stringArr.length; i++){
        let currChar = stringArr[i];
        let currValue = map[stringArr[i]];
        output.push(currChar);
        output.push(JSON.stringify(currValue));
    }   
    return output; 
}

console.log(stringCompressionArr(["a",'a','b','b', 'c', 'c', 'c', 'c', 'c', 'c'])) // should return ['a', '2', 'b', '2']