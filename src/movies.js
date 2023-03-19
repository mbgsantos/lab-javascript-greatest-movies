// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramasBySpielberg = moviesArray.filter(movie => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return dramasBySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const totalScore = moviesArray.reduce((acc, curr) => {
    return acc + (curr.score || 0);
  }, 0);

  const averageScore = totalScore / moviesArray.length;

  const avgAverage = Math.round(averageScore * 100) / 100;

  return avgAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaFiltered = moviesArray.filter(movie => {
    return movie.genre.includes('Drama');
  });

  if (dramaFiltered.length === 0) {
    return 0;
  }

  const dramaRate = dramaFiltered.map(movie => movie.score);

  const averageRate =
    dramaRate.reduce((acc, curr) => acc + curr) / dramaFiltered.length;

  return averageRate;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedMovies = [...moviesArray];

  orderedMovies.sort((movie1, movie2) => {
    if (movie1.year < movie2.year) {
      return -1;
    } else if (movie1.year > movie2.year) {
      return 1;
    } else {
      if (movie1.title < movie2.title) {
        return -1;
      } else if (movie1.title > movie2.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titleOfMovies = [];

  for (let movie of moviesArray) {
    titleOfMovies.push(movie.title);
  }

  titleOfMovies.sort();

  return titleOfMovies.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
