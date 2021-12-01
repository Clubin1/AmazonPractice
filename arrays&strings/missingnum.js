// takes array of integers
// is not sorted, ranges from 0 to n
function missingNum(nums){
    // sort nums
    nums = nums.sort();
    for(let i = 0; i < nums.length + 1; i++){
        i = i + 1;
        if(nums[i-1] != i){
            return i;
        }
    }
}

console.log(missingNum([1,2,3,5]))