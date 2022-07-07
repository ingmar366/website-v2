// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2kSJi":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _navView = require("./views/navView");
var _navViewDefault = parcelHelpers.interopDefault(_navView);
var _smoothscrollPolyfill = require("smoothscroll-polyfill");
var _smoothscrollPolyfillDefault = parcelHelpers.interopDefault(_smoothscrollPolyfill);
var _aboutView = require("./views/aboutView");
var _aboutViewDefault = parcelHelpers.interopDefault(_aboutView);
var _projectsView = require("./views/projectsView");
var _projectsViewDefault = parcelHelpers.interopDefault(_projectsView);
var _lazyImages = require("./views/lazyImages");
var _lazyImagesDefault = parcelHelpers.interopDefault(_lazyImages);
const smoothScroll = function(e) {
    e.preventDefault();
    if (e.target.classList.contains(`nav__link`)) {
        // console.log(e.target.classList);
        const id = e.target.getAttribute(`href`);
        document.querySelector(id).scrollIntoView({
            behavior: `smooth`
        });
    }
};
const arrowClick = function(e) {
    const targetClasses = e.target.classList;
    if (!targetClasses.contains("arrow")) return;
    (0, _projectsViewDefault.default).toggleArrows();
    if (targetClasses[0] === "projects__arrow-right") (0, _projectsViewDefault.default).translateProjects(-100);
    if (targetClasses[0] === "projects__arrow-left") (0, _projectsViewDefault.default).translateProjects(0);
};
const init = function() {
    (0, _smoothscrollPolyfillDefault.default).polyfill();
    (0, _navViewDefault.default).stuckNav();
    (0, _navViewDefault.default).handlerClick(smoothScroll);
    (0, _navViewDefault.default).appearSection();
    (0, _aboutViewDefault.default).appearSection();
    (0, _projectsViewDefault.default).clickHandler(arrowClick);
    (0, _lazyImagesDefault.default).intersectImg();
};
init();

},{"./views/navView":"82Kie","smoothscroll-polyfill":"1W2LT","./views/aboutView":"jVrhK","./views/projectsView":"aXqs3","./views/lazyImages":"7oR6a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82Kie":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _observer = require("./observer");
var _observerDefault = parcelHelpers.interopDefault(_observer);
class NavView extends (0, _observerDefault.default) {
    _nav = document.querySelector(".nav");
    _header = document.querySelector(".header");
    _allSection = document.querySelectorAll(".section");
    stuckNav() {
        const navHeight = this._nav.getBoundingClientRect().height;
        const headerObserver = new IntersectionObserver(this._stickyNav.bind(this), {
            root: null,
            threshold: 0,
            rootMargin: `-${navHeight}px`
        });
        headerObserver.observe(this._header);
    }
    // function to set the sticky bar fixed
    _stickyNav(entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) this._nav.classList.add(`sticky`);
        else this._nav.classList.remove(`sticky`);
    }
    handlerClick(handler) {
        this._nav.addEventListener("click", handler);
    }
}
exports.default = new NavView();

},{"./observer":"9QYLX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9QYLX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Observer {
    _allSection = "";
    appearSection() {
        const sectionObserver = new IntersectionObserver(this._revealSection.bind(this), {
            root: null,
            threshold: 0,
            rootMargin: `10px`
        });
        this._allSection.forEach(function(section) {
            sectionObserver.observe(section);
            section.classList.add(`section--hidden`);
        });
    }
    //reveals the sections when they are intersected
    _revealSection(entries, observer) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.classList.remove(`section--hidden`);
        observer.unobserve(entry.target);
    }
}
exports.default = Observer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1W2LT":[function(require,module,exports) {
/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */ (function() {
    "use strict";
    // polyfill
    function polyfill() {
        // aliases
        var w = window;
        var d = document;
        // return if scroll behavior is supported and polyfill is not forced
        if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) return;
        // globals
        var Element = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468;
        // object gathering original scroll methods
        var original = {
            scroll: w.scroll || w.scrollTo,
            scrollBy: w.scrollBy,
            elementScroll: Element.prototype.scroll || scrollElement,
            scrollIntoView: Element.prototype.scrollIntoView
        };
        // define timing method
        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */ function isMicrosoftBrowser(userAgent) {
            var userAgentPatterns = [
                "MSIE ",
                "Trident/",
                "Edge/"
            ];
            return new RegExp(userAgentPatterns.join("|")).test(userAgent);
        }
        /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */ var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
        /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function scrollElement(x, y) {
            this.scrollLeft = x;
            this.scrollTop = y;
        }
        /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */ function ease(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */ function shouldBailOut(firstArg) {
            if (firstArg === null || typeof firstArg !== "object" || firstArg.behavior === undefined || firstArg.behavior === "auto" || firstArg.behavior === "instant") // first argument is not an object/null
            // or behavior is auto, instant or undefined
            return true;
            if (typeof firstArg === "object" && firstArg.behavior === "smooth") // first argument is an object and behavior is smooth
            return false;
            // throw error when behavior is not supported
            throw new TypeError("behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior.");
        }
        /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function hasScrollableSpace(el, axis) {
            if (axis === "Y") return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
            if (axis === "X") return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
        /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function canOverflow(el, axis) {
            var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
            return overflowValue === "auto" || overflowValue === "scroll";
        }
        /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function isScrollable(el) {
            var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
            var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
            return isScrollableY || isScrollableX;
        }
        /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */ function findScrollableParent(el) {
            while(el !== d.body && isScrollable(el) === false)el = el.parentNode || el.host;
            return el;
        }
        /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */ function step(context) {
            var time = now();
            var value;
            var currentX;
            var currentY;
            var elapsed = (time - context.startTime) / SCROLL_TIME;
            // avoid elapsed times higher than one
            elapsed = elapsed > 1 ? 1 : elapsed;
            // apply easing to elapsed time
            value = ease(elapsed);
            currentX = context.startX + (context.x - context.startX) * value;
            currentY = context.startY + (context.y - context.startY) * value;
            context.method.call(context.scrollable, currentX, currentY);
            // scroll more if we have not reached our destination
            if (currentX !== context.x || currentY !== context.y) w.requestAnimationFrame(step.bind(w, context));
        }
        /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function smoothScroll(el, x, y) {
            var scrollable;
            var startX;
            var startY;
            var method;
            var startTime = now();
            // define scroll context
            if (el === d.body) {
                scrollable = w;
                startX = w.scrollX || w.pageXOffset;
                startY = w.scrollY || w.pageYOffset;
                method = original.scroll;
            } else {
                scrollable = el;
                startX = el.scrollLeft;
                startY = el.scrollTop;
                method = scrollElement;
            }
            // scroll looping over a frame
            step({
                scrollable: scrollable,
                method: method,
                startTime: startTime,
                startX: startX,
                startY: startY,
                x: x,
                y: y
            });
        }
        // ORIGINAL METHODS OVERRIDES
        // w.scroll and w.scrollTo
        w.scroll = w.scrollTo = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
                arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
        };
        // w.scrollBy
        w.scrollBy = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0])) {
                original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
        };
        // Element.prototype.scroll and Element.prototype.scrollTo
        Element.prototype.scroll = Element.prototype.scrollTo = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                // if one number is passed, throw error to match Firefox implementation
                if (typeof arguments[0] === "number" && arguments[1] === undefined) throw new SyntaxError("Value could not be converted");
                original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
                arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== "object" ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
                arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
                return;
            }
            var left = arguments[0].left;
            var top = arguments[0].top;
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(this, this, typeof left === "undefined" ? this.scrollLeft : ~~left, typeof top === "undefined" ? this.scrollTop : ~~top);
        };
        // Element.prototype.scrollBy
        Element.prototype.scrollBy = function() {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) return;
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                return;
            }
            this.scroll({
                left: ~~arguments[0].left + this.scrollLeft,
                top: ~~arguments[0].top + this.scrollTop,
                behavior: arguments[0].behavior
            });
        };
        // Element.prototype.scrollIntoView
        Element.prototype.scrollIntoView = function() {
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
                original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            var scrollableParent = findScrollableParent(this);
            var parentRects = scrollableParent.getBoundingClientRect();
            var clientRects = this.getBoundingClientRect();
            if (scrollableParent !== d.body) {
                // reveal element inside parent
                smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
                // reveal parent in viewport unless is fixed
                if (w.getComputedStyle(scrollableParent).position !== "fixed") w.scrollBy({
                    left: parentRects.left,
                    top: parentRects.top,
                    behavior: "smooth"
                });
            } else // reveal element in viewport
            w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: "smooth"
            });
        };
    }
    // commonjs
    module.exports = {
        polyfill: polyfill
    };
})();

},{}],"jVrhK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _observer = require("./observer");
var _observerDefault = parcelHelpers.interopDefault(_observer);
class aboutView extends (0, _observerDefault.default) {
    _allSection = document.querySelectorAll(`.about__text`);
    _hat = document.querySelector(`.hat`);
    _car = document.querySelector(`.car`);
    _notebook = document.querySelector(`.notebook`);
    _boardBike = document.querySelector(`.board-bike`);
    _animate(item) {
        item.classList.add("animation");
    }
    _carAnimate(item) {
        item.classList.add("animation-car");
    }
    _revealSection(entries, observer) {
        super._revealSection(entries, observer);
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        if (entry.target.classList.contains(`about__bt`)) this._animate(this._hat);
        if (entry.target.classList.contains(`about__programming`)) {
            this._carAnimate(this._car);
            setTimeout(()=>{
                this._animate(this._notebook);
            }, 2500);
        }
        if (entry.target.classList.contains(`about__hobbies`)) this._animate(this._boardBike);
    }
}
exports.default = new aboutView();

},{"./observer":"9QYLX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXqs3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ProjectView {
    _projects = document.querySelector(`.projects`);
    _cardContainer = document.querySelector(`.projects__cards`);
    _arrowLeft = document.querySelector(`.projects__arrow-left`);
    _arrowRight = document.querySelector(`.projects__arrow-right`);
    clickHandler(handler) {
        this._projects.addEventListener(`click`, handler);
    }
    toggleArrows() {
        this._arrowLeft.classList.toggle(`hidden`);
        this._arrowRight.classList.toggle(`hidden`);
    }
    translateProjects(value) {
        this._cardContainer.style.transform = `translateX(${value}%)`;
    }
}
exports.default = new ProjectView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7oR6a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class LazyImages {
    _imgTargets = document.querySelectorAll("img[data-src]");
    _loadImg(entries, observer) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        // Replace src with data-src
        entry.target.src = entry.target.dataset.src;
        console.log(entry.target.src);
        entry.target.addEventListener("load", function() {
            entry.target.classList.remove("lazy-img");
        });
        observer.unobserve(entry.target);
    }
    intersectImg() {
        const imgObserver = new IntersectionObserver(this._loadImg, {
            root: null,
            threshold: 0,
            rootMargin: "200px"
        });
        this._imgTargets.forEach((img)=>imgObserver.observe(img));
    }
}
exports.default = new LazyImages();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2kSJi","aenu9"], "aenu9", "parcelRequireefef")

//# sourceMappingURL=index.e37f48ea.js.map
