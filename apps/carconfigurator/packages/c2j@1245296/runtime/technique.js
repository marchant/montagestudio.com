require("runtime/dependencies/gl-matrix");var Base=require("runtime/base").Base;exports.Technique=Object.create(Base,{init:{value:function(){return this.__Base_init(),this}},_rootPass:{value:null,writable:!0},rootPass:{get:function(){return this._rootPass},set:function(e){this._rootPass=e}}})