require("runtime/dependencies/gl-matrix");var Renderer=require("runtime/renderer").Renderer,Pass=require("runtime/pass").Pass;exports.Engine=Object.create(Object.prototype,{_renderer:{value:null,writable:!0},_rootPass:{value:null,writable:!0},rootPass:{get:function(){return this._rootPass},set:function(e){this._rootPass=e}},renderer:{get:function(){return this._renderer},set:function(e){this._renderer=e}},init:{value:function(e,t){return this.renderer=Object.create(Renderer),this.rootPass=Object.create(Pass),this.rootPass.init(),this.renderer.webGLContext=e,this}},render:{value:function(){this.renderer.resetStates(),this.rootPass.execute(this)}}})