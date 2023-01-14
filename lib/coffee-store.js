import coffeeStoreData from '../coffee-stores.json'

const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`
}

export const fetchCoffeeStores = async () => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY
    }
  }

  // const response = await fetch("https://api.foursquare.com/v3/places/search?query=coffee&ll=", options);
  // const data = await response.json();
  // console.log(data.results)

  return coffeeStoreData;

}