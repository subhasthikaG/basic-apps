(this["webpackJsonpbasic-apps"]=this["webpackJsonpbasic-apps"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),i=n.n(s),c=(n(45),n(18)),o=(n(46),n(47),n(87)),u=n(7),l=function(e){e.username;var t=Object(a.useState)(),n=Object(c.a)(t,2),r=n[0],s=n[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("header",{className:"Home-header",children:[Object(u.jsxs)("p",{children:["Hi ",r]}),Object(u.jsx)("input",{style:{width:"380px",marginLeft:"40px",marginRight:"20px",marginTop:"0%"},variant:"outlined",margin:"normal",id:"",name:"username",label:"Username",type:"text",onChange:function(e){return s(e.target.value)}}),Object(u.jsx)(o.a,{style:{width:"10%",color:"white",backgroundColor:"#06759F",marginTop:"20%"},href:"/login",children:" Log out"})]})})},j=(n(53),n(86)),d="testUser",m="abc123",b=function(e){var t=e.setUsername,n=Object(a.useState)(""),r=Object(c.a)(n,2),s=r[0],i=r[1],l=Object(a.useState)(""),b=Object(c.a)(l,2),g=b[0],p=b[1];return Object(u.jsx)("header",{className:"Log-header",children:Object(u.jsxs)("div",{className:"LoginForm",children:[Object(u.jsx)("h4",{children:"Sign In"})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log(s),console.log(g),s===d&&g===m?(alert("logged in "),t(s)):alert("Invalid username or password")}(e)},children:[Object(u.jsx)(j.a,{style:{width:"380px",marginLeft:"40px",marginRight:"20px",marginTop:"0%"},variant:"outlined",margin:"normal",rules:[{required:!0,message:"Please input your username!"}],value:s,id:"",name:"username",label:"Username",onChange:function(e){return i(e.target.value)},type:"text"}),Object(u.jsx)("br",{}),Object(u.jsx)(j.a,{style:{width:"380px",marginLeft:"40px",marginRight:"20px"},variant:"outlined",margin:"normal",rules:[{required:!0,message:"Please input your password!"}],id:"",label:"Password",name:"password",type:"password",onChange:function(e){return p(e.target.value)},autoFocus:!0}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a,{style:{width:"380px",marginLeft:"40px",marginRight:"20px"},type:"submit",variant:"contained",color:"primary",children:"Sign In"})]})]})})},g=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(u.jsx)("div",{className:"App",children:n?Object(u.jsx)(l,{username:n}):Object(u.jsx)(b,{setUsername:r})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),p()}},[[55,1,2]]]);
//# sourceMappingURL=main.0902ed15.chunk.js.map