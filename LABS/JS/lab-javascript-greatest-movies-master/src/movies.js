console.log("hola");
// console.log(movies);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray)

function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);

  console.log("raw list:", rawList);
  const cleanListe = rawList.filter(
    (director, numero) => rawList.indexOf(director) === numero
  );
  console.log(cleanListe);
  return cleanListe;
}
// console.log(getAllDirectors());

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) {}
function howManyMovies(moviesArray) {
  let contador = 0;
  moviesArray.forEach((element) => {
    if (
      element.director == "Steven Spielberg" &&
      element.genre.includes("Drama")
    ) {
      contador = contador + 1;
    }
  });
  console.log(contador);
  return contador;
}

// // Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {}

function scoresAverage(moviesArray) {
  let suma = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    suma += moviesArray[i].score / moviesArray.length;
  }
  return suma;
}
console.log(scoresAverage(moviesArray));

//   let totalMovies = moviesArray.length;

//   for (let i = 0; i < moviesArray.length; i++) {
//     onlyScore.push(moviesArray[i].score);
//   }
//   console.log(`Array de score:`, onlyScore);
//   const totalScore = onlyScore.reduce((a, b) => a + b);
//   console.log("Total :", totalScore);
//   console.log(totalScore / totalMovies);

//   let allScores = [];
//   let sumScores = 0;
//   for (let i = 0; i < moviesArray.length; i++) {
//     allScores.push(moviesArray[i].score);

//   const reduced = allScores.reduce((total, current) => total + current);
//   console.log("Total Score: ", reduced);
//   console.table(allScores);
//   //   moviesArray.forEach((element) => {
//     element.score = contador + 1;
//     console.log(contador);
//   });

// // Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore(moviesArray) {}

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// function orderByYear(moviesArray) {}

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) {}

// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {}

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}
