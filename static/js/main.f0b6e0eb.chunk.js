(this.webpackJsonppollfront=this.webpackJsonppollfront||[]).push([[0],{161:function(e,t,n){e.exports=n(292)},166:function(e,t,n){},173:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(13),r=n.n(c),i=(n(166),n(48)),l=n(37),u=n(49),m=n(34),s=n(33),b=n(29),p=n(35),d=n(328),h=n(333),g=n(331),E=n(334),f=n(335),v=n(336);function O(){var e=Object(s.a)(["\n    subscription {\n        pollAdded {\n            id\n            name\n        }\n    }\n"]);return O=function(){return e},e}function j(){var e=Object(s.a)(["\n    {\n\n        polls{\n            name\n            id\n        }\n\n    }\n"]);return j=function(){return e},e}var _=Object(d.a)((function(e){return{root:{width:"100%",maxWidth:700,margin:"50px auto",backgroundColor:e.palette.background.paper}}})),w=Object(p.a)(j()),y=Object(p.a)(O());function x(){var e=Object(b.b)(w),t=e.loading,n=e.error,c=e.data,r=Object(a.useState)([]),u=Object(m.a)(r,2),s=u[0],p=u[1],d=(Object(b.c)(y,{onSubscriptionData:function(e){var t=e.subscriptionData.data.pollAdded;console.log(t);var n=Object(i.a)(s).concat(t);p(n)}}),_());return t?o.a.createElement("p",null,"Loading..."):n?o.a.createElement("p",null,"Error :("):o.a.createElement(g.a,null,o.a.createElement(h.a,{component:"nav",className:d.root,"aria-label":"mailbox folders"},c.polls.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{component:l.b,to:"/show/".concat(e.id),button:!0},o.a.createElement(f.a,{primary:e.name})),o.a.createElement(v.a,null))})),s.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{component:l.b,to:"/show/".concat(e.id),button:!0},o.a.createElement(f.a,{primary:e.name})),o.a.createElement(v.a,null))}))))}var q=n(106),k=n(337),C=n(90),S=n(338),$=n(340),B=n(339),N=n(344);function D(){var e=Object(s.a)(["\n    mutation addPoll($name: String!,$questions:[QuestionIn!]!) {\n        addPoll(name: $name,questions:$questions) {\n            id\n            name\n        }\n    }\n"]);return D=function(){return e},e}var A=Object(d.a)((function(e){return{root:{width:"90vw",margin:"0 auto"},questions:{width:"80%",margin:"0 auto"},menuButton:{marginRight:e.spacing(2)},title:{width:"10vw"}}})),P=Object(p.a)(D());function I(){var e,t=Object(u.g)(),n=A(),c=Object(a.useState)([{text:"",choice_a:"",choice_b:"",choice_c:"",choice_d:""}]),r=Object(m.a)(c,2),l=r[0],s=r[1],p=Object(b.a)(P),d=Object(m.a)(p,2),h=d[0],E=(d[1],Object(a.useState)([""])),f=Object(m.a)(E,2),v=f[0],O=f[1],j=function(e){var t=e.target.name.split("-"),n=parseInt(t[0]),a=t[1],o=Object(i.a)(l);o[n][a]=e.target.value,s(o),console.log(l)};return o.a.createElement("form",{className:n.root,onSubmit:function(e){e.preventDefault(),h({variables:{name:v,questions:l}}).then((function(e){return t.push("/home")}))}},o.a.createElement(g.a,{style:{height:"30px",margin:"20px"},container:!0,direction:"row",justify:"space-between"},o.a.createElement(N.a,{label:"\u0646\u0627\u0645 \u0646\u0638\u0631\u0633\u0646\u062c\u06cc",value:v,onChange:function(e){O(e.target.value)}}),o.a.createElement(k.a,(e={color:"primary",style:{backgroundColor:"#0091EA",color:"white",marginLeft:"5%"},round:!0},Object(q.a)(e,"color","info"),Object(q.a)(e,"onClick",(function(e){return s(l.concat({text:"",choice_a:"",choice_b:"",choice_c:"",choice_d:""})),void console.log(l)})),e),o.a.createElement(C.a,null,"\u0627\u0641\u0632\u0648\u062f\u0646 \u0633\u0648\u0627\u0644"))),o.a.createElement(g.a,{spacing:6,className:n.questions,container:!0,direction:"column"},l.map((function(e,t){return o.a.createElement(g.a,{item:!0,className:n.question,container:!0,direction:"column",key:e.id},o.a.createElement(S.a,null,o.a.createElement(B.a,null,o.a.createElement(N.a,{placeholder:"\u0639\u0646\u0648\u0627\u0646 \u0633\u0648\u0627\u0644",style:{width:"100%",marginBottom:"20px"},onChange:function(e){return function(e){var t=parseInt(e.target.name),n=Object(i.a)(l);n[t].text=e.target.value,s(n)}(e)},name:"".concat(t),value:"".concat(e.text)}),o.a.createElement(N.a,{placeholder:"\u06af\u0632\u06cc\u0646\u0647 \u06f1",style:{width:"67%",marginBottom:"10px"},onChange:function(e){return j(e)},name:"".concat(t,"-choice_a"),value:"".concat(e.choice_a)}),o.a.createElement(N.a,{placeholder:"\u06af\u0632\u06cc\u0646\u0647 \u06f2",style:{width:"67%",marginBottom:"10px"},onChange:function(e){return j(e)},name:"".concat(t,"-choice_b"),value:"".concat(e.choice_b)}),o.a.createElement(N.a,{placeholder:"\u06af\u0632\u06cc\u0646\u0647 \u06f3",style:{width:"67%",marginBottom:"10px"},onChange:function(e){return j(e)},name:"".concat(t,"-choice_c"),value:"".concat(e.choice_c)}),o.a.createElement(N.a,{placeholder:"\u06af\u0632\u06cc\u0646\u0647 \u06f4",style:{width:"67%",marginBottom:"10px"},onChange:function(e){return j(e)},name:"".concat(t,"-choice_d"),value:"".concat(e.choice_d)})),o.a.createElement($.a,null,o.a.createElement(k.a,{color:"secondary",name:"".concat(t),round:!0,sm:!0,style:{},onClick:function(){return function(e){l.splice(e,1);var t=Object(i.a)(l);s(t)}(t)}},"\u062d\u0630\u0641 \u0633\u0648\u0627\u0644"))))})),o.a.createElement(k.a,{type:"submit",style:{color:"white",backgroundColor:"#0091EA",marginTop:"40px",width:"30%",margin:"0 auto"}},"\u062a\u0627\u06cc\u06cc\u062f")))}n(173);var L=n(43);function T(){var e=Object(s.a)(["\n    mutation fillPoll($id: String!,$choices:[Choices!]!) {\n        fillPoll(id: $id,choices:$choices)\n    }\n"]);return T=function(){return e},e}function Q(){var e=Object(s.a)(["\n    query Poll($id: String!) {\n        poll(id: $id) {\n            name\n            questions{\n                id\n                text\n                choice_a\n                choice_b\n                choice_c\n                choice_d\n            }\n        }\n    }\n"]);return Q=function(){return e},e}var W=Object(p.a)(Q()),F=Object(p.a)(T());function G(){var e=Object(u.h)().id,t=Object(b.b)(W,{variables:{id:e}}),n=t.loading,c=t.error,r=t.data,i=Object(b.a)(F),l=Object(m.a)(i,1)[0],s=Object(a.useState)({}),p=Object(m.a)(s,2),d=p[0],h=p[1];return n?o.a.createElement("p",null,"Loading..."):c?o.a.createElement("p",null,"Error :("):o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=Object.values(d);n.length===r.poll.questions.length?l({variables:{id:e,choices:n}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})):alert("please answer all questions")}},o.a.createElement(g.a,{direction:"column",container:!0},o.a.createElement(L.Test,{style:{width:"60%",margin:"50px auto"},onOptionSelect:function(e){return h(e)}},r.poll.questions.map((function(e,t){return o.a.createElement(L.QuestionGroup,{key:e.id,questionNumber:t},o.a.createElement(L.Question,null,e.text),o.a.createElement(L.Option,{value:"A"},e.choice_a),o.a.createElement(L.Option,{value:"B"},e.choice_b),o.a.createElement(L.Option,{value:"C"},e.choice_c),o.a.createElement(L.Option,{value:"D"},e.choice_d))})))),o.a.createElement(k.a,{color:"primary",style:{width:"300px",marginTop:"-30px",marginBottom:"200px"},type:"submit"},"submit"))}var J=n(150),R=n.n(J);function M(){var e=Object(s.a)(["\n    subscription poll($id:String!) {\n        poll(id:$id){\n            questions{\n                number_a\n                number_b\n                number_c\n                number_d\n            }\n        }\n    }\n"]);return M=function(){return e},e}function z(){var e=Object(s.a)(["\n    query Poll($id: String!) {\n        poll(id: $id) {\n            name\n            questions{\n                id\n                text\n                choice_a\n                number_a\n                choice_b\n                number_b\n                choice_c\n                number_c\n                choice_d\n                number_d\n            }\n        }\n    }\n"]);return z=function(){return e},e}var H=Object(p.a)(z()),K=Object(p.a)(M());function U(){var e=Object(u.h)().id,t=Object(a.useState)([]),n=Object(m.a)(t,2),c=n[0],r=n[1],i=Object(b.b)(H,{variables:{id:e},onCompleted:function(e){console.log(e.poll.questions),r(e.poll.questions),console.log(c)}}),l=i.loading,s=i.error,p=i.data;Object(b.c)(K,{variables:{id:e},onSubscriptionData:function(e){var t=e.subscriptionData.data.poll;r(t.questions),console.log(c)}});return l?o.a.createElement("p",null,"Loading..."):s?o.a.createElement("p",null,"Error :("):o.a.createElement(g.a,{container:!0,style:{marginTop:"30px",marginBottom:"50px"},alignContent:"center",direction:"column"},p.poll.questions.map((function(e,t){return o.a.createElement(S.a,{style:{width:500,margin:"20px"},key:e.id},o.a.createElement(R.a,{ylabel:"\u062a\u0639\u062f\u0627\u062f",width:400,height:250,margin:{top:20,right:20,bottom:30,left:40},data:[{text:e.choice_a,value:c[t]?c[t].number_a:e.number_a},{text:e.choice_b,value:c[t]?c[t].number_b:e.number_b},{text:e.choice_c,value:c[t]?c[t].number_c:e.number_c},{text:e.choice_d,value:c[t]?c[t].number_d:e.number_d}],style:{color:"blue"}}),o.a.createElement(B.a,null,o.a.createElement(C.a,null,e.text)))})))}var V=n(341),X=n(342),Y=n(343),Z=n(152),ee=n.n(Z),te=n(17),ne=n(151),ae=n.n(ne),oe=n(345),ce=n(346),re=Object(te.create)({plugins:[].concat(Object(i.a)(Object(oe.a)().plugins),[ae()()])}),ie=Object(d.a)((function(e){return{root:{flexGrow:1,justifyContent:"space-between"},menuButton:{marginRight:e.spacing(2)},title:{width:"10vw"}}}));var le=function(){var e=ie();return o.a.createElement(l.a,null,o.a.createElement("div",{dir:"rtl",className:"App"},o.a.createElement(ce.b,{jss:re},o.a.createElement(V.a,{position:"static",color:"secondary"},o.a.createElement(X.a,{className:e.root},o.a.createElement(Y.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(ee.a,null)),o.a.createElement(k.a,{component:l.b,to:"/home",className:e.title},o.a.createElement(C.a,{style:{color:"white"},variant:"h6"},"\u062e\u0627\u0646\u0647")),o.a.createElement(k.a,{component:l.b,to:"/addpoll",color:"inherit"},"\u0628\u0631\u06af\u0630\u0627\u0631\u06cc \u0646\u0638\u0631\u0633\u0646\u062c\u06cc"))),o.a.createElement(u.d,null,o.a.createElement(u.b,{exact:!0,path:"/",render:function(){return o.a.createElement(u.a,{to:"/home"})}}),o.a.createElement(u.b,{path:"/home",component:x}),o.a.createElement(u.b,{path:"/addpoll",component:I}),o.a.createElement(u.b,{path:"/fill/:id",component:G}),o.a.createElement(u.b,{path:"/show/:id",component:U})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=n(23),me=n(28),se=n(53),be=n(65),pe=n(15),de=n(153),he=n(4),ge=new be.a({uri:"https://blooming-hamlet-40237.herokuapp.com/"}),Ee=new de.a({uri:"ws://blooming-hamlet-40237.herokuapp.com/graphql",options:{reconnect:!0}}),fe=Object(pe.d)((function(e){var t=e.query,n=Object(he.l)(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),Ee,ge),ve=new me.a({link:fe,cache:new se.a});r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ue.a,{client:ve},o.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[161,1,2]]]);
//# sourceMappingURL=main.f0b6e0eb.chunk.js.map