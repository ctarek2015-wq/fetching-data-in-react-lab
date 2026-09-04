import { useState, useEffect } from "react";
import * as starshipService from "./services/starshipService";
import StarshipList from "./components/StarshipList/StarshipList";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import "./App.css";

function App() {
  const [ships, setShips] = useState([]);
  const [filteredShips, setFilteredShips] = useState([]);
  useEffect(() => {
    const fetchList = async () => {
      setShips(await starshipService.index());
    };
    fetchList();
  }, []);

  if (ships.length === 0) {
    return <h1>Loading…</h1>;
  }
  return (
    <>
      <h1>Star Wars API</h1>
      <h3>Search</h3>
      <StarshipSearch />

      <StarshipList ships={ships} />
    </>
  );
}

export default App;
