(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__1owm-"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__3Qqkj",loading:"QuoteForm_loading__3mNA-",control:"QuoteForm_control__3R6go",actions:"QuoteForm_actions__2_7Ug"}},55:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(37),r=c(2),a=c(41),s=c.n(a),i=c(1),u=function(e){return Object(i.jsx)("div",{className:s.a.card,children:e.children})},l=c(14),d=c(42),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],s=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{when:a,message:function(e){return"Are you sure want to leave this page? All your data will be lost?"}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){s(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){s(!1)},className:"btn",children:"Add Quote"})})]})})]})},m=c(35),f=c(36);t.default=function(e){var t=Object(m.a)(f.b),c=t.sendRequest,o=t.status,a=Object(r.h)();return Object(n.useEffect)((function(){"completed"===o&&a.replace("/Quotes")}),[o,a]),Object(i.jsx)(b,{isLoading:"pending"===o,onAddQuote:function(e){c(e)}})}}}]);
//# sourceMappingURL=6.8c1eb260.chunk.js.map