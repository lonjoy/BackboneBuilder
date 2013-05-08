  //because the third param is not used in underscore's each,so I do this...
  <$ if("Zepto" in Config.Backbone.Library){ $>
    var each = _.each = _.forEach = <$= Config.Backbone.Library.Zepto.NameSpace $>.each;
  <$ }else{ $>
    <$= Include("src/Underscore/_.has.js") $>
      // The cornerstone, an `each` implementation, aka `forEach`.
      // Handles objects with the built-in `forEach`, arrays, and raw objects.
      // Delegates to **ECMAScript 5**'s native `forEach` if available.
      var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
          obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
          for (var i = 0, l = obj.length; i < l; i++) {
            if (iterator.call(context, obj[i], i, obj) === breaker) return;
          }
        } else {
          for (var key in obj) {
            if (_.has(obj, key)) {
              if (iterator.call(context, obj[key], key, obj) === breaker) return;
            }
          }
        }
      };
  <$ } $>
  
  