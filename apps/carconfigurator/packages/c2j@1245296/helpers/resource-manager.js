var global=window;(function(e,t){typeof exports=="object"?(module.exports=t(global),module.exports.ResourceManager=module.exports):typeof define=="function"&&define.amd?define([],function(){return t(e)}):t(e)})(this,function(e){"use strict";var t=Object.create(Object,{kind:{value:"multi-parts",writable:!0},range:{value:null,writable:!0},_requests:{value:null,writable:!0},requests:{get:function(){return this._requests},set:function(e){this._requests=e}},canMergeRequest:{value:function(e){return(e.range[0]===this.range[1]||e.range[1]===this.range[0])&&e.type===this.type}},mergeRequest:{value:function(e){this.requests.length===0?(this.requests.push(e),this.range=[e.range[0],e.range[1]]):e.range[0]===this.range[1]?(this.requests.push(e),this.range[1]=e.range[1]):e.range[1]===this.range[0]?(this.requests.unshift(e),this.range[0]=e.range[0]):console.log("ERROR: should not reach")}},mergeRequests:{value:function(e){if(this.range)if(e[0].range[1]<this.range[0])for(var t=e.length-1;t>=0;t--)this.mergeRequest(e[t]);else for(var t=0;t<e.length;t++)this.mergeRequest(e[t]);else e.forEach(function(e){this.mergeRequest(e)},this)}},id:{value:null,writable:!0},initWithRequests:{value:function(e){return this.requests=[],this.mergeRequests(e),this.id=e[0].id,this}}}),n=Object.create(Object,{_content:{value:null,writable:!0},content:{get:function(){return this._content},set:function(e){this._content=e}},_parent:{value:null,writable:!0},parent:{get:function(){return this._parent},set:function(e){this._parent=e}},_left:{value:null,writable:!0},left:{get:function(){return this._left},set:function(e){this._left=e}},_right:{value:null,writable:!0},right:{get:function(){return this._right},set:function(e){this._right=e}},_checkConsistency:{value:function(e){if(e.length>=50)return;this.left&&this.left._checkConsistency(e),e.push(this.content.range),this.right&&this.right._checkConsistency(e)}},checkConsistency:{value:function(){var e=[];this._checkConsistency(e);if(e.length>1)for(var t=0;t<e.length-1;t++){var n=e[0],r=e[1];n[1]<=r[0]||console("ERROR: INCONSISTENCY CHECK Failed, ranges are not ordered in btree")}}},_collect:{value:function(e,t){this.left&&this.left._collect(e,t);if(e.length>=t)return;e.push(this),this.right&&this.right._collect(e,t)}},collect:{value:function(e){var t=[];return this._collect(t,e),t}},insert:{value:function(e){if(e.range[1]<=this.content.range[0]){if(e.range[1]===this.content.range[0])return e.kind==="multi-parts"?this.content.mergeRequests(e.requests):this.content.mergeRequests(e),this.left&&this.content.canMergeRequest(this.left.content)&&(this.content.mergeRequests(this.left.content._requests),this.left.remove(this.left.content)),this.parent&&this.parent.content.canMergeRequest(this.content)&&(this.parent.content.mergeRequests(this.content._requests),this.remove(this.content)),null;if(this.left)return this.left.insert(e);var t=Object.create(n);return t.parent=this,t.content=e,this.left=t,t}if(e.range[0]>=this.content.range[1]){if(e.range[0]===this.content.range[1])return e.kind==="multi-parts"?this.content.mergeRequests(e.requests):this.content.mergeRequests(e),this.right&&this.content.canMergeRequest(this.right.content)&&(this.content.mergeRequests(this.right.content._requests),this.right.remove(this.right.content)),this.parent&&this.parent.content.canMergeRequest(this.content)&&(this.parent.content.mergeRequests(this.content._requests),this.remove(this.content)),null;if(this.right)return this.right.insert(e);var t=Object.create(n);return t.parent=this,t.content=e,this.right=t,t}console.log("ERROR: should not reach")}},contains:{value:function(e){return this.node===e?!0:this.left&&this.left.contains(e)?!0:this.right&&this.right.contains(e)?!0:!1}},min:{value:function(){var e=this;while(e.left)e=e.left;return e}},_updateParentWithNode:{value:function(e){this.parent&&(this===this.parent.left?this.parent.left=e:this.parent.right=e),e&&(e.parent=this.parent)}},remove:{value:function(e){if(e.range[1]<=this.content.range[0])this.left.remove(e);else if(e.range[0]>=this.content.range[1])this.right.remove(e);else if(e===this.content)if(this.left&&this.right){var t=this.right.min();this.content=t.content,t._updateParentWithNode(t.right)}else this.left||this.right?this.left?this._updateParentWithNode(this.left):this._updateParentWithNode(this.right):this._updateParentWithNode(null);else debugger}}}),r=Object.create(Object,{MISSING_DESCRIPTION:{value:"MISSING_DESCRIPTION"},INVALID_PATH:{value:"INVALID_PATH"},INVALID_TYPE:{value:"INVALID_TYPE"},XMLHTTPREQUEST_STATUS_ERROR:{value:"XMLHTTPREQUEST_STATUS_ERROR"},NOT_FOUND:{value:"NOT_FOUND"},MAX_CONCURRENT_XHR:{value:6},ARRAY_BUFFER:{value:"ArrayBuffer"},_resources:{value:null,writable:!0},_requestTree:{value:null,writable:!0},_observers:{value:null,writable:!0},observers:{get:function(){return this._observers},set:function(e){this._observers=e}},_containsResource:{enumerable:!1,value:function(e){return this._resources[e]?!0:!1}},init:{value:function(){this._requestTree=null,this._resources={},this._resourcesStatus={},this._observers=[],this._resourcesBeingProcessedCount=0}},_storeResource:{enumerable:!1,value:function(e,t){if(!e){debugger;console.log("ERROR: entry does not contain id, cannot store");return}this._containsResource[e]&&console.log("WARNING: resource:"+e+" is already stored, overriding"),this._resources[e]=t}},_getResource:{enumerable:!1,value:function(e){return this._resources[e]}},_resourcesStatus:{value:null,writable:!0},_resourcesBeingProcessedCount:{value:0,writable:!0},_resourcesToBeProcessed:{value:null,writable:!0},_loadResource:{value:function(e,t){var n=this,i,s=e.path;e.kind==="multi-parts"?(i=e.requests[0].type,s=e.requests[0].path):(i=e.type,s=e.path);if(!i){t.handleError(r.INVALID_TYPE,null);return}if(!s){t.handleError(r.INVALID_PATH);return}var o=new XMLHttpRequest;o.open("GET",s,!0),o.responseType=i===this.ARRAY_BUFFER?"arraybuffer":"text";if(e.range){var u="bytes="+e.range[0]+"-"+(e.range[1]-1);o.setRequestHeader("Range",u)}o.setRequestHeader("If-Modified-Since","Sat, 1 Jan 1970 00:00:00 GMT"),o.onload=function(n){this.status==200||this.status==206?e.kind==="multi-parts"?e.requests.forEach(function(n){var r=this.response.slice(n.range[0]-e.range[0],n.range[1]-e.range[0]);t.resourceAvailable(n,r)},this):t.resourceAvailable(e,this.response):setdelegate.handleError(r.XMLHTTPREQUEST_STATUS_ERROR,this.status)},o.send(null)}},_processNextResource:{value:function(){this._requestTree&&this._handleRequest(this._requestTree.content)}},fireResourceAvailable:{value:function(e){this.observers&&this.observers.forEach(function(t){t.resourceAvailable&&t.resourceAvailable(e)},this)}},_handleRequest:{value:function(e){var i=this._resourcesStatus[e.id],s=null,o=null;if(i){if(i.status==="loading")return;s=i.node,o=i.status}if(this._resourcesBeingProcessedCount>=r.MAX_CONCURRENT_XHR&&e.type!=="text"){if(!o){var u=null,a;e.kind==="multi-parts"?a=Object.create(t).initWithRequests(e.requests):a=Object.create(t).initWithRequests([e]);if(!this._requestTree){var f=Object.create(n);f.content=a,this._requestTree=f,u=f}else u=this._requestTree.insert(a);e.kind==="multi-parts"?e.requests.forEach(function(e){this._resourcesStatus[e.id]={status:"queued",node:u}},this):this._resourcesStatus[e.id]={status:"queued",node:u}}return}var l=this,c={};s&&this._resourcesToBeProcessed&&this._resourcesToBeProcessed.remove(s);if(s){var h=s===this._requestTree;this._requestTree&&this._requestTree.remove(s.content),h&&(this._requestTree=null)}e.kind==="multi-parts"?e.requests.forEach(function(e){this._resourcesStatus[e.id]={status:"loading"}},this):this._resourcesStatus[e.id]={status:"loading"},c.resourceAvailable=function(e,t){var n=e.delegate.convert(t,e.ctx);l._storeResource(e.id,n),e.delegate.resourceAvailable(n,e.ctx),l._resourcesBeingProcessedCount--,delete l._resourcesStatus[e.id],l.fireResourceAvailable.call(l,e.id),e.type!=="text"&&l._resourcesBeingProcessedCount<r.MAX_CONCURRENT_XHR&&l._processNextResource()},c.handleError=function(t,n){e.delegate.handleError(t,n)},l._resourcesBeingProcessedCount++,this._loadResource(e,c)}},_handleAccessorResourceLoading:{value:function(e,t,n){var r=[e.byteOffset?e.byteOffset:0,e.byteStride*e.count+e.byteOffset];this._handleRequest({id:e.id,range:r,type:e.buffer.description.type,path:e.buffer.description.path,delegate:t,ctx:n,kind:"single-part"},null)}},_handleTypedArrayLoading:{value:function(e,t,n){if(e.type==="Uint16Array"){var r=[e.byteOffset,e.byteOffset+e.length*Uint16Array.BYTES_PER_ELEMENT];this._handleRequest({id:e.id,range:r,type:e.buffer.description.type,path:e.buffer.description.path,delegate:t,ctx:n,kind:"single-part"},null)}}},shaderDelegate:{value:{handleError:function(e,t){console.log("ERROR:shaderDelegate:"+e+" :"+t)},convert:function(e,t){return e},resourceAvailable:function(e,t){t.sources[t.stage]=e;var n=this;if(t.sources["x-shader/x-fragment"]&&t.sources["x-shader/x-vertex"]){var r=t.programCtx.delegate,i=r.convert(t.sources,t.programCtx.ctx);t.programCtx.resourceManager._storeResource(t.programCtx.id,i),r.resourceAvailable(i,t.programCtx.ctx)}}}},_handleProgramLoading:{value:function(e,t,n){var r={delegate:t,ctx:n,resourceManager:this,id:e.id},i={},s={stage:"x-shader/x-fragment",sources:i,programCtx:r},o={stage:"x-shader/x-vertex",sources:i,programCtx:r};this.getResource(e.description["x-shader/x-fragment"],this.shaderDelegate,s),this.getResource(e.description["x-shader/x-vertex"],this.shaderDelegate,o)}},_handleShaderLoading:{value:function(e,t,n){this._handleRequest({id:e.id,type:"text",path:e.description.path,delegate:t,ctx:n,kind:"single-part"},null)}},_handleImageLoading:{value:function(e,t,n){function r(e,n,r){var i=r.createTexture();r.bindTexture(r.TEXTURE_2D,i),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.bindTexture(r.TEXTURE_2D,null),delete o._resourcesStatus[n];var s=t.convert(i,r);o._storeResource(n,s),t.resourceAvailable(s,r),o.fireResourceAvailable.call(o,n)}var i=this._resourcesStatus[e.id],s=null;if(i&&i.status==="loading")return;this._resourcesStatus[e.id]={status:"loading"};var o=this;if(e.description.path){var u=new Image;u.onload=function(){r(u,e.id,n)},u.src=e.description.path}else e.description.image&&r(e.description.image,e.id,n)}},getResource:{value:function(e,t,n){var r=this._getResource(e.id);return r?r:(e.type==="accessor"?this._handleAccessorResourceLoading(e,t,n):e.type==="program"?this._handleProgramLoading(e,t,n):e.type==="shader"?this._handleShaderLoading(e,t,n):e.type==="image"?this._handleImageLoading(e,t,n):this._handleTypedArrayLoading(e,t,n),null)}},removeAllResources:{value:function(){this._resources={}}}});return e&&(e.WebGLTFResourceManager=r),r})