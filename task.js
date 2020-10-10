let pyramidRight = (rows) => {
  
   for(let i = 1; i <= rows; i++){
     let str = '';
     
     //Add the white space to the left
     for(let k = 1; k <= rows - i; k++){
       str += ' ';
     }
     
     //Add the '*' for each row
     for(let j = 1; j <= i; j++){
       str += '*';
     }
     
     //Print the pyramid pattern for each row
     console.log(str);
   }
}
pyramidRight(8);