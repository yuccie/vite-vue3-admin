System.register(["./dynamic-table-legacy.1d55156b.js","./index-legacy.8892aaf8.js","./vendor-legacy.89403358.js","./index-legacy.f7bd82b9.js"],(function(e){"use strict";var t,n,a,r,c,l,d,i,s,u,o;return{setters:[function(e){t=e.D},function(e){n=e.b},function(e){a=e.d,r=e.b,c=e.A,l=e.P,d=e.y,i=e.F,s=e.h,u=e.bz,o=e.cy},function(){}],execute:function(){e("default",a({name:"SystemScheduleTaskLog",setup(e){const a=e=>{switch(e){case 0:return"danger";case 1:return"success"}},g=[{title:"#",dataIndex:"id",width:80,align:"center",hideInSearch:!0},{title:"任务编号",dataIndex:"taskId",align:"center"},{title:"任务名称",dataIndex:"name",align:"center"},{title:"异常信息",dataIndex:"detail",align:"center",bodyCell:({record:e})=>{var t;return d(i,null,[null!==(t=e.detail)&&void 0!==t?t:"无"])}},{title:"耗时",dataIndex:"consumeTime",align:"center",bodyCell:({record:e})=>d(u,null,{default:()=>[e.consumeTime,s("ms")]})},{title:"状态",dataIndex:"status",align:"center",bodyCell:({record:e})=>{let t;return d(u,{color:a(e.status)},"function"==typeof(n=t=(e=>{switch(e){case 0:return"失败";case 1:return"成功"}})(e.status))||"[object Object]"===Object.prototype.toString.call(n)&&!o(n)?t:{default:()=>[t]});var n}},{title:"执行时间",dataIndex:"createdAt",align:"center"}];return(e,a)=>(r(),c(l(t),{"header-title":"任务日志","data-request":l(n),search:!1,columns:g},null,8,["data-request"]))}}))}}}));
