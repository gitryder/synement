(this.webpackJsonpsynement=this.webpackJsonpsynement||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(12),s=n.n(c),a=n(16),r=n(1),o=n(17),i=n.n(o),l=n(20),j=n(7),d=(n(26),n(0));var u=function(e){var t=e.data,n=e.onCardClick,c=e.showSubtitle,s=t.subject,a=t.date_due,r=function(e){switch(e){case"Assignment":return{long:"assignment",short:"A"};case"Experiment":return{long:"experiment",short:"E"};case"Quiz":return{long:"quiz",short:"Q"};default:return{long:"other",short:"O"}}}(t.type);return Object(d.jsxs)("div",{className:"wrapper",onClick:n,children:[Object(d.jsx)("div",{className:"indicator ".concat(r.long),children:Object(d.jsx)("p",{children:r.short})}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("p",{className:"title",children:s}),c&&Object(d.jsx)("p",{className:"subtitle",children:a})]})]})},h=(n(28),function(e){var t,n=e.data,c=e.isOpen,s=e.onClose;return c?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"overlay"}),Object(d.jsxs)("div",{className:"modal",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("p",{className:"modal-title",children:(t=n.subject,t.match(/[A-Z0-9]/g).join(""))}),Object(d.jsx)("button",{className:"modal-close-btn",id:"modal-close-btn",onClick:s,children:"\xd7"})]}),Object(d.jsxs)("div",{class:"modal-body",children:[Object(d.jsx)("strong",{children:"Type:"}),Object(d.jsx)("p",{children:n.type}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{children:"Due date:"}),Object(d.jsx)("p",{children:n.date_due}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{children:"Title: "}),Object(d.jsx)("p",{children:n.title}),Object(d.jsx)("br",{}),Object(d.jsx)("strong",{children:"Description:"}),Object(d.jsx)("p",{children:n.desc}),Object(d.jsx)("br",{})]})]})]}):null}),b=(n(29),function(e){var t=e.name,n=e.date,c=e.workData,s=e.showDateOnCards,a=Object(r.useState)(!1),o=Object(j.a)(a,2),i=o[0],l=o[1],b=Object(r.useState)({}),m=Object(j.a)(b,2),O=m[0],p=m[1];return Object(d.jsxs)("div",{className:"board",children:[n&&Object(d.jsx)("h1",{className:"board-date",children:n}),Object(d.jsx)("h2",{className:"board-title",children:t}),Object(d.jsx)("div",{className:"board-list",children:c.map((function(e){return Object(d.jsx)(u,{data:e,onCardClick:function(){p(e),l(!0)},showSubtitle:s},e.id)}))}),Object(d.jsx)(h,{data:O,isOpen:i,onClose:function(){return l(!1)}})]})}),m="academicYearPreference";function O(){return localStorage.getItem(m)}function p(e){localStorage.setItem(m,e)}var x={SE:"se",TE:"te",BE:"be"},f={today:"https://synement.herokuapp.com/se/today",tomorrow:"https://synement.herokuapp.com/se/tomorrow",after:"https://synement.herokuapp.com/se/after"},g={today:"https://synement.herokuapp.com/te/today",tomorrow:"https://synement.herokuapp.com/te/tomorrow",after:"https://synement.herokuapp.com/te/after"},y={today:"https://synement.herokuapp.com/be/today",tomorrow:"https://synement.herokuapp.com/be/tomorrow",after:"https://synement.herokuapp.com/be/after"},w=(n(30),function(){var e=Object(r.useState)(x.TE),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){console.log(localStorage),c(O())}),[]),Object(d.jsxs)("div",{className:"main-app-container",children:[Object(d.jsx)("h1",{className:"settings-page-title",children:"settings"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"all-settings-container",children:Object(d.jsxs)("div",{className:"setting",children:[Object(d.jsx)("input",{type:"radio",name:"setting-btn",id:"year-se",checked:n===x.SE,onClick:function(){c(x.SE),p(x)},readOnly:!0}),Object(d.jsx)("label",{htmlFor:"year-se",children:"SE"}),Object(d.jsx)("input",{type:"radio",name:"setting-btn",id:"year-te",checked:n===x.TE,onClick:function(){c(x.TE),p(x.TE)},readOnly:!0}),Object(d.jsx)("label",{htmlFor:"year-te",children:"TE"}),Object(d.jsx)("input",{type:"radio",name:"setting-btn",id:"year-be",checked:n===x.BE,onClick:function(){c(x.BE),p(x.BE)},readOnly:!0}),Object(d.jsx)("label",{htmlFor:"year-be",children:"BE"})]})})]})}),v=n(13),k=n(2);n(31);var N=function(){var e=(new Date).toDateString().slice(3,11),t=new Date((new Date).getTime()+864e5).toDateString().slice(3,11),n=Object(r.useState)([]),c=Object(j.a)(n,2),s=c[0],a=c[1],o=Object(r.useState)([]),i=Object(j.a)(o,2),l=i[0],u=i[1],h=Object(r.useState)([]),m=Object(j.a)(h,2),N=m[0],C=m[1];return Object(r.useEffect)((function(){O()||p(x.TE),console.log(localStorage);var e=function(e){switch(e){case x.SE:return f;case x.TE:return g;case x.BE:return y;default:return g}}();fetch(e.today).then((function(e){return e.json()})).then((function(e){return a(e)})),fetch(e.tomorrow).then((function(e){return e.json()})).then((function(e){return u(e)})),fetch(e.after).then((function(e){return e.json()})).then((function(e){return C(function(e){return e.sort((function(e,t){return new Date(e.date_due)-new Date(t.date_due)}))}(e))}))}),[]),Object(d.jsx)(v.a,{children:Object(d.jsxs)(k.c,{children:[Object(d.jsx)(k.a,{exact:!0,path:"/",children:Object(d.jsxs)("div",{className:"main-app-container",children:[Object(d.jsx)("div",{className:"nav",children:Object(d.jsx)(v.b,{to:"/settings",children:Object(d.jsx)("svg",{className:"settings-icon",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M12 23L2.5 17.5V6.5L12 1L21.5 6.5V17.5L12 23ZM12 3.312L4.5 7.653V16.347L12 20.689L19.5 16.347V7.653L12 3.311V3.312ZM12 16C10.9395 15.997 9.92294 15.5759 9.171 14.828C8.02724 13.6839 7.68525 11.9635 8.30448 10.4689C8.92371 8.97436 10.3822 8 12 8C13.0603 8.00284 14.0765 8.42402 14.828 9.172C16.3895 10.734 16.3895 13.266 14.828 14.828C14.0764 15.5757 13.0602 15.9968 12 16ZM12 10C11.0458 9.9998 10.2244 10.6736 10.0381 11.6094C9.85175 12.5452 10.3524 13.4823 11.2339 13.8476C12.1153 14.2129 13.1321 13.9047 13.6623 13.1114C14.1926 12.3182 14.0886 11.2608 13.414 10.586C13.0398 10.2098 12.5307 9.99879 12 10Z",fill:"#FFFFFF"})})})}),Object(d.jsx)("h1",{className:"page-title",children:Object(d.jsx)("a",{className:"gh-repo",target:"_blank",rel:"noreferrer",href:"https://github.com/grewscant/synement",children:"synement"})}),Object(d.jsx)("p",{className:"page-author",children:"Made with \ud83d\udc96 by Danyl Fernandes"}),Object(d.jsxs)("p",{className:"page-author contributors",children:["\u2728 ",Object(d.jsx)("strong",{children:"Contributors:"})," Gandharv More"]}),Object(d.jsxs)("div",{className:"all-boards-container",children:[Object(d.jsx)(b,{name:"Today",date:e,workData:s}),Object(d.jsx)(b,{name:"Tomorrow",date:t,workData:l}),Object(d.jsx)(b,{name:"Coming up",date:"Next",workData:N,showDateOnCards:!0})]})]})}),Object(d.jsx)(k.a,{path:"/settings",children:Object(d.jsx)(w,{})})]})})},C=new l.a("G-MMZFM66Y0X");!function(){var e=Object(a.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.initialize().then((function(e){return console.log("Successfully started.")})).catch((function(e){return console.log("Failure starting.")})).finally((function(){i.a.render(Object(d.jsx)(N,{}),document.getElementById("root"))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()()}},[[37,1,2]]]);
//# sourceMappingURL=main.e9d1afce.chunk.js.map