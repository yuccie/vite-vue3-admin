var e=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,t=(r,l,a)=>l in r?e(r,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[l]=a,i=(e,r)=>{for(var l in r||(r={}))o.call(r,l)&&t(e,l,r[l]);if(a)for(var l of a(r))n.call(r,l)&&t(e,l,r[l]);return e};import{k as s,m as c}from"./index.3831b623.js";import{r as u,y as v,au as d}from"./vendor.02104a40.js";function p(){const{show:e}=s();return[async({modalProps:a,formSchema:o})=>{const n=u();var t,s;return await e((t=i({destroyOnClose:!0},a),s={onCancel:e=>{var r,l;null==(r=n.value)||r.resetFields(),null==(l=null==a?void 0:a.onCancel)||l.call(a,e)},content:()=>v(c,{ref:n,formSchema:o},null),onOk:async()=>{var e,r,l,o,t;const s=(null==(e=n.value)?void 0:e.formModel)||{};try{await(null==(r=n.value)?void 0:r.validate()),await(null==(l=null==a?void 0:a.onFinish)?void 0:l.call(a,i({},s))),null==(o=n.value)||o.resetFields()}catch(c){return null==(t=null==a?void 0:a.onFail)||t.call(a,i({},s)),Promise.reject(c)}}},r(t,l(s)))),await d(),[n]}]}export{p as u};
