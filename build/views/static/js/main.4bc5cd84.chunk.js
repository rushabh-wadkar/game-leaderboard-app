(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){e.exports={pagination:"Pagination_pagination__3W4p4"}},32:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(5),c=n.n(r),i=n(7),o=n(4),s=n(20),d=n(3),l="FETCH_DATA_REQ",j="FETCH_DATA_SUCCESS",b="FETCH_DATA_ERROR",u={loading:!1,data:[],error:"",page:1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case j:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,data:t.payload,error:""});case b:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,data:[],error:t.payload});default:return e}},p=Object(o.b)({leaderboard:h}),O=Object(o.c)(p,Object(o.a)(s.a)),g=(n(32),n(8)),x=n(6),f=n.n(x),m=function(){return{type:l}},v=function(e){return{type:j,payload:e}},y=function(e){return{type:b,payload:e}},E=n(0),k=function(e){var t=e.item,n=function(e){var t=e.target.innerText,n=e.target.parentElement.id,a=e.target.dataset.tag;f.a.post("http://localhost:4000/api/leaderboard/update",{key:a,value:t,_id:n}).then((function(e){console.log(e)}))};return Object(E.jsxs)("tr",{id:t._id,children:[Object(E.jsx)("td",{contentEditable:!0,onBlur:n,suppressContentEditableWarning:!0,"data-tag":"Rank",children:t.Rank}),Object(E.jsx)("td",{contentEditable:!0,onBlur:n,suppressContentEditableWarning:!0,"data-tag":"Name",children:t.Name}),Object(E.jsx)("td",{contentEditable:!0,onBlur:n,suppressContentEditableWarning:!0,"data-tag":"Platform",children:t.Platform}),Object(E.jsx)("td",{contentEditable:!0,onBlur:n,suppressContentEditableWarning:!0,"data-tag":"Year",children:t.Year}),Object(E.jsx)("td",{contentEditable:!0,onBlur:n,suppressContentEditableWarning:!0,"data-tag":"Genre",children:t.Genre}),Object(E.jsx)("td",{contentEditable:!0,onBlur:n,suppressContentEditableWarning:!0,"data-tag":"Publisher",children:t.Publisher}),Object(E.jsx)("td",{contentEditable:!0,onBlur:n,suppressContentEditableWarning:!0,"data-tag":"Global_Sales",children:t.Global_Sales})]})},C=function(e){var t=e.id,n=e.sortHandler,a=e.sortedOn,r=e.sortedBy,c="";return t.toLowerCase()===a.toLowerCase()&&(c="asc"===r?"\ud83d\udd3c":"\ud83d\udd3d"),Object(E.jsxs)("th",{onClick:function(){return n(t)},children:[t,c]})},w=function(e){var t=e.data,n=e.sortHandler,a=e.sortBy,r=e.sortOn;return Object(E.jsxs)("table",{children:[Object(E.jsx)("thead",{children:Object(E.jsx)("tr",{children:["Rank","Name","Platform","Year","Genre","Publisher","Global_Sales"].map((function(e){return Object(E.jsx)(C,{id:e,sortHandler:n,sortedOn:r,sortedBy:a},e)}))})}),Object(E.jsx)("tbody",{children:t.map((function(e){return Object(E.jsx)(k,{item:e},e._id)}))})]})},_=n(21),R=n.n(_),B=function(e){var t=e.page,n=e.nextPageHandler,a=e.previousPageHandler;return Object(E.jsxs)("div",{className:R.a.pagination,children:[Object(E.jsx)("span",{onClick:a,children:"\u276e "}),Object(E.jsx)("span",{children:t}),Object(E.jsx)("span",{onClick:n,children:" \u276f"})]})},P=null,S=Object(i.b)((function(e){return{page:e.leaderboard.page,loading:e.leaderboard.loading,error:e.leaderboard.error,data:e.leaderboard.data}}),(function(e){return{fetchData:function(t,n,a){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Rank";return function(a){a(m),f.a.get("http://localhost:4000/api/leaderboard?page=".concat(e,"&sortBy=").concat(t,"&sortOn=").concat(n)).then((function(e){var t=e.data;a(v(t))})).catch((function(e){a(y(e.message))}))}}(t,n,a))}}}))((function(e){var t=e.loading,n=(e.error,e.data),r=e.fetchData,c=Object(a.useState)(1),i=Object(g.a)(c,2),o=i[0],s=i[1],d=Object(a.useState)("asc"),l=Object(g.a)(d,2),j=l[0],b=l[1],u=Object(a.useState)("Rank"),h=Object(g.a)(u,2),p=h[0],O=h[1];return Object(a.useEffect)((function(){r(o,j,p)}),[o,j,p]),Object(a.useEffect)((function(){return P=setInterval((function(){r(o,j,p)}),2500),function(){clearInterval(P)}}),[o,j,p]),t?Object(E.jsx)("h2",{children:"Loading"}):Object(E.jsxs)("div",{className:"container accented",children:[Object(E.jsx)("h2",{children:Object(E.jsxs)("em",{children:[Object(E.jsx)("img",{src:"/leaderboard.png",width:"32"})," \xa0\xa0Leaderboard"]})}),n.length?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(w,{data:n,sortHandler:function(e){b((function(e){return"asc"===e?"desc":"desc"===e?"asc":void 0})),O(e)},sortBy:j,sortOn:p}),Object(E.jsx)(B,{page:o,nextPageHandler:function(){s((function(e){return e+1}))},previousPageHandler:function(){o>=2&&s((function(e){return e-1}))}})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h3",{children:"No Data to show"}),Object(E.jsx)("span",{children:"Can you try hitting endpoint /api/leaderboard/import (this would dump json into db)"})]})]})})),H=function(){return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(S,{}),Object(E.jsxs)("div",{className:"stack-info",children:[Object(E.jsxs)("h3",{children:["Tech ",Object(E.jsx)("span",{style:{color:"yellowgreen"},children:"Stack"})]}),Object(E.jsx)("span",{children:"REACT, NODE, MONGO"})]}),Object(E.jsxs)("div",{children:[Object(E.jsxs)("h3",{children:["Features ",Object(E.jsx)("span",{style:{color:"yellowgreen"},children:"implemented"})]}),Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:"Realtime leaderboard"}),Object(E.jsx)("li",{children:"Rest API based backend architecture (Endpoints at /api/leaderboard)"}),Object(E.jsxs)("li",{children:["Dumping/Importing provided"," ",Object(E.jsx)("a",{href:"https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopSellingGamesbb1c49e.json",rel:"noreferrer",target:"_blank",children:"json"})," ","into mongo directly by hitting endpoint /api/leaderboard/import (this imports the json from aws and dumps into mongo collection)"]}),Object(E.jsx)("li",{children:"Editable cells (User can click on any cells to edit, on clicking outside would result in value persistence to db)"}),Object(E.jsx)("li",{children:"Sorting - Each Column can be sorted by ascending/descending (Click on the header column)"}),Object(E.jsx)("li",{children:"Pagination - (User can click through next & previous to go back and forth)"}),Object(E.jsx)("li",{children:"Deployment of build on Free-tier hosting provider (HEROKU)"})]}),Object(E.jsxs)("h3",{children:["Features ",Object(E.jsx)("span",{style:{color:"red"},children:"not implemented"})," due to time-limit"]}),Object(E.jsx)("ul",{children:Object(E.jsx)("li",{children:"Search functionality"})})]}),Object(E.jsx)("div",{className:"stack-info",children:Object(E.jsxs)("h3",{children:["Developed by"," ",Object(E.jsx)("a",{href:"https://www.linkedin.com/in/rushabh-wadkar/",rel:"noreferrer",target:"_blank",children:"Rushabh Wadkar"})]})})]})};c.a.render(Object(E.jsx)(i.a,{store:O,children:Object(E.jsx)(H,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.4bc5cd84.chunk.js.map