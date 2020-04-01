(this["webpackJsonpcovid-live"]=this["webpackJsonpcovid-live"]||[]).push([[0],{26:function(e){e.exports=JSON.parse('{"Africa":["AO","BF","BI","BJ","BW","CD","CF","CG","CI","CM","CV","DJ","DZ","EG","EH","ER","ET","GA","GH","GM","GN","GQ","GW","KE","KM","LR","LS","LY","MA","MG","ML","MR","MU","MW","MZ","NA","NE","NG","RE","RW","SC","SD","SH","SL","SN","SO","SS","ST","SZ","TD","TG","TN","TZ","UG","YT","ZA","ZM","ZW"],"Asia":["AE","AF","AM","AZ","BD","BH","BN","BT","CC","CN","CX","CY","GE","HK","ID","IL","IN","IO","IQ","IR","JO","JP","KG","KH","KP","KR","KW","KZ","LA","LB","LK","MM","MN","MO","MV","MY","NP","OM","PH","PK","PS","QA","RU","SA","SG","SY","TH","TJ","TL","TM","TR","TW","UZ","VN","YE"],"Europe":["AD","AL","AT","AX","AZ","BA","BE","BG","BY","CH","CY","CZ","DE","DK","EE","ES","FI","FO","FR","GB","GE","GG","GI","GR","HR","HU","IE","IM","IS","IT","JE","KZ","LI","LT","LU","LV","MC","MD","ME","MK","MT","NL","NO","PL","PT","RO","RS","RU","SE","SI","SJ","SK","SM","TR","UA","VA"],"North America":["AG","AI","AN","AW","BB","BL","BM","BQ","BS","BZ","CA","CR","CU","CW","DM","DO","GD","GL","GP","GT","HN","HT","JM","KN","KY","LC","MF","MQ","MS","MX","NI","PA","PM","PR","SV","SX","TC","TT","UM","US","VC","VG","VI"],"Oceania":["AS","AU","CK","FJ","FM","GU","KI","MH","MP","NC","NF","NR","NU","NZ","PF","PG","PN","PW","SB","TK","TO","TV","UM","VU","WF","WS"],"South America":["AR","BO","BR","CL","CO","EC","FK","GF","GY","PE","PY","SR","UY","VE"]}')},37:function(e,t,a){e.exports=a(64)},42:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),l=a.n(r),i=(a(42),a(4)),c=a(5),s=a(66),u=a(67),m=function(e){var t=e.title,a=e.value,n=e.className;return o.a.createElement("div",{className:"StatCard neumorph shadow-neumorph-inset px-4 py-3 flex-1 hover:shadow-neumorph-outset ".concat(n)},o.a.createElement("h1",{className:"text-md sm:text-xl md:text-3xl font-bold leading-tight"},(null===a||void 0===a?void 0:a.toLocaleString())||"--"),o.a.createElement("h2",{className:"md:text-base sm:text-sm text-xs text-accent font-bold uppercase break-normal tracking-tight"},t))};m.defaultProps={className:""};var d=m,v=a(13),h=a.n(v),f=a(18),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},a=Object(n.useState)(),o=Object(i.a)(a,2),r=o[0],l=o[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),u=s[0],m=s[1],d=Object(n.useState)(!0),v=Object(i.a)(d,2),p=v[0],b=v[1];return Object(n.useEffect)((function(){function a(){return(a=Object(f.a)(h.a.mark((function a(){var n,o;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return b(!0),m(""),a.prev=2,a.next=5,fetch(e);case 5:return n=a.sent,a.next=8,n.json();case 8:(o=a.sent).error?m(o.error.message):l(t(o)),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(2),m("Bad request");case 15:return a.prev=15,b(!1),a.finish(15);case 18:case"end":return a.stop()}}),a,null,[[2,12,15,18]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[e]),[r,p,u]},b="https://covid19.mathdro.id/api",g="".concat(b,"/countries"),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e/t*100||0;return"".concat(a.toFixed(2),"%")},x=function(){var e,t,a,n,r,l,m,v=Object(c.b)().t,h=p(b),f=Object(i.a)(h,2),g=f[0],x=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:"my-3 text-2xl"},"".concat(v("world-data"))),!x&&o.a.createElement("div",{className:"flex sx-2 sm:sx-5"},o.a.createElement(d,{title:"".concat(v("confirmed")," (100%)"),value:null===g||void 0===g||null===(e=g.confirmed)||void 0===e?void 0:e.value}),o.a.createElement(d,{title:"".concat(v("recovered")," (").concat(E(null===g||void 0===g||null===(t=g.recovered)||void 0===t?void 0:t.value,null===g||void 0===g||null===(a=g.confirmed)||void 0===a?void 0:a.value),")"),value:null===g||void 0===g||null===(n=g.recovered)||void 0===n?void 0:n.value}),o.a.createElement(d,{title:"".concat(v("deaths")," (").concat(E(null===g||void 0===g||null===(r=g.deaths)||void 0===r?void 0:r.value,null===g||void 0===g||null===(l=g.confirmed)||void 0===l?void 0:l.value),")"),value:null===g||void 0===g||null===(m=g.deaths)||void 0===m?void 0:m.value})),o.a.createElement("div",{className:"mt-3 text-xs text-muted text-center"},o.a.createElement("span",null,v("last-updated"),": "),(null===g||void 0===g?void 0:g.lastUpdate)&&o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,Object(s.a)(new Date(null===g||void 0===g?void 0:g.lastUpdate),"MM/dd/yyyy @ hh:mma")," "),o.a.createElement("span",null,"(",Object(u.a)(new Date(null===g||void 0===g?void 0:g.lastUpdate)),")"))))},y=a(19),w=a(33),C=a(15),O=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return t}})),o=Object(i.a)(a,2),r=o[0],l=o[1];return[r,function(t){try{l(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(a){}}]},N=a(34),S=a(35),j=a.n(S),M=function(e,t){Object(n.useEffect)((function(){return window.addEventListener("resize",t),function(){return window.removeEventListener(e,t)}}),[e,t])},z=a(10),k=a(8),A=a(17),I=function(e){var t=e.countries,a=e.selectedCountry,r=e.setSelectedCountry,l=Object(c.b)().t,s=Object(n.useRef)(null),u=Object(n.useRef)(),m=O("automatic-zoom",!0),d=Object(i.a)(m,2),v=d[0],h=d[1];M("resize",(function(){var e,t,a;null===u||void 0===u||null===(e=u.current)||void 0===e||e.resize(),null===u||void 0===u||null===(t=u.current)||void 0===t||t.fit(),null===u||void 0===u||null===(a=u.current)||void 0===a||a.center()})),Object(n.useEffect)((function(){u.current=j()(s.current,{customEventsHandler:{haltEventListeners:["touchstart","touchend","touchmove","touchleave","touchcancel"],init:function(e){var t=e.instance,a=1,n=0,o=0;this.hammer=A(e.svgElement,{inputClass:A.SUPPORT_POINTER_EVENTS?A.PointerEventInput:A.TouchInput}),this.hammer.get("pinch").set({enable:!0}),this.hammer.on("panstart panmove",(function(e){"panstart"===e.type&&(n=0,o=0),t.panBy({x:e.deltaX-n,y:e.deltaY-o}),n=e.deltaX,o=e.deltaY})),this.hammer.on("doubletap",(function(){e.instance.zoomIn()})),this.hammer.on("pinchstart pinchmove",(function(e){"pinchstart"===e.type&&(a=t.getZoom(),t.zoomAtPoint(a*e.scale,{x:e.center.x,y:e.center.y})),t.zoomAtPoint(a*e.scale,{x:e.center.x,y:e.center.y})})),e.svgElement.addEventListener("touchmove",(function(e){e.preventDefault()}))},destroy:function(){this.hammer.destroy()}},beforePan:function(e,t){var a=this.getSizes(),n=-(a.viewBox.x+a.viewBox.width)*a.realZoom+100,o=a.width-100-a.viewBox.x*a.realZoom,r=-(a.viewBox.y+a.viewBox.height)*a.realZoom+100,l=a.height-100-a.viewBox.y*a.realZoom;return{x:Math.max(n,Math.min(o,t.x)),y:Math.max(r,Math.min(l,t.y))}}})}),[]);var f=Object(n.useCallback)((function(e){var t;null===u||void 0===u||null===(t=u.current)||void 0===t||t.reset(),window.setTimeout((function(){var t,a,n,o=document.querySelector("g.svg-pan-zoom_viewport"),r=null===o||void 0===o||null===(t=o.transform)||void 0===t?void 0:t.baseVal.getItem(0).matrix,l=null===(a=document.querySelector("#".concat(e)))||void 0===a?void 0:a.getBBox(),i={x:0,y:0};l&&(i={x:(l.x+l.width/2)*r.a+r.e,y:(l.y+l.height/2)*r.d+r.f},null===u||void 0===u||null===(n=u.current)||void 0===n||n.zoomAtPoint(6,i))}),500)}),[]);Object(n.useEffect)((function(){v&&f(a)}),[a]);var p=Object(n.useMemo)((function(){return N.a.map((function(e){var n=function(e){var a,n=Object(C.a)(t);try{for(n.s();!(a=n.n()).done;){var o=a.value;if(o.iso2===e)return o.name}}catch(r){n.e(r)}finally{n.f()}return e}(e.id);return function(e){var a,n=Object(C.a)(t);try{for(n.s();!(a=n.n()).done;){if(a.value.iso2===e)return!0}}catch(o){n.e(o)}finally{n.f()}return!1}(e.id)?o.a.createElement("path",{key:e.id,id:e.id,d:e.shape,className:"cursor-pointer transition-colors duration-200 ease-in-out stroke-gray-500 ".concat(a===e.id?"fill-accent":"fill-current"),onClick:function(){return r(e.id)}},o.a.createElement("title",null,n)):o.a.createElement("path",{key:e.id,d:e.shape,className:"fill-current opacity-75 stroke-gray-500"},o.a.createElement("title",null,n," (no data)"))}))}),[a,r,t]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",ref:s,id:"world-map",width:"100%",height:"100%",viewBox:"0 0 2000 1001"},o.a.createElement("g",{className:"svg-pan-zoom_viewport transition-transform duration-150"},p)),o.a.createElement("div",{className:"absolute bottom-0 right-0 flex flex-col p-3 lg:p-4 sy-2"},o.a.createElement("button",{className:"btn-map",title:l("reset-position"),onClick:function(){var e;return null===u||void 0===u||null===(e=u.current)||void 0===e?void 0:e.reset()}},o.a.createElement(z.a,{fixedWidth:!0,icon:k.a})),o.a.createElement("button",{className:"btn-map",title:l("automatic-manual-zoom"),onClick:function(){return h(!v)}},o.a.createElement(z.a,{fixedWidth:!0,icon:v?k.c:k.g})),o.a.createElement("button",{className:"btn-map text-lg",title:l("zoom-in"),onClick:function(){var e;return null===u||void 0===u||null===(e=u.current)||void 0===e?void 0:e.zoomIn()}},"+"),o.a.createElement("button",{className:"btn-map text-lg",title:l("zoom-out"),onClick:function(){var e;return null===u||void 0===u||null===(e=u.current)||void 0===e?void 0:e.zoomOut()}},"-")))};I.defaultProps={countries:[],setSelectedCountry:function(){}};var R=I,L=a(26),B={name:"Argentina",iso2:"AR",iso3:"ARG"},G=function(){var e,t,a,r,l,s=Object(c.b)().t,u=O("country-selected",B),m=Object(i.a)(u,2),v=m[0],b=m[1],x=Object(n.useState)({}),N=Object(i.a)(x,2),S=N[0],j=N[1],M=p("".concat(g,"/").concat(v.name)),A=Object(i.a)(M,3),I=A[0],G=A[1],T=A[2],P=p(g,(function(e){return e.countries})),D=Object(i.a)(P,1)[0],V=Object(n.useMemo)((function(){return Object.keys(L).map((function(e){return o.a.createElement("optgroup",{label:e,key:e},null===D||void 0===D?void 0:D.filter((function(t){return L[e].includes(t.iso2)})).map((function(e){return o.a.createElement("option",{key:e.name,value:JSON.stringify(e)},e.name)})))}))}),[D]);return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S[t.iso2]){e.next=8;break}return e.next=3,fetch("".concat("https://restcountries.eu/rest/v2/alpha","/").concat(t.iso2,"?fields=name;flag;population;area;latlng"));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,j(Object(w.a)({},S,Object(y.a)({},t.iso2,n)));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(v)}),[S,v]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"bg-map relative neumorph sm:shadow-neumorph-inset mb-4 overflow-hidden h-56 sm:h-64 md:h-92 lg:h-120",style:{backgroundImage:'url("bg-map.png"), linear-gradient(90deg, rgba(118,171,255,0.1) 0%, rgba(118,171,255,0.4) 40%, rgba(118,171,255,0.4) 60%, rgba(118,171,255,0.1) 100%)'}},o.a.createElement(R,{countries:D,selectedCountry:v.iso2,setSelectedCountry:function(e){try{b(function(e){var t,a=Object(C.a)(D);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n.iso2===e)return n}}catch(o){a.e(o)}finally{a.f()}throw new Error("Country not found")}(e))}catch(t){}}})),o.a.createElement("div",{className:"flex items-center mb-4"},o.a.createElement("div",{className:"h-12 w-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full shadow overflow-hidden mr-3 md:mr-4 transition-all duration-200 ease-in-out bg-muted"},o.a.createElement("img",{className:"h-full object-cover",src:null===(e=S[v.iso2])||void 0===e?void 0:e.flag,alt:""})),o.a.createElement("div",{className:"flex-grow"},o.a.createElement("div",{className:"relative"},o.a.createElement("select",{className:"block appearance-none text-gray-900 w-full p-1 lg:p-2 rounded-md mb-1 md:mb-2 md:text-lg lg:text-xl bg-primary text-back focus:outline-none focus:outline-shadow leading-tight",disabled:G,onChange:function(e){b(JSON.parse(e.currentTarget.value))},value:JSON.stringify(v)},V),o.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},o.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),o.a.createElement("div",{className:"text-xs md:text-sm text-muted flex sx-4"},o.a.createElement("span",null,o.a.createElement(z.a,{className:"mr-1",fixedWidth:!0,icon:k.h}),(null===(t=S[v.iso2])||void 0===t||null===(a=t.population)||void 0===a?void 0:a.toLocaleString())||0),o.a.createElement("span",null,o.a.createElement(z.a,{className:"mr-1",fixedWidth:!0,icon:k.d}),(null===(r=S[v.iso2])||void 0===r||null===(l=r.area)||void 0===l?void 0:l.toLocaleString())||0,"km",o.a.createElement("sup",null,"2"))))),o.a.createElement("div",{className:"flex justify-center sx-2 sm:sx-5"},T.length>0&&o.a.createElement("div",{className:"text-center text-gray-500 "},o.a.createElement("div",{className:"font-sans text-5xl mb-3"},"\xaf\\_(\u30c4)_/\xaf"),o.a.createElement("div",null,T)),0===T.length&&o.a.createElement(o.a.Fragment,null,o.a.createElement(d,{title:"".concat(s("confirmed")," (100%)"),value:G||null===I||void 0===I?void 0:I.confirmed.value}),o.a.createElement(d,{title:"".concat(s("recovered")," (").concat(E(null===I||void 0===I?void 0:I.recovered.value,null===I||void 0===I?void 0:I.confirmed.value),")"),value:G||null===I||void 0===I?void 0:I.recovered.value}),o.a.createElement(d,{title:"".concat(s("deaths")," (").concat(E(null===I||void 0===I?void 0:I.deaths.value,null===I||void 0===I?void 0:I.confirmed.value),")"),value:G||null===I||void 0===I?void 0:I.deaths.value}))))},T={en:{name:"English",translation:{title:"COVID-19 stats",confirmed:"Confirmed",recovered:"Recovered",deaths:"Deaths","last-updated":"Last updated","powered-by":"Thanks to","made-by":"Made by","change-theme":"Change theme","reset-position":"Reset position","automatic-manual-zoom":"Automatic/manual zoom","zoom-in":"Zoom in","zoom-out":"Zoom out","world-data":"World data"}},es:{name:"Spanish",translation:{title:"Estad\xedsticas del COVID-19",confirmed:"Confirmados",recovered:"Recuperados",deaths:"Muertes","last-updated":"\xdaltima actualizaci\xf3n","powered-by":"Gracias a","made-by":"Hecho por","change-theme":"Cambiar tema","reset-position":"Posici\xf3n inicial","automatic-manual-zoom":"Zoom autom\xe1tico/manual","zoom-in":"Acercar","zoom-out":"Alejar","world-data":"World data"}},pt:{name:"Portuguese",translation:{title:"Estat\xedsticas do COVID-19",confirmed:"Confirmado",recovered:"Recuperado",deaths:"Mortes","last-updated":"Ultima atualiza\xe7\xe3o","powered-by":"Gra\xe7as a","made-by":"Feito por","change-theme":"Mudar tema","reset-position":"Repor posi\xe7\xe3o","automatic-manual-zoom":"Zoom autom\xe1tico/manual","zoom-in":"Mais zoom","zoom-out":"Reduzir o zoom","world-data":"World data"}},it:{name:"Italian",translation:{title:"Statistiche COVID-19",confirmed:"Confermato",recovered:"Recuperato",deaths:"Morti","last-updated":"Ultimo aggiornamiento","powered-by":"Grazie a","made-by":"Fatto da","change-theme":"Cambia tema","reset-position":"Ripristina posizione","automatic-manual-zoom":"Zoom automatico/manuale","zoom-in":"Ingrandire","zoom-out":"Rimpicciolisci","world-data":"World data"}},fr:{name:"French",translation:{title:"Statistiques COVID-19",confirmed:"Confirm\xe9",recovered:"R\xe9tabli",deaths:"Morts","last-updated":"Derni\xe8re mise \xe0 jour","powered-by":"Gr\xe2ce \xe0","made-by":"Faite par","change-theme":"Change le th\xe8me","reset-position":"R\xe9initialiser la position","automatic-manual-zoom":"Zoom automatique/manuel","zoom-in":"Agrandir","zoom-out":"D\xe9zoomer","world-data":"World data"}},ch:{name:"Chinese",translation:{title:"COVID-19\u7edf\u8ba1",confirmed:"\u5df2\u786e\u8ba4",recovered:"\u5df2\u6062\u590d",deaths:"\u6b7b\u4ea1\u4eba\u6570","last-updated":"\u6700\u8fd1\u66f4\u65b0\u65f6\u95f4","powered-by":"\u8c22\u8c22","made-by":"\u7531\u5236\u6210","change-theme":"\u6539\u53d8\u4e3b\u9898","reset-position":"\u91cd\u7f6e\u4f4d\u7f6e","automatic-manual-zoom":"\u81ea\u52a8/\u624b\u52a8\u53d8\u7126","zoom-in":"\u653e\u5927","zoom-out":"\u7f29\u5c0f","world-data":"\u5168\u7403"}},gr:{name:"Greek",translation:{title:"COVID-19 \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ac \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1",confirmed:"\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03b9\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",recovered:"\u0391\u03bd\u03b1\u03ba\u03c4\u03b7\u03b8\u03b5\u03af",deaths:"\u0398\u03ac\u03bd\u03b1\u03c4\u03bf\u03b9","last-updated":"\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b1 \u03b5\u03bd\u03b7\u03bc\u03ad\u03c1\u03c9\u03c3\u03b7","powered-by":"\u03a7\u03ac\u03c1\u03b7 \u03c3\u03b5","made-by":"\u03a6\u03c4\u03b9\u03b1\u03b3\u03bc\u03ad\u03bd\u03bf \u03b1\u03c0\u03cc","change-theme":"\u0391\u03bb\u03bb\u03b1\u03be\u03b5 \u03b8\u03ad\u03bc\u03b1","reset-position":"\u0395\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac \u03b8\u03ad\u03c3\u03b7\u03c2","automatic-manual-zoom":"\u0391\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03bf/\u03c7\u03b5\u03b9\u03c1\u03bf\u03ba\u03af\u03bd\u03b7\u03c4\u03bf \u03b6\u03bf\u03c5\u03bc","zoom-in":"\u039c\u03b5\u03b3\u03ad\u03b8\u03c5\u03bd\u03c3\u03b7","zoom-out":"\u03a3\u03bc\u03af\u03ba\u03c1\u03c5\u03bd\u03c3\u03b7","world-data":"World data"}},ru:{name:"Russian",translation:{title:"COVID-19 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",confirmed:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043d\u044b\u0435 \u0441\u043b\u0443\u0447\u0430\u0438",recovered:"\u0412\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u0432\u0448\u0438\u0435",deaths:"\u0421\u043c\u0435\u0440\u0442\u043d\u043e\u0441\u0442\u044c","last-updated":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435","powered-by":"\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f","made-by":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u043e \u0432","change-theme":"\u041f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0443","reset-position":"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0437\u0438\u0446\u0438\u044e","automatic-manual-zoom":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435/\u0440\u0443\u0447\u043d\u043e\u0435 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435","zoom-in":"\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u044c","zoom-out":"\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c","world-data":"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e"}},vn:{name:"Vietnamese",translation:{title:"COVID-19 s\u1ed1 li\u1ec7u th\u1ed1ng k\xea",confirmed:"X\xe1c nh\u1eadn",recovered:"Ph\u1ee5c h\u1ed3i",deaths:"T\u1eed vong","last-updated":"C\u1eadp nh\u1eadt m\u1edbi nh\u1ea5t","powered-by":"Cung c\u1ea5p b\u1edfi","made-by":"\u0110\u01b0\u1ee3c l\xe0m b\u1edfi","change-theme":"Thay \u0111\u1ed5i n\u1ec1n","reset-position":"V\u1ec1 v\u1ecb tr\xed ban \u0111\u1ea7u","automatic-manual-zoom":"Ph\xf3ng to/thu nh\u1ecf t\u1ef1 \u0111\u1ed9ng/b\u1eb1ng tay","zoom-in":"Ph\xf3ng to","zoom-out":"Thu nh\u1ecf","world-data":"To\xe0n c\u1ea7u"}}},P=function(){var e=O("theme","dark"),t=Object(i.a)(e,2),a=t[0],r=t[1],l={dark:"light",light:"dark"},s=Object(c.b)(),u=s.t,m=s.i18n;Object(n.useEffect)((function(){document.documentElement.dataset.theme=a,document.body.classList.remove("hidden")}),[a]);return o.a.createElement("div",{className:"header flex items-center p-3 mb-2"},o.a.createElement("h1",{className:"text-2xl flex-1"},u("title")),o.a.createElement("div",{className:"inline-block relative cursor-pointer mr-3 md:mr-5 text-accent"},o.a.createElement("select",{className:"neumorph shadow-neumorph-outset text-sm md:text-base focus:outline-none appearance-none bg-transparent h-12 pr-3 pl-3 md:pl-10 rounded-full",onChange:function(e){m.changeLanguage(e.currentTarget.value)},value:m.language},Object.keys(T).sort().map((function(e){return o.a.createElement("option",{key:e,value:e},T[e].name)}))),o.a.createElement(z.a,{className:"hidden md:inline-block pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center h-12 ml-4",fixedWidth:!0,icon:k.b})),o.a.createElement("button",{className:"neumorph shadow-neumorph-outset rounded-full p-3 focus:outline-none focus:shadow-lg active:shadow overflow-hidden w-12 h-12",title:u("change-theme"),onClick:function(){return r(l[a])}},o.a.createElement("div",{className:"flex w-20 justify-between transform transition-transform duration-200 text-accent -translate-x-px"},o.a.createElement(z.a,{size:"lg",fixedWidth:!0,icon:k.e}),o.a.createElement(z.a,{size:"lg",fixedWidth:!0,icon:k.f}))))};function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var Z=o.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),W=o.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"}),F=function(e){var t=e.svgRef,a=e.title,n=V(e,["svgRef","title"]);return o.a.createElement("svg",D({width:80,height:80,viewBox:"0 0 250 250","aria-hidden":"true",ref:t},n),a?o.a.createElement("title",null,a):null,Z,o.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),W)},U=o.a.forwardRef((function(e,t){return o.a.createElement(F,D({svgRef:t},e))})),K=(a.p,a(63),function(){return o.a.createElement("a",{href:"https://github.com/cdmoro/covid-19-stats",className:"github-corner fixed top-0 right-0 hidden md:inline-block","aria-label":"View source on GitHub",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(U,null))}),H=function(){var e=Object(c.b)().t;return o.a.createElement("div",{className:"Footer mt-2 text-xs text-muted text-center"},o.a.createElement("div",{className:"flex flex-col md:flex-row justify-center items-center mt-2"},o.a.createElement("div",null,e("powered-by")," ",o.a.createElement("a",{className:"underline hover:no-underline",href:"https://github.com/mathdroid/covid-19-api"},"COVID-19 API")),o.a.createElement("div",{className:"hidden md:inline-block px-1"},"|"),o.a.createElement("div",null,e("made-by")," ",o.a.createElement("a",{className:"underline hover:no-underline",href:"https://www.linkedin.com/in/cdbonadeo/",target:"_blank",rel:"noopener noreferrer"},"Carlos Bonadeo"),o.a.createElement("div",{className:"md:hidden inline-block px-1"},"|"),o.a.createElement("a",{className:"md:hidden inline-block underline hover:no-underline",href:"https://github.com/cdmoro/covid-19-stats"},"GitHub"))))},J=function(){return o.a.createElement("div",{className:"App md:flex md:justify-center md:items-center min-h-screen p-4"},o.a.createElement("div",{className:"md:w-10/12 lg:w-7/12"},o.a.createElement(P,null),o.a.createElement(G,null),o.a.createElement(x,null),o.a.createElement(H,null)),o.a.createElement(K,null))},Y=a(27),_=a(36);Y.a.use(_.a).use(c.a).init({resources:T,fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});Y.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);