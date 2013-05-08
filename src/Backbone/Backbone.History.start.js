    // Start the hash change handling, returning `true` if the current URL matches    // an existing route, and `false` otherwise.    start: function(options) {      if (History.started) throw new Error("Backbone.history has already been started");      History.started = true;      // Figure out the initial configuration. Do we need an iframe?      // Is pushState desired ... is it available?      <$ Push(Config.Backbone.Underscore.Require,"src/Underscore/_.extend.js") $>      this.options          = _.extend({}, {root: '/'}, this.options, options);      this.root             = this.options.root;      this._wantsHashChange = this.options.hashChange !== false;      this._wantsPushState  = !!this.options.pushState;      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);      var fragment          = this.getFragment();      var docMode           = document.documentMode;      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));      // Normalize root to always include a leading and trailing slash.      this.root = ('/' + this.root + '/').replace(rootStripper, '/');      <$ if(Config.Backbone.OnlyBrowser === false){ $>      if (oldIE && this._wantsHashChange) {        this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;        this.navigate(fragment);      }      <$ } $>      // Depending on whether we're using pushState or hashes, and whether      // 'onhashchange' is supported, determine how we check the URL state.      if (this._hasPushState) {        Backbone.$(window).on('popstate', this.checkUrl);      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {        Backbone.$(window).on('hashchange', this.checkUrl);      } else if (this._wantsHashChange) {        <$ if(("IE" in Config.Backbone.BrowserNotSupport) === false){ $>this._checkUrlInterval = setInterval(this.checkUrl, this.interval);<$ } $>      }      // Determine if we need to change the base url, for a pushState link      // opened by a non-pushState browser.      this.fragment = fragment;      var loc = this.location;      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;      // If we've started off with a route from a `pushState`-enabled browser,      // but we're currently in a browser that doesn't support it...      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {        this.fragment = this.getFragment(null, true);        this.location.replace(this.root + this.location.search + '#' + this.fragment);        // Return immediately as browser will do redirect to new url        return true;      // Or if we've started out with a hash-based route, but we're currently      // in a browser where it could be `pushState`-based instead...      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {        this.fragment = this.getHash().replace(routeStripper, '');        this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);      }      if (!this.options.silent) return this.loadUrl();    }