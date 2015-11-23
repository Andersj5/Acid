!function(n){"use strict";function t(n,t,r){for(var e=Math.min(r,n.length)-t,u=new Array(e),o=0;e>o;o++)u[o]=n[t+o];return u}function r(n,t){return n-t}function e(n,t){return t-n}function u(n,t){for(var r,e=[],u=0;u<n.length;u++)r=n[u],t.indexOf(r)<0&&e.indexOf(r)<0&&e.push(r);for(u=0;u<t.length;u++)r=t[u],n.indexOf(r)<0&&e.indexOf(r)<0&&e.push(r);return e}function i(n,t){var r=[],e=n.length,u=1;if(!e)return r;if(r[0]=n[0],t)for(;e>u;u++)n[u]!==n[u-1]&&r.push(n[u]);else for(;e>u;u++)r.indexOf(n[u])<0&&r.push(n[u]);return r}function a(n,t,r,e){Qt(t,function(t,u){n[r[u]]||(n[r[u]]=e(t))})}function c(n){try{return A.parse(n)}catch(t){return!1}}function l(n,t){if(n.length>0)var n=n+"&";var n=n+t;return n}function f(n,t,r){var e=r.load,u=r.error,o=r.append,i=cu();e&&t.setAttribute("data-load",i+".load"),u&&t.setAttribute("data-error",i+".error"),o&&au.appendChild(t),tu[i]={load:function(n,t){e&&e(t),u=null,e=null,tu[i]=null},error:function(n,t){u&&u(t),e=null,u=null,tu[i]=null}}}function s(){Ve.windowHeight=tn.innerHeight,Ve.windowWidth=tn.innerWidth,Ve.bodyWidth=pn.offsetWidth,Ve.bodyHeight=pn.offsetHeight}var h,p=!1,v={},d=!1,g={credits:{}},m=Array,y=Object,b=Function,w=String,A=JSON,x=Math,N=(Boolean,void 0),C=n.WeakMap,T=(history.pushState,Map),k=Number,L=(n.Worker,n.WebSocket,n.requestAnimationFrame,localStorage),O=sessionStorage,S="prototype",I=y[S],M=m[S],E=(w[S],WebSocket[S],Worker[S],M.push),j=y.keys,R=y.is,H=y.assign,B=y.getOwnPropertyDescriptor,W=(y.defineProperty,Function.bind,A.stringify),q=/^.[\w_-]+$/,F=/^[A-Za-z]+$/,_=/\s/,D=/\s/g,P=/\./g,U=/-/g,z=/\//g,V=/\.[0-9a-z]+$/i,$=/_/g,G=/\.js/,J=/\.css/,Z=/\.json/,Q=/\./,X=location.protocol,K="wss",Y=location.hostname,nn=navigator.hardwareConcurrency||2,tn=n,rn=HTMLCollection,en=(HTMLElement,NodeList),un=Node,on=Element,an=document,cn=an.createDocumentFragment,ln=an.createElement,fn=an.getElementById("acid-lib"),sn=fn?fn.getAttribute("data-prefix"):"",hn=fn?fn.getAttribute("data-avoid"):"",p=hn?hn:!1,sn=sn?sn:"",pn={},vn=an.getElementsByTagName("head")[0],dn=ln.call(an,"div"),gn=un[S],mn=en[S],yn=on[S],bn=rn[S],wn=I.toString,An=m.from,xn=function(n){for(var t,r,e=h(n),u=[],o=e.length,i=0;o>i;i++)t=e[i],r=t.constructor.name,"HTMLCollection"===r||"NodeList"===r?Ie(u,toArrayDeep(t)):u.push(t);return u};h=An?function(n){return An.call(m,n)}:function(n){for(var t=[],r=-1,e=n.length;++r!==e;t[r]=n[r]);return t};var Nn=function(n){if(!yt(n))return!1;var t=n.nodeType;return"number"==typeof t&&9!=t},Cn=function(){if(yn.msMatchesSelector)var n=function(n,t){return n.msMatchesSelector(t)};else var n=function(n,t){return n.matches(t)};return n}(),Tn=function(n,t,r){var e;return r||(r="data-faceplate"),e=Ct(r)?It(r,"data-")?_faceplate[n.getAttribute(r)]:_faceplate[r]:r,e(t,n),t=null,e=null,r=null,n},kn=function(){return cn.call(an)},Ln=function(n){var t=document.readyState;return"interactive"==t||"completed"==t||"complete"==t?(n&&n(),!0):(n&&or(document,"DOMContentLoaded",n),!1)},On=yn.remove?!0:!1,Sn=On?null:function(n){var t=n.parentNode;return t&&t.removeChild(n),t=null,n},In=Sn?Sn:function(n){return n.remove(),n},Mn=function(n,t,r){if(!r)var r=t,t=0;for(var e=h(n),u=[];r>t;t++)u.push(In(e[t]));return t=null,r=null,u},En=function(n,t){if(Tt(t)||!t)return upTpParentLevel(n,t);for(;n=n.parentNode;){if(!n)return!1;if(!Nn(n))return!1;if(Cn(n,t))break}return n},jn=function(n){return"[object "+n+"]"},Rn=jn("RegExp"),Hn=jn("Arguments"),Bn=(jn("Array"),jn("Boolean")),Wn=jn("Date"),qn=jn("Error"),Fn=(jn("Function"),jn("Map")),_n=(jn("Number"),jn("Object")),Dn=jn("Set"),Pn=(jn("String"),jn("WeakMap")),Un=(jn("ArrayBuffer"),jn("Float32Array")),zn=jn("Float64Array"),Vn=jn("Int8Array"),$n=jn("Int16Array"),Gn=jn("Int32Array"),Jn=jn("unit8Array"),Zn=jn("unit8ClampedArray"),Qn=jn("unit16Array"),Xn=jn("unit32Array"),Kn=function(n){return function(t){return wn.call(t)===n}},Yn=Kn(Rn),nt=Kn(Hn),tt=Kn(Bn),rt=Kn(Wn),et=Kn(qn),ut=Kn(Fn),ot=Kn(_n),it=Kn(Dn),at=Kn(Pn),ct=Kn(Un),lt=Kn(zn),ft=Kn(Vn),st=Kn($n),ht=Kn(Gn),pt=Kn(Jn),vt=Kn(Zn),dt=Kn(Qn),gt=Kn(Xn),mt=function(n){return yt(n)?-1!=n.toString().toLowerCase().indexOf("native"):!1},yt=function(n){return void 0!==n&&null!==n},bt=function(n){return void 0===n},wt=isNaN?isNaN:k.isNaN,At=k.isInteger?k.isInteger:function(n){return n%1===0?!0:!1},xt=function(n){return null===n},Nt=function(n){return n instanceof m},Ct=function(n){return yt(n)?n.constructor===w:!1},Tt=function(n){return yt(n)?n.constructor==k:!1},kt=function(n){return yt(n)?"Object("===n.constructor.toString().trim().slice(9,16):!1},Lt=function(n){return yt(n)?n instanceof b:!1},Ot=function(n){return yt(n)?"HTMLCollection"==n.constructor.name:!1},St=function(n){return yt(n)?"NodeList"==n.constructor.name:!1},It=function(n,t){var r,e;return Ct(t)?r=-1!=n.indexOf(t):Ke(t,function(t,u){e=-1!=n.indexOf(t),e&&(r=e)}),r},Mt=function(n){return!n.length},Et=function(n){if(yt(n)){var t=Mt(n);return Mt(n)?!t:!y.keys(n).length}return!1},jt=function(n){return J.test(n)},Rt=function(n){return Z.test(n)},Ht=function(n){return G.test(n)&&!Rt(n)},Bt=function(n){return Q.test(n)},Wt=function(n){return n.split(".")[0]},qt=function(n){return Zt(n.split("/"))[0]},Ft=Ht,_t=jt,Dt=function(n){var t=n.split("/");return Pt(t[t.length-1].split(".js")[0],tu)},Pt=function(n,t){var t=t?t:v,n=n.split("/"),n=n[n.length-1];if(It(n,"."))for(var r=n.split("."),e=r.length,u=0;e>u;u++){var t=t[r[u]];if(!t)return!1}else var t=t[n];return t||!1},Ut=Promise,zt=Ut?Ut.resolve():null,Vt=Ut?function(n,t){return zt.then(n),!1}:function(n,t){return $t(n,0),!1},$t=function(n,t,r){return setTimeout(function(){return n(),r&&r(),n=null,r=null,!1},t)},Gt=function(n,t,r,e){_e[t]=function(){for(var e=n.length,u=_e[t],o=0,i=0;e>i;i++)if(1==u[n[i]])var o=o+1;return o==e?(Vt(r),v.promises[t]=null,!0):!1},_e[t].call={},e&&(_e[t].call=e)},Jt=function(n,t){var r=_e[t];if(_e[t][n]=1,r){var e=r();e&&(_e[t]=null)}var e=null;return!1},Zt=function(n,t){var r;return t||(t=1),r=n?n.splice(n.length-t,t):n[n.length-1]},Qt=function(n,t){for(var r,e=0,u=n.length,o=[],i=0;u>i;i++)r=t(n[i],i,u,n),yt(r)&&(o[e]=r,e++);return o},Xt=function(n,t){for(var r=0,e=n.length;e>r;r++)t(n[r],r,e,n)},Kt=function(n,t){for(var r=0,e=[],u=n.length;u>r&&(e[r]=t(n[r],r,u));r++);return e},Yt=function(n,t){for(var r=0,e=[],u=n.length;u>r&&!(e[r]=t(n[r],r,u));r++);return e},nr=function(n,t,r){for(var e=0,u=[],o=n.length;o>e&&r(u[e]=t(n[e],e,o));e++);return u},tr=function(n,t){for(var r=[],e=0;e<arr.length;)r[e]=t(n[e],e),e++;return r},rr=function(n,t){for(var r=[],e=n.length,u=e-1;u>=0;u--)r[u]=t(n[u],u,e);return r},er=function(n,t){for(var r,e={},u=0,o=j(n),i=o.length;i>u;u++)r=o[u],e[r]=t(n[r],r,i);return e},ur=function(n,t,r){if(!r)var r=t,t=n,n=0;for(var e=[];t>n;n++)e[n]=r(n);return e},or=function(n,t,r,e){return n.addEventListener(t,r,e||!1),n},ir=function(n,t,r,e){return n.removeEventListener(t,r,e||!1),n},ar=function(n,t,r){for(var e=0,u=j(n),o=u.length;o>e;e++){var i=u[e],a=n[i];if(a){if(r)var a=r(a);Object.defineProperty(t,sn+i,{enumerable:!1,configurable:!0,writable:!0,value:a})}}},cr=H?function(n,t){return H(n,t)}:function(n,t){for(var r=t||{},e=0,u=j(n),o=u.length;o>e;e++){var i=u[e],a=n[i];yt(a)&&(r[i]=kt(a)?cr(a):a)}return r},lr=function(n){return n.charAt(0).toUpperCase()+n.substr(1)},fr=function(n,t,r){var e=n.children[r+1];return e?n.insertBefore(t,e):n.appendChild(t),n},sr=function(n,t){return n.appendChild(t),n},hr=function(n,t){return n.hasAttribute(t)},pr=function(n,t,r){if(Ct(t)){if(!yt(r))return n.getAttribute(t);n.setAttribute(t,r)}else if(kt(t))for(var e=0,u=j(t),o=u.length;o>e;e++){var i=u[e],a=t[i];n.setAttribute(i,a)}return n},vr=function(n,t){return n.removeAttribute(t),n},dr=function(n,t,r){var e=n.children[r];return e?n.insertBefore(t,e):n.appendChild(t),n},gr=function(n,t){if(t){if(t===!0)var t=n.parentNode;var r=Number(t.offsetWidth),e=Number(t.offsetHeight)}else var r=Number(Ve.bodyWidth),e=Number(Ve.bodyHeight);var u=n.offsetWidth,o=n.offsetHeight;if(o>e)n.style.position="",n.style.transform=n.style["-webkit-transform"]="";else{var i=parseInt((r-u)/2)+"px",a=parseInt((e-o)/2)+"px";n.style.position="absolute",n.style.top="0px",n.style.left="0px",n.style.transform=n.style["-webkit-transform"]="translate3d("+i+","+a+",0)"}return n},mr=function(n,t){for(var r,e=n.attributes,u={},o=e.length,i=0;o>i;i++)r=e[i],u[r.name]=r.value;return e=null,fu(t,{attr:u})},yr=function(n,t){return yt(t)?(n.className=t,n):n.className},br=function(n,t){var r=n.classList;return t?(Nt(t)?Qt(t,function(n){r.contains(n)||r.add(n)}):r.contains(t)||r.add(t),n):r},wr=function(n,t){return n.classList.contains(t)},Ar=function(n,t){var r=n.classList;return Nt(t)?Qt(t,function(n){r.contains(n)&&r.remove(n)}):r.contains(t)&&r.remove(t),n},xr=function(n,t){var r=n.classList;return Nt(t)?Qt(t,function(n){r.toggle(n)}):r.toggle(t),n},Nr=function(n){for(;n.firstChild;)n.firstChild.remove();return n},Cr=function(n){return n.clientWidth},Tr=function(n){return n.clientHeight},kr=function(n,t){return n.cloneNode(t)},Lr=function(n,t){var r=n.classList;return r.contains("ison")?(t&&(n.textContent=Number(n.textContent)-Number(t)),r.remove("ison")):(t&&(n.textContent=Number(n.textContent)+Number(t)),r.add("ison")),n},Or=function(n,t){return n.textContent=Number(n.textContent)+Number(t||1),n},Sr=function(n,t){return n.textContent=Number(n.textContent)-Number(t||1),n},Ir=function(n){return n.style.display="none",n},Mr=function(n){return n.style.display="",n},Er=function(n,t){if(t)n.classList.toggle(t);else{var r=n.style.display;"none"==r?n.style.display="":n.style.display="none"}return n},jr=function(n,t){if(yt(t)){if(Lt(t))var t=t(n);return n.innerHTML=t,n}return n.innerHTML},Rr=function(n,t){if(yt(t)){if(Lt(t))var t=t(n);return n.outerHTML=t,n}return n.outerHTML},Hr=function(n){var t=function(t,r){return t.insertAdjacentHTML(n,r),t};return t},Br=Hr("beforeEnd"),Wr=Hr("afterbegin"),qr=Hr("beforeBegin"),Fr=Hr("afterEnd"),_r=function(n,t){return n.parentNode.insertBefore(t,n.nextSibling),t},Dr=function(n,t){return n.parentNode.insertBefore(t,n),t},Pr=function(n){return n.nextSibling},Ur=function(n){return n.offsetWidth},zr=function(n){return n.offsetHeight},Vr=function(n){return n.offsetTop},$r=function(n){var t=n.getBoundingClientRect(),r={top:t.top+pn.scrollTop,left:t.left+pn.scrollLeft};return r},Gr=function(n){return n.lastChild},Jr=function(n){return n.firstChild},Zr=function(n){return n.parentNode},Qr=function(n,t,r){return model=Pt(t,tu),model?(model=model(n,r),n=null,r=null,model):(iu(t,function(){model=Pt(t,tu),model&&model(n,r),t=null,r=null,n=null}),n)},Xr=function(n,t){var r=n.firstChild;return r?n.insertBefore(t,r):n.appendChild(t),n},Kr=function(n){return n.previousSibling},Yr=function(n,t){if(yt(t)){if(Lt(t))var t=t.apply(this,[]);return n.value=t,n}return n.value},ne=function(n,t,r){return yt(r)?(n.style[t]=r,n):n.style},te=function(n,t){return t?(n.selected=t,o):n.selected},re=function(n,t){return n.parentNode.replaceChild(t,n),t},ee=function(n){var t=n.parentNode;return t.innerHTML=t.innerHTML,t},ue=function(n,t,r){return yt(t)&&(n.scrollTop=t),yt(r)&&(n.scrollLeft=r),n},oe=function(n){var t={top:n.scrollTop,left:n.scrollLeft};return t},ie=function(n,t){return n.scrollIntoView(t),n},ae=function(n,t){return n.getElementById(t)},ce=function(n,t){return n.getElementsByClassName(t)},le=function(n,t){return n.getElementsByTagName(t)},fe=function(n,t){return n.querySelectorAll(t)},se=function(n,t){return n.querySelector(t)},he=function(n,t){return yt(t)?(Lt(t)&&(t=t(n)),n.textContent=t,n):n.textContent},pe=function(n,t){return yt(t)?(Lt(t)&&(t=t(n)),n.innerText=t,n):n.innerText},ve=function(n,t){var r=n.firstChild;return r?yt(t)?(Lt(t)&&(t=t(n)),r.nodeValue=t,n):r.nodeValue:he(n,t)},de={},ge=function(n){return an.getElementById(n)},me=function(n){return an.getElementsByClassName(n)},ye=function(n){return an.getElementsByTagName(n)},be=function(n){return an.querySelectorAll(n)},we=function(n){return an.querySelector(n)},v=function(n){var t,r,e=de[n];return e?e():("#"==n[0]?_.test(n)||(e=ge(n.slice(1)),t=n.slice(1),r=function(){return ge(t)}):"."==n[0]?q.test(n)&&(e=me(n.slice(1)),r=function(){return e}):F.test(n)&&(e=ye(n),r=function(){return e}),r||(e=be(n),r=function(){return be(n)}),de[n]=r,e)},Ae=function(n){if("#"==n[0]){if(!_.test(n))return ge(n.slice(1))}else if("."==n[0]){if(q.test(n))return me(n.slice(1))}else if(F.test(n))return ye(n);return be(n)};v.temp=de,v.id=ge,v.tagname=ye,v.cls=me,v.qsa=be,v.qs=we,v.$$=Ae;var xe=[Er,Mr,Ir,Sr,Or,Lr,ou,Fr,qr,Wr,Br,vr,xr,Ar,hr,br,wr,En,kr,gr,jr,Rr,he,pe,ve,Yr,te,yr,Cn,mr,re,Xr,sr,_r,Dr,ie,ae,ce,le,fe,se],Ne=["toggle","show","hide","sub","add","ison","act","ae","bb","ab","be","removeAttr","clTog","clRemove","hasAttr","cl","clHas","upTo","clone","center","html","ohtml","tc","txt","textValue","val","sel","cn","isMatch","changeTag","replace","prepend","ap","after","before","scrollInto","id","cls","tag","qsa","qs"],Ce=[oe,ee,Pr,Kr,Zr,Gr,Jr,Ur,zr,Vr,$r,Cr,Tr,Nr,Sn],Te=["scrollInfo","resetHTML","next","previous","parNode","last","first","ow","oh","ot","offset","clw","clh","clear","remove"],p=n.acidAvoid?n.acidAvoid:p;p?n[p]=v:n.$=v,n.ACID=v;var ke=function(){function n(n){return function(t){return n(this,t)}}function t(n){return function(t){return n(this)}}var r={scrollIt:function(n,t){return ue(this,n,t)},prependTo:function(n){return Xr(n,this)},apTo:function(n){return sr(n,this)},afterNth:function(n,t){return fr(this,n,t)},beforeNth:function(n,t){return dr(this,n,t)},sty:function(n,t){return ne(this,n,t)},attr:function(n,t){return pr(this,n,t)},plugInto:function(n,t){return Qr(this,n,t)},faceplate:function(n,t){return Tn(this,n,t)}};a(r,xe,Ne,n),a(r,Ce,Te,t);var e=function(n){var t=function(t){var r=this;return Qt(r,function(r){n(r,t.cloneNode(!0))}),r};return t},u=function(n){var t=function(t){var r=this;return Qt(r,function(r){n(t,r)}),r};return t},o=function(n){var t=function(t){return Qt(this,function(r){return n(r,t)})};return t},i=function(n){var t=function(t){return Qt(this,function(t){return n(t)})};return t},c=function(n){var t=function(){var t,r=h(arguments);return Qt(this,function(e){return t=r.slice(0),t.unShift(e),n.apply(null,r)})};return t},l=function(n){var t=function(t,r){return Qt(this,function(e){return n(e,t.cloneNode(!0),r)})};return t},f={each:function(n){for(var t=this,r=t.length,e=0;r>e;e++)n(t[e],e);return t},eachRaw:function(n){for(var t=this,r=0;r<t.length;r++)n(t[r],r);return t},lastIn:function(){var n=this;return n[n.length-1]},firstIn:function(){return this[0]},toArray:function(){return h(this)},replace:e(re),scrollIt:c(ue),prepend:e(Xr),prependTo:u(Xr),ap:e(sr),apTo:u(sr),after:e(_r),before:e(Dr),afterNth:l(fr),beforeNth:l(dr),removeRange:c(Mn),attr:c(pr),plugInto:c(Qr),faceplate:c(Tn)};a(f,xe,Ne,o),a(f,Ce,Te,i);var s={nodeOnly:r,listOnly:f};return s}(),Le=function(n){return n.reduce(function(n,t){return Nt(n)||(n=[n]),Nt(t)||(t=[t]),Ie(n,t),n})},Oe=function Tu(n,t){if(t){if(1===t)return Le(n);for(var r=0;t>r;r++)n=n.reduce(function(n,t,r,e){return n.concat(Nt(t)?t:[t])},[]);return n}return n.reduce(function(n,t,r,e){return n.concat(Nt(t)?Tu(t):t)},[])},Se=function(n){for(var t=[],r=0;r<n.length;r++)n[r]&&t.push(n[r]);return t},Ie=function(n,t){return E.apply(n,t)};v.pushApply=Ie,v.bsearch=function(n,t,r){var e,u=0,o=n.length;if(r)for(;o>u;){e=u+o>>>1;var i=r(n[e],t);if(!i)return e;0>i?u=e+1:o=e}else for(;o>u;){if(e=u+o>>>1,n[e]===t)return e;n[e]<t?u=e+1:o=e}return-1},v.chunk=function(n,r){size=size||1;for(var e=Math.ceil(n.length/size),u=new Array(e),o=0,i=0;e>o;o++)u[o]=t(n,i,i+=size);return u},v.clear=function(n){return n.length=0,n},v.clone=function(n){return n.slice(0)},v.compact=Se,v.countBy=function(n,t){for(var r,e={},u=n.length,o=0;u>o;o++)r=n[o],results=t(r),e[results]||(e[results]=0),e[results]=e[results]+1;return e},v.createRange=function(n,t,r,e){for(var u=r?r:t,o=r?t:0,i=o;u>i;i++){if(e&&i>0)var i=i-1+5,a=i+e;if(n.push(i),e&&a==u)break}return n},v.createRangeTo=function(n,t,r,e){for(var u,o=r?r:t,i=r?t:0,u=i;o>=u&&(e&&u>0&&(u=u-1+5,i_check=u+e),n.push(u),!e||i_check!=o);u++);return n},v.difference=function(n,t){for(var r=[],e=n.length,u=0;e>u;u++){var o=n[u],i=t.indexOf(o);-1==i&&r.push(o)}return r},v.differenceAll=function(n){for(var t,r,e=n.length,u=[],o=0;e>o;o++){r=n[o],sub_len=r.length;for(var i=0;i<sub_len;i++)t=r[i],indexof=u.indexOf(t),-1==indexof?u.push(t):u.splice(indexof,1)}return u},v.dropWhile=function(n,t){for(var r=[],e=n.length,u=0;e>u;u++){var o=n[u],i=t(o,u,n);i||r.push(o)}return r},v.dropRightWhile=function(n,t){for(var r,e=[],u=n.length,o=u-1;o>=0;o--)r=n[o],condition=t(r,o,n),condition||(e[o]=r);return e},v.drop=function(n,t){return n.splice(t,n.length)},v.dropRight=function(n,t){return n.slice(0,n.length-t)},v.eachArray=Qt,v.eachRaw=Xt,v.eachRight=rr,v.eachDo=Qt,v.eachWhile=nr,v.whileTrue=Kt,v.whileFalse=Yt,v.whileLength=tr,v.isEqualArray=function(n,t){if(t===n)return!0;if(!t||t.length!==n.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==n[r])return!1;return!0},v.first=function(n,t){return t?n.splice(0,t):n[n.length-1]},v.firstFalse=function(n,t){for(var r,e=n.length,u=0;e>u;u++)if(r=n[u],!t(r))return r;return!1},v.firstTrue=function(n,t){for(var r,e=n.length,u=0;e>u;u++)if(r=n[u],t(r))return r;return!1},v.flatten=function(n,t){return Oe(n,t)},v.flow=function(n,t){var r=n.length;return function(){for(var e=0;r>e;e++)t=n[e].apply(null,Nt(t)?t:[t]);return t}},v.flowRight=function(n,t){var r=n.length;return function(){for(var e=r-1;e>=0;e--)t=n[e].apply(null,Nt(t)?t:[t]);return t}},v.groupBy=function(n,t){for(var r,e,u={},o=n.length,i=0;o>i;i++)r=n[i],e=t(r),u[e]||(u[e]=[]),u[e].push(r);return u},v.indexBy=function(n,t){var r,e,u={},o=n.length;for(e=0;o>e;e++)r=n[e],u[r[t]]=r;return u},v.initial=function(n,t){for(var r=[],e=n.length-1,u=0;e>u;u++)r[u]=n[u];return r},v.intersect=function(n,t){var r=[],e=t.length;if(!e)return r;n:for(var u=0;u<n.length;u++){var o,i=n[u];if(r.indexOf(i)<0){for(o=0;e>o;o++)if(t[o].indexOf(i)<0)continue n;r.push(i)}}return r},v.invoke=function(n,t,r){for(var e,u=[],o=n.length,i=0;o>i;i++)e=n[i],u.push(e[t].apply(e,r));return u},v.isArrayEmpty=function(n){return 0===n.length},v.largest=function(n){return x.max.apply(x,n)},v.last=function(n,t){return Zt(n,t)},v.left=function(n,t){return n[t]},v.numSort=function(n){return n.sort(r)},v.object=function(n,t){for(var r=n.length,e={},u=0;r>u;u++)e[n[u]]=t[u];return e},v.partition=function(n,t){for(var r,e=[],u=[],o=n.length,i=0;o>i;i++)r=n[i],t(r)?e.push(r):u.push(r);return[e,u]},v.pluck=function(n,t){for(var r,e=[],u=n.length,o=0;u>o;o++)r=n[o][t],r&&e.push(r);return e},v.rNumSort=function(n){return n.sort(e)},v.remove=function(n,t){var r,e,u=0,o=0;Nt(t)||(t=[t]);for(var i=0;i<n.length;i++){for(r=!1,e=0;e<t.length;e++)if(n[i]===t[e]){r=!0;break}r?(o||(u=i),++o):o&&(n.splice(u,o),i-=o,o=0)}return o&&n.splice(u,o),n},v.rest=function(n,t){var n=this;return t?n.first(t):(n.shift(),n)},v.right=function(n,t){return n[n.length-1-t]},v.sample=function(n,t){var r=n.length-1;if(t){for(var e,u=[],o=0;t>o;o++)e=n.splice(Math.round(Math.random()*(n.length-1)),1)[0],e&&u.push(e);return u}return n[Math.round(Math.random()*r)]},v.shuffle=function(n){for(var t=h(n),r=[],e=0,u=t.length;u>e;)r.push(t.splice(Math.round(Math.random()*(t.length-1)),1)[0]),e++;return r},v.smallest=function(n){return x.min.apply(x,n)},v.sortedIndex=function(n,t){for(var r,e=0,u=n.length,o=0;u>o;o++)r=n[o],t>r&&(e=o);return e>0&&(e+=1),e},v.sumOf=function(){for(var n=this,t=0,r=n.length,e=0;r>e;e++)t+=n[e];return t},v.take=function(n){return this.slice(0,n)},v.takeWhile=function(n){for(var t,r=this,e=[],u=r.length,o=0;u>o;o++)t=r[o],condition=n(t,o,r),condition&&e.push(t);return e},v.takeRight=function(n){var t=this;return t.splice(t.length-n,n)},v.takeRightWhile=function(n){for(var t,r=this,e=[],u=r.length,o=u-1;o>=0;o--)t=r[o],condition=n(t,o,r),condition&&e.unshift(t);return e},v.union=function(n){var t,r,e,u=i(n);for(r=0;r<arguments.length;r++)for(t=arguments[r],e=0;e<t.length;e++)u.indexOf(t[e])<0&&u.push(t[e]);return u},v.uniq=i,v.without=function(n,t){var r,e,u=[];n:for(r=0;r<n.length;r++){for(e=0;e<arguments.length;e++)if(n[r]===arguments[e])continue n;u.push(n[r])}return u},v.xor=function(n){var t,r,e=arguments.length;if(!e)return i(n);for(r=u(n,arguments[0]),t=1;e>t;t++)r=u(r,arguments[t]);return r},v.zip=function(n){var t,r,e,u=n.length,o=h(arguments),i=o.length,a=[];for(t=0;u>t;t++){for(e=[],e.push(n[t]),r=0;i>r;r++)e.push(o[r][t]);a.push(e)}return a},v.unZip=function(n){var t,r,e,u=n.length,o=[],i=n[0],a=i.length;for(t=0;a>t;t++)o[t]=[];for(r=0;a>r;r++){for(e=0;u>e;e++)o[t].push(n[e][r]);t++}return o};var Me=/%(?![\da-f]{2})/gi,Ee=/&/g,je=/</g,Re=/>/g,He=/"/g,Be=/\//g;v.rangeString=function(n,t,r,e){var u=n.slice(0,t),o=n.slice(r,n.length),i=u+e+o,u=null,n=null,e=null,e=null,o=null;return i},v.lastString=function(n){return n[n.length-1]},v.rightString=function(n,t){return n[n.length-1-t]},v.endsWithString=function(n,t,r){(void 0===r||r>n.length)&&(r=n.length),r-=t.length;var e=n.indexOf(t,r);return-1!==e&&e===r},v.replacePhrase=function(n,t){if(!Nt(n)){if(kt(n)){for(var r=this,e=0,u=j(n),o=u.length;o>e;e++)var i=u[e],r=r.replacephrase(i,n[i]);return r}var a=new RegExp("\\b"+n+"\\b","gi");return this.replace(a,t)}var n=n.join("|")},v.replaceList=function(n,t){for(var r=this,e=n.length,u=0;e>u;u++)var r=r.replace(n[u],t);var n=null,t=null;return r};var We=function(n){return decodeURIComponent((n+"").replace(Me,function(){return"%25"}))};v.rawURLDecode=We;var qe=function(n){return n.replace(Ee,"&amp;").replace(je,"&lt;").replace(Re,"&gt;").replace(He,"&quot;").replace(Be,"&quot;")};v.htmlEntities=qe,v.sanitize=function(n){return qe(We(n))},v.duc=function(){return decodeURIComponent(this)},v.euc=function(){return encodeURIComponent(this)},v.tokenize=function(n){return n.match(/\S+/g)||[]},v.words=function(n){return n.match(/\w+/g)},v.ucFirst=lr,v.ucFirstAll=function(n){for(var t=n.split(" "),r=t.length,e=0;r>e;e++){var u=t[e];t[e]=u.charAt(0).toUpperCase()+u.substr(1)}return t.join(" ")},v.ucFirstOnly=function(n){return n.charAt(0).toUpperCase()+n.substr(1).toLowerCase()},v.ucFirstOnlyAll=function(n){for(var t=n.split(" "),r=t.length,e=0;r>e;e++){var u=t[e];t[e]=u.charAt(0).toUpperCase()+u.substr(1).toLowerCase()}return t.join(" ")},v.camel=function(n){var t=v.ucfirstall.call(n.replace($," ").replace(U," "));return(t.charAt(0).toLowerCase()+t.substr(1)).replace(D,"")},v.kebab=function(n){return n.toLowerCase().replace($," ").replace(D,"-")},v.snake=function(n){return n.toLowerCase().replace(U," ").replace(D,"_")},v.truncate=function(n,t){var r=n,e=r.length;return e>t?r.slice(0,t):r},v.truncateLeft=function(n,t){var r=n,e=r.length;return e>t?r.substr(t,e):r},v.truncateWord=function(n,t){var r=n,e=r.length;if(e>t){for(var u,o,i=0,a="",c=r.split(" "),l=c.length,f=0;l>f&&(u=c[f]+" ",o=u.length+i,t>o);f++)i=o,a+=u;return a.trim()}return r},v.repeat=function(n,t){if(!t)return"";if(1==t)return n;for(var r=n,e=r,u=1;t>u;u++)if(u>0)var e=e+r;return e},v.addParam=function(n,t){var r=n,e=r.length;if(e>0){var u=r[e-1];return-1!=r.indexOf("?")?"?"!=u?r+"&"+t:"?"==u?r+t:r+"&"+t:r+"?"+t}return"?"+t};v.cloneObject=function(){function n(){}function t(t){return n.prototype=t,new n}var r=function(){return t(this)};return r}(),v.copyObject=function(n){return cr(n,{})},v.eachObject=function(n,t){return er(n,t)},v.isEqualObject=R;var Fe=function(n,t){return cr(n.prototype,t)};v.extend=Fe,v.mergeObject=cr,v.stringify=function(n){return W(n)},v.ary=function(n,t,r){var e=function u(){return n.apply(r||u,h(arguments).splice(0,t))};return e},v.chain=function(n,t){if(n.methods){for(var r=0,e=j(t),u=e.length;u>r;r++){var o=e[r],i=t[o];n.methods[o]=function(t,r){return function(){return n.results[r]=t.apply(t,h(arguments)),n.methods}}(i,o)}return n}var a=function c(){return c.results.first=n.apply(c,h(arguments)),c.methods};a.removeChain=function(n){return a.results[n]=null,a},a.removeAllChains=function(){return a.methods={},a},a.values=function(n){if(!n)return a.results;for(var t=[],r=a.results,e=0,u=j(r),o=u.length;o>e;e++){var i=u[e],c=r[i];t.push(c)}return t},a.original=function(){return n.apply(a,h(arguments))},a.results={},a.methods={};for(var r=0,e=j(t),u=e.length;u>r;r++){var o=e[r],i=t[o];a.methods[o]=function(n,t){return function(){return a.results[t]=n.apply(n,h(arguments)),a.methods}}(i,o)}return a},v.curry=function(n){var t=0,r=[],e=n.length,u=function o(){if(r=Qt(h(arguments),function(n){t++}),e==t){var u=n.apply(n,r);return t=0,r=[],u}return o};return u},v.curryRight=function(n){var t=0,r=[],e=n.length,u=function o(){if(Qt(h(arguments),function(n){r.unshift(n),t++}),e==t){var u=n.apply(o,r);return t=0,r=[],u}return o};return u},v.negate=function(n){return function(){return n.apply(n,h(arguments))?!1:!0}},v.once=function(n){var t,r=!1;return function(){return r||(r=!0,t=n.apply(this,h(arguments)),n=null),t}},v.after=function(n,t){var r=0,e=0;return function(){return r>t&&(t=1,e=n.apply(this,h(arguments)),n=null),e}},v.before=function(n,t){var r=0,e=0;return function(){return t>r&&(t=1,e=n.apply(this,h(arguments)),n=null),e}},v.reArg=function(n,t){return function(){return n.apply(n,Qt(h(arguments),function(n,r){args.push(order[t[r]])}))}},v.debounce=function(n,t){var r=!1,e=function(){r!==!1&&clearTimeout(r);var e=h(arguments),u=this;r=setTimeout(function(){n.apply(u,e),r=!1,e=null,u=null},t)};return e.run=function(){r&&clearTimeout(r),n.apply(this,h(arguments))},e.clear=function(){r&&(clearTimeout(r),r=!1)},e},v.throttle=function(n,t){var r=!1,e=function u(){if(r!==!1)return!1;var e=h(arguments);r=setTimeout(function(){n.apply(u,e),e=null,r=!1},t)};return e.clear=function(){clearTimeout(r),r=!1},e.run=function(){clearTimeout(r),r=!1,n.apply(e,h(arguments))},e},v.timer=function(n,t){return setTimeout(n,t)},v.interval=function(n,t){return setInterval(n,t)},v.asyncFN=Ut?function(n){zt.then(n)}:function(n){setTimeout(n,0)},v.wrap=function(n,t,r){if(Lt(t))return function(){var e=h(arguments);return[t.apply(r,e),n.apply(r,e)]};if(kt(t))for(var e=0,u=j(t),o=u.length;o>e;e++){var i=u[e];t[i]=v.wrap.apply(n,[t[i],r])}return t},v.wrapBefore=function(n,t,r){if(Lt(t))return function(){var e=h(arguments);return[n.apply(r,e),t.apply(r,e)]};if(kt(t))for(var e=0,u=j(t),o=u.length;o>e;e++){var i=u[e];t[i]=wrap_before.apply(n,[t[i],r])}return t};v.isZero=function(n){return 0===n},v.isNumberEqual=function(n,t){return n===t},v.isNumberInRange=function(n,t,r){if(r===N)var r=t,t=0;return n>t&&r>n},function(){var n=x.abs,t=x.acos,r=x.acosh,e=x.asin,u=x.asinh,o=x.atan,i=x.atanh,a=x.atan2,c=x.cbrt,l=x.ceil,f=x.clz32,s=x.cos,h=x.cosh,p=x.exp,d=x.expm1,g=x.floor,m=x.fround,y=x.hypot,b=x.imul,w=x.log,A=x.log1p,N=x.log10,C=x.log2,T=x.max,k=x.min,L=x.pow,O=x.random,S=x.round,I=x.sign,M=x.sin,E=x.sinh,j=x.sqrt,R=x.tan,H=x.tanh,B=x.trunc;v.add=function(n,t){return n+t},v.minus=function(n,t){return n-t},v.divide=function(n,t){return n/t},v.multiple=function(n,t){return n*t},v.remainder=function(n,t){return n%t},v.increment=function(n){return n+1},v.deduct=function(n){return n-1},v.abs=n,v.acos=t,v.acosh=r,v.asin=e,v.asinh=u,v.atan=o,v.atanh=i,v.atan2=a,v.cbrt=c,v.ceil=l,v.clz32=f,v.cos=s,v.cosh=h,v.exp=p,v.expm1=d,v.floor=g,v.fround=m,v.hypot=y,v.imul=b,v.log=w,v.log1p=A,v.log10=N,v.log2=C,v.max=T,v.min=k,v.pow=L,v.randomArbitrary=function(n,t){if(!t)var t=0;return O()*(n-t)+t},v.randomInt=function(n,t){if(!t)var t=0;return g(O()*(n-t))+t},v.random=O,v.round=S,v.sign=I,v.sin=M,v.sinh=E,v.sqrt=j,v.tan=R,v.tanh=H,v.trunc=B}(),v.isEnter=function(n){var t=n.keyCode;return 13==t?!0:!1},v.debug=function(n){return d=n};var _e=(v.promise=function(n,t,r){return r?Gt(n,t,r):Jt(n,t)},v.promises={}),De=requestAnimationFrame,Pe=cancelAnimationFrame;v.caf=function(n){return Pe(n)},v.raf=function(n){return De(n)};var Ue=function(n){Vt(n)};v.async=function(n){Lt(n)?Vt(n):Nt(n)?Qt(n,Ue):er(n,Ue)};var ze=function(){var n=!1,t=0,r=[],e=function(){for(var e=r,u=0;t>u;u++)e[u]();t=0,r=[],n=!1},u=function(){n||(n=De(e))},o=function(n){r[t]=n,t+=1,u()};return o}();v.batch=ze;var Ve=function(){var n=function(n,t){return n?yt(t)?Ve[n]=t:Ve[n]:Ve};return n}();v.cache=Ve,v.cacheToggle=function(n,t,r){return Ve[n]===t?Ve[n]=r:Ve[n]=t};var $e=console.log,Ge=console,Je=function(n,t){var r=[n];t&&(r[0]="%c"+r[0],r.push(Qe[t]+"font-size:13px;padding:2px 5px;border-radius:3px;")),$e.apply(Ge,r)},Ze=function(n,t){return"color:"+n+";background:"+t+";"},Qe={notify:Ze("#01c690","#0e2a36"),warning:Ze("#ebb227","#262626"),important:Ze("#ffe4ea","#dc3153")},Xe=function(n,t,r){Qe[n]=Ze(t,r)};v.console=Je,v.addConsoleTheme=Xe;var Ke=function(n,t,r){if(Nt(n))var e=Qt(n,t);else if(kt(n))var e=er(n,t);else if(Tt(n))var e=ur(n,t,r);else if(St(n)||Ot(n))var e=Qt(h(n),t);else var e=er(n,t);return e};v.each=Ke,v.eventAdd=function(n,t,r,e){return or(n,t,r,e)},v.eventRemove=function(n,t,r,e){return ir(n,t,r,e)},v.exec=function(n,t,r){return an.execCommand(n,t,r)},v.get=Pt,v.hasValue=yt,v.has=It,v.isArray=Nt,v.isString=Ct,v.isDom=Nn,v.isNumber=Tt,v.isObject=ot,v.isPlainObject=kt,v.isFunction=Lt,v.isRegex=Yn,v.isArgs=nt,v.isBool=tt,v.isDate=rt,v.isError=et,v.isMap=ut,v.isSet=it,v.isWeakMap=at,v.isFloat32=ct,v.isFloat64=lt,v.isInt8=ft,v.isInt16=st,v.isInt32=ht,v.isUnit8=pt,v.isUnit8clamped=vt,v.isUnit16=dt,v.isUnit32=gt,v.isNative=mt,v.isUndefined=bt,v.isNaN=wt,v.isInt=At,v.isNull=xt,v.isEmpty=Et,v.isHTMLCollection=Ot,v.isNodeList=St,v.isFileCSS=jt,v.isFileJSON=Rt,v.isFileJS=Ht,v.hasDot=Bt,v.getModelProperty=qt,v.getModelRootName=Wt,v.json=c,v.weakMap=function(n){return new C(n)},v.map=function(n){return new T(n)};var Ye,nu;C&&(v.weakEvent=Ye=new C,v.weakData=nu=new C),v.e=x.E,v.ln2=x.LN2,v.ln10=x.LN10,v.log2e=x.LOG2E,v.log10e=x.LOG10E,v.pi=x.PI,v.sqrt1_2=x.SQRT1_2,v.sqrt2=x.SQRT2;var tu=function(){var n=function(n,t,r){if(yt(t)){var e=tu[n]=t;return Lt(e)?e=e.bind(e):kt(e)&&er(e,function(n,t){Lt(n)&&(e[t]=n.bind(e))}),e.modelName=n,e}return It(n,".")?Pt(n,tu):tu[n]};return n}();v.model=tu,v.keys=j,v.getPropDescrip=B,v.assign=H;var ru=function ku(n){return ku[n]},eu=function(n,t){var r=ru[n]={},e=r.process=t||{},u=r.run=function(n){n?e[n]():er(e,function(n){n()})},o=r.add=function(n){er(n,function(n,t){e[t]=n.bind(r)})},i=r.end=function(){r=null,e=null,u=null,i=null,o=null,r[n]=null};er(r,function(n,t){Lt(n)&&(r[t]=n.bind(r))}),er(e,function(n,t){Lt(n)&&(e[t]=n.bind(r))})};v.createService=eu,v.service=ru,v.local=L,v.clearLocal=function(){return L.clear()},v.session=O,v.clearSession=function(){return O.clear()},v.mem={},v.timerClear=function(n){return clearTimeout(n)},v.intervalClear=function(n){return clearInterval(n)},v.clearTimers=function(){for(var n=setTimeout(function(){},0),t=0;n>t;t++)clearTimeout(t)},v.clearIntervals=function(){for(var n=setInterval(function(){},1e3),t=0;n>=t;t++)clearInterval(t)},v.toArray=h,v.toggle=function(n,t,r){return n===t?r:t},v.xhr={},g.xhr={};var uu=function Lu(n){d&&console.log(n);var t,r=n.target,e=n.target.status,u=r.getResponseHeader("content-type"),o=r.responseText;200===e?("application/json"===u&&(o=c(o)),t=r.callback,t&&Vt(function(){t(o,n),o=null,n=null})):e>200&&(t=r.fail,t&&Vt(function(){t(n),n=null})),ir(r,"load",Lu),r=null,e=null};v.xhr=function(n){var t=new XMLHttpRequest,r=n.url,e=n.data||!1,u=n.json||!1,o=n.type||"GET",i=n.contentType,a=n.callback,c=(n.success,n.fail),f=n.abort,s=n.progress,h=g.credits.url,p=g.xhr.analytics,v="";return i||(i=u?"application/json; charset=utf-8":"GET"==o?"text/plain":"application/x-www-form-urlencoded"),e&&(kt(e)?er(e,function(n,t){yt(n)&&(v=l(v,t+"="+n))}):Nt(e)&&Qt(e,function(n,t){yt(n)&&(v=l(v,n))})),p&&p(r,v),a&&(t.callback=a),c&&(t.fail=c,or(t,"error",c)),s&&or(t,"progress",s),f&&or(t,"abort",f),or(t,"load",uu),"GET"==o&&v&&(r=It(r,"?")?r+"&"+v:r+"?"+v,v=""),h&&(r=It(r,"?")?r+"&"+h():r+"?"+h()),u&&(v=u),t.open(o,r,!0),t.setRequestHeader("Content-type",i),t.send(v),t=null,r=null,e=null,o=null,i=null,a=null,h=null,
p=null,!1};var ou=function(n,t){return v["on"+t](n),n};v.act=ou,v.isAgent=function(n){return n?Au[n]:Au};var iu=function(n,t){var n=Ct(n)?[n]:n,r=Qt(n,function(n){return n+".js"});gu(r,t)};v.ensure=iu,v.frag=kn;var au,cu=function(){return crypto.getRandomValues(new Uint32Array(1))[0]};Ln(function(){au=document.getElementsByTagName("head")[0]});var lu=function(n){return an.createElement(n)};v.tag=lu;var fu=function(n,t){var r=an.createElement(n),e=t.attr,u=t.set,o=t.prop;if(e)for(var i=0,a=j(e),c=a.length;c>i;i++){var l=a[i];r.setAttribute(l,e[l])}if(u)for(var i=0,a=j(u),c=a.length;c>i;i++){var l=a[i];r.setAttribute("data-"+l,u[l])}if(o)for(var i=0,a=j(o),c=a.length;c>i;i++){var l=a[i];r[l]=o[l]}for(var i=0,a=j(t),c=a.length;c>i;i++){var l=a[i];if("attr"!=l&&"prop"!=l&&"set"!=l){var f=t[l];Nt(f)?r[l].apply(r,t[l]):r[l](t[l])}}return r};v.dom=fu;var su=function(n,t){var r=t.attr,e=t.set,u=t.html||"",o="";if(r)for(var i=0,a=j(r),c=a.length;c>i;i++)var l=a[i],o=o+" "+l+'="'+r[l]+'"';if(e)for(var i=0,a=j(e),c=a.length;c>i;i++){var l=a[i];n.setAttribute("data-"+l,e[l]);var o=o+" data-"+l+'="'+e[l]+'"'}return"<"+n+" "+o+">"+u+"</"+n+">"};v.html=su;var hu=function(n,t){var r=dn,e=kn(),u=null;for(r.innerHTML=n;u=r.firstChild;)e.appendChild(u);return 1===e.childNodes.length&&(t=0),yt(t)&&(e=e.childNodes[t]),r=null,u=null,e};v.toDOM=hu;var pu=function(n,t){var r=lu("link");return r.setAttribute("type","text/css"),r.setAttribute("rel","stylesheet"),f(n,r,t),r.setAttribute("href",n),r};v.css=pu;var vu=function(n,t){var r=lu("script");return n&&r.setAttribute("src",n),f(n,r,t),r};v.script=vu;var du,gu=function(){var n=function y(n){return y[n]||""},t={},r=function(n){or(n.node,"load",n.call,!0),or(n.node,"error",n.call,!0)},e=function(n){return n.replace(z,"_").replace(U,"_").replace(P,"_")+"_import"},u=function(n,t,r,e,u,o){e&&(Ct(e)&&(e=Pt(e,tu)),Vt(e)),u&&n.remove(),ir(n,"load",o.call),ir(n,"error",o.call),n=null,u=null,o=null,e=null,r=null},o=function(n,r,e,o,i){var a={node:n,call:function(c,l,f){t[e]=1,c.stopPropagation();var f,s=c.type;f="load"===s?i:!0,u(n,r,e,o.call,f,a),a=null,n=null,r=null,e=null,o=null,i=null,c=null}};return a},i=pr(pr(lu("link"),"rel","stylesheet"),"type","text/css"),a=function(n,t){return pr(kr(i),"href",n)},c=pr(lu("script"),"async",""),l=function(n,t){return pr(kr(c),"src",n)},f={js:l,css:a},s=function(u,i,a){var c,l,s=Ft(u),h=e(u),p=u.match(V)[0].replace(".","");It(u,"//")||(u=n(p)+u),i.remove||s&&(c=!0),t[h]?(l=we('[href="'+u+'"]'),l&&1!==t[h]?r(o(l,u,h,i,c)):Vt(i.call)):(t[h]=!0,l=f[p](u,h),r(o(l,u,h,i,c)),vn.appendChild(l))},h=function(n){return Ct(n)&&(n=Ft(n)?Dt(n):_t(n)?we('[href="'+n+'"]'):Pt(n,v)),n},p=function(n){var t=n.invoke,r=n.name,e=n["import"],u=function(){var n=Qt(e,h);return arguments.length>0&&Ie(n,arguments),t.apply(u,n)}.bind(u);return r&&(tu[r]=u),u},d=function(n,t,r){s(n,{call:function(){r&&r(n,t),Jt(n,t),n=null,t=null,r=null}})},g=function(n,t){var r=e(n.join("")),u=t.error,o=t.call,i=function(){o.apply(o,Qt(n,h)),o=null,n=null},a=Qt(n,function(n,t){return Ct(n)&&(Ft(n)||_t(n))?n:void 0});a.length>0?(Gt(a,r,function(){i()}),Qt(a,function(n,t){d(n,r,u)})):Vt(function(){i()}),r=null,t=null,u=null},m=function(n,t){return Lt(t)&&(t={call:t}),Ct(n)&&(n=[n]),g(n,t)},n=function b(n){return b[n]||""};return v.imported=t,n.css="",n.js="",v.dir=n,du=p,v.define=p,m}();v["import"]=gu;var mu=function(){var n=function(n){var t=n.invoke,r=(n.callback,n.name),e=n["import"],u=function o(n){gu(e,{call:t.bind(o)})};return r&&(tu[r]=u),u};return n}();v.module=mu;var yu=function Ou(n){var t,r,e,u,o,i,a=n;return Ct(n)||(t=n.render,r=Nn(t),e=Lt(t),u=Ct(t),o=n.faceplate,a=n.name,u&&(r=!0,t=hu(t)),i=r?function(n){var r=kr(t,!0);return o&&o(r,n),r}:function(n){var r=hu(t(n));return o&&o(r,n),r},Ou[a]=i),Ou[a]};v.template=yu,v.domListToArray=xn;var bu=an.createElement("a");v.linkParse=function(n){var t=bu;t.href=n;var r={url:n,protocol:t.protocol,hostname:t.hostname,port:t.port,path:"/"!=t.pathname[0]?"/"+t.pathname:t.pathname,pathroot:"/"!=t.pathname[0]?t.pathname.split("/")[0]:t.pathname.split("/")[1],search:t.search,hash:t.hash,host:t.host},e=r.hostname.split("."),u=e.length,e=e[u-2]+"."+e[u-1],u=null;"http:"==r.protocol?r.ssl=!1:r.ssl=!0,r.domain=e;var t=null;return r};var wu=function(n){};v.view=wu,v.host={protocol:X,protocol_socket:K,name:Y},v.hardware={cores:nn};var Au=v.agent={};v.acid={name:"ACIDjs",version:1,platform:"stable",site:"http://acidjs.com"},Je("ACIDjs v"+v.acid.version+" "+v.acid.platform,"notify");var xu=function(){var n=tn.navigator.userAgent.toLowerCase(),t=["windows","macintosh","linux","ipad","iphone","chrome","safari","firefox","msie","trident","mobile","android","edge/"],r=t.length,e=[],u=Au;u.string=n.toLowerCase();for(var o=0;r>o;o++){var i=t[o];u[i]=It(n,i)}er(u,function(n,t){return"string"!=t?"mobile"!=t||n?void(n&&e.push(t)):void e.push("desktop"):void 0});var a=document.body.classList;return Qt(e,function(n){a.add(n)}),!1};v.acid.agentInfo=xu,Ln(xu),function(){var n=v.cache.config={},t=function(){var t=n;v.cache.config=t;for(var r=t,e=0,u=j(r),o=u.length;o>e;e++){var i=u[e],a=r[i];g[i]||(g[i]={}),g[i]=cr(g[i],a)}};v.acid.config=function(r){return r&&(n=r),Ln(t),!1}}(),Ve.screenHeight=screen.height,Ve.screenWidth=screen.width,Ln(function(){pn=document.body,De(s)});var Nu,Cu=function(){var n=function(n,t,r,e,u,o){if(n){var i=Pt(n,tu);i&&(d&&console.log(n),i(r,e,o),i=null,n=null,r=null,e=null,o=null),t&&Vt(function(){t(u,n)})}},t=function(t,r,e,u,o,i){var a,c,l;if(d&&console.log(r),a||t.getAttribute&&(a=t.getAttribute(i)),!a&&t!==pn)for(;t=t.parentNode;){if(!t)return;if(1!=t.nodeType)return;if(a||(a=t.getAttribute(i)),a)break}var f,s;a&&(r.stopPropagation(),l=a.split(","),Qt(l,function(u){s=u.match(/\((.*?)\)/),s&&(u=u.replace(s[0],""),f=s[1]),c=Pt(u,tu),c?c(t,r,f):iu(u.split(".")[0],function(){n(u,e,t,r,o,f),r=null,o=null,e=null,u=null}),f="",s=!1}))},r=function(n,r,e,u,o){var i,a=Nn(n),c=!1;e&&e(),a?i=n:(i=n.target,Nn(i)||(c=!0)),i&&(c||t(i,n,r,e,u,o))},e=function(n){var t=n.type,e=n.fn,u=n.analytics,n=null,o="data-"+t,i=function(n){r(n,u,e,t,o)};return i},u=function(n,t,r){var u;er(n,function(n,o){u="on"+o,r.type=o,r.fn=n.fn,v[u]=e(r),or(t,o,v[u],!0)})},o=function(n){u(n.window,window,{analytics:n.analytics}),u(n.body,document.body,{analytics:n.analytics})};return Nu=e,o}();v.acid.event=Cu,v.acid.event.generate=Nu;v.eventNames=[];!function(){function n(n){return["readystatechange","wheel","copy","cut","paste","beforescriptexecute","afterscriptexecute","abort","canplay","canplaythrough","change","ctextmenu","duratichange","emptied","ended","input","invalid","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","reset","seeked","seeking","select","show","stalled","submit","suspend","timeupdate","volumechange","waiting","fullscreenchange","fullscreenerror","pointerlockchange","pointerlockerror","blur","error","focus","load","scroll"]}function t(n){return["mouseenter","mouseleave","click","dblclick","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","keydown","keypress","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","blur","focus"]}function r(){var r={window:{},body:{}};Qt(n(),function(n,t){r.window[n]={}}),Qt(t(),function(n,t){r.body[n]={}}),r.window.resize={fn:function(){s()}},Cu(r)}Ln(r)}(),fn&&(v.dir.js=fn.getAttribute("data-core")||"",fn.onload&&(fn.onload(),fn.onload=null)),Ln(function(){iu("core",function(n){n&&Vt(n)})});var fn=null;ar(ke.nodeOnly,gn),ar(ke.listOnly,mn),ar(ke.listOnly,bn)}(this);