(this.webpackJsonpchit_chat=this.webpackJsonpchit_chat||[]).push([[0],{122:function(e,t){},132:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(8),i=a.n(o),l=(a(91),a(92),a(93),a(30)),m=a(133),s=a(42),u=a(166),d=a(171),h=a(172),E=a(173),f=a(170),g=a(174),v=a(178),p=a(179),b=a(37),w=a(78),x=a(52),C=a(75),O=a.n(C),y=a(14),j=c.a.createContext(),N={General:[{from:"",msg:"Welcome"}],Soprano:[{from:"",msg:""}],Alto:[{from:"",msg:""}],Tenor:[{from:"",msg:""}],Musicians:[{from:"",msg:""}]};function k(e,t){var a=t.payload,n=a.from,r=a.msg,c=a.section;switch(t.type){case"RECEIVE_MESSAGE":return Object(x.a)(Object(x.a)({},e),{},Object(b.a)({},c,[].concat(Object(w.a)(e[c]),[{from:n,msg:r}])));default:return e}}function B(e){n.emit("chat message",e)}function S(e){var t=c.a.useReducer(k,N),a=Object(l.a)(t,2),r=a[0],o=a[1];n||(n=O()(":3001")).on("chat message",(function(e){console.log({msg:e}),o({type:"RECEIVE_MESSAGE",payload:e})}));var i=Object(y.b)().user;return c.a.createElement(j.Provider,{value:{allChats:r,sendChatAction:B,user:i}},e.children)}var W=Object(u.a)((function(e){return{root:{margin:"50px",padding:e.spacing(3,2)},flex:{display:"flex",alignItems:"center"},sectionWindow:{width:"30%",height:"300px",borderRight:"1px solid black"},chatWindow:{width:"70%",height:"300px",padding:"10px"},chatBox:{width:"85%"},button:{width:"15%"}}}));function A(){var e=W(),t=c.a.useContext(j),a=t.allChats,n=t.sendChatAction,r=t.user,o=Object.keys(a),i=c.a.useState(o[0]),u=Object(l.a)(i,2),b=u[0],w=u[1],x=c.a.useState(""),C=Object(l.a)(x,2),O=C[0],y=C[1];return c.a.createElement("div",null,c.a.createElement(m.a,{className:e.root,elevation:3},c.a.createElement(s.a,{variant:"h4",component:"h4"},"Chit Chat"),c.a.createElement(s.a,{variant:"h6",gutterBottom:!0},b),c.a.createElement(f.a,null),c.a.createElement("div",{className:e.flex},c.a.createElement("div",{className:e.sectionWindow},c.a.createElement(d.a,null,o.map((function(e){return c.a.createElement(h.a,{onClick:function(e){return w(e.target.innerText)},key:e,button:!0},c.a.createElement(E.a,{primary:e}))})))),c.a.createElement("div",{className:e.chatWindow},a[b].map((function(t,a){return c.a.createElement("div",{className:e.flex,key:a},c.a.createElement(p.a,{src:t.from.picture}),c.a.createElement(s.a,{variant:"body1",gutterBottom:!0}," ",t.msg," "))})))),c.a.createElement("div",{className:e.flex},c.a.createElement(v.a,{id:"filled-basic",label:"Type Message",className:e.chatBox,variant:"filled",value:O,onChange:function(e){return y(e.target.value)}}),c.a.createElement(g.a,{variant:"contained",color:"primary",className:e.button,onClick:function(){n({from:r,msg:O,section:b}),y("")}},"Send"))))}var I=function(){var e=Object(y.b)().loginWithRedirect;return c.a.createElement(g.a,{color:"inherit",onClick:function(){return e()}},"Log In")},R=a(175),G=a(176),M=a(177),T=a(77),_=a.n(T),J=function(){var e=Object(y.b)().logout;return c.a.createElement(g.a,{color:"inherit",onClick:function(){return e({returnTo:window.location.origin})}},"Log Out")},F=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function L(){var e=F();return c.a.createElement("div",{className:e.root},c.a.createElement(R.a,{position:"static"},c.a.createElement(G.a,null,c.a.createElement(M.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(_.a,null)),c.a.createElement(s.a,{variant:"h6",className:e.title},"Choir Companion"),c.a.createElement(I,null),c.a.createElement(J,null))))}var V=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(L,null),c.a.createElement(S,null,c.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(y.a,{domain:"dev-5rx8qacm.us.auth0.com",clientId:"cFze4Ncr7710nldMw5WnF8aBnOKS9J6D",redirectUri:window.location.origin},c.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(132)},91:function(e,t,a){},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.86f247e6.chunk.js.map