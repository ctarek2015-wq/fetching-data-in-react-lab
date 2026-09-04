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

  const handleSearch = (searchTerm) => {
    if (!searchTerm || !searchTerm.trim()) {
      setDisplayedShips(ships);
      setIsFiltered(false);
      return;
    }

    const query = searchTerm.toLowerCase().trim();
    const filtered = ships.filter(
      ({ name, model, manufacturer, starship_class }) =>
        name.toLowerCase().includes(query) ||
        model.toLowerCase().includes(query) ||
        manufacturer.toLowerCase().includes(query) ||
        starship_class.toLowerCase().includes(query),
    );
    setDisplayedShips(filtered);
    setIsFiltered(true);
  };

  const resetSearch = () => {
    setDisplayedShips(ships);
    setIsFiltered(false);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Star Wars API</h1>
        <StarshipSearch
          handleSearch={handleSearch}
          resetSearch={resetSearch}
          isFiltered={isFiltered}
        />
      </div>

      <div className="app-content">
        <StarshipList
          ships={displayedShips}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
