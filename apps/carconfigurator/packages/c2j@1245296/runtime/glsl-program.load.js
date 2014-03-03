montageDefine("1245296","runtime/glsl-program",{dependencies:["runtime/dependencies/gl-matrix"],factory:function(e,t,n){e("runtime/dependencies/gl-matrix");var r=t.GLSLProgram=Object.create(Object.prototype,{VERTEX_SHADER:{value:"x-shader/x-vertex"},FRAGMENT_SHADER:{value:"x-shader/x-fragment"},VERTEX:{value:"VERTEX"},NORMAL:{value:"NORMAL"},UV_0:{value:"UV_0"},MODELVIEW_MATRIX:{value:"MODELVIEW_MATRIX"},PROJECTION_MATRIX:{value:"PROJECTION_MATRIX"},MODELVIEW_PROJECTION_MATRIX:{value:"MODELVIEW_PROJECTION_MATRIX"},_GLTypes:{enumerable:!1,value:null,writable:!0},_shaders:{enumerable:!1,value:null,writable:!0},shaders:{enumerable:!1,get:function(){return this._shaders},set:function(e){this._shaders=e}},_errorLogs:{enumerable:!1,value:null,writable:!0},errorLogs:{enumerable:!1,get:function(){return this._errorLogs},set:function(e){this._errorLogs=e}},_pendingCommits:{value:null,writable:!0},pendingCommits:{get:function(){return this._pendingCommits},set:function(e){this._pendingCommits=e}},_symbolToLocation:{value:null,writable:!0},symbolToLocation:{enumerable:!1,get:function(){return this._symbolToLocation},set:function(e){this._symbolToLocation=e}},_symbolToActiveInfo:{enumerable:!1,value:null,writable:!0},symbolToActiveInfo:{get:function(){return this._symbolToActiveInfo},set:function(e){this._symbolToActiveInfo=e}},_semanticToSymbol:{value:null,writable:!0},semanticToSymbol:{enumerable:!1,get:function(){return this._semanticToSymbol},set:function(e){this._semanticToSymbol=e}},_symbolToSemantic:{value:null,writable:!0},symbolToSemantic:{get:function(){return this._symbolToSemantic},set:function(e){this._symbolToSemantic=e}},_symbolToValue:{value:null,writable:!0},symbolToValue:{get:function(){return this._symbolToValue},set:function(e){this._symbolToValue=e}},_uniformSymbols:{value:null,writable:!0},uniformSymbols:{enumerable:!1,get:function(){return this._uniformSymbols},set:function(e){this._uniformSymbols=e}},_attributeSymbols:{value:null,writable:!0},attributeSymbols:{enumerable:!1,get:function(){return this._attributeSymbols},set:function(e){this._attributeSymbols=e}},_GLProgram:{enumerable:!1,value:null,writable:!0},GLProgram:{enumerable:!1,get:function(){return this._GLProgram},set:function(e){this._GLProgram=e}},getTypeForSymbol:{value:function(e){var t=null,n=this.symbolToActiveInfo[e];return n&&(t=n.type),t}},getLocationForSymbol:{value:function(e){return this.symbolToLocation[e]}},getSymbolForSemantic:{value:function(e){return this.semanticToSymbol[e]}},setSymbolForSemantic:{value:function(e,t){e==="none"&&(e=null),t==="none"&&(t=null);if(!this.symbolToActiveInfo[e])return!1;if(t&&this.semanticToSymbol[t])return!1;if(e){var n=this.symbolToSemantic[e];n&&n!==t&&(this.semanticToSymbol[n]=null),this.symbolToSemantic[e]=t}return t&&(this.semanticToSymbol[t]=e),!0}},setSemanticForSymbol:{value:function(e,t){this.setSymbolForSemantic(e,t)}},getSemanticForSymbol:{value:function(e){return this.symbolToSemantic[e]}},setValueForSymbol:{value:function(e,t){var n=this.symbolToValue[e],r=this.getTypeForSymbol(e),i=this._GLTypes;if(typeof n!="undefined"&&n!=="null"){if(r===i.FLOAT_MAT4&&mat4.equal(n,t))return;if(r===i.FLOAT_MAT3&&mat3.equal(n,t))return;if(r===i.FLOAT_VEC3&&vec3.equal(n,t))return;if(r===i.FLOAT_VEC4&&vec4.equal(n,t))return}this.symbolToActiveInfo[e]!==null&&this.pendingCommits.indexOf(e)===-1&&this.pendingCommits.push(e);if(typeof t!="undefined"&&t!=="null"){var s;r===i.FLOAT_MAT4&&(s=mat4.create(),t=mat4.set(t,s)),r===i.FLOAT_MAT3&&(s=mat3.create(),t=mat3.set(t,s)),r===i.FLOAT_VEC3&&(s=vec3.create(),t=vec3.set(t,s)),r===i.FLOAT_VEC4&&(s=vec4.create(),t=vec4.set(t,s))}this.symbolToValue[e]=t}},getValueForSymbol:{value:function(e){return this.symbolToValue[e]}},commit:{value:function(e){var t=0,n=this.pendingCommits.length;for(t=0;t<n;t++){var r=this.pendingCommits[t],i=this.getTypeForSymbol(r),s=e.getUniformLocation(this.GLProgram,r),o=this.getValueForSymbol(r);switch(i){case e.FLOAT_MAT2:e.uniformMatrix2fv(s,!1,o);break;case e.FLOAT_MAT3:e.uniformMatrix3fv(s,!1,o);break;case e.FLOAT_MAT4:e.uniformMatrix4fv(s,!1,o);break;case e.FLOAT:e.uniform1f(s,o);break;case e.FLOAT_VEC3:e.uniform3fv(s,o);break;case e.FLOAT_VEC4:e.uniform4fv(s,o);break;case e.INT:case e.SAMPLER_2D:e.uniform1i(s,o)}}this.pendingCommits=[]}},use:{value:function(e,t){e.useProgram(this.GLProgram),t&&this.commit(e)}},createShaderWithSourceAndType:{value:function(e,t,n){var r;if(n==="x-shader/x-fragment")r=e.createShader(e.FRAGMENT_SHADER);else{if(n!=="x-shader/x-vertex")return null;r=e.createShader(e.VERTEX_SHADER)}return e.shaderSource(r,t),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(this.errorLogs=e.getShaderInfoLog(r),null)}},build:{value:function(e){var t,n=this.shaders[r.VERTEX_SHADER],i=this.shaders[r.FRAGMENT_SHADER],s=!1,o,u=this.createShaderWithSourceAndType(e,n,r.VERTEX_SHADER);if(u===null)return!1;var a=this.createShaderWithSourceAndType(e,i,r.FRAGMENT_SHADER);if(a===null)return!1;this.GLProgram=e.createProgram(),e.attachShader(this.GLProgram,u),e.attachShader(this.GLProgram,a),e.linkProgram(this.GLProgram);if(e.getProgramParameter(this.GLProgram,e.LINK_STATUS)){this.pendingCommits=[],this.symbolToActiveInfo={},this.symbolToValue={},this.symbolToLocation={},this.uniformSymbols=[],this.attributeSymbols=[],this.symbolToSemantic={},this.semanticToSymbol={},this._GLTypes={FLOAT_MAT4:e.FLOAT_MAT4,FLOAT_MAT3:e.FLOAT_MAT3,FLOAT_VEC3:e.FLOAT_VEC3,FLOAT_VEC4:e.FLOAT_VEC4};var f=e.getParameter(e.CURRENT_PROGRAM);e.useProgram(this.GLProgram);var l=e.getProgramParameter(this.GLProgram,e.ACTIVE_UNIFORMS);for(t=0;t<l;t++)o=e.getActiveUniform(this.GLProgram,t),this.symbolToActiveInfo[o.name]=o,this.symbolToLocation[o.name]=e.getUniformLocation(this.GLProgram,o.name),this.uniformSymbols.push(o.name);var c=e.getProgramParameter(this.GLProgram,e.ACTIVE_ATTRIBUTES);for(t=0;t<c;t++)o=e.getActiveAttrib(this.GLProgram,t),this.symbolToActiveInfo[o.name]=o,this.symbolToLocation[o.name]=e.getAttribLocation(this.GLProgram,o.name),this.attributeSymbols.push(o.name);s=!0,e.useProgram(f)}return this.errorLogs=e.getProgramInfoLog(this.GLProgram),s}},initWithShaders:{value:function(e){this.shaders=e}},initWithProgram:{value:function(e){this.shaders=e.shaders,this.semanticToSymbol=e.semanticToSymbol,this.symbolToSemantic=e.symbolToSemantic}}})}})