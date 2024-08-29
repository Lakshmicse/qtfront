import{r as V,ad as A,ae as B}from"./index-CMhOF5Py.js";var F={exports:{}};(function(K,z){(function(D,s){K.exports=s(V)})(typeof self<"u"?self:A,function(D){return function(s){var d={};function a(n){if(d[n])return d[n].exports;var u=d[n]={i:n,l:!1,exports:{}};return s[n].call(u.exports,u,u.exports,a),u.l=!0,u.exports}return a.m=s,a.c=d,a.d=function(n,u,o){a.o(n,u)||Object.defineProperty(n,u,{enumerable:!0,get:o})},a.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,u){if(1&u&&(n=a(n)),8&u||4&u&&typeof n=="object"&&n&&n.__esModule)return n;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&u&&typeof n!="string")for(var p in n)a.d(o,p,(function(r){return n[r]}).bind(null,p));return o},a.n=function(n){var u=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(u,"a",u),u},a.o=function(n,u){return Object.prototype.hasOwnProperty.call(n,u)},a.p="",a(a.s=0)}([function(s,d,a){Object.defineProperty(d,"__esModule",{value:!0});var n=Object.assign||function(v){for(var f=1;f<arguments.length;f++){var e=arguments[f];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(v[t]=e[t])}return v},u=function(){function v(f,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(f,l.key,l)}}return function(f,e,t){return e&&v(f.prototype,e),t&&v(f,t),f}}(),o=a(1),p=C(o),r=C(a(2)),b=C(a(5)),_=a(6);function C(v){return v&&v.__esModule?v:{default:v}}var O=function(v){function f(e){(function(S,j){if(!(S instanceof j))throw new TypeError("Cannot call a class as a function")})(this,f);var t=function(S,j){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!j||typeof j!="object"&&typeof j!="function"?S:j}(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,e)),l=e.fields,i=e.type,h=e.isValid,c=e.disabled,x=e.filterKeyCodes,g=e.forceUppercase,y=e.value;g&&(y=y.toUpperCase()),t.state={value:y,fields:l,type:i,input:[],isValid:h,disabled:c,filterKeyCodes:x,defaultInputStyle:{fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"6px",border:"1px solid",boxShadow:"0px 0px 10px 0px rgba(0,0,0,.10)",margin:"4px",paddingLeft:"8px",width:"36px",height:"42px",fontSize:"32px",boxSizing:"border-box"}};for(var k=0;k<Number(t.state.fields);k+=1)if(k<32){var T=t.state.value[k]||"";t.state.input.push(T)}return t.textInput=[],t.uuid=(0,_.uuidv4)(),t}return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(f,o.Component),u(f,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({isValid:e.isValid,value:e.value,disabled:e.disabled})}},{key:"handleBlur",value:function(e){this.handleTouch(e.target.value)}},{key:"handleTouch",value:function(e){var t=this.props,l=t.touch,i=t.untouch,h=t.name;typeof l=="function"&&typeof i=="function"&&(e===""?l(h):i(h))}},{key:"handleChange",value:function(e){var t=this,l=this.props.filterChars,i=String(e.target.value);this.props.forceUppercase&&(i=i.toUpperCase()),this.state.type==="number"&&(i=i.replace(/[^\d]/g,""));var h=i=i.split("").filter(function(g){return!l.includes(g)}).join("");if(i!==""){var c=this.state.input.slice();i.length>1?i.split("").map(function(g,y){return Number(e.target.dataset.id)+y<t.props.fields&&(c[Number(e.target.dataset.id)+y]=g),!1}):c[Number(e.target.dataset.id)]=i,c.map(function(g,y){return t.textInput[y]&&(t.textInput[y].value=g),!1});var x=this.textInput[e.target.dataset.id<c.length?Number(e.target.dataset.id)+1:e.target.dataset.id];x&&(x.focus(),x.select()),h=c.join(""),this.setState({value:c.join(""),input:c})}this.props.onChange&&h&&this.props.onChange(h),this.handleTouch(h)}},{key:"handleKeyDown",value:function(e){var t=Number(e.target.dataset.id),l=this.textInput[t+1],i=this.textInput[t-1],h=void 0,c=void 0;switch(this.state.filterKeyCodes.length>0&&this.state.filterKeyCodes.map(function(x){if(x===e.keyCode)return e.preventDefault(),!0}),e.keyCode){case 8:e.preventDefault(),this.textInput[t].value="",(h=this.state.input.slice())[t]="",c=h.join(""),this.setState({value:c,input:h}),this.textInput[t].value===""&&i&&(i.focus(),i.select()),this.props.onChange&&this.props.onChange(c);break;case 37:e.preventDefault(),i&&(i.focus(),i.select());break;case 39:e.preventDefault(),l&&(l.focus(),l.select());break;case 38:case 40:e.preventDefault();break;case 69:if(e.target.type==="number"){e.preventDefault();break}}this.handleTouch(c)}},{key:"render",value:function(){var e=this,t=this.props,l=t.className,i=t.style,h=i===void 0?{}:i,c=t.inputStyle,x=c===void 0?{}:c,g=t.inputStyleInvalid,y=g===void 0?{}:g,k=t.type,T=t.autoFocus,S=t.pattern,j=t.inputMode,P=this.state,M=P.disabled,E=P.input,R=P.isValid,N=P.defaultInputStyle,I={container:h,input:R?x:y};return Object.assign(I.container,{display:"inline-block"}),l||Object.keys(x).length!==0||Object.assign(x,n({},N,{color:"black",backgroundColor:"white",borderColor:"lightgrey"})),l||Object.keys(y).length!==0||Object.assign(y,n({},N,{color:"#b94a48",backgroundColor:"#f2dede",borderColor:"#eed3d7"})),M&&Object.assign(I.input,{cursor:"not-allowed",color:"lightgrey",borderColor:"lightgrey",backgroundColor:"#efeff1"}),p.default.createElement("div",{className:(0,b.default)(l,"react-code-input"),style:I.container},E.map(function(U,w){return p.default.createElement("input",{ref:function(m){e.textInput[w]=m},id:e.uuid+"-"+w,"data-id":w,autoFocus:T&&w===0?"autoFocus":"",value:U,key:"input_"+w,type:k,min:0,max:9,maxLength:E.length===w+1?1:E.length,style:I.input,autoComplete:"off",onFocus:function(m){return m.target.select(m)},onBlur:function(m){return e.handleBlur(m)},onChange:function(m){return e.handleChange(m)},onKeyDown:function(m){return e.handleKeyDown(m)},disabled:M,"data-valid":R,pattern:S,inputMode:j})}))}}]),f}();O.defaultProps={autoFocus:!0,isValid:!0,disabled:!1,forceUppercase:!1,fields:4,value:"",type:"text",filterKeyCodes:[189,190],filterChars:["-","."]},O.propTypes={type:r.default.oneOf(["text","number","password","tel"]),fields:r.default.number,value:r.default.string,onChange:r.default.func,name:r.default.string,touch:r.default.func,untouch:r.default.func,className:r.default.string,isValid:r.default.bool,disabled:r.default.bool,style:r.default.object,inputStyle:r.default.object,inputStyleInvalid:r.default.object,autoFocus:r.default.bool,forceUppercase:r.default.bool,filterKeyCodes:r.default.array,filterChars:r.default.array,pattern:r.default.string,inputMode:r.default.oneOf(["verbatim","latin","latin-name","latin-prose","full-width-latin","kana","kana-name","katakana","numeric","tel","email","url"])},d.default=O},function(s,d){s.exports=D},function(s,d,a){s.exports=a(3)()},function(s,d,a){var n=a(4);function u(){}s.exports=function(){function o(b,_,C,O,v,f){if(f!==n){var e=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw e.name="Invariant Violation",e}}function p(){return o}o.isRequired=o;var r={array:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:p,element:o,instanceOf:p,node:o,objectOf:p,oneOf:p,oneOfType:p,shape:p,exact:p};return r.checkPropTypes=u,r.PropTypes=r,r}},function(s,d,a){s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(s,d,a){var n;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*//*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var u={}.hasOwnProperty;function o(){for(var p=[],r=0;r<arguments.length;r++){var b=arguments[r];if(b){var _=typeof b;if(_==="string"||_==="number")p.push(b);else if(Array.isArray(b)&&b.length){var C=o.apply(null,b);C&&p.push(C)}else if(_==="object")for(var O in b)u.call(b,O)&&b[O]&&p.push(O)}}return p.join(" ")}s!==void 0&&s.exports?(o.default=o,s.exports=o):(n=(function(){return o}).apply(d,[]))===void 0||(s.exports=n)})()},function(s,d,a){Object.defineProperty(d,"__esModule",{value:!0}),d.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var u=16*Math.random()|0;return(n==="x"?u:3&u|8).toString(16)})}}])})})(F);var L=F.exports;const q=B(L);export{q as R};
