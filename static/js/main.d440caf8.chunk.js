(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),i=n(10),a=n.n(i),s=n(4),u=n(22),r=n(3),l=(n(32),function(e){return Object(c.jsx)("div",{className:"complete",children:Object(c.jsx)("p",{className:"complete_text",children:"\uc81c\ucd9c\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"})})}),d=n(2),j=n(12),b=n(18),O=Object(b.b)({name:"contentsReducer",initialState:{},reducers:{add_content:function(e,t){var n=Date.now();e[t.payload].contents.push({id:n})},remove_content:function(e,t){var n=t.payload,c=n.questionId,o=n.contentId,i=Object(d.a)({},e)[c].contents.filter((function(e){return e.id!==o}));e[c]=Object(d.a)(Object(d.a)({},Object(d.a)({},e)[c]),{},{contents:i})},get_content:function(e,t){var n=t.payload,c=n.questionId,o=n.contentId,i=n.text;e[c].contents.forEach((function(e,t,n){e.id===o&&(n[t]=Object(d.a)(Object(d.a)({},n[t]),{},{text:i}))}))},add_question:function(e){var t=Date.now();e[t]={id:t,title:"",desc:"",contents:[]}},remove_question:function(e,t){var n=Object.keys(e).filter((function(n){return e[n].id===t.payload}))[0],c=Object(d.a)({},e);return delete c[n],c},get_question_type:function(e,t){e[t.payload.id]=Object(d.a)(Object(d.a)({},e[t.payload.id]),{},{question_type:t.payload.type})},get_question_title:function(e,t){e[t.payload.id]=Object(d.a)(Object(d.a)({},e[t.payload.id]),{},{title:t.payload.text})},get_question_desc:function(e,t){e[t.payload.id]=Object(d.a)(Object(d.a)({},e[t.payload.id]),{},{desc:t.payload.text})}}}),x=Object(b.a)({reducer:O.reducer}),f=O.actions,p=f.add_content,h=f.remove_content,m=f.add_question,_=f.remove_question,v=f.get_content,y=f.get_question_type,g=f.get_question_title,N=f.get_question_desc,q=x,I=Object(s.b)(null,(function(e,t){return{id:t.id,onDelete:function(t){return e(h(t))},getText:function(t){return e(v(t))}}}))((function(e){var t=e.onDelete,n=e.getText,i=e.questionId,a=e.contentId,s=Object(o.useRef)();return Object(c.jsxs)("div",{className:"content_wrap",children:[Object(c.jsx)("input",{type:"checkbox",className:"radio_checkbox"}),Object(c.jsx)("input",{type:"text",className:"content_text",onChange:function(){n({questionId:i,contentId:a,text:s.current.value})},ref:s}),Object(c.jsx)("button",{className:"content_del_btn",onClick:function(){t({questionId:i,contentId:a})},children:"-"})]})})),T=Object(s.b)(null,(function(e,t){return{id:t.id,onDelete:function(t){return e(h(t))},getText:function(t){return e(v(t))}}}))((function(e){var t=e.onDelete,n=e.getText,i=e.questionId,a=e.contentId;console.log(t,n,i,a);var s=Object(o.useRef)();return Object(c.jsxs)("div",{className:"content_wrap",children:[Object(c.jsx)("input",{type:"radio",className:"radio_checkbox"}),Object(c.jsx)("input",{type:"text",className:"content_text",onChange:function(){n({questionId:i,contentId:a,text:s.current.value})},ref:s}),Object(c.jsx)("button",{className:"content_del_btn",onClick:function(){t({questionId:i,contentId:a})},children:"-"})]})})),C=Object(s.b)(null,(function(e,t){return{id:t.id,getText:function(t){return e(v(t))}}}))((function(e){var t=e.getText,n=e.questionId,i=e.contentId,a=Object(o.useRef)();return Object(c.jsx)("div",{className:"content_wrap",children:Object(c.jsx)("input",{className:"content_text textbox",ref:a,type:"text",placeholder:"\uc11c\ubca0\uc774\ub97c \ud558\ub294 \uc0ac\ub78c\uc774 \ubcf4\ub294 \uce78 \uc608\uc81c",onChange:function(){t({questionId:n,contentId:i,text:a.current.value})}})})})),k=(n(33),Object(s.b)((function(e){return{cont:e}}),(function(e,t){return{id:t.id,addContent:function(t){return e(p(t))}}}))((function(e){var t=e.option,n=e.cont,o=e.addContent,i=e.questionId;return Object(c.jsxs)("div",{children:["Textbox"!==t&&Object(c.jsx)("button",{onClick:function(){o(i)},className:"add_content_btn",children:"+"}),"Textbox"!==t?n[i].contents.map((function(e){return w(t,e,i,e.id)})):w(t,{id:Date.now()},i,Date.now())]})})));function w(e,t,n,c){switch(e){case"MultiChoice":return Object(o.createElement)(T,Object(d.a)(Object(d.a)({},t),{},{key:c,questionId:n,contentId:c}));case"Checkbox":return Object(o.createElement)(I,Object(d.a)(Object(d.a)({},t),{},{key:c,questionId:n,contentId:c}));case"Textbox":return Object(o.createElement)(C,Object(d.a)(Object(d.a)({},t),{},{key:c,questionId:n,contentId:c}));default:return Object(o.createElement)(T,Object(d.a)(Object(d.a)({},t),{},{key:c,questionId:n,contentId:c}))}}n(34);var D=Object(s.b)(null,(function(e,t){return{id:t.id,title:"",onDelete:function(){return e(_(t.id))},getTitle:function(t){return e(g(t))},getDesc:function(t){return e(N(t))},getType:function(t){return e(y(t))}}}))((function(e){var t=e.onDelete,n=e.getType,i=e.getTitle,a=e.getDesc,s=e.id,u=Object(o.useState)("MultiChoice"),r=Object(j.a)(u,2),l=r[0],d=r[1],b=Object(o.useRef)(),O=Object(o.useRef)(),x=Object(o.useRef)();return Object(c.jsxs)("li",{className:"question",children:[Object(c.jsx)("p",{className:"question_title",children:Object(c.jsx)("input",{type:"text",ref:b,placeholder:"Question Text",onChange:function(){i({id:s,text:b.current.value})}})}),Object(c.jsx)("p",{className:"question_desc",children:Object(c.jsx)("textarea",{ref:O,placeholder:"input desc",onChange:function(){a({id:s,text:b.current.value})}})}),Object(c.jsxs)("select",{ref:x,onChange:function(e){d(e.currentTarget.value);var t=Array.from(x.current.childNodes).filter((function(e){return!0===e.selected}))[0].innerText;n({id:s,type:t})},className:"type_options",children:[Object(c.jsx)("option",{value:"MultiChoice",children:"MultiChoice"}),Object(c.jsx)("option",{value:"Checkbox",children:"Checkbox"}),Object(c.jsx)("option",{value:"Textbox",children:"Textbox"})]}),Object(c.jsx)(k,{option:l,questionId:s}),Object(c.jsx)("button",{onClick:function(){window.confirm("\uc774 \ud56d\ubaa9\uc744 \uc9c0\uc6b8\uae4c\uc694?")&&t()},className:"question_del_btn",children:"Remove"})]})})),R=(n(35),Object(s.b)((function(e){return{data:e}}),(function(e){return{addQuestion:function(){return e(m())}}}))((function(e){var t=e.data,n=e.addQuestion,i=Object(o.useState)("Initial value"),a=Object(j.a)(i,2),s=a[0],u=a[1],l=Object(o.useRef)(),b=Object(o.useRef)(),O=Object(r.e)(),x=function(e){var t=document.createElement("div");t.innerHTML='<p class="spinner"></p>',t.className="loading",t.style.height="".concat(window.outerHeight,"px"),e.parentNode.parentNode.prepend(t)};return console.log("home"),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{className:"title",children:[Object(c.jsx)("span",{className:"circle"}),Object(c.jsx)("span",{className:"title_text",children:"TurnChat! Form"})]}),Object(c.jsxs)("section",{className:"main_body",children:[Object(c.jsxs)("div",{className:"main_body_content",children:[Object(c.jsxs)("div",{className:"title_area",children:[Object(c.jsx)("div",{className:"default_title",children:Object(c.jsx)("textarea",{ref:l,defaultValue:"Default title"})}),Object(c.jsx)("p",{className:"default_value",children:Object(c.jsx)("input",{ref:b,type:"text",value:s,onChange:function(e){u(e.currentTarget.value)}})})]}),Object(c.jsx)("ul",{className:"questions",children:Object.keys(t).map((function(e){return Object(o.createElement)(D,Object(d.a)(Object(d.a)({},t[e]),{},{key:e}))}))})]}),Object(c.jsx)("div",{className:"add_btn_area",children:Object(c.jsx)("button",{onClick:n,children:"+"})})]}),Object(c.jsx)("p",{className:"submit_btn_area",children:Object(c.jsx)("button",{className:"submit_btn",onClick:function(e){x(e.currentTarget),setTimeout((function(){return O.push("/complete")}),1500),console.log({survey_title:l.current.value,survey_subTitle:b.current.value,data:t})},children:"Submit"})})]})})));var E=function(){return Object(c.jsxs)(u.a,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",children:Object(c.jsx)(R,{})}),Object(c.jsx)(r.a,{exact:!0,path:"/complete",children:Object(c.jsx)(l,{})})]})};n(37);a.a.render(Object(c.jsx)(s.a,{store:q,children:Object(c.jsx)(E,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d440caf8.chunk.js.map