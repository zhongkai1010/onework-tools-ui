import{d as E,ai as F,r as a,o as G,f as J,w as l,h as e,i as r,k as c,__tla as T}from"./index.09b64082.js";let U,H=Promise.all([(()=>{try{return T}catch{}})()]).then(async()=>{let m,p,b,f,h,_,v,y,V;m={class:"card-header"},p=r("span",null,"Card name",-1),b=c("Operation button"),f={class:"card-header"},h=r("span",null,"Card name",-1),_=c("Operation button"),v=r("span",{class:"text-gray-500"},"-",-1),y=c("Create"),V=c("Cancel"),U=E({name:"page",setup(K){const t=F({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),C=()=>{console.log("submit!")},A=g=>{console.log(g)},P=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],O={children:"children",label:"label"};return(g,d)=>{const i=a("el-button"),z=a("el-tree"),w=a("el-card"),u=a("el-col"),L=a("el-input"),n=a("el-form-item"),x=a("el-option"),S=a("el-select"),Z=a("el-date-picker"),j=a("el-time-picker"),I=a("el-switch"),s=a("el-checkbox"),N=a("el-checkbox-group"),k=a("el-radio"),R=a("el-radio-group"),q=a("el-form"),B=a("el-row"),D=a("PageView");return G(),J(D,null,{default:l(()=>[e(B,{gutter:20},{default:l(()=>[e(u,{span:8},{default:l(()=>[e(w,{class:"box-card"},{header:l(()=>[r("div",m,[p,e(i,{class:"button",text:""},{default:l(()=>[b]),_:1})])]),default:l(()=>[e(z,{data:P,props:O,onNodeClick:A})]),_:1})]),_:1}),e(u,{span:16},{default:l(()=>[e(w,{class:"box-card"},{header:l(()=>[r("div",f,[h,e(i,{class:"button",text:""},{default:l(()=>[_]),_:1})])]),default:l(()=>[e(q,{model:t,"label-width":"120px"},{default:l(()=>[e(n,{label:"Activity name"},{default:l(()=>[e(L,{modelValue:t.name,"onUpdate:modelValue":d[0]||(d[0]=o=>t.name=o)},null,8,["modelValue"])]),_:1}),e(n,{label:"Activity zone"},{default:l(()=>[e(S,{modelValue:t.region,"onUpdate:modelValue":d[1]||(d[1]=o=>t.region=o),placeholder:"please select your zone"},{default:l(()=>[e(x,{label:"Zone one",value:"shanghai"}),e(x,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"Activity time"},{default:l(()=>[e(u,{span:11},{default:l(()=>[e(Z,{modelValue:t.date1,"onUpdate:modelValue":d[2]||(d[2]=o=>t.date1=o),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(u,{span:2,class:"text-center"},{default:l(()=>[v]),_:1}),e(u,{span:11},{default:l(()=>[e(j,{modelValue:t.date2,"onUpdate:modelValue":d[3]||(d[3]=o=>t.date2=o),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{label:"Instant delivery"},{default:l(()=>[e(I,{modelValue:t.delivery,"onUpdate:modelValue":d[4]||(d[4]=o=>t.delivery=o)},null,8,["modelValue"])]),_:1}),e(n,{label:"Activity type"},{default:l(()=>[e(N,{modelValue:t.type,"onUpdate:modelValue":d[5]||(d[5]=o=>t.type=o)},{default:l(()=>[e(s,{label:"Online activities",name:"type"}),e(s,{label:"Promotion activities",name:"type"}),e(s,{label:"Offline activities",name:"type"}),e(s,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"Resources"},{default:l(()=>[e(R,{modelValue:t.resource,"onUpdate:modelValue":d[6]||(d[6]=o=>t.resource=o)},{default:l(()=>[e(k,{label:"Sponsor"}),e(k,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"Activity form"},{default:l(()=>[e(L,{modelValue:t.desc,"onUpdate:modelValue":d[7]||(d[7]=o=>t.desc=o),type:"textarea"},null,8,["modelValue"])]),_:1}),e(n,null,{default:l(()=>[e(i,{type:"primary",onClick:C},{default:l(()=>[y]),_:1}),e(i,null,{default:l(()=>[V]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})]),_:1})}}})});export{H as __tla,U as default};
