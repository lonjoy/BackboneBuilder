    <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.has.js") $>    // Determine if the model has changed since the last `"change"` event.    // If you specify an attribute name, determine if that attribute has changed.    hasChanged: function(attr) {      if (attr == null) return !_.isEmpty(this.changed);      return _.has(this.changed, attr);    }