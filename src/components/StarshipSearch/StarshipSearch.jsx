const StarshipSearch = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search for a starship..." />
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Search
        </button>
      </form>
    </>
  );
};

export default StarshipSearch;
