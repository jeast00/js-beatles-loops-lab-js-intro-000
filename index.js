// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}


function johnLennonFacts(facts) {
  var array = [];
  var count = 0;
  while (count < facts.length) {
    array.push(`${facts[count]}!!!`);
    count++;
  }
  return array;
}


function iLoveTheBeatles(num) {
  var array = [];
  var i = 0;

  function incrementVariable() {
    return i++;
  }

  do {
    if (num > 15) {
      array.push(`I love the Beatles!`);
    }else {
    array.push(`I love the Beatles!`);
  }
  } while (incrementVariable() < num);
  return array;
}
