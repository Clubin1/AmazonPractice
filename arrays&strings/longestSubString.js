function lengthOfLongestSubstring(s){

    let strLength = s.length;
    let output = 0;

    let map = {};

    let i = 0;
    for(let j = 0; j < strLength; j++){
        if(map.hasOwnProperty(s[j])){
            i = Math.max(map[s[j]], i);
        }
        output = Math.max(output, j - i + 1);
        map[s[j]] = j + 1;
    }
    return output;
}

console.log(lengthOfLongestSubstring("abcabcbb"))