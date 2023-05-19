function generateRandomOpponent(array, movie){
    let i = Math.floor(Math.random() * array.length);
    let opp = array[i];
  
    if (opp === movie){
      return generateRandomOpponent(array, movie);
    } else {
      return opp;
    }
}