// GEODB CITIES API: https://rapidapi.com/wirefreethought/api/geodb-cities/
export const geoAPIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "geoDB-rapidAPIkey",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// WEATHER API: https://openweathermap.org/
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "openweatherAPIkey";
