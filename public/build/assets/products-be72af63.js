import{p as i,O as y,P as g}from"./app-3202151c.js";function B(){const u=i({}),l=i({title:"",content:"",category_id:"",thumbnail:""}),c=y(),o=i({}),r=i(!1),n=g("$swal"),d=async(t=1,s="",e="",a="",p="",h="",f="created_at",m="desc")=>{axios.get("/api/products?page="+t+"&search_category="+s+"&search_id="+e+"&search_title="+a+"&search_content="+p+"&search_global="+h+"&order_column="+f+"&order_direction="+m).then(P=>{u.value=P.data})};return{products:u,product:l,getProducts:d,getProduct:async t=>{axios.get("/api/products/"+t).then(s=>{l.value=s.data.data})},storeProduct:async t=>{if(r.value)return;r.value=!0,o.value={};let s=new FormData;for(let e in t)if(t.hasOwnProperty(e))if(e==="thumbnail")for(let a=0;a<t.thumbnail.length;a++)s.append("thumbnail[]",t.thumbnail[a]);else s.append(e,t[e]);axios.post("/api/products",s,{headers:{"content-type":"multipart/form-data"}}).then(e=>{c.push({name:"products.index"}),n({icon:"success",title:"Product saved successfully"})}).catch(e=>{var a;(a=e.response)!=null&&a.data&&(o.value=e.response.data.errors)}).finally(()=>r.value=!1)},updateProduct:async t=>{if(r.value)return;r.value=!0,o.value={};let s=new FormData;for(let e in t)if(t.hasOwnProperty(e))if(e==="thumbnail")for(let a=0;a<t.thumbnail.length;a++)s.append("thumbnail[]",t.thumbnail[a]);else s.append(e,t[e]);axios.post("/api/products/"+t.id,s,{headers:{"content-type":"multipart/form-data"}}).then(e=>{c.push({name:"products.index"}),n({icon:"success",title:"Product updated successfully"})}).catch(e=>{var a;(a=e.response)!=null&&a.data&&(o.value=e.response.data.errors)}).finally(()=>r.value=!1)},deleteProduct:async t=>{n({title:"Are you sure?",text:"You won't be able to revert this action!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",confirmButtonColor:"#ef4444",timer:2e4,timerProgressBar:!0,reverseButtons:!0}).then(s=>{s.isConfirmed&&axios.delete("/api/products/"+t).then(e=>{d(),c.push({name:"products.index"}),n({icon:"success",title:"Product deleted successfully"})}).catch(e=>{n({icon:"error",title:"Something went wrong"})})})},validationErrors:o,isLoading:r}}export{B as u};
