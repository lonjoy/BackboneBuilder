  <$= Include("src/Underscore/_._eq.js") $>  // Perform a deep comparison to check if two objects are equal.  _.isEqual = function(a, b) {    return eq(a, b, [], []);  };