import React, { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import HeroCard from "./HeroCard";

const Heroslist = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <ul className="card-columns animate__animated animate__fadeIn">
      {heroes.map((val) => (
        <HeroCard key={val.id} {...val} />
      ))}
    </ul>
  );
};

export default Heroslist;
