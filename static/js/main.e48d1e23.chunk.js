(this["webpackJsonpchat-app-frontend"]=this["webpackJsonpchat-app-frontend"]||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(52),o=n.n(a),r=n(11),i=n(2),j=n(4),l=(n(62),n(1)),m=function(e){var t=e.className,n=e.propValue,c=e.onChange,s=e.placeholder;return Object(l.jsx)("div",{className:t,children:Object(l.jsx)("input",{className:"login-input",type:"text",placeholder:s,value:n,onChange:c,required:!0})})},u=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),o=Object(j.a)(a,2),i=o[0],u=o[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"login-container",children:Object(l.jsxs)("div",{className:"login-inner-container",children:[Object(l.jsx)("div",{className:"username-container",children:Object(l.jsx)(m,{className:"username-input",propValue:n,onChange:function(e){return s(e.target.value)},placeholder:"Enter Username"})}),Object(l.jsxs)("div",{className:"roomName-container",children:[Object(l.jsx)(m,{className:"roomName-input",value:i,onChange:function(e){return u(e.target.value)},placeholder:"Enter Room"}),Object(l.jsx)(r.b,{to:"/".concat(i,"?username=").concat(n,"&roomName=").concat(i),onClick:function(e){return n&&i?null:e.preventDefault()},children:Object(l.jsx)("button",{className:"joinRoom-button",children:"Sign In"})})]})]})})})},d=n(57),b=n(54),h=n.n(b)()("/");console.log("this is server: ","production");var O=h,v=(n(97),function(e){var t=e.username,n=Object(c.useState)(""),s=Object(j.a)(n,2),a=s[0],o=s[1];return Object(l.jsx)("div",{className:"joinRoom-container",children:Object(l.jsxs)("div",{className:"roomName-input",children:[Object(l.jsx)("input",{type:"text",placeholder:"Room",value:a,onChange:function(e){return o(e.target.value)}}),Object(l.jsx)(r.b,{to:"/".concat(a,"?username=").concat(t,"&roomName=").concat(a),children:Object(l.jsx)("button",{className:"joinRoom-button",children:"Join Room"})})]})})}),x=n(55),f=n.n(x),p=n(56),N=n.n(p),g=n(23),R=n.n(g),S=(n(116),function(e){var t=[];return function(n){for(var c in e.onlineUsers)t.push(e.onlineUsers[c])}(e.onlineUsers),Object(l.jsxs)("div",{className:"onlineUsers-container",children:[Object(l.jsx)("h3",{className:"onlineUsers-header",children:"Online Friends"}),Object(l.jsx)("div",{className:"onlineUsers-list",children:t.map((function(e,t){return Object(l.jsx)("div",{children:e},R.a.generate())}))})]})}),C=(n(117),function(e){var t;return function(e){var n=new Set;Object.keys(e).forEach((function(t){return n.add(e[t][1])})),t=Array.from(n)}(e.activeRooms),Object(l.jsxs)("div",{className:"activeRooms-container",children:[Object(l.jsx)("h3",{className:"activeRooms-header",children:"Chat Rooms"}),Object(l.jsx)("div",{className:"activeRooms-list",children:t.map((function(e){return Object(l.jsx)("div",{className:"activeRooms-".concat(e),children:e},R.a.generate())}))})]})}),y=(n(118),function(e){var t=e.location,n=Object(c.useState)(""),s=Object(j.a)(n,2),a=s[0],o=s[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),m=i[0],u=i[1],b=Object(c.useState)([]),h=Object(j.a)(b,2),x=h[0],p=h[1],g=Object(c.useState)(""),R=Object(j.a)(g,2),y=R[0],E=R[1],U=Object(c.useState)({}),I=Object(j.a)(U,2),k=I[0],w=I[1],M=Object(c.useState)({}),J=Object(j.a)(M,2),q=J[0],B=J[1];Object(c.useEffect)((function(){O.on("join",(function(e,t){w(e),B(t)}))}),[]),console.log("this is the active rooms: ",q),Object(c.useEffect)((function(){var e=f.a.parse(t.search),n=e.username,c=e.roomName;u(c),o(n),O.emit("join",{userId:O.id,room:c,username:n})}),[t.search]),Object(c.useEffect)((function(){O.on("message",(function(e){p((function(t){return[].concat(Object(d.a)(t),[e])}))}))}),[]),Object(c.useEffect)((function(){O.emit("message",{userId:O.id,room:m,username:a}),p([])}),[m,a]);return Object(l.jsxs)("div",{className:"chatRoom-container",children:[Object(l.jsxs)("h5",{className:"room-header",children:["Room: ",m]}),Object(l.jsx)("div",{className:"new-room",children:Object(l.jsx)(v,{username:a})}),Object(l.jsxs)("div",{className:"chatRoom-inner",children:[Object(l.jsx)(S,{onlineUsers:k,activeRooms:q}),Object(l.jsxs)("div",{className:"message-container",children:[Object(l.jsx)("div",{className:"message-list",children:x.map((function(e,t){var n="";return e.message?(e.id===O.id&&(n="-self"),Object(l.jsxs)("div",{className:"msg-container".concat(n),children:[Object(l.jsx)("div",{className:"msg-timestamp".concat(n),children:N()(e.timestamp).format("hh:mm")}),e.id!==O.id&&!e.isChatBot&&Object(l.jsxs)("div",{className:"msg-username".concat(n),children:[e.username,":"]}),Object(l.jsx)("div",{className:"msg-message".concat(n),children:e.message})]},"".concat(e.timestamp).concat(t))):null}))}),Object(l.jsx)("div",{className:"sendMessage-container",children:Object(l.jsx)("div",{className:"sendMessage-formContainer",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={message:y,userId:O.id,username:a,room:m};O.emit("message",t),E("")},children:[Object(l.jsx)("input",{type:"text",placeholder:"Type Message Here...",value:y,onChange:function(e){return E(e.target.value)},required:!0}),Object(l.jsx)("button",{type:"submit",children:"Send"})]})})})]}),Object(l.jsx)(C,{activeRooms:q})]})]})}),E=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(i.a,{exact:!0,path:"/:roomId",component:y})]})})};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root"))},62:function(e,t,n){},97:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.e48d1e23.chunk.js.map