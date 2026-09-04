const API_URL = "https://swapi.info/api/starships";

const index = async () => {
  const data = (await fetch(API_URL)).json();
  return data;
};

export { index };
