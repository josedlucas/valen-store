import{p,g as F,B as P,G as b,r as D,o as v,f as x,b as e,h as r,a as B,w as E,j as f,e as y,y as g,n as o,F as S,A as T,i as $,q as C,t as k,J as I,H as M}from"./app-3202151c.js";import{u as O}from"./colors-655b8dbb.js";const U={class:"row my-4"},j={class:"col-md-12"},z={class:"card border-0"},q={class:"card-header bg-transparent"},G=e("h5",{class:"float-start"},"Colors",-1),H={class:"card-body shadow-sm"},J={class:"mb-4"},L={class:"table-responsive"},R={class:"table"},K={class:"py-3 bg-gray-50 text-left"},Q={class:"py-3 bg-gray-50 text-left"},W=e("th",{class:"py-3 text-start"},null,-1),X=e("th",{class:"py-3 text-start"},null,-1),Y={class:"px-6 py-3 text-start"},Z={class:"select-none ms-3"},ee={class:"px-6 py-3 text-left"},te={class:"select-none ms-3"},se={class:"px-6 py-3 bg-gray-50 text-left"},ae={class:"select-none ms-3"},le=e("th",{class:"px-6 py-3 bg-gray-50 text-left"}," ACCIONES ",-1),oe={class:"px-6 py-4 text-sm"},ne={class:"px-6 py-4 text-sm align-items-center d-flex"},de={class:"px-6 py-4 text-sm"},ce={class:"px-6 py-4 text-sm"},ie=["onClick"],re={class:"card-footer"},xe={__name:"index",setup(ue){const d=p(""),c=p(""),i=p(""),s=p("created_at"),t=p("desc"),{colors:w,getColors:u,deleteColor:N}=O(),{can:m}=F();P(()=>{u()});const h=n=>{s.value=n,t.value=t.value==="asc"?"desc":"asc",u(1,d.value,c.value,i.value,s.value,t.value)};return b(d,(n,l)=>{u(1,n,c.value,i.value)}),b(c,(n,l)=>{u(1,d.value,n,i.value)}),b(i,_.debounce((n,l)=>{u(1,d.value,c.value,n)},200)),(n,l)=>{const V=D("router-link"),A=D("Pagination");return v(),x("div",U,[e("div",j,[e("div",z,[e("div",q,[G,r(m)("category-create")?(v(),B(V,{key:0,to:{name:"colors.create"},class:"btn btn-success btn-sm float-end"},{default:E(()=>[C(" Create Color ")]),_:1})):f("",!0)]),e("div",H,[e("div",J,[y(e("input",{"onUpdate:modelValue":l[0]||(l[0]=a=>i.value=a),type:"text",placeholder:"Search...",class:"form-control w-25"},null,512),[[g,i.value]])]),e("div",L,[e("table",R,[e("thead",null,[e("tr",null,[e("th",K,[y(e("input",{"onUpdate:modelValue":l[1]||(l[1]=a=>d.value=a),type:"text",class:"inline-block mt-1 form-control",placeholder:"Filter by ID"},null,512),[[g,d.value]])]),e("th",Q,[y(e("input",{"onUpdate:modelValue":l[2]||(l[2]=a=>c.value=a),type:"text",class:"inline-block mt-1 form-control",placeholder:"Filter by Title"},null,512),[[g,c.value]])]),W,X]),e("tr",null,[e("th",Y,[e("div",{class:"d-flex flex flex-row",onClick:l[3]||(l[3]=a=>h("id"))},[e("div",{class:o(["font-medium text-uppercase",{"font-bold text-blue-600":s.value==="id"}])}," ID ",2),e("div",Z,[e("span",{class:o({"text-blue-600":t.value==="asc"&&s.value==="id",hidden:t.value!==""&&t.value!=="asc"&&s.value==="id"})},"↑",2),e("span",{class:o({"text-blue-600":t.value==="desc"&&s.value==="id",hidden:t.value!==""&&t.value!=="desc"&&s.value==="id"})},"↓",2)])])]),e("th",ee,[e("div",{class:"d-flex flex flex-row",onClick:l[4]||(l[4]=a=>h("title"))},[e("div",{class:o(["font-medium text-uppercase",{"font-bold text-blue-600":s.value==="title"}])}," Title ",2),e("div",te,[e("span",{class:o({"text-blue-600":t.value==="asc"&&s.value==="title",hidden:t.value!==""&&t.value!=="asc"&&s.value==="title"})},"↑",2),e("span",{class:o({"text-blue-600":t.value==="desc"&&s.value==="title",hidden:t.value!==""&&t.value!=="desc"&&s.value==="title"})},"↓",2)])])]),e("th",se,[e("div",{class:"d-flex flex flex-row items-center justify-between cursor-pointer",onClick:l[5]||(l[5]=a=>h("created_at"))},[e("div",{class:o(["leading-4 font-medium text-gray-500 uppercase tracking-wider",{"font-bold text-blue-600":s.value==="created_at"}])}," CREADO ",2),e("div",ae,[e("span",{class:o({"text-blue-600":t.value==="asc"&&s.value==="created_at",hidden:t.value!==""&&t.value!=="asc"&&s.value==="created_at"})},"↑",2),e("span",{class:o({"text-blue-600":t.value==="desc"&&s.value==="created_at",hidden:t.value!==""&&t.value!=="desc"&&s.value==="created_at"})},"↓",2)])])]),le])]),e("tbody",null,[(v(!0),x(S,null,T(r(w).data,a=>(v(),x("tr",{key:a.id},[e("td",oe,k(a.id),1),e("td",ne,[C(k(a.code)+" ",1),e("span",{style:I("background-color:"+a.code+"; width: 30px; height: 30px; display: inline-block;"),class:"rounded-circle ms-3"},null,4)]),e("td",de,k(a.created_at),1),e("td",ce,[r(m)("category-edit")?(v(),B(V,{key:0,to:{name:"colors.edit",params:{id:a.id}},class:"badge bg-success"},{default:E(()=>[C("Editar ")]),_:2},1032,["to"])):f("",!0),r(m)("category-delete")?(v(),x("a",{key:1,href:"#",onClick:M(ve=>r(N)(a.id),["prevent"]),class:"ms-2 badge bg-danger"},"Eliminar",8,ie)):f("",!0)])]))),128))])])])]),e("div",re,[$(A,{data:r(w),limit:3,onPaginationChangePage:l[6]||(l[6]=a=>r(u)(a,d.value,c.value,i.value,s.value,t.value)),class:"mt-4"},null,8,["data"])])])])])}}};export{xe as default};
