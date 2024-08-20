import{p as y,J as T,G as U,r as A,o as s,f as o,b as t,e as v,I as E,t as n,i as a,F as c,A as u,h as b,v as z,B as G,q as h}from"./app-cfc4db12.js";import{_ as I,D as J}from"./DropZone-938f4edc.js";import{u as R}from"./categories-95798628.js";import{u as Z}from"./products-41943570.js";import{d as L,u as $,a as p,r as j,m as K}from"./rules-b8b4ca5d.js";const O={class:"row my-5"},Q={class:"col-md-8"},W={class:"card border-0 shadow-sm"},X={class:"card-body"},Y={class:"mb-3"},tt=t("label",{for:"product-title",class:"form-label"}," Nombre ",-1),et={class:"text-danger mt-1"},st={class:"text-danger mt-1"},ot={class:"mb-3"},at=t("label",{for:"product-content",class:"form-label"}," Descripción ",-1),lt={class:"text-danger mt-1"},it={class:"text-danger mt-1"},nt={class:"col-md-4"},rt={class:"card border-0 shadow-sm"},dt={class:"card-body"},ct=t("h6",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-down-square",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"})]),h(" Action ")],-1),ut={class:"mt-3 text-center"},mt=["disabled"],ht={class:""},_t={key:0},vt={key:1},bt=["disabled"],pt={class:""},gt={key:0},wt={key:1},ft=t("h6",{class:"mt-3"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-down-square",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"})]),h(" Category ")],-1),Vt={class:"mb-3"},xt={class:"text-danger mt-1"},yt={class:"text-danger mt-1"},zt={class:"mb-3"},Lt=t("h6",{class:"mt-3"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-down-square",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"})]),h(" Thumbnail ")],-1),Ct={class:"text-danger mt-1"},Mt={class:"mb-3"},qt=t("h6",{class:"mt-3"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-down-square",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"})]),h(" Thumbnail ")],-1),Bt={class:"text-danger mt-1"},Nt={__name:"Create",setup(Ht){L("required",j),L("min",K),y(!0);const C={title:"required|min:5",content:"required|min:50",categories:"required"},{validate:M,errors:_}=$({validationSchema:C}),{value:q}=p("title",null,{initialValue:""}),{value:B}=p("content",null,{initialValue:""}),{value:H}=p("categories",null,{initialValue:"",label:"category"}),{categoryList:k,getCategoryList:D}=R(),{storeProduct:F,validationErrors:d,isLoading:r}=Z(),l=T({title:q,content:B,categories:H,thumbnail:[]});y("");function S(){M().then(m=>{m.valid&&F(l)})}function P(m){l.thumbnail=Array.from(m.target.files)}return U(()=>{D()}),(m,i)=>{var g,w,f,V,x;const N=A("v-select");return s(),o("form",{onSubmit:G(S,["prevent"])},[t("div",O,[t("div",Q,[t("div",W,[t("div",X,[t("div",Y,[tt,v(t("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>l.title=e),id:"product-title",type:"text",class:"form-control"},null,512),[[E,l.title]]),t("div",et,n(a(_).title),1),t("div",st,[(s(!0),o(c,null,u((g=a(d))==null?void 0:g.title,e=>(s(),o("div",null,n(e),1))),256))])]),t("div",ot,[at,b(I,{modelValue:l.content,"onUpdate:modelValue":i[1]||(i[1]=e=>l.content=e)},null,8,["modelValue"]),t("div",lt,n(a(_).content),1),t("div",it,[(s(!0),o(c,null,u((w=a(d))==null?void 0:w.content,e=>(s(),o("div",null,n(e),1))),256))])])])])]),t("div",nt,[t("div",rt,[t("div",dt,[ct,t("div",ut,[t("button",{disabled:a(r),class:"btn btn btn-outline-primary me-2"},[v(t("div",ht,null,512),[[z,a(r)]]),a(r)?(s(),o("span",_t,"Processing...")):(s(),o("span",vt,"Save Draft"))],8,mt),t("button",{disabled:a(r),class:"btn btn-primary"},[v(t("div",pt,null,512),[[z,a(r)]]),a(r)?(s(),o("span",gt,"Processing...")):(s(),o("span",wt,"Publish"))],8,bt)]),ft,t("div",Vt,[b(N,{multiple:"",modelValue:l.categories,"onUpdate:modelValue":i[2]||(i[2]=e=>l.categories=e),options:a(k),reduce:e=>e.id,label:"name",class:"form-control",placeholder:"Select category"},null,8,["modelValue","options","reduce"]),t("div",xt,n(a(_).categories),1),t("div",yt,[(s(!0),o(c,null,u((f=a(d))==null?void 0:f.categories,e=>(s(),o("div",null,n(e),1))),256))])]),t("div",zt,[Lt,t("input",{onChange:P,type:"file",class:"form-control",id:"thumbnail",multiple:""},null,32),t("div",Ct,[(s(!0),o(c,null,u((V=a(d))==null?void 0:V.thumbnail,e=>(s(),o("div",null,n(e),1))),256))])]),t("div",Mt,[qt,b(J,{modelValue:l.thumbnail,"onUpdate:modelValue":i[3]||(i[3]=e=>l.thumbnail=e)},null,8,["modelValue"]),t("div",Bt,[(s(!0),o(c,null,u((x=a(d))==null?void 0:x.thumbnail,e=>(s(),o("div",null,n(e),1))),256))])])])])])])],32)}}};export{Nt as default};
