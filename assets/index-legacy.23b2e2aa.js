System.register(["./dynamic-table-legacy.1d55156b.js","./index-legacy.f7bd82b9.js","./vendor-legacy.89403358.js"],(function(e){"use strict";var t,n,a,i,l,r,c,d,s,o,u,f,b,h,y,g;return{setters:[function(e){t=e.D},function(e){n=e.y,a=e.J,i=e.K},function(e){l=e.an,r=e.o,c=e.cN,d=e.d,s=e.r,o=e.b,u=e.A,f=e.P,b=e.y,h=e.bz,y=e.h,g=e.F}],execute:function(){function m(){return n({url:a.list,method:"get"})}e("default",d({name:"SystemMonitorOnline",setup(e){const d=s();((e={})=>{const t=i().client,n=new Map,a=()=>{Object.keys(e).forEach((a=>{if(t){const i=e[a];n.set(a,i),t.subscribe(a,i)}}))};l((()=>t),a),r(a),c((()=>{Object.keys(e).forEach((e=>{t&&n.has(e)&&t.unsubscribe(e,n.get(e))}))}))})({connect(){var e;null===(e=d.value)||void 0===e||e.refreshTable()},online(){var e;null===(e=d.value)||void 0===e||e.refreshTable()},offline(){var e;null===(e=d.value)||void 0===e||e.refreshTable()}});const v=[{title:"#",dataIndex:"id",width:80,align:"center",hideInSearch:!0},{title:"用户名",dataIndex:"username",align:"center",bodyCell:({record:e})=>b(g,null,[b("span",{class:"pr-16px"},[e.username]),e.isCurrent&&b(h,{color:"red"},{default:()=>[y("当前")]})])},{title:"登录IP",dataIndex:"ip",width:140,align:"center"},{title:"登录时间",dataIndex:"time",align:"center"},{title:"操作系统",dataIndex:"os",align:"center"},{title:"浏览器",dataIndex:"browser",align:"center"},{title:"操作",dataIndex:"$action",align:"center",actions:({record:e})=>[{label:"下线",auth:"sys.online.kick",disabled:e.disable,popConfirm:{title:"确定下线该用户吗?",onConfirm:()=>p(e)}}]}],p=async e=>{var t;await(t={id:e.id},n({url:a.kick,method:"post",data:t}))};return(e,n)=>(o(),u(f(t),{ref_key:"dynamicTableRef",ref:d,"header-title":"在线用户","title-tooltip":"这是真实操作，请不要随意将其他用户踢下线。","data-request":f(m),columns:v},null,8,["data-request"]))}}))}}}));
