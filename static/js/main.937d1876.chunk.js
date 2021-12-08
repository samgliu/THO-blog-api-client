(this["webpackJsonptho-blog-api-client"]=this["webpackJsonptho-blog-api-client"]||[]).push([[0],{59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(25),s=n.n(a),i=n(26),o=n(27),u=n(31),l=n(29),j=n(6),d=n(3),p=n(2),b=n.n(p),m=n(5),O=n(4),x=n(0),h=[],f=Object(c.createContext)(h),v=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(O.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!1),o=Object(O.a)(i,2),u=o[0],l=o[1],j=Object(c.useState)(!1),d=Object(O.a)(j,2),p=d[0],b=d[1];return Object(x.jsx)(f.Provider,{value:{user:a,setUser:s,isLoggedIn:u,setIsLoggedIn:l,isAdmin:p,setIsAdmin:b,doesHttpOnlyCookieExist:function(e){var t=new Date;t.setTime(t.getTime()+1e3);var n="expires="+t.toUTCString();return document.cookie=e+"=new_value;path=/;"+n,-1===document.cookie.indexOf(e+"=")}},children:t})},g=n(28),w=n.n(g);n(55).config();var y=w.a.create({baseURL:"https://morning-dawn-19775.herokuapp.com/",headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"https://samgliu.github.io"},withCredentials:!0});var k=function(){var e=Object(c.useContext)(f),t=e.user,n=e.setUser,r=e.isLoggedIn,a=e.setIsLoggedIn,s=e.isAdmin,i=e.setIsAdmin;function o(){return(o=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n(null),a(!1),i(!1),localStorage.removeItem("blogUser"),e.next=7,y.get("/logout");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsxs)("header",{children:[Object(x.jsx)(j.b,{to:"/",children:Object(x.jsx)("h1",{children:"My Personal Blog"})}),r&&null!==t?Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:["Welcome back ",t.Firstname," ",t.Lastname]}),s?Object(x.jsx)("li",{children:"Admin"}):Object(x.jsx)("li",{children:Object(x.jsx)(j.b,{to:"/upgrade",children:Object(x.jsx)("p",{children:"Upgrade"})})}),Object(x.jsx)("li",{children:Object(x.jsx)(j.b,{to:"/",onClick:function(e){return o.apply(this,arguments)},children:Object(x.jsx)("p",{children:"Sign Out"})})})]}):Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(j.b,{to:"/signup",children:Object(x.jsx)("p",{children:"Sign Up"})})}),Object(x.jsx)("li",{children:Object(x.jsx)(j.b,{to:"/signin",children:Object(x.jsx)("p",{children:"Sign In"})})})]})]})};var C=function(){return Object(x.jsx)("div",{})};var N=function(e){var t=e.post,n=e.deletePostLocal,r=Object(c.useContext)(f).isAdmin,a=Object(d.f)();function s(){return(s=Object(m.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=t.target.parentElement.parentElement.id,e.next=4,i(c);case 4:n(c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return o.apply(this,arguments)}function o(){return(o=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="/".concat(t,"/delete"),e.next=4,y.delete(n);case 4:200===e.sent.status&&a("/"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(x.jsx)(j.b,{to:"".concat(t._id),children:Object(x.jsxs)("div",{className:"post-container",id:t._id,children:[Object(x.jsxs)("div",{className:"post-header",children:[Object(x.jsx)("div",{}),Object(x.jsx)("h4",{children:t.Topic}),r?Object(x.jsx)("button",{className:"delete-btn",onClick:function(e){return s.apply(this,arguments)},children:"Delete"}):Object(x.jsx)("div",{})]}),Object(x.jsx)("p",{className:"content-preview",children:t.Content}),Object(x.jsxs)("div",{className:"author-container",children:[Object(x.jsxs)("h6",{children:[t.User.Firstname," ",t.User.Lastname," "]}),Object(x.jsx)("p",{children:t.Timestamp.substring(0,10)})]})]})})};var S=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){function e(){return(e=Object(m.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/posts");case 3:t=e.sent,n={status:t.status+"-"+t.statusText,headers:t.headers,data:t.data},r(n.data),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]);var a=function(e){return Object(x.jsx)(N,{post:e,deletePostLocal:function(e){return function(e){var t=n.filter((function(t){return t._id!==e}));r(t)}(e)}},e._id)};return n?Object(x.jsx)("div",{className:"posts-container",children:n.map((function(e){return a(e)}))}):Object(x.jsx)("div",{})};var I=function(e){var t=Object(c.useContext)(f),n=t.setUser,r=t.setIsLoggedIn,a=t.setIsAdmin,s=t.isAdmin;return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("blogUser"));null!==e&&(r(!0),n(e),a(e.isAdmin))}),[n,r]),Object(x.jsxs)("div",{children:[Object(x.jsx)(k,{}),s?Object(x.jsx)(j.b,{to:"/create-post",className:"link-new-post",children:"Create New Post"}):Object(x.jsx)("div",{}),Object(x.jsx)(S,{}),Object(x.jsx)(C,{})]})},U=n(30);var L=function(e){var t=e.comments,n=e.deleteCommentLocal,r=Object(c.useContext)(f).isAdmin,a=Object(d.g)().id,s=Object(d.f)();function i(e){return o.apply(this,arguments)}function o(){return(o=Object(m.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=t.target.parentElement.parentElement.id,e.next=4,u(c);case 4:n(c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return l.apply(this,arguments)}function l(){return(l=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="/".concat(a,"/comment/").concat(t,"/delete"),e.next=4,y.delete(n);case 4:200===e.sent.status&&s("/".concat(a)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(x.jsx)("div",{className:"comments-container",children:t.map((function(e){return function(e){return Object(x.jsxs)("div",{id:e._id,className:"comment-container",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h6",{children:e.Name}),Object(x.jsx)("p",{className:"time",children:e.Timestamp.substring(0,10)})]}),Object(x.jsxs)("div",{className:"comment-wrapper",children:[Object(x.jsx)("p",{children:e.Content}),r?Object(x.jsx)("button",{className:"delete-btn",onClick:i,children:"Delete"}):Object(x.jsx)("div",{})]})]},e._id)}(e)}))})};var A=function(e){e.pid;var t=e.handlePostCommentData,n="",c="";return Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Name",onChange:function(e){n=e.target.value},required:!0}),Object(x.jsx)("textarea",{type:"text",rows:"4",maxLength:"200",id:"content",name:"content",placeholder:"Write comments here...",onChange:function(e){c=e.target.value},required:!0}),Object(x.jsx)("button",{type:"submit",value:"Submit",onClick:function(e){return function(e){e.preventDefault(),""!==n&&""!==c&&t(n,c)}(e)},children:"Comment"})]})};var E=function(){var e=Object(d.g)().id,t=Object(c.useState)([]),n=Object(O.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),i=Object(O.a)(s,2),o=i[0],u=i[1],l=Object(c.useContext)(f),j=l.setUser,p=l.setIsLoggedIn,h=l.setIsAdmin;function v(){return(v=Object(m.a)(b.a.mark((function t(n,c){var r,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"/".concat(e,"/comment-create?name=").concat(n,"&content=").concat(c),t.next=4,y.post("/".concat(e,"/comment-create?name=").concat(n,"&content=").concat(c));case 4:r=t.sent,a=[].concat(Object(U.a)(o),[{Name:n,Content:c,Timestamp:(new Date).toString(),_id:r.data._id}]),u(a),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){function t(){return(t=Object(m.a)(b.a.mark((function t(){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.get("/".concat(e));case 3:n=t.sent,c={status:n.status+"-"+n.statusText,headers:n.headers,data:n.data},a(c.data),u(c.data.Comments),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}();var n=JSON.parse(localStorage.getItem("blogUser"));null!==n&&(p(!0),j(n),h(n.isAdmin))}),[e,a,u,j,p,h]),r&&r.User?Object(x.jsxs)("div",{children:[Object(x.jsx)(k,{}),Object(x.jsxs)("div",{className:"post-detail-container",id:e,children:[Object(x.jsxs)("div",{className:"post-header",children:[Object(x.jsx)("div",{}),Object(x.jsx)("h4",{children:r.Topic}),Object(x.jsx)("div",{})]}),Object(x.jsxs)("div",{className:"author-container",children:[Object(x.jsxs)("h6",{children:[r.User.Firstname," ",r.User.Lastname," "]}),Object(x.jsx)("p",{children:r.Timestamp.substring(0,10)})]}),Object(x.jsx)("p",{children:r.Content}),Object(x.jsx)(A,{pid:e,handlePostCommentData:function(e,t){return function(e,t){return v.apply(this,arguments)}(e,t)}}),Object(x.jsx)(L,{comments:o,deleteCommentLocal:function(e){return function(e){var t=o.filter((function(t){return t._id!==e}));u(t)}(e)}})]})]}):Object(x.jsx)("div",{})},_=n(10),D=n(9);var P=function(){var e=Object(c.useState)(null),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({topic:"",content:""}),s=Object(O.a)(a,2),i=s[0],o=s[1],u=Object(c.useContext)(f),l=u.setUser,j=u.setIsLoggedIn,p=u.setIsAdmin,h=Object(d.f)();function v(){if(""!==i.topic&&""!==i.content)return r(null),!0;r("Some field is empty!")}function g(e){o(Object(D.a)(Object(D.a)({},i),{},Object(_.a)({},e.target.name,e.target.value)))}function w(){return(w=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!v()){e.next=6;break}return e.next=4,C();case 4:e.next=7;break;case 6:console.log(i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return N.apply(this,arguments)}function N(){return(N=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/create-post?topic=".concat(i.topic,"&content=").concat(i.content),e.next=4,y.post(t);case 4:200===e.sent.status&&h("/"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("blogUser"));null!==e&&(j(!0),l(e),p(e.isAdmin))}),[l,j]),Object(x.jsxs)("div",{children:[Object(x.jsx)(k,{}),Object(x.jsxs)("form",{className:"sign-up-form-container",children:[Object(x.jsx)("h3",{children:"New Post"}),null!==n?Object(x.jsx)("div",{className:"error",children:n}):Object(x.jsx)("div",{}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Topic"}),Object(x.jsx)("input",{type:"text",placeholder:"Topic",name:"topic",onChange:g,required:!0})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Content"}),Object(x.jsx)("textarea",{type:"text",name:"content",rows:"10",placeholder:"Enter content",onChange:g,required:!0})]}),Object(x.jsx)("button",{type:"submit",onClick:function(e){return function(e){return w.apply(this,arguments)}(e)},children:"Post"})]})]})};var q=function(){var e=Object(c.useState)(null),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({firstname:"",lastname:"",username:"",email:"",password:"",confirm:""}),s=Object(O.a)(a,2),i=s[0],o=s[1],u=Object(d.f)();function l(){if(""===i.firstname||""===i.lastname||""===i.username||""===i.email||""===i.password||""===i.confirm)r("Some field is empty!");else{if(i.confirm===i.password)return r(null),!0;r("Password confirmation does not match!")}}function j(e){o(Object(D.a)(Object(D.a)({},i),{},Object(_.a)({},e.target.name,e.target.value)))}function p(){return(p=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!l()){e.next=6;break}return e.next=4,h();case 4:e.next=7;break;case 6:console.log(i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return f.apply(this,arguments)}function f(){return(f=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/signup?firstname=".concat(i.firstname,"&lastname=").concat(i.lastname,"&username=").concat(i.username,"&email=").concat(i.email,"&password=").concat(i.password,"&confirm=").concat(i.confirm),e.next=4,y.post(t);case 4:200===e.sent.status&&u("/signin"),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(x.jsxs)("div",{children:[Object(x.jsx)(k,{}),Object(x.jsxs)("form",{className:"sign-up-form-container",children:[Object(x.jsx)("h3",{children:"Sign Up"}),null!==n?Object(x.jsx)("div",{className:"error",children:n}):Object(x.jsx)("div",{}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"First name"}),Object(x.jsx)("input",{type:"text",placeholder:"First name",name:"firstname",onChange:j,required:!0})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Last name"}),Object(x.jsx)("input",{type:"text",placeholder:"Last name",name:"lastname",onChange:j,required:!0})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"User name"}),Object(x.jsx)("input",{type:"text",placeholder:"User name",name:"username",onChange:j,required:!0})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Email address"}),Object(x.jsx)("input",{type:"email",placeholder:"Enter email",name:"email",onChange:j,required:!0})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password",placeholder:"Enter password",onChange:j,required:!0}),Object(x.jsx)("label",{children:"Confirm Password"}),Object(x.jsx)("input",{type:"password",name:"confirm",placeholder:"Confirm password",onChange:j,required:!0})]}),Object(x.jsx)("button",{type:"submit",onClick:function(e){return function(e){return p.apply(this,arguments)}(e)},children:"Sign Up"})]})]})};var T=function(){var e=Object(c.useState)(null),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({username:"",password:""}),s=Object(O.a)(a,2),i=s[0],o=s[1],u=Object(c.useContext)(f),l=u.setUser,j=u.setIsLoggedIn,p=Object(d.f)();function h(){if(""!==i.username&&""!==i.password)return r(null),!0;r("Some field is empty!")}function v(e){o(Object(D.a)(Object(D.a)({},i),{},Object(_.a)({},e.target.name,e.target.value)))}function g(){return(g=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!h()){e.next=6;break}return e.next=4,w();case 4:e.next=7;break;case 6:console.log(i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return C.apply(this,arguments)}function C(){return(C=Object(m.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/signin?username=".concat(i.username,"&password=").concat(i.password),e.next=4,y.post(t);case 4:200===(n=e.sent).status&&(j(!0),l(n.data),localStorage.setItem("blogUser",JSON.stringify(n.data)),p("/")),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(x.jsxs)("div",{children:[Object(x.jsx)(k,{}),Object(x.jsxs)("form",{className:"sign-up-form-container",children:[Object(x.jsx)("h3",{children:"Sign In"}),null!==n?Object(x.jsx)("div",{className:"error",children:n}):Object(x.jsx)("div",{}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"User name"}),Object(x.jsx)("input",{type:"text",placeholder:"User name",name:"username",onChange:v,required:!0})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password",placeholder:"Enter password",onChange:v,required:!0})]}),Object(x.jsx)("button",{type:"submit",onClick:function(e){return function(e){return g.apply(this,arguments)}(e)},children:"Sign In"})]})]})};var J=function(){var e=Object(c.useState)(null),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({admin_password:""}),s=Object(O.a)(a,2),i=s[0],o=s[1],u=Object(c.useContext)(f),l=u.setUser,j=u.setIsLoggedIn,p=u.setIsAdmin,h=Object(d.f)();function v(){if(""!==i.admin_password)return r(null),!0;r("Some field is empty!")}function g(){return(g=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!v()){e.next=6;break}return e.next=4,w();case 4:e.next=7;break;case 6:console.log(i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return C.apply(this,arguments)}function C(){return(C=Object(m.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="/upgrade-admin?admin_password=".concat(i.admin_password),e.next=4,y.put(t);case 4:200===(n=e.sent).status&&(j(!0),p(!0),l(n.data),localStorage.setItem("blogUser",JSON.stringify(n.data)),h("/")),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(x.jsxs)("div",{children:[Object(x.jsx)(k,{}),Object(x.jsxs)("form",{className:"sign-up-form-container",children:[Object(x.jsx)("h3",{children:"Upgrade to Admin"}),null!==n?Object(x.jsx)("div",{className:"error",children:n}):Object(x.jsx)("div",{}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Admin Password"}),Object(x.jsx)("input",{type:"password",name:"admin_password",placeholder:"Enter password",onChange:function(e){o(Object(D.a)(Object(D.a)({},i),{},Object(_.a)({},e.target.name,e.target.value)))},required:!0})]}),Object(x.jsx)("button",{type:"submit",onClick:function(e){return function(e){return g.apply(this,arguments)}(e)},children:"Upgrade"})]})]})},F=function(){return Object(x.jsx)(j.a,{children:Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{exact:!0,path:"/",element:Object(x.jsx)(I,{})}),Object(x.jsx)(d.a,{exact:!0,path:"/signup",element:Object(x.jsx)(q,{})}),Object(x.jsx)(d.a,{exact:!0,path:"/signin",element:Object(x.jsx)(T,{})}),Object(x.jsx)(d.a,{exact:!0,path:"/upgrade",element:Object(x.jsx)(J,{})}),Object(x.jsx)(d.a,{exact:!0,path:"/create-post",element:Object(x.jsx)(P,{})}),Object(x.jsx)(d.a,{exact:!0,path:"/:id",element:Object(x.jsx)(E,{})})]})})},B=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)(v,{children:Object(x.jsx)(F,{})})}}]),n}(c.Component),M=B;n(59);s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.937d1876.chunk.js.map