(this.webpackJsonpdestilore=this.webpackJsonpdestilore||[]).push([[0],{116:function(e,t,n){e.exports=n(397)},397:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),i=n.n(c),l=n(27),o=n(56),s=n(11),u=n(447),p=n(44),m=n(32),f=n(33),d=n(37),h=n(35),E=n(429),b=n(431),g=n(432),v=n(435),j=n(434),O=n(433),y=n(436),T=n(400),R=function(e){return e.articlesState.articles},w=function(e){return e.articlesState.article},k=function(e){return e.articlesState.error},C=function(e){return{type:"ARTICLE_FETCH",articleUrl:e}},x=function(e){return{type:"ARTICLE_FETCH_RESULT",article:e}},L=function(e){return{type:"ARTICLES_FETCH_RESULT",articles:e}},A=function(e){return{type:"ARTICLES_FETCH_ERROR",error:e}},S={flexGrow:1,paddingTop:10},I={flexGrow:1},_={height:300},F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(m.a)(this,n),t.call(this,e)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.getArticles()}},{key:"prepareArticles",value:function(e){var t={};return Object.entries(this.props.articles).map((function(n){var a=Object(p.a)(n,2),r=a[0],c=a[1],i="";"tags"in c&&(i=c.tags.join());var l="".concat(r," ").concat(c.title," ").concat(c.author," ").concat(i," ").concat(c.date);console.log(l);var o=new RegExp(".*","g");""!==e&&(o=new RegExp(e,"gi")),l.match(o)&&(t[r]=c)})),t}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:S},r.a.createElement(E.a,{container:!0,spacing:2},Object.entries(this.prepareArticles(this.props.filter)).map((function(t){var n=Object(p.a)(t,2),a=n[0],c=n[1];return r.a.createElement(E.a,{item:!0,xs:4},r.a.createElement(b.a,{style:I},r.a.createElement(g.a,{onClick:function(){e.props.history.push({pathname:"/article/"+a})}},r.a.createElement(O.a,{component:"img",image:c.image,title:c.title,style:_}),r.a.createElement(j.a,null,r.a.createElement(T.a,{gutterBottom:!0,variant:"h5",component:"h2"},c.title),r.a.createElement(T.a,{variant:"body2",color:"textSecondary",component:"p"},c.date," - ",c.author))),r.a.createElement(v.a,null,r.a.createElement(y.a,{size:"small",color:"primary"},"Share"))))}))))}}]),n}(r.a.Component),H=Object(l.b)((function(e){return{articles:R(e),article:w(e),filter:(t=e,t.articlesState.filter),error:k(e)};var t}),(function(e){return{getArticles:function(){return e({type:"ARTICLES_FETCH"})},getArticle:function(t){e(C(t))}}}))(F),U=n(45),N=n(437),D=n(12),B=n(438),G=n(439),P=n(448),W=n(101),z=n.n(W),J=Object(N.a)((function(e){return{grow:{flexGrow:1},title:Object(U.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(U.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(D.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(D.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(U.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(U.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"})}}));var M=Object(l.b)(null,(function(e){return{setArticlesFilter:function(t){return e(function(e){return{type:"ARTICLES_SET_FILTER",filter:e}}(t))}}}))((function(e){var t=J();return r.a.createElement("div",{className:t.grow},r.a.createElement(B.a,{position:"static"},r.a.createElement(G.a,null,r.a.createElement(T.a,{className:t.title,variant:"h6",noWrap:!0},r.a.createElement(o.b,{style:{textDecoration:"none",color:"white"},to:"/articles"},"DestiLore")),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(z.a,null)),r.a.createElement(P.a,{placeholder:"Search\u2026",onChange:function(t){e.setArticlesFilter(t.target.value)},classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.sectionDesktop}))))})),$=n(110),q=n(75),K=n(102),Q=n.n(K),V=n(6),X=n(446),Y=n(443),Z=n(442),ee=n(440),te=n(441),ne=n(444),ae=n(445),re=n(449),ce=n(105),ie={padding:0},le=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.language,n=e.value;return r.a.createElement($.a,{elevation:"3",style:ie},r.a.createElement(re.a,{language:t,style:ce.a},n))}}]),n}(a.PureComponent);le.defaultProps={language:null};var oe=le,se=function(e){return{listItem:{marginTop:e.spacing(1)},header:{marginTop:e.spacing(2)}}};var ue=Object(V.a)(se)((function(e){var t,n=e.classes,a=Object(q.a)(e,["classes"]);switch(a.level){case 1:t="h5";break;case 2:t="h6";break;case 3:t="subtitle1";break;case 4:t="subtitle2";break;default:t="h6"}return r.a.createElement(T.a,{className:n.header,gutterBottom:!0,variant:t},a.children)})),pe=Object(V.a)(se)((function(e){var t=e.classes,n=Object(q.a)(e,["classes"]);return r.a.createElement("li",{className:t.listItem},r.a.createElement(T.a,{component:"span"},n.children))})),me=Object(V.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(ee.a),fe=Object(V.a)((function(e){return{root:{backgroundColor:e.palette.secondary.main}}}))(te.a);var de={heading:ue,paragraph:function(e){return r.a.createElement(T.a,null,e.children)},link:X.a,listItem:pe,table:function(e){return r.a.createElement(Z.a,{component:$.a},r.a.createElement(Y.a,{size:"small","aria-label":"a dense table"},e.children))},tableHead:function(e){return r.a.createElement(fe,null,e.children)},tableBody:function(e){return r.a.createElement(ae.a,null,e.children)},tableRow:function(e){return r.a.createElement(me,null,e.children)},tableCell:function(e){return r.a.createElement(ne.a,null,r.a.createElement(T.a,null,e.children))},code:oe};function he(e){return r.a.createElement(Q.a,Object.assign({escapeHtml:!1,renderers:de},e))}var Ee={flexGrow:1,padding:30},be={padding:30,flexGrow:1},ge=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"loadArticle",value:function(){var e=this.props.match.params.id;console.log("Loading article id:",e);var t=this.props.articles[e].link;this.props.getArticle(t)}},{key:"componentDidMount",value:function(){0===this.props.articles.length?(console.log("Article list not loaded. Loading..."),this.props.getArticles()):this.loadArticle()}},{key:"componentDidUpdate",value:function(e){this.loadArticle()}},{key:"render",value:function(){return r.a.createElement("div",{style:Ee},r.a.createElement(E.a,{container:!0,spacing:12},r.a.createElement($.a,{elevation:3,style:be},r.a.createElement(he,{source:this.props.article}))))}}]),n}(r.a.Component),ve=Object(l.b)((function(e){return{articles:R(e),article:w(e),error:k(e)}}),(function(e){return{getArticles:function(){return e({type:"ARTICLES_FETCH"})},getArticle:function(t){e(C(t))}}}))(ge),je=n(107),Oe=Object(je.a)({palette:{primary:{main:"#291907"},secondary:{main:"#e8dad5"},error:{main:"#f44336"}}});var ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{theme:Oe},r.a.createElement(o.a,{basename:"/destilore"},r.a.createElement(M,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:H}),r.a.createElement(s.a,{path:"/articles",component:H}),r.a.createElement(s.a,{path:"/article/:id",component:ve})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=n(24),Re=n(106),we=n(108),ke={articles:[],article:{},filter:"",error:null},Ce=function(e,t){return{articles:t.articles,article:e.article,filter:e.filter,error:null}},xe=function(e,t){return{articles:e.articles,article:t.article,filter:e.filter,error:null}},Le=function(e,t){return{articles:e.articles,article:e.article,filter:t.filter,error:null}},Ae=function(e,t){return{articles:[],article:{},filter:"",error:t.error}};var Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARTICLE_FETCH_RESULT":return xe(e,t);case"ARTICLES_FETCH_RESULT":return Ce(e,t);case"ARTICLES_SET_FILTER_RESULT":return Le(e,t);case"ARTICLES_FETCH_ERROR":return Ae(0,t);default:return e}},Ie=Object(Te.c)({articlesState:Se}),_e=n(21),Fe=n.n(_e),He=n(15),Ue="https://raw.githubusercontent.com/asaxen/destilore-content/master/",Ne=function(){return fetch(Ue+"index.json").then((function(e){return e.json()})).then((function(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var a=Object(p.a)(n[t],2),r=(a[0],a[1]);r.image=Ue+r.image}return e}))},De=function(e){return fetch(Ue+e).then((function(e){return e.text()})).then((function(e){return e.replace("../../",Ue)}))},Be=Fe.a.mark(We),Ge=Fe.a.mark(ze),Pe=Fe.a.mark(Je);function We(e){var t;return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(He.b)(Ne);case 3:return t=e.sent,e.next=6,Object(He.c)(L(t));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(He.c)(A(e.t0));case 12:case"end":return e.stop()}}),Be,null,[[0,8]])}function ze(e){var t,n;return Fe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.articleUrl,a.prev=1,a.next=4,Object(He.b)(De,t);case 4:return n=a.sent,a.next=7,Object(He.c)(x(n));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(He.c)(A(a.t0));case 13:case"end":return a.stop()}}),Ge,null,[[1,9]])}function Je(e){return Fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(He.c)({type:"ARTICLES_SET_FILTER_RESULT",filter:e.filter});case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),t.next=9,Object(He.c)(A(t.t0));case 9:case"end":return t.stop()}}),Pe,null,[[0,5]])}var Me=Fe.a.mark($e);function $e(){return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(He.a)([Object(He.d)("ARTICLES_FETCH",We),Object(He.d)("ARTICLE_FETCH",ze),Object(He.d)("ARTICLES_SET_FILTER",Je)]);case 2:case"end":return e.stop()}}),Me)}var qe=$e,Ke=Object(Re.createLogger)(),Qe=Object(we.a)(),Ve=Object(Te.e)(Ie,void 0,Object(Te.a)(Qe,Ke));Qe.run(qe);var Xe=Ve;i.a.render(r.a.createElement(l.a,{store:Xe},r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[116,1,2]]]);
//# sourceMappingURL=main.1fb57d5a.chunk.js.map