import React from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import HeroCard from "./HeroCard";

const Heroslist = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);

  return (
    <ul>
      {heroes.map((val) => (
        <HeroCard key={val.id} {...val} />
      ))}
    </ul>
  );
};

export default Heroslist;
