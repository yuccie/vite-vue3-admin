const e=(t,n=null,a=[])=>t.filter((e=>e.parentId===n)).map((l=>{const i=a.concat(n||[]),r=e(t,l.id,i);return Object.assign(l,{keyPath:i,title:l.name,key:l.id,value:l.id,formData:l,children:r.length?r:null})})),t=(e,n=null,a=[])=>e.filter((e=>e.parentId===n)).map((l=>{const i=a.concat(n||[]),r=t(e,l.id,i);return Object.assign(l,{keyPath:i,title:l.name,key:l.id,value:l.id,formData:l,children:r.length?r:null})})),n=(e,t=[],a="id",l="children")=>t.reduce(((t,i)=>{var r;return i[a]===e?i:t||((null==(r=i[l])?void 0:r.length)?n(e,i[l],a,l):void 0)}),void 0);export{e as a,t as b,n as f};
