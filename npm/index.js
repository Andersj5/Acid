/* Acid 2.0.0 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.$=t()})(this,function(){'use strict';let e;const t=(...t)=>{return e(...t)};t.superMethod=(t)=>{e=t};const n=Object,i=n.keys,r=n.is,s=n.assign,a=n.getOwnPropertyDescriptor,d=n.defineProperty,l=n.getOwnPropertyNames,o=(e)=>{return i(e).length};s(t,{keys:i,is:r,assign:s,getOwnPropertyDescriptor:a,defineProperty:d,getOwnPropertyNames:l,objectSize:o});s(t,{asyncEach:async(e,t)=>{const n=e.length;for(let i=0;i<n;i++){const r=e[i];await r(t,i,n)}}});const c=(e,t,n)=>{const i=e?e:0,r=e?t:e;for(let s=i;s<r;s++)(n||t)(s,i,r)},p=(e,t)=>{const n=e.length;for(let i=0;i<n;i++)t(e[i],i,e,n)},u=(e,t)=>{const n=e.length;for(let i=n-1;0<=i;i--)t(e[i],i,e,n)},h=(e,t)=>{const n=e.length;for(let i=0;i<n;i++)if(!1===t(e[i],i,e,n))return!1;return!0},y=(e,t,n=[])=>{return p(e,(e,i,r,s)=>{!0===t(e,i,n,r,s)&&n.push(e)}),n},m=(e)=>{return(t,n,i=[])=>{return e(t,(e,t,r,s)=>{i[t]=n(e,t,i,r,s)}),i}},f=m(p),g=m(u),k=(e,t,n=[])=>{let i;return p(e,(e,r,s,a)=>{i=t(e,r,n,s,a),S(i)&&n.push(i)}),n};s(t,{compactMapArray:k,eachArray:p,eachArrayRight:u,eachWhile:h,filterArray:y,mapArray:f,mapArrayRight:g,mapWhile:(e,t,n=[])=>{const i=e.length;let r;for(let s=0;s<i&&(r=t(e[s],s,n,e,i),!!r);s++)n[s]=r;return n},times:c,timesMap:(e,t,n,i=[])=>{const r=n?e:0,s=n?t:e;let a;return c(r,s,(e)=>{a=(n||t)(i,e,r,s),S(a)&&i.push(a)}),i}});const b=(e)=>{return`[object ${e}]`},x=function(e){return void 0===e},A=(e)=>{return null===e},S=(e)=>{return!x(e)&&!A(e)},O=(e)=>{return(t)=>{return!!S(t)&&t.toString()===e}},w=(e)=>{return(t)=>{return!!S(t)&&t.constructor===e}},C=/\.|\+/,E=Array.isArray,v=w(String),N=w(Number),j=(e)=>{return!!S(e)&&'Object('===e.constructor.toString().trim().slice(9,16)},F=(e)=>{return!!S(e)&&e instanceof Function},I=(e)=>{return!!e.length},M=(e)=>{return(t)=>{return!!S(t)&&e.test(t)}},R=M(/\.css$/),L=M(/\.json$/),D=M(/\.js$/),B=/\.([0-9a-z]+)/;p(['RegExp','Arguments','Boolean','Date','Error','Map','Object','Set','WeakMap','ArrayBuffer','Float32Array','Float64Array','Int8Array','Int16Array','Int32Array','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array'],(e)=>{t[`is${e}`]=O(b(e))}),s(t,{getFileExtension:(e)=>{return e.match(B)},has:(e,...t)=>{return e.includes(...t)},hasLength:I,hasValue:S,isArray:E,isDecimal:(e)=>{return e.toString().match(C)},isEmpty:(e)=>{return v(e)||E(e)?!I(e):j(e)?!o(e):!S(e)},isFileCSS:R,isFileJS:D,isFileJSON:L,isFunction:F,isNull:A,isNumber:N,isPlainObject:j,isString:v,isUndefined:x});const U=(e)=>{return E(e)?e:[e]};s(t,{ensureArray:U});const P=(e,t=1)=>{let n=e;for(let r=0;r<t;r++)n=n.reduce((e,t)=>{return e.concat(U(t))},[]);return n};s(t,{flatten:P,flattenDeep:(e)=>{return e.reduce((e,t)=>{return e.concat(E(t)?P(t):t)},[])}});s(t,{remove:(e,t)=>{const n=U(t);return p(e,(t)=>{n.includes(t)&&e.splice(e,n.indexOf(t),1)}),e}});s(t,{chunk:(e,t=1)=>{const n=[];let i=0;return e.forEach((e,r)=>{r%t||(n.push([]),r&&i++),n[i].push(e)}),n}});const q=(e)=>{return(...t)=>{return(n)=>{let i;return e(t,(e)=>{const t=S(i)?i:n;i=e(t)}),i}}},T=q(p),W=q(u);s(t,{flow:T,flowRight:W});s(t,{rest:(e)=>{return e.slice(1,e.length-1)}});const z=(e)=>{return e.length=0,e};s(t,{clear:z});const H=(e,t,n={})=>{return p(t,(t,i)=>{e(t,i,n)}),n};s(t,{arraySortToObject:H});s(t,{groupBy:(e,t)=>{return H((e,n,i)=>{const r=t(e);i[r]||(i[r]=[]),i[r].push(e)},e)}});s(t,{right:(e,t)=>{return e[e.length-1-t]}});s(t,{cloneArray:(e)=>{return e.splice()}});const K=Math,Z=K.floor,$=K.random,J=(e,t=0)=>{return Z($()*(e-t))+t};s(t,{add:(e,t)=>{return e+t},deduct:(e)=>{return e-1},divide:(e,t)=>{return e/t},increment:(e)=>{return e+1},minus:(e,t)=>{return e-t},multiply:(e,t)=>{return e*t},randomArbitrary:(e,t=0)=>{return $()*(e-t)+t},randomInt:J,remainder:(e,t)=>{return e%t}});s(t,{sample:(e,t=1)=>{if(1===t)return e[J(e.length-1,0)];const n=[],i={};for(let r,s=0;s<t;)r=J(e.length-1,0),i[r]||(n.push(n[r]),i[r]=!0,s++);return n}});s(t,{compact:(e)=>{return e.filter((e)=>{return v(e)&&!e.length?!1:e})}});s(t,{indexBy:(e,t)=>{return H((e,n,i)=>{i[e[t]]=e},e)}});const V=Array,_=V.from;s(t,{toArray:_});s(t,{shuffle:(e,t=1)=>{const n=_(e);for(let i,r,s=0;s<t;)i=J(n.length-1,0),r=n[s],n[s]=n[i],n[i]=r,s++;return n}});s(t,{countBy:(e,t)=>{const n={};let i;return p(e,(e)=>{i=t(e),n[i]||(n[i]=0),n[i]++}),n},countKey:(e,t)=>{let n=0;return p(e,(e)=>{e[t]&&n++}),n},countNoKey:(e,t)=>{let n=0;return p(e,(e)=>{e[t]||n++}),n}});s(t,{initial:(e)=>{return e.slice(0,e.length-1)}});const Q=Math.min;s(t,{smallest:(e)=>{return Q(...e)}});const G=(e,t,n)=>{const i=[];for(let r=e;r<t;)i.push(r),r+=n;return i},X=(e,t,n)=>{const i=0>n?-1*n:n,r=[];for(let s=e;s<t;)r.push(s),s-=i;return r};s(t,{range:(e,t,n=1)=>{return e<t?G(e,t,n):X(e,t,n)},rangeRight:(e,t,n=1)=>{return X(t,e,n)}});s(t,{intersect:(e,...t)=>{let n;return k(e,(e)=>{if(n=!0,h(t,(t)=>{return t.includes(e)||(n=!1),n}),n)return e})}});s(t,{sortAlpha:(e,t)=>{let n,i;return e.sort((e,r)=>{return(n=e[t],i=r[t],n<i)?-1:n>i?1:0}),e}});s(t,{difference:(e,t)=>{return k(e,(e)=>{if(!t.includes(e))return e})}});s(t,{invoke:(e,t,n)=>{return f(e,(e)=>{return e[t](...n)})}});const Y=(e,t,n=e.length)=>{return e.splice(t,n)};s(t,{drop:Y,dropRight:(e,t)=>{return Y(e,0,e.length-t)}});const ee=(e,t)=>{return t.length===e.length&&h(e,(e,n)=>{return t[n]!==e})};s(t,{isMatchArray:ee});s(t,{sortedIndex:(e,t)=>{let n=0;return p(e,(e,i)=>{t>e&&(n=i)}),0<n&&++n,n}});const te=Math.max;s(t,{largest:(e)=>{return te(...e)}});s(t,{sumOf:(e,t=0)=>{let n,i=t;return p(e,(e)=>{n=e,n&&(i+=+n)}),i}});const ne=async(e,t)=>{const n=e.length;for(let i=0;i<n;i++)await t(e[i],i,n)};s(t,{eachAsync:ne});s(t,{last:(e,t)=>{const n=e.length;return t?e.slice(n-t,n):e[n-1]}});s(t,{take:(e,t)=>{return e.slice(0,t)},takeRight:(e,t)=>{return e.slice(e.length-t,t)}});s(t,{mapAsync:async(e,t)=>{const n=[];return await ne(e,async(e,i,r)=>{n[i]=await t(e,i,r)}),n}});const ie=(e,t,n)=>{return n.indexOf(e)===t},re=(e,t,n)=>{return e!==n[t-1]},se=(e,t)=>{return t?e.filter(re):e.filter(ie)};s(t,{unique:se});s(t,{union:(...e)=>{const t=[];return p(e,(e)=>{p(se(e),(e)=>{t.includes(e)&&t.push(e)})}),t}});s(t,{compactMapAsync:async(e,t)=>{const n=[];let i;return await ne(e,async(e,r,s)=>{i=await t(e,r,s),S(i)&&n.push(i)}),n}});const ae=(e,t)=>{return e-t};s(t,{numSort:(e)=>{return e.sort(ae)}});s(t,{findDifference:(e,t)=>{const n={},i=e.length;let r,s,a;for(let d=0;d<i;d++)if(r=e[d],s=t-r,a=e.indexOf(s),-1!==a&&a!==d){n.start=r,n.end=s,n.startIndex=d,n.endIndex=a;break}return n}});s(t,{arrayToObject:(e,t)=>{return H((e,n,i)=>{i[t[n]]=e},e)}});s(t,{without:(e,...t)=>{return e.filter((e)=>{return!t.includes(e)})}});const de=(e,t,n,i,r)=>{if(e[r]===i)return!0};s(t,{findItem:(e,t,n='id')=>{const i=e.find((i,r)=>{return de(i,r,e,t,n)});return-1!==i&&i},findIndex:(e,t,n='id')=>{const i=e.findIndex((i,r)=>{return de(i,r,e,t,n)});return-1!==i&&i}});s(t,{partition:(e,t)=>{const n=[];return[k(e,(e)=>{return t(e)?e:void n.push(e)}),n]}});s(t,{xor:(e)=>{const t=[];return p(e,(e)=>{p(se(e),(e)=>{t.includes(e)?t.splice(t.indexOf(e),1):t.push(e)})}),t}});s(t,{findSum:(e,t)=>{const n={},i=e.length;let r,s,a;for(let d=0;d<i;d++)if(r=e[d],s=t-r,a=e.indexOf(s),-1!==a&&a!==d){n.start=r,n.end=s,n.startIndex=d,n.endIndex=a;break}return n}});s(t,{pluck:(e,t)=>{let n;return n=E(t)?(e)=>{return H((t,n,i)=>{i[t]=e[t]},t)}:(e)=>{const n=e[t];return n},f(e,n)}});s(t,{zip:(...e)=>{return e[0].map((t,n)=>{return e.map((e)=>{return e[n]})})},unZip:(e)=>{return e[0].map((t,n)=>{return e.map((e)=>{return e[n]})})}});s(t,{first:(e,t)=>{return t?e.slice(0,t):e[0]}});const le=(e,t)=>{return t-e};s(t,{rNumSort:(e)=>{return e.sort(le)}});const oe=(e)=>{return e?oe[e]:i(oe)};let ce=navigator.userAgent.toLowerCase();ce=ce.replace(/_/g,'.'),ce=ce.replace(/[#_,;()]/g,'');const pe=ce.split(/ |\//);p(pe,(e)=>{oe[e]=!0}),s(t,{isAgent:oe});const ue=(e,t,n,i)=>{return e.addEventListener(t,n,i),e};s(t,{eventAdd:ue,eventRemove:(e,t,n,i)=>{return e.removeEventListener(t,n,i),e}});s(t,{isEnter:(e)=>{return 13===e.keyCode}});s(t,{appState:{}});const he=document.createDocumentFragment.bind(document);s(t,{createFragment:he});const ye=(e,t)=>{return e.appendChild(t),e},me=(e,t)=>{const n=i(e);p(i,(i,r,s,a)=>{t(e[i],i,e,a,n)})},fe=(e,t,n={})=>{let i;return me(e,(e,r,s,a,d)=>{!0===t(e,r,n,s,a,d)&&(n[r]=i)}),n},ge=(e,t,n={})=>{return me(e,(e,i,r,s,a)=>{n[i]=t(e,i,n,r,s,a)}),n},ke=(e,t,n={})=>{let i;return me(e,(e,r,s,a,d)=>{i=t(e,r,n,a,d),S(i)&&(n[r]=i)}),n};s(t,{compactMapObject:ke,eachObject:me,filterObject:fe,mapObject:ge,whileObject:(e,t,n={})=>{return h(e,(e,i,r,s,a)=>{return t(e,i,n,r,s,a)})}});const be=(e,t,n)=>{let i;if(v(t)){if(S(n))e.setAttribute(t,n);else return e.getAttribute(t);}else if(j(t)&&(i=ge(t,(t,n)=>{return be(e,n,t)}),n))return i;return e};s(t,{nodeAttribute:be});const xe=(e)=>{return new Promise(e)};s(t,{promise:xe});const Ae=(e,t=1)=>{return e.substr(t)};s(t,{chunkString:(e,t)=>{return e.match(new RegExp(`(.|[\r\n]){1, ${t}}`,'g'))},initialString:(e,t=1)=>{return e.slice(0,-1*t)},insertInRange:(e,t,n)=>{return e.slice(0,t)+n+e.slice(t,e.length)},restString:Ae,rightString:(e,t=1)=>{return e[e.length-t]}});const Se=/^.[\w_-]+$/,Oe=/^[A-Za-z]+$/,we=/\s/,Ce=document.getElementsByClassName.bind(document),Ee=document.getElementsByTagName.bind(document),ve=document.getElementById.bind(document),Ne=document.querySelector.bind(document),je=document.querySelectorAll.bind(document);s(t,{getByClass:Ce,getById:ve,getByTag:Ee,querySelector:Ne,querySelectorAll:je,selector:(e)=>{const t=e[0];switch(t){case'#':if(!we.test(e))return ve(Ae(e));break;case'.':if(Se.test(e))return Ce(Ae(e));break;default:if(Oe.test(e))return Ee(e);}return je(e)}});const Fe=document.createElement.bind(document),Ie=(e)=>{return xe((t,n)=>{ue(e,'load',t,!0),ue(e,'error',n,!0),ye(Ne('head'),e)})},Me=(e)=>{const t=be(Fe('script'),{async:'',src:`${e}.js`});return Ie(t)};s(t,{importcss:(e)=>{const t=be(Fe('link'),{href:`${e}.css`,rel:'stylesheet',type:'text/css'});return Ie(t)},importjs:Me});const Re=(e)=>{const t=document.readyState;return'interactive'===t||'completed'===t||'complete'===t?!e||e():(e&&ue(document,'DOMContentLoaded',e),!1)};s(t,{isDocumentReady:Re}),Re(()=>{Me('index')});const Le=()=>{s(t.appState,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})},De=()=>{requestAnimationFrame(Le)};Re(De),ue(window,'load',De,!0),ue(window,'resize',De,!0),s(t,{saveDimensions:Le,updateDimensions:De});const Be=(e,...t)=>{if(F(e))return e(...t)};s(t,{ifInvoke:Be});let Ue;const Pe=[],qe=()=>{p(Pe,Be),z(Pe),Ue=!1};s(t,{batch:(...e)=>{Pe.push(...e),Ue||(Ue=requestAnimationFrame(qe))}});const Te=location.protocol,We='http:'===Te?'ws':'wss',ze=location.hostname,He={hardware:{cores:navigator.hardwareConcurrency},host:{name:ze,protocol:Te,protocolSocket:We}};s(t,{info:He});const Ke=JSON,Ze=Ke.jsonParse,$e=Ke.stringify;s(t,{jsonParse:Ze,stringify:$e});const Je=(e,t)=>{return`color:${e};background:${t};`},Ve={alert:Je('#fff','#f44336'),important:Je('#fff','#E91E63'),notify:Je('#fff','#651FFF'),warning:Je('#000','#FFEA00')};s(t,{addConsoleTheme:(e,t,n)=>{Ve[e]=Je(t,n)},cnsl:(e,t)=>{const n=v(e)?e:$e(e);console.trace(`%c${n}`,`${Ve[t]}font-size:13px;padding:2px 5px;border-radius:2px;`)}}),p(['HTMLCollection','NodeList'],(e)=>{t[`is${e}`]=O(b(e))});const _e=(e,t,n)=>{const i=n?e:[...e];return i.sort((e,n)=>{return n[t]?e[t]?e[t]<n[t]?1:e[t]>n[t]?-1:0:1:-1})};s(t,{getNewest:(e,t)=>{return _e(e,t)[0]},sortNewest:_e});const Qe=(e,t,n)=>{const i=n?e:[...e];return i.sort((e,n)=>{return n[t]?e[t]?e[t]<n[t]?1:e[t]>n[t]?-1:0:1:-1})};s(t,{getOldest:(e,t)=>{return Qe(e,t)[0]},sortOldest:Qe});s(t,{ary:(e,t)=>{return(...n)=>{return e(...n.splice(0,t))}}});s(t,{curry:(e)=>{const t=[],n=(...e)=>{return p(e,(e)=>{t.push(e)}),n};return n.result=()=>{const n=e(...t);return z(t),n},n},curryRight:(e)=>{const t=[],n=(...e)=>{return p(e,(e)=>{t.unshift(e)}),n};return n.result=()=>{const n=e(...t);return z(t),n},n}});const Ge=(e,t)=>{let n=e;return(...e)=>{if(n--,0>n)return t(...e)}},Xe=(e,t)=>{let n=e;return(...e)=>{if(n--,0<n)return t(...e)}};s(t,{onAfter:(e,t)=>{return Ge(e-1,t)},onBefore:(e,t)=>{return Xe(e+1,t)},once:(e)=>{let t;return(...n)=>{return t||(t=e(...n)),t}}});s(t,{stubObject:()=>{return{}},stubArray:()=>{return[]},stubString:()=>{return''},stubTrue:()=>{return!0},stubFalse:()=>{return!1},noop:()=>{}});const Ye=(e,t)=>{return e.forEach(t)},et=(e,t)=>{return(n,i,r)=>{let s;if(S(n))return s=E(n)?e:j(n)||F(n)?t:n.forEach?Ye:t,s(n,i,r)}},tt=et(p,me),nt=et(y,fe),it=et(f,ge),rt=et(k,ke);s(t,{compactMap:rt,each:tt,filter:nt,map:it});s(t,{bindAll:(e,t)=>{return it(e,(e)=>{return F(e)?e.bind(t):e})}});s(t,{negate:(e)=>{return(...t)=>{return!e(...t)}}});s(t,{over:(e)=>{return(...t)=>{return e.map((e)=>{return e(...t)})}},overEvery:(e)=>{return(...t)=>{let n;return e.find(e,(e)=>{return n=!!e(...t),n}),n}}});const st=(e,t)=>{return setTimeout(e,t)};s(t,{debounce:(e,t)=>{let n=!1;const i=(...i)=>{!1!=n&&clearTimeout(n),n=st(()=>{e(...i),n=!1},t)};return i.clear=()=>{n&&(clearTimeout(n),n=!1)},i},interval:(e,t)=>{return setInterval(e,t)},throttle:(e,t)=>{let n,i=!1;const r=(...r)=>{return i?void(n=!0):void(e(...r),i=st(()=>{n&&e(...r),i=!1},t))};return r.clear=()=>{clearTimeout(i),i=!1},r},timer:st});const at=(e,t)=>{return tt(t,(t,n)=>{e.methods[n]=(...n)=>{return n.unshift(e.value),t(...n),e.methods}}),e};s(t,{chain:(e)=>{const t=(e)=>{return t.value=e,t.methods};return s(t,{methods:{},link(e){return at(t,e)},done(){const e=t.value;return t.value=null,e}}),t.link(e),t}});s(t,{inAsync:async(e,t)=>{await ne(e,async(e)=>{await e(t)})},inSync:(e,t)=>{return tt(e,(e)=>{e(t)})}});s(t,{nthArg:(e)=>{let t=e;return(...e)=>{return 0>t&&(t=e.length- -1*t),e[t]}}});s(t,{reArg:(e,t)=>{return(...n)=>{return e(...t.map((e)=>{return n[e]}))}}});s(t,{wrap:(...e)=>{const t=[],n=(...e)=>{return t.map((t)=>{return t(...e)})};return s(n,{list:t,add(...e){t.push(...e)}}),n.add(e),n},wrapBefore:(...e)=>{const t=[],n=(...e)=>{return t.map((t)=>{return t(...e)})};return s(n,{list:t,add(...e){t.unshift(...e.reverse())}}),n.add(e),n}});s(t,{isNumberEqual:(e,t)=>{return e===t},isNumberInRange:(e,t=0,n=t)=>{return e>t&&e<n},isZero:(e)=>{return 0===e}});s(t,{hasAnyKeys:(e,t)=>{const n=i(e),r=t.find((e)=>{return n.include(e)});return r},hasKeys:(e,t)=>{let n=!1;const r=i(e);return h(t,(e)=>{return n=r.include(e),n}),n}});s(t,{pick:(e,t,n)=>{return H((e,n,i)=>{i[e]=t[e]},e,n)}});s(t,{compactKeys:(e)=>{const t=[];return me(e,(e,n)=>{S(e)&&t.push(n)}),t}});s(t,{isMatchObject:(e,t)=>{const n=i(e);return!!ee(n,i(t))&&h(n,(n)=>{return e[n]===t[n]})}});s(t,{unZipObject:(e)=>{const t=[],n=[];return me(e,(e,i)=>{t.push(i),n.push(e)}),[t,n]},zipObject:(e,t)=>{return H((e,n,i)=>{i[e]=t[n]},e)}});s(t,{invert:(e,t={})=>{return me(e,(e,n)=>{t[e]=n}),t}});s(t,{omit:(e,t)=>{return ke(e,(e,n)=>{if(!t.includes(n))return e})}});const dt=/[-_]/g,lt=/ (.)/g;s(t,{camelCase:(e)=>{return e.toLowerCase().replace(lt,(e)=>{return e.toUpperCase()})},kebabCase:(e)=>{return e.replace(dt,' ').trim().toLowerCase().replace(lt,'-$1')},snakeCase:(e)=>{return e.replace(dt,' ').trim().toLowerCase().replace(lt,'_$1')},upperCase:(e)=>{return e.replace(dt,' ').trim().toUpperCase()}});s(t,{replaceList:(e,t,n)=>{return e.replace(new RegExp(`\\b${t.join('|')}\\b`,'gi'),n)}});const ot=/%(?![\da-f]{2})/gi,ct=/&/g,pt=/</g,ut=/>/g,ht=/"/g,yt=(e)=>{return decodeURIComponent(e.replace(ot,()=>{return'%25'}))},mt=(e)=>{return e.replace(ct,'&amp;').replace(pt,'&lt;').replace(ut,'&gt;').replace(ht,'&quot;')};s(t,{htmlEntities:mt,rawURLDecode:yt,sanitize:(e)=>{return mt(yt(e))}});const ft=/\S+/g,gt=/\w+/g;s(t,{tokenize:(e)=>{return e.match(ft)||[]},words:(e)=>{return e.match(gt)||[]}});const kt=(e,t,n)=>{const i=e.split(''),r=i.length;let s,a=n-t;for(;a<r&&0<=a&&(s=i[a],' '!==s);a--);return e.slice(0,a).trim()},bt=(e,t,n)=>{const i=e.split(''),r=i.length;let s,a=t;for(;a<r&&0<a&&(s=i[a],' '!==s);a++);return e.substr(a,n).trim()};s(t,{truncate:(e,t)=>{const n=e.length;return n>t?kt(e,t,n):e},truncateRight:(e,t)=>{const n=e.length;return n>t?bt(e,t,n):e}});const xt=/ (.)/g,At=(e)=>{return e[0].toUpperCase()};s(t,{upperFirst:(e)=>{return At(e)+Ae(e)},upperFirstAll:(e)=>{return e.replace(xt,(e)=>{return e.toUpperCase()})},upperFirstOnly:(e)=>{return At(e)+Ae(e).toLowerCase()},upperFirstOnlyAll:(e)=>{return e.toLowerCase().replace(xt,(e)=>{return e.toUpperCase()})}});const St=(e,t,n=!0)=>{return tt(t,(t,i)=>{j(t)&&j(e[i])?St(e[i],t,n):n&&E(t)&&E(e[i])?e[i].push(...t):e[i]=t}),e};s(t,{assignDeep:St});const Ot=Function.prototype;s(t,{cacheNativeMethod:function(e){return Ot.call.bind(e)}});s(t,{ifNotEqual:(e,t,n)=>{return t&&!S(e[t])&&(e[t]=n),e}});const wt=(e,t)=>{if(e===t)return!0;if(e.toString()===t.toString())if(j(e)){const n=i(e);if(ee(n,i(t)))return h(n,(n)=>{return wt(e[n],t[n])})}else if(E(e)&&e.length===t.length)return h(e,(e,n)=>{return wt(e,t[n])});return!1};s(t,{isEqual:wt});s(t,{propertyMatch:(e,t,n=i(e))=>{let r=!1;return h(n,(n)=>{return r=wt(e[n],t[n]),r}),r}});const Ct=/\.|\[/,Et=/]/g,vt=(e)=>{return e.replace(Et,'').split(Ct)};s(t,{toPath:vt});let Nt=0;const jt=[],Ft={},It=()=>{let e=jt.shift(jt);return S(e)||(e=Nt,Ft[e]=!0,Nt++),e};It.free=(e)=>{Ft[e]=null,jt.push(e)},s(t,{uid:It});const Mt=(e,n=t)=>{let i=n;return h(vt(e),(e)=>{return i=i[e],S(i)}),i};s(t,{get:Mt});const Rt=(e,t)=>{return S(t)&&(Rt[e]=t),Mt(e,Rt)};t.superMethod(Rt),s(t,{model:Rt});return s(t,{toggle:(e,t,n)=>{return wt(t,e)?n:t}}),t});
//# sourceMappingURL=index.js.map
