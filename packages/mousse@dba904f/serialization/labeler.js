(function(e){function t(){this._objectsLabels=Object.create(null),this._objects=Object.create(null),this._objectNamesIndex=Object.create(null),this._userDefinedLabels=Object.create(null)}Object.defineProperties(t.prototype,{_objectsLabels:{value:null,writable:!0},_objects:{value:null,writable:!0},_INITIAL_LABEL_NUMBER:{value:2},_objectNamesIndex:{value:null,writable:!0},_userDefinedLabels:{value:null,writable:!0},initWithObjects:{value:function(e){for(var t in e)this.setObjectLabel(e[t],t),this._userDefinedLabels[t]=!0}},cleanup:{value:function(){this._objectsLabels=null,this._objects=null,this._objectNamesIndex=null,this._userDefinedLabels=null}},getObjectName:{value:function(e){return Array.isArray(e)?"array":RegExp.isRegExp(e)?"regexp":"object"}},generateObjectLabel:{value:function(e){var t,n=this.getObjectName(e),r=this._objectNamesIndex[n];do r?(t=n+r,this._objectNamesIndex[n]=r+=1):(t=n,this._objectNamesIndex[n]=r=this._INITIAL_LABEL_NUMBER);while(t in this._objects);return t}},getObjectLabel:{value:function(e){var t,n=Object.hash(e);return n in this._objectsLabels?t=this._objectsLabels[n]:(t=this.generateObjectLabel(e),this._objectsLabels[n]=t,this._objects[t]=e),t}},setObjectLabel:{value:function(e,t){if(e!==void 0){var n=Object.hash(e);this._objectsLabels[n]=t,this._objects[t]=e}}},getObjectByLabel:{value:function(e){return this._objects[e]}},isUserDefinedLabel:{value:function(e){return e in this._userDefinedLabels}}}),e.Labeler=t})(exports);