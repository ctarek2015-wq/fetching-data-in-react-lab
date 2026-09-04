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
    <>
      <p>
        {prevSearch
          ? `Previous search: ${prevSearch}`
          : "Search for a starship by name."}
      </p>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search for a starship:</label>
        <input
          id="search"
          type="text"
          placeholder="Enter starship name..."
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default StarshipSearch;
