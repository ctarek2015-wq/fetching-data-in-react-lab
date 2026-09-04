import { useEffect, useState } from "react";
import * as starshipService from "../../services/starshipService";
import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ ships }) => {
  return (
    <>
      <h3>Starships</h3>
      <p>Number of Results: {ships.length}</p>
      <ul>
        {ships.map((ship, idx) => {
          return <StarshipCard key={idx} ship={ship} />;
        })}
      </ul>
    </>
  );
};

export default StarshipList;
