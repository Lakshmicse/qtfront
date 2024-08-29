import{P as p,r as h,R as z,u as Q,j as e,w as K,G as D,L as q,g as L,N as W,o as N,O as V,i as O,k as P,Q as B,U as G,S as T,a as y,V as ne,B as g,l as k,E as w,h as M,W as re,X as $,v as H,Y as ae,cl as se,cm as ie,bs as oe,a3 as b,aF as le,aC as ce,cn as ue,co as de,Z as pe,_ as me,$ as xe,J as he,cp as ge}from"./index-CMhOF5Py.js";import"./lodash-CW1nyizk.js";import{u as J,p as je,a as ye}from"./APIHooks-DItCotpK.js";import{U as fe,P as be,J as Se}from"./jodit-react-DjkgfNEC.js";import{C as ve}from"./Container-DmWR_2Xc.js";const Ce=[{id:1,name:"Wheel"},{id:2,name:"Towing"},{id:3,name:"Safety"}],X=({isEdit:t,inStock:l,productInfo:r,productSpec:i,setProductSpec:c,setFieldValue:n,setProductInfo:x,selectedTags:d,setSelectedTags:F})=>{const[f,E]=h.useState(0),[u]=[],S=z.useRef(null),A=Q(),[{apiData:s,loading:o},{setQueryParams:I}]=J("/brand",[],{},!1),{results:U}=s||{},[{apiData:ee,loading:Ee},{setQueryParams:te}]=J("/Category",[],{},!1),{results:R}=ee||{};return h.useEffect(()=>{I({page:f,filterData:u}),te({page:f,filterData:u})},[f,u]),h.useEffect(()=>{},[f,u]),e.jsx(K,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:e.jsxs(D,{item:!0,xs:12,lg:4,children:[e.jsxs(q,{style:{height:"700px"},children:[e.jsxs(L,{title:"Product Details",children:[e.jsx(W,{control:e.jsx(N,{checked:l,onChange:a=>n("inStock",a.target.checked),name:"inStock"}),label:"In Stock"}),e.jsx(V,{name:"SKU",variant:"outlined",sx:{width:"100%",my:4},label:"Product SKU"}),e.jsxs(O,{sx:{width:"100%"},variant:"outlined",children:[e.jsx(P,{ref:S,id:"demo-simple-select-outlined-label",children:e.jsx(B,{id:"common.brand"})}),e.jsx(G,{name:"brand",label:e.jsx(B,{id:"common.brand"}),labelId:"label-select-outlined-label",as:T,onChange:a=>n("brand",a.target.value),children:U&&U.map(a=>e.jsx(y,{value:a.id,sx:{cursor:"pointer",inputVariant:"outlined"},children:a.name},a.id))})]}),e.jsxs(O,{sx:{width:"100%",my:4},variant:"outlined",children:[e.jsx(P,{ref:S,children:e.jsx(B,{id:"common.category"})}),e.jsx(G,{name:"category",label:e.jsx(B,{id:"common.category"}),as:T,onChange:a=>n("category",a.target.value),children:R&&R.map(a=>e.jsx(y,{value:a.id,sx:{cursor:"pointer",inputVariant:"outlined"},children:a.name},a.id))})]}),e.jsx(ne,{multiple:!0,id:"tags-outlined",sx:{width:"100%",my:4},options:Ce,autoHighlight:!0,getOptionLabel:a=>a.name,value:d,onChange:(a,m)=>F(m),renderOption:(a,m)=>e.jsx(g,{component:"li",sx:{display:"flex",alignItems:"center"},...a,children:e.jsx(g,{ml:4,children:m==null?void 0:m.name})}),filterSelectedOptions:!0,renderInput:a=>e.jsx(k,{...a,variant:"outlined",label:"Tags",fullWidth:!0})})]}),e.jsxs(L,{title:"Product Pricing",sxStyle:{mt:7},children:[e.jsx(V,{name:"mrp",type:"number",variant:"outlined",sx:{width:"100%",my:2,"& .MuiInputBase-input":{pl:2}},InputProps:{startAdornment:"$"},label:"Regular Price"}),e.jsx(V,{name:"salemrp",type:"number",variant:"outlined",sx:{width:"100%",my:2,"& .MuiInputBase-input":{pl:2}},InputProps:{startAdornment:"$"},label:"Sale Price"}),e.jsx(W,{control:e.jsx(N,{value:"checkedA",inputProps:{"aria-label":"secondary checkbox"},name:"inStock"}),label:"Tax Inclusive"}),e.jsx(V,{type:"number",name:"discount",variant:"outlined",sx:{width:"100%",my:2},label:"Discount %"})]}),e.jsx(L,{title:"Product Specification",sxStyle:{mt:7},action:e.jsx(w,{variant:"contained",color:"primary",onClick:()=>{c([...i,{id:i.length+1,title:"",desc:""}])},children:"Add New"}),children:e.jsx(M,{spacing:4,children:i.map((a,m)=>e.jsxs(z.Fragment,{children:[e.jsx(D,{item:!0,xs:12,sm:6,children:e.jsx(k,{variant:"outlined",value:a.title,sx:{width:"100%",my:2},onChange:v=>{const{value:C}=v.target,j=[...i];j[m].title=C,x(j)},label:"Product Label"})}),e.jsx(D,{item:!0,xs:12,sm:6,children:e.jsx(k,{variant:"outlined",value:a.desc,sx:{width:"100%",my:2},onChange:v=>{const{value:C}=v.target,j=[...i];j[m].desc=C,x(j)},label:"Product Value"})})]},m))})}),e.jsx(L,{title:"Product Details",sxStyle:{mt:7},action:e.jsx(w,{variant:"contained",color:"primary",onClick:()=>{x([...r,{id:r.length+1,title:"",desc:""}])},children:"Add New"}),children:e.jsx(M,{spacing:4,children:r.map((a,m)=>e.jsxs(z.Fragment,{children:[e.jsx(D,{item:!0,xs:12,sm:6,children:e.jsx(k,{variant:"outlined",value:a.title,sx:{width:"100%",my:2},onChange:v=>{const{value:C}=v.target,j=[...r];j[m].title=C,x(j)},label:"Product Label"})}),e.jsx(D,{item:!0,xs:12,sm:6,children:e.jsx(k,{variant:"outlined",value:a.desc,sx:{width:"100%",my:2},onChange:v=>{const{value:C}=v.target,j=[...r];j[m].desc=C,x(j)},label:"Product Value"})})]},m))})})]}),e.jsxs(re,{spacing:3,direction:"row",sx:{justifyContent:"flex-end",mt:4},children:[e.jsx(w,{sx:{minWidth:100,color:"text.secondary"},variant:"text",onClick:()=>A(-1),children:"Cancel"}),e.jsxs(w,{sx:{display:"block",minWidth:100},color:"primary",variant:"contained",type:"submit",children:[t?"Edit":"Add"," Product"]})]})]})})};X.propTypes={isEdit:p.bool,inStock:p.bool,productInfo:p.array,productSpec:p.array,setProductSpec:p.func,setFieldValue:p.func,setProductInfo:p.func,selectedTags:p.array,setSelectedTags:p.func};const _=({uploadedFiles:t,setUploadedFiles:l})=>{const r=$({accept:{"image/png":[".png",".jpeg",".jpg"]},onDrop:c=>{l(c.map(n=>Object.assign(n,{preview:URL.createObjectURL(n)})))}});h.useEffect(()=>{l(r.acceptedFiles)},[r.acceptedFiles]);const i=c=>{r.acceptedFiles.splice(r.acceptedFiles.indexOf(c),1),l([...r.acceptedFiles])};return e.jsxs("section",{className:"container",style:{cursor:"pointer"},children:[e.jsx(fe,{setUploadedFiles:l,dropzone:r,customContent:e.jsxs(e.Fragment,{children:[e.jsx("img",{src:"/assets/icon/upload.svg",width:40,height:40,alt:"upload"}),e.jsxs("p",{children:[e.jsx(g,{component:"span",sx:{color:"primary.main",fontWeight:H.MEDIUM},children:"Click to upload"})," ","or drag and drop"]}),e.jsx(g,{component:"p",sx:{mt:1},children:"SVG, PNG, JPG or GIF (max. 800x400px)"})]})}),e.jsx(ae,{sx:{maxWidth:500},data:t,column:4,itemPadding:5,renderRow:(c,n)=>e.jsx(be,{file:c,onDeleteUploadFile:i},n+c.path)})]})};_.propTypes={uploadedFiles:p.array,setUploadedFiles:p.func};const ke={readonly:!1,toolbar:!0,minHeight:300,maxHeight:500,buttons:["source","|","bold","strikethrough","underline","italic","|","ul","ol","|","outdent","indent","|","font","fontsize","paragraph","|","image","video","table","link","|","align","undo","redo","selectall","cut","copy","|","hr","|","about"],uploader:{insertImageAsBase64URI:!0,url:"/api/upload",format:"json",imagesExtensions:["jpg","png","jpeg","gif"],headers:{"X-CSRF-TOKEN":"CSFR-Token",Authorization:"Bearer <JSON Web Token>"},getMessage:function(t){return t.msg},process:function(t){return{files:t.data}}},style:{"& .jodit .jodit-status-bar":{background:"#29572E",color:"rgba(255,255,255,0.5)"}}},Y=({content:t,uploadedFiles:l,setUploadedFiles:r,setFieldValue:i})=>{const c=h.useRef(null);return e.jsx(K,{direction:"right",in:!0,mountOnEnter:!0,unmountOnExit:!0,children:e.jsx(D,{item:!0,xs:12,lg:8,children:e.jsx(q,{style:{height:"700px"},children:e.jsxs(L,{children:[e.jsx(V,{name:"title",variant:"outlined",sx:{width:"100%",my:2},label:"Product Name"}),e.jsx(g,{component:"p",sx:{mt:3,fontSize:16},children:"Description*"}),e.jsx(g,{sx:{width:"100%",my:2},children:e.jsx(Se,{ref:c,value:t,placeholder:"Description here",config:ke,tabIndex:1,onChange:n=>i("description",n)})}),e.jsx(g,{component:"p",sx:{mt:3,mb:2,fontSize:16},children:"Images"}),e.jsx(_,{uploadedFiles:l,setUploadedFiles:r})]})})})})};Y.propTypes={content:p.string,uploadedFiles:p.array,setUploadedFiles:p.func,setFieldValue:p.func,selectedTags:p.array};const we=({onEdit:t})=>{const{data:l,error:r,isLoading:i}=se(),[c]=ie();return i?e.jsx(oe,{}):r?e.jsx(b,{children:"Error loading product variants"}):e.jsx(le,{children:l.variants.map(n=>e.jsxs(ce,{divider:!0,children:[e.jsxs(g,{sx:{display:"flex",alignItems:"center",gap:2},children:[n.image&&e.jsx("img",{src:n.image,alt:n.type,style:{width:"100px"}}),e.jsxs(b,{variant:"body1",children:[n.type," - ",n.color," - ",n.size," - $",n.price]})]}),e.jsx(w,{onClick:()=>t(n),variant:"contained",color:"primary",style:{marginLeft:"1rem"},children:"Edit"}),e.jsx(w,{onClick:()=>c(n.id),variant:"contained",color:"secondary",style:{marginLeft:"1rem"},children:"Delete"})]},n.id))})},Fe=({variantToEdit:t,onSave:l,selectedProd:r})=>{console.log(r);const[i]=ue(),[c]=de(),[n,x]=h.useState({sku:"",type:"",color:"",size:"",price:"",image:null}),[d,F]=h.useState({});h.useEffect(()=>{t&&x({sku:t.sku||"",type:t.type||"",color:t.color||"",size:t.size||"",price:t.price||"",image:t.image||null})},[t]);const f=()=>{let s={};return n.sku||(s.sku="SKU is required"),n.type||(s.type="Type is required"),n.color||(s.color="Color is required"),n.size||(s.size="Size is required"),(!n.price||n.price<=0)&&(s.price="Price must be a positive number"),n.image||(s.image="An image is required"),F(s),Object.keys(s).length===0},E=async s=>{if(s.preventDefault(),!f())return;const o=new FormData;o.append("sku",n.sku),o.append("type",n.type),o.append("color",n.color),o.append("size",n.size),o.append("price",n.price),o.append("productId",r.id),n.image&&o.append("image",n.image);try{t?await c({id:t.id,body:o}):await i(o),l()}catch(I){console.error("Error submitting the form:",I)}},u=s=>{x({...n,[s.target.name]:s.target.value})},{getRootProps:S,getInputProps:A}=$({accept:"image/*",onDrop:s=>{const o=s[0];x({...n,image:o})}});return e.jsxs(g,{component:"form",onSubmit:E,sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},children:[e.jsx(k,{label:"SKU",name:"sku",value:n.sku,onChange:u,fullWidth:!0,margin:"normal",sx:{m:1},error:!!d.sku,helperText:d.sku}),e.jsxs(O,{fullWidth:!0,sx:{m:1},children:[e.jsx(P,{children:"Type"}),e.jsxs(T,{name:"type",value:n.type,onChange:u,label:"Type",error:!!d.type,children:[e.jsx(y,{value:"V-neck",children:"V-neck"}),e.jsx(y,{value:"Crew Neck",children:"Crew Neck"}),e.jsx(y,{value:"Polo",children:"Polo"})]}),d.type&&e.jsx(b,{color:"error",children:d.type})]}),e.jsxs(O,{fullWidth:!0,sx:{m:1},children:[e.jsx(P,{children:"Color"}),e.jsxs(T,{name:"color",value:n.color,onChange:u,label:"Color",error:!!d.color,children:[e.jsx(y,{value:"Red",children:"Red"}),e.jsx(y,{value:"Blue",children:"Blue"}),e.jsx(y,{value:"Green",children:"Green"})]}),d.color&&e.jsx(b,{color:"error",children:d.color})]}),e.jsxs(O,{fullWidth:!0,sx:{m:1},children:[e.jsx(P,{children:"Size"}),e.jsxs(T,{name:"size",value:n.size,onChange:u,label:"Size",error:!!d.size,children:[e.jsx(y,{value:"S",children:"Small (S)"}),e.jsx(y,{value:"M",children:"Medium (M)"}),e.jsx(y,{value:"L",children:"Large (L)"})]}),d.size&&e.jsx(b,{color:"error",children:d.size})]}),e.jsx(k,{label:"Price",name:"price",value:n.price,onChange:u,fullWidth:!0,margin:"normal",sx:{m:1},error:!!d.price,helperText:d.price}),e.jsxs(g,{...S(),sx:{border:"2px dashed #eeeeee",padding:"16px",textAlign:"center",marginTop:"16px",cursor:"pointer"},children:[e.jsx("input",{...A()}),e.jsx(b,{children:"Drag 'n' drop an image here, or click to select one"})]}),n.image&&e.jsxs(g,{sx:{m:1,mt:2},children:[e.jsx(b,{variant:"subtitle1",children:"Preview:"}),e.jsx("img",{src:URL.createObjectURL(n.image),alt:"Product",style:{width:"100%",maxWidth:"200px"}})]}),e.jsxs(w,{type:"submit",variant:"contained",color:"primary",sx:{m:1},children:[t?"Update":"Add"," Product Variant"]})]})};function De({selectedProd:t}){const[l,r]=h.useState(null),i=n=>{r(n)},c=()=>{r(null)};return e.jsxs(ve,{maxWidth:"md",children:[e.jsx(b,{variant:"h4",align:"center",gutterBottom:!0,children:"Product Variant Management"}),e.jsx(Fe,{variantToEdit:l,onSave:c,selectedProd:t}),e.jsx(we,{onEdit:i})]})}const Z=({selectedProd:t})=>{const[l,r]=h.useState([]),[i,c]=h.useState([]),n=pe(),x=Q(),[d,F]=z.useState([{id:1,title:"",desc:""}]),[f,E]=z.useState([{id:1,title:"",desc:""}]);return h.useEffect(()=>{t&&(r((t==null?void 0:t.tag)||[]),c(t==null?void 0:t.images.map(u=>({...u,preview:u.src}))),F(t==null?void 0:t.productInfo),E(t==null?void 0:t.productSpec))},[t]),e.jsxs(e.Fragment,{children:[e.jsx(g,{component:"h2",variant:"h2",sx:{fontSize:16,color:"text.primary",fontWeight:H.SEMI_BOLD,mb:{xs:2,lg:4}},children:t?"Edit Product":"Create a new product"}),e.jsx(me,{validateOnChange:!0,initialValues:t?{...t,category:(t==null?void 0:t.category)||1}:{title:"",SKU:"",category:1,mrp:0,salemrp:0,discount:0,inStock:!1},onSubmit:(u,{setSubmitting:S,resetForm:A})=>{S(!0);const s=new FormData;s.append("product",JSON.stringify(u)),s.append("productInfo",JSON.stringify(d)),s.append("productSpec",JSON.stringify(f));for(let o=0;o<i.length;o++)s.append("images[]",i[o]);if(t){const o={...t,...u};je("/api/ecommerce/list/update",n,{product:o}).then(()=>{x("/ecommerce/product-listing"),n.showMessage("Product updated successfully!")}).catch(I=>{n.fetchError(I.message)})}else ye("/product",n,s).then(()=>{n.showMessage("Product created successfully!"),x("/ecommerce/product-listing")}).catch(o=>{n.fetchError(o.message)});S(!1),A()},children:({setFieldValue:u})=>e.jsx(xe,{noValidate:!0,autoComplete:"off",children:e.jsxs(M,{children:[e.jsx(Y,{content:(t==null?void 0:t.description)||"",uploadedFiles:i,setUploadedFiles:c,setFieldValue:u}),e.jsx(X,{isEdit:!!t,inStock:t==null?void 0:t.inStock,selectedTags:l,productInfo:d,productSpec:f,setProductInfo:F,setFieldValue:u,setSelectedTags:r,setProductSpec:E})]})})}),e.jsx(De,{selectedProd:t})]})};Z.propTypes={selectedProd:p.object};const Oe=()=>{const{id:t}=he(),{data:l,isLoading:r,isError:i}=ge(t);return r?e.jsx("div",{children:"Loading..."}):i?e.jsx("div",{children:"Error loading product..."}):(console.log(l),e.jsx(Z,{selectedProd:l}))};export{Oe as default};
