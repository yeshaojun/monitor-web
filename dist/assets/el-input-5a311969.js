import{bg as ve,O as He,b9 as lt,T as rt,bR as De,a_ as it,bS as ut,bT as ct,b8 as dt,bU as Te,v as b,bV as ft,aP as pt,r as _,aT as _e,p as vt,ao as mt,V as re,q as ze,aQ as bt,bp as fe,X as W,d as me,aH as gt,ad as yt,aq as ht,bW as xt,Z as wt,bX as Ct,s as $e,bl as ie,bY as St,bZ as It,b_ as Et,b$ as Pt,ab as kt,$ as ue,ac as T,a0 as Ae,a8 as Lt,aJ as Tt,f as Ue,aK as We,o as g,c as P,l as y,F as ce,z as x,g as s,A as G,b as A,h as k,w as V,x as J,y as H,aw as de,e as je,an as _t,av as zt,c0 as $t,t as Q,ai as At,_ as Vt,bo as te,B as Nt,a as Ot,c1 as Bt,aU as D,aD as Ft,c2 as Rt,a2 as Mt,bL as ae,bN as U,bK as Ve,bG as Kt,c3 as Ht}from"./index-776f3c81.js";const Dt=()=>ve&&/firefox/i.test(window.navigator.userAgent);var Ne=Object.create,Ut=function(){function e(){}return function(t){if(!He(t))return{};if(Ne)return Ne(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const Wt=Ut;function Sa(e,t){var n=-1,a=e.length;for(t||(t=Array(a));++n<a;)t[n]=e[n];return t}function Ia(e,t,n,a){var r=!n;n||(n={});for(var l=-1,i=t.length;++l<i;){var v=t[l],c=a?a(n[v],e[v],v,n,e):void 0;c===void 0&&(c=e[v]),r?lt(n,v,c):rt(n,v,c)}return n}function jt(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Yt=Object.prototype,Xt=Yt.hasOwnProperty;function Zt(e){if(!He(e))return jt(e);var t=De(e),n=[];for(var a in e)a=="constructor"&&(t||!Xt.call(e,a))||n.push(a);return n}function Ea(e){return it(e)?ut(e,!0):Zt(e)}var qt=ct(Object.getPrototypeOf,Object);const Gt=qt;var Ye=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Oe=Ye&&typeof module=="object"&&module&&!module.nodeType&&module,Jt=Oe&&Oe.exports===Ye,Be=Jt?dt.Buffer:void 0,Fe=Be?Be.allocUnsafe:void 0;function Pa(e,t){if(t)return e.slice();var n=e.length,a=Fe?Fe(n):new e.constructor(n);return e.copy(a),a}function Qt(e){var t=new e.constructor(e.byteLength);return new Te(t).set(new Te(e)),t}function ka(e,t){var n=t?Qt(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function La(e){return typeof e.constructor=="function"&&!De(e)?Wt(Gt(e)):{}}const ea=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),ta=["class","style"],aa=/^on[A-Z]/,na=(e={})=>{const{excludeListeners:t=!1,excludeKeys:n}=e,a=b(()=>((n==null?void 0:n.value)||[]).concat(ta)),r=pt();return r?b(()=>{var l;return ft(Object.entries((l=r.proxy)==null?void 0:l.$attrs).filter(([i])=>!a.value.includes(i)&&!(t&&aa.test(i))))}):b(()=>({}))};function oa(e){const t=_();function n(){if(e.value==null)return;const{selectionStart:r,selectionEnd:l,value:i}=e.value;if(r==null||l==null)return;const v=i.slice(0,Math.max(0,r)),c=i.slice(Math.max(0,l));t.value={selectionStart:r,selectionEnd:l,value:i,beforeTxt:v,afterTxt:c}}function a(){if(e.value==null||t.value==null)return;const{value:r}=e.value,{beforeTxt:l,afterTxt:i,selectionStart:v}=t.value;if(l==null||i==null||v==null)return;let c=r.length;if(r.endsWith(i))c=r.length-i.length;else if(r.startsWith(l))c=l.length;else{const m=l[v-1],w=r.indexOf(m,v-1);w!==-1&&(c=w+1)}e.value.setSelectionRange(c,c)}return[n,a]}let I;const sa=`
  height:0 !important;
  visibility:hidden !important;
  ${Dt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,la=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function ra(e){const t=window.getComputedStyle(e),n=t.getPropertyValue("box-sizing"),a=Number.parseFloat(t.getPropertyValue("padding-bottom"))+Number.parseFloat(t.getPropertyValue("padding-top")),r=Number.parseFloat(t.getPropertyValue("border-bottom-width"))+Number.parseFloat(t.getPropertyValue("border-top-width"));return{contextStyle:la.map(i=>`${i}:${t.getPropertyValue(i)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:n}}function Re(e,t=1,n){var a;I||(I=document.createElement("textarea"),document.body.appendChild(I));const{paddingSize:r,borderSize:l,boxSizing:i,contextStyle:v}=ra(e);I.setAttribute("style",`${v};${sa}`),I.value=e.value||e.placeholder||"";let c=I.scrollHeight;const m={};i==="border-box"?c=c+l:i==="content-box"&&(c=c-r),I.value="";const w=I.scrollHeight-r;if(_e(t)){let f=w*t;i==="border-box"&&(f=f+r+l),c=Math.max(f,c),m.minHeight=`${f}px`}if(_e(n)){let f=w*n;i==="border-box"&&(f=f+r+l),c=Math.min(f,c)}return m.height=`${c}px`,(a=I.parentNode)==null||a.removeChild(I),I=void 0,m}const ia=vt({id:{type:String,default:void 0},size:mt,disabled:Boolean,modelValue:{type:re([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:re([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:ze},prefixIcon:{type:ze},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:re([Object,Array,String]),default:()=>bt({})}}),ua={[fe]:e=>W(e),input:e=>W(e),change:e=>W(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},ca=["role"],da=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],fa=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],pa=me({name:"ElInput",inheritAttrs:!1}),va=me({...pa,props:ia,emits:ua,setup(e,{expose:t,emit:n}){const a=e,r=gt(),l=yt(),i=b(()=>{const o={};return a.containerRole==="combobox"&&(o["aria-haspopup"]=r["aria-haspopup"],o["aria-owns"]=r["aria-owns"],o["aria-expanded"]=r["aria-expanded"]),o}),v=b(()=>[a.type==="textarea"?N.b():u.b(),u.m(C.value),u.is("disabled",h.value),u.is("exceed",qe.value),{[u.b("group")]:l.prepend||l.append,[u.bm("group","append")]:l.append,[u.bm("group","prepend")]:l.prepend,[u.m("prefix")]:l.prefix||a.prefixIcon,[u.m("suffix")]:l.suffix||a.suffixIcon||a.clearable||a.showPassword,[u.bm("suffix","password-clear")]:X.value&&oe.value},r.class]),c=b(()=>[u.e("wrapper"),u.is("focus",O.value)]),m=na({excludeKeys:b(()=>Object.keys(i.value))}),{form:w,formItem:f}=ht(),{inputId:d}=xt(a,{formItemContext:f}),C=wt(),h=Ct(),u=$e("input"),N=$e("textarea"),z=ie(),S=ie(),O=_(!1),ne=_(!1),B=_(!1),j=_(!1),be=_(),Y=ie(a.inputStyle),F=b(()=>z.value||S.value),ge=b(()=>{var o;return(o=w==null?void 0:w.statusIcon)!=null?o:!1}),R=b(()=>(f==null?void 0:f.validateState)||""),ye=b(()=>R.value&&St[R.value]),Xe=b(()=>j.value?It:Et),Ze=b(()=>[r.style,a.inputStyle]),he=b(()=>[a.inputStyle,Y.value,{resize:a.resize}]),L=b(()=>Pt(a.modelValue)?"":String(a.modelValue)),X=b(()=>a.clearable&&!h.value&&!a.readonly&&!!L.value&&(O.value||ne.value)),oe=b(()=>a.showPassword&&!h.value&&!a.readonly&&!!L.value&&(!!L.value||O.value)),$=b(()=>a.showWordLimit&&!!m.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!h.value&&!a.readonly&&!a.showPassword),se=b(()=>L.value.length),qe=b(()=>!!$.value&&se.value>Number(m.value.maxlength)),Ge=b(()=>!!l.suffix||!!a.suffixIcon||X.value||a.showPassword||$.value||!!R.value&&ge.value),[Je,Qe]=oa(z);kt(S,o=>{if(et(),!$.value||a.resize!=="both")return;const p=o[0],{width:E}=p.contentRect;be.value={right:`calc(100% - ${E+15+6}px)`}});const M=()=>{const{type:o,autosize:p}=a;if(!(!ve||o!=="textarea"||!S.value))if(p){const E=te(p)?p.minRows:void 0,q=te(p)?p.maxRows:void 0,Le=Re(S.value,E,q);Y.value={overflowY:"hidden",...Le},T(()=>{S.value.offsetHeight,Y.value=Le})}else Y.value={minHeight:Re(S.value).minHeight}},et=(o=>{let p=!1;return()=>{var E;if(p||!a.autosize)return;((E=S.value)==null?void 0:E.offsetParent)===null||(o(),p=!0)}})(M),K=()=>{const o=F.value;!o||o.value===L.value||(o.value=L.value)},le=async o=>{Je();let{value:p}=o.target;if(a.formatter&&(p=a.parser?a.parser(p):p,p=a.formatter(p)),!B.value){if(p===L.value){K();return}n(fe,p),n("input",p),await T(),K(),Qe()}},xe=o=>{n("change",o.target.value)},we=o=>{n("compositionstart",o),B.value=!0},Ce=o=>{var p;n("compositionupdate",o);const E=(p=o.target)==null?void 0:p.value,q=E[E.length-1]||"";B.value=!ea(q)},Se=o=>{n("compositionend",o),B.value&&(B.value=!1,le(o))},tt=()=>{j.value=!j.value,Z()},Z=async()=>{var o;await T(),(o=F.value)==null||o.focus()},at=()=>{var o;return(o=F.value)==null?void 0:o.blur()},Ie=o=>{O.value=!0,n("focus",o)},Ee=o=>{var p;O.value=!1,n("blur",o),a.validateEvent&&((p=f==null?void 0:f.validate)==null||p.call(f,"blur").catch(E=>Ae()))},nt=o=>{ne.value=!1,n("mouseleave",o)},ot=o=>{ne.value=!0,n("mouseenter",o)},Pe=o=>{n("keydown",o)},st=()=>{var o;(o=F.value)==null||o.select()},ke=()=>{n(fe,""),n("change",""),n("clear"),n("input","")};return ue(()=>a.modelValue,()=>{var o;T(()=>M()),a.validateEvent&&((o=f==null?void 0:f.validate)==null||o.call(f,"change").catch(p=>Ae()))}),ue(L,()=>K()),ue(()=>a.type,async()=>{await T(),K(),M()}),Lt(()=>{!a.formatter&&a.parser,K(),T(M)}),t({input:z,textarea:S,ref:F,textareaStyle:he,autosize:Tt(a,"autosize"),focus:Z,blur:at,select:st,clear:ke,resizeTextarea:M}),(o,p)=>Ue((g(),P("div",de(s(i),{class:s(v),style:s(Ze),role:o.containerRole,onMouseenter:ot,onMouseleave:nt}),[y(" input "),o.type!=="textarea"?(g(),P(ce,{key:0},[y(" prepend slot "),o.$slots.prepend?(g(),P("div",{key:0,class:x(s(u).be("group","prepend"))},[G(o.$slots,"prepend")],2)):y("v-if",!0),A("div",{class:x(s(c))},[y(" prefix slot "),o.$slots.prefix||o.prefixIcon?(g(),P("span",{key:0,class:x(s(u).e("prefix"))},[A("span",{class:x(s(u).e("prefix-inner")),onClick:Z},[G(o.$slots,"prefix"),o.prefixIcon?(g(),k(s(H),{key:0,class:x(s(u).e("icon"))},{default:V(()=>[(g(),k(J(o.prefixIcon)))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0),A("input",de({id:s(d),ref_key:"input",ref:z,class:s(u).e("inner")},s(m),{type:o.showPassword?j.value?"text":"password":o.type,disabled:s(h),formatter:o.formatter,parser:o.parser,readonly:o.readonly,autocomplete:o.autocomplete,tabindex:o.tabindex,"aria-label":o.label,placeholder:o.placeholder,style:o.inputStyle,form:a.form,onCompositionstart:we,onCompositionupdate:Ce,onCompositionend:Se,onInput:le,onFocus:Ie,onBlur:Ee,onChange:xe,onKeydown:Pe}),null,16,da),y(" suffix slot "),s(Ge)?(g(),P("span",{key:1,class:x(s(u).e("suffix"))},[A("span",{class:x(s(u).e("suffix-inner")),onClick:Z},[!s(X)||!s(oe)||!s($)?(g(),P(ce,{key:0},[G(o.$slots,"suffix"),o.suffixIcon?(g(),k(s(H),{key:0,class:x(s(u).e("icon"))},{default:V(()=>[(g(),k(J(o.suffixIcon)))]),_:1},8,["class"])):y("v-if",!0)],64)):y("v-if",!0),s(X)?(g(),k(s(H),{key:1,class:x([s(u).e("icon"),s(u).e("clear")]),onMousedown:zt(s($t),["prevent"]),onClick:ke},{default:V(()=>[je(s(_t))]),_:1},8,["class","onMousedown"])):y("v-if",!0),s(oe)?(g(),k(s(H),{key:2,class:x([s(u).e("icon"),s(u).e("password")]),onClick:tt},{default:V(()=>[(g(),k(J(s(Xe))))]),_:1},8,["class"])):y("v-if",!0),s($)?(g(),P("span",{key:3,class:x(s(u).e("count"))},[A("span",{class:x(s(u).e("count-inner"))},Q(s(se))+" / "+Q(s(m).maxlength),3)],2)):y("v-if",!0),s(R)&&s(ye)&&s(ge)?(g(),k(s(H),{key:4,class:x([s(u).e("icon"),s(u).e("validateIcon"),s(u).is("loading",s(R)==="validating")])},{default:V(()=>[(g(),k(J(s(ye))))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0)],2),y(" append slot "),o.$slots.append?(g(),P("div",{key:1,class:x(s(u).be("group","append"))},[G(o.$slots,"append")],2)):y("v-if",!0)],64)):(g(),P(ce,{key:1},[y(" textarea "),A("textarea",de({id:s(d),ref_key:"textarea",ref:S,class:s(N).e("inner")},s(m),{tabindex:o.tabindex,disabled:s(h),readonly:o.readonly,autocomplete:o.autocomplete,style:s(he),"aria-label":o.label,placeholder:o.placeholder,form:a.form,onCompositionstart:we,onCompositionupdate:Ce,onCompositionend:Se,onInput:le,onFocus:Ie,onBlur:Ee,onChange:xe,onKeydown:Pe}),null,16,fa),s($)?(g(),P("span",{key:0,style:At(be.value),class:x(s(u).e("count"))},Q(s(se))+" / "+Q(s(m).maxlength),7)):y("v-if",!0)],64))],16,ca)),[[We,o.type!=="hidden"]])}});var ma=Vt(va,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Ta=Nt(ma);function ba(e){let t;const n=_(!1),a=Ot({...e,originalPosition:"",originalOverflow:"",visible:!1});function r(d){a.text=d}function l(){const d=a.parent,C=f.ns;if(!d.vLoadingAddClassList){let h=d.getAttribute("loading-number");h=Number.parseInt(h)-1,h?d.setAttribute("loading-number",h.toString()):(ae(d,C.bm("parent","relative")),d.removeAttribute("loading-number")),ae(d,C.bm("parent","hidden"))}i(),w.unmount()}function i(){var d,C;(C=(d=f.$el)==null?void 0:d.parentNode)==null||C.removeChild(f.$el)}function v(){var d;e.beforeClose&&!e.beforeClose()||(n.value=!0,clearTimeout(t),t=window.setTimeout(c,400),a.visible=!1,(d=e.closed)==null||d.call(e))}function c(){if(!n.value)return;const d=a.parent;n.value=!1,d.vLoadingAddClassList=void 0,l()}const m=me({name:"ElLoading",setup(d,{expose:C}){const{ns:h,zIndex:u}=Bt("loading");return C({ns:h,zIndex:u}),()=>{const N=a.spinner||a.svg,z=D("svg",{class:"circular",viewBox:a.svgViewBox?a.svgViewBox:"0 0 50 50",...N?{innerHTML:N}:{}},[D("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),S=a.text?D("p",{class:h.b("text")},[a.text]):void 0;return D(Ft,{name:h.b("fade"),onAfterLeave:c},{default:V(()=>[Ue(je("div",{style:{backgroundColor:a.background||""},class:[h.b("mask"),a.customClass,a.fullscreen?"is-fullscreen":""]},[D("div",{class:h.b("spinner")},[z,S])]),[[We,a.visible]])])})}}}),w=Rt(m),f=w.mount(document.createElement("div"));return{...Mt(a),setText:r,removeElLoadingChild:i,close:v,handleAfterLeave:c,vm:f,get $el(){return f.$el}}}let ee;const ga=function(e={}){if(!ve)return;const t=ya(e);if(t.fullscreen&&ee)return ee;const n=ba({...t,closed:()=>{var r;(r=t.closed)==null||r.call(t),t.fullscreen&&(ee=void 0)}});ha(t,t.parent,n),Me(t,t.parent,n),t.parent.vLoadingAddClassList=()=>Me(t,t.parent,n);let a=t.parent.getAttribute("loading-number");return a?a=`${Number.parseInt(a)+1}`:a="1",t.parent.setAttribute("loading-number",a),t.parent.appendChild(n.$el),T(()=>n.visible.value=t.visible),t.fullscreen&&(ee=n),n},ya=e=>{var t,n,a,r;let l;return W(e.target)?l=(t=document.querySelector(e.target))!=null?t:document.body:l=e.target||document.body,{parent:l===document.body||e.body?document.body:l,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:l===document.body&&((n=e.fullscreen)!=null?n:!0),lock:(a=e.lock)!=null?a:!1,customClass:e.customClass||"",visible:(r=e.visible)!=null?r:!0,target:l}},ha=async(e,t,n)=>{const{nextZIndex:a}=n.vm.zIndex,r={};if(e.fullscreen)n.originalPosition.value=U(document.body,"position"),n.originalOverflow.value=U(document.body,"overflow"),r.zIndex=a();else if(e.parent===document.body){n.originalPosition.value=U(document.body,"position"),await T();for(const l of["top","left"]){const i=l==="top"?"scrollTop":"scrollLeft";r[l]=`${e.target.getBoundingClientRect()[l]+document.body[i]+document.documentElement[i]-Number.parseInt(U(document.body,`margin-${l}`),10)}px`}for(const l of["height","width"])r[l]=`${e.target.getBoundingClientRect()[l]}px`}else n.originalPosition.value=U(t,"position");for(const[l,i]of Object.entries(r))n.$el.style[l]=i},Me=(e,t,n)=>{const a=n.vm.ns;["absolute","fixed","sticky"].includes(n.originalPosition.value)?ae(t,a.bm("parent","relative")):Ve(t,a.bm("parent","relative")),e.fullscreen&&e.lock?Ve(t,a.bm("parent","hidden")):ae(t,a.bm("parent","hidden"))},pe=Symbol("ElLoading"),Ke=(e,t)=>{var n,a,r,l;const i=t.instance,v=d=>te(t.value)?t.value[d]:void 0,c=d=>{const C=W(d)&&(i==null?void 0:i[d])||d;return C&&_(C)},m=d=>c(v(d)||e.getAttribute(`element-loading-${Ht(d)}`)),w=(n=v("fullscreen"))!=null?n:t.modifiers.fullscreen,f={text:m("text"),svg:m("svg"),svgViewBox:m("svgViewBox"),spinner:m("spinner"),background:m("background"),customClass:m("customClass"),fullscreen:w,target:(a=v("target"))!=null?a:w?void 0:e,body:(r=v("body"))!=null?r:t.modifiers.body,lock:(l=v("lock"))!=null?l:t.modifiers.lock};e[pe]={options:f,instance:ga(f)}},xa=(e,t)=>{for(const n of Object.keys(t))Kt(t[n])&&(t[n].value=e[n])},_a={mounted(e,t){t.value&&Ke(e,t)},updated(e,t){const n=e[pe];t.oldValue!==t.value&&(t.value&&!t.oldValue?Ke(e,t):t.value&&t.oldValue?te(t.value)&&xa(t.value,n.options):n==null||n.instance.close())},unmounted(e){var t;(t=e[pe])==null||t.instance.close()}};export{Ta as E,ga as L,Qt as a,ka as b,Ia as c,Sa as d,Pa as e,ea as f,Gt as g,La as i,Ea as k,_a as v};