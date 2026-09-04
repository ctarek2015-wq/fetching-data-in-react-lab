import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ ships, isLoading, error }) => {
  if (isLoading) {
    return (
      <h1>
        <strong>Loading…</strong>
      </h1>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h2>Starships</h2>
      <p>Number of Results: {ships.length}</p>
      <div>
        {ships.map((ship, idx) => (
          <StarshipCard key={idx} ship={ship} />
        ))}
      </div>
    </>
  );
};

export default StarshipList;
