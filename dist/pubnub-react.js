(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PubNubReact"] = factory();
	else
		root["PubNubReact"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pubnub = __webpack_require__(1);

	var _pubnub2 = _interopRequireDefault(_pubnub);

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	var _wrapper = __webpack_require__(5);

	var _wrapper2 = _interopRequireDefault(_wrapper);

	var _autoload = __webpack_require__(7);

	var _autoload2 = _interopRequireDefault(_autoload);

	var _broadcast = __webpack_require__(8);

	var _modules = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PubNubReact = function () {
	  function PubNubReact(config) {
	    _classCallCheck(this, PubNubReact);

	    var instance = new _pubnub2.default(config);
	    (0, _wrapper2.default)(instance, this);

	    this._pubnubInstance = instance;
	    this._autoload = new _autoload2.default();
	  }

	  _createClass(PubNubReact, [{
	    key: 'init',
	    value: function init(component) {
	      if (!component.state) {
	        component.state = { pn_messages: {}, pn_status: {}, pn_presence: {} };
	      } else {
	        component.state = (0, _immutabilityHelper2.default)(component.state, { $merge: { pn_status: {}, pn_messages: {}, pn_presence: {} } });
	      }

	      this._component = component;
	      this._broadcast = new _broadcast.Broadcast();
	      this._listener = {};
	      this._keepMessages = {};

	      this.addListener(this._listener);
	      this._autoload.initialize(this);

	      this.getPresence = _modules.getPresence.bind(this);
	      this.getMessage = _modules.getMessage.bind(this);
	      this.getStatus = _modules.getStatus.bind(this);
	      this.clean = _modules.clean.bind(this);
	      this.release = _modules.release.bind(this);
	    }
	  }, {
	    key: 'subscribe',
	    value: function subscribe(args) {
	      this._pubnubInstance.subscribe(args);
	      this._autoload.enableLoad(args);
	    }
	  }, {
	    key: 'unsubscribe',
	    value: function unsubscribe(args) {
	      this._pubnubInstance.unsubscribe(args);
	      this._autoload.disableLoad(args);
	    }
	  }, {
	    key: 'getOriginalInstance',
	    value: function getOriginalInstance() {
	      if (this._pubnubInstance) {
	        return this._pubnubInstance;
	      } else {
	        throw new ReferenceError('Pubnub default instance is not initialized yet. Invoke #init() method first.');
	      }
	    }
	  }]);

	  return PubNubReact;
	}();

	exports.default = PubNubReact;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PubNub=t():e.PubNub=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){if(!navigator||!navigator.sendBeacon)return!1;navigator.sendBeacon(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),c=r(u),l=n(40),h=r(l),f=n(41),d=r(f),p=n(42),g=(n(8),function(e){function t(e){i(this,t);var n=e.listenToBrowserNetworkEvents,r=void 0===n||n;e.db=d.default,e.sdkFamily="Web",e.networking=new h.default({get:p.get,post:p.post,sendBeacon:a});var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r&&(window.addEventListener("offline",function(){o.networkDownDetected()}),window.addEventListener("online",function(){o.networkUpDetected()})),o}return o(t,e),t}(c.default));t.default=g,e.exports=t.default},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),u=i(a),c=n(7),l=i(c),h=n(9),f=i(h),d=n(11),p=i(d),g=n(12),y=i(g),v=n(18),b=i(v),_=n(19),m=r(_),k=n(20),P=r(k),S=n(21),O=r(S),w=n(22),T=r(w),C=n(23),M=r(C),E=n(24),x=r(E),N=n(25),R=r(N),K=n(26),A=r(K),j=n(27),D=r(j),G=n(28),U=r(G),B=n(29),I=r(B),H=n(30),L=r(H),q=n(31),F=r(q),z=n(32),X=r(z),W=n(33),V=r(W),J=n(34),$=r(J),Q=n(35),Y=r(Q),Z=n(36),ee=r(Z),te=n(37),ne=r(te),re=n(38),ie=r(re),se=n(15),oe=r(se),ae=n(39),ue=r(ae),ce=n(16),le=i(ce),he=n(13),fe=i(he),de=(n(8),function(){function e(t){var n=this;s(this,e);var r=t.db,i=t.networking,o=this._config=new l.default({setup:t,db:r}),a=new f.default({config:o});i.init(o);var u={config:o,networking:i,crypto:a},c=b.default.bind(this,u,oe),h=b.default.bind(this,u,U),d=b.default.bind(this,u,L),g=b.default.bind(this,u,X),v=b.default.bind(this,u,ue),_=this._listenerManager=new y.default,k=new p.default({timeEndpoint:c,leaveEndpoint:h,heartbeatEndpoint:d,setStateEndpoint:g,subscribeEndpoint:v,crypto:u.crypto,config:u.config,listenerManager:_});this.addListener=_.addListener.bind(_),this.removeListener=_.removeListener.bind(_),this.removeAllListeners=_.removeAllListeners.bind(_),this.channelGroups={listGroups:b.default.bind(this,u,T),listChannels:b.default.bind(this,u,M),addChannels:b.default.bind(this,u,m),removeChannels:b.default.bind(this,u,P),deleteGroup:b.default.bind(this,u,O)},this.push={addChannels:b.default.bind(this,u,x),removeChannels:b.default.bind(this,u,R),deleteDevice:b.default.bind(this,u,D),listChannels:b.default.bind(this,u,A)},this.hereNow=b.default.bind(this,u,V),this.whereNow=b.default.bind(this,u,I),this.getState=b.default.bind(this,u,F),this.setState=k.adaptStateChange.bind(k),this.grant=b.default.bind(this,u,Y),this.audit=b.default.bind(this,u,$),this.publish=b.default.bind(this,u,ee),this.fire=function(e,t){e.replicate=!1,e.storeInHistory=!1,n.publish(e,t)},this.history=b.default.bind(this,u,ne),this.fetchMessages=b.default.bind(this,u,ie),this.time=c,this.subscribe=k.adaptSubscribeChange.bind(k),this.unsubscribe=k.adaptUnsubscribeChange.bind(k),this.disconnect=k.disconnect.bind(k),this.reconnect=k.reconnect.bind(k),this.destroy=function(e){k.unsubscribeAll(e),k.disconnect()},this.stop=this.destroy,this.unsubscribeAll=k.unsubscribeAll.bind(k),this.getSubscribedChannels=k.getSubscribedChannels.bind(k),this.getSubscribedChannelGroups=k.getSubscribedChannelGroups.bind(k),this.encrypt=a.encrypt.bind(a),this.decrypt=a.decrypt.bind(a),this.getAuthKey=u.config.getAuthKey.bind(u.config),this.setAuthKey=u.config.setAuthKey.bind(u.config),this.setCipherKey=u.config.setCipherKey.bind(u.config),this.getUUID=u.config.getUUID.bind(u.config),this.setUUID=u.config.setUUID.bind(u.config),this.getFilterExpression=u.config.getFilterExpression.bind(u.config),this.setFilterExpression=u.config.setFilterExpression.bind(u.config)}return o(e,[{key:"getVersion",value:function(){return this._config.getVersion()}},{key:"networkDownDetected",value:function(){this._listenerManager.announceNetworkDown(),this._config.restore?this.disconnect():this.destroy(!0)}},{key:"networkUpDetected",value:function(){this._listenerManager.announceNetworkUp(),this.reconnect()}}],[{key:"generateUUID",value:function(){return u.default.v4()}}]),e}());de.OPERATIONS=le.default,de.CATEGORIES=fe.default,t.default=de,e.exports=t.default},function(e,t,n){var r=n(3),i=n(6),s=i;s.v1=r,s.v4=i,e.exports=s},function(e,t,n){function r(e,t,n){var r=t&&n||0,i=t||[];e=e||{};var o=void 0!==e.clockseq?e.clockseq:u,h=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:l+1,d=h-c+(f-l)/1e4;if(d<0&&void 0===e.clockseq&&(o=o+1&16383),(d<0||h>c)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=h,l=f,u=o,h+=122192928e5;var p=(1e4*(268435455&h)+f)%4294967296;i[r++]=p>>>24&255,i[r++]=p>>>16&255,i[r++]=p>>>8&255,i[r++]=255&p;var g=h/4294967296*1e4&268435455;i[r++]=g>>>8&255,i[r++]=255&g,i[r++]=g>>>24&15|16,i[r++]=g>>>16&255,i[r++]=o>>>8|128,i[r++]=255&o;for(var y=e.node||a,v=0;v<6;++v)i[r+v]=y[v];return t||s(i)}var i=n(4),s=n(5),o=i(),a=[1|o[0],o[1],o[2],o[3],o[4],o[5]],u=16383&(o[6]<<8|o[7]),c=0,l=0;e.exports=r},function(e,t){(function(t){var n,r=t.crypto||t.msCrypto;if(r&&r.getRandomValues){var i=new Uint8Array(16);n=function(){return r.getRandomValues(i),i}}if(!n){var s=new Array(16);n=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s}}e.exports=n}).call(t,function(){return this}())},function(e,t){function n(e,t){var n=t||0,i=r;return i[e[n++]]+i[e[n++]]+i[e[n++]]+i[e[n++]]+"-"+i[e[n++]]+i[e[n++]]+"-"+i[e[n++]]+i[e[n++]]+"-"+i[e[n++]]+i[e[n++]]+"-"+i[e[n++]]+i[e[n++]]+i[e[n++]]+i[e[n++]]+i[e[n++]]+i[e[n++]]}for(var r=[],i=0;i<256;++i)r[i]=(i+256).toString(16).substr(1);e.exports=n},function(e,t,n){function r(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var o=e.random||(e.rng||i)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var a=0;a<16;++a)t[r+a]=o[a];return t||s(o)}var i=n(4),s=n(5);e.exports=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(s),a=(n(8),function(){function e(t){var n=t.setup,i=t.db;r(this,e),this._db=i,this.instanceId="pn-"+o.default.v4(),this.secretKey=n.secretKey||n.secret_key,this.subscribeKey=n.subscribeKey||n.subscribe_key,this.publishKey=n.publishKey||n.publish_key,this.sdkFamily=n.sdkFamily,this.partnerId=n.partnerId,this.setAuthKey(n.authKey),this.setCipherKey(n.cipherKey),this.setFilterExpression(n.filterExpression),this.origin=n.origin||"pubsub.pubnub.com",this.secure=n.ssl||!1,this.restore=n.restore||!1,this.proxy=n.proxy,this.keepAlive=n.keepAlive,this.keepAliveSettings=n.keepAliveSettings,this.customEncrypt=n.customEncrypt,this.customDecrypt=n.customDecrypt,"undefined"!=typeof location&&"https:"===location.protocol&&(this.secure=!0),this.logVerbosity=n.logVerbosity||!1,this.suppressLeaveEvents=n.suppressLeaveEvents||!1,this.announceFailedHeartbeats=n.announceFailedHeartbeats||!0,this.announceSuccessfulHeartbeats=n.announceSuccessfulHeartbeats||!1,this.useInstanceId=n.useInstanceId||!1,this.useRequestId=n.useRequestId||!1,this.requestMessageCountThreshold=n.requestMessageCountThreshold,this.setTransactionTimeout(n.transactionalRequestTimeout||15e3),this.setSubscribeTimeout(n.subscribeRequestTimeout||31e4),this.setSendBeaconConfig(n.useSendBeacon||!0),this.setPresenceTimeout(n.presenceTimeout||300),n.heartbeatInterval&&this.setHeartbeatInterval(n.heartbeatInterval),this.setUUID(this._decideUUID(n.uuid))}return i(e,[{key:"getAuthKey",value:function(){return this.authKey}},{key:"setAuthKey",value:function(e){return this.authKey=e,this}},{key:"setCipherKey",value:function(e){return this.cipherKey=e,this}},{key:"getUUID",value:function(){return this.UUID}},{key:"setUUID",value:function(e){return this._db&&this._db.set&&this._db.set(this.subscribeKey+"uuid",e),this.UUID=e,this}},{key:"getFilterExpression",value:function(){return this.filterExpression}},{key:"setFilterExpression",value:function(e){return this.filterExpression=e,this}},{key:"getPresenceTimeout",value:function(){return this._presenceTimeout}},{key:"setPresenceTimeout",value:function(e){return this._presenceTimeout=e,this.setHeartbeatInterval(this._presenceTimeout/2-1),this}},{key:"getHeartbeatInterval",value:function(){return this._heartbeatInterval}},{key:"setHeartbeatInterval",value:function(e){return this._heartbeatInterval=e,this}},{key:"getSubscribeTimeout",value:function(){return this._subscribeRequestTimeout}},{key:"setSubscribeTimeout",value:function(e){return this._subscribeRequestTimeout=e,this}},{key:"getTransactionTimeout",value:function(){return this._transactionalRequestTimeout}},{key:"setTransactionTimeout",value:function(e){return this._transactionalRequestTimeout=e,this}},{key:"isSendBeaconEnabled",value:function(){return this._useSendBeacon}},{key:"setSendBeaconConfig",value:function(e){return this._useSendBeacon=e,this}},{key:"getVersion",value:function(){return"4.10.0"}},{key:"_decideUUID",value:function(e){return e||(this._db&&this._db.get&&this._db.get(this.subscribeKey+"uuid")?this._db.get(this.subscribeKey+"uuid"):"pn-"+o.default.v4())}}]),e}());t.default=a,e.exports=t.default},function(e,t){"use strict";e.exports={}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(7),a=(r(o),n(10)),u=r(a),c=function(){function e(t){var n=t.config;i(this,e),this._config=n,this._iv="0123456789012345",this._allowedKeyEncodings=["hex","utf8","base64","binary"],this._allowedKeyLengths=[128,256],this._allowedModes=["ecb","cbc"],this._defaultOptions={encryptKey:!0,keyEncoding:"utf8",keyLength:256,mode:"cbc"}}return s(e,[{key:"HMACSHA256",value:function(e){return u.default.HmacSHA256(e,this._config.secretKey).toString(u.default.enc.Base64)}},{key:"SHA256",value:function(e){return u.default.SHA256(e).toString(u.default.enc.Hex)}},{key:"_parseOptions",value:function(e){var t=e||{};return t.hasOwnProperty("encryptKey")||(t.encryptKey=this._defaultOptions.encryptKey),t.hasOwnProperty("keyEncoding")||(t.keyEncoding=this._defaultOptions.keyEncoding),t.hasOwnProperty("keyLength")||(t.keyLength=this._defaultOptions.keyLength),t.hasOwnProperty("mode")||(t.mode=this._defaultOptions.mode),-1===this._allowedKeyEncodings.indexOf(t.keyEncoding.toLowerCase())&&(t.keyEncoding=this._defaultOptions.keyEncoding),-1===this._allowedKeyLengths.indexOf(parseInt(t.keyLength,10))&&(t.keyLength=this._defaultOptions.keyLength),-1===this._allowedModes.indexOf(t.mode.toLowerCase())&&(t.mode=this._defaultOptions.mode),t}},{key:"_decodeKey",value:function(e,t){return"base64"===t.keyEncoding?u.default.enc.Base64.parse(e):"hex"===t.keyEncoding?u.default.enc.Hex.parse(e):e}},{key:"_getPaddedKey",value:function(e,t){return e=this._decodeKey(e,t),t.encryptKey?u.default.enc.Utf8.parse(this.SHA256(e).slice(0,32)):e}},{key:"_getMode",value:function(e){return"ecb"===e.mode?u.default.mode.ECB:u.default.mode.CBC}},{key:"_getIV",value:function(e){return"cbc"===e.mode?u.default.enc.Utf8.parse(this._iv):null}},{key:"encrypt",value:function(e,t,n){return this._config.customEncrypt?this._config.customEncrypt(e):this.pnEncrypt(e,t,n)}},{key:"decrypt",value:function(e,t,n){return this._config.customDecrypt?this._config.customDecrypt(e):this.pnDecrypt(e,t,n)}},{key:"pnEncrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),s=this._getPaddedKey(t||this._config.cipherKey,n);return u.default.AES.encrypt(e,s,{iv:r,mode:i}).ciphertext.toString(u.default.enc.Base64)||e}},{key:"pnDecrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),s=this._getPaddedKey(t||this._config.cipherKey,n);try{var o=u.default.enc.Base64.parse(e),a=u.default.AES.decrypt({ciphertext:o},s,{iv:r,mode:i}).toString(u.default.enc.Utf8);return JSON.parse(a)}catch(e){return null}}}]),e}();t.default=c,e.exports=t.default},function(e,t){"use strict";var n=n||function(e,t){var n={},r=n.lib={},i=function(){},s=r.Base={extend:function(e){i.prototype=this;var t=new i;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},o=r.WordArray=s.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=void 0!=t?t:4*e.length},toString:function(e){return(e||u).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes;if(e=e.sigBytes,this.clamp(),r%4)for(var i=0;i<e;i++)t[r+i>>>2]|=(n[i>>>2]>>>24-i%4*8&255)<<24-(r+i)%4*8;else if(65535<n.length)for(i=0;i<e;i+=4)t[r+i>>>2]=n[i>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=s.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(4294967296*e.random()|0);return new o.init(n,t)}}),a=n.enc={},u=a.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++){var i=t[r>>>2]>>>24-r%4*8&255;n.push((i>>>4).toString(16)),n.push((15&i).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new o.init(n,t/2)}},c=a.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++)n.push(String.fromCharCode(t[r>>>2]>>>24-r%4*8&255));return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new o.init(n,t)}},l=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},h=r.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,s=this.blockSize,a=i/(4*s),a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0);if(t=a*s,i=e.min(4*t,i),t){for(var u=0;u<t;u+=s)this._doProcessBlock(r,u);u=r.splice(0,t),n.sigBytes-=i}return new o.init(u,i)},clone:function(){var e=s.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});r.Hasher=h.extend({cfg:s.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new f.HMAC.init(e,n).finalize(t)}}});var f=n.algo={};return n}(Math);!function(e){for(var t=n,r=t.lib,i=r.WordArray,s=r.Hasher,r=t.algo,o=[],a=[],u=function(e){return 4294967296*(e-(0|e))|0},c=2,l=0;64>l;){var h;e:{h=c;for(var f=e.sqrt(h),d=2;d<=f;d++)if(!(h%d)){h=!1;break e}h=!0}h&&(8>l&&(o[l]=u(e.pow(c,.5))),a[l]=u(e.pow(c,1/3)),l++),c++}var p=[],r=r.SHA256=s.extend({_doReset:function(){this._hash=new i.init(o.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],s=n[2],o=n[3],u=n[4],c=n[5],l=n[6],h=n[7],f=0;64>f;f++){if(16>f)p[f]=0|e[t+f];else{var d=p[f-15],g=p[f-2];p[f]=((d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3)+p[f-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+p[f-16]}d=h+((u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25))+(u&c^~u&l)+a[f]+p[f],g=((r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22))+(r&i^r&s^i&s),h=l,l=c,c=u,u=o+d|0,o=s,s=i,i=r,r=d+g|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+s|0,n[3]=n[3]+o|0,n[4]=n[4]+u|0,n[5]=n[5]+c|0,n[6]=n[6]+l|0,n[7]=n[7]+h|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return n[i>>>5]|=128<<24-i%32,n[14+(i+64>>>9<<4)]=e.floor(r/4294967296),n[15+(i+64>>>9<<4)]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=s._createHelper(r),t.HmacSHA256=s._createHmacHelper(r)}(Math),function(){var e=n,t=e.enc.Utf8;e.algo.HMAC=e.lib.Base.extend({init:function(e,n){e=this._hasher=new e.init,"string"==typeof n&&(n=t.parse(n));var r=e.blockSize,i=4*r;n.sigBytes>i&&(n=e.finalize(n)),n.clamp();for(var s=this._oKey=n.clone(),o=this._iKey=n.clone(),a=s.words,u=o.words,c=0;c<r;c++)a[c]^=1549556828,u[c]^=909522486;s.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher;return e=t.finalize(e),t.reset(),t.finalize(this._oKey.clone().concat(e))}})}(),function(){var e=n,t=e.lib.WordArray;e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp(),e=[];for(var i=0;i<n;i+=3)for(var s=(t[i>>>2]>>>24-i%4*8&255)<<16|(t[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|t[i+2>>>2]>>>24-(i+2)%4*8&255,o=0;4>o&&i+.75*o<n;o++)e.push(r.charAt(s>>>6*(3-o)&63));if(t=r.charAt(64))for(;e.length%4;)e.push(t);return e.join("")},parse:function(e){var n=e.length,r=this._map,i=r.charAt(64);i&&-1!=(i=e.indexOf(i))&&(n=i);for(var i=[],s=0,o=0;o<n;o++)if(o%4){var a=r.indexOf(e.charAt(o-1))<<o%4*2,u=r.indexOf(e.charAt(o))>>>6-o%4*2;i[s>>>2]|=(a|u)<<24-s%4*8,s++}return t.create(i,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(e){function t(e,t,n,r,i,s,o){return((e=e+(t&n|~t&r)+i+o)<<s|e>>>32-s)+t}function r(e,t,n,r,i,s,o){return((e=e+(t&r|n&~r)+i+o)<<s|e>>>32-s)+t}function i(e,t,n,r,i,s,o){return((e=e+(t^n^r)+i+o)<<s|e>>>32-s)+t}function s(e,t,n,r,i,s,o){return((e=e+(n^(t|~r))+i+o)<<s|e>>>32-s)+t}for(var o=n,a=o.lib,u=a.WordArray,c=a.Hasher,a=o.algo,l=[],h=0;64>h;h++)l[h]=4294967296*e.abs(e.sin(h+1))|0;a=a.MD5=c.extend({_doReset:function(){this._hash=new u.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,n){for(var o=0;16>o;o++){var a=n+o,u=e[a];e[a]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}var o=this._hash.words,a=e[n+0],u=e[n+1],c=e[n+2],h=e[n+3],f=e[n+4],d=e[n+5],p=e[n+6],g=e[n+7],y=e[n+8],v=e[n+9],b=e[n+10],_=e[n+11],m=e[n+12],k=e[n+13],P=e[n+14],S=e[n+15],O=o[0],w=o[1],T=o[2],C=o[3],O=t(O,w,T,C,a,7,l[0]),C=t(C,O,w,T,u,12,l[1]),T=t(T,C,O,w,c,17,l[2]),w=t(w,T,C,O,h,22,l[3]),O=t(O,w,T,C,f,7,l[4]),C=t(C,O,w,T,d,12,l[5]),T=t(T,C,O,w,p,17,l[6]),w=t(w,T,C,O,g,22,l[7]),O=t(O,w,T,C,y,7,l[8]),C=t(C,O,w,T,v,12,l[9]),T=t(T,C,O,w,b,17,l[10]),w=t(w,T,C,O,_,22,l[11]),O=t(O,w,T,C,m,7,l[12]),C=t(C,O,w,T,k,12,l[13]),T=t(T,C,O,w,P,17,l[14]),w=t(w,T,C,O,S,22,l[15]),O=r(O,w,T,C,u,5,l[16]),C=r(C,O,w,T,p,9,l[17]),T=r(T,C,O,w,_,14,l[18]),w=r(w,T,C,O,a,20,l[19]),O=r(O,w,T,C,d,5,l[20]),C=r(C,O,w,T,b,9,l[21]),T=r(T,C,O,w,S,14,l[22]),w=r(w,T,C,O,f,20,l[23]),O=r(O,w,T,C,v,5,l[24]),C=r(C,O,w,T,P,9,l[25]),T=r(T,C,O,w,h,14,l[26]),w=r(w,T,C,O,y,20,l[27]),O=r(O,w,T,C,k,5,l[28]),C=r(C,O,w,T,c,9,l[29]),T=r(T,C,O,w,g,14,l[30]),w=r(w,T,C,O,m,20,l[31]),O=i(O,w,T,C,d,4,l[32]),C=i(C,O,w,T,y,11,l[33]),T=i(T,C,O,w,_,16,l[34]),w=i(w,T,C,O,P,23,l[35]),O=i(O,w,T,C,u,4,l[36]),C=i(C,O,w,T,f,11,l[37]),T=i(T,C,O,w,g,16,l[38]),w=i(w,T,C,O,b,23,l[39]),O=i(O,w,T,C,k,4,l[40]),C=i(C,O,w,T,a,11,l[41]),T=i(T,C,O,w,h,16,l[42]),w=i(w,T,C,O,p,23,l[43]),O=i(O,w,T,C,v,4,l[44]),C=i(C,O,w,T,m,11,l[45]),T=i(T,C,O,w,S,16,l[46]),w=i(w,T,C,O,c,23,l[47]),O=s(O,w,T,C,a,6,l[48]),C=s(C,O,w,T,g,10,l[49]),T=s(T,C,O,w,P,15,l[50]),w=s(w,T,C,O,d,21,l[51]),O=s(O,w,T,C,m,6,l[52]),C=s(C,O,w,T,h,10,l[53]),T=s(T,C,O,w,b,15,l[54]),w=s(w,T,C,O,u,21,l[55]),O=s(O,w,T,C,y,6,l[56]),C=s(C,O,w,T,S,10,l[57]),T=s(T,C,O,w,p,15,l[58]),w=s(w,T,C,O,k,21,l[59]),O=s(O,w,T,C,f,6,l[60]),C=s(C,O,w,T,_,10,l[61]),T=s(T,C,O,w,c,15,l[62]),w=s(w,T,C,O,v,21,l[63]);o[0]=o[0]+O|0,o[1]=o[1]+w|0,o[2]=o[2]+T|0,o[3]=o[3]+C|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;n[i>>>5]|=128<<24-i%32;var s=e.floor(r/4294967296);for(n[15+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n[14+(i+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(n.length+1),this._process(),t=this._hash,n=t.words,r=0;4>r;r++)i=n[r],n[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8);return t},clone:function(){var e=c.clone.call(this);return e._hash=this._hash.clone(),e}}),o.MD5=c._createHelper(a),o.HmacMD5=c._createHmacHelper(a)}(Math),function(){var e=n,t=e.lib,r=t.Base,i=t.WordArray,t=e.algo,s=t.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:t.MD5,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=n.hasher.create(),s=i.create(),o=s.words,a=n.keySize,n=n.iterations;o.length<a;){u&&r.update(u);var u=r.update(e).finalize(t);r.reset();for(var c=1;c<n;c++)u=r.finalize(u),r.reset();s.concat(u)}return s.sigBytes=4*a,s}});e.EvpKDF=function(e,t,n){return s.create(n).compute(e,t)}}(),n.lib.Cipher||function(e){var t=n,r=t.lib,i=r.Base,s=r.WordArray,o=r.BufferedBlockAlgorithm,a=t.enc.Base64,u=t.algo.EvpKDF,c=r.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(t,n,r){return("string"==typeof n?g:p).encrypt(e,t,n,r)},decrypt:function(t,n,r){return("string"==typeof n?g:p).decrypt(e,t,n,r)}}}});r.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var l=t.mode={},h=function(e,t,n){var r=this._iv;r?this._iv=void 0:r=this._prevBlock;for(var i=0;i<n;i++)e[t+i]^=r[i]},f=(r.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}})).extend();f.Encryptor=f.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize;h.call(this,e,t,r),n.encryptBlock(e,t),this._prevBlock=e.slice(t,t+r)}}),f.Decryptor=f.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,i=e.slice(t,t+r);n.decryptBlock(e,t),h.call(this,e,t,r),this._prevBlock=i}}),l=l.CBC=f,f=(t.pad={}).Pkcs7={pad:function(e,t){for(var n=4*t,n=n-e.sigBytes%n,r=n<<24|n<<16|n<<8|n,i=[],o=0;o<n;o+=4)i.push(r);n=s.create(i,n),e.concat(n)},unpad:function(e){e.sigBytes-=255&e.words[e.sigBytes-1>>>2]}},r.BlockCipher=c.extend({cfg:c.cfg.extend({mode:l,padding:f}),reset:function(){c.reset.call(this);var e=this.cfg,t=e.iv,e=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=e.createEncryptor;else n=e.createDecryptor,this._minBufferSize=1;this._mode=n.call(e,this,t&&t.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else t=this._process(!0),e.unpad(t);return t},blockSize:4});var d=r.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),l=(t.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext;return e=e.salt,(e?s.create([1398893684,1701076831]).concat(e).concat(t):t).toString(a)},parse:function(e){e=a.parse(e);var t=e.words;if(1398893684==t[0]&&1701076831==t[1]){var n=s.create(t.slice(2,4));t.splice(0,4),e.sigBytes-=16}return d.create({ciphertext:e,salt:n})}},p=r.SerializableCipher=i.extend({cfg:i.extend({format:l}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r);return t=i.finalize(t),i=i.cfg,d.create({ciphertext:t,key:n,iv:i.iv,algorithm:e,mode:i.mode,padding:i.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),t=(t.kdf={}).OpenSSL={execute:function(e,t,n,r){return r||(r=s.random(8)),e=u.create({keySize:t+n}).compute(e,r),n=s.create(e.words.slice(t),4*n),e.sigBytes=4*t,d.create({key:e,iv:n,salt:r})}},g=r.PasswordBasedCipher=p.extend({cfg:p.cfg.extend({kdf:t}),encrypt:function(e,t,n,r){return r=this.cfg.extend(r),n=r.kdf.execute(n,e.keySize,e.ivSize),r.iv=n.iv,e=p.encrypt.call(this,e,t,n.key,r),e.mixIn(n),e},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),n=r.kdf.execute(n,e.keySize,e.ivSize,t.salt),r.iv=n.iv,p.decrypt.call(this,e,t,n.key,r)}})}(),function(){for(var e=n,t=e.lib.BlockCipher,r=e.algo,i=[],s=[],o=[],a=[],u=[],c=[],l=[],h=[],f=[],d=[],p=[],g=0;256>g;g++)p[g]=128>g?g<<1:g<<1^283;for(var y=0,v=0,g=0;256>g;g++){var b=v^v<<1^v<<2^v<<3^v<<4,b=b>>>8^255&b^99;i[y]=b,s[b]=y;var _=p[y],m=p[_],k=p[m],P=257*p[b]^16843008*b;o[y]=P<<24|P>>>8,a[y]=P<<16|P>>>16,u[y]=P<<8|P>>>24,c[y]=P,P=16843009*k^65537*m^257*_^16843008*y,l[b]=P<<24|P>>>8,h[b]=P<<16|P>>>16,f[b]=P<<8|P>>>24,d[b]=P,y?(y=_^p[p[p[k^_]]],v^=p[p[v]]):y=v=1}var S=[0,1,2,4,8,16,32,64,128,27,54],r=r.AES=t.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes/4,e=4*((this._nRounds=n+6)+1),r=this._keySchedule=[],s=0;s<e;s++)if(s<n)r[s]=t[s];else{var o=r[s-1];s%n?6<n&&4==s%n&&(o=i[o>>>24]<<24|i[o>>>16&255]<<16|i[o>>>8&255]<<8|i[255&o]):(o=o<<8|o>>>24,o=i[o>>>24]<<24|i[o>>>16&255]<<16|i[o>>>8&255]<<8|i[255&o],o^=S[s/n|0]<<24),r[s]=r[s-n]^o}for(t=this._invKeySchedule=[],n=0;n<e;n++)s=e-n,o=n%4?r[s]:r[s-4],t[n]=4>n||4>=s?o:l[i[o>>>24]]^h[i[o>>>16&255]]^f[i[o>>>8&255]]^d[i[255&o]]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,o,a,u,c,i)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,l,h,f,d,s),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,s,o,a){for(var u=this._nRounds,c=e[t]^n[0],l=e[t+1]^n[1],h=e[t+2]^n[2],f=e[t+3]^n[3],d=4,p=1;p<u;p++)var g=r[c>>>24]^i[l>>>16&255]^s[h>>>8&255]^o[255&f]^n[d++],y=r[l>>>24]^i[h>>>16&255]^s[f>>>8&255]^o[255&c]^n[d++],v=r[h>>>24]^i[f>>>16&255]^s[c>>>8&255]^o[255&l]^n[d++],f=r[f>>>24]^i[c>>>16&255]^s[l>>>8&255]^o[255&h]^n[d++],c=g,l=y,h=v;g=(a[c>>>24]<<24|a[l>>>16&255]<<16|a[h>>>8&255]<<8|a[255&f])^n[d++],y=(a[l>>>24]<<24|a[h>>>16&255]<<16|a[f>>>8&255]<<8|a[255&c])^n[d++],v=(a[h>>>24]<<24|a[f>>>16&255]<<16|a[c>>>8&255]<<8|a[255&l])^n[d++],f=(a[f>>>24]<<24|a[c>>>16&255]<<16|a[l>>>8&255]<<8|a[255&h])^n[d++],e[t]=g,e[t+1]=y,e[t+2]=v,e[t+3]=f},keySize:8});e.AES=t._createHelper(r)}(),n.mode.ECB=function(){var e=n.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),e.Decryptor=e.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),e}(),e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(9),a=(r(o),n(7)),u=(r(a),n(12)),c=(r(u),n(14)),l=r(c),h=n(17),f=r(h),d=(n(8),n(13)),p=r(d),g=function(){function e(t){var n=t.subscribeEndpoint,r=t.leaveEndpoint,s=t.heartbeatEndpoint,o=t.setStateEndpoint,a=t.timeEndpoint,u=t.config,c=t.crypto,h=t.listenerManager;i(this,e),this._listenerManager=h,this._config=u,this._leaveEndpoint=r,this._heartbeatEndpoint=s,this._setStateEndpoint=o,this._subscribeEndpoint=n,this._crypto=c,this._channels={},this._presenceChannels={},this._channelGroups={},this._presenceChannelGroups={},this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[],this._currentTimetoken=0,this._lastTimetoken=0,this._storedTimetoken=null,this._subscriptionStatusAnnounced=!1,this._reconnectionManager=new l.default({timeEndpoint:a})}return s(e,[{key:"adaptStateChange",value:function(e,t){var n=this,r=e.state,i=e.channels,s=void 0===i?[]:i,o=e.channelGroups,a=void 0===o?[]:o;return s.forEach(function(e){e in n._channels&&(n._channels[e].state=r)}),a.forEach(function(e){e in n._channelGroups&&(n._channelGroups[e].state=r)}),this._setStateEndpoint({state:r,channels:s,channelGroups:a},t)}},{key:"adaptSubscribeChange",value:function(e){var t=this,n=e.timetoken,r=e.channels,i=void 0===r?[]:r,s=e.channelGroups,o=void 0===s?[]:s,a=e.withPresence,u=void 0!==a&&a;if(!this._config.subscribeKey||""===this._config.subscribeKey)return void(console&&console.log&&console.log("subscribe key missing; aborting subscribe"));n&&(this._lastTimetoken=this._currentTimetoken,this._currentTimetoken=n),"0"!==this._currentTimetoken&&(this._storedTimetoken=this._currentTimetoken,this._currentTimetoken=0),i.forEach(function(e){t._channels[e]={state:{}},u&&(t._presenceChannels[e]={}),t._pendingChannelSubscriptions.push(e)}),o.forEach(function(e){t._channelGroups[e]={state:{}},u&&(t._presenceChannelGroups[e]={}),t._pendingChannelGroupSubscriptions.push(e)}),this._subscriptionStatusAnnounced=!1,this.reconnect()}},{key:"adaptUnsubscribeChange",value:function(e,t){
	var n=this,r=e.channels,i=void 0===r?[]:r,s=e.channelGroups,o=void 0===s?[]:s;i.forEach(function(e){e in n._channels&&delete n._channels[e],e in n._presenceChannels&&delete n._presenceChannels[e]}),o.forEach(function(e){e in n._channelGroups&&delete n._channelGroups[e],e in n._presenceChannelGroups&&delete n._channelGroups[e]}),!1!==this._config.suppressLeaveEvents||t||this._leaveEndpoint({channels:i,channelGroups:o},function(e){e.affectedChannels=i,e.affectedChannelGroups=o,e.currentTimetoken=n._currentTimetoken,e.lastTimetoken=n._lastTimetoken,n._listenerManager.announceStatus(e)}),0===Object.keys(this._channels).length&&0===Object.keys(this._presenceChannels).length&&0===Object.keys(this._channelGroups).length&&0===Object.keys(this._presenceChannelGroups).length&&(this._lastTimetoken=0,this._currentTimetoken=0,this._storedTimetoken=null,this._region=null,this._reconnectionManager.stopPolling()),this.reconnect()}},{key:"unsubscribeAll",value:function(e){this.adaptUnsubscribeChange({channels:this.getSubscribedChannels(),channelGroups:this.getSubscribedChannelGroups()},e)}},{key:"getSubscribedChannels",value:function(){return Object.keys(this._channels)}},{key:"getSubscribedChannelGroups",value:function(){return Object.keys(this._channelGroups)}},{key:"reconnect",value:function(){this._startSubscribeLoop(),this._registerHeartbeatTimer()}},{key:"disconnect",value:function(){this._stopSubscribeLoop(),this._stopHeartbeatTimer(),this._reconnectionManager.stopPolling()}},{key:"_registerHeartbeatTimer",value:function(){this._stopHeartbeatTimer(),this._performHeartbeatLoop(),this._heartbeatTimer=setInterval(this._performHeartbeatLoop.bind(this),1e3*this._config.getHeartbeatInterval())}},{key:"_stopHeartbeatTimer",value:function(){this._heartbeatTimer&&(clearInterval(this._heartbeatTimer),this._heartbeatTimer=null)}},{key:"_performHeartbeatLoop",value:function(){var e=this,t=Object.keys(this._channels),n=Object.keys(this._channelGroups),r={};if(0!==t.length||0!==n.length){t.forEach(function(t){var n=e._channels[t].state;Object.keys(n).length&&(r[t]=n)}),n.forEach(function(t){var n=e._channelGroups[t].state;Object.keys(n).length&&(r[t]=n)});var i=function(t){t.error&&e._config.announceFailedHeartbeats&&e._listenerManager.announceStatus(t),!t.error&&e._config.announceSuccessfulHeartbeats&&e._listenerManager.announceStatus(t)};this._heartbeatEndpoint({channels:t,channelGroups:n,state:r},i.bind(this))}}},{key:"_startSubscribeLoop",value:function(){this._stopSubscribeLoop();var e=[],t=[];if(Object.keys(this._channels).forEach(function(t){return e.push(t)}),Object.keys(this._presenceChannels).forEach(function(t){return e.push(t+"-pnpres")}),Object.keys(this._channelGroups).forEach(function(e){return t.push(e)}),Object.keys(this._presenceChannelGroups).forEach(function(e){return t.push(e+"-pnpres")}),0!==e.length||0!==t.length){var n={channels:e,channelGroups:t,timetoken:this._currentTimetoken,filterExpression:this._config.filterExpression,region:this._region};this._subscribeCall=this._subscribeEndpoint(n,this._processSubscribeResponse.bind(this))}}},{key:"_processSubscribeResponse",value:function(e,t){var n=this;if(e.error)return void(e.category===p.default.PNTimeoutCategory?this._startSubscribeLoop():e.category===p.default.PNNetworkIssuesCategory?(this.disconnect(),this._reconnectionManager.onReconnection(function(){n.reconnect(),n._subscriptionStatusAnnounced=!0;var t={category:p.default.PNReconnectedCategory,operation:e.operation,lastTimetoken:n._lastTimetoken,currentTimetoken:n._currentTimetoken};n._listenerManager.announceStatus(t)}),this._reconnectionManager.startPolling(),this._listenerManager.announceStatus(e)):e.category===p.default.PNBadRequestCategory?(this._stopHeartbeatTimer(),this._listenerManager.announceStatus(e)):this._listenerManager.announceStatus(e));if(this._storedTimetoken?(this._currentTimetoken=this._storedTimetoken,this._storedTimetoken=null):(this._lastTimetoken=this._currentTimetoken,this._currentTimetoken=t.metadata.timetoken),!this._subscriptionStatusAnnounced){var r={};r.category=p.default.PNConnectedCategory,r.operation=e.operation,r.affectedChannels=this._pendingChannelSubscriptions,r.subscribedChannels=this.getSubscribedChannels(),r.affectedChannelGroups=this._pendingChannelGroupSubscriptions,r.lastTimetoken=this._lastTimetoken,r.currentTimetoken=this._currentTimetoken,this._subscriptionStatusAnnounced=!0,this._listenerManager.announceStatus(r),this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[]}var i=t.messages||[],s=this._config.requestMessageCountThreshold;if(s&&i.length>=s){var o={};o.category=p.default.PNRequestMessageCountExceededCategory,o.operation=e.operation,this._listenerManager.announceStatus(o)}i.forEach(function(e){var t=e.channel,r=e.subscriptionMatch,i=e.publishMetaData;if(t===r&&(r=null),f.default.endsWith(e.channel,"-pnpres")){var s={};s.channel=null,s.subscription=null,s.actualChannel=null!=r?t:null,s.subscribedChannel=null!=r?r:t,t&&(s.channel=t.substring(0,t.lastIndexOf("-pnpres"))),r&&(s.subscription=r.substring(0,r.lastIndexOf("-pnpres"))),s.action=e.payload.action,s.state=e.payload.data,s.timetoken=i.publishTimetoken,s.occupancy=e.payload.occupancy,s.uuid=e.payload.uuid,s.timestamp=e.payload.timestamp,e.payload.join&&(s.join=e.payload.join),e.payload.leave&&(s.leave=e.payload.leave),e.payload.timeout&&(s.timeout=e.payload.timeout),n._listenerManager.announcePresence(s)}else{var o={};o.channel=null,o.subscription=null,o.actualChannel=null!=r?t:null,o.subscribedChannel=null!=r?r:t,o.channel=t,o.subscription=r,o.timetoken=i.publishTimetoken,o.publisher=e.issuingClientId,e.userMetadata&&(o.userMetadata=e.userMetadata),n._config.cipherKey?o.message=n._crypto.decrypt(e.payload):o.message=e.payload,n._listenerManager.announceMessage(o)}}),this._region=t.metadata.region,this._startSubscribeLoop()}},{key:"_stopSubscribeLoop",value:function(){this._subscribeCall&&(this._subscribeCall.abort(),this._subscribeCall=null)}}]),e}();t.default=g,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=(n(8),n(13)),o=function(e){return e&&e.__esModule?e:{default:e}}(s),a=function(){function e(){r(this,e),this._listeners=[]}return i(e,[{key:"addListener",value:function(e){this._listeners.push(e)}},{key:"removeListener",value:function(e){var t=[];this._listeners.forEach(function(n){n!==e&&t.push(n)}),this._listeners=t}},{key:"removeAllListeners",value:function(){this._listeners=[]}},{key:"announcePresence",value:function(e){this._listeners.forEach(function(t){t.presence&&t.presence(e)})}},{key:"announceStatus",value:function(e){this._listeners.forEach(function(t){t.status&&t.status(e)})}},{key:"announceMessage",value:function(e){this._listeners.forEach(function(t){t.message&&t.message(e)})}},{key:"announceNetworkUp",value:function(){var e={};e.category=o.default.PNNetworkUpCategory,this.announceStatus(e)}},{key:"announceNetworkDown",value:function(){var e={};e.category=o.default.PNNetworkDownCategory,this.announceStatus(e)}}]),e}();t.default=a,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PNNetworkUpCategory:"PNNetworkUpCategory",PNNetworkDownCategory:"PNNetworkDownCategory",PNNetworkIssuesCategory:"PNNetworkIssuesCategory",PNTimeoutCategory:"PNTimeoutCategory",PNBadRequestCategory:"PNBadRequestCategory",PNAccessDeniedCategory:"PNAccessDeniedCategory",PNUnknownCategory:"PNUnknownCategory",PNReconnectedCategory:"PNReconnectedCategory",PNConnectedCategory:"PNConnectedCategory",PNRequestMessageCountExceededCategory:"PNRequestMessageCountExceededCategory"},e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(15),o=(function(e){e&&e.__esModule}(s),n(8),function(){function e(t){var n=t.timeEndpoint;r(this,e),this._timeEndpoint=n}return i(e,[{key:"onReconnection",value:function(e){this._reconnectionCallback=e}},{key:"startPolling",value:function(){this._timeTimer=setInterval(this._performTimeLoop.bind(this),3e3)}},{key:"stopPolling",value:function(){clearInterval(this._timeTimer)}},{key:"_performTimeLoop",value:function(){var e=this;this._timeEndpoint(function(t){t.error||(clearInterval(e._timeTimer),e._reconnectionCallback())})}}]),e}());t.default=o,e.exports=t.default},function(e,t,n){"use strict";function r(){return h.default.PNTimeOperation}function i(){return"/time/0"}function s(e){return e.config.getTransactionTimeout()}function o(){return{}}function a(){return!1}function u(e,t){return{timetoken:t[0]}}function c(){}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.getURL=i,t.getRequestTimeout=s,t.prepareParams=o,t.isAuthSupported=a,t.handleResponse=u,t.validateParams=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PNTimeOperation:"PNTimeOperation",PNHistoryOperation:"PNHistoryOperation",PNFetchMessagesOperation:"PNFetchMessagesOperation",PNSubscribeOperation:"PNSubscribeOperation",PNUnsubscribeOperation:"PNUnsubscribeOperation",PNPublishOperation:"PNPublishOperation",PNPushNotificationEnabledChannelsOperation:"PNPushNotificationEnabledChannelsOperation",PNRemoveAllPushNotificationsOperation:"PNRemoveAllPushNotificationsOperation",PNWhereNowOperation:"PNWhereNowOperation",PNSetStateOperation:"PNSetStateOperation",PNHereNowOperation:"PNHereNowOperation",PNGetStateOperation:"PNGetStateOperation",PNHeartbeatOperation:"PNHeartbeatOperation",PNChannelGroupsOperation:"PNChannelGroupsOperation",PNRemoveGroupOperation:"PNRemoveGroupOperation",PNChannelsForGroupOperation:"PNChannelsForGroupOperation",PNAddChannelsToGroupOperation:"PNAddChannelsToGroupOperation",PNRemoveChannelsFromGroupOperation:"PNRemoveChannelsFromGroupOperation",PNAccessManagerGrant:"PNAccessManagerGrant",PNAccessManagerAudit:"PNAccessManagerAudit"},e.exports=t.default},function(e,t){"use strict";function n(e){var t=[];return Object.keys(e).forEach(function(e){return t.push(e)}),t}function r(e){return encodeURIComponent(e).replace(/[!~*'()]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(e){return n(e).sort()}function s(e){return i(e).map(function(t){return t+"="+r(e[t])}).join("&")}function o(e,t){return-1!==e.indexOf(t,this.length-t.length)}function a(){var e=void 0,t=void 0;return{promise:new Promise(function(n,r){e=n,t=r}),reject:t,fulfill:e}}e.exports={signPamFromParams:s,endsWith:o,createPromise:a,encodeString:r}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return e.type=t,e.error=!0,e}function u(e){return a({message:e},"validationError")}function c(e,t,n){return e.usePost&&e.usePost(t,n)?e.postURL(t,n):e.getURL(t,n)}function l(e){var t="PubNub-JS-"+e.sdkFamily;return e.partnerId&&(t+="-"+e.partnerId),t+="/"+e.getVersion()}function h(e,t,n){var r=e.config,i=e.crypto;n.timestamp=Math.floor((new Date).getTime()/1e3);var s=r.subscribeKey+"\n"+r.publishKey+"\n"+t+"\n";s+=g.default.signPamFromParams(n);var o=i.HMACSHA256(s);o=o.replace(/\+/g,"-"),o=o.replace(/\//g,"_"),n.signature=o}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.networking,r=e.config,i=null,s=null,o={};t.getOperation()===b.default.PNTimeOperation||t.getOperation()===b.default.PNChannelGroupsOperation?i=arguments.length<=2?void 0:arguments[2]:(o=arguments.length<=2?void 0:arguments[2],i=arguments.length<=3?void 0:arguments[3]),"undefined"==typeof Promise||i||(s=g.default.createPromise());var a=t.validateParams(e,o);if(!a){var f=t.prepareParams(e,o),p=c(t,e,o),y=void 0,v={url:p,operation:t.getOperation(),timeout:t.getRequestTimeout(e)};f.uuid=r.UUID,f.pnsdk=l(r),r.useInstanceId&&(f.instanceid=r.instanceId),r.useRequestId&&(f.requestid=d.default.v4()),t.isAuthSupported()&&r.getAuthKey()&&(f.auth=r.getAuthKey()),r.secretKey&&h(e,p,f);var m=function(n,r){if(n.error)return void(i?i(n):s&&s.reject(new _("PubNub call failed, check status for details",n)));var a=t.handleResponse(e,r,o);i?i(n,a):s&&s.fulfill(a)};if(t.usePost&&t.usePost(e,o)){var k=t.postPayload(e,o);y=n.POST(f,k,v,m)}else y=n.GET(f,v,m);return t.getOperation()===b.default.PNSubscribeOperation?y:s?s.promise:void 0}return i?i(u(a)):s?(s.reject(new _("Validation failed, check status for details",u(a))),s.promise):void 0};var f=n(2),d=r(f),p=(n(8),n(17)),g=r(p),y=n(7),v=(r(y),n(16)),b=r(v),_=function(e){function t(e,n){i(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.name=r.constructor.name,r.status=n,r.message=e,r}return o(t,e),t}(Error);e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNAddChannelsToGroupOperation}function s(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channels;return{add:(void 0===n?[]:n).join(",")}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNRemoveChannelsFromGroupOperation}function s(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channels;return{remove:(void 0===n?[]:n).join(",")}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNRemoveGroupOperation}function s(e,t){var n=t.channelGroup,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)+"/remove"}function a(){return!0}function u(e){return e.config.getTransactionTimeout()}function c(){return{}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.isAuthSupported=a,t.getRequestTimeout=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(){return h.default.PNChannelGroupsOperation}function i(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function s(e){return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group"}function o(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(){return{}}function c(e,t){return{groups:t.payload.groups}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNChannelsForGroupOperation}function s(e,t){var n=t.channelGroup,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel Group"}function o(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(){return{}}function l(e,t){return{channels:t.payload.channels}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(){return h.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=t.channels,s=e.config;return n?r?i&&0!==i.length?s.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function o(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(e,t){var n=t.pushGateway,r=t.channels;return{type:n,add:(void 0===r?[]:r).join(",")}}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return h.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=t.channels,s=e.config;return n?r?i&&0!==i.length?s.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function o(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(e,t){var n=t.pushGateway,r=t.channels;return{type:n,remove:(void 0===r?[]:r).join(",")}}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return h.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=e.config;return n?r?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function o(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(e,t){return{type:t.pushGateway}}function c(e,t){return{channels:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return h.default.PNRemoveAllPushNotificationsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=e.config;return n?r?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function s(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n+"/remove"}function o(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(e,t){return{type:t.pushGateway}}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNUnsubscribeOperation}function s(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(s)+"/leave"}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};return r.length>0&&(i["channel-group"]=r.join(",")),i}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(){return h.default.PNWhereNowOperation}function i(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function s(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r;return"/v2/presence/sub-key/"+n.subscribeKey+"/uuid/"+i}function o(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(){return{}}function c(e,t){return{channels:t.payload.channels}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNHeartbeatOperation}function s(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(s)+"/heartbeat"}function a(){return!0}function u(e){return e.config.getTransactionTimeout()}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.state,s=void 0===i?{}:i,o=e.config,a={};return r.length>0&&(a["channel-group"]=r.join(",")),a.state=JSON.stringify(s),a.heartbeat=o.getPresenceTimeout(),a}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.isAuthSupported=a,t.getRequestTimeout=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNGetStateOperation}function s(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r,s=t.channels,o=void 0===s?[]:s,a=o.length>0?o.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(a)+"/uuid/"+i}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};return r.length>0&&(i["channel-group"]=r.join(",")),i}function l(e,t,n){var r=n.channels,i=void 0===r?[]:r,s=n.channelGroups,o=void 0===s?[]:s,a={};return 1===i.length&&0===o.length?a[i[0]]=t.payload:a=t.payload,{channels:a}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNSetStateOperation}function s(e,t){var n=e.config,r=t.state,i=t.channels,s=void 0===i?[]:i,o=t.channelGroups,a=void 0===o?[]:o;return r?n.subscribeKey?0===s.length&&0===a.length?"Please provide a list of channels and/or channel-groups":void 0:"Missing Subscribe Key":"Missing State"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(s)+"/uuid/"+n.UUID+"/data"}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.state,r=t.channelGroups,i=void 0===r?[]:r,s={};return s.state=JSON.stringify(n),i.length>0&&(s["channel-group"]=i.join(",")),s}function l(e,t){return{state:t.payload}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNHereNowOperation}function s(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=t.channelGroups,o=void 0===s?[]:s,a="/v2/presence/sub-key/"+n.subscribeKey;if(i.length>0||o.length>0){var u=i.length>0?i.join(","):",";a+="/channel/"+p.default.encodeString(u)}return a}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.includeUUIDs,s=void 0===i||i,o=t.includeState,a=void 0!==o&&o,u={};return s||(u.disable_uuids=1),a&&(u.state=1),r.length>0&&(u["channel-group"]=r.join(",")),u}function l(e,t,n){var r=n.channels,i=void 0===r?[]:r,s=n.channelGroups,o=void 0===s?[]:s,a=n.includeUUIDs,u=void 0===a||a,c=n.includeState,l=void 0!==c&&c;return i.length>1||o.length>0||0===o.length&&0===i.length?function(){var e={};return e.totalChannels=t.payload.total_channels,e.totalOccupancy=t.payload.total_occupancy,e.channels={},Object.keys(t.payload.channels).forEach(function(n){var r=t.payload.channels[n],i=[];return e.channels[n]={occupants:i,name:n,occupancy:r.occupancy},u&&r.uuids.forEach(function(e){l?i.push({state:e.state,uuid:e.uuid}):i.push({state:null,uuid:e})}),e}),e}():function(){var e={},n=[];return e.totalChannels=1,e.totalOccupancy=t.occupancy,e.channels={},e.channels[i[0]]={occupants:n,name:i[0],occupancy:t.occupancy},u&&t.uuids.forEach(function(e){l?n.push({state:e.state,uuid:e.uuid}):n.push({state:null,uuid:e})}),e}()}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(){return h.default.PNAccessManagerAudit}function i(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function s(e){return"/v2/auth/audit/sub-key/"+e.config.subscribeKey}function o(e){return e.config.getTransactionTimeout()}function a(){return!1}function u(e,t){var n=t.channel,r=t.channelGroup,i=t.authKeys,s=void 0===i?[]:i,o={};return n&&(o.channel=n),r&&(o["channel-group"]=r),s.length>0&&(o.auth=s.join(",")),o}function c(e,t){return t.payload}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return h.default.PNAccessManagerGrant}function i(e){var t=e.config;return t.subscribeKey?t.publishKey?t.secretKey?void 0:"Missing Secret Key":"Missing Publish Key":"Missing Subscribe Key"}function s(e){return"/v2/auth/grant/sub-key/"+e.config.subscribeKey}function o(e){return e.config.getTransactionTimeout()}function a(){return!1}function u(e,t){var n=t.channels,r=void 0===n?[]:n,i=t.channelGroups,s=void 0===i?[]:i,o=t.ttl,a=t.read,u=void 0!==a&&a,c=t.write,l=void 0!==c&&c,h=t.manage,f=void 0!==h&&h,d=t.authKeys,p=void 0===d?[]:d,g={};return g.r=u?"1":"0",g.w=l?"1":"0",g.m=f?"1":"0",r.length>0&&(g.channel=r.join(",")),s.length>0&&(g["channel-group"]=s.join(",")),p.length>0&&(g.auth=p.join(",")),(o||0===o)&&(g.ttl=o),g}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=s,t.getRequestTimeout=o,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function s(){return v.default.PNPublishOperation}function o(e,t){var n=e.config,r=t.message;return t.channel?r?n.subscribeKey?void 0:"Missing Subscribe Key":"Missing Message":"Missing Channel"}function a(e,t){var n=t.sendByPost;return void 0!==n&&n}function u(e,t){var n=e.config,r=t.channel,s=t.message,o=i(e,s);return"/publish/"+n.publishKey+"/"+n.subscribeKey+"/0/"+_.default.encodeString(r)+"/0/"+_.default.encodeString(o)}function c(e,t){var n=e.config,r=t.channel;return"/publish/"+n.publishKey+"/"+n.subscribeKey+"/0/"+_.default.encodeString(r)+"/0"}function l(e){return e.config.getTransactionTimeout()}function h(){return!0}function f(e,t){return i(e,t.message)}function d(e,t){var n=t.meta,r=t.replicate,i=void 0===r||r,s=t.storeInHistory,o=t.ttl,a={};return null!=s&&(a.store=s?"1":"0"),o&&(a.ttl=o),!1===i&&(a.norep="true"),n&&"object"===(void 0===n?"undefined":g(n))&&(a.meta=JSON.stringify(n)),a}function p(e,t){return{timetoken:t[2]}}Object.defineProperty(t,"__esModule",{value:!0});var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.getOperation=s,t.validateParams=o,t.usePost=a,t.getURL=u,t.postURL=c,t.getRequestTimeout=l,t.isAuthSupported=h,t.postPayload=f,t.prepareParams=d,t.handleResponse=p;var y=(n(8),n(16)),v=r(y),b=n(17),_=r(b)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.config,r=e.crypto;if(!n.cipherKey)return t;try{return r.decrypt(t)}catch(e){return t}}function s(){return d.default.PNHistoryOperation}function o(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channel"}function a(e,t){var n=t.channel;return"/v2/history/sub-key/"+e.config.subscribeKey+"/channel/"+g.default.encodeString(n)}function u(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){var n=t.start,r=t.end,i=t.reverse,s=t.count,o=void 0===s?100:s,a=t.stringifiedTimeToken,u=void 0!==a&&a,c={include_token:"true"};return c.count=o,n&&(c.start=n),r&&(c.end=r),u&&(c.string_message_token="true"),null!=i&&(c.reverse=i.toString()),c}function h(e,t){var n={messages:[],startTimeToken:t[1],endTimeToken:t[2]};return t[0].forEach(function(t){var r={timetoken:t.timetoken,entry:i(e,t.message)};n.messages.push(r)}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=s,t.validateParams=o,t.getURL=a,t.getRequestTimeout=u,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=h;var f=(n(8),
	n(16)),d=r(f),p=n(17),g=r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.config,r=e.crypto;if(!n.cipherKey)return t;try{return r.decrypt(t)}catch(e){return t}}function s(){return d.default.PNFetchMessagesOperation}function o(e,t){var n=t.channels,r=e.config;return n&&0!==n.length?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channels"}function a(e,t){var n=t.channels,r=void 0===n?[]:n,i=e.config,s=r.length>0?r.join(","):",";return"/v3/history/sub-key/"+i.subscribeKey+"/channel/"+g.default.encodeString(s)}function u(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){var n=t.start,r=t.end,i=t.count,s={};return i&&(s.max=i),n&&(s.start=n),r&&(s.end=r),s}function h(e,t){var n={channels:{}};return Object.keys(t.channels||{}).forEach(function(r){n.channels[r]=[],(t.channels[r]||[]).forEach(function(t){var s={};s.channel=r,s.subscription=null,s.timetoken=t.timetoken,s.message=i(e,t.message),n.channels[r].push(s)})}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=s,t.validateParams=o,t.getURL=a,t.getRequestTimeout=u,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=h;var f=(n(8),n(16)),d=r(f),p=n(17),g=r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNSubscribeOperation}function s(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/subscribe/"+n.subscribeKey+"/"+p.default.encodeString(s)+"/0"}function a(e){return e.config.getSubscribeTimeout()}function u(){return!0}function c(e,t){var n=e.config,r=t.channelGroups,i=void 0===r?[]:r,s=t.timetoken,o=t.filterExpression,a=t.region,u={heartbeat:n.getPresenceTimeout()};return i.length>0&&(u["channel-group"]=i.join(",")),o&&o.length>0&&(u["filter-expr"]=o),s&&(u.tt=s),a&&(u.tr=a),u}function l(e,t){var n=[];t.m.forEach(function(e){var t={publishTimetoken:e.p.t,region:e.p.r},r={shard:parseInt(e.a,10),subscriptionMatch:e.b,channel:e.c,payload:e.d,flags:e.f,issuingClientId:e.i,subscribeKey:e.k,originationTimetoken:e.o,userMetadata:e.u,publishMetaData:t};n.push(r)});var r={timetoken:t.t.t,region:t.t.r};return{messages:n,metadata:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(7),a=(r(o),n(13)),u=r(a),c=(n(8),function(){function e(t){var n=this;i(this,e),this._modules={},Object.keys(t).forEach(function(e){n._modules[e]=t[e].bind(n)})}return s(e,[{key:"init",value:function(e){this._config=e,this._maxSubDomain=20,this._currentSubDomain=Math.floor(Math.random()*this._maxSubDomain),this._providedFQDN=(this._config.secure?"https://":"http://")+this._config.origin,this._coreParams={},this.shiftStandardOrigin()}},{key:"nextOrigin",value:function(){if(-1===this._providedFQDN.indexOf("pubsub."))return this._providedFQDN;var e=void 0;return this._currentSubDomain=this._currentSubDomain+1,this._currentSubDomain>=this._maxSubDomain&&(this._currentSubDomain=1),e=this._currentSubDomain.toString(),this._providedFQDN.replace("pubsub","ps"+e)}},{key:"shiftStandardOrigin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._standardOrigin=this.nextOrigin(e),this._standardOrigin}},{key:"getStandardOrigin",value:function(){return this._standardOrigin}},{key:"POST",value:function(e,t,n,r){return this._modules.post(e,t,n,r)}},{key:"GET",value:function(e,t,n){return this._modules.get(e,t,n)}},{key:"_detectErrorCategory",value:function(e){if("ENOTFOUND"===e.code)return u.default.PNNetworkIssuesCategory;if("ECONNREFUSED"===e.code)return u.default.PNNetworkIssuesCategory;if("ECONNRESET"===e.code)return u.default.PNNetworkIssuesCategory;if("EAI_AGAIN"===e.code)return u.default.PNNetworkIssuesCategory;if(0===e.status||e.hasOwnProperty("status")&&void 0===e.status)return u.default.PNNetworkIssuesCategory;if(e.timeout)return u.default.PNTimeoutCategory;if(e.response){if(e.response.badRequest)return u.default.PNBadRequestCategory;if(e.response.forbidden)return u.default.PNAccessDeniedCategory}return u.default.PNUnknownCategory}}]),e}());t.default=c,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={get:function(e){try{return localStorage.getItem(e)}catch(e){return null}},set:function(e,t){try{return localStorage.setItem(e,t)}catch(e){return null}}},e.exports=t.default},function(e,t,n){"use strict";function r(e){var t=(new Date).getTime(),n=(new Date).toISOString(),r=function(){return console&&console.log?console:window&&window.console&&window.console.log?window.console:console}();r.log("<<<<<"),r.log("["+n+"]","\n",e.url,"\n",e.qs),r.log("-----"),e.on("response",function(n){var i=(new Date).getTime(),s=i-t,o=(new Date).toISOString();r.log(">>>>>>"),r.log("["+o+" / "+s+"]","\n",e.url,"\n",e.qs,"\n",n.text),r.log("-----")})}function i(e,t,n){var i=this;return this._config.logVerbosity&&(e=e.use(r)),this._config.proxy&&this._modules.proxy&&(e=this._modules.proxy.call(this,e)),this._config.keepAlive&&this._modules.keepAlive&&(e=this._module.keepAlive(e)),e.timeout(t.timeout).end(function(e,r){var s={};if(s.error=null!==e,s.operation=t.operation,r&&r.status&&(s.statusCode=r.status),e)return s.errorData=e,s.category=i._detectErrorCategory(e),n(s,null);var o=JSON.parse(r.text);return n(s,o)})}function s(e,t,n){var r=u.default.get(this.getStandardOrigin()+t.url).query(e);return i.call(this,r,t,n)}function o(e,t,n,r){var s=u.default.post(this.getStandardOrigin()+n.url).query(e).send(t);return i.call(this,s,n,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.get=s,t.post=o;var a=n(43),u=function(e){return e&&e.__esModule?e:{default:e}}(a);n(8)},function(e,t,n){function r(){}function i(e){if(!v(e))return e;var t=[];for(var n in e)s(t,n,e[n]);return t.join("&")}function s(e,t,n){if(null!=n)if(Array.isArray(n))n.forEach(function(n){s(e,t,n)});else if(v(n))for(var r in n)s(e,t+"["+r+"]",n[r]);else e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));else null===n&&e.push(encodeURIComponent(t))}function o(e){for(var t,n,r={},i=e.split("&"),s=0,o=i.length;s<o;++s)t=i[s],n=t.indexOf("="),-1==n?r[decodeURIComponent(t)]="":r[decodeURIComponent(t.slice(0,n))]=decodeURIComponent(t.slice(n+1));return r}function a(e){var t,n,r,i,s=e.split(/\r?\n/),o={};s.pop();for(var a=0,u=s.length;a<u;++a)n=s[a],t=n.indexOf(":"),r=n.slice(0,t).toLowerCase(),i=_(n.slice(t+1)),o[r]=i;return o}function u(e){return/[\/+]json\b/.test(e)}function c(e){return e.split(/ *; */).shift()}function l(e){return e.split(/ *; */).reduce(function(e,t){var n=t.split(/ *= */),r=n.shift(),i=n.shift();return r&&i&&(e[r]=i),e},{})}function h(e,t){t=t||{},this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this._setStatusProperties(this.xhr.status),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function f(e,t){var n=this;this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",function(){var e=null,t=null;try{t=new h(n)}catch(t){return e=new Error("Parser is unable to parse the response"),e.parse=!0,e.original=t,e.rawResponse=n.xhr&&n.xhr.responseText?n.xhr.responseText:null,e.statusCode=n.xhr&&n.xhr.status?n.xhr.status:null,n.callback(e)}n.emit("response",t);var r;try{(t.status<200||t.status>=300)&&(r=new Error(t.statusText||"Unsuccessful HTTP response"),r.original=e,r.response=t,r.status=t.status)}catch(e){r=e}r?n.callback(r,t):n.callback(null,t)})}function d(e,t){var n=b("DELETE",e);return t&&n.end(t),n}var p;"undefined"!=typeof window?p=window:"undefined"!=typeof self?p=self:(console.warn("Using browser-only version of superagent in non-browser environment"),p=this);var g=n(44),y=n(45),v=n(46),b=e.exports=n(47).bind(null,f);b.getXHR=function(){if(!(!p.XMLHttpRequest||p.location&&"file:"==p.location.protocol&&p.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Browser-only verison of superagent could not find XHR")};var _="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};b.serializeObject=i,b.parseString=o,b.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},b.serialize={"application/x-www-form-urlencoded":i,"application/json":JSON.stringify},b.parse={"application/x-www-form-urlencoded":o,"application/json":JSON.parse},h.prototype.get=function(e){return this.header[e.toLowerCase()]},h.prototype._setHeaderProperties=function(e){var t=this.header["content-type"]||"";this.type=c(t);var n=l(t);for(var r in n)this[r]=n[r]},h.prototype._parseBody=function(e){var t=b.parse[this.type];return!t&&u(this.type)&&(t=b.parse["application/json"]),t&&e&&(e.length||e instanceof Object)?t(e):null},h.prototype._setStatusProperties=function(e){1223===e&&(e=204);var t=e/100|0;this.status=this.statusCode=e,this.statusType=t,this.info=1==t,this.ok=2==t,this.clientError=4==t,this.serverError=5==t,this.error=(4==t||5==t)&&this.toError(),this.accepted=202==e,this.noContent=204==e,this.badRequest=400==e,this.unauthorized=401==e,this.notAcceptable=406==e,this.notFound=404==e,this.forbidden=403==e},h.prototype.toError=function(){var e=this.req,t=e.method,n=e.url,r="cannot "+t+" "+n+" ("+this.status+")",i=new Error(r);return i.status=this.status,i.method=t,i.url=n,i},b.Response=h,g(f.prototype);for(var m in y)f.prototype[m]=y[m];f.prototype.type=function(e){return this.set("Content-Type",b.types[e]||e),this},f.prototype.responseType=function(e){return this._responseType=e,this},f.prototype.accept=function(e){return this.set("Accept",b.types[e]||e),this},f.prototype.auth=function(e,t,n){switch(n||(n={type:"basic"}),n.type){case"basic":var r=btoa(e+":"+t);this.set("Authorization","Basic "+r);break;case"auto":this.username=e,this.password=t}return this},f.prototype.query=function(e){return"string"!=typeof e&&(e=i(e)),e&&this._query.push(e),this},f.prototype.attach=function(e,t,n){return this._getFormData().append(e,t,n||t.name),this},f.prototype._getFormData=function(){return this._formData||(this._formData=new p.FormData),this._formData},f.prototype.callback=function(e,t){var n=this._callback;this.clearTimeout(),n(e,t)},f.prototype.crossDomainError=function(){var e=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain=!0,e.status=this.status,e.method=this.method,e.url=this.url,this.callback(e)},f.prototype._timeoutError=function(){var e=this._timeout,t=new Error("timeout of "+e+"ms exceeded");t.timeout=e,this.callback(t)},f.prototype._appendQueryString=function(){var e=this._query.join("&");e&&(this.url+=~this.url.indexOf("?")?"&"+e:"?"+e)},f.prototype.end=function(e){var t=this,n=this.xhr=b.getXHR(),i=this._timeout,s=this._formData||this._data;this._callback=e||r,n.onreadystatechange=function(){if(4==n.readyState){var e;try{e=n.status}catch(t){e=0}if(0==e){if(t.timedout)return t._timeoutError();if(t._aborted)return;return t.crossDomainError()}t.emit("end")}};var o=function(e,n){n.total>0&&(n.percent=n.loaded/n.total*100),n.direction=e,t.emit("progress",n)};if(this.hasListeners("progress"))try{n.onprogress=o.bind(null,"download"),n.upload&&(n.upload.onprogress=o.bind(null,"upload"))}catch(e){}if(i&&!this._timer&&(this._timer=setTimeout(function(){t.timedout=!0,t.abort()},i)),this._appendQueryString(),this.username&&this.password?n.open(this.method,this.url,!0,this.username,this.password):n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof s&&!this._isHost(s)){var a=this._header["content-type"],c=this._serializer||b.serialize[a?a.split(";")[0]:""];!c&&u(a)&&(c=b.serialize["application/json"]),c&&(s=c(s))}for(var l in this.header)null!=this.header[l]&&n.setRequestHeader(l,this.header[l]);return this._responseType&&(n.responseType=this._responseType),this.emit("request",this),n.send(void 0!==s?s:null),this},b.Request=f,b.get=function(e,t,n){var r=b("GET",e);return"function"==typeof t&&(n=t,t=null),t&&r.query(t),n&&r.end(n),r},b.head=function(e,t,n){var r=b("HEAD",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.options=function(e,t,n){var r=b("OPTIONS",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.del=d,b.delete=d,b.patch=function(e,t,n){var r=b("PATCH",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.post=function(e,t,n){var r=b("POST",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.put=function(e,t,n){var r=b("PUT",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r}},function(e,t,n){function r(e){if(e)return i(e)}function i(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var r,i=0;i<n.length;i++)if((r=n[i])===t||r.fn===t){n.splice(i,1);break}return this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks["$"+e];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},r.prototype.hasListeners=function(e){return!!this.listeners(e).length}},function(e,t,n){var r=n(46);t.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},t.parse=function(e){return this._parser=e,this},t.serialize=function(e){return this._serializer=e,this},t.timeout=function(e){return this._timeout=e,this},t.then=function(e,t){if(!this._fullfilledPromise){var n=this;this._fullfilledPromise=new Promise(function(e,t){n.end(function(n,r){n?t(n):e(r)})})}return this._fullfilledPromise.then(e,t)},t.catch=function(e){return this.then(void 0,e)},t.use=function(e){return e(this),this},t.get=function(e){return this._header[e.toLowerCase()]},t.getHeader=t.get,t.set=function(e,t){if(r(e)){for(var n in e)this.set(n,e[n]);return this}return this._header[e.toLowerCase()]=t,this.header[e]=t,this},t.unset=function(e){return delete this._header[e.toLowerCase()],delete this.header[e],this},t.field=function(e,t){if(null===e||void 0===e)throw new Error(".field(name, val) name can not be empty");if(r(e)){for(var n in e)this.field(n,e[n]);return this}if(null===t||void 0===t)throw new Error(".field(name, val) val can not be empty");return this._getFormData().append(e,t),this},t.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},t.withCredentials=function(){return this._withCredentials=!0,this},t.redirects=function(e){return this._maxRedirects=e,this},t.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},t._isHost=function(e){switch({}.toString.call(e)){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}},t.send=function(e){var t=r(e),n=this._header["content-type"];if(t&&r(this._data))for(var i in e)this._data[i]=e[i];else"string"==typeof e?(n||this.type("form"),n=this._header["content-type"],this._data="application/x-www-form-urlencoded"==n?this._data?this._data+"&"+e:e:(this._data||"")+e):this._data=e;return!t||this._isHost(e)?this:(n||this.type("json"),this)}},function(e,t){function n(e){return null!==e&&"object"==typeof e}e.exports=n},function(e,t){function n(e,t,n){return"function"==typeof n?new e("GET",t).end(n):2==arguments.length?new e("GET",t):new e(t,n)}e.exports=n}])});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var invariant = __webpack_require__(3);

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var splice = Array.prototype.splice;

	var assign = Object.assign || /* istanbul ignore next */ function assign(target, source) {
	  getAllKeys(source).forEach(function(key) {
	    if (hasOwnProperty.call(source, key)) {
	      target[key] = source[key];
	    }
	  });
	  return target;
	};

	var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
	  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
	  /* istanbul ignore next */ function(obj) { return Object.keys(obj) };

	function copy(object) {
	  if (object instanceof Array) {
	    return object.slice();
	  } else if (object && typeof object === 'object') {
	    return assign(new object.constructor(), object);
	  } else {
	    return object;
	  }
	}

	function newContext() {
	  var commands = assign({}, defaultCommands);
	  update.extend = function(directive, fn) {
	    commands[directive] = fn;
	  };

	  return update;

	  function update(object, spec) {
	    if (!(Array.isArray(object) && Array.isArray(spec))) {
	      invariant(
	        !Array.isArray(spec),
	        'update(): You provided an invalid spec to update(). The spec may ' +
	        'not contain an array except as the value of $set, $push, $unshift, ' +
	        '$splice or any custom command allowing an array value.'
	      );
	    }

	    invariant(
	      typeof spec === 'object' && spec !== null,
	      'update(): You provided an invalid spec to update(). The spec and ' +
	      'every included key path must be plain objects containing one of the ' +
	      'following commands: %s.',
	      Object.keys(commands).join(', ')
	    );

	    var nextObject = object;
	    var specKeys = getAllKeys(spec);
	    var index, key;
	    getAllKeys(spec).forEach(function(key) {
	      if (hasOwnProperty.call(commands, key)) {
	        nextObject = commands[key](spec[key], nextObject, spec, object);
	      } else {
	        var nextValueForKey = update(object[key], spec[key]);
	        if (nextValueForKey !== nextObject[key]) {
	          if (nextObject === object) {
	            nextObject = copy(object);
	          }
	          nextObject[key] = nextValueForKey;
	        }
	      }
	    })
	    return nextObject;
	  }

	}

	var defaultCommands = {
	  $push: function(value, original, spec) {
	    invariantPushAndUnshift(original, spec, '$push');
	    return original.concat(value);
	  },
	  $unshift: function(value, original, spec) {
	    invariantPushAndUnshift(original, spec, '$unshift');
	    return value.concat(original);
	  },
	  $splice: function(value, nextObject, spec, object) {
	    var originalValue = nextObject === object ? copy(object) : nextObject;
	    invariantSplices(originalValue, spec);
	    value.forEach(function(args) {
	      invariantSplice(args);
	      splice.apply(originalValue, args);
	    });
	    return originalValue;
	  },
	  $set: function(value, original, spec) {
	    invariantSet(spec);
	    return value;
	  },
	  $unset: function(value, nextObject, spec, object) {
	    invariant(
	      Array.isArray(value),
	      'update(): expected spec of $unset to be an array; got %s. ' +
	      'Did you forget to wrap the key(s) in an array?',
	      value
	    );
	    var originalValue = nextObject;
	    value.forEach(function(key) {
	      if (Object.hasOwnProperty.call(originalValue, key)) {
	        if (nextObject === object) nextObject = copy(object);
	        delete nextObject[key];
	      }
	    });
	    return nextObject;
	  },
	  $merge: function(value, nextObject, spec, object) {
	    var nextObject = nextObject;
	    invariantMerge(nextObject, value);
	    getAllKeys(value).forEach(function(key) {
	      if (value[key] !== nextObject[key]) {
	        if (nextObject === object) nextObject = copy(object);
	        nextObject[key] = value[key];
	      }
	    });
	    return nextObject;
	  },
	  $apply: function(value, original) {
	    invariantApply(value);
	    return value(original);
	  }
	};

	module.exports = newContext();
	module.exports.newContext = newContext;

	// invariants

	function invariantPushAndUnshift(value, spec, command) {
	  invariant(
	    Array.isArray(value),
	    'update(): expected target of %s to be an array; got %s.',
	    command,
	    value
	  );
	  var specValue = spec[command];
	  invariant(
	    Array.isArray(specValue),
	    'update(): expected spec of %s to be an array; got %s. ' +
	    'Did you forget to wrap your parameter in an array?',
	    command,
	    specValue
	  );
	}

	function invariantSplices(value, spec) {
	  invariant(
	    Array.isArray(value),
	    'Expected $splice target to be an array; got %s',
	    value
	  );
	  invariantSplice(spec['$splice']);
	}

	function invariantSplice(value) {
	  invariant(
	    Array.isArray(value),
	    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
	    'Did you forget to wrap your parameters in an array?',
	    value
	  );
	}

	function invariantApply(fn) {
	  invariant(
	    typeof fn === 'function',
	    'update(): expected spec of $apply to be a function; got %s.',
	    fn
	  );
	}

	function invariantSet(spec) {
	  invariant(
	    Object.keys(spec).length === 1,
	    'Cannot have more than one key in an object with $set'
	  );
	}

	function invariantMerge(target, specValue) {
	  invariant(
	    specValue && typeof specValue === 'object',
	    'update(): $merge expects a spec of type \'object\'; got %s',
	    specValue
	  );
	  invariant(
	    target && typeof target === 'object',
	    'update(): $merge expects a target of type \'object\'; got %s',
	    target
	  );
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (originalInstance, wrappedInstance) {
	  _config2.default.attributes_to_delegate.forEach(function (attribute) {
	    wrapAttribute(originalInstance, wrappedInstance, attribute);
	  });

	  _config2.default.methods_to_delegate.forEach(function (method) {
	    wrapMethod(originalInstance, wrappedInstance, method);
	  });
	};

	var _config = __webpack_require__(6);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function wrapAttribute(originalInstance, wrappedInstance, attributeName) {
	  wrappedInstance[attributeName] = originalInstance[attributeName];
	}

	function wrapMethod(OriginalInstance, wrappedInstance, methodName) {
	  wrappedInstance[methodName] = function () {
	    return OriginalInstance[methodName].apply(wrappedInstance, arguments);
	  };
	}

	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = {
		"pubnub_prefix": "pubnub",
		"attributes_to_delegate": [
			"channelGroups",
			"push"
		],
		"methods_to_delegate": [
			"addListener",
			"removeListener",
			"removeAllListeners",
			"hereNow",
			"whereNow",
			"getState",
			"setState",
			"grant",
			"audit",
			"publish",
			"fire",
			"history",
			"time",
			"reconnect",
			"stop",
			"unsubscribeAll",
			"getSubscribedChannels",
			"getSubscribedChannelGroups",
			"encrypt",
			"decrypt",
			"getAuthKey",
			"setAuthKey",
			"setCipherKey",
			"getUUID",
			"setUUID",
			"getFilterExpression",
			"setFilterExpression"
		],
		"common_callbacks_to_wrap": [
			"callback",
			"error"
		],
		"subscribe_listener_events_to_broadcast": [
			"message",
			"presence",
			"status"
		],
		"history_sort_attribute": "timetoken"
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);

	    this.count = {};
	    this.instance = undefined;
	  }

	  _createClass(_class, [{
	    key: 'initialize',
	    value: function initialize(instance) {
	      this.instance = instance;
	    }
	  }, {
	    key: 'enableLoad',
	    value: function enableLoad(args) {
	      var _this = this;

	      if (this.instance && args.autoload && typeof args.autoload === 'number') {
	        this.count[args.channels] = args.autoload;

	        args.channels.forEach(function (channel) {
	          _this.count[channel] = args.autoload;
	        });
	      }
	    }
	  }, {
	    key: 'getHistory',
	    value: function getHistory(channel, callback) {
	      var _this2 = this;

	      if (this.count[channel]) {
	        this.instance.history({ channel: channel, count: this.count[channel] }).then(function (response) {
	          response.messages.forEach(function (m) {
	            m.message = m.entry;
	            m.channel = channel;

	            _this2.instance._component.setState(function (prevState) {
	              return {
	                pn_messages: (0, _immutabilityHelper2.default)(prevState.pn_messages, _defineProperty({}, channel, { $push: [m] }))
	              };
	            });
	          });

	          if (callback) {
	            callback();
	          }
	        }).catch(function () {});
	      }
	    }
	  }, {
	    key: 'disableLoad',
	    value: function disableLoad(args) {
	      var _this3 = this;

	      if (Array.isArray(args.channels)) {
	        args.channels.forEach(function (ch) {
	          if (_this3.count[ch]) delete _this3.count[ch];
	        });
	      } else if (this.count[args.channels]) {
	        delete this.count[args.channels];
	      }
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Broadcast = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _config = __webpack_require__(6);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function subscribeChannel(event, channel, callback) {
	  if (!event[channel]) {
	    event[channel] = callback || {};
	  } else if (event[channel] === {} && callback) {
	    event[channel] = callback;
	  }
	}

	function unsubscribeChannel(event, channel) {
	  if (event[channel]) {
	    delete event[channel];
	  }
	}

	var Broadcast = exports.Broadcast = function () {
	  function Broadcast() {
	    _classCallCheck(this, Broadcast);

	    this._message = {};
	    this._presence = {};
	    this._status = null;
	  }

	  _createClass(Broadcast, [{
	    key: 'message',
	    value: function message(channel, callback) {
	      subscribeChannel(this._message, channel, callback);
	    }
	  }, {
	    key: 'presence',
	    value: function presence(channel, callback) {
	      subscribeChannel(this._presence, channel, callback);
	    }
	  }, {
	    key: 'status',
	    value: function status(callback) {
	      if (!this._status) {
	        this._status = callback || {};
	      } else if (this._status === {} && callback) {
	        this._status = callback;
	      }
	    }
	  }, {
	    key: 'isSubscribe',
	    value: function isSubscribe(event, channel) {
	      var subscriber = '_' + event;

	      if (subscriber === '_status') {
	        return this[subscriber];
	      } else {
	        return this[subscriber] && this[subscriber][channel];
	      }
	    }
	  }, {
	    key: 'emit',
	    value: function emit(event, channel, args) {
	      var subscriber = '_' + event;

	      if (this[subscriber] && this[subscriber][channel] && typeof this[subscriber][channel] === 'function') {
	        this[subscriber][channel].call(null, args);
	      }
	    }
	  }, {
	    key: 'emitStatus',
	    value: function emitStatus(args) {
	      if (this._status && typeof this._status === 'function') {
	        this._status.call(null, args);
	      }
	    }
	  }, {
	    key: 'error',
	    value: function error(callback) {
	      this._error = callback;
	    }
	  }, {
	    key: 'emitError',
	    value: function emitError(args) {
	      if (this._error) {
	        this._error.call(null, args);
	      }
	    }
	  }, {
	    key: 'unsubscribe',
	    value: function unsubscribe(channel) {
	      var _this = this;

	      _config2.default.subscribe_listener_events_to_broadcast.forEach(function (event) {
	        var subscriber = '_' + event;

	        unsubscribeChannel(_this[subscriber], channel);
	      });
	    }
	  }]);

	  return Broadcast;
	}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getMessage = __webpack_require__(10);

	Object.defineProperty(exports, 'getMessage', {
	  enumerable: true,
	  get: function get() {
	    return _getMessage.getMessage;
	  }
	});

	var _getPresence = __webpack_require__(11);

	Object.defineProperty(exports, 'getPresence', {
	  enumerable: true,
	  get: function get() {
	    return _getPresence.getPresence;
	  }
	});

	var _getStatus = __webpack_require__(12);

	Object.defineProperty(exports, 'getStatus', {
	  enumerable: true,
	  get: function get() {
	    return _getStatus.getStatus;
	  }
	});

	var _clean = __webpack_require__(13);

	Object.defineProperty(exports, 'clean', {
	  enumerable: true,
	  get: function get() {
	    return _clean.clean;
	  }
	});

	var _release = __webpack_require__(14);

	Object.defineProperty(exports, 'release', {
	  enumerable: true,
	  get: function get() {
	    return _release.release;
	  }
	});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMessage = getMessage;

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function init(component, channel) {
	  if (component.state.pn_messages[channel]) {
	    return false;
	  } else {
	    component.setState(function (prevState) {
	      return {
	        pn_messages: (0, _immutabilityHelper2.default)(prevState.pn_messages, { $merge: _defineProperty({}, channel, []) })
	      };
	    });

	    return true;
	  }
	}

	function emit(instance, channel, message) {
	  var messages = instance._component.state.pn_messages[channel];
	  var keepMessages = instance._keepMessages[channel];

	  messages.push(message);

	  if (keepMessages && messages.length > keepMessages) {
	    messages = messages.slice(messages.length - keepMessages);
	  }

	  instance._component.setState(function (prevState) {
	    return {
	      pn_messages: (0, _immutabilityHelper2.default)(prevState.pn_messages, _defineProperty({}, channel, { $set: messages }))
	    };
	  });

	  instance._broadcast.emit('message', channel, message);
	}

	function getMessage(channel) {
	  var _this = this;

	  var component = this._component;
	  var callback = void 0;
	  var keepMessages = 100;

	  if (arguments.length === 2 && typeof arguments[1] === 'function') {
	    callback = arguments[1];
	  } else if (arguments.length === 2 && typeof arguments[1] === 'number') {
	    keepMessages = arguments[1];
	  } else if (arguments.length === 3) {
	    callback = arguments[1];
	    keepMessages = arguments[2];
	  }

	  if (init(component, channel)) {
	    this._keepMessages[channel] = keepMessages;
	    this._autoload.getHistory(channel, callback);
	  }

	  this._broadcast.message(channel, callback);

	  if (!this._listener.message) {
	    this._listener.message = function (message) {
	      if (message.subscription && _this._broadcast.isSubscribe('message', message.subscription)) {
	        emit(_this, message.subscription, message);
	      }

	      if (message.channel && _this._broadcast.isSubscribe('message', message.channel)) {
	        emit(_this, message.channel, message);
	      }
	    };
	  }

	  if (component.state && component.state.pn_messages && component.state.pn_messages[channel]) {
	    return component.state.pn_messages[channel];
	  } else {
	    return [];
	  }
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPresence = getPresence;

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function init(instance, channel) {
	  if (instance._component.state.pn_presence[channel]) {
	    return false;
	  }

	  instance._component.setState(function (prevState) {
	    return {
	      pn_presence: (0, _immutabilityHelper2.default)(prevState.pn_presence, { $merge: _defineProperty({}, channel, {}) })
	    };
	  });

	  return true;
	}

	function emit(instance, channel, presence) {
	  instance._component.setState(function (prevState) {
	    return {
	      pn_presence: (0, _immutabilityHelper2.default)(prevState.pn_presence, _defineProperty({}, channel, { $set: presence }))
	    };
	  });

	  instance._broadcast.emit('presence', presence.channel, presence);
	}

	function getPresence(channel, callback) {
	  var _this = this;

	  this._broadcast.presence(channel, callback);

	  init(this, channel);

	  if (!this._listener.presence) {
	    this._listener.presence = function (ps) {
	      if (ps.subscription && _this._broadcast.isSubscribe('presence', ps.subscription)) {
	        emit(_this, ps.subscription, ps);
	      }

	      if (ps.channel && _this._broadcast.isSubscribe('presence', ps.channel)) {
	        emit(_this, ps.channel, ps);
	      }
	    };
	  }

	  if (this._component.state && this._component.state.pn_presence) {
	    return this._component.state.pn_presence[channel];
	  } else {
	    return {};
	  }
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getStatus = getStatus;

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStatus(callback) {
	  var _this = this;

	  this._broadcast.status(callback);

	  if (!this._listener.status) {
	    this._listener.status = function (st) {
	      if (!_this._broadcast.isSubscribe('status')) {
	        return true;
	      }

	      _this._component.setState(function (prevState) {
	        return {
	          pn_status: (0, _immutabilityHelper2.default)(prevState.pn_status, { $set: st })
	        };
	      });

	      _this._broadcast.emitStatus(st);
	    };
	  }

	  if (this._component.state && this._component.state.pn_status) {
	    return this._component.state.pn_status;
	  } else {
	    return {};
	  }
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clean = clean;

	var _immutabilityHelper = __webpack_require__(2);

	var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function clean(channel) {
	  if (this._broadcast.isSubscribe('message', channel)) {
	    this._component.setState(function (prevState) {
	      return {
	        pn_messages: (0, _immutabilityHelper2.default)(prevState.pn_messages, _defineProperty({}, channel, { $set: [] }))
	      };
	    });
	  }

	  if (this._broadcast.isSubscribe('presence', channel)) {
	    this._component.setState(function (prevState) {
	      return {
	        pn_presence: (0, _immutabilityHelper2.default)(prevState.pn_presence, _defineProperty({}, channel, { $set: [] }))
	      };
	    });
	  }
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.release = release;
	function release(channel) {
	  if (this._broadcast.isSubscribe('message', channel)) {
	    var pnMessages = this._component.state.pn_messages;

	    delete pnMessages[channel];

	    this._component.setState({ pn_messages: pnMessages });
	  }

	  if (this._broadcast.isSubscribe('presence', channel)) {
	    var pnPresence = this._component.state.pn_presence;

	    delete pnPresence[channel];

	    this._component.setState({ pn_presence: pnPresence });
	  }

	  this._broadcast.unsubscribe(channel);
	}

/***/ })
/******/ ])
});
;