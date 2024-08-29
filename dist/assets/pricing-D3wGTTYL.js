import{r as c,aO as S,aP as P,s as x,a2 as _,aQ as M,aR as N,aS as F,aT as d,aU as H,aV as O,j as l,aD as k,aW as $,aX as Q}from"./index-CMhOF5Py.js";const T=c.createContext({});function X(o){return P("MuiAccordion",o)}const C=S("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),z=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],J=o=>{const{classes:e,square:s,expanded:t,disabled:n,disableGutters:r}=o;return $({root:["root",!s&&"rounded",t&&"expanded",n&&"disabled",!r&&"gutters"],region:["region"]},X,e)},K=x(_,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[{[`& .${C.region}`]:e.region},e.root,!s.square&&e.rounded,!s.disableGutters&&e.gutters]}})(({theme:o})=>{const e={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],e),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],e)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${C.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${C.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o})=>({variants:[{props:e=>!e.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:e=>!e.disableGutters,style:{[`&.${C.expanded}`]:{margin:"16px 0"}}}]})),lo=c.forwardRef(function(e,s){const t=M({props:e,name:"MuiAccordion"}),{children:n,className:r,defaultExpanded:i=!1,disabled:p=!1,disableGutters:u=!1,expanded:A,onChange:m,square:g=!1,slots:h={},slotProps:v={},TransitionComponent:R,TransitionProps:y}=t,f=N(t,z),[a,q]=F({controlled:A,default:i,name:"Accordion",state:"expanded"}),D=c.useCallback(E=>{q(!a),m&&m(E,!a)},[a,m,q]),[I,...j]=c.Children.toArray(n),W=c.useMemo(()=>({expanded:a,disabled:p,disableGutters:u,toggle:D}),[a,p,u,D]),w=d({},t,{square:g,disabled:p,disableGutters:u,expanded:a}),G=J(w),V=d({transition:R},h),L=d({transition:y},v),[U,B]=H("transition",{elementType:O,externalForwardedProps:{slots:V,slotProps:L},ownerState:w});return l.jsxs(K,d({className:k(G.root,r),ref:s,ownerState:w,square:g},f,{children:[l.jsx(T.Provider,{value:W,children:I}),l.jsx(U,d({in:a,timeout:"auto"},B,{children:l.jsx("div",{"aria-labelledby":I.props.id,id:I.props["aria-controls"],role:"region",className:G.region,children:j})}))]}))});function Y(o){return P("MuiAccordionDetails",o)}S("MuiAccordionDetails",["root"]);const Z=["className"],oo=o=>{const{classes:e}=o;return $({root:["root"]},Y,e)},eo=x("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),po=c.forwardRef(function(e,s){const t=M({props:e,name:"MuiAccordionDetails"}),{className:n}=t,r=N(t,Z),i=t,p=oo(i);return l.jsx(eo,d({className:k(p.root,n),ref:s,ownerState:i},r))});function so(o){return P("MuiAccordionSummary",o)}const b=S("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),to=["children","className","expandIcon","focusVisibleClassName","onClick"],no=o=>{const{classes:e,expanded:s,disabled:t,disableGutters:n}=o;return $({root:["root",s&&"expanded",t&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",s&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",s&&"expanded"]},so,e)},ao=x(Q,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>{const e={duration:o.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],e),[`&.${b.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${b.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${b.disabled})`]:{cursor:"pointer"},variants:[{props:s=>!s.disableGutters,style:{[`&.${b.expanded}`]:{minHeight:64}}}]}}),ro=x("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,e)=>e.content})(({theme:o})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:e=>!e.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${b.expanded}`]:{margin:"20px 0"}}}]})),io=x("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,e)=>e.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${b.expanded}`]:{transform:"rotate(180deg)"}})),uo=c.forwardRef(function(e,s){const t=M({props:e,name:"MuiAccordionSummary"}),{children:n,className:r,expandIcon:i,focusVisibleClassName:p,onClick:u}=t,A=N(t,to),{disabled:m=!1,disableGutters:g,expanded:h,toggle:v}=c.useContext(T),R=a=>{v&&v(a),u&&u(a)},y=d({},t,{expanded:h,disabled:m,disableGutters:g}),f=no(y);return l.jsxs(ao,d({focusRipple:!1,disableRipple:!0,disabled:m,component:"div","aria-expanded":h,className:k(f.root,r),focusVisibleClassName:k(f.focusVisible,p),onClick:R,ref:s,ownerState:y},A,{children:[l.jsx(ro,{className:f.content,ownerState:y,children:n}),i&&l.jsx(io,{className:f.expandIconWrapper,ownerState:y,children:i})]}))}),mo=[{id:2001,ques:"What is the price of complete software kit?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2002,ques:"Do you offer any discount on bulk purchase order?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2003,ques:"Is there EMI option available on payment?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2004,ques:"Do you offer any warranty on purchase of your product?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{id:2005,ques:"What are some common system requirement to install your software?",ans:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."}];export{lo as A,uo as a,po as b,mo as p};
