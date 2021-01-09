const targetArray = [7,17,18,22,28,37,48];
/* Le but : chercher un élément dans un tableau trié. */
const binarySearch = (array, thingToFind, start, end) => {

  // la condition d'arrêt
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
   if (thingToFind === array[mid]) {
    return true;
  }
  if (thingToFind < array[mid]) {
    // On recherche dans la première partie.
    return binarySearch(array, thingToFind, start, mid - 1);
  } else {
  // On recherche dans la seconde partie.
    return binarySearch(array, thingToFind, mid + 1, end);
  }
}
if (binarySearch(targetArray, 28, 0, targetArray.length)) {
  console.log("Objet trouvé.");
} else {
  console.log("Objet non trouvé");
}

