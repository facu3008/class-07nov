const moviesArray = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 9.3,
  },
];

function scoresAverage(moviesArray) {
  let onlyScore = [];
  let suma = 0;
  let totalMovies = moviesArray.length;

  for (let i = 0; i < moviesArray.length; i++) {
    // onlyScore.push(moviesArray[i].score);
    suma += moviesArray[i].score / totalMovies;
  }

  return suma;
}
console.log(scoresAverage(moviesArray));
