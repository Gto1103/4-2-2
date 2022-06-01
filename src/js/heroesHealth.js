export default function sortHeroesHealth(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
