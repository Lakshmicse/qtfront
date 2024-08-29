import{a5 as d,a6 as o,j as s,Q as e,K as l,B as a,af as x,v as m,_ as c,$ as w,O as r,E as p}from"./index-CMhOF5Py.js";const j=d({oldPassword:o().required(s.jsx(e,{id:"validation.enterOldPassword"})),newPassword:o().required(s.jsx(e,{id:"validation.enterNewPassword"})),confirmPassword:o().required(s.jsx(e,{id:"validation.reTypePassword"}))}),f=()=>s.jsx(l,{animation:"transition.slideUpIn",delay:200,children:s.jsx(a,{sx:{pb:6,py:{xl:8},display:"flex",flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"},children:s.jsxs(x,{sx:{maxWidth:576,width:"100%",textAlign:"center",padding:{xs:8,lg:12,xl:"48px 64px"},overflow:"hidden",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},children:[s.jsxs(a,{sx:{mb:{xs:3,xl:4},display:"flex",alignItems:"center",justifyContent:"center"},children:[s.jsx(a,{sx:{mr:2,".logo":{height:24}},children:s.jsx("img",{className:"logo",src:"/assets/images/logo-icon-large.png",alt:"crema",title:"crema"})}),s.jsx(a,{sx:{mb:1.5,fontWeight:m.BOLD,fontSize:20},children:s.jsx(e,{id:"common.resetPassword"})})]}),s.jsx(c,{validateOnChange:!0,initialValues:{oldPassword:"",newPassword:"",confirmPassword:""},validationSchema:j,onSubmit:(i,{setErrors:n,resetForm:t})=>{i.newPassword!==i.confirmPassword?n({confirmPassword:s.jsx(e,{id:"validation.passwordMisMatch"})}):t()},children:({isSubmitting:i})=>s.jsxs(w,{sx:{textAlign:"left"},noValidate:!0,autoComplete:"off",children:[s.jsx(a,{sx:{mb:{xs:6,xl:8}},children:s.jsx(r,{name:"oldPassword",label:s.jsx(e,{id:"common.oldPassword"}),sx:{width:"100%"},variant:"outlined",type:"password"})}),s.jsx(a,{sx:{mb:{xs:6,xl:8}},children:s.jsx(r,{name:"newPassword",label:s.jsx(e,{id:"common.newPassword"}),sx:{width:"100%"},variant:"outlined",type:"password"})}),s.jsx(a,{sx:{mb:{xs:6,xl:8}},children:s.jsx(r,{name:"confirmPassword",label:s.jsx(e,{id:"common.retypePassword"}),sx:{width:"100%"},variant:"outlined",type:"password"})}),s.jsx(p,{variant:"contained",color:"primary",disabled:i,sx:{width:"100%",height:44},type:"submit",children:s.jsx(e,{id:"common.resetMyPassword"})})]})})]})})});export{f as default};
