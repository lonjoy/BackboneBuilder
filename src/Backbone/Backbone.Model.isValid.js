    <$ Require("src/Backbone/Backbone.Model._validate.js") $>    // Check if the model is currently in a valid state.    isValid: function(options) {      return this._validate({}, _.extend(options || {}, { validate: true }));    }