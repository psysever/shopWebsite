(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var n,i,s=c(16),a=c(0),r=c.n(a),j=c(14),o=c.n(j),d=(c(72),c(21)),b=(c.p,c(73),c(109)),l=c(110),h=c(108),O=c(107),u=c(66),x=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],p=c(45),f=c(7),v=c(46),m=(c(74),c(111)),g=c(27),k=c(1),C=v.a.div(n||(n=Object(p.a)(["\n  padding-top: 50px;\n"]))),y=v.a.h4(i||(i=Object(p.a)(["\n  font-size: 25px;\n  color: ",";\n"])),(function(e){return e.colcg}));function N(e){return Object(a.useEffect)((function(){e.switchChange1(!0)})),0===e.tab?Object(k.jsx)("div",{children:" 0st Content"}):1===e.tab?Object(k.jsx)("div",{children:"1st Content"}):2===e.tab?Object(k.jsx)("div",{children:"2st Content"}):void 0}function w(e){return Object(k.jsxs)("p",{children:["Stock : ",e.stock[0]," "]})}var S=Object(g.b)((function(e){return{state:e.reducer,alertopen:e.reducer2}}))((function(e){var t=Object(a.useState)(!0),c=Object(d.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(""),j=Object(d.a)(r,2),o=(j[0],j[1],Object(a.useContext)(M),Object(a.useState)(0)),b=Object(d.a)(o,2),h=b[0],O=b[1],u=Object(a.useState)(!1),x=Object(d.a)(u,2),p=x[0],v=x[1];Object(a.useEffect)((function(){var e=setTimeout((function(){i(!1)}),3e3);return function(){clearTimeout(e)}}),[]);var g=Object(f.g)().id,S=Object(f.f)(),I=e.shoes.find((function(e){return e.id==g}));return Object(a.useEffect)((function(){var e=localStorage.getItem("watched");(e=null==e?[]:JSON.parse(e)).push(g),e=new Set(e),e=Object(s.a)(e),localStorage.setItem("watched",JSON.stringify(e))}),[]),Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(C,{children:Object(k.jsx)(y,{className:"red",children:"Detail"})}),!0===n?Object(k.jsx)("div",{className:"my-alert2",children:Object(k.jsx)("p",{children:"Nearly out of stock"})}):null,Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-md-6",children:Object(k.jsx)("img",{src:"https://psysever.github.io/shoespic/shop/shoes"+g+".jpg",width:"100%"})}),Object(k.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(k.jsx)("h4",{className:"pt-5",children:I.title}),Object(k.jsx)("p",{children:I.content}),Object(k.jsx)("p",{children:I.price}),Object(k.jsx)(w,{stock:e.stock}),Object(k.jsx)("button",{className:"btn btn-danger",onClick:function(){e.stockChange([9,11,12]),e.dispatch({type:"PDUpdate",data:{id:I.id,name:I.title,quan:1}}),S.push("/cart")},children:"Order"}),"\u2002",Object(k.jsx)("button",{className:"btn btn-danger",onClick:function(){S.goBack()},children:"BACK"})]})]}),Object(k.jsxs)(l.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"link-0",children:[Object(k.jsx)(l.a.Item,{children:Object(k.jsx)(l.a.Link,{eventKey:"link-0",onClick:function(){v(!1),O(0)},children:"Product Detail"})}),Object(k.jsx)(l.a.Item,{children:Object(k.jsx)(l.a.Link,{eventKey:"link-1",onClick:function(){v(!1),O(1)},children:"Shipping Info"})})]}),Object(k.jsx)(m.a,{in:p,classNames:"wow",timeout:500,children:Object(k.jsx)(N,{tab:h,switchChange1:v})})]})})),I=c(33),D=c(49),B=c.n(D),P=c(106);var T=Object(g.b)((function(e){return{state:e.reducer,alertopen:e.reducer2}}))((function(e){return Object(k.jsxs)("div",{children:[Object(k.jsxs)(P.a,{responsive:"sm",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:"Product"}),Object(k.jsx)("th",{children:"Quan"}),Object(k.jsx)("th",{children:"Modify"})]})}),Object(k.jsx)("tbody",{children:e.state.map((function(t,c){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:t.id}),Object(k.jsx)("td",{children:t.name}),Object(k.jsx)("td",{children:t.quan}),Object(k.jsxs)("td",{children:[Object(k.jsx)("button",{onClick:function(){e.dispatch({type:"QuanUp",data:t.id})},children:"\u2191"}),Object(k.jsx)("button",{onClick:function(){e.dispatch({type:"QuanDown",data:t.id})},children:"\u2193"})]})]},c)}))})]}),!0===e.alertopen?Object(k.jsxs)("div",{className:"my-alert2",children:[Object(k.jsx)("p",{children:"If you order it now, New Discount 20%"}),Object(k.jsx)("button",{onClick:function(){e.dispatch({type:"alertclose"})},children:"Close"})]}):null]})})),M=r.a.createContext();function A(e){Object(a.useContext)(M);var t=Object(f.f)();return Object(k.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.i)},children:[Object(k.jsx)("img",{src:"https://psysever.github.io/shoespic/shop/shoes"+e.i+".jpg",width:"100%"}),Object(k.jsx)("h4",{children:e.shoes.title}),Object(k.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]}),Object(k.jsx)(F,{})]})}function F(){var e=Object(a.useContext)(M);return Object(k.jsxs)("p",{children:["Stock : ",e[0]]})}var L=function(){var e=Object(a.useState)(x),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)([10,11,12]),r=Object(d.a)(i,2),j=r[0],o=r[1];return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsxs)(b.a,{bg:"light",expand:"lg",children:[Object(k.jsx)(b.a.Brand,{href:"#home",children:"\u2002CMShose SHOP"}),Object(k.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(k.jsxs)(l.a,{className:"mr-auto",children:[Object(k.jsx)(l.a.Link,{children:Object(k.jsx)(I.b,{to:"/",children:"Home"})}),Object(k.jsx)(l.a.Link,{children:Object(k.jsx)(I.b,{to:"/detail/2",children:"Detail"})}),Object(k.jsxs)(h.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(k.jsx)(h.a.Item,{href:"#action/3.1",children:"Action"}),Object(k.jsx)(h.a.Item,{href:"#action/3.2",children:"Another action"}),Object(k.jsx)(h.a.Item,{href:"#action/3.3",children:"Something"}),Object(k.jsx)(h.a.Divider,{}),Object(k.jsx)(h.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(k.jsxs)(f.c,{children:[Object(k.jsxs)(f.a,{exact:!0,path:"/",children:[Object(k.jsxs)(O.a,{className:"background",children:[Object(k.jsx)("h1",{children:"20% Season OFF"}),Object(k.jsxs)("p",{children:["This is CHANG MO JUNG.",Object(k.jsx)("br",{})," Thanks for visit my website.",Object(k.jsx)("br",{}),"I m'still trying to update set lots of function on this react web site."]}),Object(k.jsx)("p",{children:Object(k.jsx)(u.a,{variant:"danger",children:"Learn more"})})]}),Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(M.Provider,{value:j,children:Object(k.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(k.jsx)(A,{shoes:c[t],i:t})}))})}),Object(k.jsx)(u.a,{variant:"danger",onClick:function(){B.a.post(),B.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),n([].concat(Object(s.a)(c),Object(s.a)(e.data)))})).catch((function(){console.log("fail")}))},children:"More"})]})]}),Object(k.jsx)(f.a,{exact:!0,path:"/detail/:id",children:Object(k.jsx)(M.Provider,{value:j,children:Object(k.jsx)(S,{shoes:c,stock:j,stockChange:o})})}),Object(k.jsx)(f.a,{path:"/cart",children:Object(k.jsx)(T,{})}),Object(k.jsxs)(f.a,{exact:!0,path:"/:id",children:[Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{children:Object(k.jsxs)("h5",{children:["This is CHANG MO JUNG. Thanks for visitting my website.",Object(k.jsx)("br",{}),"I m'still trying to update set lots of function on this react web site.",Object(k.jsx)("br",{}),"If you press the HOME button at the top of the site, it will be moved."]})}),Object(k.jsx)("br",{}),Object(k.jsx)("hr",{}),Object(k.jsx)("br",{}),Object(k.jsx)("p",{children:Object(k.jsxs)("h5",{children:["\uc548\ub155\ud558\uc138\uc694 \uc815\ucc3d\ubaa8\uc785\ub2c8\ub2e4.",Object(k.jsx)("br",{}),"\uc800\ub294 \uc5ec\uc804\ud788 \ub9ce\uc740 \uae30\ub2a5\ub4e4\uc744 \uc774 \ub9ac\uc561\ud2b8 \uc0ac\uc774\ud2b8\uc5d0 \uc62c\ub9ac\ub3c4\ub85d \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",Object(k.jsx)("br",{}),"\ubd80\uc871\ud55c \uc800\uc758 \uc0ac\uc774\ud2b8\uc5d0 \ubc29\ubb38\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4.",Object(k.jsx)("br",{}),"\uc0ac\uc774\ud2b8 \uc704\ucabd \uc0c1\ub2e8\uc5d0 HOME\ubc84\ud2bc\uc744 \ub204\ub974\uc2dc\uba74 \uc774\ub3d9\ub429\ub2c8\ub2e4."]})})]})]})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,112)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))},E=c(40);var H=[{id:0,name:"white and black",quan:1}];var J=Object(E.b)(Object(E.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;if("PDUpdate"===t.type){var c=e.findIndex((function(e){return e.id===t.data.id}));if(c>=0){var n=Object(s.a)(e);return n[c].quan++,n}var i=Object(s.a)(e);return i.push(t.data),i}if("QuanUp"===t.type){var a=Object(s.a)(e);return a[t.data].quan++,a}if("QuanDown"===t.type){var r=Object(s.a)(e);return r[t.data].quan--,r}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"alertclose"===t.type?e=!1:e}}));o.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(I.a,{children:Object(k.jsx)(g.a,{store:J,children:Object(k.jsx)(L,{})})})}),document.getElementById("root")),q()},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.3637f155.chunk.js.map