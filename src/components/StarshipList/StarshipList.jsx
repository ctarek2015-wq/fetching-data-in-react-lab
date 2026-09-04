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
    <section className="starship-list">
      <h2 className="list-header">Starships</h2>
      <p className="list-meta">
        Number of Results: <strong>{ships.length}</strong>
      </p>
      <ul className="card-grid">
        {ships.map((ship, idx) => (
          <li key={idx}>
            <StarshipCard ship={ship} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;
