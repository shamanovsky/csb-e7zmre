(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{22:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var s=c(10),a=c(5),n=(c(9),c(1)),r=function(e){return Object(n.jsxs)("div",{style:{padding:"20px 30px",color:"#5c6bc0"},children:[Object(n.jsx)("h2",{children:Object(n.jsx)("button",{onClick:e.resetState,children:"Back to list"})}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{class:"card mb-3 text-dark border-danger bg-warning",style:{width:"33rem",color:"#5c6bc0"},children:[Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsxs)("h1",{class:"card-title",children:["Name: ",e.data.name]}),Object(n.jsxs)("h3",{class:"card-text",children:["ID: ",e.data.id]}),Object(n.jsxs)("h4",{class:"card-text",children:["Role: ",e.data.role]}),Object(n.jsxs)("h4",{class:"card-text",children:["Department: ",e.data.department]}),Object(n.jsx)("img",{src:e.data.photo,class:"card-img-top",alt:""})]}),Object(n.jsx)("div",{})]})]})},i=function(e){return Object(n.jsx)("div",{style:{color:"#5c6bc0",padding:"20px 10px"},children:e.data.map((function(t){return Object(n.jsxs)("p",{onClick:function(){var c;c=t.id,e.setSelectedEmployee(c)},style:{cursor:"pointer"},role:"button",children:[t.name," -- ",t.department]},t.id)}))})},j=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["Error: ",e.message]}),Object(n.jsx)("button",{onClick:e.resetState,children:"Back to List"})]})},d=(c(22),function(){return Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("div",{className:"ball"})})}),l=c(29),o=c(3);function b(){var e=Object(o.useState)(!0),t=Object(a.a)(e,2),c=t[0],s=t[1],b=Object(o.useState)([]),u=Object(a.a)(b,2),O=u[0],x=u[1],h=Object(o.useState)(null),p=Object(a.a)(h,2),m=p[0],f=p[1],v=Object(o.useState)(!1),g=Object(a.a)(v,2),S=g[0],y=g[1],k=function(){x([]),f(null),s(!0),y(!1),E()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;s(!0);var t="";e&&parseInt(e,10)>0&&(t=parseInt(e,10)),l.a.get("https://api.matgargano.com/employees/".concat(t)).then((function(e){x(e.data),s(!1)})).catch((function(e){y(e.message||"No error given")}))};return Object(o.useEffect)((function(){E()}),[]),Object(o.useEffect)((function(){m&&E(m)}),[m]),Object(n.jsxs)("div",{className:"App",children:[!!S&&Object(n.jsx)(j,{resetState:k,message:S}),!S&&Object(n.jsxs)(n.Fragment,{children:[!!c&&Object(n.jsx)(d,{}),!c&&Object(n.jsxs)("div",{children:[!m&&Object(n.jsx)(i,{setSelectedEmployee:f,data:O}),!!m&&Object(n.jsx)(r,{resetState:k,data:O})]})]})]})}var u=document.getElementById("root");Object(s.createRoot)(u).render(Object(n.jsx)(b,{}))},9:function(e,t,c){}},[[27,1,2]]]);
//# sourceMappingURL=main.1e9e6435.chunk.js.map