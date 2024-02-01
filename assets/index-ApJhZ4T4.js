var ue=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var te=(n,e,t)=>(ue(n,e,"read from private field"),t?t.call(n):e.get(n)),ie=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},I=(n,e,t,i)=>(ue(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,le=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),pe=new WeakMap;let Se=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(le&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=pe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&pe.set(t,e))}return e}toString(){return this.cssText}};const ae=n=>new Se(typeof n=="string"?n:n+"",void 0,ce),Ue=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[s+1],n[0]);return new Se(t,n,ce)},Ne=(n,e)=>{if(le)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=Y.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)}},fe=le?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ae(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:He,defineProperty:Le,getOwnPropertyDescriptor:ze,getOwnPropertyNames:Ie,getOwnPropertySymbols:De,getPrototypeOf:Be}=Object,A=globalThis,ge=A.trustedTypes,je=ge?ge.emptyScript:"",re=A.reactiveElementPolyfillSupport,B=(n,e)=>n,J={toAttribute(n,e){switch(e){case Boolean:n=n?je:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},he=(n,e)=>!He(n,e),me={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:he};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);class R extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=me){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Le(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=ze(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const l=r==null?void 0:r.call(this);s.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??me}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const e=Be(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const t=this.properties,i=[...Ie(t),...De(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(fe(r))}else e!==void 0&&t.push(fe(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:J).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var s;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:J;this._$Em=r,this[r]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i,r=!1,s){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??he)(r?s:this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$E_)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$ET()}catch(r){throw e=!1,this._$ET(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}}R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[B("elementProperties")]=new Map,R[B("finalized")]=new Map,re==null||re({ReactiveElement:R}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,G=j.trustedTypes,ve=G?G.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ce="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,Pe="?"+y,qe=`<${Pe}>`,P=document,W=()=>P.createComment(""),V=n=>n===null||typeof n!="object"&&typeof n!="function",ke=Array.isArray,We=n=>ke(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ne=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,be=/>/g,S=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_e=/'/g,ye=/"/g,Te=/^(?:script|style|textarea|title)$/i,Ve=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),_=Ve(1),k=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Ae=new WeakMap,C=P.createTreeWalker(P,129);function Re(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ve!==void 0?ve.createHTML(e):e}const Fe=(n,e)=>{const t=n.length-1,i=[];let r,s=e===2?"<svg>":"",o=D;for(let l=0;l<t;l++){const a=n[l];let h,c,d=-1,f=0;for(;f<a.length&&(o.lastIndex=f,c=o.exec(a),c!==null);)f=o.lastIndex,o===D?c[1]==="!--"?o=$e:c[1]!==void 0?o=be:c[2]!==void 0?(Te.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=S):c[3]!==void 0&&(o=S):o===S?c[0]===">"?(o=r??D,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?S:c[3]==='"'?ye:_e):o===ye||o===_e?o=S:o===$e||o===be?o=D:(o=S,r=void 0);const p=o===S&&n[l+1].startsWith("/>")?" ":"";s+=o===D?a+qe:d>=0?(i.push(h),a.slice(0,d)+Ce+a.slice(d)+y+p):a+y+(d===-2?l:p)}return[Re(n,s+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class F{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,o=0;const l=e.length-1,a=this.parts,[h,c]=Fe(e,t);if(this.el=F.createElement(h,i),C.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=C.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Ce)){const f=c[o++],p=r.getAttribute(d).split(y),$=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:$[2],strings:p,ctor:$[1]==="."?Ye:$[1]==="?"?Je:$[1]==="@"?Ge:Q}),r.removeAttribute(d)}else d.startsWith(y)&&(a.push({type:6,index:s}),r.removeAttribute(d));if(Te.test(r.tagName)){const d=r.textContent.split(y),f=d.length-1;if(f>0){r.textContent=G?G.emptyScript:"";for(let p=0;p<f;p++)r.append(d[p],W()),C.nextNode(),a.push({type:2,index:++s});r.append(d[f],W())}}}else if(r.nodeType===8)if(r.data===Pe)a.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(y,d+1))!==-1;)a.push({type:7,index:s}),d+=y.length-1}s++}}static createElement(e,t){const i=P.createElement("template");return i.innerHTML=e,i}}function N(n,e,t=n,i){var o,l;if(e===k)return e;let r=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const s=V(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(n),r._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=N(n,r._$AS(n,e.values),r,i)),e}class Ke{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??P).importNode(t,!0);C.currentNode=r;let s=C.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new K(s,s.nextSibling,this,e):a.type===1?h=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(h=new Qe(s,this,e)),this._$AV.push(h),a=i[++l]}o!==(a==null?void 0:a.index)&&(s=C.nextNode(),o++)}return C.currentNode=P,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class K{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),V(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==k&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):We(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&V(this._$AH)?this._$AA.nextSibling.data=e:this.$(P.createTextNode(e)),this._$AH=e}g(e){var s;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=F.createElement(Re(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const o=new Ke(r,this),l=o.u(this.options);o.p(t),this.$(l),this._$AH=o}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new F(e)),t}T(e){ke(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new K(this.k(W()),this.k(W()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(e,t=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=N(this,e,t,0),o=!V(e)||e!==this._$AH&&e!==k,o&&(this._$AH=e);else{const l=e;let a,h;for(e=s[0],a=0;a<s.length-1;a++)h=N(this,l[i+a],t,a),h===k&&(h=this._$AH[a]),o||(o=!V(h)||h!==this._$AH[a]),h===g?e=g:e!==g&&(e+=(h??"")+s[a+1]),this._$AH[a]=h}o&&!r&&this.O(e)}O(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ye extends Q{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===g?void 0:e}}class Je extends Q{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Ge extends Q{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??g)===k)return;const i=this._$AH,r=e===g&&i!==g||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==g&&(i===g||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Qe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const se=j.litHtmlPolyfillSupport;se==null||se(F,K),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.1.0");const Ze=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new K(e.insertBefore(W(),s),s,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class q extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return k}}var xe;q._$litElement$=!0,q.finalized=!0,(xe=globalThis.litElementHydrateSupport)==null||xe.call(globalThis,{LitElement:q});const oe=globalThis.litElementPolyfillSupport;oe==null||oe({LitElement:q});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:he},tt=(n=et,e,t)=>{const{kind:i,metadata:r}=t;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(t.name,n),i==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,n)},init(l){return l!==void 0&&this.C(o,void 0,n),l}}}if(i==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,n)}}throw Error("Unsupported decorator location: "+i)};function de(n){return(e,t)=>typeof t=="object"?tt(n,e,t):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(n){return de({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},nt=n=>(...e)=>({_$litDirective$:n,values:e});class st{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=nt(class extends st{constructor(n){var e;if(super(n),n.type!==rt.ATTRIBUTE||n.name!=="class"||((e=n.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(e=>n[e]).join(" ")+" "}update(n,[e]){var i,r;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.st=new Set(n.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.st)!=null&&i.has(s))&&this.it.add(s);return this.render(e)}const t=n.element.classList;for(const s of this.it)s in e||(t.remove(s),this.it.delete(s));for(const s in e){const o=!!e[s];o===this.it.has(s)||(r=this.st)!=null&&r.has(s)||(o?(t.add(s),this.it.add(s)):(t.remove(s),this.it.delete(s)))}return k}});function ot(n){for(var e=[],t=0;t<n.length;){var i=n[t];if(i==="*"||i==="+"||i==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(i==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(i==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(i==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(i===":"){for(var r="",s=t+1;s<n.length;){var o=n.charCodeAt(s);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){r+=n[s++];continue}break}if(!r)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:r}),t=s;continue}if(i==="("){var l=1,a="",s=t+1;if(n[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<n.length;){if(n[s]==="\\"){a+=n[s++]+n[s++];continue}if(n[s]===")"){if(l--,l===0){s++;break}}else if(n[s]==="("&&(l++,n[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));a+=n[s++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(t));if(!a)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:a}),t=s;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function at(n,e){e===void 0&&(e={});for(var t=ot(n),i=e.prefixes,r=i===void 0?"./":i,s="[^".concat(M(e.delimiter||"/#?"),"]+?"),o=[],l=0,a=0,h="",c=function(v){if(a<t.length&&t[a].type===v)return t[a++].value},d=function(v){var x=c(v);if(x!==void 0)return x;var E=t[a],X=E.type,ee=E.index;throw new TypeError("Unexpected ".concat(X," at ").concat(ee,", expected ").concat(v))},f=function(){for(var v="",x;x=c("CHAR")||c("ESCAPED_CHAR");)v+=x;return v};a<t.length;){var p=c("CHAR"),$=c("NAME"),T=c("PATTERN");if($||T){var b=p||"";r.indexOf(b)===-1&&(h+=b,b=""),h&&(o.push(h),h=""),o.push({name:$||l++,prefix:b,suffix:"",pattern:T||s,modifier:c("MODIFIER")||""});continue}var m=p||c("ESCAPED_CHAR");if(m){h+=m;continue}h&&(o.push(h),h="");var L=c("OPEN");if(L){var b=f(),z=c("NAME")||"",u=c("PATTERN")||"",w=f();d("CLOSE"),o.push({name:z||(u?l++:""),pattern:z&&!u?s:u,prefix:b,suffix:w,modifier:c("MODIFIER")||""});continue}d("END")}return o}function lt(n,e){var t=[],i=Oe(n,t,e);return ct(i,t,e)}function ct(n,e,t){t===void 0&&(t={});var i=t.decode,r=i===void 0?function(s){return s}:i;return function(s){var o=n.exec(s);if(!o)return!1;for(var l=o[0],a=o.index,h=Object.create(null),c=function(f){if(o[f]===void 0)return"continue";var p=e[f-1];p.modifier==="*"||p.modifier==="+"?h[p.name]=o[f].split(p.prefix+p.suffix).map(function($){return r($,p)}):h[p.name]=r(o[f],p)},d=1;d<o.length;d++)c(d);return{path:l,index:a,params:h}}}function M(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Me(n){return n&&n.sensitive?"":"i"}function ht(n,e){if(!e)return n;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,r=t.exec(n.source);r;)e.push({name:r[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),r=t.exec(n.source);return n}function dt(n,e,t){var i=n.map(function(r){return Oe(r,e,t).source});return new RegExp("(?:".concat(i.join("|"),")"),Me(t))}function ut(n,e,t){return pt(at(n,t),e,t)}function pt(n,e,t){t===void 0&&(t={});for(var i=t.strict,r=i===void 0?!1:i,s=t.start,o=s===void 0?!0:s,l=t.end,a=l===void 0?!0:l,h=t.encode,c=h===void 0?function(ee){return ee}:h,d=t.delimiter,f=d===void 0?"/#?":d,p=t.endsWith,$=p===void 0?"":p,T="[".concat(M($),"]|$"),b="[".concat(M(f),"]"),m=o?"^":"",L=0,z=n;L<z.length;L++){var u=z[L];if(typeof u=="string")m+=M(c(u));else{var w=M(c(u.prefix)),v=M(c(u.suffix));if(u.pattern)if(e&&e.push(u),w||v)if(u.modifier==="+"||u.modifier==="*"){var x=u.modifier==="*"?"?":"";m+="(?:".concat(w,"((?:").concat(u.pattern,")(?:").concat(v).concat(w,"(?:").concat(u.pattern,"))*)").concat(v,")").concat(x)}else m+="(?:".concat(w,"(").concat(u.pattern,")").concat(v,")").concat(u.modifier);else u.modifier==="+"||u.modifier==="*"?m+="((?:".concat(u.pattern,")").concat(u.modifier,")"):m+="(".concat(u.pattern,")").concat(u.modifier);else m+="(?:".concat(w).concat(v,")").concat(u.modifier)}}if(a)r||(m+="".concat(b,"?")),m+=t.endsWith?"(?=".concat(T,")"):"$";else{var E=n[n.length-1],X=typeof E=="string"?b.indexOf(E[E.length-1])>-1:E===void 0;r||(m+="(?:".concat(b,"(?=").concat(T,"))?")),X||(m+="(?=".concat(b,"|").concat(T,")"))}return new RegExp(m,Me(t))}function Oe(n,e,t){return n instanceof RegExp?ht(n,e):Array.isArray(n)?dt(n,e,t):ut(n,e,t)}var ft=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,Z=(n,e,t,i)=>{for(var r=i>1?void 0:i?gt(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ft(e,t,r),r};async function mt(n){return fetch(n).then(e=>e.json())}var O,U,Ee;let H=(Ee=class extends q{constructor(){super(...arguments);ie(this,O,void 0);ie(this,U,void 0);I(this,O,"/nav-config.json"),I(this,U,1024),this.config=null,this.logo=null}get src(){return te(this,O)}set src(e){I(this,O,e)}get breakpoint(){return te(this,U)}set breakpoint(e){I(this,U,e)}async connectedCallback(){super.connectedCallback();const e=await mt(this.src);this.config=e,this.getAttribute("data-screen")!=="mobile"&&(this.handleWindowResize(),window.addEventListener("resize",this.handleWindowResize.bind(this)))}disconnectedCallback(){window.removeEventListener("resize",this.handleWindowResize.bind(this)),super.disconnectedCallback()}handleWindowResize(){if(!this.breakpoint)return;window.innerWidth<this.breakpoint?this.setAttribute("data-screen","mobile"):(this.removeAttribute("data-screen"),this._handleCloseMobileMenu(),this._handleCloseMobileSubMenus())}drawLogo(){var i;const e=((i=this.config)==null?void 0:i.logo)??null,t=e?`/${e.icon}`:"";return e?_`<a class="link logo" style="--logo-img:url('${t}')" href="${e.link}"><div></div></a>`:""}checkActive(e){return e?!!lt(e,{decode:decodeURIComponent})(window.location.pathname):!1}drawMenu(e=[],t=!0){return e?_`${e.map(i=>{switch(i.type){case"link":const r=i.settings.href.startsWith("https"),s=we({link:!0,active:this.checkActive(i.settings.activeTest),external:r});return r?_`<a href="${i.settings.href}" class="${s}" target="_blank" noopener noreferrer>${i.settings.name}</a>`:_`<a href="${i.settings.href}" class="${s}">${i.settings.name}</a>`;case"menu":const o=we({menu:!0,"top-level":t});return _`<div class="${o}" @click="${this._handleClickMobileSubMenu}"><a class="link">${i.settings.name}</a><div class="dropdown">${this.drawMenu(i.settings.children,!1)}</div></div>`;case"button":return _`<a href="${i.settings.href}" class="link button">${i.settings.name}</a>`;default:return""}})}`:_``}_handleBurgerClick(e){var s;const t=e.currentTarget,i=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",(!i).toString()),t.classList.toggle("active");const r=(s=this.shadowRoot)==null?void 0:s.querySelector("#mobile-menu");r&&(r.classList.toggle("active"),i&&this._handleCloseMobileSubMenus())}_handleCloseMobileMenu(){var i,r;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("#mobile-menu");if(!e)return;e.classList.remove("active");const t=(r=this.shadowRoot)==null?void 0:r.querySelector("#burger");t&&(t.classList.remove("active"),t.setAttribute("aria-expanded","false"))}_handleClickMobileSubMenu(e){e.stopPropagation();const t=e.currentTarget,i=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",(!i).toString());const r=t.querySelector(".dropdown");if(!r)return;const s=r.getAttribute("data-expanded")==="true";r.setAttribute("data-expanded",(!s).toString())}_handleCloseMobileSubMenus(){var i,r;const e=(i=this.shadowRoot)==null?void 0:i.querySelectorAll(".mobile .menu");e==null||e.forEach(s=>s.setAttribute("aria-expanded","false"));const t=(r=this.shadowRoot)==null?void 0:r.querySelectorAll(".mobile .dropdown");t==null||t.forEach(s=>s.setAttribute("data-expanded","false"))}drawBurger(){return _`<a id="burger" @click="${this._handleBurgerClick}" role="button" class="burger" aria-label="mobile burger menu" aria-expanded="false" data-target="mobile-menu"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></a>`}drawMobileMenu(){var t;const e=(t=this.config)==null?void 0:t.navigation;return _`<div id="mobile-menu" class="mobile">${this.drawMenu(e,!1)}</div>`}drawHeader(){var t;const e=(t=this.config)==null?void 0:t.navigation;return e?_`<nav class="navigation" role="navigation" aria-label="main navigation">${this.drawLogo()}<div class="desktop">${this.drawMenu(e)}</div>${this.drawBurger()}</nav>`:""}render(){return _`<header class="header">${this.drawHeader()} ${this.drawMobileMenu()}</header>`}},O=new WeakMap,U=new WeakMap,Ee);H.styles=Ue`
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
      height: 2rem;
      width: 6.25rem;
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
      gap: 3rem;
    }

    .link:hover,
    .link:focus,
    .link.active {
      color: var(--qg-nav-active-color, #93b023);
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
      white-space: nowrap;
      transition: 0.2s;
    }

    .desktop .link {
      font-weight: 600;
      padding: 0 1.75rem;
    }

    .link.button {
      background-color: var(--qg-nav-active-color, #93b023);
      color: #fff;
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      align-self: center;

      font-style: normal;
      font-weight: 600;
      line-height: 16px; /* 114.286% */
      letter-spacing: 0.022px;
    }

    .link.external::after {
      content: '';
      mask: url('${ae("/")}external.svg') no-repeat 50% 50%;
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
      mask: url('${ae("/")}arrow.svg') no-repeat 50% 50%;
      mask-size: cover;
      width: 1rem;
      height: 1rem;
      background-color: #939393;
      display: inline-block;
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
      right: -100%;
      background-color: #fff;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
      border-top: 0.25rem solid #000;
      padding: 1rem 2rem;
      flex-flow: column nowrap;
      gap: 2rem;
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
      padding: 1rem 0;
    }

    .desktop .dropdown .link {
      padding: 0 2rem;
    }
    .desktop .dropdown .link:not(:last-child) {
      padding-bottom: 2rem;
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
      border-top: 0.25rem solid #000;
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
      margin-top: 2rem;
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
      max-height: 100vh;
    }
  `;Z([de({type:String})],H.prototype,"src",1);Z([de({type:Number})],H.prototype,"breakpoint",1);Z([it()],H.prototype,"config",2);H=Z([Xe("qg-top-nav")],H);
