import{u as le,_ as ne}from"./index.08985164.js";/* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import{d as se,a as r,r as F,c as re,aI as i,A as z,B as ie,aF as e,aE as a,aK as u,aL as p,u as _,aD as K,D as P,aQ as $,aX as ce,aY as de,bw as ue,bH as pe,bC as me,by as _e,b1 as ve,bz as fe,a$ as ge,b0 as xe,bA as be,bB as ye}from"./arco.f2670ebc.js";import{_ as he}from"./index.vue_vue_type_style_index_0_lang.e0edf712.js";import{h as Se,j as we,k as ke}from"./sonarr.15b541c7.js";import"./vue.758b0c86.js";/* empty css               *//* empty css               */const Ce={class:"container"},Te=se({__name:"index",setup(ze){const v=t=>{t.value=!0},f=t=>{setTimeout(()=>{t.value=!1},300)},{t:n}=le(),y=r(!1),h=r(!1),S=r(!1),w=r(!1),k=r(!1),c=r([]),B=r([]),U=F({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),q=re(()=>[{title:n("sonarr.example.validStatus"),dataIndex:"validStatus",slotName:"validStatus",align:"center",width:100},{title:n("sonarr.example.originalText"),dataIndex:"originalText",ellipsis:!0,tooltip:!0,sortable:{sortDirections:["ascend","descend"]}},{title:n("sonarr.example.formatText"),dataIndex:"formatText",width:500,ellipsis:!0,tooltip:!0,sortable:{sortDirections:["ascend","descend"]}}]),g={current:1,pageSize:10},d=F({showTotal:!0,showPageSize:!0,pageSizeOptions:[10,20,100,1e3],...g}),I=()=>({originalText:void 0,validStatus:void 0}),l=r(I()),x=async t=>{v(S),await ke(t).then(o=>{B.value=o.data.list,d.current=t.current,d.total=o.data.total}).finally(()=>{f(S),c.value=[]})},C=()=>{v(h),x({...g,...l.value}).finally(()=>{f(h)})},A=()=>{l.value=I()},N=t=>{x({...g,current:t,...l.value})},O=t=>{g.pageSize=t,d.pageSize=t,x({...d,...l.value})},Q=()=>{y.value=!0},j=()=>{if(!c.value||c.value.length===0){$.warning(n("sonarr.example.select.warning"));return}v(k),Se(c.value).then(()=>{$.success(n("sonarr.example.remove.success")),x({...d,...l.value})}).finally(()=>{f(k)})},H=(t,o)=>{v(w),we(t).then(()=>{$.success(n("sonarr.example.add.success")),C(),o(!0)}).catch(()=>{o(!1)}).finally(()=>{f(w)})};return C(),(t,o)=>{const M=i("Breadcrumb"),R=ce,V=de,m=ue,L=pe,X=me,T=_e,Y=ve,D=fe,G=i("icon-search"),b=ge,J=i("icon-refresh"),E=xe,W=i("icon-plus"),Z=i("icon-delete"),ee=i("icon-check-circle"),ae=i("icon-close-circle"),te=be,oe=ye;return z(),ie("div",Ce,[e(M,{items:["menu.sonarr","menu.sonarr.example"]},null,8,["items"]),e(he,{visible:y.value,"onUpdate:visible":o[0]||(o[0]=s=>y.value=s),onSave:H},null,8,["visible"]),e(oe,{class:"general-card",title:_(n)("menu.sonarr.example")},{default:a(()=>[e(T,null,{default:a(()=>[e(m,{flex:1},{default:a(()=>[e(Y,{"label-col-props":{span:7},"wrapper-col-props":{span:17},"label-align":"left",model:l.value},{default:a(()=>[e(T,{gutter:16},{default:a(()=>[e(m,{span:8},{default:a(()=>[e(V,{field:"originalText",label:t.$t("sonarr.example.originalText")},{default:a(()=>[e(R,{modelValue:l.value.originalText,"onUpdate:modelValue":o[1]||(o[1]=s=>l.value.originalText=s),"allow-clear":"",placeholder:t.$t("sonarr.example.originalText.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:a(()=>[e(V,{field:"validStatus",label:t.$t("sonarr.example.validStatus"),"label-col-props":{span:5},"wrapper-col-props":{span:15}},{default:a(()=>[e(X,{modelValue:l.value.validStatus,"onUpdate:modelValue":o[2]||(o[2]=s=>l.value.validStatus=s),"allow-clear":"",placeholder:t.$t("sonarr.example.validStatus.placeholder")},{default:a(()=>[e(L,{value:"1"},{default:a(()=>[u(p(_(n)("sonarr.example.validStatus.pass")),1)]),_:1}),e(L,{value:"0"},{default:a(()=>[u(p(_(n)("sonarr.example.validStatus.fail")),1)]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(D,{style:{height:"35px"},direction:"vertical"}),e(m,{flex:"86px",style:{"text-align":"right"}},{default:a(()=>[e(E,{size:18},{default:a(()=>[e(b,{type:"primary",loading:h.value,onClick:C},{icon:a(()=>[e(G)]),default:a(()=>[u(" "+p(t.$t("sonarr.example.search")),1)]),_:1},8,["loading"]),e(b,{onClick:A},{icon:a(()=>[e(J)]),default:a(()=>[u(" "+p(t.$t("sonarr.example.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(D,{style:{"margin-top":"0"}}),e(T,{style:{"margin-bottom":"16px"}},{default:a(()=>[e(m,{span:12},{default:a(()=>[e(E,null,{default:a(()=>[e(b,{type:"primary",status:"success",loading:w.value,onClick:Q},{icon:a(()=>[e(W)]),default:a(()=>[u(" "+p(t.$t("sonarr.example.add")),1)]),_:1},8,["loading"]),e(b,{type:"primary",status:"danger",loading:k.value,onClick:j},{icon:a(()=>[e(Z)]),default:a(()=>[u(" "+p(t.$t("sonarr.example.remove")),1)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1}),e(te,{selectedKeys:c.value,"onUpdate:selectedKeys":o[3]||(o[3]=s=>c.value=s),"row-key":"hash",size:"medium",data:B.value,columns:_(q),bordered:!1,loading:S.value,pagination:d,"row-selection":_(U),onPageSizeChange:O,onPageChange:N},{validStatus:a(({record:s})=>[s.validStatus===1?(z(),K(ee,{key:0,size:"21",style:P({color:"rgb(var(--green-6))"})},null,8,["style"])):(z(),K(ae,{key:1,size:"21",style:P({color:"rgb(var(--orange-6))"})},null,8,["style"]))]),_:1},8,["selectedKeys","data","columns","loading","pagination","row-selection"])]),_:1},8,["title"])])}}});const He=ne(Te,[["__scopeId","data-v-d2ebb8d2"]]);export{He as default};
