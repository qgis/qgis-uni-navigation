(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=globalThis,be=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),we=new WeakMap;let Oe=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(be&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=we.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&we.set(t,e))}return e}toString(){return this.cssText}};const $e=i=>new Oe(typeof i=="string"?i:i+"",void 0,ye),je=(i,...e)=>{const t=i.length===1?i[0]:e.reduce(((n,r,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1]),i[0]);return new Oe(t,i,ye)},Ve=(i,e)=>{if(be)i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const n=document.createElement("style"),r=Z.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},xe=be?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return $e(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Fe,defineProperty:Ke,getOwnPropertyDescriptor:Ge,getOwnPropertyNames:Je,getOwnPropertySymbols:Xe,getPrototypeOf:Ye}=Object,R=globalThis,Ae=R.trustedTypes,Qe=Ae?Ae.emptyScript:"",ue=R.reactiveElementPolyfillSupport,F=(i,e)=>i,le={toAttribute(i,e){switch(e){case Boolean:i=i?Qe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},_e=(i,e)=>!Fe(i,e),Ee={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:_e};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),R.litPropertyMetadata??(R.litPropertyMetadata=new WeakMap);class D extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Ke(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:s}=Ge(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const l=r==null?void 0:r.call(this);s.call(this,o),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ee}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const e=Ye(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const t=this.properties,n=[...Je(t),...Xe(t)];for(const r of n)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(xe(r))}else e!==void 0&&t.push(xe(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach((t=>t(this)))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ve(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach((t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach((t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t){var s;const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){const o=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:le).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var s;const n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=n.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:le;this._$Em=r,this[r]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,n,r=!1,s){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??_e)(r?s:this[e],t))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$E_)==null||n.forEach((r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)})),this.update(t)):this._$ET()}catch(r){throw e=!1,this._$ET(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach((n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EO(t,this[t])))),this._$ET()}updated(e){}firstUpdated(e){}}D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[F("elementProperties")]=new Map,D[F("finalized")]=new Map,ue==null||ue({ReactiveElement:D}),(R.reactiveElementVersions??(R.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,ce=K.trustedTypes,Se=ce?ce.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ne="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,Ue="?"+P,Ze=`<${Ue}>`,L=document,J=()=>L.createComment(""),X=i=>i===null||typeof i!="object"&&typeof i!="function",He=Array.isArray,et=i=>He(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",pe=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Ce=/>/g,U=RegExp(`>|${pe}(?:([^\\s"'>=/]+)(${pe}*=${pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Me=/'/g,Pe=/"/g,Le=/^(?:script|style|textarea|title)$/i,tt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),b=tt(1),q=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Te=new WeakMap,H=L.createTreeWalker(L,129);function qe(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Se!==void 0?Se.createHTML(e):e}const it=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",o=V;for(let l=0;l<t;l++){const a=i[l];let h,d,c=-1,f=0;for(;f<a.length&&(o.lastIndex=f,d=o.exec(a),d!==null);)f=o.lastIndex,o===V?d[1]==="!--"?o=ke:d[1]!==void 0?o=Ce:d[2]!==void 0?(Le.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=U):d[3]!==void 0&&(o=U):o===U?d[0]===">"?(o=r??V,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?U:d[3]==='"'?Pe:Me):o===Pe||o===Me?o=U:o===ke||o===Ce?o=V:(o=U,r=void 0);const u=o===U&&i[l+1].startsWith("/>")?" ":"";s+=o===V?a+Ze:c>=0?(n.push(h),a.slice(0,c)+Ne+a.slice(c)+P+u):a+P+(c===-2?l:u)}return[qe(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class Y{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const l=e.length-1,a=this.parts,[h,d]=it(e,t);if(this.el=Y.createElement(h,n),H.currentNode=this.el.content,t===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=H.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(Ne)){const f=d[o++],u=r.getAttribute(c).split(P),w=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:w[2],strings:u,ctor:w[1]==="."?rt:w[1]==="?"?st:w[1]==="@"?ot:he}),r.removeAttribute(c)}else c.startsWith(P)&&(a.push({type:6,index:s}),r.removeAttribute(c));if(Le.test(r.tagName)){const c=r.textContent.split(P),f=c.length-1;if(f>0){r.textContent=ce?ce.emptyScript:"";for(let u=0;u<f;u++)r.append(c[u],J()),H.nextNode(),a.push({type:2,index:++s});r.append(c[f],J())}}}else if(r.nodeType===8)if(r.data===Ue)a.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(P,c+1))!==-1;)a.push({type:7,index:s}),c+=P.length-1}s++}}static createElement(e,t){const n=L.createElement("template");return n.innerHTML=e,n}}function B(i,e,t=i,n){var o,l;if(e===q)return e;let r=n!==void 0?(o=t._$Co)==null?void 0:o[n]:t._$Cl;const s=X(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=r:t._$Cl=r),r!==void 0&&(e=B(i,r._$AS(i,e.values),r,n)),e}class nt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??L).importNode(t,!0);H.currentNode=r;let s=H.nextNode(),o=0,l=0,a=n[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new Q(s,s.nextSibling,this,e):a.type===1?h=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(h=new at(s,this,e)),this._$AV.push(h),a=n[++l]}o!==(a==null?void 0:a.index)&&(s=H.nextNode(),o++)}return H.currentNode=L,r}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Q{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),X(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==q&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):et(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&X(this._$AH)?this._$AA.nextSibling.data=e:this.$(L.createTextNode(e)),this._$AH=e}g(e){var s;const{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Y.createElement(qe(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const o=new nt(r,this),l=o.u(this.options);o.p(t),this.$(l),this._$AH=o}}_$AC(e){let t=Te.get(e.strings);return t===void 0&&Te.set(e.strings,t=new Y(e)),t}T(e){He(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new Q(this.k(J()),this.k(J()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class he{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(s===void 0)e=B(this,e,t,0),o=!X(e)||e!==this._$AH&&e!==q,o&&(this._$AH=e);else{const l=e;let a,h;for(e=s[0],a=0;a<s.length-1;a++)h=B(this,l[n+a],t,a),h===q&&(h=this._$AH[a]),o||(o=!X(h)||h!==this._$AH[a]),h===g?e=g:e!==g&&(e+=(h??"")+s[a+1]),this._$AH[a]=h}o&&!r&&this.O(e)}O(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class rt extends he{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===g?void 0:e}}class st extends he{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class ot extends he{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){if((e=B(this,e,t,0)??g)===q)return;const n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class at{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const fe=K.litHtmlPolyfillSupport;fe==null||fe(Y,Q),(K.litHtmlVersions??(K.litHtmlVersions=[])).push("3.1.0");const lt=(i,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let r=n._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new Q(e.insertBefore(J(),s),s,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class G extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=lt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return q}}var Re;G._$litElement$=!0,G.finalized=!0,(Re=globalThis.litElementHydrateSupport)==null||Re.call(globalThis,{LitElement:G});const ge=globalThis.litElementPolyfillSupport;ge==null||ge({LitElement:G});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=i=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(i,e)})):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:_e},dt=(i=ht,e,t)=>{const{kind:n,metadata:r}=t;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(t.name,i),n==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,i)},init(l){return l!==void 0&&this.C(o,void 0,i),l}}}if(n==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,i)}}throw Error("Unsupported decorator location: "+n)};function E(i){return(e,t)=>typeof t=="object"?dt(i,e,t):((n,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(r,s):void 0})(i,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(i){return E({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt={ATTRIBUTE:1},ft=i=>(...e)=>({_$litDirective$:i,values:e});class gt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=ft(class extends gt{constructor(i){var e;if(super(i),i.type!==pt.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter((e=>i[e])).join(" ")+" "}update(i,[e]){var n,r;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter((s=>s!==""))));for(const s in e)e[s]&&!((n=this.st)!=null&&n.has(s))&&this.it.add(s);return this.render(e)}const t=i.element.classList;for(const s of this.it)s in e||(t.remove(s),this.it.delete(s));for(const s in e){const o=!!e[s];o===this.it.has(s)||(r=this.st)!=null&&r.has(s)||(o?(t.add(s),this.it.add(s)):(t.remove(s),this.it.delete(s)))}return q}});function vt(i){for(var e=[],t=0;t<i.length;){var n=i[t];if(n==="*"||n==="+"||n==="?"){e.push({type:"MODIFIER",index:t,value:i[t++]});continue}if(n==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:i[t++]});continue}if(n==="{"){e.push({type:"OPEN",index:t,value:i[t++]});continue}if(n==="}"){e.push({type:"CLOSE",index:t,value:i[t++]});continue}if(n===":"){for(var r="",s=t+1;s<i.length;){var o=i.charCodeAt(s);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){r+=i[s++];continue}break}if(!r)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:r}),t=s;continue}if(n==="("){var l=1,a="",s=t+1;if(i[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<i.length;){if(i[s]==="\\"){a+=i[s++]+i[s++];continue}if(i[s]===")"){if(l--,l===0){s++;break}}else if(i[s]==="("&&(l++,i[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));a+=i[s++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(t));if(!a)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:a}),t=s;continue}e.push({type:"CHAR",index:t,value:i[t++]})}return e.push({type:"END",index:t,value:""}),e}function mt(i,e){e===void 0&&(e={});for(var t=vt(i),n=e.prefixes,r=n===void 0?"./":n,s=e.delimiter,o=s===void 0?"/#?":s,l=[],a=0,h=0,d="",c=function($){if(h<t.length&&t[h].type===$)return t[h++].value},f=function($){var v=c($);if(v!==void 0)return v;var x=t[h],de=x.type,Be=x.index;throw new TypeError("Unexpected ".concat(de," at ").concat(Be,", expected ").concat($))},u=function(){for(var $="",v;v=c("CHAR")||c("ESCAPED_CHAR");)$+=v;return $},w=function($){for(var v=0,x=o;v<x.length;v++){var de=x[v];if($.indexOf(de)>-1)return!0}return!1},I=function($){var v=l[l.length-1],x=$||(v&&typeof v=="string"?v:"");if(v&&!x)throw new TypeError('Must have text between two parameters, missing text after "'.concat(v.name,'"'));return!x||w(x)?"[^".concat(T(o),"]+?"):"(?:(?!".concat(T(x),")[^").concat(T(o),"])+?")};h<t.length;){var O=c("CHAR"),m=c("NAME"),z=c("PATTERN");if(m||z){var _=O||"";r.indexOf(_)===-1&&(d+=_,_=""),d&&(l.push(d),d=""),l.push({name:m||a++,prefix:_,suffix:"",pattern:z||I(_),modifier:c("MODIFIER")||""});continue}var p=O||c("ESCAPED_CHAR");if(p){d+=p;continue}d&&(l.push(d),d="");var N=c("OPEN");if(N){var _=u(),S=c("NAME")||"",j=c("PATTERN")||"",W=u();f("CLOSE"),l.push({name:S||(j?a++:""),pattern:S&&!j?I(_):j,prefix:_,suffix:W,modifier:c("MODIFIER")||""});continue}f("END")}return l}function $t(i,e){var t=[],n=ze(i,t,e);return bt(n,t,e)}function bt(i,e,t){t===void 0&&(t={});var n=t.decode,r=n===void 0?function(s){return s}:n;return function(s){var o=i.exec(s);if(!o)return!1;for(var l=o[0],a=o.index,h=Object.create(null),d=function(f){if(o[f]===void 0)return"continue";var u=e[f-1];u.modifier==="*"||u.modifier==="+"?h[u.name]=o[f].split(u.prefix+u.suffix).map(function(w){return r(w,u)}):h[u.name]=r(o[f],u)},c=1;c<o.length;c++)d(c);return{path:l,index:a,params:h}}}function T(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ie(i){return i&&i.sensitive?"":"i"}function yt(i,e){if(!e)return i;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,r=t.exec(i.source);r;)e.push({name:r[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),r=t.exec(i.source);return i}function _t(i,e,t){var n=i.map(function(r){return ze(r,e,t).source});return new RegExp("(?:".concat(n.join("|"),")"),Ie(t))}function wt(i,e,t){return xt(mt(i,t),e,t)}function xt(i,e,t){t===void 0&&(t={});for(var n=t.strict,r=n===void 0?!1:n,s=t.start,o=s===void 0?!0:s,l=t.end,a=l===void 0?!0:l,h=t.encode,d=h===void 0?function(v){return v}:h,c=t.delimiter,f=c===void 0?"/#?":c,u=t.endsWith,w=u===void 0?"":u,I="[".concat(T(w),"]|$"),O="[".concat(T(f),"]"),m=o?"^":"",z=0,_=i;z<_.length;z++){var p=_[z];if(typeof p=="string")m+=T(d(p));else{var N=T(d(p.prefix)),S=T(d(p.suffix));if(p.pattern)if(e&&e.push(p),N||S)if(p.modifier==="+"||p.modifier==="*"){var j=p.modifier==="*"?"?":"";m+="(?:".concat(N,"((?:").concat(p.pattern,")(?:").concat(S).concat(N,"(?:").concat(p.pattern,"))*)").concat(S,")").concat(j)}else m+="(?:".concat(N,"(").concat(p.pattern,")").concat(S,")").concat(p.modifier);else{if(p.modifier==="+"||p.modifier==="*")throw new TypeError('Can not repeat "'.concat(p.name,'" without a prefix and suffix'));m+="(".concat(p.pattern,")").concat(p.modifier)}else m+="(?:".concat(N).concat(S,")").concat(p.modifier)}}if(a)r||(m+="".concat(O,"?")),m+=t.endsWith?"(?=".concat(I,")"):"$";else{var W=i[i.length-1],$=typeof W=="string"?O.indexOf(W[W.length-1])>-1:W===void 0;r||(m+="(?:".concat(O,"(?=").concat(I,"))?")),$||(m+="(?=".concat(O,"|").concat(I,")"))}return new RegExp(m,Ie(t))}function ze(i,e,t){return i instanceof RegExp?yt(i,e):Array.isArray(i)?_t(i,e,t):wt(i,e,t)}var At=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,We=i=>{throw TypeError(i)},A=(i,e,t,n)=>{for(var r=n>1?void 0:n?Et(e,t):e,s=i.length-1,o;s>=0;s--)(o=i[s])&&(r=(n?o(e,t,r):o(r))||r);return n&&r&&At(e,t,r),r},De=(i,e,t)=>e.has(i)||We("Cannot "+t),k=(i,e,t)=>(De(i,e,"read from private field"),t?t.call(i):e.get(i)),C=(i,e,t)=>e.has(i)?We("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),M=(i,e,t,n)=>(De(i,e,"write to private field"),e.set(i,t),t),ee,te,ie,ne,re,se,oe,ae;async function me(i){return fetch(i).then(e=>e.json())}let y=class extends G{constructor(){super(...arguments),C(this,ee,"https://qgis.github.io/qgis-uni-navigation/nav-config.json"),C(this,te,"https://qgis.github.io/qgis-uni-navigation/button-config.json"),C(this,ie,""),C(this,ne,1024),C(this,re,""),C(this,se,""),C(this,oe,""),C(this,ae,""),this.config=null,this.buttonConfig=null,this.secondaryConfig=null,this.logo=null}get src(){return k(this,ee)}set src(i){M(this,ee,i)}get buttonSrc(){return k(this,te)}set buttonSrc(i){M(this,te,i)}get secondaryMenu(){return k(this,ie)}set secondaryMenu(i){M(this,ie,i)}get breakpoint(){return k(this,ne)}set breakpoint(i){M(this,ne,i)}get locationPrefix(){return k(this,re)}set locationPrefix(i){M(this,re,i)}get secondMenuPrefix(){return k(this,se)}set secondMenuPrefix(i){M(this,se,i)}get logoIcon(){return k(this,oe)}set logoIcon(i){M(this,oe,i)}get logoLink(){return k(this,ae)}set logoLink(i){M(this,ae,i)}async connectedCallback(){if(super.connectedCallback(),this.secondaryMenu){const t=await me(this.secondaryMenu);this.secondaryConfig=t}const i=await me(this.buttonSrc);this.buttonConfig=i;const e=await me(this.src);this.config=e,this.getAttribute("data-screen")!=="mobile"&&(this.handleWindowResize(),window.addEventListener("resize",this.handleWindowResize.bind(this)))}disconnectedCallback(){window.removeEventListener("resize",this.handleWindowResize.bind(this)),super.disconnectedCallback()}handleWindowResize(){if(!this.breakpoint)return;window.innerWidth<this.breakpoint?this.setAttribute("data-screen","mobile"):(this.removeAttribute("data-screen"),this._handleCloseMobileMenu(),this._handleCloseMobileSubMenus())}drawLogo(){var n;const i=((n=this.config)==null?void 0:n.logo)??null,e=this.logoIcon||(i?`https://qgis.github.io/qgis-uni-navigation/${i.icon}`:""),t=this.logoLink||(i?this.locationPrefix+i.link:"");return i||this.logoIcon?b`<a class="link logo" style="--logo-img:url('${e}')" href="${t}"><div></div></a>`:""}checkActive(i){return i?!!$t(i,{decode:decodeURIComponent})(window.location.pathname):!1}drawMenu(i=[],e=!0){return i?b`${i.map(t=>{switch(t.type){case"link":const n=t.settings.href.startsWith("https"),r=ve({link:!0,active:this.checkActive(t.settings.activeTest),external:n});if(n)return b`<a href="${t.settings.href}" class="${r}" target="_blank" noopener noreferrer>${t.settings.name}</a>`;const s=this.locationPrefix+t.settings.href;return b`<a href="${s}" class="${r}">${t.settings.name}</a>`;case"second-menu":const o=ve({link:!0,external:!1}),l=this.secondMenuPrefix+t.settings.href;return b`<a href="${l}" class="${o}">${t.settings.name}</a>`;case"menu":const a=ve({menu:!0,"top-level":e});return b`<div class="${a}" @click="${this._handleClickMobileSubMenu}"><a class="link">${t.settings.name}</a><div class="dropdown">${this.drawMenu(t.settings.children,!1)}</div></div>`;case"button":const h=this.locationPrefix+t.settings.href;return b`<div class="button-container"><a href="${h}" class="link ${t.settings.class}"><img src="${t.settings.icon}" alt="${t.settings.name}"> <span class="button-text">${t.settings.name}</span></a></div>`;default:return""}})}`:b``}_handleBurgerClick(i){var r;const e=i.currentTarget,t=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",(!t).toString()),e.classList.toggle("active");const n=(r=this.shadowRoot)==null?void 0:r.querySelector("#mobile-menu");n&&(n.classList.toggle("active"),t&&this._handleCloseMobileSubMenus())}_handleCloseMobileMenu(){var t,n;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("#mobile-menu");if(!i)return;i.classList.remove("active");const e=(n=this.shadowRoot)==null?void 0:n.querySelector("#burger");e&&(e.classList.remove("active"),e.setAttribute("aria-expanded","false"))}_handleClickMobileSubMenu(i){i.stopPropagation();const e=i.currentTarget,t=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",(!t).toString());const n=e.querySelector(".dropdown");if(!n)return;const r=n.getAttribute("data-expanded")==="true";n.setAttribute("data-expanded",(!r).toString())}_handleCloseMobileSubMenus(){var t,n;const i=(t=this.shadowRoot)==null?void 0:t.querySelectorAll(".mobile .menu");i==null||i.forEach(r=>r.setAttribute("aria-expanded","false"));const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll(".mobile .dropdown");e==null||e.forEach(r=>r.setAttribute("data-expanded","false"))}drawBurger(){return b`<a id="burger" @click="${this._handleBurgerClick}" role="button" class="burger" aria-label="mobile burger menu" aria-expanded="false" data-target="mobile-menu"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></a>`}drawMobileMenu(){var r,s,o;const i=((r=this.config)==null?void 0:r.navigation)??[],e=((s=this.secondaryConfig)==null?void 0:s.navigation)??[],t=((o=this.buttonConfig)==null?void 0:o.navigation)??[],n=[...i,...e,...t];return b`<div id="mobile-menu" class="mobile">${this.drawMenu(n,!1)}</div>`}drawHeader(){var n,r;const i=((n=this.config)==null?void 0:n.navigation)??[],e=((r=this.buttonConfig)==null?void 0:r.navigation)??[],t=[...i,...e];return t?b`<nav class="navigation" role="navigation" aria-label="main navigation">${this.drawLogo()}<div class="desktop">${this.drawMenu(t)}</div>${this.drawBurger()}</nav>`:""}render(){return b`<header class="header">${this.drawHeader()} ${this.drawMobileMenu()}</header>`}};ee=new WeakMap;te=new WeakMap;ie=new WeakMap;ne=new WeakMap;re=new WeakMap;se=new WeakMap;oe=new WeakMap;ae=new WeakMap;y.styles=je`
    :host {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      font-family: Trueno, sans-serif;
      user-select: none;
    }

    .header {
      padding: 0 0.5rem;
      background-color: #fff;
      color: #000;
      box-shadow: 5px 5px 5px 0 #00000020;
      position: relative;
    }

    .logo > div {
      height: 1.5rem;
      width: 5.25rem;
      display: inline-block;
      background-image: var(--logo-img);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      box-sizing: border-box;
    }

    .navigation {
      display: flex;
      flex-flow: row nowrap;
      align-items: stretch;

      width: 100%;
      margin: 0 auto;
      max-width: var(--qg-nav-max-width, auto);
      min-height: var(--qg-nav-min-height, 4rem);
      font-size: var(--qg-nav-font-size, 14px);
    }

    .desktop {
      display: flex;
      flex-flow: row nowrap;
      align-items: stretch;
      gap: 1.5rem;
      align-items: center;
    }

    .link:hover,
    .link:focus,
    .link.active {
      color: var(--qg-nav-active-color, #3a9800);
    }

    /* pull the rest of the links to the right */
    .link.logo {
      margin-right: auto;
    }

    .link {
      color: inherit;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: 0.2s;
    }

    .desktop .link {
      font-weight: 600;
      padding: 0 1.75rem;
    }

    .link.primary, .link.basic {
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      align-self: center;
      font-style: normal;
      font-weight: 600;
      line-height: 16px; /* 114.286% */
      letter-spacing: 0.022px;
    }
    
    .link.primary {
      color: #fff;
      background-color: var(--qg-nav-active-color, #589632);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: background-color 0.5s ease, box-shadow 0.3s ease;
    }

    .link.basic {
      color: #000;
      background-color: var(--qg-nav-active-color, #ecf1f492);
      transition: background-color 0.5s ease;
    }
    
    .link.basic img, .link.primary img {
      height: 16px;
    }
    .link.basic span, .link.primary span {
      margin-left: 10px;
    }

    .link.primary:hover {
      background-color: var(--qg-nav-active-color, #7fc355);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .link.basic:hover {
      background-color: var(--qg-nav-active-color, #E7E7E7);
    }

    .desktop .button-container {
      display:inherit;
    }

    .desktop .button-container:last-child {
      min-width: 120px;
    }
    .desktop .icon-button:hover {
      width:100%;
    }
    .desktop .icon-button {
      position: relative;
      transition: width 0.5s ease;
    }
      
    .desktop .icon-button .button-text {
      position: absolute;
      left: 25px;
      white-space: nowrap;
      padding-left: 10px;
      opacity: 0;
      transform: translateX(-50%);
      transition: transform 0.5s ease, opacity 0.8s ease-in, opacity 0.3s ease-out;
    }

    .desktop .icon-button:hover .button-text {
      transform: translateX(0);
      opacity: 1;
    }

    .link.external::after {
      content: '';
      mask: url('${$e("https://qgis.github.io/qgis-uni-navigation/")}external.svg') no-repeat 50% 50%;
      mask-size: cover;
      width: 1rem;
      height: 1rem;
      background-color: #000;

      display: inline-block;
      margin-left: 0.625rem;
    }

    .link.external:hover::after,
    .link.external:focus::after {
      background-color: currentColor;
    }

    .menu > .link::after {
      content: '';
      mask: url('${$e("https://qgis.github.io/qgis-uni-navigation/")}arrow.svg') no-repeat 50% 50%;
      mask-size: cover;
      width: 1rem;
      height: 1rem;
      background-color: #002033;
      display: inline-block;
    }
    .menu > .link:hover::after {
      background-color: #3a9800;
    }

    .link::after {
      margin-left: 0.5rem;
    }

    .menu.top-level > .link::after {
      margin-top: -0.1rem;
    }

    .desktop .menu:not(.top-level) > .link::after {
      margin-left: auto;
      transform: rotate(-90deg);
    }

    .mobile {
      display: flex;
      position: absolute;
      top: 100%;
      right: -125%;
      background-color: #fff;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
      border-top: 1px solid #e3e3e3;
      padding: 1rem 2rem;
      flex-flow: column nowrap;
      gap: 1.5rem;
      transition: 0.4s ease-in-out;
      max-height: calc(100vh - 200%);
      overflow: auto;
    }

    .mobile.active {
      right: 0;
    }

    /* dropdown menu base styles */
    .menu {
      position: relative;
    }

    .menu:hover .link,
    .menu:focus .link {
      cursor: pointer;
    }

    .desktop .dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
      min-width: 100%;
      padding: 0.5rem 0;
    }

    .desktop .dropdown .link {
      padding: 0.75rem 1.5rem;
      font-weight: 400;
      white-space: nowrap;
    }

    .desktop .menu:hover .dropdown {
      display: block;
    }

    /* top-level dropdown */
    .menu.top-level {
      display: flex;
      align-items: stretch;
    }

    .menu.top-level > .dropdown {
      border-top: 1px solid #e3e3e3;
    }

    /* sub-level dropdown */
    .menu:not(.top-level) > .dropdown {
      left: 100%;
      top: -0.5rem;
    }

    /* prevent to show all nested dropdowns when top-level dropdown is hovered */
    .desktop .menu:hover .menu:not(:hover) .dropdown {
      display: none;
    }

    /* adaptive mobile styles */

    .burger {
      display: none;
      flex-flow: column nowrap;
      justify-content: space-between;
      width: 45px;
      height: 30px;
      cursor: pointer;
    }

    .burger span {
      display: block;
      width: 100%;
      height: 4px;
      background-color: #000;
      border-radius: 2px;
      transition: 0.4s;
      transform-origin: center;
    }

    .burger.active span:nth-child(1) {
      transform: translateY(13px) rotate(45deg);
    }
    .burger.active span:nth-child(2) {
      opacity: 0;
    }
    .burger.active span:nth-child(3) {
      transform: translateY(-13px) rotate(-45deg);
    }

    :host([data-screen='mobile']) .desktop {
      display: none;
    }
    :host([data-screen='mobile']) .header {
      padding: 0 1rem;
    }
    :host([data-screen='mobile']) .burger {
      display: flex;
    }
    :host([data-screen='mobile']) .navigation {
      align-items: center;
    }

    .mobile .menu,
    .mobile .dropdown {
      display: flex;
      flex-flow: column nowrap;
    }

    .mobile .dropdown {
      gap: 2rem;
    }

    .mobile .dropdown {
      max-height: 0px;
      overflow: hidden;
      transition: max-height 0.4s ease-in-out;
    }

    .mobile .dropdown > :first-child {
      margin-top: 1rem;
    }

    .mobile .link.button {
      align-self: flex-start;
    }

    .mobile .menu > .link,
    .mobile > .link {
      font-weight: 600;
    }

    .mobile .menu[aria-expanded='true'] > .link::after {
      transform: rotate(180deg);
    }

    .mobile .dropdown[data-expanded='true'] {
      max-height: 150vh;
    }
  `;A([E({type:String})],y.prototype,"src",1);A([E({type:String})],y.prototype,"buttonSrc",1);A([E({type:String,attribute:"secondary-menu-config"})],y.prototype,"secondaryMenu",1);A([E({type:Number})],y.prototype,"breakpoint",1);A([E({type:String,attribute:"location-prefix"})],y.prototype,"locationPrefix",1);A([E({type:String,attribute:"second-menu-prefix"})],y.prototype,"secondMenuPrefix",1);A([E({type:String,attribute:"logo-icon"})],y.prototype,"logoIcon",1);A([E({type:String,attribute:"logo-link"})],y.prototype,"logoLink",1);A([ut()],y.prototype,"config",2);y=A([ct("qg-top-nav")],y);
