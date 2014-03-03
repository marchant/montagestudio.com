"use strict";function GenericMap(){throw new Error("Can't construct. GenericMap is a mixin.")}function Item(e,t){this.key=e,this.value=t}var Object=require("./shim-object"),MapChanges=require("./listen/map-changes"),PropertyChanges=require("./listen/property-changes");module.exports=GenericMap,Object.addEach(GenericMap.prototype,MapChanges.prototype),Object.addEach(GenericMap.prototype,PropertyChanges.prototype),GenericMap.prototype.addEach=function(e){return e&&Object(e)===e&&(typeof e.forEach=="function"?typeof e.keys=="function"?e.forEach(function(e,t){this.set(t,e)},this):e.forEach(function(e){this.set(e[0],e[1])},this):Object.keys(e).forEach(function(t){this.set(t,e[t])},this)),this},GenericMap.prototype.get=function(e,t){var n=this.store.get(new this.Item(e));return n?n.value:arguments.length>1?t:this.getDefault(e)},GenericMap.prototype.set=function(e,t){var n=new this.Item(e,t),r=this.store.get(n),i=!1;return r?(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,r.value),r.value=t,this.dispatchesMapChanges&&this.dispatchMapChange(e,t)):(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,undefined),this.store.add(n)&&(this.length++,i=!0),this.dispatchesMapChanges&&this.dispatchMapChange(e,t)),i},GenericMap.prototype.add=function(e,t){return this.set(t,e)},GenericMap.prototype.has=function(e){return this.store.has(new this.Item(e))},GenericMap.prototype["delete"]=function(e){var t=new this.Item(e);if(this.store.has(t)){var n=this.store.get(t).value;return this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,n),this.store["delete"](t),this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(e,undefined),!0}return!1},GenericMap.prototype.clear=function(){this.dispatchesMapChanges&&this.forEach(function(e,t){this.dispatchBeforeMapChange(t,e)},this),this.store.clear(),this.length=0,this.dispatchesMapChanges&&this.forEach(function(e,t){this.dispatchMapChange(t,e)},this)},GenericMap.prototype.reduce=function(e,t,n){return this.store.reduce(function(t,r){return e.call(n,t,r.value,r.key,this)},t,this)},GenericMap.prototype.reduceRight=function(e,t,n){return this.store.reduceRight(function(t,r){return e.call(n,t,r.value,r.key,this)},t,this)},GenericMap.prototype.keys=function(){return this.map(function(e,t){return t})},GenericMap.prototype.values=function(){return this.map(Function.identity)},GenericMap.prototype.items=function(){return this.map(function(e,t){return[t,e]})},GenericMap.prototype.equals=function(e,t){t=t||Object.equals;if(this===e)return!0;if(Object.can(e,"every"))return e.length===this.length&&e.every(function(e,n){return t(this.get(n),e)},this);var n=Object.keys(e);return n.length===this.length&&Object.keys(e).every(function(n){return t(this.get(n),e[n])},this)},GenericMap.prototype.Item=Item,Item.prototype.equals=function(e){return Object.equals(this.key,e.key)&&Object.equals(this.value,e.value)},Item.prototype.compare=function(e){return Object.compare(this.key,e.key)}