function groupAnimals(animals) {
    animals.sort();
    var sortedAnimals = [];
    sortedAnimals.push([animals[0]])
    var indexSekarang = 0;
    
    for (var i = 1; i < animals.length; i ++) {
      if(animals[i][0][0] > sortedAnimals[indexSekarang][0][0]) {
        sortedAnimals.push([animals[i]]);
        indexSekarang++;
      } else {
        sortedAnimals[indexSekarang].push(animals[i]);
        
      }
    } return sortedAnimals;
  }
    
    // TEST CASES
    console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
    // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
    console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
    // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]