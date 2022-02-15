//Base Url
const baseUrl = "https://api.rawg.io/api/";

//Time

const dateCurrentFormat = new Date();
const dateLastYearFormat = new Date();
const dateNextYearFormat = new Date();

// dateFormat.setDate(dateFormat.getDate() + 1); //ads a day
// dateFormat.setMonth(dateFormat.getMonth() + 1); //adds a month
dateLastYearFormat.setFullYear(dateCurrentFormat.getFullYear() - 1); //adds a year
dateNextYearFormat.setFullYear(dateCurrentFormat.getFullYear() + 1); //adds a year

const isoDateString = dateCurrentFormat.toISOString().split("T")[0];
const isoLastYearDateString = dateLastYearFormat.toISOString().split("T")[0];
const isoNextYearDateString = dateNextYearFormat.toISOString().split("T")[0];

export const popularGamesUrl = () =>
  `${baseUrl}games?key=${process.env.REACT_APP_API_KEY}&dates=${isoLastYearDateString},${isoDateString}&ordering=-rating&page_size=10`;

export const upComingGamesUrl = () =>
  `${baseUrl}games?key=${process.env.REACT_APP_API_KEY}&dates=${isoDateString},${isoNextYearDateString}&ordering=-added&page_size=10`;

export const newGamesUrl = () =>
  `${baseUrl}games?key=${process.env.REACT_APP_API_KEY}&dates=${isoLastYearDateString},${isoDateString}&ordering=-released&page_size=10`;

export const gameDetailsUrl = (game_id) =>
  `${baseUrl}games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;

export const gameScreenshotUrl = (game_id) =>
  `${baseUrl}games/${game_id}/screenshot?key=${process.env.REACT_APP_API_KEY}`;
