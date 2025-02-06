import{f as I,r as d,j as e,P as H,s as w,t as O,v,w as F,d as y,x as L,y as P,C as k,z as C}from"./index-GO7BPj8W.js";import{b,C as E}from"./Counter.module-CnDYxZ-X.js";import{j as p}from"./ProductInfo-4Fq7qMB-.js";import{a as g,S as T}from"./Spinner-vqmojlhI.js";import{L as q}from"./Loading-V-Ok1GtD.js";import"./CloseButton-M4GFmQ6w.js";import"./index-6F9jWL4p.js";import"./Col-TQSzdsVT.js";import"./Row-bcx-6aBi.js";const A=({products:t,userId:o})=>{const a=I(),[n,r]=d.useState(!1),[c,l]=d.useState(null),[m,h]=d.useState(!1),u=t.reduce((x,f)=>{const S=f.price,j=f.quantity;return j&&typeof j=="number"?x+S*j:x},0),s=()=>{h(!m),l(null)},i=()=>{r(!0),a(H(u)).unwrap().then(()=>{a(w()),h(!1)}).catch(x=>{l(x)}).finally(()=>r(!1))};return e.jsxs(e.Fragment,{children:[e.jsxs(p,{show:m,onHide:s,backdrop:"static",children:[e.jsx(p.Header,{closeButton:!0,children:e.jsx(p.Title,{children:"Placing Order"})}),e.jsxs(p.Body,{children:["Are you sure you want to place order with Subtotal:"," ",u.toFixed(2)," EGP",!n&&c&&e.jsx("p",{style:{color:"#DC3545",marginTop:"10px"},children:c})]}),e.jsxs(p.Footer,{children:[e.jsx(g,{variant:"secondary",onClick:s,children:"Close"}),e.jsx(g,{variant:"info",style:{color:"white"},onClick:i,children:n?e.jsxs(e.Fragment,{children:[e.jsx(T,{animation:"border",size:"sm"})," Loading..."]}):"Confirm"})]})]}),e.jsxs("div",{className:b.container,children:[e.jsx("span",{children:"SubTotal:"}),e.jsx("span",{children:u.toFixed(2)})]}),o&&e.jsx(g,{className:b.btn,onClick:s,children:"Place Order"})]})},B=({products:t,changeQuantityHandler:o,removItemHandler:a})=>{const n=t.map(r=>e.jsx(E,{...r,changeQuantityHandler:o,removItemHandler:a},r.id));return e.jsx(e.Fragment,{children:n})},M=()=>{const t=I();d.useEffect(()=>(t(O()),()=>{t(v()),t(F())}),[t]);const o=y(s=>{var i;return(i=s.auth.user)==null?void 0:i.userId}),a=y(s=>s.orders.loading),{items:n,productsInfo:r,loading:c,error:l}=y(s=>s.cart),m=r.map(s=>({...s,quantity:n[s.id]})),h=d.useCallback((s,i)=>{t(L({id:s,quantity:i}))},[t]),u=d.useCallback(s=>{t(P(s))},[t]);return{products:m,loading:c,error:l,userId:o,placeOrderStatus:a,changeQuantityHandler:h,removItemHandler:u}},J=()=>{const{products:t,userId:o,loading:a,error:n,changeQuantityHandler:r,removItemHandler:c,placeOrderStatus:l}=M();return e.jsx(k,{className:`pt-5 ${t.length<=2&&"global"}`,children:e.jsx(q,{status:a,error:n,type:"cart",children:t.length?e.jsxs(e.Fragment,{children:[e.jsx(B,{products:t,changeQuantityHandler:r,removItemHandler:c}),e.jsx(A,{products:t,userId:o})]}):l==="succeeded"?e.jsx(C,{message:"Your order has been placed successfully",type:"success"}):e.jsx(C,{type:"empty",message:"Your Cart is emty"})})})};export{J as default};
