import{b as ee,d as R,u as te,c as N,h as me,r as le,a as L,w as fe,i as $,e as B,f as j,g as ae,j as pe,k as _e,l,P as h,m as v,n as G,o as ye,p as ve,q as W,s as I,t as A,v as a,x as O,y as V,z as w,F as D,E as ge,A as y,B as H,C as J,D as be,G as K,H as Se}from"./index-b6a60fe4.js";import{v as M,L as X,u as x,E as Ee}from"./http-6a9f47e2.js";import{E as he,a as we,b as ke,c as Ce,d as Ve,e as xe}from"./el-table-column-efdb294f.js";import{E as $e,a as ze}from"./el-form-item-3fd3ea5e.js";const Pe=ee({prefixCls:{type:String}}),Z=R({name:"ElSpaceItem",props:Pe,setup(e,{slots:b}){const f=te("space"),i=N(()=>`${e.prefixCls||f.b()}__item`);return()=>me("div",{class:i.value},le(b,"default"))}}),Q={small:8,default:12,large:16};function je(e){const b=te("space"),f=N(()=>[b.b(),b.m(e.direction),e.class]),i=L(0),n=L(0),p=N(()=>{const s=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${n.value}px`}:{},r={alignItems:e.alignment};return[s,r,e.style]}),S=N(()=>{const s={paddingBottom:`${n.value}px`,marginRight:`${i.value}px`},r=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[s,r]});return fe(()=>{const{size:s="small",wrap:r,direction:u,fill:c}=e;if($(s)){const[d=0,_=0]=s;i.value=d,n.value=_}else{let d;B(s)?d=s:d=Q[s||"small"]||Q.small,(r||c)&&u==="horizontal"?i.value=n.value=d:u==="horizontal"?(i.value=d,n.value=0):(n.value=d,i.value=0)}}),{classes:f,containerStyle:p,itemStyle:S}}const Ne=ee({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:j([String,Object,Array]),default:""},style:{type:j([String,Array,Object]),default:""},alignment:{type:j(String),default:"center"},prefixCls:{type:String},spacer:{type:j([Object,String,Number,Array]),default:null,validator:e=>ae(e)||B(e)||pe(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:_e,validator:e=>B(e)||$(e)&&e.length===2&&e.every(B)}}),Be=R({name:"ElSpace",props:Ne,setup(e,{slots:b}){const{classes:f,containerStyle:i,itemStyle:n}=je(e);function p(S,s="",r=[]){const{prefixCls:u}=e;return S.forEach((c,d)=>{G(c)?$(c.children)&&c.children.forEach((_,k)=>{G(_)&&$(_.children)?p(_.children,`${s+k}-`,r):r.push(l(Z,{style:n.value,prefixCls:u,key:`nested-${s+k}`},{default:()=>[_]},h.PROPS|h.STYLE,["style","prefixCls"]))}):ye(c)&&r.push(l(Z,{style:n.value,prefixCls:u,key:`LoopKey${s+d}`},{default:()=>[c]},h.PROPS|h.STYLE,["style","prefixCls"]))}),r}return()=>{var S;const{spacer:s,direction:r}=e,u=le(b,"default",{key:0},()=>[]);if(((S=u.children)!=null?S:[]).length===0)return null;if($(u.children)){let c=p(u.children);if(s){const d=c.length-1;c=c.reduce((_,k,z)=>{const P=[..._,k];return z!==d&&P.push(l("span",{style:[n.value,r==="vertical"?"width: 100%":null],key:z},[ae(s)?s:v(s,h.TEXT)],h.STYLE)),P},[])}return l("div",{class:f.value,style:i.value},c,h.STYLE|h.CLASS)}return u.children}}}),Le=ve(Be),Te={install(e){e.directive("loading",M),e.config.globalProperties.$loading=X},directive:M,service:X};const Fe={class:"mb-5"},Ie={class:"dialog-footer"},Ae={class:"dialog-footer"},Ue=R({__name:"project",setup(e){const b=be(),f=L(!1),i=L(!1),n=W({name:"",desc:""}),p=W({users:[],id:""}),{isFetching:S,data:s,execute:r}=x("project/list").get(),{data:u}=x("user/list").get().json(),{isFetching:c,data:d,execute:_}=x("project/create",{immediate:!1}).post(n),k=async E=>{const o=Te.service({fullscreen:!0,text:"数据删除中"}),{data:m}=await x(`project/${E}`).delete();m&&(o.close(),r())};function z(){f.value=!0,n.name="",n.desc=""}async function P(){await _(),d&&(K.success("创建成功！"),f.value=!1,r())}function se(E){b.push({path:"/error",query:{id:E}})}async function ne(){const{error:E}=await x("project/member").put(p).json();E.value||(K.success("添加成功！"),i.value=!1,r())}function oe(E,o){i.value=!0,p.id=E;let m=[];u.value.forEach(g=>{o.find(T=>T._id===g._id)&&m.push(g._id)}),p.users=m}return(E,o)=>{const m=ge,g=ke,T=Ve,re=Le,ie=he,U=Ee,Y=$e,ce=ze,q=we,ue=xe,de=Ce,F=M;return y(),I(D,null,[A("div",Fe,[l(m,{type:"primary",onClick:z},{default:a(()=>[v("新增")]),_:1})]),O((y(),w(ie,{stripe:"",data:JSON.parse(V(s)),style:{width:"100%"}},{default:a(()=>[l(g,{prop:"_id",label:"apiKey"}),l(g,{prop:"name",label:"项目名称"}),l(g,{prop:"desc",label:"描述"}),l(g,{label:"项目成员"},{default:a(t=>[(y(!0),I(D,null,H(t.row.member,C=>(y(),w(T,{key:C._id,class:"ml-2",type:"success"},{default:a(()=>[v(Se(C.nickname),1)]),_:2},1024))),128))]),_:1}),l(g,{prop:"created_at",label:"创建时间"}),l(g,{label:"操作"},{default:a(t=>[l(re,null,{default:a(()=>[l(m,{type:"primary",size:"small",onClick:C=>se(t.row._id)},{default:a(()=>[v("查看日志")]),_:2},1032,["onClick"]),t.row.isCreated?(y(),w(m,{key:0,type:"primary",size:"small",onClick:C=>oe(t.row._id,t.row.member)},{default:a(()=>[v("添加项目成员")]),_:2},1032,["onClick"])):J("",!0),t.row.isCreated?(y(),w(m,{key:1,link:"",type:"primary",size:"small",onClick:C=>k(t.row._id)},{default:a(()=>[v("移除")]),_:2},1032,["onClick"])):J("",!0)]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[F,V(S)]]),l(q,{modelValue:f.value,"onUpdate:modelValue":o[3]||(o[3]=t=>f.value=t),title:"新增项目",width:"30%"},{footer:a(()=>[A("span",Ie,[l(m,{onClick:o[2]||(o[2]=t=>f.value=!1)},{default:a(()=>[v("取消")]),_:1}),O((y(),w(m,{type:"primary",onClick:P},{default:a(()=>[v(" 创建 ")]),_:1})),[[F,V(c)]])])]),default:a(()=>[l(ce,{form:n},{default:a(()=>[l(Y,{label:"项目名称"},{default:a(()=>[l(U,{modelValue:n.name,"onUpdate:modelValue":o[0]||(o[0]=t=>n.name=t)},null,8,["modelValue"])]),_:1}),l(Y,{label:"项目描述"},{default:a(()=>[l(U,{modelValue:n.desc,"onUpdate:modelValue":o[1]||(o[1]=t=>n.desc=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["form"])]),_:1},8,["modelValue"]),l(q,{modelValue:i.value,"onUpdate:modelValue":o[6]||(o[6]=t=>i.value=t),title:"添加项目成员",width:"30%"},{footer:a(()=>[A("span",Ae,[l(m,{onClick:o[5]||(o[5]=t=>i.value=!1)},{default:a(()=>[v("取消")]),_:1}),O((y(),w(m,{type:"primary",onClick:ne},{default:a(()=>[v(" 创建 ")]),_:1})),[[F,V(c)]])])]),default:a(()=>[l(de,{modelValue:p.users,"onUpdate:modelValue":o[4]||(o[4]=t=>p.users=t),multiple:"",style:{width:"100%"}},{default:a(()=>[(y(!0),I(D,null,H(V(u),t=>(y(),w(ue,{key:t._id,value:t._id,label:t.nickname},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)}}});export{Ue as default};