function evaluate(e,t,n,i,r){var a;a="string"==typeof e?parse(e):e;var o=compile(a),s=new Scope(t);return s.parameters=n,s.document=i,s.components=r,o(s)}var parse=require("./parse"),compile=require("./compile-evaluator"),Scope=require("./scope");module.exports=evaluate;