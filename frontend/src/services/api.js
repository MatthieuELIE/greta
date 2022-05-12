export const weeklyQuest = [
  "Ne pas manger de viande pendant la semaine",
  "Aller au travail en vélo",
  "Limiter son utilisation du numérique à une heure par jour",
  "Passe une semaine sans thé, ni café, ni chocolat",
];

export const dailyQuest = [
  "Ne pas utiliser sa voiture aujourd’hui",
  "Ne pas acheter de produits emballés aujourd’hui",
  "Éviter d’avoir un enfant dans la journée",
  "Acheter un produit périssable sous deux jours maximum",
];

export const randomQuest = [
  "Ne pas utiliser la climatisation pour le prochain trajet en voiture",
  "Éviter d’envoyer des mails inutiles",
  "Faire une promenade en ramassant les déchets qui trainent",
  "Prendre une douche de 2 minutes maximum",
  "Éviter d’utiliser du papier cuisson, du cellophane et de l’aluminium",
  "Passer au thé et au café en vrac, sans sachet !",
  "Faire son propre petit potager pour réduire ses achats de fruits et légumes",
  "Utiliser un essuie-tout réutilisable",
  "Eteindre ses équipements électroniques et désactiver les veilles",
  "Utiliser des savons et shampoings durs",
  "Ne pas acheter de vêtements neufs",
  "Faire sois-même sa lessive et laver à froid en machine",
  "Acheter local",
  "Ne pas gaspiller ses restes alimentaire mais les réutiliser",
  "Passer aux ampoules LED",
  "Créer son propre liquide vaisselle",
  "Planter à minima un arbre dans ton jardin ou celui d'une coniassance",
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Renvoie un nombre de ressource aléatoire depuis le tableau de ressources donné.
 *
 * @param {Array} resources Un tableau de ressources
 * @param {Number} Le nombre de ressource à retourner
 *
 * @returns {Array}
 */
export function getRandomResources(resources, itemsCount) {
  const results = [];

  while (results.length < itemsCount) {
    const randomResource = resources[getRandomIndex(resources.length)];

    if (!results.includes(randomResource)) {
      results.push(randomResource);
    }
  }

  return results;
}
