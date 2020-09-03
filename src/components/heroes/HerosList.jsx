import React, { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import HeroCard from "./HeroCard";

const Heroslist = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <ul>
      {heroes.map((val) => (
        <HeroCard key={val.id} {...val} />
      ))}
    </ul>
  );
};

export default Heroslist;
