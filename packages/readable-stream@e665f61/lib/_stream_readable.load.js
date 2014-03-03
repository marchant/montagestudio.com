montageDefine("e665f61","lib/_stream_readable",{dependencies:["events","stream","util","string_decoder"],factory:function(e,t,n){function r(t){t=t||{};var n=t.highWaterMark;this.highWaterMark=n||0===n?n:16384,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=!1,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.calledRead=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!t.objectMode,this.defaultEncoding=t.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(E||(E=e("string_decoder").StringDecoder),this.decoder=new E(t.encoding),this.encoding=t.encoding)}function i(e){return this instanceof i?(this._readableState=new r(e,this),this.readable=!0,C.call(this),void 0):new i(e)}function a(e,t,n,r,i){var a=u(t,n);if(a)e.emit("error",a);else if(null===n||void 0===n)t.reading=!1,t.ended||c(e,t);else if(t.objectMode||n&&n.length>0)if(t.ended&&!i){var s=Error("stream.push() after EOF");e.emit("error",s)}else if(t.endEmitted&&i){var s=Error("stream.unshift() after end event");e.emit("error",s)}else!t.decoder||i||r||(n=t.decoder.write(n)),t.length+=t.objectMode?1:n.length,i?t.buffer.unshift(n):(t.reading=!1,t.buffer.push(n)),t.needReadable&&h(e),p(e,t);else i||(t.reading=!1);return o(t)}function o(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}function s(e){if(e>=x)e=x;else{e--;for(var t=1;32>t;t<<=1)e|=e>>t;e++}return e}function l(e,t){return 0===t.length&&t.ended?0:t.objectMode?0===e?0:1:isNaN(e)||null===e?t.flowing&&t.buffer.length?t.buffer[0].length:t.length:0>=e?0:(e>t.highWaterMark&&(t.highWaterMark=s(e)),e>t.length?t.ended?t.length:(t.needReadable=!0,0):e)}function u(e,t){var n=null;return Buffer.isBuffer(t)||"string"==typeof t||null===t||void 0===t||e.objectMode||n||(n=new TypeError("Invalid non-string/buffer chunk")),n}function c(e,t){if(t.decoder&&!t.ended){var n=t.decoder.end();n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.ended=!0,t.length>0?h(e):y(e)}function h(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,t.sync?process.nextTick(function(){d(e)}):d(e))}function d(e){e.emit("readable")}function p(e,t){t.readingMore||(t.readingMore=!0,process.nextTick(function(){f(e,t)}))}function f(e,t){for(var n=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(e.read(0),n!==t.length);)n=t.length;t.readingMore=!1}function m(e){return function(){var t=e._readableState;t.awaitDrain--,0===t.awaitDrain&&v(e)}}function v(e){function t(e){var t=e.write(n);!1===t&&r.awaitDrain++}var n,r=e._readableState;for(r.awaitDrain=0;r.pipesCount&&null!==(n=e.read());)if(1===r.pipesCount?t(r.pipes,0,null):r.pipes.forEach(t),e.emit("data",n),r.awaitDrain>0)return;return 0===r.pipesCount?(r.flowing=!1,w.listenerCount(e,"data")>0&&_(e),void 0):(r.ranOut=!0,void 0)}function g(){this._readableState.ranOut&&(this._readableState.ranOut=!1,v(this))}function _(e,t){var n=e._readableState;if(n.flowing)throw Error("Cannot switch to old mode now.");var r=t||!1,i=!1;e.readable=!0,e.pipe=C.prototype.pipe,e.on=e.addListener=C.prototype.on,e.on("readable",function(){i=!0;for(var t;!r&&null!==(t=e.read());)e.emit("data",t);null===t&&(i=!1,e._readableState.needReadable=!0)}),e.pause=function(){r=!0,this.emit("pause")},e.resume=function(){r=!1,i?process.nextTick(function(){e.emit("readable")}):this.read(0),this.emit("resume")},e.emit("readable")}function b(e,t){var n,r=t.buffer,i=t.length,a=!!t.decoder,o=!!t.objectMode;if(0===r.length)return null;if(0===i)n=null;else if(o)n=r.shift();else if(!e||e>=i)n=a?r.join(""):Buffer.concat(r,i),r.length=0;else if(r[0].length>e){var s=r[0];n=s.slice(0,e),r[0]=s.slice(e)}else if(e===r[0].length)n=r.shift();else{n=a?"":new Buffer(e);for(var l=0,u=0,c=r.length;c>u&&e>l;u++){var s=r[0],h=Math.min(e-l,s.length);a?n+=s.slice(0,h):s.copy(n,l,0,h),s.length>h?r[0]=s.slice(h):r.shift(),l+=h}}return n}function y(e){var t=e._readableState;if(t.length>0)throw Error("endReadable called on non-empty stream");!t.endEmitted&&t.calledRead&&(t.ended=!0,process.nextTick(function(){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}))}n.exports=i,i.ReadableState=r;var w=e("events").EventEmitter;w.listenerCount||(w.listenerCount=function(e,t){return e.listeners(t).length});var E,C=e("stream"),S=e("util");S.inherits(i,C),i.prototype.push=function(e,t){var n=this._readableState;return"string"!=typeof e||n.objectMode||(t=t||n.defaultEncoding,t!==n.encoding&&(e=new Buffer(e,t),t="")),a(this,n,e,t,!1)},i.prototype.unshift=function(e){var t=this._readableState;return a(this,t,e,"",!0)},i.prototype.setEncoding=function(t){E||(E=e("string_decoder").StringDecoder),this._readableState.decoder=new E(t),this._readableState.encoding=t};var x=8388608;i.prototype.read=function(e){var t=this._readableState;t.calledRead=!0;var n=e;if(("number"!=typeof e||e>0)&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return h(this),null;if(e=l(e,t),0===e&&t.ended)return 0===t.length&&y(this),null;var r=t.needReadable;t.length-e<=t.highWaterMark&&(r=!0),(t.ended||t.reading)&&(r=!1),r&&(t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1),r&&!t.reading&&(e=l(n,t));var i;return i=e>0?b(e,t):null,null===i&&(t.needReadable=!0,e=0),t.length-=e,0!==t.length||t.ended||(t.needReadable=!0),t.ended&&!t.endEmitted&&0===t.length&&y(this),i},i.prototype._read=function(){this.emit("error",Error("not implemented"))},i.prototype.pipe=function(e,t){function n(e){e===u&&i()}function r(){e.end()}function i(){e.removeListener("close",o),e.removeListener("finish",s),e.removeListener("drain",p),e.removeListener("error",a),e.removeListener("unpipe",n),u.removeListener("end",r),u.removeListener("end",i),(!e._writableState||e._writableState.needDrain)&&p()}function a(t){l(),e.removeListener("error",a),0===w.listenerCount(e,"error")&&e.emit("error",t)}function o(){e.removeListener("finish",s),l()}function s(){e.removeListener("close",o),l()}function l(){u.unpipe(e)}var u=this,c=this._readableState;switch(c.pipesCount){case 0:c.pipes=e;break;case 1:c.pipes=[c.pipes,e];break;default:c.pipes.push(e)}c.pipesCount+=1;var h=(!t||t.end!==!1)&&e!==process.stdout&&e!==process.stderr,d=h?r:i;c.endEmitted?process.nextTick(d):u.once("end",d),e.on("unpipe",n);var p=m(u);return e.on("drain",p),e._events.error?Array.isArray(e._events.error)?e._events.error.unshift(a):e._events.error=[a,e._events.error]:e.on("error",a),e.once("close",o),e.once("finish",s),e.emit("pipe",u),c.flowing||(this.on("readable",g),c.flowing=!0,process.nextTick(function(){v(u)})),e},i.prototype.unpipe=function(e){var t=this._readableState;if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,this.removeListener("readable",g),t.flowing=!1,e&&e.emit("unpipe",this),this);if(!e){var n=t.pipes,r=t.pipesCount;t.pipes=null,t.pipesCount=0,this.removeListener("readable",g),t.flowing=!1;for(var i=0;r>i;i++)n[i].emit("unpipe",this);return this}var i=t.pipes.indexOf(e);return-1===i?this:(t.pipes.splice(i,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this),this)},i.prototype.on=function(e,t){var n=C.prototype.on.call(this,e,t);if("data"!==e||this._readableState.flowing||_(this),"readable"===e&&this.readable){var r=this._readableState;r.readableListening||(r.readableListening=!0,r.emittedReadable=!1,r.needReadable=!0,r.reading?r.length&&h(this,r):this.read(0))}return n},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){_(this),this.read(0),this.emit("resume")},i.prototype.pause=function(){_(this,!0),this.emit("pause")},i.prototype.wrap=function(e){var t=this._readableState,n=!1,r=this;e.on("end",function(){if(t.decoder&&!t.ended){var e=t.decoder.end();e&&e.length&&r.push(e)}r.push(null)}),e.on("data",function(i){if(t.decoder&&(i=t.decoder.write(i)),i&&(t.objectMode||i.length)){var a=r.push(i);a||(n=!0,e.pause())}});for(var i in e)"function"==typeof e[i]&&this[i]===void 0&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));var a=["error","close","destroy","pause","resume"];return a.forEach(function(t){e.on(t,r.emit.bind(r,t))}),r._read=function(){n&&(n=!1,e.resume())},r},i._fromList=b}});