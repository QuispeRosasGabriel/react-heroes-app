import { heroes } from "../data/Heros";

export const getHeroByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher ${publisher} no encontrado`);
  }

  return heroes.filter((val) => val.publisher === publisher);
};
