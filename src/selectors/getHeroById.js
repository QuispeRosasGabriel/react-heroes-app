import { heroes } from "../data/Heros";

export const getHeroById = (id) => {
  return heroes.find((val) => val.id === id);
};
