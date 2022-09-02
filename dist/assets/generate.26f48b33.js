import{j as H,a as I,__tla as L}from"./index.7abe9e32.js";import{_ as T,d as W,B as f,ai as A,r,o as G,f as K,w as o,h as l,i as g,aj as Q,u as n,ak as X,E as v,m as $,n as Y,k as p,y as Z,__tla as ee}from"./index.09b64082.js";let _,ae=Promise.all([(()=>{try{return L}catch{}})(),(()=>{try{return ee}catch{}})()]).then(async()=>{var s={name:"defalut",url:"",fields:[{name:"input",span:12,props:{prop:"input",label:"\u6587\u672C\u6846",required:!0},component:{component:"el-input"}},{name:"autocomplete",span:12,props:{prop:"autocomplete",label:"\u81EA\u52A8\u8865\u5168\u8F93\u5165\u6846",required:!0},component:{component:"el-autocomplete",config:{dataMode:"dynamic",remote:{url:"/api/test/getOptions"}}}},{name:"cascader",span:12,props:{prop:"cascader",label:"\u7EA7\u8054\u9009\u62E9\u5668",required:!0},component:{component:"el-cascader",config:{dataMode:"dynamic",remote:{url:"/api/test/getCascadeData"}}}},{name:"checkbox",span:12,props:{prop:"checkbox",label:"\u591A\u9009\u6846",required:!0},component:{component:"el-checkbox-group",config:{dataMode:"dynamic",remote:{url:"/api/test/getOptions"}}}},{name:"color-picker",span:12,props:{prop:"color-picker",label:"\u989C\u8272\u9009\u62E9\u5668",required:!0},component:{component:"el-color-picker",config:{dataMode:"static",options:[{label:"\u9009\u98791",value:"value1"},{label:"\u9009\u98792",value:"value2"},{label:"\u9009\u98793",value:"value3"},{label:"\u9009\u98794",value:"value4"}]}}},{name:"date-picker",span:12,props:{prop:"date-picker",label:"\u65E5\u671F\u9009\u62E9\u5668",required:!0},component:{component:"el-date-picker"}},{name:"input-number",span:12,props:{prop:"input-number",label:"\u6570\u5B57\u8F93\u5165\u6846",required:!0},component:{component:"el-input-number"}},{name:"radio",span:12,props:{prop:"radio",label:"\u5355\u9009\u6846",required:!0},component:{component:"el-radio-group",config:{dataMode:"static",options:[{label:"\u9009\u98791",value:"value1"},{label:"\u9009\u98792",value:"value2"},{label:"\u9009\u98793",value:"value3"},{label:"\u9009\u98794",value:"value4"}]}}},{name:"rate",span:12,props:{prop:"rate",label:"\u8BC4\u5206",required:!0},component:{component:"el-rate"}},{name:"select",span:12,props:{prop:"select",label:"\u9009\u62E9\u5668",required:!0},component:{component:"el-select",config:{dataMode:"dynamic",remote:{url:"/api/test/getOptions"}}}},{name:"slider",span:12,props:{prop:"slider",label:"\u6ED1\u5757",required:!0},component:{component:"el-slider"}},{name:"switch",span:12,props:{prop:"switch",label:"\u5F00\u5173",required:!0},component:{component:"el-switch"}},{name:"time-picker",span:12,props:{prop:"time-picker",label:"\u65F6\u95F4\u9009\u62E9\u5668",required:!0},component:{component:"el-time-picker"}},{name:"time-select",span:12,props:{prop:"time-select",label:"\u65F6\u95F4\u9009\u62E9",required:!0},component:{component:"el-time-select"}},{name:"transfer",span:12,props:{prop:"transfer",label:"\u7A7F\u68AD\u6846",required:!1},component:{props:{titles:["\u5217\u88681","\u5217\u88682"],data:[{key:"value1",label:"\u9009\u98791"}]},component:"el-transfer"}},{name:"upload",span:12,props:{prop:"upload",label:"\u4E0A\u4F20",required:!1},component:{component:"el-upload"}}],layout:{gutter:20},props:{labelPosition:"top",labelWidth:"80px"}};const k=c=>($("data-v-2658c422"),c=c(),Y(),c),h={class:"card-header"},q=k(()=>g("span",null,"\u81EA\u5B9A\u4E49\u8868\u5355",-1)),x=p("\u914D\u7F6E\u4EE3\u7801"),C=p("\u9A8C\u8BC1\u8868\u5355"),w=p("\u91CD\u7F6E\u8868\u5355"),M={style:{flex:"auto"}},O=p("\u751F\u6210\u8868\u5355"),V=p("\u91CD\u7F6E\u4EE3\u7801"),S=p("\u5173\u95ED"),F=W({name:"generate",setup(c){const{message:J,alert:N}=Z(),i=f(JSON.stringify(s,null,"	")),b=f(s),u=f(!1),y=A({}),m=f(),R=async()=>{console.log(m.value),await m.value.formRef.validate((d,e)=>{d?N(JSON.stringify(y,null,`	\r
`),{title:"\u8868\u5355\u503C",type:"info",dangerouslyUseHTMLString:!0}):console.log(e)})},U=()=>{try{b.value=JSON.parse(i.value),console.log(b.value)}catch(d){J({message:d,type:"error"})}},j=()=>{b.value=s,i.value=JSON.stringify(s,null,"	")};return(d,e)=>{const t=r("el-button"),B=r("DynamicForm"),D=r("el-card"),P=r("codemirror"),z=r("el-drawer"),E=r("page-view");return G(),K(E,{class:"container",gutter:0},{default:o(()=>[l(D,{class:"box-card",title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{header:o(()=>[g("div",h,[q,l(t,{type:"primary",onClick:e[0]||(e[0]=a=>u.value=!0)},{default:o(()=>[x]),_:1}),l(t,{onClick:R},{default:o(()=>[C]),_:1}),l(t,{onClick:e[1]||(e[1]=a=>m.value.formRef.resetFields())},{default:o(()=>[w]),_:1})])]),default:o(()=>[l(B,Q(n(s),{ref_key:"configFormRef",ref:m,model:y}),null,16,["model"])]),_:1}),l(z,{modelValue:u.value,"onUpdate:modelValue":e[8]||(e[8]=a=>u.value=a),size:"50%",title:"\u914D\u7F6E\u4EE3\u7801"},{header:o(()=>[g("div",M,[l(t,{type:"primary",onClick:U},{default:o(()=>[O]),_:1}),l(t,{onClick:j},{default:o(()=>[V]),_:1}),l(t,{onClick:e[7]||(e[7]=a=>u.value=!1)},{default:o(()=>[S]),_:1})])]),default:o(()=>[l(P,{modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=a=>i.value=a),placeholder:"Code goes here...",extensions:[n(H)(),n(X)(n(I)())],onReady:e[3]||(e[3]=a=>n(v)("ready",a)),onChange:e[4]||(e[4]=a=>n(v)("change",a)),onFocus:e[5]||(e[5]=a=>n(v)("focus",a)),onBlur:e[6]||(e[6]=a=>n(v)("blur",a))},null,8,["modelValue","extensions"])]),_:1},8,["modelValue"])]),_:1})}}});_=T(F,[["__scopeId","data-v-2658c422"]])});export{ae as __tla,_ as default};
