    <$ Require("src/Backbone/Backbone.Model._validate.js") $>        <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.extend.js") $>    // Check if the model is currently in a valid state.    isValid: function(options) {      return this._validate({}, _.extend(options || {}, { validate: true }));    }