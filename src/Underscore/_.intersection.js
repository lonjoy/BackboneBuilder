  <$= Include("src/Underscore/_.filter.js") $>  <$= Include("src/Underscore/_.every.js") $>  <$= Include("src/Underscore/_.indexOf.js") $>  <$= Include("src/Underscore/_.uniq.js") $>  // Produce an array that contains every item shared between all the  // passed-in arrays.  _.intersection = function(array) {    var rest = slice.call(arguments, 1);    return _.filter(_.uniq(array), function(item) {      return _.every(rest, function(other) {        return _.indexOf(other, item) >= 0;      });    });  };