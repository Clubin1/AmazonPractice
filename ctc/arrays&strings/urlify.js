function urlify(string, truelen){
    // replace all spaces in string with %20
   let output = '';
   let chars = 0;

   for(let i = 0; i < string.length; i++){
       if(string[i] !== " "){
           chars = chars + 1;
       }
       console.log(chars)
   }
   return 123;
}

urlify("Mr John      smith", 13);