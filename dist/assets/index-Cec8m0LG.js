import{P as x,j as e,B as s,v as n,a3 as i,E as p,aF as h,aC as m,aE as j,g,h as l,G as d,af as f,al as B,ai as D}from"./index-CMhOF5Py.js";import{d as u,p as c}from"./CheckOutlined-D_gyapo0.js";import{d as I}from"./FavoriteOutlined-B9e2VRdp.js";import{L as b}from"./ListItemIcon-D_Lanvcm.js";const y=({children:t,...o})=>e.jsx(s,{sx:{px:7.5,py:5,borderRadius:r=>r.cardRadius/4,border:r=>`solid 1px ${r.palette.divider}`,position:"relative",overflow:"hidden","& .popular":{position:"absolute",right:-30,top:-10,zIndex:0,maxWidth:120,display:"flex","&:before":{content:'""',position:"absolute",right:-50,bottom:-30,zIndex:-1,width:200,height:200,borderRadius:"50%",backgroundColor:r=>r.palette.background.default}}},...o,children:t});y.propTypes={children:x.node};const C=({children:t,...o})=>e.jsx(s,{sx:{pt:2.5,position:"relative","& .tag":{position:"absolute",left:30,top:0,zIndex:1,padding:"2px 5px",minWidth:70,fontSize:12,fontWeight:n.BOLD,textTransform:"uppercase",color:r=>r.palette.common.white,textAlign:"center",borderRadius:r=>r.cardRadius/16}},...o,children:t});C.propTypes={children:x.node};const S=({pricing:t})=>e.jsxs(C,{children:[e.jsx(s,{component:"span",className:"tag",sx:{backgroundColor:t.tagColor},children:t.tag}),e.jsxs(y,{children:[e.jsxs(s,{sx:{position:"relative",pr:20},children:[e.jsx(i,{component:"h3",sx:{fontWeight:n.BOLD,fontSize:{xs:28,md:32,lg:36}},children:t.title}),e.jsxs(i,{component:"h4",sx:{fontSize:{xs:20,md:22,lg:24},mb:{xs:5,lg:7.5}},children:[e.jsxs(s,{component:"span",sx:{fontWeight:n.BOLD},children:["$",t.price]}),"/month"]}),t.popular?e.jsxs(s,{className:"popular",children:[e.jsx(I,{sx:{fontSize:14,mr:2.5,mt:1.25}}),e.jsx(i,{sx:{fontSize:{xs:12,xl:14}},children:t.popular})]}):null]}),e.jsx(s,{sx:{mb:7.5},children:e.jsx(p,{variant:"outlined",sx:{width:"100%",fontWeight:n.BOLD,color:o=>o.palette.text.primary,minHeight:46,borderRadius:7.5,boxShadow:"none",borderWidth:2,borderColor:t.tagColor,"&:hover, &:focus":{borderColor:t.tagColor,borderWidth:2}},children:"Start Trial"})}),e.jsx(h,{sx:{py:0},children:t.pricingList.map((o,r)=>e.jsxs(m,{sx:{p:0,mb:2.5},children:[e.jsx(b,{sx:{minWidth:10,mr:3.5},children:e.jsx(u,{sx:{fontSize:16,mt:1,color:a=>a.palette.text.primary}})}),e.jsx(j,{primary:o.title})]},r))})]})]});S.propTypes={pricing:x.object};const W=({pricing:t})=>e.jsx(g,{title:"Pricing Package Style 1",sxStyle:{alignItems:"center"},children:e.jsx(l,{sx:{maxWidth:1e3,justifyContent:"center"},children:t.map((o,r)=>e.jsx(d,{item:!0,xs:12,sm:6,md:4,children:e.jsx(S,{pricing:o})},r))})});W.propTypes={pricing:x.array};const k=({pricing:t})=>e.jsxs(f,{sx:{boxShadow:"none",border:"1px solid #e8e5dd"},children:[e.jsxs(s,{sx:{pt:5,px:5},children:[e.jsx(s,{sx:{display:"flex",justifyContent:"center",mb:7.5},children:e.jsxs(s,{sx:{width:149,height:149,p:2.5,backgroundColor:t.priceColor,borderRadius:"50%",color:o=>o.palette.common.white,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsxs(i,{component:"h3",sx:{fontSize:16,fontWeight:n.MEDIUM,mb:0},children:[e.jsxs(s,{component:"span",sx:{fontWeight:n.BOLD,fontSize:26,mb:0},children:["$",t.price]}),"/month"]}),e.jsx(i,{component:"h5",sx:{fontWeight:n.BOLD,fontSize:16,textTransform:"uppercase"},children:t.title})]})}),e.jsx(h,{sx:{py:0,borderTop:o=>`solid 1px ${o.palette.divider}`},children:t.pricingList.map((o,r)=>e.jsxs(m,{sx:{px:0,py:2.75,borderBottom:a=>`solid 1px ${a.palette.divider}`},children:[e.jsx(b,{sx:{minWidth:10,mr:3.5},children:e.jsx(u,{sx:{fontSize:16,mt:1,color:a=>a.palette.success.main}})}),e.jsx(j,{primary:o.title})]},r))})]}),e.jsx(s,{sx:{mt:7.5},children:e.jsx(p,{variant:"contained",sx:{width:"100%",fontWeight:n.BOLD,color:o=>o.palette.common.white,minHeight:46,borderRadius:0,boxShadow:"none",backgroundColor:t.priceColor,"&:hover, &:focus":{backgroundColor:t.priceColor,boxShadow:"none"}},children:"Get started"})})]});k.propTypes={pricing:x.object};const w=({pricing:t})=>e.jsx(g,{title:"Pricing Package Style 4",sxStyle:{alignItems:"center"},children:e.jsx(l,{sx:{maxWidth:1e3,justifyContent:"center"},children:t.map((o,r)=>e.jsx(d,{item:!0,xs:12,sm:6,md:4,children:e.jsx(k,{pricing:o})},r))})});w.propTypes={pricing:x.array};const L=({children:t,...o})=>e.jsx(f,{sx:{boxShadow:"none",border:"1px solid #e8e5dd",backgroundColor:r=>B(r.palette.common.black,.1),color:r=>r.palette.common.white,position:"relative","&:before":{content:'""',position:"absolute",left:0,top:-26,zIndex:1,height:55,width:"calc(100% + 30px)",backgroundColor:r=>D(r.palette.common.white,.1),transform:"rotate(10deg)"}},...o,children:t});L.propTypes={children:x.node};const z=({pricing:t})=>e.jsxs(L,{children:[e.jsxs(s,{sx:{pt:5,px:5},children:[e.jsx(i,{component:"h5",sx:{fontWeight:n.BOLD,fontSize:16,textTransform:"uppercase",mb:{xs:5,md:7.5},letterSpacing:"0.2em"},children:t.title}),e.jsx(h,{sx:{py:0},children:t.pricingList.map((o,r)=>e.jsxs(m,{sx:{px:0,py:0,mb:2},children:[e.jsx(b,{sx:{minWidth:10,mr:3.5},children:e.jsx(u,{sx:{fontSize:16,mt:1,color:a=>a.palette.success.main}})}),e.jsx(j,{primary:o.title})]},r))}),e.jsx(s,{sx:{my:4},children:e.jsxs(i,{component:"h3",sx:{fontSize:{xs:16,md:18,lg:20},fontWeight:n.MEDIUM},children:[e.jsxs(s,{component:"span",sx:{fontWeight:n.BOLD,fontSize:{xs:26,md:32,lg:44,xl:54}},children:["$",t.price]}),"/month"]})})]}),e.jsx(s,{sx:{mt:7.5},children:e.jsx(p,{variant:"contained",sx:{width:"100%",fontWeight:n.BOLD,color:o=>o.palette.common.white,minHeight:46,borderRadius:0,boxShadow:"none",backgroundColor:t.priceColor,"&:hover, &:focus":{backgroundColor:t.priceColor,boxShadow:"none"}},children:"Get started"})})]});z.propTypes={pricing:x.object};const T=({pricing:t})=>e.jsx(g,{title:"Pricing Package Style 3",sxStyle:{alignItems:"center"},children:e.jsx(l,{sx:{maxWidth:1e3,justifyContent:"center"},children:t.map((o,r)=>e.jsx(d,{item:!0,xs:12,sm:6,md:4,children:e.jsx(z,{pricing:o})},r))})});T.propTypes={pricing:x.array};const v=({pricing:t})=>e.jsxs(f,{sx:{boxShadow:"none",border:"1px solid #e8e5dd"},children:[e.jsxs(s,{sx:{py:5,px:5,textAlign:"center",borderBottom:o=>`solid 1px ${o.palette.divider}`},children:[e.jsx(i,{component:"h5",sx:{fontWeight:n.BOLD,fontSize:16,mb:4},children:t.title}),e.jsx(i,{children:t.description})]}),e.jsxs(s,{sx:{py:5,px:5,textAlign:"center",borderBottom:o=>`solid 1px ${o.palette.divider}`},children:[e.jsx(s,{sx:{mb:4},children:e.jsxs(i,{component:"h3",sx:{fontSize:{xs:16,md:18,lg:20},fontWeight:n.MEDIUM,color:o=>o.palette.text.secondary},children:[e.jsx(s,{component:"span",sx:{display:"inline-block",verticalAlign:"top"},children:"$"}),e.jsx(s,{component:"span",sx:{fontWeight:n.BOLD,fontSize:{xs:26,md:32,lg:44,xl:54},color:t.priceColor,lineHeight:1},children:t.price}),"/month"]})}),e.jsx(i,{children:t.priceDescription})]}),e.jsxs(s,{sx:{py:5,px:5},children:[e.jsx(h,{sx:{py:0},children:t.pricingList.map((o,r)=>e.jsxs(m,{sx:{px:0,py:0,mb:2},children:[e.jsx(b,{sx:{minWidth:10,mr:3.5},children:e.jsx(u,{sx:{fontSize:16,mt:1,color:a=>a.palette.success.main}})}),e.jsx(j,{primary:o.title})]},r))}),e.jsx(s,{sx:{mt:7.5,textAlign:"center"},children:e.jsx(p,{variant:"contained",sx:{fontWeight:n.BOLD,color:o=>o.palette.common.white,minWidth:150,borderRadius:7.5,boxShadow:"none",backgroundColor:t.priceColor,"&:hover, &:focus":{backgroundColor:t.priceColor,boxShadow:"none"}},children:"Get started"})})]})]});v.propTypes={pricing:x.object};const P=({pricing:t})=>e.jsx(g,{title:"Pricing Package Style 2",sxStyle:{alignItems:"center"},children:e.jsx(l,{sx:{maxWidth:1e3,justifyContent:"center"},children:t.map((o,r)=>e.jsx(d,{item:!0,xs:12,sm:6,md:4,children:e.jsx(v,{pricing:o})},r))})});P.propTypes={pricing:x.array};const E=()=>e.jsxs(l,{children:[e.jsx(d,{item:!0,xs:12,children:e.jsx(W,{pricing:c.pricingOne})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(P,{pricing:c.pricingTwo})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(T,{pricing:c.pricingFour})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(w,{pricing:c.pricingFour})})]});export{E as default};
