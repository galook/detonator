(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa22f"],{1071:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r["e"])(" Hey ");function c(e,t,n,c,i,u){return Object(r["o"])(),Object(r["d"])("div",null,[a,Object(r["f"])("button",{onClick:t[1]||(t[1]=function(){return e.start&&e.start.apply(e,arguments)})},"Hey")])}n("96cf");var i=n("1da1"),u=n("d4ec"),o=n("bee2"),s=n("262e"),f=n("2caf"),p=n("ce1f"),d=function(e){Object(s["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(u["a"])(this,n),t.apply(this,arguments)}return Object(o["a"])(n,[{key:"sendHttp",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=new XMLHttpRequest,n.onreadystatechange=function(e){4==n.readyState&&200==n.status?console.log(e):4==n.readyState&&console.log("failed")},n.open("POST","https://registrace.mzcr.cz/api/hin",!0),n.send(JSON.stringify({hin:t}));case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"start",value:function(){for(var e=0;e<1e3;e++)this.sendHttp(1e8+e)}}]),n}(p["b"]);d.render=c;t["default"]=d}}]);
//# sourceMappingURL=chunk-2d0aa22f.842fb5ad.js.map