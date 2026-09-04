const BASE_URL = "https://jsonplaceholder.typicode.com/";

const index = async (typi) => {
  const queryStringURL = `${BASE_URL}${typi}`;

  try {
    const res = await fetch(queryStringURL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { index };
