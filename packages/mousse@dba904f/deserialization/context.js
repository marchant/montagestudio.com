var Promise=require("q");(function(e){function t(e,t,n){if(this._reviver=t,this._serialization=e,this._objects=Object.create(null),n){this._userObjects=Object.create(null);for(var r in n)this._userObjects[r]=n[r]}}Object.defineProperties(t.prototype,{_objects:{value:null,writable:!0},_userObjects:{value:null,writable:!0},_serialization:{value:null,writable:!0},_reviver:{value:null,writable:!0},setObjectLabel:{value:function(e,t){this._objects[t]=e}},getObject:{value:function(e){var t,n=this._serialization,r=this._reviver,i=this._objects;return e in i?i[e]:e in n?(t=r.reviveRootObject(n[e],this,e),e in i||(i[e]=t),t):Promise.reject(Error("Object with label '"+e+"' was not found."))}},getObjects:{value:function(){var e,t=this,n=(this._reviver,this._serialization),r=[];for(var i in n)e=this.getObject(i),Promise.isPromise(e)&&r.push(e);return 0===r.length?Promise.resolve(this._invokeDidReviveObjects()):Promise.all(r).then(function(){return t._invokeDidReviveObjects()})}},hasUserObject:{value:function(e){var t=this._userObjects;return t?e in t:!1}},getUserObject:{value:function(e){var t=this._userObjects;return t?t[e]:void 0}},_invokeDidReviveObjects:{value:function(){var e,t=this,n=this._reviver;return"function"==typeof n.didReviveObjects&&(e=n.didReviveObjects(this._objects,this),Promise.isPromise(e))?e.then(function(){return t._objects}):this._objects}}}),e.Context=t})(exports);