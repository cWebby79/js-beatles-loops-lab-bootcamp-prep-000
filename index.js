function theBeatlesPlay(musicians,instruments) {
  var newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + ' plays '+ instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var counter;
  while (counter < facts.length) {
    newFacts.push(facts[counter] + '!!!');
    counter++;
  }
  return newFacts;
}