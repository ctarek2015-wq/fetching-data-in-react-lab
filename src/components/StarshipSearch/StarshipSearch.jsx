import { useState } from "react";

const StarshipSearch = ({ handleSearch, resetSearch, isFiltered }) => {
  const [formData, setFormData] = useState("");
  const [prevSearch, setPrevSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.trim()) {
      return;
    }
    handleSearch(formData);
    setPrevSearch(formData);
    setFormData("");
  };

  const handleReset = () => {
    setFormData("");
    setPrevSearch("");
    resetSearch();
  };

  return (
    <div className="search-container">
      <p className="search-meta">
        {prevSearch
          ? `Previous search: ${prevSearch}`
          : "Search for a starship by name."}
      </p>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-group">
          <label htmlFor="search">Search for a starship:</label>
          <input
            id="search"
            className="search-input"
            type="text"
            placeholder="Enter starship name..."
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default StarshipSearch;
