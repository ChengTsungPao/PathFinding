(this["webpackJsonppath-finding"]=this["webpackJsonppath-finding"]||[]).push([[0],{35:function(e,t,r){},44:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),i=r.n(n),c=r(14),s=r.n(c),o=(r(44),r(5)),l=(r(35),r(10)),d=r(32);var u=function(){return Object(a.jsxs)(d.a.Brand,{href:"/PathingFinding/",className:"Navbar-logo",children:[Object(a.jsx)("img",{src:"/PathFinding/logo.png",width:"50",height:"50",className:"d-inline-block",variant:"test",alt:"Logo"})," "," ","Path-Finding"]})},j=r(23),h=r(17),b={rowSize:Math.floor(window.screen.height/30)-12,colSize:Math.floor(window.screen.width/30),size:30,id:"0",newId:"0"},m="wall",g="bomb",O="start",v="end",f="background",_="search",x="path",S=Object(n.createContext)(),A={start:f,end:f,bomb:f},w=function(e,t){switch(t.componentKind){case O:return Object(h.a)(Object(h.a)({},e),{},{start:t.under});case v:return Object(h.a)(Object(h.a)({},e),{},{end:t.under});case g:return Object(h.a)(Object(h.a)({},e),{},{bomb:t.under});default:return A}},I=Object(n.createContext)(),k=function(e,t){switch(t){case O:case v:case g:case m:return t;default:return""}};function z(e,t){document.getElementById(e.toString()).className=t}Math.floor(b.rowSize/2),Math.floor(b.colSize/4),Math.floor(b.rowSize/2),b.colSize,Math.floor(b.colSize/4);var p=i.a.createContext(),M="LOADING",B=function(e,t){switch(t){case"IDLE":return"IDLE";case"RUNNING":return"RUNNING";case"LOADING":return"LOADING";default:return M}},D=i.a.createContext(),N=!1,C=function(e,t){switch(t){case"True":return!0;case"False":return!1;default:return N}},y=i.a.createContext(),E=function(e,t){switch(t){case"Fast":return"Fast";case"Average":return"Average";case"Slow":return"Slow";default:return N}},F=i.a.createContext(),L=function(e,t){switch(t){case"Algorithm_Dijkstra":return"Algorithm_Dijkstra";case"Algorithm_APlus":return"Algorithm_APlus";case"Algorithm_Greedy_Best_First":return"Algorithm_Greedy_Best_First";case"Algorithm_Swarm":return"Algorithm_Swarm";case"Algorithm_Convergent_Swarm":return"Algorithm_Convergent_Swarm";case"Algorithm_Bidrectional_Swarm":return"Algorithm_Bidrectional_Swarm";case"Algorithm_Breadth_First":return"Algorithm_Breadth_First";case"Algorithm_Depth_First":return"Algorithm_Depth_First";default:return""}},R=function(){var e=Object(n.useContext)(p),t=Object(n.useState)(!1),r=Object(o.a)(t,2),a=r[0],i=r[1],c=Object(n.useState)("nav-link-default"),s=Object(o.a)(c,2),l=s[0],d=s[1];return[l,function(){a?(d("nav-link-default"),i(!1)):("IDLE"!==e.get?d("nav-link-red"):d("nav-link-green"),i(!0))}]};var P=function(){var e=Object(n.useContext)(F),t=Object(n.useContext)(p),r=R(),i=Object(o.a)(r,2),c=i[0],s=i[1];return Object(a.jsx)(l.a.Item,{children:Object(a.jsxs)(j.a,{xs:1,title:Object(a.jsx)("span",{className:c,children:"Algorithms"}),id:"DropdownAlgorithm",onSelect:function(r){return function(r){if("IDLE"===t.get)switch(r){case"Algorithm_Dijkstra":e.set("Algorithm_Dijkstra");break;case"Algorithm_APlus":e.set("Algorithm_APlus");break;case"Algorithm_Greedy_Best_First":e.set("Algorithm_Greedy_Best_First");break;case"Algorithm_Swarm":e.set("Algorithm_Swarm");break;case"Algorithm_Convergent_Swarm":e.set("Algorithm_Convergent_Swarm");break;case"Algorithm_Bidrectional_Swarm":e.set("Algorithm_Bidrectional_Swarm");break;case"Algorithm_Breadth_First":e.set("Algorithm_Breadth_First");break;case"Algorithm_Depth_First":e.set("Algorithm_Depth_First")}}(r)},onMouseEnter:s,onMouseLeave:s,children:[Object(a.jsx)(j.a.Item,{eventKey:"Algorithm_Dijkstra",children:"Dijkstra's Algorithm"}),Object(a.jsx)(j.a.Item,{eventKey:"Algorithm_APlus",children:"A+ Search"}),Object(a.jsx)(j.a.Item,{eventKey:"Algorithm_Greedy_Best_First",children:"Greedy Best-First Search"}),Object(a.jsx)(j.a.Item,{eventKey:"Algorithm_Swarm",children:"Swarm Algorithm"}),Object(a.jsx)(j.a.Item,{eventKey:"Algorithm_Convergent_Swarm",children:"Convergent Swarm Algorithm"}),Object(a.jsx)(j.a.Item,{eventKey:"Algorithm_Bidrectional_Swarm",children:"Bidirectional Swarm Algorithm"}),Object(a.jsx)(j.a.Item,{eventKey:"Algorithm_Breadth_First",children:"Breadth-First Search"}),Object(a.jsx)(j.a.Item,{eventKey:"Algorithm_Depth_First",children:"Depth-First Search"})]})})};var K=function(){var e=Object(n.useContext)(p),t=R(),r=Object(o.a)(t,2),i=r[0],c=r[1];return Object(a.jsx)(l.a.Item,{children:Object(a.jsxs)(j.a,{xs:1,title:Object(a.jsx)("span",{className:i,children:"Mazes & Patterns"}),id:"DropdownMaze",onSelect:function(t){if("IDLE"===e.get)switch(t){case"Maze_Recursive_Division":alert("Maze_Recursive_Division");break;case"Maze_Recursive_Division_vertical":alert("Maze_Recursive_Division_vertical");break;case"Maze_Recursive_Division_horizontal":alert("Maze_Recursive_Division_horizontal");break;case"Maze_Basic_Random":alert("Maze_Basic_Random");break;case"Maze_Basic_Weight_Maze":alert("Maze_Basic_Weight_Maze");break;case"Maze_Simple_stair_pattern":alert("Maze_Simple_stair_pattern")}},onMouseEnter:c,onMouseLeave:c,children:[Object(a.jsx)(j.a.Item,{eventKey:"Maze_Recursive_Division",children:"Recursive Division"}),Object(a.jsx)(j.a.Item,{eventKey:"Maze_Recursive_Division_vertical",children:"Recursive Division(vertical skew)"}),Object(a.jsx)(j.a.Item,{eventKey:"Maze_Recursive_Division_horizontal",children:"Recursive Division(horizontal skew)"}),Object(a.jsx)(j.a.Item,{eventKey:"Maze_Basic_Random",children:"Basic Random Maze"}),Object(a.jsx)(j.a.Item,{eventKey:"Maze_Basic_Weight_Maze",children:"Basic Weight Maze"}),Object(a.jsx)(j.a.Item,{eventKey:"Maze_Simple_stair_pattern",children:"Simple Stair Pattern"})]})})};var G=function(e){var t=e.names,r=e.handlers,i=Object(n.useState)(0),c=Object(o.a)(i,2),s=c[0],d=c[1],u=Object(n.useContext)(p),j=R(),h=Object(o.a)(j,2),b=h[0],m=h[1];return Object(a.jsx)(l.a.Item,{xs:1,children:Object(a.jsx)(l.a.Link,{onClick:function(){"IDLE"===u.get&&(d((function(e){return(e+1)%r.length})),r[s]())},className:b,onMouseEnter:m,onMouseLeave:m,children:t[s]})})};var W=function(e){var t=e.names,r=e.handlers,i=Object(n.useState)(0),c=Object(o.a)(i,2),s=c[0],d=c[1],u=Object(n.useContext)(D),j=Object(n.useContext)(p),h=R(),b=Object(o.a)(h,2),m=b[0],g=b[1],O=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){e.current=!1}),[]),e.current}();return Object(n.useEffect)((function(){O||(!0===u.get?d(1):d(0))}),[u]),Object(n.useEffect)((function(){}),[s]),Object(a.jsx)(l.a.Item,{xs:1,children:Object(a.jsx)(l.a.Link,{onClick:function(){O||"IDLE"===j.get&&r[s]()},className:m,onMouseEnter:g,onMouseLeave:g,children:t[s]})})},U=r(29);function T(e,t,r,a){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=setInterval((function(){r===e.length?(null!==n&&n(),clearInterval(i)):z(e[r][0]*b.colSize+e[r][1],a),r+=1}),t/e.length)}function H(e,t){switch(document.getElementById(e).className){case O:return{kind:O,touch:t.get.start,type:0};case v:return{kind:v,touch:t.get.end,type:0};case g:return{kind:g,touch:t.get.bomb,type:0};case m:return{kind:m,rKind:f,type:1};default:return{kind:f,rKind:m,type:1}}}var V=function(){var e=Object(n.useContext)(S),t=Object(n.useContext)(p),r=Object(n.useContext)(D);return{Start:function(e,r,a){t.set("RUNNING"),console.log("Start"),function(e,t,r){var a=setInterval((function(){r===e.length-1&&clearInterval(a),T(e[r],t,0,_),r+=1}),t)}(e,a,0),setTimeout((function(){return function(e,t,r){T(e,t,r,x,arguments.length>3&&void 0!==arguments[3]?arguments[3]:null)}(r,a,0,(function(){return t.set("IDLE")}))}),a*(e.length+1))},Addbomb:function(){console.log("AddBomb");var t=Math.floor(b.rowSize/2)*b.colSize+Math.floor(b.colSize/2);0!==H(t.toString(),e).type&&(r.set("True"),z(t.toString(),g))},RemoveBomb:function(){console.log("RemoveBomb");for(var e=0;e<b.rowSize*b.colSize;e++)if(document.getElementById(e.toString()).className===g){z(e,f);break}r.set("False")},ClearWalls:function(){console.log("ClearWall");for(var t=0;t<b.rowSize*b.colSize;t++)document.getElementById(t.toString()).className===m&&z(t,f);e.set("")},ClearPath:function(){console.log("ClearPath");for(var e=0;e<b.rowSize*b.colSize;e++)document.getElementById(e.toString()).className!==_&&document.getElementById(e.toString()).className!==x||z(e,f)},ClearBoard:function(){console.log("ClearBoard");for(var t=0;t<b.rowSize*b.colSize;t++)z(t,f);z(Math.floor(b.rowSize/2)*b.colSize+Math.floor(b.colSize/4),O),z(Math.floor(b.rowSize/2+1)*b.colSize-Math.floor(b.colSize/4),v),e.set(""),r.set("False")}}},J=function(){var e=Object(n.useState)("Visualize !"),t=Object(o.a)(e,2),r=t[0],i=t[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),d=s[0],u=s[1],j=Object(n.useContext)(F),h=Object(n.useContext)(p),b=V(),m=[[[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2]],[[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3]],[[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4]],[[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5]],[[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],[10,6]]],[[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2]],1e3],g=Object(o.a)(m,3),O=g[0],v=g[1],f=g[2];Object(n.useEffect)((function(){u("success")}),[]),Object(n.useEffect)((function(){var e="";switch(j.get){case"Algorithm_Dijkstra":e="Dijkstra's";break;case"Algorithm_APlus":e="A*";break;case"Algorithm_Greedy_Best_First":e="Greedy";break;case"Algorithm_Swarm":e="Swarm";break;case"Algorithm_Convergent_Swarm":e="Convergent Swarm";break;case"Algorithm_Bidrectional_Swarm":e="Bidrectional Swarm";break;case"Algorithm_Breadth_First":e="BFS";break;case"Algorithm_Depth_First":e="DFS";break;default:e=""}i("Visualize ".concat(e,"!"))}),[j.get]),Object(n.useEffect)((function(){"RUNNING"===h.get?u("danger"):u("success")}),[h.get]);return Object(a.jsx)(l.a.Item,{xs:1,children:Object(a.jsx)(U.a,{id:"navButton",variant:d,size:"lg",onClick:function(){"IDLE"===h.get&&(""===j.get?i("Pick an Algorithm"):b.Start(O,v,f))},children:r})})};var q=function(e){var t=e.names,r=e.handlers,i=Object(n.useState)(0),c=Object(o.a)(i,2),s=c[0],d=c[1],u=Object(n.useContext)(p),j=R(),h=Object(o.a)(j,2),b=h[0],m=h[1];return Object(a.jsx)(l.a.Item,{xs:1,children:Object(a.jsx)(l.a.Link,{onClick:function(){"IDLE"===u.get&&(d((function(e){return(e+1)%r.length})),r[s]())},className:b,onMouseEnter:m,onMouseLeave:m,children:t[s]})})};var Q=function(){var e=Object(n.useState)("Average"),t=Object(o.a)(e,2),r=t[0],i=t[1],c=Object(n.useContext)(p),s=Object(n.useContext)(y),l=R(),d=Object(o.a)(l,2),u=d[0],h=d[1];return Object(n.useEffect)((function(){i(s.get)}),[s.get]),Object(a.jsxs)(j.a,{xs:1,title:Object(a.jsxs)("span",{className:u,children:["Speed: ",r]}),id:"DropdownSpeed",onSelect:function(e){if("IDLE"===c.get)switch(e){case"Fast":s.set("Fast");break;case"Average":s.set("Average");break;case"Slow":s.set("Slow")}},onMouseEnter:h,onMouseLeave:h,children:[Object(a.jsx)(j.a.Item,{eventKey:"Fast",children:"Fast"}),Object(a.jsx)(j.a.Item,{eventKey:"Average",children:"Average"}),Object(a.jsx)(j.a.Item,{eventKey:"Slow",children:"Slow"})]})};var X=function(){var e=V();return Object(a.jsxs)(d.a,{collapseOnSelect:!0,expand:"xl",bg:"dark",variant:"dark",children:[Object(a.jsx)(u,{}),Object(a.jsx)(d.a.Toggle,{"aria-controls":"Collapse"}),Object(a.jsx)(d.a.Collapse,{id:"Collapse",className:"nvbar-collapse",children:Object(a.jsxs)(l.a,{className:"nav-bar",children:[Object(a.jsx)(P,{}),Object(a.jsx)(K,{}),Object(a.jsx)(W,{names:["Add Bomb","Remove Bomb"],handlers:[e.Addbomb,e.RemoveBomb]}),Object(a.jsx)(J,{}),Object(a.jsx)(q,{names:["Clear Board"],handlers:[e.ClearBoard]}),Object(a.jsx)(G,{names:["Clear Walls & Weights"],handlers:[e.ClearWalls]}),Object(a.jsx)(G,{names:["Clear Path"],handlers:[e.ClearPath]}),Object(a.jsx)(Q,{})]})})]})};var Y=function(){var e=[Object(n.useContext)(S),Object(n.useContext)(I),Object(n.useContext)(p)],t=e[0],r=e[1],a=e[2];return{MouseDownHandler:function(e){if("IDLE"===a.get){e.preventDefault(),b.id=e.target.id;var n=H(b.id,t);n.type?(z(b.id,n.rKind),r.set(n.rKind)):r.set(n.kind)}},MouseUpHandler:function(e){"IDLE"===a.get&&r.set("")},OnMouseEnterHanlder:function(e){if("IDLE"===a.get){b.newId=e.target.id;var n=H(b.id,t),i=H(b.newId,t);r.get===m&&i.type?(z(b.newId,i.rKind),b.id=b.newId):r.get!==m&&""!==r.get&&i.type&&(z(b.id,n.touch),t.set({componentKind:n.kind,under:i.kind}),z(b.newId,n.kind),b.id=b.newId)}}}};var Z=function(){var e=[b.rowSize,b.colSize,b.size],t=e[0],r=e[1],i=e[2],c=Array.from(Array(t).keys()),s=Array.from(Array(r).keys()),o=Y(),l=[o.MouseDownHandler,o.MouseUpHandler,o.OnMouseEnterHanlder],d=l[0],u=l[1],j=l[2],h=c.map((function(e,t){return Object(a.jsx)("tr",{height:i,children:s.map((function(t,n){return Object(a.jsx)("td",{id:e*r+t,className:f,width:i,onMouseUp:u,onMouseDown:d,onMouseEnter:j},n)}))},t)}));return Object(n.useEffect)((function(){document.getElementById((Math.floor(b.rowSize/2)*b.colSize+Math.floor(b.colSize/4)).toString()).className="start",document.getElementById((Math.floor(b.rowSize/2+1)*b.colSize-Math.floor(b.colSize/4)).toString()).className="end"}),[]),Object(a.jsx)("div",{className:"tablePadding",children:Object(a.jsx)("table",{id:"board",align:"center",border:"1",cellSpacing:"0",children:Object(a.jsx)("tbody",{children:h})})})},$=r(38);var ee=function(){var e=Object(n.useContext)(p);return Object(n.useEffect)((function(){setTimeout((function(){e.set("IDLE")}),1e3)}),[]),"LOADING"===e.get?Object(a.jsx)($.a,{animation:"border",variant:"warning"}):Object(a.jsx)("div",{id:"UI",children:Object(a.jsx)(Z,{})})};var te=function(){return Object(a.jsx)("div",{id:"mainInfo",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-Start-Node"}),"Start Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-End-Node"}),"Target Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-Bomb-Node"}),"Bomb Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-Unvisited-Node"}),"Unvisited Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-Visited-Node"}),"Visited Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-ShortestPathNode-Node"}),"Shortest-Path Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-WallNode-Node"}),"Wall Node "]})]})})};var re=function(){var e=Object(n.useState)("Pick an algorithm and visualize it!"),t=Object(o.a)(e,2),r=t[0],i=t[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),l=s[0],d=s[1],u=Object(n.useState)(""),j=Object(o.a)(u,2),h=j[0],b=j[1],m=Object(n.useContext)(F);return Object(n.useEffect)((function(){var e="",t="",r="";switch(m.get){case"Algorithm_Dijkstra":e="Dijkstra's Algorithm",t="weighted",r="guarantees";break;case"Algorithm_APlus":e="A* Search",t="weighted",r="guarantees";break;case"Algorithm_Greedy_Best_First":e="Greedy Best-first Search",t="weighted",r="does not guarantee";break;case"Algorithm_Swarm":e="Swarm Algorithm",t="weighted",r="does not guarantee";break;case"Algorithm_Convergent_Swarm":e="Convergent Swarm Algorithm",t="weighted",r="does not guarantee";break;case"Algorithm_Bidrectional_Swarm":e="Bidrectional Swarm Algorithm",t="weighted",r="does not guarantee";break;case"Algorithm_Breadth_First":e="Breath-first Search",t="unweighted",r="guarantee";break;case"Algorithm_Depth_First":e="Depth-first Search",t="unweighted",r="does not guarantee";break;default:e="Pick an algorithm and visualize it!",t="",r=""}i(e),d(t),b(r)}),[m.get]),""===m.get?Object(a.jsx)("div",{id:"algorithmDescriptor",children:r}):Object(a.jsxs)("div",{id:"algorithmDescriptor",children:[r," is ",Object(a.jsx)("i",{children:Object(a.jsx)("b",{children:l})})," and ",Object(a.jsx)("i",{children:Object(a.jsx)("b",{children:h})})," the shortest path!"]})};var ae=function(){var e=Object(n.useReducer)(L,""),t=Object(o.a)(e,2),r=t[0],i=t[1],c=Object(n.useReducer)(B,M),s=Object(o.a)(c,2),l=s[0],d=s[1],u=Object(n.useReducer)(C,N),j=Object(o.a)(u,2),h=j[0],b=j[1],m=Object(n.useReducer)(E,"average"),g=Object(o.a)(m,2),O=g[0],v=g[1],f=Object(n.useReducer)(w,A),_=Object(o.a)(f,2),x=_[0],z=_[1],R=Object(n.useReducer)(k,""),P=Object(o.a)(R,2),K=P[0],G=P[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(I.Provider,{value:{get:K,set:G},children:Object(a.jsx)(S.Provider,{value:{get:x,set:z},children:Object(a.jsx)(y.Provider,{value:{get:O,set:v},children:Object(a.jsx)(D.Provider,{value:{get:h,set:b},children:Object(a.jsx)(p.Provider,{value:{get:l,set:d},children:Object(a.jsxs)(F.Provider,{value:{get:r,set:i},children:[Object(a.jsx)(X,{}),Object(a.jsx)(te,{}),Object(a.jsx)(re,{}),Object(a.jsx)(ee,{})]})})})})})})})},ne=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,56)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),i(e),c(e)}))};r(50);s.a.render(Object(a.jsx)(ae,{}),document.getElementById("root")),ne()}},[[51,1,2]]]);
//# sourceMappingURL=main.57037a68.chunk.js.map