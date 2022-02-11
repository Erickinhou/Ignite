//Base Url
const baseUrl = "https://api.rawg.io/api/";

//Time

const dateCurrentFormat = new Date();
const dateLastYearFormat = new Date();

// dateFormat.setDate(dateFormat.getDate() + 1); //ads a day
// dateFormat.setMonth(dateFormat.getMonth() + 1); //adds a month
dateLastYearFormat.setFullYear(dateCurrentFormat.getFullYear() - 1); //adds a year

const isoDateString = dateCurrentFormat.toISOString().split("T")[0];
const isoLastYearDateString = dateLastYearFormat.toISOString().split("T")[0];

console.log(isoDateString);

export const popularGamesUrl = () =>
  `${baseUrl}games?key=${process.env.REACT_APP_API_KEY}&dates=${isoLastYearDateString},${isoDateString}`;
