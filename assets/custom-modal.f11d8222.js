var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{d as l,k as n,x as p,b,c,y as d,P as u,by as m,z as v,aq as y,h as f,ad as j}from"./vendor.02104a40.js";/* empty css              *//* empty css              */import{k as O,c as g}from"./index.3831b623.js";const w=f("弹出弹窗"),x=f("函数式调用弹窗"),P=l((h=((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&o(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&o(e,r,t[r]);return e})({},{name:"CustomModal"}),t(h,r({setup(e){const t=O(),r=n({visible:!1}),a=()=>{t.show({title:"我是标题",content:"hello"})},s=()=>{r.visible=!1};return(e,t)=>{const i=p("a-button"),o=j;return b(),c("div",null,[d(u(m),{message:"自定义模态框",description:"对ant-design-vue的modal进行二次封装，自定义一个可拖拽、可调整大小的模态框",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),d(o,null,{default:v((()=>[d(u(y),null,{default:v((()=>[d(i,{type:"primary",onClick:t[0]||(t[0]=e=>u(r).visible=!0)},{default:v((()=>[w])),_:1}),d(i,{type:"primary",onClick:a},{default:v((()=>[x])),_:1})])),_:1})])),_:1}),d(u(g),{visible:u(r).visible,"onUpdate:visible":t[1]||(t[1]=e=>u(r).visible=e),onOk:s},null,8,["visible"])])}}}))));var h;export{P as default};