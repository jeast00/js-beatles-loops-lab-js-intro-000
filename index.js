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
  count = facts.length;
  while (facts.length - 1 > 0) {
    array.push(`${facts}!!!`);
    count--;
    return array;
  }
}
