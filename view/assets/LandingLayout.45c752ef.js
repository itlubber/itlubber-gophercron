var mt=Object.defineProperty,gt=Object.defineProperties;var ht=Object.getOwnPropertyDescriptors;var ze=Object.getOwnPropertySymbols;var wt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable;var Ee=(e,f,i)=>f in e?mt(e,f,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[f]=i,Y=(e,f)=>{for(var i in f||(f={}))wt.call(f,i)&&Ee(e,i,f[i]);if(ze)for(var i of ze(f))bt.call(f,i)&&Ee(e,i,f[i]);return e},oe=(e,f)=>gt(e,ht(f));import{a as J,c as r,h as w,b as me,O as j,r as B,w as T,S as ge,cg as yt,U as he,g as re,cr as we,T as pt,ay as xt,a0 as Ne,y as H,f as be,c1 as je,X as _t,o as Oe,n as Ae,ae as Fe,a2 as We,cs as St,c4 as kt,aw as ce,M as Ct,_ as qt,ct as Bt,cu as Tt,cv as Lt,j as ye,u as pe,k as Ue,l as X,m as Le,q as v,s as n,E as ie,Q as te,z as I,A as Ke,D as Ge,x as F,c3 as $t,bc as It,aI as Ot,F as Z,I as ne,J as Qt,B as Vt,cn as zt,bp as Et,t as Me}from"./index.c00bb6a6.js";import{Q as At}from"./QSpace.9a7c43aa.js";import{Q as Ft}from"./QTooltip.44242153.js";import{Q as $e}from"./touch.8438639b.js";import{a as P,c as Ie,b as $}from"./QChip.5d8be3da.js";import{Q as ve,b as Mt}from"./QSelect.00841303.js";import{u as Ye,a as Xe}from"./focus-manager.51458ac1.js";import{h as Je,j as Ze,l as et,c as Pt,y as Ht,z as Rt,x as qe,a as Be,b as Dt,Q as Nt}from"./QDialog.8deced28.js";import{c as Pe}from"./use-key-composition.d99d77ec.js";import{Q as jt}from"./QList.36515eac.js";import{T as Te,a as Wt,Q as Ut}from"./QScrollArea.e40836c3.js";import{b as fe}from"./format.865294d5.js";import{Q as He}from"./QInput.b008bd08.js";import{Q as Kt}from"./QForm.9ae98661.js";import{C as Gt}from"./ClosePopup.d0d9f96f.js";import{g as Yt}from"./utils.3d38ee44.js";import"./rtl.b51694b1.js";var Xt=J({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:f}){const i=r(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:i.value,role:"toolbar"},me(f.default))}}),Jt=J({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:i}){const{proxy:{$q:s}}=re(),o=he(we,j);if(o===j)return console.error("QHeader needs to be child of QLayout"),j;const l=B(parseInt(e.heightHint,10)),d=B(!0),x=r(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||s.platform.is.ios&&o.isContainer.value===!0),g=r(()=>{if(e.modelValue!==!0)return 0;if(x.value===!0)return d.value===!0?l.value:0;const u=l.value-o.scroll.value.position;return u>0?u:0}),q=r(()=>e.modelValue!==!0||x.value===!0&&d.value!==!0),a=r(()=>e.modelValue===!0&&q.value===!0&&e.reveal===!0),m=r(()=>"q-header q-layout__section--marginal "+(x.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(q.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),h=r(()=>{const u=o.rows.value.top,O={};return u[0]==="l"&&o.left.space===!0&&(O[s.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),u[2]==="r"&&o.right.space===!0&&(O[s.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),O});function y(u,O){o.update("header",u,O)}function k(u,O){u.value!==O&&(u.value=O)}function c({height:u}){k(l,u),y("size",u)}function C(u){a.value===!0&&k(d,!0),i("focusin",u)}T(()=>e.modelValue,u=>{y("space",u),k(d,!0),o.animate()}),T(g,u=>{y("offset",u)}),T(()=>e.reveal,u=>{u===!1&&k(d,e.modelValue)}),T(d,u=>{o.animate(),i("reveal",u)}),T(o.scroll,u=>{e.reveal===!0&&k(d,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const p={};return o.instances.header=p,e.modelValue===!0&&y("size",l.value),y("space",e.modelValue),y("offset",g.value),ge(()=>{o.instances.header===p&&(o.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const u=yt(f.default,[]);return e.elevated===!0&&u.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(w($e,{debounce:0,onResize:c})),w("header",{class:m.value,style:h.value,onFocusin:C},u)}}}),Zt=J({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:f,emit:i}){let s=!1,o,l,d=null,x=null,g,q;function a(){o&&o(),o=null,s=!1,d!==null&&(clearTimeout(d),d=null),x!==null&&(clearTimeout(x),x=null),l!==void 0&&l.removeEventListener("transitionend",g),g=null}function m(c,C,p){C!==void 0&&(c.style.height=`${C}px`),c.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,s=!0,o=p}function h(c,C){c.style.overflowY=null,c.style.height=null,c.style.transition=null,a(),C!==q&&i(C)}function y(c,C){let p=0;l=c,s===!0?(a(),p=c.offsetHeight===c.scrollHeight?0:void 0):(q="hide",c.style.overflowY="hidden"),m(c,p,C),d=setTimeout(()=>{d=null,c.style.height=`${c.scrollHeight}px`,g=u=>{x=null,(Object(u)!==u||u.target===c)&&h(c,"show")},c.addEventListener("transitionend",g),x=setTimeout(g,e.duration*1.1)},100)}function k(c,C){let p;l=c,s===!0?a():(q="show",c.style.overflowY="hidden",p=c.scrollHeight),m(c,p,C),d=setTimeout(()=>{d=null,c.style.height=0,g=u=>{x=null,(Object(u)!==u||u.target===c)&&h(c,"hide")},c.addEventListener("transitionend",g),x=setTimeout(g,e.duration*1.1)},100)}return ge(()=>{s===!0&&a()}),()=>w(pt,{css:!1,appear:e.appear,onEnter:y,onLeave:k},f.default)}});const ee=xt({}),ea=Object.keys(Ne);var ta=J({name:"QExpansionItem",props:oe(Y(Y(Y({},Ne),Je),Ye),{icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]}),emits:[...Ze,"click","afterShow","afterHide"],setup(e,{slots:f,emit:i}){const{proxy:{$q:s}}=re(),o=Xe(e,s),l=B(e.modelValue!==null?e.modelValue:e.defaultOpened),d=B(null),x=Pe(),{show:g,hide:q,toggle:a}=et({showing:l});let m,h;const y=r(()=>`q-expansion-item q-item-type q-expansion-item--${l.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),k=r(()=>{if(e.contentInsetLevel===void 0)return null;const b=s.lang.rtl===!0?"Right":"Left";return{["padding"+b]:e.contentInsetLevel*56+"px"}}),c=r(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),C=r(()=>{const b={};return ea.forEach(z=>{b[z]=e[z]}),b}),p=r(()=>c.value===!0||e.expandIconToggle!==!0),u=r(()=>e.expandedIcon!==void 0&&l.value===!0?e.expandedIcon:e.expandIcon||s.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),O=r(()=>e.disable!==!0&&(c.value===!0||e.expandIconToggle===!0)),_=r(()=>({expanded:l.value===!0,detailsId:e.targetUid,toggle:a,show:g,hide:q})),L=r(()=>{const b=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:s.lang.label[l.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":l.value===!0?"true":"false","aria-controls":x,"aria-label":b}});T(()=>e.group,b=>{h!==void 0&&h(),b!==void 0&&N()});function Q(b){c.value!==!0&&a(b),i("click",b)}function R(b){b.keyCode===13&&W(b,!0)}function W(b,z){z!==!0&&d.value!==null&&d.value.focus(),a(b),_t(b)}function D(){i("afterShow")}function A(){i("afterHide")}function N(){m===void 0&&(m=Pe()),l.value===!0&&(ee[e.group]=m);const b=T(l,M=>{M===!0?ee[e.group]=m:ee[e.group]===m&&delete ee[e.group]}),z=T(()=>ee[e.group],(M,xe)=>{xe===m&&M!==void 0&&M!==m&&q()});h=()=>{b(),z(),ee[e.group]===m&&delete ee[e.group],h=void 0}}function ue(){const b={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},z=[w(H,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&l.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:u.value})];return O.value===!0&&(Object.assign(b,oe(Y({tabindex:0},L.value),{onClick:W,onKeyup:R})),z.unshift(w("div",{ref:d,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),w($,b,()=>z)}function U(){let b;return f.header!==void 0?b=[].concat(f.header(_.value)):(b=[w($,()=>[w(Ie,{lines:e.labelLines},()=>e.label||""),e.caption?w(Ie,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&b[e.switchToggleSide===!0?"push":"unshift"](w($,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>w(H,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&b[e.switchToggleSide===!0?"unshift":"push"](ue()),b}function le(){const b={ref:"item",style:e.headerStyle,class:e.headerClass,dark:o.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return p.value===!0&&(b.clickable=!0,b.onClick=Q,Object.assign(b,c.value===!0?C.value:L.value)),w(P,b,U)}function se(){return be(w("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:k.value,id:x},me(f.default)),[[je,l.value]])}function ae(){const b=[le(),w(Zt,{duration:e.duration,onShow:D,onHide:A},se)];return e.expandSeparator===!0&&b.push(w(ve,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:o.value}),w(ve,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:o.value})),b}return e.group!==void 0&&N(),ge(()=>{h!==void 0&&h()}),()=>w("div",{class:y.value},[w("div",{class:"q-expansion-item__container relative-position"},ae())])}});const Re=150;var aa=J({name:"QDrawer",inheritAttrs:!1,props:oe(Y(Y({},Je),Ye),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...Ze,"onLayout","miniState"],setup(e,{slots:f,emit:i,attrs:s}){const o=re(),{proxy:{$q:l}}=o,d=Xe(e,l),{preventBodyScroll:x}=Rt(),{registerTimeout:g,removeTimeout:q}=Pt(),a=he(we,j);if(a===j)return console.error("QDrawer needs to be child of QLayout"),j;let m,h=null,y;const k=B(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),c=r(()=>e.mini===!0&&k.value!==!0),C=r(()=>c.value===!0?e.miniWidth:e.width),p=B(e.showIfAbove===!0&&k.value===!1?!0:e.modelValue===!0),u=r(()=>e.persistent!==!0&&(k.value===!0||xe.value===!0));function O(t,S){if(R(),t!==!1&&a.animate(),E(0),k.value===!0){const V=a.instances[ae.value];V!==void 0&&V.belowBreakpoint===!0&&V.hide(!1),K(1),a.isContainer.value!==!0&&x(!0)}else K(0),t!==!1&&Se(!1);g(()=>{t!==!1&&Se(!0),S!==!0&&i("show",t)},Re)}function _(t,S){W(),t!==!1&&a.animate(),K(0),E(N.value*C.value),ke(),S!==!0?g(()=>{i("hide",t)},Re):q()}const{show:L,hide:Q}=et({showing:p,hideOnRouteChange:u,handleShow:O,handleHide:_}),{addToHistory:R,removeFromHistory:W}=Ht(p,Q,u),D={belowBreakpoint:k,hide:Q},A=r(()=>e.side==="right"),N=r(()=>(l.lang.rtl===!0?-1:1)*(A.value===!0?1:-1)),ue=B(0),U=B(!1),le=B(!1),se=B(C.value*N.value),ae=r(()=>A.value===!0?"left":"right"),b=r(()=>p.value===!0&&k.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:C.value:0),z=r(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(A.value?"R":"L")>-1||l.platform.is.ios===!0&&a.isContainer.value===!0),M=r(()=>e.overlay===!1&&p.value===!0&&k.value===!1),xe=r(()=>e.overlay===!0&&p.value===!0&&k.value===!1),tt=r(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&U.value===!1?" hidden":"")),at=r(()=>({backgroundColor:`rgba(0,0,0,${ue.value*.4})`})),Qe=r(()=>A.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),nt=r(()=>A.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),lt=r(()=>{const t={};return a.header.space===!0&&Qe.value===!1&&(z.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&nt.value===!1&&(z.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),ot=r(()=>{const t={width:`${C.value}px`,transform:`translateX(${se.value}px)`};return k.value===!0?t:Object.assign(t,lt.value)}),it=r(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),rt=r(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(d.value===!0?" q-drawer--dark q-dark":"")+(U.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(k.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${c.value===!0?"mini":"standard"}`+(z.value===!0||M.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),ut=r(()=>{const t=l.lang.rtl===!0?e.side:ae.value;return[[Te,ft,void 0,{[t]:!0,mouse:!0}]]}),st=r(()=>{const t=l.lang.rtl===!0?ae.value:e.side;return[[Te,Ve,void 0,{[t]:!0,mouse:!0}]]}),dt=r(()=>{const t=l.lang.rtl===!0?ae.value:e.side;return[[Te,Ve,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function _e(){vt(k,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}T(k,t=>{t===!0?(m=p.value,p.value===!0&&Q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&m!==!1&&(p.value===!0?(E(0),K(0),ke()):L(!1))}),T(()=>e.side,(t,S)=>{a.instances[S]===D&&(a.instances[S]=void 0,a[S].space=!1,a[S].offset=0),a.instances[t]=D,a[t].size=C.value,a[t].space=M.value,a[t].offset=b.value}),T(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&_e()}),T(()=>e.behavior+e.breakpoint,_e),T(a.isContainer,t=>{p.value===!0&&x(t!==!0),t===!0&&_e()}),T(a.scrollbarWidth,()=>{E(p.value===!0?0:void 0)}),T(b,t=>{G("offset",t)}),T(M,t=>{i("onLayout",t),G("space",t)}),T(A,()=>{E()}),T(C,t=>{E(),Ce(e.miniToOverlay,t)}),T(()=>e.miniToOverlay,t=>{Ce(t,C.value)}),T(()=>l.lang.rtl,()=>{E()}),T(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ct(),a.animate())}),T(c,t=>{i("miniState",t)});function E(t){t===void 0?Ae(()=>{t=p.value===!0?0:C.value,E(N.value*t)}):(a.isContainer.value===!0&&A.value===!0&&(k.value===!0||Math.abs(t)===C.value)&&(t+=N.value*a.scrollbarWidth.value),se.value=t)}function K(t){ue.value=t}function Se(t){const S=t===!0?"remove":a.isContainer.value!==!0?"add":"";S!==""&&document.body.classList[S]("q-body--drawer-toggle")}function ct(){h!==null&&clearTimeout(h),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,h=setTimeout(()=>{h=null,le.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ft(t){if(p.value!==!1)return;const S=C.value,V=fe(t.distance.x,0,S);if(t.isFinal===!0){V>=Math.min(75,S)===!0?L():(a.animate(),K(0),E(N.value*S)),U.value=!1;return}E((l.lang.rtl===!0?A.value!==!0:A.value)?Math.max(S-V,0):Math.min(0,V-S)),K(fe(V/S,0,1)),t.isFirst===!0&&(U.value=!0)}function Ve(t){if(p.value!==!0)return;const S=C.value,V=t.direction===e.side,de=(l.lang.rtl===!0?V!==!0:V)?fe(t.distance.x,0,S):0;if(t.isFinal===!0){Math.abs(de)<Math.min(75,S)===!0?(a.animate(),K(1),E(0)):Q(),U.value=!1;return}E(N.value*de),K(fe(1-de/S,0,1)),t.isFirst===!0&&(U.value=!0)}function ke(){x(!1),Se(!0)}function G(t,S){a.update(e.side,t,S)}function vt(t,S){t.value!==S&&(t.value=S)}function Ce(t,S){G("size",t===!0?e.miniWidth:S)}return a.instances[e.side]=D,Ce(e.miniToOverlay,C.value),G("space",M.value),G("offset",b.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),Oe(()=>{i("onLayout",M.value),i("miniState",c.value),m=e.showIfAbove===!0;const t=()=>{(p.value===!0?O:_)(!1,!0)};if(a.totalWidth.value!==0){Ae(t);return}y=T(a.totalWidth,()=>{y(),y=void 0,p.value===!1&&e.showIfAbove===!0&&k.value===!1?L(!1):t()})}),ge(()=>{y!==void 0&&y(),h!==null&&(clearTimeout(h),h=null),p.value===!0&&ke(),a.instances[e.side]===D&&(a.instances[e.side]=void 0,G("size",0),G("offset",0),G("space",!1))}),()=>{const t=[];k.value===!0&&(e.noSwipeOpen===!1&&t.push(be(w("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ut.value)),t.push(Fe("div",{ref:"backdrop",class:tt.value,style:at.value,"aria-hidden":"true",onClick:Q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>dt.value)));const S=c.value===!0&&f.mini!==void 0,V=[w("div",oe(Y({},s),{key:""+S,class:[it.value,s.class]}),S===!0?f.mini():me(f.default))];return e.elevated===!0&&p.value===!0&&V.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(Fe("aside",{ref:"content",class:rt.value,style:ot.value},V,"contentclose",e.noSwipeClose!==!0&&k.value===!0,()=>st.value)),w("div",{class:"q-drawer-container"},t)}}}),na=J({name:"QPageContainer",setup(e,{slots:f}){const{proxy:{$q:i}}=re(),s=he(we,j);if(s===j)return console.error("QPageContainer needs to be child of QLayout"),j;We(St,!0);const o=r(()=>{const l={};return s.header.space===!0&&(l.paddingTop=`${s.header.size}px`),s.right.space===!0&&(l[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(l.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(l[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),l});return()=>w("div",{class:"q-page-container",style:o.value},me(f.default))}}),la=J({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:f,emit:i}){const{proxy:{$q:s}}=re(),o=B(null),l=B(s.screen.height),d=B(e.container===!0?0:s.screen.width),x=B({position:0,direction:"down",inflectionPoint:0}),g=B(0),q=B(kt.value===!0?0:qe()),a=r(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),m=r(()=>e.container===!1?{minHeight:s.screen.height+"px"}:null),h=r(()=>q.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${q.value}px`}:null),y=r(()=>q.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${q.value}px`,width:`calc(100% + ${q.value}px)`}:null);function k(_){if(e.container===!0||document.qScrollPrevented!==!0){const L={position:_.position.top,direction:_.direction,directionChanged:_.directionChanged,inflectionPoint:_.inflectionPoint.top,delta:_.delta.top};x.value=L,e.onScroll!==void 0&&i("scroll",L)}}function c(_){const{height:L,width:Q}=_;let R=!1;l.value!==L&&(R=!0,l.value=L,e.onScrollHeight!==void 0&&i("scrollHeight",L),p()),d.value!==Q&&(R=!0,d.value=Q),R===!0&&e.onResize!==void 0&&i("resize",_)}function C({height:_}){g.value!==_&&(g.value=_,p())}function p(){if(e.container===!0){const _=l.value>g.value?qe():0;q.value!==_&&(q.value=_)}}let u=null;const O={instances:{},view:r(()=>e.view),isContainer:r(()=>e.container),rootRef:o,height:l,containerHeight:g,scrollbarWidth:q,totalWidth:r(()=>d.value+q.value),rows:r(()=>{const _=e.view.toLowerCase().split(" ");return{top:_[0].split(""),middle:_[1].split(""),bottom:_[2].split("")}}),header:ce({size:0,offset:0,space:!1}),right:ce({size:300,offset:0,space:!1}),footer:ce({size:0,offset:0,space:!1}),left:ce({size:300,offset:0,space:!1}),scroll:x,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(_,L,Q){O[_][L]=Q}};if(We(we,O),qe()>0){let Q=function(){_=null,L.classList.remove("hide-scrollbar")},R=function(){if(_===null){if(L.scrollHeight>s.screen.height)return;L.classList.add("hide-scrollbar")}else clearTimeout(_);_=setTimeout(Q,300)},W=function(D){_!==null&&D==="remove"&&(clearTimeout(_),Q()),window[`${D}EventListener`]("resize",R)},_=null;const L=document.body;T(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),Ct(()=>{W("remove")})}return()=>{const _=qt(f.default,[w(Wt,{onScroll:k}),w($e,{onResize:c})]),L=w("div",{class:a.value,style:m.value,ref:e.container===!0?void 0:o,tabindex:-1},_);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:o},[w($e,{onResize:C}),w("div",{class:"absolute-full",style:h.value},[w("div",{class:"scroll",style:y.value},[L])])]):L}}});function oa(){return he(Bt)}const ia=[w("path",{d:"M0 50A50 50 0 0 1 50 0L50 50L0 50",fill:"currentColor",opacity:"0.5"},[w("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"0.8s",repeatCount:"indefinite"})]),w("path",{d:"M50 0A50 50 0 0 1 100 50L50 50L50 0",fill:"currentColor",opacity:"0.5"},[w("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"1.6s",repeatCount:"indefinite"})]),w("path",{d:"M100 50A50 50 0 0 1 50 100L50 50L100 50",fill:"currentColor",opacity:"0.5"},[w("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2.4s",repeatCount:"indefinite"})]),w("path",{d:"M50 100A50 50 0 0 1 0 50L50 50L50 100",fill:"currentColor",opacity:"0.5"},[w("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"3.2s",repeatCount:"indefinite"})])];var ra=J({name:"QSpinnerPie",props:Tt,setup(e){const{cSize:f,classes:i}=Lt(e);return()=>w("svg",{class:i.value,width:f.value,height:f.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},ia)}});const ua={key:0,class:"text-h6"},sa={key:1,class:"text-h6"},da=ye({props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:f}){const i=e,s=B(!1),o=r({get:()=>i.modelValue,set:m=>f("update:modelValue",m)}),l=pe(),d=B({title:"",remark:"",id:""}),x=B({title:"",remark:"",id:""}),g=r(()=>{const m=d.value,h=x.value;return(m==null?void 0:m.title.trim())===(h==null?void 0:h.title.trim())&&(m==null?void 0:m.remark.trim())===(h==null?void 0:h.remark.trim())}),q=r(()=>{const m=d.value;return(m==null?void 0:m.title.trim())!==""&&!g.value});Oe(()=>{Ue(()=>{o.value||(d.value=Object.assign({},x.value))})});async function a(){const m=d.value;if(!m){l.commit("error",{error:"\u8BF7\u8F93\u5165\u7EC4\u7EC7\u4FE1\u606F"});return}l.commit("cleanError"),s.value=!0,m.id!==""?await l.dispatch("updateOrg",{id:m.id,title:m.title.trim(),remark:m.remark.trim()}):await l.dispatch("createOrg",{title:m.title.trim(),remark:m.remark.trim()}),l.state.Root.currentError===void 0&&(o.value=!1),s.value=!1}return(m,h)=>(X(),Le(Nt,{modelValue:I(o),"onUpdate:modelValue":h[2]||(h[2]=y=>Ke(o)?o.value=y:null),"no-backdrop-dismiss":!I(g)},{default:v(()=>[n(Dt,{class:"tw-w-96 q-pa-sm"},{default:v(()=>[n(Kt,{onSubmit:a},{default:v(()=>[n(Be,null,{default:v(()=>[d.value.id===""?(X(),ie("div",ua,"\u521B\u5EFA\u7EC4\u7EC7")):(X(),ie("div",sa,"\u7F16\u8F91\u7EC4\u7EC7"))]),_:1}),n(Be,null,{default:v(()=>[n(He,{modelValue:d.value.title,"onUpdate:modelValue":h[0]||(h[0]=y=>d.value.title=y),type:"text",label:"\u7EC4\u7EC7\u540D\u79F0",square:"",filled:"",class:"tw-mb-4"},null,8,["modelValue"]),n(He,{modelValue:d.value.remark,"onUpdate:modelValue":h[1]||(h[1]=y=>d.value.remark=y),type:"textarea",label:"\u5907\u6CE8",square:"",filled:""},null,8,["modelValue"])]),_:1}),n(Be,{align:"right",class:"tw-flex tw-gap-4 tw-flex-col-reverse lg:tw-flex-row lg:tw-justify-end"},{default:v(()=>[be(n(te,{flat:"",label:"\u53D6\u6D88",class:"lg:tw-w-24 tw-w-full"},null,512),[[Gt]]),n(te,{color:"primary","text-color":"black",type:"submit",label:d.value.id===""?"\u521B\u5EFA":"\u4FDD\u5B58",disable:!I(q),class:"lg:tw-w-24 tw-w-full",loading:s.value},null,8,["label","disable","loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","no-backdrop-dismiss"]))}}),ca={class:"text-center"},De=ye({props:{behavior:{type:String,default:"default"}},setup(e){const f=pe(),i=B([]);async function s(d,x){var q;const g=[{label:"\u901A\u7528",value:"baseorg"}];(q=f.state.Root.userOrgs)==null||q.forEach((a,m,h)=>{a.id!=="baseorg"&&g.push({label:a.title,value:a.id})}),i.value=g,x(()=>{console.log("select done")})}s("",()=>{});const o=r({get:()=>f.state.Root.currentOrg,set:d=>{!d||(o.value?f.dispatch("switchOrg",d):f.commit("setCurrentOrg",d),localStorage.setItem("gc_choosed_org",d))}});Oe(()=>{if(!o.value){const d=Ge();o.value=d.params.orgId||"baseorg",f.commit("setCurrentOrg",o.value)}});const l=B(!1);return(d,x)=>(X(),ie(Qt,null,[n(da,{modelValue:l.value,"onUpdate:modelValue":x[0]||(x[0]=g=>l.value=g)},null,8,["modelValue"]),n(I(Mt),{ref:"search",modelValue:I(o),"onUpdate:modelValue":x[2]||(x[2]=g=>Ke(o)?o.value=g:null),dense:"",dark:"",color:"text-white",standout:"bg-white text-black","emit-value":"","map-options":"",label:"\u9009\u62E9\u7EC4\u7EC7",options:i.value,behavior:e.behavior,style:{width:"300px"},onFilter:s},{"no-option":v(()=>[n(P,null,{default:v(()=>[n($,null,{default:v(()=>[F("div",ca,[n(ra,{color:"grey-5",size:"24px"})])]),_:1})]),_:1})]),append:v(()=>[n(H,{name:"add",onClick:x[1]||(x[1]=$t(g=>l.value=!0,["stop","prevent"]))})]),option:v(g=>[n(P,It(g.itemProps,{class:"tw-text-white"}),{default:v(()=>[n($,null,{default:v(()=>[n(Ie,{innerHTML:g.opt.label},null,8,["innerHTML"])]),_:2},1024),n($,{side:"",class:Ot({"default-type":!g.opt.type})},{default:v(()=>[n(te,{outline:"",dense:"","no-caps":"","text-color":"grey-5",size:"12px",class:"tw-bg-white q-px-sm"},{default:v(()=>[Z(ne(g.opt.type||"\u5207\u6362")+" ",1),n(H,{name:"subdirectory_arrow_left",size:"14px"})]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)]),_:1},8,["modelValue","options","behavior"])],64))}}),fa={class:"tw-flex tw-bg-primary tw-justify-start tw-space-x-2 tw-items-center tw-h-full tw-py-4 tw-px-3.5 tw-box-border tw-w-full tw-text-black tw-overflow-hidden"},va={class:"tw-w-10 tw-h-10 tw-bg-gray-700 tw-rounded-sm tw-flex tw-items-center tw-justify-center"},ma={class:"tw-text-xs tw-font-bold tw-rounded tw-leading-3 tw-text-white"},ga={class:"q-item__section--main tw-flex tw-w-full tw-justify-between"},ha={class:"tw-flex tw-flex-col tw-space-y-2 tw-overflow-hidden"},wa={class:"tw-text-base tw-leading-4 tw-whitespace-nowrap tw-overflow-hidden tw-overflow-ellipsis"},ba={class:"tw-cursor-pointer tw-text-xs tw-leading-3"},ya=ye({setup(e){const i=pe().getters.currentUser,s=Yt(i.name),o=Vt(),l=()=>{o.push({name:"user-profile"})};return(d,x)=>(X(),ie("div",fa,[F("div",va,[F("p",ma,ne(I(s)),1)]),F("div",ga,[F("div",ha,[F("p",wa,ne(I(i).name),1),F("p",ba,ne(I(i).account),1)]),n(te,{flat:"",dense:"",size:"md",icon:"more_horiz",round:"",onClick:l})])]))}});async function pa(){const e=await zt.get("/version");return e.data.meta.code===0?e.data.response:""}const xa=F("span",{class:"tw-text-lg tw-pl-2 tw-tracking-wide tw-font-bold tw-cursor-pointer"},"GopherCron",-1),_a={key:0,class:"tw-text-sm"},Sa={class:"tw-hidden md:tw-flex"},ka=F("svg",{fill:"#fff",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[F("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1),Ca=Z("\u770B\u677F"),qa=Z("\u9879\u76EE\u7BA1\u7406"),Ba=Z("\u4EFB\u52A1\u7F16\u6392"),Ta=Z("\u7528\u6237\u7BA1\u7406"),La=Z("\u8282\u70B9\u7BA1\u7406"),$a=Z("\u9000\u51FA"),Ya=ye({setup(e){const f=oa(),i=B(!0);f.screen.lt.md&&(i.value=!1);const s=B(!0),o=B(!1),l=pe(),d=Ge();Ue(()=>{if(!d.name)return;const h=["user-admin","node-admin"];o.value=h.includes(d.name.toString())});const x=r(()=>f.screen.lt.md?i.value:!s.value),g=B("");(async()=>{const h=await pa();g.value=h})();const a=r(()=>l.getters.notificationSetting);function m(){l.dispatch("changeNotificationStatus")}return(h,y)=>{const k=Et("router-view");return X(),Le(la,{view:"hHh Lpr lff",class:"rounded-borders tw-flex tw-flex-no-wrap tw-h-full tw-w-full"},{default:v(()=>[n(Jt,{class:"bg-black"},{default:v(()=>[n(Xt,{class:"tw-gap-4"},{default:v(()=>[n(te,{flat:"",round:"",dense:"",icon:"menu",onClick:y[0]||(y[0]=c=>i.value=!i.value)}),xa,g.value?(X(),ie("span",_a,"("+ne(g.value)+")",1)):Me("",!0),F("div",Sa,[n(De)]),n(At),n(te,{flat:"",round:"",dense:"",icon:I(a).status?"notifications":"notifications_off",onClick:m},{default:v(()=>[n(Ft,null,{default:v(()=>[Z(ne(I(a).status?"\u70B9\u51FB\u5173\u95ED\u4EFB\u52A1\u72B6\u6001\u901A\u77E5":"\u70B9\u51FB\u5F00\u542F\u4EFB\u52A1\u72B6\u6001\u901A\u77E5"),1)]),_:1})]),_:1},8,["icon"]),n(te,{flat:"",round:"",dense:"",href:"https://github.com/holdno/gopherCron",target:"_blank"},{default:v(()=>[ka]),_:1})]),_:1})]),_:1}),n(aa,{modelValue:i.value,"onUpdate:modelValue":y[2]||(y[2]=c=>i.value=c),mini:s.value,width:200,breakpoint:I(f).screen.sizes.md,onMouseover:y[3]||(y[3]=c=>s.value=!1),onMouseout:y[4]||(y[4]=c=>s.value=!0)},{default:v(()=>[n(Ut,{style:{"margin-bottom":"80px",height:"calc(100% - 80px)"}},{default:v(()=>[n(jt,{padding:""},{default:v(()=>[be(n(P,{class:"tw-flex md:tw-hidden"},{default:v(()=>[n(De,{behavior:"dialog"})]),_:1},512),[[je,I(x)]]),n(P,{clickable:"",to:{name:"summary",params:{orgId:I(l).getters.currentOrg}}},{default:v(()=>[n($,{avatar:""},{default:v(()=>[n(H,{name:"timeline"})]),_:1}),n($,{class:"tw-font-medium"},{default:v(()=>[Ca]),_:1})]),_:1},8,["to"]),n(P,{clickable:"",to:{name:"projects",params:{orgId:I(l).getters.currentOrg}}},{default:v(()=>[n($,{avatar:""},{default:v(()=>[n(H,{name:"view_list"})]),_:1}),n($,{class:"tw-font-medium"},{default:v(()=>[qa]),_:1})]),_:1},8,["to"]),n(P,{clickable:"",to:{name:"workflows",params:{orgId:I(l).getters.currentOrg}}},{default:v(()=>[n($,{avatar:""},{default:v(()=>[n(H,{name:"mediation"})]),_:1}),n($,{class:"tw-font-medium"},{default:v(()=>[Ba]),_:1})]),_:1},8,["to"]),n(ve,{class:"tw-bg-stone-800"}),I(l).getters.isAdmin?(X(),Le(ta,{key:0,modelValue:o.value,"onUpdate:modelValue":y[1]||(y[1]=c=>o.value=c),label:"\u7CFB\u7EDF\u7BA1\u7406","header-class":"tw-font-medium",icon:"admin_panel_settings"},{default:v(()=>[n(P,{clickable:"","inset-level":.2,to:{name:"user-admin",params:{orgId:I(l).getters.currentOrg}}},{default:v(()=>[n($,{avatar:""},{default:v(()=>[n(H,{name:"supervisor_account"})]),_:1}),n($,{class:"tw-font-medium"},{default:v(()=>[Ta]),_:1})]),_:1},8,["inset-level","to"]),n(P,{clickable:"","inset-level":.2,to:{name:"node-admin",params:{orgId:I(l).getters.currentOrg}}},{default:v(()=>[n($,{avatar:""},{default:v(()=>[n(H,{name:"dynamic_form"})]),_:1}),n($,{class:"tw-font-medium"},{default:v(()=>[La]),_:1})]),_:1},8,["inset-level","to"])]),_:1},8,["modelValue"])):Me("",!0),n(ve,{class:"tw-bg-stone-800"}),n(P,{clickable:"",to:{name:"logout"}},{default:v(()=>[n($,{avatar:""},{default:v(()=>[n(H,{name:"logout"})]),_:1}),n($,{class:"tw-font-medium"},{default:v(()=>[$a]),_:1})]),_:1})]),_:1})]),_:1}),n(ya,{class:"tw-absolute tw-bottom-0 tw-left-0 tw-w-full",style:{height:"80px"}})]),_:1},8,["modelValue","mini","breakpoint"]),n(na,{class:"tw-w-full tw-h-full tw-box-border"},{default:v(()=>[n(k)]),_:1})]),_:1})}}});export{Ya as default};
