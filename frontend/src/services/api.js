export const weeklyQuest = [
  "Ne pas manger de viande",
];

export const dailyQuest = [
  "Ne pas utiliser sa voiture (2kg/CO2)",
  "Ne pas acheter de produits emballés (0.5kg/CO2)",
  "Éviter d’avoir un enfant dans la journée (35.000kg/CO2)",
];

export const randomQuest = [
  "Ne pas utiliser la climatisation pour le prochain trajet en voiture (0.2kg/CO2)",
  "Éviter d’envoyer des mails inutiles (0.1kg/CO2)",
  "Faire une promenade en ramassant les déchets qui trainent (1kg/CO2)",
  "Prendre une douche de 2 minutes maximum (0.5kg/CO2)",
  "Éviter d’utiliser du papier cuisson, du cellophane et de l’aluminium (0.2kg/CO2)",
  "Passer au thé et au café en vrac, sans sachet ! (0.6kg/CO2)",
  "Faire son propre petit potager pour réduire ses achats de fruits et légumes (15kg/CO2)",
  "Utiliser un essuie-tout réutilisable (0.9kg/CO2)",
  "Eteindre ses équipements électroniques et désactiver les veilles (1kg/CO2)",
  "Utiliser des savons et shampoings durs (0.8kg/CO2)",
  "Ne pas acheter de vêtements neufs (10kg/CO2)",
  "Faire sois-même sa lessive et laver à froid en machine (2kg/CO2)",
  "Acheter local (5kg/CO2)",
  "Ne pas gaspiller ses restes alimentaire mais les réutiliser (0.6kg/CO2)",
  "Passer aux ampoules LED (5kg/CO2)",
  "Créer son propre liquide vaisselle (1kg/CO2)",
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
