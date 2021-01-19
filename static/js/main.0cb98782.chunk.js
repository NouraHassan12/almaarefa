(this.webpackJsonpalmaarefa=this.webpackJsonpalmaarefa||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a(1),c=a(9),i=a.n(c),r=(a(75),a(21)),l=a(22),o=a(28),p=a(26),h=(a(76),a(37)),u=a(59),j=(a(77),a(0)),d=a(20),g=a(25),b="CHANGE_LANG",O=function(e){return function(t){localStorage.setItem("chosenLanguage",e),t({type:b,payload:e})}},x=a(45),f=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onChange=function(e){return n.changeLanguage(e)},n.changeLanguage=function(e){e.preventDefault(),n.props.changeLang(e.target.id)},n.showSidebar=function(){n.setState({sidebar:!n.state.sidebar})},n.state={sidebar:!1,text:x.en},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){e!==this.props&&("ar"===this.props.language?this.setState({text:x.ar}):this.setState({text:x.en}))}},{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(j.b.Provider,{value:{color:"#fff"},children:[Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsx)(d.b,{to:"#",className:"menu-user",children:Object(n.jsx)(h.b,{onClick:this.showSidebar})}),Object(n.jsxs)("div",{className:"nav-text",children:[Object(n.jsx)(d.b,{className:"ar"===this.props.language?"lanStyle":"",id:"ar",onClick:this.onChange,children:"AR"}),Object(n.jsx)(d.b,{className:"en"===this.props.language?"lanStyle":"",onClick:this.onChange,id:"en",children:"EN"})]})]}),Object(n.jsx)("nav",{className:this.state.sidebar?"nav-menu active":"nav-menu",children:Object(n.jsxs)("ul",{className:"nav-menu-items",onClick:this.showSidebar,children:[Object(n.jsx)("li",{className:"navbar-toggle",children:Object(n.jsx)(d.b,{className:"admin-toggle",children:Object(n.jsxs)("p",{children:["  ",Object(n.jsx)(h.c,{})," Admission male ",Object(n.jsx)(u.a,{})]})})}),Object(n.jsx)("li",{className:"nav-text",children:Object(n.jsxs)(d.b,{to:"/",children:[Object(n.jsx)(h.d,{}),Object(n.jsx)("span",{children:this.state.text.Applicants})]})}),Object(n.jsx)("li",{className:"nav-text",children:Object(n.jsxs)(d.b,{to:"/date",children:[Object(n.jsx)(h.a,{}),Object(n.jsx)("span",{children:this.state.text.dates})]})})]})})]})})}}]),a}(s.Component),m=Object(g.b)((function(e){return{language:e.lang.language}}),{changeLang:O})(f),v=a(12),y="FETCH_APPLICANTS_REQUEST",C="FETCH_APPLICANTS_SUCCESS",P="FETCH_APPLICANTS_FAILURE",S=a(60),N=a.n(S),w=function(){return{type:y}},A=function(){return function(e){e(w),N.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){console.log(t.data,"applicants");var a=t.data;e(function(e){return{type:C,payload:e}}(a))})).catch((function(t){var a=t.message;e(function(e){return{type:P,payload:e}}(a))}))}},D=a(140),k=a(144),L=a(143),E=a(139),F=a(141),T=a(142),I=a(135),R=a(145),_=a(45),U=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:+e.target.value}),n.setState({page:0})},n.state={page:0,rowsPerPage:10,text:_.en},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchApplicants()}},{key:"componentDidUpdate",value:function(e,t){e!==this.props&&("ar"===this.props.language?this.setState({text:_.ar}):this.setState({text:_.en}))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"applicants",children:Object(n.jsxs)(I.a,{style:{width:"80%"},children:[Object(n.jsx)(E.a,{style:{height:"500px"},children:Object(n.jsxs)(D.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(n.jsx)(F.a,{children:Object(n.jsxs)(T.a,{children:[Object(n.jsxs)(L.a,{align:"center",children:[" ",this.state.text.name]}),Object(n.jsxs)(L.a,{align:"center",children:[" ",this.state.text.status]}),Object(n.jsx)(L.a,{align:"center",children:this.state.text.email})]})}),Object(n.jsx)(k.a,{children:this.props.applicantsData.loading?Object(n.jsx)("h2",{children:"Loading"}):this.props.applicantsData.error?Object(n.jsx)("h2",{children:this.props.applicantsData.error}):this.props.applicantsData&&this.props.applicantsData.applicants&&this.props.applicantsData.applicants.map((function(e){return Object(n.jsxs)(T.a,{children:[Object(n.jsx)(L.a,{align:"center",children:e.name}),Object(n.jsx)(L.a,{align:"center",children:e.username}),Object(n.jsx)(L.a,{align:"center",children:e.email})]},e.id)}))})]})}),Object(n.jsx)(R.a,{rowsPerPageOptions:[10,15,25],component:"div",count:this.props.applicantsData.applicants.length,rowsPerPage:this.state.rowsPerPage,page:this.state.page,onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage})]})})}}]),a}(s.Component),H=Object(g.b)((function(e){return{applicantsData:e.applicants,language:e.lang.language}}),(function(e){return{fetchApplicants:function(){return e(A())},changeLang:function(){return e(O())}}}))(U),J=a(45),B=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={text:J.en},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){e!==this.props&&("ar"===this.props.language?this.setState({text:J.ar}):this.setState({text:J.en}))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"dates",children:Object(n.jsxs)("h1",{children:[" ",this.state.text.dates]})})}}]),a}(s.Component),G=Object(g.b)((function(e){return{applicantsData:e.applicants,language:e.lang.language}}),(function(e){return{changeLang:function(){return e(O())}}}))(B),M=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(m,{}),Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.a,{path:"/",exact:!0,component:H}),Object(n.jsx)(v.a,{path:"/date",component:G})]})]})})}}]),a}(s.Component),Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,147)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))},W=a(23),q=a(61),z=a(62),K=a(34),V={loading:!1,applicants:[],error:""},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(K.a)(Object(K.a)({},e),{},{loading:!0});case C:return{loading:!1,applicants:t.payload,error:""};case P:return{loading:!1,applicants:[],error:t.payload};default:return e}},Y={language:"en"},Z=Object(W.combineReducers)({applicants:X,lang:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(K.a)(Object(K.a)({},e),{},{language:t.payload});default:return e}}}),$=Object(W.createStore)(Z,Object(q.composeWithDevTools)(Object(W.applyMiddleware)(z.a)));i.a.render(Object(n.jsx)(g.a,{store:$,children:Object(n.jsx)(M,{})}),document.getElementById("root")),Q()},45:function(e){e.exports=JSON.parse('{"en":{"Applicants":"Applicants","dates":"Dates","name":"name","status":"status","email":"email"},"ar":{"Applicants":"\u0627\u0644\u0645\u062a\u0642\u062f\u0645\u064a\u0646","dates":"\u0627\u0644\u062a\u0648\u0627\u0631\u064a\u062e","name":"\u0627\u0644\u0627\u0633\u0645","status":"\u0627\u0644\u062d\u0627\u0644\u0629","email":"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"}}')},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.0cb98782.chunk.js.map