import{k as y,G as g,m as k,o as i,f as r,b as s,B,t as n,e as m,I as c,i as t,F as u,A as p,n as V}from"./app-0cb33df6.js";const $={class:"container"},x={class:"row justify-content-center my-5"},F={class:"col-md-6"},M={class:"card border-0 shadow-sm"},R={class:"card-body"},U={class:""},j={class:"mb-3"},A={for:"email",class:"form-label"},D={class:"text-danger mt-1"},E={class:"mb-3"},S={for:"password",class:"form-label"},q={class:"text-danger mt-1"},z={class:"mb-3"},C={for:"password_confirmation",class:"form-label"},G={class:"text-danger mt-1"},I={class:"flex items-center justify-end mt-4"},L=["disabled"],T={__name:"Reset",setup(N){const _=y();g(()=>{e.token=_.params.token,e.email=_.query.email});const{resetForm:e,validationErrors:d,processing:f,submitResetPassword:b}=k();return(l,a)=>{var v,w,h;return i(),r("div",$,[s("div",x,[s("div",F,[s("div",M,[s("div",R,[s("form",{onSubmit:a[3]||(a[3]=B((...o)=>t(b)&&t(b)(...o),["prevent"]))},[s("div",U,[s("div",j,[s("label",A,n(l.$t("email")),1),m(s("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>t(e).email=o),id:"email",type:"email",class:"form-control",autofocus:"",autocomplete:"email",readonly:"",disabled:""},null,512),[[c,t(e).email]]),s("div",D,[(i(!0),r(u,null,p((v=t(d))==null?void 0:v.email,o=>(i(),r("div",null,n(o),1))),256))])]),s("div",E,[s("label",S,n(l.$t("password")),1),m(s("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>t(e).password=o),id:"password",type:"password",class:"form-control"},null,512),[[c,t(e).password]]),s("div",q,[(i(!0),r(u,null,p((w=t(d))==null?void 0:w.password,o=>(i(),r("div",null,n(o),1))),256))])]),s("div",z,[s("label",C,n(l.$t("confirm_password")),1),m(s("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>t(e).password_confirmation=o),id:"password_confirmation",type:"password",class:"form-control"},null,512),[[c,t(e).password_confirmation]]),s("div",G,[(i(!0),r(u,null,p((h=t(d))==null?void 0:h.password_confirmation,o=>(i(),r("div",null,n(o),1))),256))])]),s("div",I,[s("button",{class:V(["btn btn-primary",{"opacity-25":t(f)}]),disabled:t(f)},n(l.$t("reset_password")),11,L)])])],32)])])])])])}}};export{T as default};
