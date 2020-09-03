import React from "react";
import Heroslist from "../heroes/HerosList";

const DcScreen = (props) => {
  return (
    <>
      <div>Pantalla DC</div>
      <Heroslist publisher="DC Comics" />
    </>
  );
};

export default DcScreen;
