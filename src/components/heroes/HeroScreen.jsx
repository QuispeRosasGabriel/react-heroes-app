import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

const HeroScreen = ({ history }) => {
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

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/${heroeId}.jpg`}
          className="img-thumbnail"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Nombre: {alter_ego}</b>
          </li>
          <li className="list-group-item">
            <b>Publicado por: {publisher}</b>
          </li>
          <li className="list-group-item">
            <b>Primera aparción: {first_appearance}</b>
          </li>
        </ul>
        <h5>Personajes</h5>
        <p>{characters}</p>
        <button onClick={handleReturn} className="btn btn-outline-info">
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
