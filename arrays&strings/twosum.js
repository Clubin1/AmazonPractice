function twoSum(nums, target){

    // Store values in map for O(1) lookup times
   let map = new Map();
   for(let i = 0; i < nums.length; i++){
       difference = target - nums[i];
       if(map.hasOwnProperty(difference)){
            return [map[difference], i]
       }
       map[nums[i]] = i;
   }
}

console.log(twoSum([2,7,1,15,19], 8))