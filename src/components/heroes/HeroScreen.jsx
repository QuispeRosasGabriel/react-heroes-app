import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

const HeroScreen = (props) => {
  // Extrae parametros del url
  const { heroeId } = useParams();

  const hero = getHeroById(heroeId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <>
      <div>HeroesScreen</div>
    </>
  );
};

export default HeroScreen;
