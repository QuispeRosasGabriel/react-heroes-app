import { heroes } from "../data/Heros";

export const getHeroByPublisher = (id) => {
  return heroes.find((val) => val.id === id);
};
