// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}


function johnLennonFacts(facts) {
  while (facts.length > 0) {
    var array = [];
    array.push(`${facts}!!!`);
    facts.length--;
    return array;
  }
}
