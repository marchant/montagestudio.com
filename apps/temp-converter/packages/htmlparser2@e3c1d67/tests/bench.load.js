montageDefine("e3c1d67","tests/bench",{dependencies:["ben","node-xml","libxmljs","sax","node-expat","htmlparser","../lib/Parser.js"],factory:function(e){function t(){var e=new u.SaxParser(function(){});this.parse=function(t){e.parseString(t)}}function n(){var e=new h.SaxPushParser(function(){});this.parse=function(t){e.push(t,!1)}}function i(){var e=d.parser();this.parse=function(t){e.write(t)}}function r(){var e=new p.Parser;this.parse=function(t){e.parse(t,!1)}}function a(){var e=new f.DefaultHandler,t=new f.Parser(e);this.parse=function(e){t.parseComplete(e)}}function o(){var e=new m;this.parse=function(t){e.write(t)}}var s=e("ben"),l=[];try{var u=e("node-xml");l.push([t,"node-xml"])}catch(c){}try{var h=e("libxmljs");l.push([n,"libxmljs"])}catch(c){}try{var d=e("sax");l.push([i,"sax"])}catch(c){}try{var p=e("node-expat");l.push([r,"node-expat"])}catch(c){}try{var f=e("htmlparser");l.push([a,"htmlparser"])}catch(c){}try{var m=e("../lib/Parser.js");l.push([o,"htmlparser2"])}catch(c){}var v=l.map(function(e){var t=new e[0],n=e[1];process.stdout.write(n+":"+Array(14-n.length).join(" ")),t.parse("<r>");var i=s(1e6,function(){t.parse("<foo bar='baz'>quux</foo>")});return console.log((i>.01?"":"0")+(1e3*i).toFixed(2),"ms/el"),[n,i]});console.log("\nWinner:",v.sort(function(e,t){return e[1]-t[1]})[0][0])}});