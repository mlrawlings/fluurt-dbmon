!function(){"use strict";class e{constructor(){this.___tracked=new Set}___cleanup(){for(const e of this.___tracked)e.___cleanup();this.___tracked.clear()}}function t(e,t,_){const n=e||_.parentNode;r(n,t.___firstRef.___firstChild,t.___lastRef.___lastChild,_,n.insertBefore),t.___parentFragment.___tracked.add(t)}function _(e){const t=n(e).parentNode;r(t,e.___firstRef.___firstChild,e.___lastRef.___lastChild,null,t.removeChild),e.___cleanup(),e.___parentFragment&&e.___parentFragment.___tracked.delete(e)}function n(e){return e.___firstRef.___firstChild}function r(e,t,_,n,r){for(;t;){const o=t.nextSibling;if(r.call(e,t,n),t===_)break;t=o}}const o=document,i=o.createTreeWalker(o.body,-1,null,!1);let s,c,l;function a(e){if(!s)throw new Error("Debug Error");for(;;){let t=s.charCodeAt(c++);if(void 0===t)throw new Error("Debug Error");if(t>=93)for(;93<=t--;)i.nextNode();else if(t>=58)for(;58<=t--;)for(;!i.nextSibling();)i.parentNode();else{if(!(t>=39)){if(33===t)return i.currentNode;{if(!e)throw new Error("Debug Error");const _=i.currentNode;let n,r;if(37===t)return _.appendChild(e);if(r=_.parentNode,35===t)return r.insertBefore(e,_);if(n=v(e)?e.lastChild:e,36===t)r.insertBefore(e,_.nextSibling);else{if(38!==t)throw new Error("Debug Error");r.replaceChild(e,_)}return i.currentNode=n,e}}for(;39<=t--;)i.parentNode()}}}function u(){return a(o.createTextNode(""))}function f(e,t,..._){if(t.___hydrate){const n=s,r=c,o=i.currentNode;i.currentNode=e,s=t.___walks,c=0,t.___hydrate(..._),s=n,c=r,i.currentNode=o}}const d=document,h=d.createElement("template");function p(e,t,_,n,r=n||t||{}){const o=r;return o.___template=e,o.___walks=t,o.___input=_,o.___hydrate=n,o.___clone=m,o}function m(){let e=this.___sourceNode;if(!e){if(void 0===this.___template)throw new Error("Debug Error");const t=this.___walks,_=!!t&&(35===t.charCodeAt(0)||38===t.charCodeAt(0)||36===t.charCodeAt(t.length-2));this.___sourceNode=e=function(e,t){let _;h.innerHTML=e;const n=h.content;t||(_=n.firstChild)!==n.lastChild?(_=d.createDocumentFragment(),_.appendChild(n)):_||(_=d.createTextNode(""));return _}(this.___template,_)}return e.cloneNode(!0)}function g(e,t=l,..._){const n=C(e,t);return w(n,e,..._),n}function C(t,_=l){const n=new e,r=t.___clone(),o=v(r);return n.___firstRef=n.___lastRef=n,n.___firstChild=o?r.firstChild:r,n.___lastChild=o?r.lastChild:r,n.___parentFragment=_,n.___cachedFragment=l,n.___dom=r,l=n}function w(e,t,..._){f(e.___firstChild,t,..._),l=e.___cachedFragment}function v(e){return 11===e.nodeType}function b(e,...t){const _=e.___clone();f(_,e,...t),a(_)}function y(e,t){const _=P(S,t,1),n=i.currentNode;if(1!==n.nodeType)throw new Error("Debug Error");O(t=>function(e,t,_){_?e.setAttribute(t,_):e.removeAttribute(t)}(n,e,t),_,1)}function N(e,t,_){!function(e,t,_){const n=P(B,_,1,3,!0);n.___execObject=e,n.___execProperty=t}(_||i.currentNode,e,t)}function x(e){N("textContent",P(E,e,1))}function S(e){return null==e||!1===e?void 0:e+""}function E(e){return null==e?"":e+""}let k,F=0,R=0;const A=()=>{};function D(e){return{___bid:0,___sid:F++,___type:e,___value:void 0,___upstream:void 0,___upstreamSingle:1,___downstream:void 0,___downstreamSingle:1,___execFn:void 0,___execObject:void 0,___execProperty:void 0,___cleanup:void 0,___root:l}}function T(e){const t=D(0);return t.___value=e,t}function P(e,t,_,n=1,r=!1){let o=r?D(n):void 0,i=!1;if(_)G(t)&&(o=o||D(n),i=t.___root!==l,j(t,o));else{const e=t;for(let t=e.length-1;t>=0;t--){const _=e[t];G(_)&&(o=o||D(n),i=i||_.___root!==l,j(_,o))}}return o?(o.___execFn=e,o.___upstream=t,o.___upstreamSingle=_,i&&(o.___cleanup=M,l.___tracked.add(o)),3===n?k.___effects.push(o):k.___computations.push(o),o):e(t)}function O(e,t,_){return P(e,t,_,3,!0)}function j(e,t){V(e)?void 0===e.___downstream?e.___downstream=t:(e.___downstream=[e.___downstream,t],e.___downstreamSingle=0):e.___downstream.push(t)}function M(){if(function(e){return 1===e.___upstreamSingle}(this))G(this.___upstream)&&I(this.___upstream,this);else{const e=this.___upstream;for(let t=e.length-1;t>=0;t--){const _=e[t];G(_)&&I(_,this)}}}function I(e,t){if(V(e))e.___downstream=void 0;else{const _=e.___downstream,n=_.pop();n!==t&&(_[_.indexOf(t)]=n)}}function q(e){return e[this.___execProperty]}function B(e){this.___execObject[this.___execProperty]=e}function V(e){return 1===e.___downstreamSingle}function Q(e,t){if(e.___value!==t){if(k){const _=e.___sid;k.___values[_]=t,k.___signals[_]=e}else e.___value=t;if(1===e.___downstreamSingle)e.___downstream&&W(e.___downstream);else{const t=e.___downstream;for(let e=t.length-1;e>=0;e--)W(t[e])}}}function W(e){const t=3===e.___type;!function(e,t,_){t=function(e,t,_){let n=e.length;for(;t<n;){const r=t+n>>>1;e[r].___sid<_.___sid?t=r+1:n=r}return t}(e,t,_),e[t]!==_&&e.splice(t,0,_)}(t?k.___effects:k.___computations,t?0:k.___computationIndex,e)}function H(e){z()||Q(e,L(e))}function L(e){const t=e.___upstream;return e.___execFn(e.___upstreamSingle?J(t):t.map(J))}let z=A;function G(e){return e&&e.___type>=0}function J(e){if(G(e)){let t;e=k&&k.___values.hasOwnProperty(t=e.___sid)?k.___values[t]:e.___value}return e}function K(e,t){return G(e)&&Q(e,t),t}function U(){return k={___bid:++R,___signals:{},___computations:[],___effects:[],___values:{},___pending:{},___computationIndex:0}}function X(e){if(e===k){for(;k.___computationIndex<k.___computations.length;)H(k.___computations[k.___computationIndex++]);if(!Y()){for(const e of k.___effects)L(e);for(const e in k.___signals){const t=k.___signals[e];t.___bid<=k.___bid&&(t.___bid=k.___bid,t.___value=k.___values[e])}}k=void 0}}let Y=A;const Z=2147483647;function $(e,r,o){if(G(e)){const i=u(),s=l;let c=new Map,a=[];l.___firstChild===i&&ee(l.___firstRef,"___firstChild",()=>c.get(a[0]).___firstRef.___firstChild),l.___lastChild===i&&ee(l.___lastRef,"___lastChild",()=>c.get(a[a.length-1]).___lastRef.___lastChild);O(e=>{const r=Array.from(e.keys());!function(e,r,o,i,s,c){let l,a,u,f,d,h,p=0,m=0,g=r.length-1,C=i.length-1,w=r[p],v=i[m],b=r[g],y=i[C];e:{for(;w===v;){if(++p,++m,p>g||m>C)break e;w=r[p],v=i[m]}for(;b===y;){if(--g,--C,p>g||m>C)break e;b=r[g],y=i[C]}}if(p>g){if(m<=C){u=C+1,f=u<i.length?n(s.get(i[u])):c;do{t(e,s.get(i[m++]),f)}while(m<=C)}}else if(m>C)do{_(o.get(r[p++]))}while(p<=g);else{const w=g-p+1,v=C-m+1,b=r,y=new Array(v);for(l=0;l<v;++l)y[l]=-1;let N=0,x=0;const S=new Map;for(a=m;a<=C;++a)S.set(i[a],a);for(l=p;l<=g&&x<v;++l)d=r[l],a=S.get(d),void 0!==a&&(N=N>a?Z:a,++x,h=i[a],y[a-m]=l,b[l]=null);if(w===r.length&&0===x){for(;m<v;++m)t(e,s.get(i[m]),null);for(;p<w;++p)_(o.get(r[p]))}else{for(l=w-x;l>0;)d=b[p++],null!==d&&(_(o.get(d)),l--);if(N===Z){const _=function(e){const t=e.slice(),_=[];let n,r;_.push(0);for(let o=0,i=e.length;o<i;++o){if(-1===e[o])continue;const i=_[_.length-1];if(e[i]<e[o])t[o]=i,_.push(o);else{for(n=0,r=_.length-1;n<r;){const t=(n+r)/2|0;e[_[t]]<e[o]?n=t+1:r=t}e[o]<e[_[n]]&&(n>0&&(t[o]=_[n-1]),_[n]=o)}}for(n=_.length,r=_[n-1];n-- >0;)_[n]=r,r=t[r];return _}(y);for(a=_.length-1,u=i.length,l=v-1;l>=0;--l)-1===y[l]||a<0||l!==_[a]?(N=l+m,h=i[N++],f=N<u?n(s.get(i[N])):c,t(e,s.get(h),f)):--a}else if(x!==v)for(u=i.length,l=v-1;l>=0;--l)-1===y[l]&&(N=l+m,h=i[N++],f=N<u?n(s.get(i[N])):c,t(e,s.get(h),f))}}}(i.parentNode,a,c,r,e,i),a=r,c=e},P(t=>{let _=0;const n=new Map;for(const i of t){const t=o?o(i,_):""+_,l=c.get(t);if(l)K(l.___itemSignal,i),K(l.___indexSignal,_),n.set(t,l);else{const o=T(i),c=T(_),l=g(r,s,o,c,e);l.___itemSignal=o,l.___indexSignal=c,n.set(t,l)}_++}return n},e,1),1)}else{let t=0;for(const _ of e)b(r,_,t++,e)}}function ee(e,t,_){Object.defineProperty(e,t,{get:_,set(_){Object.defineProperty(e,t,{value:_,writable:!0,configurable:!0})},configurable:!0})}function te(e){return e.replace(/\n\s*/g,"")}const _e=String.fromCharCode(33),ne=String.fromCharCode(35),re=String.fromCharCode(36),oe=String.fromCharCode(37);function ie(e){return le(e,93,126)}function se(e){return le(e,58,91)}function ce(e){return le(e,39,49)}function le(e,t,_){const n=_-t+1;let r="";for(;e>n;)r+=String.fromCharCode(_),e-=n;return r+String.fromCharCode(t+e-1)}const ae=function(e,t,n,r){const o=p(e,t,n,r,e=>{let t,n=null;const r=U(),i=C(o),s=function(e,t){G(e)&&t.forEach(t=>e[t]=function(e,t){if(G(t)){const _=P(q,t,1);return _.___execProperty=e,_}return t[e]}(t,e));return e}(T(e),o.___input);return O(()=>{n?t.replaceWith(i.___dom):n=i.___dom},0,1),w(i,o,s),X(r),n||(n=d.createDocumentFragment(),n.appendChild(t=d.createTextNode(""))),n.rerender=e=>{const t=U();K(s,e),X(t)},n.destroy=()=>_(i),n});return o}(te('\n  <table class="table table-striped latest-data">\n    <tbody></tbody>\n  </table>\n'),ie(1)+oe+ce(2)+se(1),[],()=>{const e=T([]),t=()=>{const _=U();Monitoring.renderRate.ping(),K(e,ENV.generateData().toArray()),X(_),setTimeout(t,ENV.timeout)};O(()=>setTimeout(t,ENV.timeout),null,1),$(e,p(te('\n        <tr>\n          <td class="dbname"></td>\n          <td class="query-count">\n            <span></span>\n          </td>\n        </tr>\n      '),ie(1)+_e+se(1)+ie(1)+_e+ce(1)+re+ce(1)+se(1),void 0,e=>{a(),x(P(e=>e.dbName,e,1)),a(),y("class",P(e=>e.lastSample.countClassName,e,1)),x(P(e=>e.lastSample.nbQueries,e,1)),$(P(e=>e.lastSample.topFiveQueries,e,1),p(te('\n              <td>\n                <div class="popover left">\n                  <div class="popover-content"></div>\n                  <div class="arrow"></div>\n                </div>\n              </td>\n            '),_e+ie(1)+ne+ie(1)+_e+ce(2)+se(1),void 0,e=>{a(),y("class",P(e=>e.elapsedClassName,e,1)),function(e){N("data",P(E,e,1),u())}(P(e=>e.formatElapsed,e,1)),a(),x(P(e=>e.query,e,1))}))}))});document.querySelector("#dbmon").appendChild(ae())}();
