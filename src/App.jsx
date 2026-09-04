import { useState, useEffect } from "react";
import * as starshipService from "./services/starshipService";
import StarshipList from "./components/StarshipList/StarshipList";
import "./App.css";

function App() {
  const [ships, setShips] = useState([
    {
      name: "",
      starship_class: "",
      manufacturer: "",
      model: "",
    },
  ]);
  useEffect(() => {
    const fetchList = async () => {
      setShips(await starshipService.index());
    };
    fetchList();
  }, []);

  return (
    <>
      <h1>Star Wars API</h1>
      <h3>Search</h3>
      <h3>Starships</h3>
      <p>Number of Results: {ships.length}</p>

      <StarshipList ships={ships} />
    </>
  );
}

export default App;
