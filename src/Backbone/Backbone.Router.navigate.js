        <$ Require("src/Backbone/Backbone.History.navigate.js") $>    // Simple proxy to `Backbone.history` to save a fragment into the history.    navigate: function(fragment, options) {      Backbone.history.navigate(fragment, options);      return this;    }