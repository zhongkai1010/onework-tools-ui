import{d as S,r as a,o as T,f as C,w as l,h as e,i as t,k as p,__tla as G}from"./index.09b64082.js";let m,k=Promise.all([(()=>{try{return G}catch{}})()]).then(async()=>{let r,s,o,n,c,b;r={class:"card-header"},s=t("span",null,"Card name",-1),o=p("Operation button"),n={class:"card-header"},c=t("span",null,"Card name",-1),b=p("Operation button"),m=S({name:"post",setup(y){const L=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],_=h=>{console.log(h)},f=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],w={children:"children",label:"label"};return(h,O)=>{const u=a("el-button"),g=a("el-tree"),i=a("el-card"),v=a("el-col"),d=a("el-table-column"),N=a("el-table"),x=a("el-row"),A=a("PageView");return T(),C(A,null,{default:l(()=>[e(x,{gutter:20},{default:l(()=>[e(v,{span:8},{default:l(()=>[e(i,{class:"box-card"},{header:l(()=>[t("div",r,[s,e(u,{class:"button",text:""},{default:l(()=>[o]),_:1})])]),default:l(()=>[e(g,{data:f,props:w,onNodeClick:_})]),_:1})]),_:1}),e(v,{span:16},{default:l(()=>[e(i,{class:"box-card"},{header:l(()=>[t("div",n,[c,e(u,{class:"button",text:""},{default:l(()=>[b]),_:1})])]),default:l(()=>[e(N,{data:L,style:{width:"100%"}},{default:l(()=>[e(d,{prop:"date",label:"Date",width:"180"}),e(d,{prop:"name",label:"Name",width:"180"}),e(d,{prop:"address",label:"Address"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}})});export{k as __tla,m as default};
