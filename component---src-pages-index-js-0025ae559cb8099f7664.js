webpackJsonp([35783957827783],{82:function(e,t,n){"use strict";function o(e){return e}function r(e,t,n){function r(e,t){var n=g.hasOwnProperty(t)?g[t]:null;_.hasOwnProperty(t)&&c("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&c("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,n){if(n){c("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),c(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,a=o.__reactAutoBindPairs;n.hasOwnProperty(l)&&b.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==l){var s=n[i],u=o.hasOwnProperty(i);if(r(u,i),b.hasOwnProperty(i))b[i](e,s);else{var p=g.hasOwnProperty(i),m="function"==typeof s,y=m&&!p&&!u&&n.autobind!==!1;if(y)a.push(i,s),o[i]=s;else if(u){var E=g[i];c(p&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,i),"DEFINE_MANY_MERGED"===E?o[i]=f(o[i],s):"DEFINE_MANY"===E&&(o[i]=d(o[i],s))}else o[i]=s}}}else;}function u(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in b;c(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;c(!a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=o}}}function p(e,t){c(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(c(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return p(r,n),p(r,o),r}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function y(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=m(e,r)}}function E(e){var t=o(function(e,o,r){this.__reactAutoBindPairs.length&&y(this),this.props=e,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;c("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new j,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],h.forEach(a.bind(null,t)),a(t,N),a(t,e),a(t,v),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),c(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in g)t.prototype[r]||(t.prototype[r]=null);return t}var h=[],g={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},N={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},j=function(){};return i(j.prototype,e.prototype,_),E}var a,i=n(4),s=n(31),c=n(1),l="mixins";a={},e.exports=r},140:function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,l=c&&c(Object);e.exports=function e(t,u,p){if("string"!=typeof u){if(l){var f=c(u);f&&f!==l&&e(t,f,p)}var d=a(u);i&&(d=d.concat(i(u)));for(var m=0;m<d.length;++m){var y=d[m];if(!(n[y]||o[y]||p&&p[y])){var E=s(u,y);try{r(t,y,E)}catch(e){}}}return t}return t}},4:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,s,c=n(e),l=1;l<arguments.length;l++){o=Object(arguments[l]);for(var u in o)a.call(o,u)&&(c[u]=o[u]);if(r){s=r(o);for(var p=0;p<s.length;p++)i.call(o,s[p])&&(c[s[p]]=o[s[p]])}}return c}},397:function(e,t,n){e.exports=n.p+"static/gajadesign-logo.409309b8.png"},398:function(e,t,n){e.exports=n.p+"static/galeria.c25c656e.jpg"},399:function(e,t,n){e.exports=n.p+"static/header.e0d029c8.jpg"},184:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(5),c=o(s),l=n(277),u=(o(l),n(399)),p=o(u),f=n(397),d=o(f),m=n(398),y=o(m),E=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return c.default.createElement("div",{id:"page"},c.default.createElement("div",{id:"header",style:{backgroundImage:'url("'+p.default+'")'}},c.default.createElement("img",{src:d.default,alt:"Gaja design logo"}),c.default.createElement("div",{id:"header-content"},c.default.createElement("p",null,"Wiz",c.default.createElement("strong",null,"ja")),c.default.createElement("p",null,c.default.createElement("strong",null,"Pro"),"jekt"),c.default.createElement("p",null,c.default.createElement("strong",null,"Real"),"izacja"))),c.default.createElement("div",{id:"gallery"},c.default.createElement("img",{src:y.default,alt:"galeria"})),c.default.createElement("div",{id:"contact"},c.default.createElement("div",{className:"heading"},c.default.createElement("p",null,"Chcesz porozmawiać o nowym projekcie?"),c.default.createElement("p",null,"Skontaktuj się ze mna!")),c.default.createElement("div",{className:"contact-methods"},c.default.createElement("div",{className:"phone"},c.default.createElement("span",null,"Telefon:")," 07893745897"),c.default.createElement("div",{className:"email"},c.default.createElement("span",null,"Email:")," a@gajadesign.pl"))))},t}(c.default.Component);t.default=E,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-0025ae559cb8099f7664.js.map