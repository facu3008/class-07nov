console.log("hola");
// console.log(movies);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray)

function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);

  // console.log("raw list:", rawList);
  const cleanListe = rawList.filter(
    (director, numero) => rawList.indexOf(director) === numero
  );
  // console.log(cleanListe);
  return cleanListe;
}
console.log("Iteracion 1: Todos los directores", getAllDirectors(movies));

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) {}
function howManyMovies1(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    movie.director === "Steven Spielberg" && movie.genre.includes("drama");
  });
  return dramaMovies;
}
console.table("MOvie drama:", howManyMovies1(movies));

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
  // console.log(contador);
  return contador;
}
console.log("Iteracion 2: Movies Drama", howManyMovies(movies));

// // Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {}

function scoresAverage(moviesArray) {
  let suma = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    suma += moviesArray[i].score / moviesArray.length;
  }
  suma = Number(suma.toFixed(2));
  return suma;
}
console.log("Iteracion 3: Score average", scoresAverage(movies));

// otra VERSION

function scoresAverageR(moviesArray) {
  const score = moviesArray.reduce((total, movie) => {
    return (total += movie.score);
  }, 0);

  scoreAvg = score / moviesArray.length;
  return scoreAvg;
}
console.log("Iteracion 3: Score average Version 2", scoresAverageR(movies));

// // Iteration 4: Drama movies - Get the average of Drama Movies

// VERSION 1:
function dramaMoviesScores(moviesArray) {
  const drama = moviesArray.filter((movieDrama) => {
    return movieDrama.genre.includes("Drama");
  });
  const scores = drama.map((movie) => movie.score);

  let total = 0;
  scores.forEach((scores) => (total += scores));
  return (total / drama.length).toFixed(2);
}
console.log("Iteration 4 Version 1", dramaMoviesScores(movies));

// VERSION 2:
function dramaMoviesScore(moviesArray) {
  let movieDrama = [];
  let isEmpty = true;
  // let toFixedAvg;
  moviesArray.forEach((element) => {
    if (element.genre.includes("Drama")) {
      movieDrama.push(element.score);
      isEmpty = false;
    }
  });
  if (!isEmpty) {
    // console.log("Movie drama ", movieDrama);
    movieDrama = movieDrama.reduce((a, b) => a + b) / movieDrama.length;
    // console.log("Movie Average ", avgMovieDrama);
    movieDrama = Number(movieDrama.toFixed(2));
    // console.log("Movie Average toFixed", toFixedAvg);
    // console.log(typeof toFixedAvg);
  }
  console.log(isEmpty);
  if (isEmpty) {
    movieDrama = 0;
    // console.log(toFixedAvg);
    // console.log(typeof toFixedAvg);
  }
  return movieDrama;
}
console.log("Iteracion 4: Movies Drama", dramaMoviesScore(movies));

// // VERSION 3:
// function dramaMoviesScore(moviesArray) {
//   const drama = moviesArray.filter((movieDrama) => {
//     return movieDrama.genre.includes("Drama");
//   });
//   drama = drama.reduce((total, movie) => {
//     return (total += movie.score);
//   }, 0);
//   console.log(drama);
// }

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // const copy = moviesArray.map((movie) => movie);

  const copy = [...moviesArray];

  copy.sort((a, b) => {
    if (a.year > b.year) return a.year - b.year;
    if (a.year < b.year) return a.year - b.year;
    else return a.title.localeCompare(b.title);
  });

  return copy;
}
console.table("Iteracion 5: ", orderByYear(movies));

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}
console.log("Iteracion 6: ", orderAlphabetically(movies));
// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {}

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}
