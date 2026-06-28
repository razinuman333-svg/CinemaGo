import logo from './CinemaGo_logo.png'



const assets={
    logo,
}
export const dummyCastsData = [
  {
    name: "Tom Holland",
    profile_path: "https://image.tmdb.org/t/p/original/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
  },
  {
    name: "Zendaya",
    profile_path: "https://image.tmdb.org/t/p/original/tylFh0KAmRjO0yK6QxJ6qQj8M7B.jpg",
  },
  {
    name: "Robert Downey Jr.",
    profile_path: "https://image.tmdb.org/t/p/original/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
  },
  {
    name: "Scarlett Johansson",
    profile_path: "https://image.tmdb.org/t/p/original/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
  },
  {
    name: "Chris Hemsworth",
    profile_path: "https://image.tmdb.org/t/p/original/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg",
  },
];

export const dummyShowsData = [
  {
    _id: "1",
    id: 1,
    title: "The Batman",
    overview:
      "Batman uncovers corruption in Gotham City while pursuing the Riddler.",
    poster_path:
      "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 80, name: "Crime" },
      { id: 9648, name: "Mystery" },
    ],
    casts: dummyCastsData,
    release_date: "2022-03-04",
    original_language: "en",
    tagline: "Unmask the truth.",
    vote_average: 7.8,
    runtime: 176,
  },
  {
    _id: "2",
    id: 2,
    title: "Dune: Part Two",
    overview:
      "Paul Atreides unites with the Fremen to seek revenge against those who destroyed his family.",
    poster_path:
      "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    genres: [
      { id: 878, name: "Sci-Fi" },
      { id: 12, name: "Adventure" },
    ],
    casts: dummyCastsData,
    release_date: "2024-03-01",
    original_language: "en",
    tagline: "Long live the fighters.",
    vote_average: 8.5,
    runtime: 166,
  },
  {
    _id: "3",
    id: 3,
    title: "Spider-Man: No Way Home",
    overview:
      "Spider-Man seeks Doctor Strange's help after his identity is revealed.",
    poster_path:
      "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 878, name: "Sci-Fi" },
    ],
    casts: dummyCastsData,
    release_date: "2021-12-17",
    original_language: "en",
    tagline: "The Multiverse Unleashed.",
    vote_average: 8.2,
    runtime: 148,
  },
];

export default assets;