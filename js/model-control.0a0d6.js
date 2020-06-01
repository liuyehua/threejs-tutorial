!function(e){function n(n){for(var t,o,i=n[0],c=n[1],d=n[2],a=0,s=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(A,o)&&A[o]&&s.push(A[o][0]),A[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(X&&X(n);s.length;)s.shift()();return M.push.apply(M,d||[]),r()}function r(){for(var e,n=0;n<M.length;n++){for(var r=M[n],t=!0,o=1;o<r.length;o++){var i=r[o];0!==A[i]&&(t=!1)}t&&(M.splice(n--,1),e=S(S.s=r[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!_[e]||!g[e])return;for(var r in g[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0==--m&&0===b&&P()}(e,n),t&&t(e,n)};var o,i=!0,c="0a0d6afc58c609269b1f",d={},a=[],s=[];function l(n){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==n,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(v={})[n]=e[n],f("ready");break;case"ready":x(n);break;case"prepare":case"check":case"dispose":case"apply":(w=w||[]).push(n)}},check:D,apply:H,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:d[n]};return o=void 0,r}var p=[],u="idle";function f(e){u=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var h,v,y,w,m=0,b=0,O={},g={},_={};function E(e){return+e+""===e?+e:e}function D(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return i=e,f("check"),(n=1e4,n=n||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=S.p+""+c+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}}))).then((function(e){if(!e)return f(I()?"ready":"idle"),null;g={},O={},_=e.c,y=e.h,f("prepare");var n=new Promise((function(e,n){h={resolve:e,reject:n}}));for(var r in v={},A)j(r);return"prepare"===u&&0===b&&0===m&&P(),n}));var n}function j(e){_[e]?(g[e]=!0,m++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=S.p+""+e+"."+c+".hot-update.js",document.head.appendChild(n)}(e)):O[e]=!0}function P(){f("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then((function(){return H(i)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(E(r));e.resolve(n)}}function H(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function n(r){var t,i,s,l,p;function u(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,c=o.chain;if((l=k[i])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<l.parents.length;d++){var a=l.parents[d],s=k[a];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([a]),moduleId:i,parentId:a};-1===n.indexOf(a)&&(s.hot._acceptedDependencies[i]?(r[a]||(r[a]=[]),h(r[a],[i])):(delete r[a],n.push(a),t.push({chain:c.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function h(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}I();var m={},b=[],O={},g=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var D in v)if(Object.prototype.hasOwnProperty.call(v,D)){var j;p=E(D),j=v[D]?u(p):{type:"disposed",moduleId:D};var P=!1,H=!1,x=!1,M="";switch(j.chain&&(M="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(P=new Error("Aborted because of self decline: "+j.moduleId+M));break;case"declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+M));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(j),r.ignoreUnaccepted||(P=new Error("Aborted because "+p+" is not accepted"+M));break;case"accepted":r.onAccepted&&r.onAccepted(j),H=!0;break;case"disposed":r.onDisposed&&r.onDisposed(j),x=!0;break;default:throw new Error("Unexception type "+j.type)}if(P)return f("abort"),Promise.reject(P);if(H)for(p in O[p]=v[p],h(b,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,p)&&(m[p]||(m[p]=[]),h(m[p],j.outdatedDependencies[p]));x&&(h(b,[j.moduleId]),O[p]=g)}var U,q=[];for(i=0;i<b.length;i++)p=b[i],k[p]&&k[p].hot._selfAccepted&&O[p]!==g&&!k[p].hot._selfInvalidated&&q.push({module:p,parents:k[p].parents.slice(),errorHandler:k[p].hot._selfAccepted});f("dispose"),Object.keys(_).forEach((function(e){!1===_[e]&&function(e){delete A[e]}(e)}));var L,X,F=b.slice();for(;F.length>0;)if(p=F.pop(),l=k[p]){var R={},T=l.hot._disposeHandlers;for(s=0;s<T.length;s++)(t=T[s])(R);for(d[p]=R,l.hot.active=!1,delete k[p],delete m[p],s=0;s<l.children.length;s++){var J=k[l.children[s]];J&&((U=J.parents.indexOf(p))>=0&&J.parents.splice(U,1))}}for(p in m)if(Object.prototype.hasOwnProperty.call(m,p)&&(l=k[p]))for(X=m[p],s=0;s<X.length;s++)L=X[s],(U=l.children.indexOf(L))>=0&&l.children.splice(U,1);f("apply"),void 0!==y&&(c=y,y=void 0);for(p in v=void 0,O)Object.prototype.hasOwnProperty.call(O,p)&&(e[p]=O[p]);var C=null;for(p in m)if(Object.prototype.hasOwnProperty.call(m,p)&&(l=k[p])){X=m[p];var N=[];for(i=0;i<X.length;i++)if(L=X[i],t=l.hot._acceptedDependencies[L]){if(-1!==N.indexOf(t))continue;N.push(t)}for(i=0;i<N.length;i++){t=N[i];try{t(X)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:p,dependencyId:X[i],error:e}),r.ignoreErrored||C||(C=e)}}}for(i=0;i<q.length;i++){var W=q[i];p=W.module,a=W.parents,o=p;try{S(p)}catch(e){if("function"==typeof W.errorHandler)try{W.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:p,error:n,originalError:e}),r.ignoreErrored||C||(C=n),C||(C=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:p,error:e}),r.ignoreErrored||C||(C=e)}}if(C)return f("fail"),Promise.reject(C);if(w)return n(r).then((function(e){return b.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}));return f("idle"),new Promise((function(e){e(b)}))}(n=n||{})}function I(){if(w)return v||(v={}),w.forEach(x),w=void 0,!0}function x(n){Object.prototype.hasOwnProperty.call(v,n)||(v[n]=e[n])}var k={},A={10:0},M=[];function S(n){if(k[n])return k[n].exports;var r=k[n]={i:n,l:!1,exports:{},hot:l(n),parents:(s=a,a=[],s),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=k[e];if(!n)return S;var r=function(r){return n.hot.active?(k[r]?-1===k[r].parents.indexOf(e)&&k[r].parents.push(e):(a=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),S(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(n){S[e]=n}}};for(var i in S)Object.prototype.hasOwnProperty.call(S,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,t(i));return r.e=function(e){return"ready"===u&&f("prepare"),b++,S.e(e).then(n,(function(e){throw n(),e}));function n(){b--,"prepare"===u&&(O[e]||j(e),0===b&&0===m&&P())}},r.t=function(e,n){return 1&n&&(e=r(e)),S.t(e,-2&n)},r}(n)),r.l=!0,r.exports}S.m=e,S.c=k,S.d=function(e,n,r){S.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,n){if(1&n&&(e=S(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(S.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)S.d(r,t,function(n){return e[n]}.bind(null,t));return r},S.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(n,"a",n),n},S.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},S.p="",S.h=function(){return c};var U=window.webpackJsonp=window.webpackJsonp||[],q=U.push.bind(U);U.push=n,U=U.slice();for(var L=0;L<U.length;L++)n(U[L]);var X=q;M.push([13,0]),r()}({13:function(e,n,r){"use strict";r.r(n);var t=r(0);r(2);const o=new t.Ab,i=new t.Ub({antialias:!0,alpha:!0,canvas:document.getElementById("renderCanvas")});i.setSize(window.innerWidth,window.innerHeight);var c=new t.b("#DFDFDF",.4);o.add(c);var d=new t.n(16777215,1);d.position.set(50,50,-50),o.add(d);const a=new t.g,s=new t.X({color:65280}),l=new t.U(a,s);o.add(l);const p=new t.kb(75,window.innerWidth/window.innerHeight,.1,1e3);p.position.set(10,30,50),p.lookAt(l.position);const u=function(){requestAnimationFrame(u),i.render(o,p)};u(),i.domElement.addEventListener("mousewheel",e=>{var n=1+.001*e.wheelDelta;l.scale.multiplyScalar(n)});new t.yb,new t.Qb;let f=null;i.domElement.addEventListener("mousedown",e=>{f=e.clientX}),i.domElement.addEventListener("mousemove",e=>{if(f){let n=e.clientX-f;l.rotateY(.01*n),f=e.clientX}}),i.domElement.addEventListener("mouseup",e=>{f=null})},2:function(e,n,r){}});