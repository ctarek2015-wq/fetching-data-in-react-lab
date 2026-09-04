import { useState, useEffect } from "react";
import * as starshipService from "./services/starshipService";

import "./App.css";

function App() {
  const fetchData = async () => {
    const data = await starshipService.index();
    console.log(data);
  };
  fetchData();
  return (
    <>
      <h1>heeeeeeeeeeey</h1>
    </>
  );
}

export default App;
