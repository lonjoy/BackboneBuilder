   // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  
  <$ if("Zepto" in Config.Backbone.Library){ $>
  _.map = _.collect = <$= Config.Backbone.Library.Zepto.NameSpace $>.map;
  <$ }else{ $>
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };
  <$ } $>