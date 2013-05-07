  <$= Include("src/Underscore/_.sortedIndex.js") $>  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),  // we need this function. Return the position of the first occurrence of an  // item in an array, or -1 if the item is not included in the array.  // Delegates to **ECMAScript 5**'s native `indexOf` if available.  // If the array is large and already in sort order, pass `true`  // for **isSorted** to use binary search.  _.indexOf = function(array, item, isSorted) {    if (array == null) return -1;    var i = 0, l = array.length;    if (isSorted) {      if (typeof isSorted == 'number') {        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);      } else {        i = _.sortedIndex(array, item);        return array[i] === item ? i : -1;      }    }    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);    for (; i < l; i++) if (array[i] === item) return i;    return -1;  };