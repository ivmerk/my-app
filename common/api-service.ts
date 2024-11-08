const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = `https://api.hantify.ru/`;

export const fetchData = async (endpoint, options = {}) => {
  try {
    console.log('Fetch endpoint: ', `${PROXY_URL}${BASE_URL}/${endpoint}`);
    const response = await fetch(`${PROXY_URL}${BASE_URL}/${endpoint}`, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetch data: ', data);
    return data;
  } catch (error) {
    console.error('Fetch error: ', error);
    throw error;
  }
};
