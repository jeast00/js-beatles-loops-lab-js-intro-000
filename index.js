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
  while (facts.length) {
    array.push(`${facts}!!!`);
    facts.length--;
    return array;
  }
}
