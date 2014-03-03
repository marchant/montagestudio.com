montageDefine("87344ee","generic-map",{dependencies:["./shim-object","./listen/map-changes","./listen/property-changes"],factory:function(e,t,n){"use strict";function o(){throw new Error("Can't construct. GenericMap is a mixin.")}function u(e,t){this.key=e,this.value=t}var r=e("./shim-object"),i=e("./listen/map-changes"),s=e("./listen/property-changes");n.exports=o,r.addEach(o.prototype,i.prototype),r.addEach(o.prototype,s.prototype),o.prototype.addEach=function(e){return e&&r(e)===e&&(typeof e.forEach=="function"?typeof e.keys=="function"?e.forEach(function(e,t){this.set(t,e)},this):e.forEach(function(e){this.set(e[0],e[1])},this):r.keys(e).forEach(function(t){this.set(t,e[t])},this)),this},o.prototype.get=function(e,t){var n=this.store.get(new this.Item(e));return n?n.value:arguments.length>1?t:this.getDefault(e)},o.prototype.set=function(e,t){var n=new this.Item(e,t),r=this.store.get(n),i=!1;return r?(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,r.value),r.value=t,this.dispatchesMapChanges&&this.dispatchMapChange(e,t)):(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,undefined),this.store.add(n)&&(this.length++,i=!0),this.dispatchesMapChanges&&this.dispatchMapChange(e,t)),i},o.prototype.add=function(e,t){return this.set(t,e)},o.prototype.has=function(e){return this.store.has(new this.Item(e))},o.prototype["delete"]=function(e){var t=new this.Item(e);if(this.store.has(t)){var n=this.store.get(t).value;return this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,n),this.store["delete"](t),this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(e,undefined),!0}return!1},o.prototype.clear=function(){this.store.clear(),this.length=0},o.prototype.reduce=function(e,t,n){return this.store.reduce(function(t,r){return e.call(n,t,r.value,r.key,this)},t,this)},o.prototype.reduceRight=function(e,t,n){return this.store.reduceRight(function(t,r){return e.call(n,t,r.value,r.key,this)},t,this)},o.prototype.keys=function(){return this.map(function(e,t){return t})},o.prototype.values=function(){return this.map(Function.identity)},o.prototype.items=function(){return this.map(function(e,t){return[t,e]})},o.prototype.equals=function(e,t){t=t||r.equals;if(this===e)return!0;if(r.can(e,"every"))return e.length===this.length&&e.every(function(e,n){return t(this.get(n),e)},this);var n=r.keys(e);return n.length===this.length&&r.keys(e).every(function(n){return t(this.get(n),e[n])},this)},o.prototype.Item=u,u.prototype.equals=function(e){return r.equals(this.key,e.key)&&r.equals(this.value,e.value)},u.prototype.compare=function(e){return r.compare(this.key,e.key)}}})