import{J as y,o as e,f as t,b as s,B as x,e as c,I as w,t as m,i as a,F,A as S,v as k}from"./app-0cb33df6.js";import{u as B}from"./categories-99b3fbd8.js";import{d as _,u as q,a as C,r as V,m as D}from"./rules-00a576d7.js";const E={class:"row container-fluid my-4 h-100"},L={class:"col-md-12"},M={class:"card border-0 shadow-sm"},T={class:"card-body"},A={class:"mb-3"},I=s("label",{for:"post-name",class:"form-label"}," Title ",-1),J={class:"text-danger mt-1"},N={class:"text-danger mt-1"},P={class:"mt-4"},R=["disabled"],U={class:""},j={key:0},z={key:1},Q={__name:"Create",setup(G){_("required",V),_("min",D);const u={name:"required|min:3"},{validate:v,errors:h}=q({validationSchema:u}),{value:p}=C("name",null,{initialValue:""}),{storeCategory:f,validationErrors:b,isLoading:o}=B(),i=y({name:p});function g(){v().then(r=>{r.valid&&f(i)})}return(r,d)=>{var l;return e(),t("div",E,[s("div",L,[s("div",M,[s("div",T,[s("form",{onSubmit:x(g,["prevent"])},[s("div",A,[I,c(s("input",{"onUpdate:modelValue":d[0]||(d[0]=n=>i.name=n),id:"post-name",type:"text",class:"form-control"},null,512),[[w,i.name]]),s("div",J,m(a(h).name),1),s("div",N,[(e(!0),t(F,null,S((l=a(b))==null?void 0:l.name,n=>(e(),t("div",null,m(n),1))),256))])]),s("div",P,[s("button",{disabled:a(o),class:"btn btn-primary"},[c(s("div",U,null,512),[[k,a(o)]]),a(o)?(e(),t("span",j,"Processing...")):(e(),t("span",z,"Save"))],8,R)])],32)])])])])}}};export{Q as default};
