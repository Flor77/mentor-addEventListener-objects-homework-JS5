const movieObject = {
    adult: false,
    backdrop_path: "/jBFxXKCrViA88hhO59fDx0Av4P.jpg",
    belongs_to_collection: {
      id: 10,
      name: "Star Wars Collection",
      poster_path: "/bYbHqvRANCpuRTs0RAu10LhmVKU.jpg",
      backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
    },
    budget: 11000000,
    genres: [
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 28,
        name: "Action"
      },
      {
        id: 878,
        name: "Science Fiction"
      }
    ],
    homepage: "http://www.starwars.com/films/star-wars-episode-iv-a-new-hope",
    id: 11,
    imdb_id: "tt0076759",
    original_language: "en",
    original_title: "Star Wars",
    overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    popularity: 109.854,
    poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    production_companies: [
      {
        id: 1,
        logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
        name: "Lucasfilm Ltd.",
        origin_country: "US"
      },
      {
        id: 25,
        logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
        name: "20th Century Fox",
        origin_country: "US"
      }
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America"
      }
    ],
    release_date: "1977-05-25",
    revenue: 775398007,
    runtime: 121,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English"
      }
    ],
    status: "Released",
    tagline: "A long time ago in a galaxy far, far away...",
    title: "Star Wars",
    video: false,
    vote_average: 8.2,
    vote_count: 17382
  }
  


// submit.addEventListener('click', () => {
//     console.log(input.value)
//     movieObject.movieDirector = input.value;
//     // console.log(movieObject);
// })

// //1) Change the budget of the movie to be 0 to verify 
// console.log(movieObject.budget) //before it was 11000000
movieObject.budget = 0;

// 2) Add new property `mustSee` with value true again to test it use console.log()
movieObject.mustSee = 'true'

/*3) Add a new method to that object `getGenres` that will return array with 
only the names of the genres should display ['Adventure', 'Action', 'Science Fiction']
****TIP use this keyword remember the right way you can use `this` in a method*/
movieObject.getGenres = function() {
return (this.genres).map((item) => item.name)
}

// 4) Create a new variable that holds the production_companies
let productionCompanies = movieObject.production_companies;

/*5) Create a input in html that will represent a name, and a button. The input value 
will be added into the existing object as a property called `movieDirector` when the Submit button will be clicked.*/
let nameDirector = movieObject.movieDirector
let submit = document.querySelector('button');
let input = document.querySelector('input');

submit.addEventListener('click', () => {
  movieObject.movieDirector = input.value;
})