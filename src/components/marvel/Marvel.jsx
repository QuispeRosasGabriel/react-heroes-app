import React from "react";
import Heroslist from "../heroes/HerosList";

const MarvelScreen = (props) => {
  return (
    <>
      <div>MARVEL</div>
      <Heroslist publisher="Marvel Comics" />
    </>
  );
};

export default MarvelScreen;
