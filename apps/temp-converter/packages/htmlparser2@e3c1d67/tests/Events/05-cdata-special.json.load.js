montageDefine("e3c1d67","tests/Events/05-cdata-special.json",{exports:{name:"CDATA (inside special)",options:{handler:{},parser:{}},html:"<script>/*<![CDATA[*/ asdf ><asdf></adsf><> fo/*]]>*/</script>",expected:[{event:"opentagname",data:["script"]},{event:"opentag",data:["script",{}]},{event:"text",data:["/*<![CDATA[*/ asdf ><asdf></adsf><> fo/*]]>*/"]},{event:"closetag",data:["script"]}]}});