montageDefine("572fd27","core/event/mutable-event",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage;if(typeof window!="undefined")var i={},s={value:null},o=function(e,t){var n="_"+t;r.defineProperty(e,n,{value:undefined}),r.defineProperty(e,t,{get:function(e,t){return function(){return this.hasOwnProperty(t)?this[t]:this._event?this._event[e]:undefined}}(t,n),set:function(e){return function(t){this[e]=t}}(n)})},u=t.MutableEvent=r.create(r,{fromEvent:{value:function(e){var t=e.type,n=i[t],r;return n||(n=function(){},n.prototype=u.create()._initPrototypeWithEvent(e),i[t]=n),r=new n,r._initWithEvent(e),r}},fromType:{value:function(e,t,n,r){var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t,n,r),this.fromEvent(i)}},_initPrototypeWithEvent:{value:function(e){var t;for(t in e){if(this[t])continue;o(this,t)}return o(this,"replayed"),this}},_initWithEvent:{value:function(e){return this._event=e,this}},preventDefault:{value:function(){this._event.preventDefault()}},stopImmediatePropagation:{value:function(){this._event.stopImmediatePropagation(),this.propagationStopped=!0,this.immediatePropagationStopped=!0}},propagationStopped:{value:!1},immediatePropagationStopped:{value:!1},mutable:{value:!0},target:{value:null},stopPropagation:{value:function(){this._event.stopPropagation(),this.propagationStopped=!0}},stop:{value:function(){this.preventDefault(),this.stopPropagation()}}})}})