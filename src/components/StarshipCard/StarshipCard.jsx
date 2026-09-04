const StarshipCard = ({
  ship: { name, starship_class, manufacturer, model },
}) => {
  return (
    <div className="starship-card">
      <h3 className="card-title">{name}</h3>
      <p className="card-field">
        <span className="card-label">Class:</span> {starship_class}
      </p>
      <p className="card-field">
        <span className="card-label">Manufacturer:</span> {manufacturer}
      </p>
      <p className="card-field">
        <span className="card-label">Model:</span> {model}
      </p>
    </div>
  );
};

export default StarshipCard;
