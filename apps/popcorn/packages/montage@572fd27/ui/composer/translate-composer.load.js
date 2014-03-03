montageDefine("572fd27","ui/composer/translate-composer",{dependencies:["montage","ui/composer/composer","core/event/event-manager"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/composer/composer").Composer,s=e("core/event/event-manager").defaultEventManager,o=t.TranslateComposer=r.create(i,{_NATIVE_ELEMENTS:{value:["A","IFRAME","EMBED","OBJECT","VIDEO","AUDIO","CANVAS","LABEL","INPUT","BUTTON","SELECT","TEXTAREA","KEYGEN","DETAILS","COMMAND"]},_WHEEL_POINTER:{value:"wheel",writable:!1},_externalUpdate:{value:!0},isAnimating:{value:!1},frame:{value:function(e){this.isAnimating&&this._animationInterval(),this._externalUpdate=!1}},_pointerSpeedMultiplier:{value:1},pointerSpeedMultiplier:{get:function(){return this._pointerSpeedMultiplier},set:function(e){this._pointerSpeedMultiplier=e}},pointerStartEventPosition:{value:null},_shouldDispatchTranslate:{value:!1},_isSelfUpdate:{value:!1},_allowFloats:{value:!1},allowFloats:{get:function(){return this._allowFloats},set:function(e){this._allowFloats!==e&&(this._allowFloats=e,this.translateX=this._translateX,this.translateY=this._translateY)}},_translateX:{value:0},translateX:{get:function(){return this._translateX},set:function(e){if(this._axis==="vertical")this._translateX=this._minTranslateX||0;else{var t=isNaN(e)?0:this._allowFloats?parseFloat(e):e>>0;this._minTranslateX!==null&&t<this._minTranslateX&&(t=this._minTranslateX),this._maxTranslateX!==null&&t>this._maxTranslateX&&(t=this._maxTranslateX),this._isSelfUpdate||(this.isAnimating=!1),this._translateX=t}}},_translateY:{value:0},translateY:{get:function(){return this._translateY},set:function(e){if(this._axis==="horizontal")this._translateY=this._minTranslateY||0;else{var t=isNaN(e)?0:this._allowFloats?parseFloat(e):e>>0;this._minTranslateY!==null&&t<this._minTranslateY&&(t=this._minTranslateY),this._maxTranslateY!==null&&t>this._maxTranslateY&&(t=this._maxTranslateY),this._isSelfUpdate||(this.isAnimating=!1),this._translateY=t}}},_minTranslateX:{value:null},minTranslateX:{get:function(){return this._minTranslateX},set:function(e){e!==null&&(e=parseFloat(e)),this._minTranslateX!=e&&(e!==null&&this._translateX<e&&(this.translateX=e),this._minTranslateX=e)}},_maxTranslateX:{value:null},maxTranslateX:{get:function(){return this._maxTranslateX},set:function(e){e!==null&&(e=parseFloat(e)),this._maxTranslateX!=e&&(e!==null&&this._translateX>e&&(this.translateX=e),this._maxTranslateX=e)}},_minTranslateY:{value:null},minTranslateY:{get:function(){return this._minTranslateY},set:function(e){e!==null&&(e=parseFloat(e)),this._minTranslateY!=e&&(e!==null&&this._translateY<e&&(this.translateY=e),this._minTranslateY=e)}},_maxTranslateY:{value:null},maxTranslateY:{get:function(){return this._maxTranslateY},set:function(e){e!==null&&(e=parseFloat(e)),this._maxTranslateY!=e&&(e!==null&&this._translateY>e&&(this.translateY=e),this._maxTranslateY=e)}},_axis:{value:"both"},axis:{get:function(){return this._axis},set:function(e){switch(e){case"vertical":case"horizontal":this._axis=e,this.translateX=this._translateX,this.translateY=this._translateY;break;default:this._axis="both"}}},invertAxis:{depends:["invertXAxis","invertYAxis"],get:function(){return this._invertXAxis===this._invertYAxis?this._invertXAxis:null},set:function(e){this.invertXAxis=e,this.invertYAxis=e}},_invertXAxis:{value:!1},invertXAxis:{get:function(){return this._invertXAxis},set:function(e){this._invertXAxis=!!e}},_invertYAxis:{value:!1},invertYAxis:{get:function(){return this._invertYAxis},set:function(e){this._invertYAxis=!!e}},startTranslateSpeed:{value:500},startTranslateRadius:{value:8},_hasMomentum:{value:!0},hasMomentum:{get:function(){return this._hasMomentum},set:function(e){this._hasMomentum=e?!0:!1}},__momentumDuration:{value:650},_momentumDuration:{get:function(){return this.__momentumDuration},set:function(e){this.__momentumDuration=isNaN(e)?1:e>>0,this.__momentumDuration<1&&(this.__momentumDuration=1)}},_pointerX:{value:null},_pointerY:{value:null},_touchIdentifier:{value:null},_isFirstMove:{value:!1},_start:{value:function(e,t,n){this.pointerStartEventPosition={pageX:e,pageY:t,target:n},this._pointerX=e,this._pointerY=t,window.Touch?(document.addEventListener("touchend",this,!0),document.addEventListener("touchmove",this,!0)):(document.addEventListener("mouseup",this,!0),document.addEventListener("mousemove",this,!0)),this.isAnimating=!1,this._isFirstMove=!0}},_observedPointer:{value:null},_shouldPreventDefault:{value:function(e){return!!e.target.tagName&&o._NATIVE_ELEMENTS.indexOf(e.target.tagName)===-1&&!e.target.isContentEditable}},captureMousedown:{value:function(e){if(e.button!==0)return;this._shouldPreventDefault(e)&&e.preventDefault(),this._observedPointer="mouse",this._start(e.clientX,e.clientY,e.target)}},handleMousedown:{value:function(e){e.button===0&&!this.eventManager.componentClaimingPointer(this._observedPointer)&&this.eventManager.claimPointer(this._observedPointer,this)}},captureMousemove:{value:function(e){this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?(e.preventDefault(),this._move(e.clientX,e.clientY)):this.axis!=="both"?this._analyzeMovement(e):this._stealPointer()&&(e.preventDefault(),this._move(e.clientX,e.clientY))}},captureMouseup:{value:function(e){this._end(e)}},_releaseInterest:{value:function(){window.Touch?(document.removeEventListener("touchend",this,!0),document.removeEventListener("touchmove",this,!0)):(document.removeEventListener("mouseup",this,!0),document.removeEventListener("mousemove",this,!0)),this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null}},captureTouchstart:{value:function(e){this._shouldPreventDefault(e)&&e.preventDefault();if(this._observedPointer!==null&&this.eventManager.isPointerClaimedByComponent(this._observedPointer,this))return;e.targetTouches.length===1&&(this._observedPointer=e.targetTouches[0].identifier,this._start(e.targetTouches[0].clientX,e.targetTouches[0].clientY,e.targetTouches[0].target))}},handleTouchstart:{value:function(e){this.eventManager.componentClaimingPointer(this._observedPointer)||e.targetTouches.length===1&&(this._shouldPreventDefault(e)&&e.preventDefault(),this.eventManager.claimPointer(this._observedPointer,this))}},captureTouchmove:{value:function(e){var t=0,n=e.changedTouches.length;while(t<n&&e.changedTouches[t].identifier!==this._observedPointer)t++;t<n&&(this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?(e.preventDefault(),this._move(e.changedTouches[t].clientX,e.changedTouches[t].clientY)):this._analyzeMovement(e.changedTouches[t]))}},captureTouchend:{value:function(e){var t=0,n=e.changedTouches.length;while(t<n&&e.changedTouches[t].identifier!==this._observedPointer)t++;t<n&&this._end(e.changedTouches[t])}},_analyzeMovement:{value:function(e){var t=e.velocity;if(!t)return;var n=.7853981633974483,r=2.356194490192345,i=-2.356194490192345,s=-0.7853981633974483,o,u,a,f,l,c,h,p;c=t.speed;if(0===t.speed||isNaN(t.speed))return;l=t.angle,"horizontal"===this.axis?(a=l<=n&&l>=s,f=l>=r||l<=i,(a||f)&&this._stealPointer()):"vertical"===this.axis?(o=l<=s&&l>=i,u=l>=n&&l<=r,(o||u)&&this._stealPointer()):c>=this.startTranslateSpeed?this._stealPointer():(h=this.pointerStartEventPosition.pageX-e.pageX,p=this.pointerStartEventPosition.pageY-e.pageY,h*h+p*p>this.startTranslateRadius*this.startTranslateRadius&&this._stealPointer())}},_stealPointer:{value:function(){return this.eventManager.claimPointer(this._observedPointer,this)}},_translateEndTimeout:{value:null},captureMousewheel:{value:function(e){this.eventManager.componentClaimingPointer(this._WHEEL_POINTER)||this.eventManager.claimPointer(this._WHEEL_POINTER,this.component)}},handleMousewheel:{value:function(e){var t=this;if(this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this.component)){var n=this._translateY;this._dispatchTranslateStart(),this.translateY=this._translateY-e.wheelDeltaY*20/120,this._dispatchTranslate(),window.clearTimeout(this._translateEndTimeout),this._translateEndTimeout=window.setTimeout(function(){t._dispatchTranslateEnd()},400),n!==this._translateY&&this._shouldPreventDefault(e)&&e.preventDefault(),this.eventManager.forfeitPointer(this._WHEEL_POINTER,this.component)}}},_move:{value:function(e,t){var n;this._isFirstMove&&(this._dispatchTranslateStart(this._translateX,this._translateY),this._isFirstMove=!1),this._isSelfUpdate=!0,this._axis!="vertical"&&(n=this._invertXAxis?this._pointerX-e:e-this._pointerX,this.translateX+=n*this._pointerSpeedMultiplier),this._axis!="horizontal"&&(n=this._invertYAxis?this._pointerY-t:t-this._pointerY,this.translateY+=n*this._pointerSpeedMultiplier),this._isSelfUpdate=!1,this._pointerX=e,this._pointerY=t,this._shouldDispatchTranslate&&this._dispatchTranslate()}},_bezierTValue:{value:function(e,t,n,r,i){var s=1-3*r+3*t,o=3*r-6*t,u=3*t,a=.5,f,l,c,h;for(l=0;l<10;l++)h=a*a,f=3*s*h+2*o*a+u,c=1-a,a-=(3*(c*c*a*t+c*h*r)+h*a-e)/f;return h=a*a,c=1-a,3*(c*c*a*n+c*h*i)+h*a}},_dispatchTranslateStart:{value:function(e,t){var n=document.createEvent("CustomEvent");n.initCustomEvent("translateStart",!0,!0,null),n.translateX=e,n.translateY=t,this.dispatchEvent(n)}},_dispatchTranslateEnd:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translateEnd",!0,!0,null),e.translateX=this._translateX,e.translateY=this._translateY,this.dispatchEvent(e)}},_dispatchTranslate:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translate",!0,!0,null),e.translateX=this._translateX,e.translateY=this._translateY,this.dispatchEvent(e)}},animateBouncingX:{value:!1,enumerable:!1},startTimeBounceX:{value:!1,enumerable:!1},animateBouncingY:{value:!1,enumerable:!1},startTimeBounceY:{value:!1,enumerable:!1},animateMomentum:{value:!1,enumerable:!1},startTime:{value:null,enumerable:!1},startX:{value:null,enumerable:!1},posX:{value:null,enumerable:!1},endX:{value:null,enumerable:!1},startY:{value:null,enumerable:!1},posY:{value:null,enumerable:!1},endY:{value:null,enumerable:!1},translateStrideX:{value:null},translateStrideY:{value:null},translateStrideDuration:{value:330},_animationInterval:{value:function(){var e=Date.now(),t,n,r,i,s=!1;this.animateMomentum&&(t=e-this.startTime,t<this.__momentumDuration?(this.posX=this.startX-(this.momentumX+this.momentumX*(this.__momentumDuration-t)/this.__momentumDuration)*t/1e3/2,this.posY=this.startY-(this.momentumY+this.momentumY*(this.__momentumDuration-t)/this.__momentumDuration)*t/1e3/2,this.translateStrideX&&this.startStrideXTime===null&&(this.__momentumDuration-t<this.translateStrideDuration||Math.abs(this.posX-this.endX)<this.translateStrideX*.75)&&(this.startStrideXTime=e),this.translateStrideY&&this.startStrideYTime===null&&(this.__momentumDuration-t<this.translateStrideDuration||Math.abs(this.posY-this.endY)<this.translateStrideY*.75)&&(this.startStrideYTime=e)):this.animateMomentum=!1),n=Math.round(this.endX/this.translateStrideX),this.startStrideXTime&&e-this.startStrideXTime>0&&(e-this.startStrideXTime<this.translateStrideDuration?(t=this._bezierTValue((e-this.startStrideXTime)/this.translateStrideDuration,.275,0,.275,1),this.posX=this.posX*(1-t)+n*this.translateStrideX*t,s=!0):this.posX=n*this.translateStrideX),n=Math.round(this.endY/this.translateStrideY),this.startStrideYTime&&e-this.startStrideYTime>0&&(e-this.startStrideYTime<this.translateStrideDuration?(t=this._bezierTValue((e-this.startStrideYTime)/this.translateStrideDuration,.275,0,.275,1),this.posY=this.posY*(1-t)+n*this.translateStrideY*t,s=!0):this.posY=n*this.translateStrideY),r=this.posX,i=this.posY,this._isSelfUpdate=!0,this.translateX=r,this.translateY=i,this._isSelfUpdate=!1,this.isAnimating=this.animateMomentum||s,this.isAnimating?this.needsFrame=!0:this._dispatchTranslateEnd()}},_end:{value:function(e){this.startTime=Date.now(),this.endX=this.posX=this.startX=this._translateX,this.endY=this.posY=this.startY=this._translateY,this._hasMomentum&&(e.velocity.speed>40||this.translateStrideX||this.translateStrideY)?(this._axis!="vertical"?this.momentumX=e.velocity.x*this._pointerSpeedMultiplier*(this._invertXAxis?1:-1):this.momentumX=0,this._axis!="horizontal"?this.momentumY=e.velocity.y*this._pointerSpeedMultiplier*(this._invertYAxis?1:-1):this.momentumY=0,this.endX=this.startX-this.momentumX*this.__momentumDuration/2e3,this.endY=this.startY-this.momentumY*this.__momentumDuration/2e3,this.startStrideXTime=null,this.startStrideYTime=null,this.animateMomentum=!0):this.animateMomentum=!1,this.animateMomentum?this._animationInterval():this._isFirstMove||this._dispatchTranslateEnd(),this._releaseInterest()}},surrenderPointer:{value:function(e,t){return!0}},eventManager:{get:function(){return s}},load:{value:function(){window.Touch?(this._element.addEventListener("touchstart",this,!0),this._element.addEventListener("touchstart",this,!1)):(this._element.addEventListener("mousedown",this,!0),this._element.addEventListener("mousedown",this,!1),this._element.addEventListener("mousewheel",this,!1),this._element.addEventListener("mousewheel",this,!0)),this.eventManager.isStoringPointerEvents=!0}},addEventListener:{value:function(e,t,n){i.addEventListener.call(this,e,t,n),e==="translate"&&(this._shouldDispatchTranslate=!0)}}})}})