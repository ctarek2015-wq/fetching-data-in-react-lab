import { useState, useEffect } from "react";
import * as starshipService from "./services/starshipService";
import StarshipList from "./components/StarshipList/StarshipList";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import "./App.css";

function App() {
  const [ships, setShips] = useState([]);
  const [displayedShips, setDisplayedShips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await starshipService.index();
        setShips(data);
        setDisplayedShips(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchList();
  }, []);

  return (
    <>
      <h1>Star Wars API</h1>
      <h3>Search</h3>
      <StarshipSearch />

      <StarshipList
        ships={displayedShips}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}

export default App;
