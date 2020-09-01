import React from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";

const Heroslist = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);

  return (
    <ul>
      {heroes.map((val) => (
        <li key={val.id}>{val.superhero}</li>
      ))}
    </ul>
  );
};

export default Heroslist;
