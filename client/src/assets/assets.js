import logo from './CinemaGo_logo.png'
import screen from './screen.png'
import profile from './profile.png'



const assets={
    logo,
    screen,
    profile
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
   {
    name: "Tom Holland",
    profile_path: "https://image.tmdb.org/t/p/original/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
  },
   {
    name: "Tom Holland",
    profile_path: "https://image.tmdb.org/t/p/original/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
  },
   {
    name: "Tom Holland",
    profile_path: "https://image.tmdb.org/t/p/original/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
  },
   {
    name: "Tom Holland",
    profile_path: "https://image.tmdb.org/t/p/original/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
  },
   {
    name: "Tom Holland",
    profile_path: "https://image.tmdb.org/t/p/original/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
  },
];

export const dummyTrailers = [
  {
    image: "https://img.youtube.com/vi/YoHD9XEInc0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    image: "https://img.youtube.com/vi/EXeTwQWrcwY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    image: "https://img.youtube.com/vi/zSWdZVtXT7E/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    image: "https://img.youtube.com/vi/TcMBFSGVi1c/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
  },
  {
    image: "https://img.youtube.com/vi/vKQi3bBA1y8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
  },
  {
    image: "https://img.youtube.com/vi/8hP9D6kZseM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=8hP9D6kZseM",
  },
  {
    image: "https://img.youtube.com/vi/JfVOs4VSpmA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
  },
  {
    image: "https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
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
];


export const dummyDateTimeData = {
  "2025-07-24": [
    { time: "2025-07-24T01:00:00.000Z", showId: "68395b407f6329be2bb45bd1" },
    { time: "2025-07-24T03:00:00.000Z", showId: "68395b407f6329be2bb45bd2" },
    { time: "2025-07-24T05:00:00.000Z", showId: "68395b407f6329be2bb45bd3" },
  ],

  "2025-07-25": [
    { time: "2025-07-25T01:00:00.000Z", showId: "68395b407f6329be2bb45bd4" },
    { time: "2025-07-25T03:00:00.000Z", showId: "68395b407f6329be2bb45bd5" },
    { time: "2025-07-25T05:00:00.000Z", showId: "68395b407f6329be2bb45bd6" },
  ],

  "2025-07-26": [
    { time: "2025-07-26T01:00:00.000Z", showId: "68395b407f6329be2bb45bd7" },
    { time: "2025-07-26T03:00:00.000Z", showId: "68395b407f6329be2bb45bd8" },
    { time: "2025-07-26T05:00:00.000Z", showId: "68395b407f6329be2bb45bd9" },
  ],

  "2025-07-27": [
    { time: "2025-07-27T01:00:00.000Z", showId: "68395b407f6329be2bb45bda" },
    { time: "2025-07-27T03:00:00.000Z", showId: "68395b407f6329be2bb45bdb" },
    { time: "2025-07-27T05:00:00.000Z", showId: "68395b407f6329be2bb45bdc" },
  ],

  "2025-07-28": [
    { time: "2025-07-28T01:00:00.000Z", showId: "68395b407f6329be2bb45bdd" },
    { time: "2025-07-28T03:00:00.000Z", showId: "68395b407f6329be2bb45bde" },
    { time: "2025-07-28T05:00:00.000Z", showId: "68395b407f6329be2bb45bdf" },
  ],
};
export const dummyBookingData = [
  {
    "_id": "68396334fb83252d82e17295",
    "user": { "name": "GreatStack" },
    "show": {
      "_id": "68352363e96d99513e4221a4",
      "movie": dummyShowsData[0],
      "showDateTime": "2025-06-30T02:30:00.000Z",
      "showPrice": 59
    },
    "amount": 98,
    "bookedSeats": ["D1", "D2"],
    "isPaid": false
  },
  {
    "_id": "68396334fb83252d82e17295", 
    "user": { "name": "GreatStack" },
    "show": {
      "_id": "68352363e96d99513e4221a4",
      "movie": dummyShowsData[0],
      "showDateTime": "2025-06-30T02:30:00.000Z",
      "showPrice": 59
    },
    "amount": 49,
    "bookedSeats": ["A1"],
    "isPaid": true
  },
  {
    "_id": "68396334fb83252d82e17295",
    "user": { "name": "GreatStack" },
    "show": {
      "_id": "68352363e96d99513e4221a4",
      "movie": dummyShowsData[0],
      "showDateTime": "2025-06-30T02:30:00.000Z",
      "showPrice": 59
    },
    "amount": 147,
    "bookedSeats": ["A1", "A2", "A3"],
    "isPaid": true
  }
];

export default assets;