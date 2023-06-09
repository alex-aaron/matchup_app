const movies = [
    "Happiness", 
    "Fisher King", 
    "My Cousin Vinny", 
    "Fear and Loathing in Las Vegas", 
    "The Usual Suspects", 
    "Breaking the Waves", 
    "Lone Star", 
    "Buffalo 66", 
    "Reservoir Dogs", 
    "You've Got Mail", 
    "The American President", 
    "Terminator 2: Judgment Day", 
    "Gremlins 2: The New Batch", 
    "Home Alone", 
    "Jackie Brown", 
    "Living in Oblivion", 
    "Sleepy Hollow", 
    "Dark City", 
    "Shallow Grave", 
    "Home Alone"
  ];

  let results = movies.reduce((acc, current) => {
    acc[current] = { wins: 0, losses: 0, opponents: [] };
    return acc;
  }, {});