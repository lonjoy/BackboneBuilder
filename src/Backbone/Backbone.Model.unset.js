    <$ Require("src/Backbone/Backbone.Model.set.js") $>    // Remove an attribute from the model, firing `"change"`. `unset` is a noop    // if the attribute doesn't exist.    unset: function(attr, options) {      return this.set(attr, void 0, _.extend({}, options, {unset: true}));    }