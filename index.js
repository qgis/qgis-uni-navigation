var ye=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var A=(r,e,t)=>(ye(r,e,"read from private field"),t?t.call(r):e.get(r)),E=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},m=(r,e,t,i)=>(ye(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=globalThis,ve=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$e=Symbol(),_e=new WeakMap;let Oe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==$e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ve&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=_e.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&_e.set(t,e))}return e}toString(){return this.cssText}};const me=r=>new Oe(typeof r=="string"?r:r+"",void 0,$e),De=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new Oe(t,r,$e)},Be=(r,e)=>{if(ve)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=re.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)}},we=ve?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return me(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:je,defineProperty:We,getOwnPropertyDescriptor:Ve,getOwnPropertyNames:Fe,getOwnPropertySymbols:Ke,getPrototypeOf:Ye}=Object,k=globalThis,xe=k.trustedTypes,Je=xe?xe.emptyScript:"",he=k.reactiveElementPolyfillSupport,G=(r,e)=>r,se={toAttribute(r,e){switch(e){case Boolean:r=r?Je:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},be=(r,e)=>!je(r,e),Ae={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:be};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),k.litPropertyMetadata??(k.litPropertyMetadata=new WeakMap);class L extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&We(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:s}=Ve(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return n==null?void 0:n.call(this)},set(o){const l=n==null?void 0:n.call(this);s.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ae}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;const e=Ye(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){const t=this.properties,i=[...Fe(t),...Ke(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(we(n))}else e!==void 0&&t.push(we(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Be(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var s;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:se).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){var s;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=i.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:se;this._$Em=n,this[n]=l.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i,n=!1,s){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??be)(n?s:this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$E_)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(t)):this._$ET()}catch(n){throw e=!1,this._$ET(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}}L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[G("elementProperties")]=new Map,L[G("finalized")]=new Map,he==null||he({ReactiveElement:L}),(k.reactiveElementVersions??(k.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=globalThis,oe=Q.trustedTypes,Ee=oe?oe.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ne="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,Ue="?"+C,Xe=`<${Ue}>`,N=document,ee=()=>N.createComment(""),te=r=>r===null||typeof r!="object"&&typeof r!="function",He=Array.isArray,Ge=r=>He(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",de=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Ce=/>/g,R=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ke=/'/g,Pe=/"/g,Le=/^(?:script|style|textarea|title)$/i,Qe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),b=Qe(1),U=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Me=new WeakMap,O=N.createTreeWalker(N,129);function Ie(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ee!==void 0?Ee.createHTML(e):e}const Ze=(r,e)=>{const t=r.length-1,i=[];let n,s=e===2?"<svg>":"",o=X;for(let l=0;l<t;l++){const a=r[l];let h,c,d=-1,f=0;for(;f<a.length&&(o.lastIndex=f,c=o.exec(a),c!==null);)f=o.lastIndex,o===X?c[1]==="!--"?o=Se:c[1]!==void 0?o=Ce:c[2]!==void 0?(Le.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=R):c[3]!==void 0&&(o=R):o===R?c[0]===">"?(o=n??X,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?R:c[3]==='"'?Pe:ke):o===Pe||o===ke?o=R:o===Se||o===Ce?o=X:(o=R,n=void 0);const p=o===R&&r[l+1].startsWith("/>")?" ":"";s+=o===X?a+Xe:d>=0?(i.push(h),a.slice(0,d)+Ne+a.slice(d)+C+p):a+C+(d===-2?l:p)}return[Ie(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class ie{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const l=e.length-1,a=this.parts,[h,c]=Ze(e,t);if(this.el=ie.createElement(h,i),O.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=O.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Ne)){const f=c[o++],p=n.getAttribute(d).split(C),_=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:_[2],strings:p,ctor:_[1]==="."?tt:_[1]==="?"?it:_[1]==="@"?nt:ae}),n.removeAttribute(d)}else d.startsWith(C)&&(a.push({type:6,index:s}),n.removeAttribute(d));if(Le.test(n.tagName)){const d=n.textContent.split(C),f=d.length-1;if(f>0){n.textContent=oe?oe.emptyScript:"";for(let p=0;p<f;p++)n.append(d[p],ee()),O.nextNode(),a.push({type:2,index:++s});n.append(d[f],ee())}}}else if(n.nodeType===8)if(n.data===Ue)a.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(C,d+1))!==-1;)a.push({type:7,index:s}),d+=C.length-1}s++}}static createElement(e,t){const i=N.createElement("template");return i.innerHTML=e,i}}function K(r,e,t=r,i){var o,l;if(e===U)return e;let n=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const s=te(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((l=n==null?void 0:n._$AO)==null||l.call(n,!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=n:t._$Cl=n),n!==void 0&&(e=K(r,n._$AS(r,e.values),n,i)),e}class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??N).importNode(t,!0);O.currentNode=n;let s=O.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new ne(s,s.nextSibling,this,e):a.type===1?h=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(h=new rt(s,this,e)),this._$AV.push(h),a=i[++l]}o!==(a==null?void 0:a.index)&&(s=O.nextNode(),o++)}return O.currentNode=N,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ne{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),te(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==U&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ge(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&te(this._$AH)?this._$AA.nextSibling.data=e:this.$(N.createTextNode(e)),this._$AH=e}g(e){var s;const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ie.createElement(Ie(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(t);else{const o=new et(n,this),l=o.u(this.options);o.p(t),this.$(l),this._$AH=o}}_$AC(e){let t=Me.get(e.strings);return t===void 0&&Me.set(e.strings,t=new ie(e)),t}T(e){He(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new ne(this.k(ee()),this.k(ee()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ae{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(e,t=this,i,n){const s=this.strings;let o=!1;if(s===void 0)e=K(this,e,t,0),o=!te(e)||e!==this._$AH&&e!==U,o&&(this._$AH=e);else{const l=e;let a,h;for(e=s[0],a=0;a<s.length-1;a++)h=K(this,l[i+a],t,a),h===U&&(h=this._$AH[a]),o||(o=!te(h)||h!==this._$AH[a]),h===g?e=g:e!==g&&(e+=(h??"")+s[a+1]),this._$AH[a]=h}o&&!n&&this.O(e)}O(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class tt extends ae{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===g?void 0:e}}class it extends ae{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class nt extends ae{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??g)===U)return;const i=this._$AH,n=e===g&&i!==g||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==g&&(i===g||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class rt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const ue=Q.litHtmlPolyfillSupport;ue==null||ue(ie,ne),(Q.litHtmlVersions??(Q.litHtmlVersions=[])).push("3.1.0");const st=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=n=new ne(e.insertBefore(ee(),s),s,void 0,t??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Z extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=st(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return U}}var Te;Z._$litElement$=!0,Z.finalized=!0,(Te=globalThis.litElementHydrateSupport)==null||Te.call(globalThis,{LitElement:Z});const pe=globalThis.litElementPolyfillSupport;pe==null||pe({LitElement:Z});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:be},lt=(r=at,e,t)=>{const{kind:i,metadata:n}=t;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.C(o,void 0,r),l}}}if(i==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+i)};function S(r){return(e,t)=>typeof t=="object"?lt(r,e,t):((i,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(r){return S({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dt=r=>(...e)=>({_$litDirective$:r,values:e});class ut{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=dt(class extends ut{constructor(r){var e;if(super(r),r.type!==ht.ATTRIBUTE||r.name!=="class"||((e=r.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var i,n;if(this.it===void 0){this.it=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.st)!=null&&i.has(s))&&this.it.add(s);return this.render(e)}const t=r.element.classList;for(const s of this.it)s in e||(t.remove(s),this.it.delete(s));for(const s in e){const o=!!e[s];o===this.it.has(s)||(n=this.st)!=null&&n.has(s)||(o?(t.add(s),this.it.add(s)):(t.remove(s),this.it.delete(s)))}return U}});function pt(r){for(var e=[],t=0;t<r.length;){var i=r[t];if(i==="*"||i==="+"||i==="?"){e.push({type:"MODIFIER",index:t,value:r[t++]});continue}if(i==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:r[t++]});continue}if(i==="{"){e.push({type:"OPEN",index:t,value:r[t++]});continue}if(i==="}"){e.push({type:"CLOSE",index:t,value:r[t++]});continue}if(i===":"){for(var n="",s=t+1;s<r.length;){var o=r.charCodeAt(s);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||o===95){n+=r[s++];continue}break}if(!n)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:n}),t=s;continue}if(i==="("){var l=1,a="",s=t+1;if(r[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<r.length;){if(r[s]==="\\"){a+=r[s++]+r[s++];continue}if(r[s]===")"){if(l--,l===0){s++;break}}else if(r[s]==="("&&(l++,r[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));a+=r[s++]}if(l)throw new TypeError("Unbalanced pattern at ".concat(t));if(!a)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:a}),t=s;continue}e.push({type:"CHAR",index:t,value:r[t++]})}return e.push({type:"END",index:t,value:""}),e}function ft(r,e){e===void 0&&(e={});for(var t=pt(r),i=e.prefixes,n=i===void 0?"./":i,s="[^".concat(I(e.delimiter||"/#?"),"]+?"),o=[],l=0,a=0,h="",c=function($){if(a<t.length&&t[a].type===$)return t[a++].value},d=function($){var M=c($);if(M!==void 0)return M;var T=t[a],le=T.type,ce=T.index;throw new TypeError("Unexpected ".concat(le," at ").concat(ce,", expected ").concat($))},f=function(){for(var $="",M;M=c("CHAR")||c("ESCAPED_CHAR");)$+=M;return $};a<t.length;){var p=c("CHAR"),_=c("NAME"),H=c("PATTERN");if(_||H){var w=p||"";n.indexOf(w)===-1&&(h+=w,w=""),h&&(o.push(h),h=""),o.push({name:_||l++,prefix:w,suffix:"",pattern:H||s,modifier:c("MODIFIER")||""});continue}var v=p||c("ESCAPED_CHAR");if(v){h+=v;continue}h&&(o.push(h),h="");var Y=c("OPEN");if(Y){var w=f(),J=c("NAME")||"",u=c("PATTERN")||"",P=f();d("CLOSE"),o.push({name:J||(u?l++:""),pattern:J&&!u?s:u,prefix:w,suffix:P,modifier:c("MODIFIER")||""});continue}d("END")}return o}function gt(r,e){var t=[],i=ze(r,t,e);return mt(i,t,e)}function mt(r,e,t){t===void 0&&(t={});var i=t.decode,n=i===void 0?function(s){return s}:i;return function(s){var o=r.exec(s);if(!o)return!1;for(var l=o[0],a=o.index,h=Object.create(null),c=function(f){if(o[f]===void 0)return"continue";var p=e[f-1];p.modifier==="*"||p.modifier==="+"?h[p.name]=o[f].split(p.prefix+p.suffix).map(function(_){return n(_,p)}):h[p.name]=n(o[f],p)},d=1;d<o.length;d++)c(d);return{path:l,index:a,params:h}}}function I(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function qe(r){return r&&r.sensitive?"":"i"}function vt(r,e){if(!e)return r;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,n=t.exec(r.source);n;)e.push({name:n[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),n=t.exec(r.source);return r}function $t(r,e,t){var i=r.map(function(n){return ze(n,e,t).source});return new RegExp("(?:".concat(i.join("|"),")"),qe(t))}function bt(r,e,t){return yt(ft(r,t),e,t)}function yt(r,e,t){t===void 0&&(t={});for(var i=t.strict,n=i===void 0?!1:i,s=t.start,o=s===void 0?!0:s,l=t.end,a=l===void 0?!0:l,h=t.encode,c=h===void 0?function(ce){return ce}:h,d=t.delimiter,f=d===void 0?"/#?":d,p=t.endsWith,_=p===void 0?"":p,H="[".concat(I(_),"]|$"),w="[".concat(I(f),"]"),v=o?"^":"",Y=0,J=r;Y<J.length;Y++){var u=J[Y];if(typeof u=="string")v+=I(c(u));else{var P=I(c(u.prefix)),$=I(c(u.suffix));if(u.pattern)if(e&&e.push(u),P||$)if(u.modifier==="+"||u.modifier==="*"){var M=u.modifier==="*"?"?":"";v+="(?:".concat(P,"((?:").concat(u.pattern,")(?:").concat($).concat(P,"(?:").concat(u.pattern,"))*)").concat($,")").concat(M)}else v+="(?:".concat(P,"(").concat(u.pattern,")").concat($,")").concat(u.modifier);else u.modifier==="+"||u.modifier==="*"?v+="((?:".concat(u.pattern,")").concat(u.modifier,")"):v+="(".concat(u.pattern,")").concat(u.modifier);else v+="(?:".concat(P).concat($,")").concat(u.modifier)}}if(a)n||(v+="".concat(w,"?")),v+=t.endsWith?"(?=".concat(H,")"):"$";else{var T=r[r.length-1],le=typeof T=="string"?w.indexOf(T[T.length-1])>-1:T===void 0;n||(v+="(?:".concat(w,"(?=").concat(H,"))?")),le||(v+="(?=".concat(w,"|").concat(H,")"))}return new RegExp(v,qe(t))}function ze(r,e,t){return r instanceof RegExp?vt(r,e):Array.isArray(r)?$t(r,e,t):bt(r,e,t)}var _t=Object.defineProperty,wt=Object.getOwnPropertyDescriptor,x=(r,e,t,i)=>{for(var n=i>1?void 0:i?wt(e,t):e,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(e,t,n):o(n))||n);return i&&n&&_t(e,t,n),n};async function ge(r){return fetch(r).then(e=>e.json())}var q,z,D,B,j,W,V,F,Re;let y=(Re=class extends Z{constructor(){super(...arguments);E(this,q,void 0);E(this,z,void 0);E(this,D,void 0);E(this,B,void 0);E(this,j,void 0);E(this,W,void 0);E(this,V,void 0);E(this,F,void 0);m(this,q,"https://qgis.github.io/qgis-uni-navigation/nav-config.json"),m(this,z,"https://qgis.github.io/qgis-uni-navigation/button-config.json"),m(this,D,""),m(this,B,1024),m(this,j,""),m(this,W,""),m(this,V,""),m(this,F,""),this.config=null,this.buttonConfig=null,this.secondaryConfig=null,this.logo=null}get src(){return A(this,q)}set src(e){m(this,q,e)}get buttonSrc(){return A(this,z)}set buttonSrc(e){m(this,z,e)}get secondaryMenu(){return A(this,D)}set secondaryMenu(e){m(this,D,e)}get breakpoint(){return A(this,B)}set breakpoint(e){m(this,B,e)}get locationPrefix(){return A(this,j)}set locationPrefix(e){m(this,j,e)}get secondMenuPrefix(){return A(this,W)}set secondMenuPrefix(e){m(this,W,e)}get logoIcon(){return A(this,V)}set logoIcon(e){m(this,V,e)}get logoLink(){return A(this,F)}set logoLink(e){m(this,F,e)}async connectedCallback(){if(super.connectedCallback(),this.secondaryMenu){const i=await ge(this.secondaryMenu);this.secondaryConfig=i}const e=await ge(this.buttonSrc);this.buttonConfig=e;const t=await ge(this.src);this.config=t,this.getAttribute("data-screen")!=="mobile"&&(this.handleWindowResize(),window.addEventListener("resize",this.handleWindowResize.bind(this)))}disconnectedCallback(){window.removeEventListener("resize",this.handleWindowResize.bind(this)),super.disconnectedCallback()}handleWindowResize(){if(!this.breakpoint)return;window.innerWidth<this.breakpoint?this.setAttribute("data-screen","mobile"):(this.removeAttribute("data-screen"),this._handleCloseMobileMenu(),this._handleCloseMobileSubMenus())}drawLogo(){var n;const e=((n=this.config)==null?void 0:n.logo)??null,t=this.logoIcon||(e?`https://qgis.github.io/qgis-uni-navigation/${e.icon}`:""),i=this.logoLink||(e?this.locationPrefix+e.link:"");return e||this.logoIcon?b`<a class="link logo" style="--logo-img:url('${t}')" href="${i}"><div></div></a>`:""}checkActive(e){return e?!!gt(e,{decode:decodeURIComponent})(window.location.pathname):!1}drawMenu(e=[],t=!0){return e?b`${e.map(i=>{switch(i.type){case"link":const n=i.settings.href.startsWith("https"),s=fe({link:!0,active:this.checkActive(i.settings.activeTest),external:n});if(n)return b`<a href="${i.settings.href}" class="${s}" target="_blank" noopener noreferrer>${i.settings.name}</a>`;const o=this.locationPrefix+i.settings.href;return b`<a href="${o}" class="${s}">${i.settings.name}</a>`;case"second-menu":const l=fe({link:!0,external:!1}),a=this.secondMenuPrefix+i.settings.href;return b`<a href="${a}" class="${l}">${i.settings.name}</a>`;case"menu":const h=fe({menu:!0,"top-level":t});return b`<div class="${h}" @click="${this._handleClickMobileSubMenu}"><a class="link">${i.settings.name}</a><div class="dropdown">${this.drawMenu(i.settings.children,!1)}</div></div>`;case"button":const c=this.locationPrefix+i.settings.href;return b`<div class="button-container"><a href="${c}" class="link ${i.settings.class}"><img src="${i.settings.icon}" alt="${i.settings.name}"> <span class="button-text">${i.settings.name}</span></a></div>`;default:return""}})}`:b``}_handleBurgerClick(e){var s;const t=e.currentTarget,i=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",(!i).toString()),t.classList.toggle("active");const n=(s=this.shadowRoot)==null?void 0:s.querySelector("#mobile-menu");n&&(n.classList.toggle("active"),i&&this._handleCloseMobileSubMenus())}_handleCloseMobileMenu(){var i,n;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("#mobile-menu");if(!e)return;e.classList.remove("active");const t=(n=this.shadowRoot)==null?void 0:n.querySelector("#burger");t&&(t.classList.remove("active"),t.setAttribute("aria-expanded","false"))}_handleClickMobileSubMenu(e){e.stopPropagation();const t=e.currentTarget,i=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",(!i).toString());const n=t.querySelector(".dropdown");if(!n)return;const s=n.getAttribute("data-expanded")==="true";n.setAttribute("data-expanded",(!s).toString())}_handleCloseMobileSubMenus(){var i,n;const e=(i=this.shadowRoot)==null?void 0:i.querySelectorAll(".mobile .menu");e==null||e.forEach(s=>s.setAttribute("aria-expanded","false"));const t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll(".mobile .dropdown");t==null||t.forEach(s=>s.setAttribute("data-expanded","false"))}drawBurger(){return b`<a id="burger" @click="${this._handleBurgerClick}" role="button" class="burger" aria-label="mobile burger menu" aria-expanded="false" data-target="mobile-menu"><span aria-hidden="true"></span> <span aria-hidden="true"></span> <span aria-hidden="true"></span></a>`}drawMobileMenu(){var s,o,l;const e=((s=this.config)==null?void 0:s.navigation)??[],t=((o=this.secondaryConfig)==null?void 0:o.navigation)??[],i=((l=this.buttonConfig)==null?void 0:l.navigation)??[],n=[...e,...t,...i];return b`<div id="mobile-menu" class="mobile">${this.drawMenu(n,!1)}</div>`}drawHeader(){var n,s;const e=((n=this.config)==null?void 0:n.navigation)??[],t=((s=this.buttonConfig)==null?void 0:s.navigation)??[],i=[...e,...t];return i?b`<nav class="navigation" role="navigation" aria-label="main navigation">${this.drawLogo()}<div class="desktop">${this.drawMenu(i)}</div>${this.drawBurger()}</nav>`:""}render(){return b`<header class="header">${this.drawHeader()} ${this.drawMobileMenu()}</header>`}},q=new WeakMap,z=new WeakMap,D=new WeakMap,B=new WeakMap,j=new WeakMap,W=new WeakMap,V=new WeakMap,F=new WeakMap,Re);y.styles=De`
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
      mask: url('${me("https://qgis.github.io/qgis-uni-navigation/")}external.svg') no-repeat 50% 50%;
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
      mask: url('${me("https://qgis.github.io/qgis-uni-navigation/")}arrow.svg') no-repeat 50% 50%;
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
  `;x([S({type:String})],y.prototype,"src",1);x([S({type:String})],y.prototype,"buttonSrc",1);x([S({type:String,attribute:"secondary-menu-config"})],y.prototype,"secondaryMenu",1);x([S({type:Number})],y.prototype,"breakpoint",1);x([S({type:String,attribute:"location-prefix"})],y.prototype,"locationPrefix",1);x([S({type:String,attribute:"second-menu-prefix"})],y.prototype,"secondMenuPrefix",1);x([S({type:String,attribute:"logo-icon"})],y.prototype,"logoIcon",1);x([S({type:String,attribute:"logo-link"})],y.prototype,"logoLink",1);x([ct()],y.prototype,"config",2);y=x([ot("qg-top-nav")],y);
