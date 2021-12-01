// Write an algorithim that checks if a string has all unique chars
function isUnique(s){
    // time complexity is O(N), hashmap lookup doesn't add time
    // space complexity is ? 
    // s = string to check
    // for loop through s and add to hash map
    // save each character as key, save count of char as value
    // if current letter is in map, we increment the keys value
    // loop up hashmap to find key with value 1, return that key
    let hashmap = new Map();

    for(let i = 0; i < s.length; i++) {
        if(hashmap.hasOwnProperty(s[i])){
            hashmap[s[i]] = true;
            return false;
        }
        hashmap[s[i]] = false;
    }
    return true;
}

console.log(isUnique("asddd"));