const targetArray = ["Anne",
                     "Bernard",
                     "Clemence",
                     "Justine",
                     "Lopard",
                     "Renaud",
                     "Tao",
                     "Valerie",
                     "Xavier"];

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

/*Emploi */
if (binarySearch(targetArray, "Anne", 0, targetArray.length)) {
  console.log("Élément trouvé.");
} else {
  console.log("Élément non trouvé");
}
