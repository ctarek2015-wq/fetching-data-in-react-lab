import { useEffect, useState } from "react";
import * as starshipService from "../../services/starshipService";
import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ ships }) => {
  return (
    <>
      <ul>
        {ships.map((ship, idx) => {
          return <StarshipCard key={idx} ship={ship} />;
        })}
      </ul>
    </>
  );
};

export default StarshipList;
