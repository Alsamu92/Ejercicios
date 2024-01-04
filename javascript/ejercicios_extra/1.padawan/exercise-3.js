const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 96 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const pequenas = [];
const medianas = [];
const grandes = [];

movies.forEach((movie) => {
  movie.durationInMinutes > 200
    ? grandes.push(movie)
    : movie.durationInMinutes < 100
    ? pequenas.push(movie)
    : medianas.push(movie);
});

console.log(grandes);
console.log(medianas);
console.log(pequenas);
