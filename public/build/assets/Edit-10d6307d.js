import{I as F,k,B,K as E,o as t,f as o,b as s,H as P,e as m,y as S,t as u,h as a,F as q,A as D,v as M}from"./app-277e06eb.js";import{u as V}from"./permissions-dbd2455b.js";import{d as _,u as L,a as R,r as T,m as U}from"./rules-1c17496e.js";const j={class:"row justify-content-center my-5"},A={class:"col-md-6"},H={class:"card border-0 shadow-sm"},I={class:"card-body"},K={class:"mb-3"},N=s("label",{for:"post-title",class:"form-label"}," Title ",-1),z={class:"text-danger mt-1"},C={class:"text-danger mt-1"},G={class:"mt-4"},J=["disabled"],O={class:""},Q={key:0},W={key:1},es={__name:"Edit",setup(X){_("required",T),_("min",U);const p={name:"required|min:3"},{validate:v,errors:h,resetForm:Y}=L({validationSchema:p}),{value:f}=R("name",null,{initialValue:""}),{permission:r,getPermission:b,updatePermission:y,validationErrors:g,isLoading:i}=V(),e=F({name:f}),w=k();function x(){v().then(d=>{d.valid&&y(e)})}return B(()=>{b(w.params.id)}),E(()=>{e.id=r.value.id,e.name=r.value.name}),(d,c)=>{var l;return t(),o("div",j,[s("div",A,[s("div",H,[s("div",I,[s("form",{onSubmit:P(x,["prevent"])},[s("div",K,[N,m(s("input",{"onUpdate:modelValue":c[0]||(c[0]=n=>e.name=n),id:"post-title",type:"text",class:"form-control"},null,512),[[S,e.name]]),s("div",z,u(a(h).name),1),s("div",C,[(t(!0),o(q,null,D((l=a(g))==null?void 0:l.name,n=>(t(),o("div",null,u(n),1))),256))])]),s("div",G,[s("button",{disabled:a(i),class:"btn btn-success"},[m(s("div",O,null,512),[[M,a(i)]]),a(i)?(t(),o("span",Q,"Processing...")):(t(),o("span",W,"Update"))],8,J)])],32)])])])])}}};export{es as default};
