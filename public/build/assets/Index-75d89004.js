import{p,g as A,G as F,H as f,r as U,o as v,f as m,b as e,i as u,a as V,w as D,j as y,e as g,I as k,n as o,F as I,A as P,h as j,q as N,t as h,B as E}from"./app-0cb33df6.js";import{u as M}from"./users-e57ca7b7.js";const T={class:"row justify-content-center my-2"},S={class:"col-md-12"},q={class:"card border-0"},z={class:"card-header bg-transparent"},G=e("h5",{class:"float-start"},"Users",-1),H={class:"card-body shadow-sm"},L={class:"mb-4"},O={class:"table-responsive"},J={class:"table"},K={class:"px-6 py-3 bg-gray-50 text-left"},Q={class:"px-6 py-3 bg-gray-50 text-left"},R=e("th",{class:"px-6 py-3 text-start"},null,-1),W=e("th",{class:"px-6 py-3 text-start"},null,-1),X={class:"px-6 py-3 text-start"},Y={class:"select-none"},Z={class:"px-6 py-3 text-left"},ee={class:"select-none"},te={class:"px-6 py-3 text-left"},se={class:"select-none"},ae={class:"px-6 py-3 bg-gray-50 text-left"},le={class:"select-none"},oe=e("th",{class:"px-6 py-3 bg-gray-50 text-left"}," Actions ",-1),ne={class:"px-6 py-4 text-sm"},de={class:"px-6 py-4 text-sm"},ie={class:"px-6 py-4 text-sm"},ce={class:"px-6 py-4 text-sm"},ue={class:"px-6 py-4 text-sm"},re=["onClick"],ve={class:"card-footer"},he={__name:"Index",setup(pe){const d=p(""),i=p(""),c=p(""),s=p("created_at"),t=p("desc"),{users:w,getUsers:r,deleteUser:B}=M(),{can:b}=A();F(()=>{r()});const x=n=>{s.value=n,t.value=t.value==="asc"?"desc":"asc",r(1,d.value,i.value,c.value,s.value,t.value)};return f(d,(n,a)=>{r(1,n,i.value,c.value)}),f(i,(n,a)=>{r(1,d.value,n,c.value)}),f(c,_.debounce((n,a)=>{r(1,d.value,i.value,n)},200)),(n,a)=>{const C=U("router-link"),$=U("Pagination");return v(),m("div",T,[e("div",S,[e("div",q,[e("div",z,[G,u(b)("user-list")?(v(),V(C,{key:0,to:{name:"users.create"},class:"btn btn-primary btn-sm float-end"},{default:D(()=>[N(" Add New ")]),_:1})):y("",!0)]),e("div",H,[e("div",L,[g(e("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>c.value=l),type:"text",placeholder:"Search...",class:"form-control w-25"},null,512),[[k,c.value]])]),e("div",O,[e("table",J,[e("thead",null,[e("tr",null,[e("th",K,[g(e("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>d.value=l),type:"text",class:"inline-block mt-1 form-control",placeholder:"Filter by ID"},null,512),[[k,d.value]])]),e("th",Q,[g(e("input",{"onUpdate:modelValue":a[2]||(a[2]=l=>i.value=l),type:"text",class:"inline-block mt-1 form-control",placeholder:"Filter by Title"},null,512),[[k,i.value]])]),R,W]),e("tr",null,[e("th",X,[e("div",{class:"flex flex-row",onClick:a[3]||(a[3]=l=>x("id"))},[e("div",{class:o(["font-medium text-uppercase",{"font-bold text-blue-600":s.value==="id"}])}," ID ",2),e("div",Y,[e("span",{class:o({"text-blue-600":t.value==="asc"&&s.value==="id",hidden:t.value!==""&&t.value!=="asc"&&s.value==="id"})},"↑",2),e("span",{class:o({"text-blue-600":t.value==="desc"&&s.value==="id",hidden:t.value!==""&&t.value!=="desc"&&s.value==="id"})},"↓",2)])])]),e("th",Z,[e("div",{class:"flex flex-row",onClick:a[4]||(a[4]=l=>x("title"))},[e("div",{class:o(["font-medium text-uppercase",{"font-bold text-blue-600":s.value==="title"}])}," Name ",2),e("div",ee,[e("span",{class:o({"text-blue-600":t.value==="asc"&&s.value==="title",hidden:t.value!==""&&t.value!=="asc"&&s.value==="title"})},"↑",2),e("span",{class:o({"text-blue-600":t.value==="desc"&&s.value==="title",hidden:t.value!==""&&t.value!=="desc"&&s.value==="title"})},"↓",2)])])]),e("th",te,[e("div",{class:"flex flex-row",onClick:a[5]||(a[5]=l=>x("email"))},[e("div",{class:o(["font-medium text-uppercase",{"font-bold text-blue-600":s.value==="email"}])}," Email ",2),e("div",se,[e("span",{class:o({"text-blue-600":t.value==="asc"&&s.value==="email",hidden:t.value!==""&&t.value!=="asc"&&s.value==="email"})},"↑",2),e("span",{class:o({"text-blue-600":t.value==="desc"&&s.value==="email",hidden:t.value!==""&&t.value!=="desc"&&s.value==="email"})},"↓",2)])])]),e("th",ae,[e("div",{class:"flex flex-row items-center justify-between cursor-pointer",onClick:a[6]||(a[6]=l=>x("created_at"))},[e("div",{class:o(["leading-4 font-medium text-gray-500 uppercase tracking-wider",{"font-bold text-blue-600":s.value==="created_at"}])}," Created at ",2),e("div",le,[e("span",{class:o({"text-blue-600":t.value==="asc"&&s.value==="created_at",hidden:t.value!==""&&t.value!=="asc"&&s.value==="created_at"})},"↑",2),e("span",{class:o({"text-blue-600":t.value==="desc"&&s.value==="created_at",hidden:t.value!==""&&t.value!=="desc"&&s.value==="created_at"})},"↓",2)])])]),oe])]),e("tbody",null,[(v(!0),m(I,null,P(u(w).data,l=>(v(),m("tr",{key:l.id},[e("td",ne,h(l.id),1),e("td",de,h(l.name),1),e("td",ie,h(l.email),1),e("td",ce,h(l.created_at),1),e("td",ue,[u(b)("user-edit")?(v(),V(C,{key:0,to:{name:"users.edit",params:{id:l.id}},class:"badge bg-primary"},{default:D(()=>[N("Edit ")]),_:2},1032,["to"])):y("",!0),u(b)("user-delete")?(v(),m("a",{key:1,href:"#",onClick:E(_e=>u(B)(l.id),["prevent"]),class:"ms-2 badge bg-danger"},"Delete",8,re)):y("",!0)])]))),128))])])])]),e("div",ve,[j($,{data:u(w),limit:3,onPaginationChangePage:a[7]||(a[7]=l=>u(r)(l,d.value,i.value,c.value,s.value,t.value)),class:"mt-4"},null,8,["data"])])])])])}}};export{he as default};
