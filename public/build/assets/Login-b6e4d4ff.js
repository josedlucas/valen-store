import{m as w,r as g,o as n,f as i,b as e,B as k,t as a,e as d,I as f,i as s,F as b,A as h,$ as y,n as x,h as C,w as V,q as $}from"./app-0cb33df6.js";const B={class:"container"},F={class:"row justify-content-center my-5"},I={class:"col-md-6"},L={class:"card border-0 shadow-sm"},M={class:"card-body"},N={class:""},U={class:"mb-3"},j={for:"email",class:"form-label"},A={class:"text-danger mt-1"},D={class:"mb-4"},E={for:"password",class:"form-label"},S={class:"text-danger mt-1"},T={class:"form-check"},q={class:"form-check-label",for:"flexCheckIndeterminate"},z={class:"flex items-center justify-end mt-4"},G=["disabled"],K={__name:"Login",setup(H){const{loginForm:r,validationErrors:m,processing:c,submitLogin:u}=w();return(l,t)=>{var p,_;const v=g("router-link");return n(),i("div",B,[e("div",F,[e("div",I,[e("div",L,[e("div",M,[e("form",{onSubmit:t[3]||(t[3]=k((...o)=>s(u)&&s(u)(...o),["prevent"]))},[e("div",N,[e("div",U,[e("label",j,a(l.$t("email")),1),d(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s(r).email=o),id:"email",type:"email",class:"form-control",autofocus:"",autocomplete:"username"},null,512),[[f,s(r).email]]),e("div",A,[(n(!0),i(b,null,h((p=s(m))==null?void 0:p.email,o=>(n(),i("div",null,a(o),1))),256))])]),e("div",D,[e("label",E,a(l.$t("password")),1),d(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s(r).password=o),id:"password",type:"password",class:"form-control",autocomplete:"current-password"},null,512),[[f,s(r).password]]),e("div",S,[(n(!0),i(b,null,h((_=s(m))==null?void 0:_.password,o=>(n(),i("div",null,a(o),1))),256))])]),e("div",T,[d(e("input",{class:"form-check-input",type:"checkbox",name:"remember","onUpdate:modelValue":t[2]||(t[2]=o=>s(r).remember=o),id:"flexCheckIndeterminate"},null,512),[[y,s(r).remember]]),e("label",q,a(l.$t("remember_me")),1)]),e("div",z,[e("button",{class:x(["btn btn-primary",{"opacity-25":s(c)}]),disabled:s(c)},a(l.$t("login")),11,G)])]),C(v,{to:{name:"auth.forgot-password"}},{default:V(()=>[$(a(l.$t("forgot_password")),1)]),_:1})],32)])])])])])}}};export{K as default};
