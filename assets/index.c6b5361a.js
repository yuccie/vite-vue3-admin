var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,r=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&d(e,a,t[a]);return e},o=(e,l)=>t(e,a(l));import{d as i,r as u,av as c,b as p,c as m,e as y,a8 as f,h,y as b,W as v,bz as w,cy as I,aq as g,k as x,l as k,x as P,A as C,z as S,P as K,aI as T,cF as _,C as j,cG as E,aZ as O,ac as q,cH as $,cI as F,t as R,aA as D,a5 as N,by as M,cJ as A,M as V,cK as W}from"./vendor.02104a40.js";import{D as L}from"./dynamic-table.5f6c942d.js";import{y as z,B as G}from"./index.3831b623.js";import{g as U,u as X,c as B,t as H,d as J,a as Z}from"./index.b991ccdb.js";import{u as Q}from"./useFormModal.9143189f.js";import{f as Y,a as ee}from"./utils.1ab06744.js";const te={class:"split-wrapper"},ae={class:"left-content"},le=h(" 右边内容区 "),ne=[y("i",null,null,-1),y("i",null,null,-1)],se={class:"right-content"},de=h(" 右边内容区 ");var re=i({setup(e){const t=u();let a,l;const n=c((function(e){t.value&&(t.value.style.width=l+e.clientX-a+"px")}),20),s=()=>{document.documentElement.style.userSelect="unset",document.documentElement.removeEventListener("mousemove",n),document.documentElement.removeEventListener("mouseup",s)},d=e=>{a=e.clientX,t.value&&(l=parseInt(window.getComputedStyle(t.value).width,10)),document.documentElement.style.userSelect="none",document.documentElement.addEventListener("mousemove",n),document.documentElement.addEventListener("mouseup",s)};return(e,a)=>(p(),m("div",te,[y("div",{ref_key:"scalable",ref:t,class:"scalable"},[y("div",ae,[f(e.$slots,"left-content",{},(()=>[le]))]),y("div",{ref:"separator",class:"separator",onMousedown:d},ne,544)],512),y("div",se,[f(e.$slots,"right-content",{},(()=>[de]))])]))}});function oe(e){return z({url:G.add,method:"post",data:e},{successMsg:"创建用户成功"})}function ie(e){return z({url:G.update,method:"post",data:e},{successMsg:"修改用户成功"})}function ue(e){return z({url:G.delete,method:"post",data:e})}const ce=[{field:"name",component:"Input",label:"部门名称",rules:[{required:!0,type:"string"}]},{field:"parentId",component:"TreeSelect",label:"上级部门",componentProps:{getPopupContainer:()=>document.body},rules:[{required:!0,type:"number"}]},{field:"orderNum",component:"InputNumber",label:"排序号",defaultValue:255,componentProps:{style:{width:"100%"}}}],pe=[{field:"departmentId",component:"TreeSelect",label:"所属部门",componentProps:{getPopupContainer:()=>document.body},rules:[{required:!0,type:"number"}]},{field:"roles",component:"Select",label:"所属角色",rules:[{required:!0,type:"array"}],componentProps:{mode:"multiple",request:async()=>(await U()).map((e=>({label:e.name,value:e.id})))}},{field:"username",component:"Input",label:"用户名",rules:[{required:!0}]},{field:"name",component:"Input",label:"姓名",colProps:{span:12},rules:[{required:!0}]},{field:"nickName",component:"Input",label:"呢称",colProps:{span:12}},{field:"email",component:"Input",label:"邮箱",colProps:{span:12}},{field:"phone",component:"Input",label:"手机",colProps:{span:12}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"status",component:"RadioGroup",label:"状态",defaultValue:1,componentProps:{options:[{label:"启用",value:1},{label:"禁用",value:0}]}}],me=[{field:"password",component:"Input",label:"新密码",rules:[{required:!0,type:"string"}]}],ye=[{field:"departmentId",component:"TreeSelect",label:"转移至",rules:[{required:!0,type:"number"}]}];function fe(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!I(e)}const he=[{title:"头像",width:80,dataIndex:"headImg",hideInSearch:!0,bodyCell:({record:e})=>b(v,{src:e.headImg},null)},{title:"姓名",width:120,dataIndex:"name",align:"center"},{title:"用户名",width:120,align:"center",dataIndex:"username"},{title:"所在部门",dataIndex:"departmentName",hideInSearch:!0,align:"center",width:180},{title:"所属角色",dataIndex:"roleNames",align:"center",hideInSearch:!0,width:220,bodyCell:({record:e})=>{let t;return b(g,null,fe(t=e.roleNames.map((e=>b(w,{color:"success",key:e},fe(e)?e:{default:()=>[e]}))))?t:{default:()=>[t]})}},{title:"呢称",width:120,align:"center",dataIndex:"nickName"},{title:"邮箱",width:120,align:"center",dataIndex:"email"},{title:"手机",width:120,align:"center",dataIndex:"phone"},{title:"备注",width:120,align:"center",dataIndex:"remark"},{title:"状态",dataIndex:"status",width:100,formItemProps:{component:"Select",componentProps:{options:[{label:"启用",value:1},{label:"禁用",value:0}]}},bodyCell:({record:e})=>{const t=1===e.status;return b(w,{color:t?"success":"red"},{default:()=>[t?"启用":"禁用"]})}}],be={class:"flex justify-between"},ve=y("div",null,"组织架构",-1),we=h("新增部门 "),Ie=h("刷新 "),ge=h(" 编辑 "),xe=h(" 删除 "),ke=h("取消选择"),Pe=h(" 新增 "),Ce=h(" 转移 "),Se=h(" 删除 ");var Ke=i(o(r({},{name:"SystemUser"}),{setup(e){const[t]=Q(),a=u(!1),l=u(),n=x({expandedKeys:[],departmentIds:[],deptTree:[]}),s=u({selectedRowKeys:[],onChange:(e,t)=>{s.value.selectedRowKeys=e}}),d=k((()=>s.value.selectedRowKeys.length)),i=async(e={})=>{var a,l,s;const[d]=await t({modalProps:{title:(e.id?"编辑":"新增")+"部门",width:700,onFinish:async t=>{t.id=e.id,await(e.id?X:B)(t),v()}},formSchema:{labelWidth:100,layout:"vertical",schemas:ce}});null==(a=d.value)||a.updateSchema([{field:"parentId",componentProps:{treeDefaultExpandedKeys:[-1].concat((null==e?void 0:e.keyPath)||[]),treeData:[{key:-1,title:"#",children:n.deptTree}]}}]),null==(s=d.value)||s.setFieldsValue(o(r({},e),{parentId:null!=(l=e.parentId)?l:-1}))},c=async()=>{var e;const[a]=await t({modalProps:{title:"转移部门",width:700,onFinish:async e=>{await H({departmentId:e.departmentId,userIds:s.value.selectedRowKeys.map((e=>e))})}},formSchema:{labelWidth:100,layout:"vertical",schemas:ye}});null==(e=a.value)||e.updateSchema([{field:"departmentId",componentProps:{treeData:n.deptTree}}])},m=async(e={})=>{var a,s,d,r;const[o]=await t({modalProps:{title:(e.id?"编辑":"新增")+"用户",width:700,onFinish:async t=>{var a;t.id=e.id,await(e.id?ie:oe)(t),null==(a=l.value)||a.refreshTable()}},formSchema:{labelWidth:100,layout:"vertical",schemas:pe}});if(null==(s=o.value)||s.updateSchema([{field:"departmentId",componentProps:{treeDefaultExpandedKeys:(null==(a=Y(null==e?void 0:e.departmentId,n.deptTree))?void 0:a.keyPath)||[],treeData:n.deptTree}}]),null==(d=o.value)||d.setFieldsValue(e),null==e?void 0:e.id){const{roles:t}=await(i={userId:e.id},z({url:G.info,method:"get",params:i}));null==(r=o.value)||r.setFieldsValue({roles:t})}var i},f=async e=>{await t({modalProps:{title:`修改密码(${e.username})`,width:700,onFinish:async t=>{var a;await(a={userId:e.id,password:t.password},z({url:G.password,method:"post",data:a},{successMsg:"操作成功"}))}},formSchema:{labelWidth:100,layout:"vertical",schemas:me}})},v=async()=>{a.value=!0;const e=await Z().finally((()=>a.value=!1));n.deptTree=ee(e),n.expandedKeys=[...n.expandedKeys,...n.deptTree.map((e=>Number(e.key)))]};v();const w=async e=>{var t;Array.isArray(e)?V.confirm({title:"确定要删除所选的用户吗?",icon:b(W,null,null),centered:!0,onOk:async()=>{await ue({userIds:e}),v()}}):await ue({userIds:[e]}).finally(null==(t=l.value)?void 0:t.refreshTable)},I=e=>{var t,a;n.departmentIds=e,null==(a=null==(t=null==l?void 0:l.value)?void 0:t.refreshTable)||a.call(t)},U=async({page:e,limit:t})=>{const a=await function(e){return z({url:G.page,method:"post",data:e})}({page:e,limit:t,departmentIds:n.departmentIds.length?n.departmentIds:void 0});return s.value.selectedRowKeys=[],a},te=[...he,{title:"操作",width:220,dataIndex:"$action",align:"center",fixed:"right",actions:({record:e})=>[{label:"编辑",auth:{perm:"sys.user.update",effect:"disable"},onClick:()=>m(e)},{label:"改密",auth:"sys.user.password",onClick:()=>f(e)},{label:"删除",auth:"sys.user.delete",popConfirm:{title:"你确定要删除吗？",onConfirm:()=>w(e.id)}}]}];return(e,t)=>{const r=P("a-button");return p(),C(K(re),null,{"left-content":S((()=>[y("div",be,[ve,b(K(g),null,{default:S((()=>[e.$auth("sys.dept.add")?(p(),C(K(T),{key:0,placement:"top"},{title:S((()=>[we])),default:S((()=>[b(K(_),{onClick:t[0]||(t[0]=e=>i({}))})])),_:1})):j("",!0),b(K(T),{placement:"top"},{title:S((()=>[Ie])),default:S((()=>[b(K(E),{spin:a.value,onClick:v},null,8,["spin"])])),_:1})])),_:1})]),b(K(D),{expandedKeys:K(n).expandedKeys,"onUpdate:expandedKeys":t[1]||(t[1]=e=>K(n).expandedKeys=e),autoExpandParent:"","tree-data":K(n).deptTree,onSelect:I},{title:S((({key:t,title:a,formData:l})=>[b(K(O),{trigger:["contextmenu"]},{overlay:S((()=>[b(K(q),null,{default:S((()=>[b(K(q).Item,{key:"1",disabled:!e.$auth("sys.dept.update"),onClick:e=>i(l)},{default:S((()=>[ge,b(K($))])),_:2},1032,["disabled","onClick"]),b(K(q).Item,{key:"2",disabled:!e.$auth("sys.dept.delete"),onClick:e=>{return a=t,void V.confirm({title:"确定要删除该部门吗?",icon:b(W,null,null),centered:!0,onOk:async()=>{await J({departmentId:a}),v()}});var a}},{default:S((()=>[xe,b(K(F))])),_:2},1032,["disabled","onClick"])])),_:2},1024)])),default:S((()=>[y("span",null,R(a),1)])),_:2},1024)])),_:1},8,["expandedKeys","tree-data"])])),"right-content":S((()=>[b(K(L),{ref_key:"dynamicTableRef",ref:l,"header-title":"用户管理","show-index":"",titleTooltip:"请不要随意删除用户，避免到影响其他用户的使用。","data-request":U,columns:te,scroll:{x:2e3},"row-selection":s.value},N({toolbar:S((()=>[b(r,{type:"primary",disabled:!e.$auth("sys.user.add"),onClick:t[3]||(t[3]=e=>m({}))},{default:S((()=>[b(K(_)),Pe])),_:1},8,["disabled"]),b(r,{type:"success",disabled:!K(d)||!e.$auth("sys.dept.transfer"),onClick:c},{default:S((()=>[b(K(A)),Ce])),_:1},8,["disabled"]),b(r,{type:"danger",disabled:!K(d)||!e.$auth("sys.user.delete"),onClick:t[4]||(t[4]=e=>w(s.value.selectedRowKeys))},{default:S((()=>[b(K(F)),Se])),_:1},8,["disabled"])])),_:2},[K(d)?{name:"title",fn:S((()=>[b(K(M),{class:"w-full",type:"info","show-icon":""},{message:S((()=>[h(" 已选 "+R(K(d))+" 项 ",1),b(r,{type:"link",onClick:t[2]||(t[2]=e=>s.value.selectedRowKeys=[])},{default:S((()=>[ke])),_:1})])),_:1})]))}:void 0]),1032,["row-selection"])])),_:1})}}}));export{Ke as default};