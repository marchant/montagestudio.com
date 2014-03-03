var Montage=require("montage").Montage,Composer=require("composer/composer").Composer,KEYPRESS_EVENT_TYPE="keyPress",LONGKEYPRESS_EVENT_TYPE="longKeyPress",KEYRELEASE_EVENT_TYPE="keyRelease",KeyComposer=exports.KeyComposer=Composer.specialize({_isLoaded:{value:!1},_shouldDispatchEvent:{value:!1},shouldDispatchLongPress:{value:!1},_longPressTimeout:{value:null},_keyRegistered:{value:!1},_keys:{value:null},keys:{get:function(){return this._keys},set:function(e){this._keyRegistered?(KeyManagerProxy.defaultKeyManager.unregisterKey(this),this._keys=e,KeyManagerProxy.defaultKeyManager.registerKey(this)):this._keys=e}},_identifier:{value:null},identifier:{get:function(){return this._identifier},set:function(e){this._identifier=e}},load:{value:function(){this._isLoaded=!0,this._shouldDispatchEvent&&!this._keyRegistered&&(KeyManagerProxy.defaultKeyManager.registerKey(this),this._keyRegistered=!0)}},unload:{value:function(){this._isLoaded=!1,KeyManagerProxy.defaultKeyManager.unregisterKey(this),this._keyRegistered=!1}},addEventListener:{value:function(e,t,n){var i=this.component;Composer.addEventListener.call(this,e,t,n),(e==KEYPRESS_EVENT_TYPE||e==LONGKEYPRESS_EVENT_TYPE||e==KEYRELEASE_EVENT_TYPE)&&(this._shouldDispatchEvent=!0,e==LONGKEYPRESS_EVENT_TYPE&&(this._shouldDispatchLongPress=!0),this._isLoaded?this._keyRegistered||(KeyManagerProxy.defaultKeyManager.registerKey(this),this._keyRegistered=!0):i&&"function"!=typeof i.addComposer&&(this.element||(this.element=window),this.load()))}},constructor:{value:function(){Composer.constructor.call(this)}},deserializedFromTemplate:{value:function(){var e=this.component;null===this.identifier&&(this.identifier=Montage.getInfoForObject(this).label),e&&("function"==typeof e.addComposer?e.addComposer(this):this._isLoaded||(this.element||(this.element=window),this.load()))}}},{createKey:{value:function(e,t,n){var i=this;return this===KeyComposer&&(i=new KeyComposer),n||(n=e.identifier?e.identifier+t.toLowerCase().replace(/[ +]/g).toCapitalized():t.toLowerCase().replace(/[ +]/g)),i.keys=t,i.identifier=n,e.addComposer(i),i}},createGlobalKey:{value:function(e,t,n){var i=this;return this===KeyComposer&&(i=new KeyComposer),i.keys=t,i.identifier=n,e.addComposerForElement(i,window),i}}}),_keyManagerProxy=null,KeyManagerProxy=Montage.specialize({_defaultKeyManager:{value:null},_loadingDefaultKeyManager:{value:!1},_keysToRegister:{value:[]},constructor:{value:function(){}},registerKey:{value:function(e){var t=this;this._defaultKeyManager?this._defaultKeyManager.registerKey(e):(this._keysToRegister.push(e),this._loadingDefaultKeyManager||(this._loadingDefaultKeyManager=!0,require.async("core/event/key-manager").then(function(e){var n=t._defaultKeyManager=e.defaultKeyManager;t._keysToRegister.forEach(function(e){n.registerKey(e)}),t._keysToRegister.length=0}).done()))}},unregisterKey:{value:function(e){this._defaultKeyManager&&this._defaultKeyManager.unregisterKey(e)}}},{defaultKeyManager:{get:function(){return _keyManagerProxy||(_keyManagerProxy=new KeyManagerProxy),this._defaultKeyManager?this._defaultKeyManager:_keyManagerProxy}}});