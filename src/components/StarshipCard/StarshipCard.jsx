const StarshipCard = ({
  ship: { name, starship_class, manufacturer, model },
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Class: {starship_class}</p>
      <p>Manufacturer: {manufacturer}</p>
      <p>Model: {model}</p>
    </div>
  );
};

export default StarshipCard;
