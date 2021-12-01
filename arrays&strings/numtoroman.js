function numToRoman(num) {
    // Greedy Solution, it makes best decision it can at the time
    let symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let output = "";


    for(let i = 0; i < values.length && num!= 0; i++){
   
        while(values[i] <= num){
            num -= values[i];
            output += symbols[i]
        }
    }
    return output;
}

console.log(numToRoman(10))