  // Converts lists into objects. Pass either a single array of `[key, value]`  // pairs, or two parallel arrays of the same length -- one of keys, and one of  // the corresponding values.  _.object = function(list, values) {    if (list == null) return {};    var result = {};    for (var i = 0, l = list.length; i < l; i++) {      if (values) {        result[list[i]] = values[i];      } else {        result[list[i][0]] = list[i][1];      }    }    return result;  };