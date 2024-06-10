import{a as Le}from"./axios-B4uVmeYG.js";import{g as v,O as w,y as we,m,x as $,P as x,p as g,b as C,e as P,i as xe,j as b,k as n,Q as V,c as F,z as K,R as N,S as je,U as Be,W as $e,X as Te,r as j,L as Re,o as y,Y as _,Z as Ee,_ as O,w as c,n as q,s as W,q as A,M as pe}from"./index-BScHaBDr.js";import{V as De}from"./VContainer-DelsTqgR.js";import{a as T,c as Y,o as Oe,p as H,q as J,f as Q,h as X,r as ze,l as Z,k,n as L,s as ee,m as Me,b as Ge,t as Ue,v as Fe,w as Ke,x as qe,R as We,u as Ye,g as He,y as Je,z as Qe,A as Xe,B as Ze,L as et,j as B,_ as tt}from"./_plugin-vue_export-helper-HYuAo6gy.js";function at(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return v()({name:t??w(we(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...m()},setup(a,s){let{slots:d}=s;return()=>{var i;return $(a.tag,{class:[e,a.class],style:a.style},(i=d.default)==null?void 0:i.call(d))}}})}const te=x.reduce((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e),{}),ae=x.reduce((e,l)=>{const t="offset"+w(l);return e[t]={type:[String,Number],default:null},e},{}),ne=x.reduce((e,l)=>{const t="order"+w(l);return e[t]={type:[String,Number],default:null},e},{}),z={col:Object.keys(te),offset:Object.keys(ae),order:Object.keys(ne)};function nt(e,l,t){let a=e;if(!(t==null||t===!1)){if(l){const s=l.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const lt=["auto","start","end","center","baseline","stretch"],st=g({cols:{type:[Boolean,String,Number],default:!1},...te,offset:{type:[String,Number],default:null},...ae,order:{type:[String,Number],default:null},...ne,alignSelf:{type:String,default:null,validator:e=>lt.includes(e)},...m(),...C()},"VCol"),I=v()({name:"VCol",props:st(),setup(e,l){let{slots:t}=l;const a=P(()=>{const s=[];let d;for(d in z)z[d].forEach(r=>{const u=e[r],o=nt(d,r,u);o&&s.push(o)});const i=s.some(r=>r.startsWith("v-col-"));return s.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return $(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),R=["start","end","center"],le=["space-between","space-around","space-evenly"];function E(e,l){return x.reduce((t,a)=>{const s=e+w(a);return t[s]=l(),t},{})}const it=[...R,"baseline","stretch"],se=e=>it.includes(e),ie=E("align",()=>({type:String,default:null,validator:se})),dt=[...R,...le],de=e=>dt.includes(e),re=E("justify",()=>({type:String,default:null,validator:de})),rt=[...R,...le,"stretch"],ce=e=>rt.includes(e),oe=E("alignContent",()=>({type:String,default:null,validator:ce})),M={align:Object.keys(ie),justify:Object.keys(re),alignContent:Object.keys(oe)},ct={align:"align",justify:"justify",alignContent:"align-content"};function ot(e,l,t){let a=ct[e];if(t!=null){if(l){const s=l.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const ut=g({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:se},...ie,justify:{type:String,default:null,validator:de},...re,alignContent:{type:String,default:null,validator:ce},...oe,...m(),...C()},"VRow"),G=v()({name:"VRow",props:ut(),setup(e,l){let{slots:t}=l;const a=P(()=>{const s=[];let d;for(d in M)M[d].forEach(i=>{const r=e[i],u=ot(d,i,r);u&&s.push(u)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return $(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),ue=v()({name:"VCardActions",props:m(),setup(e,l){let{slots:t}=l;return xe({VBtn:{slim:!0,variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ft=g({opacity:[Number,String],...m(),...C()},"VCardSubtitle"),fe=v()({name:"VCardSubtitle",props:ft(),setup(e,l){let{slots:t}=l;return b(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),vt=at("v-card-title"),mt=g({start:Boolean,end:Boolean,icon:V,image:String,text:String,...m(),...T(),...Y(),...Oe(),...C(),...F(),...H({variant:"flat"})},"VAvatar"),U=v()({name:"VAvatar",props:mt(),setup(e,l){let{slots:t}=l;const{themeClasses:a}=K(e),{colorClasses:s,colorStyles:d,variantClasses:i}=J(e),{densityClasses:r}=Q(e),{roundedClasses:u}=X(e),{sizeClasses:o,sizeStyles:f}=ze(e);return b(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,r.value,u.value,o.value,i.value,e.class],style:[d.value,f.value,e.style]},{default:()=>[t.default?n(L,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?n(Z,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(k,{key:"icon",icon:e.icon},null):e.text,ee(!1,"v-avatar")]})),{}}}),gt=g({appendAvatar:String,appendIcon:V,prependAvatar:String,prependIcon:V,subtitle:[String,Number],title:[String,Number],...m(),...T()},"VCardItem"),yt=v()({name:"VCardItem",props:gt(),setup(e,l){let{slots:t}=l;return b(()=>{var o;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||t.prepend),d=!!(e.appendAvatar||e.appendIcon),i=!!(d||t.append),r=!!(e.title!=null||t.title),u=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[s&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(L,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(N,null,[e.prependAvatar&&n(U,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(k,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[r&&n(vt,{key:"title"},{default:()=>{var f;return[((f=t.title)==null?void 0:f.call(t))??e.title]}}),u&&n(fe,{key:"subtitle"},{default:()=>{var f;return[((f=t.subtitle)==null?void 0:f.call(t))??e.subtitle]}}),(o=t.default)==null?void 0:o.call(t)]),i&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(L,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(N,null,[e.appendIcon&&n(k,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(U,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),kt=g({opacity:[Number,String],...m(),...C()},"VCardText"),Ct=v()({name:"VCardText",props:kt(),setup(e,l){let{slots:t}=l;return b(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),bt=g({appendAvatar:String,appendIcon:V,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:V,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Me(),...m(),...T(),...je(),...Ge(),...Ue(),...Fe(),...Ke(),...Y(),...qe(),...C(),...F(),...H({variant:"elevated"})},"VCard"),Vt=v()({name:"VCard",directives:{Ripple:We},props:bt(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:s}=K(e),{borderClasses:d}=Ye(e),{colorClasses:i,colorStyles:r,variantClasses:u}=J(e),{densityClasses:o}=Q(e),{dimensionStyles:f}=Be(e),{elevationClasses:ve}=He(e),{loaderClasses:me}=Je(e),{locationStyles:ge}=Qe(e),{positionClasses:ye}=Xe(e),{roundedClasses:ke}=X(e),h=Ze(e,t),Ce=P(()=>e.link!==!1&&h.isLink.value),S=P(()=>!e.disabled&&e.link!==!1&&(e.link||h.isClickable.value));return b(()=>{const be=Ce.value?"a":e.tag,Ve=!!(a.title||e.title!=null),he=!!(a.subtitle||e.subtitle!=null),Se=Ve||he,_e=!!(a.append||e.appendAvatar||e.appendIcon),Ae=!!(a.prepend||e.prependAvatar||e.prependIcon),Ie=!!(a.image||e.image),Pe=Se||Ae||_e,Ne=!!(a.text||e.text!=null);return $e(n(be,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":S.value},s.value,d.value,i.value,o.value,ve.value,me.value,ye.value,ke.value,u.value,e.class],style:[r.value,f.value,ge.value,e.style],href:h.href.value,onClick:S.value&&h.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var p;return[Ie&&n("div",{key:"image",class:"v-card__image"},[a.image?n(L,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(Z,{key:"image-img",cover:!0,src:e.image},null)]),n(et,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),Pe&&n(yt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),Ne&&n(Ct,{key:"text"},{default:()=>{var D;return[((D=a.text)==null?void 0:D.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(ue,null,{default:a.actions}),ee(S.value,"v-card")]}}),[[Te("ripple"),S.value&&e.ripple]])}),{}}}),ht={key:0},St=["src"],_t={__name:"VideosList",async setup(e){let l,t;const a=async()=>{try{return(await Le.get("http://localhost:4000/videos")).data}catch(i){return console.error(i),[]}},s=j(([l,t]=Re(()=>a()),l=await l,t(),l)),d=[];for(let i=0;i<s.value.length;i+=2)d.push(s.value.slice(i,i+2));for(let i=0;i<d.length;i++)d[i]=d[i].map(r=>({...r,date:r.date,image:r.image}));return j(s.value.length),j("Raphaël"),(i,r)=>(y(),_("div",null,[d.length===0?(y(),_("p",ht,"Aucune vidéo n'a été trouvée.")):Ee("",!0),(y(),_(N,null,O(d,u=>n(G,null,{default:c(()=>[(y(!0),_(N,null,O(u,o=>(y(),q(I,{cols:"6"},{default:c(()=>[n(Vt,{color:"indigo"},{default:c(()=>[W("video",{controls:"",src:`http://localhost:4000${o.path}`,width:"100%"},null,8,St),n(fe,{class:"py-2"},{default:c(()=>[A(pe(o.creationDate),1)]),_:2},1024),n(ue,null,{default:c(()=>[n(G,null,{default:c(()=>[n(I,{cols:"4"},{default:c(()=>[n(B,{color:"white",icon:"",onClick:f=>i.deleteVideo(o.id),class:"justify-space-between"},{default:c(()=>[n(k,null,{default:c(()=>[A("mdi-star")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),n(I,{cols:"4"},{default:c(()=>[n(B,{color:"green",icon:"",onClick:r[0]||(r[0]=f=>i.alert("Not implemented yet"))},{default:c(()=>[n(k,null,{default:c(()=>[A("mdi-download")]),_:1})]),_:1})]),_:1}),n(I,{cols:"4"},{default:c(()=>[n(B,{color:"red",icon:"",onClick:r[1]||(r[1]=f=>i.alert("Not implemented yet")),class:"justify-space-between"},{default:c(()=>[n(k,null,{default:c(()=>[A("mdi-delete")]),_:1})]),_:1})]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:2},1024)),64))]))}},At={},It=W("h1",null,"Vos vidéos",-1);function Pt(e,l){const t=_t;return y(),q(De,null,{default:c(()=>[It,n(t)]),_:1})}const jt=tt(At,[["render",Pt]]);export{jt as default};
