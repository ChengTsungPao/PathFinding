(this["webpackJsonppath-finding"]=this["webpackJsonppath-finding"]||[]).push([[0],{37:function(e,t,r){},46:function(e,t,r){},53:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),i=r.n(n),s=r(14),c=r.n(s),o=(r(46),r(5)),l=(r(37),r(10)),d=r(34);var u=function(){return Object(a.jsxs)(d.a.Brand,{href:"/PathingFinding/",className:"Navbar-logo",children:[Object(a.jsx)("img",{src:"/PathFinding/logo.png",width:"50",height:"50",className:"d-inline-block",variant:"test",alt:"Logo"})," "," ","Path-Finding"]})},h=r(23),j=r(17),b={rowSize:Math.floor(window.screen.height/30)-12,colSize:Math.floor(window.screen.width/30),size:30,id:"0",newId:"0"},g="wall",m="bomb",v="start",O="end",f="background",_="search",S="path",x=Object(n.createContext)(),w={start:f,end:f,bomb:f},A=function(e,t){switch(t.componentKind){case v:return Object(j.a)(Object(j.a)({},e),{},{start:t.under});case O:return Object(j.a)(Object(j.a)({},e),{},{end:t.under});case m:return Object(j.a)(Object(j.a)({},e),{},{bomb:t.under});default:return w}},p=Object(n.createContext)(),k=function(e,t){switch(t){case v:case O:case m:case g:return t;default:return""}},z={start:[Math.floor(b.rowSize/2),Math.floor(b.colSize/4)],end:[Math.floor(b.rowSize/2),b.colSize-Math.floor(b.colSize/4)],bomb:!1,wall:[],rowSize:b.rowSize,colSize:b.colSize},I=i.a.createContext(),B="LOADING",M=function(e,t){switch(t){case"IDLE":return"IDLE";case"RUNNING":return"RUNNING";case"LOADING":return"LOADING";default:return B}},y=i.a.createContext(),D=!1,C=function(e,t){switch(t){case"True":return!0;case"False":return!1;default:return D}},N=i.a.createContext(),E=["average",1e3],F=function(e,t){switch(t){case"Fast":return["Fast",500];case"Average":return["Average",1e3];case"Slow":return["Slow",2e3];default:return D}},P=i.a.createContext(),L=function(e,t){switch(t){case"Algorithm_Dijkstra":return"Algorithm_Dijkstra";case"Algorithm_APlus":return"Algorithm_APlus";case"Algorithm_Greedy_Best_First":return"Algorithm_Greedy_Best_First";case"Algorithm_Swarm":return"Algorithm_Swarm";case"Algorithm_Convergent_Swarm":return"Algorithm_Convergent_Swarm";case"Algorithm_Bidrectional_Swarm":return"Algorithm_Bidrectional_Swarm";case"Algorithm_Breadth_First":return"Algorithm_Breadth_First";case"Algorithm_Depth_First":return"Algorithm_Depth_First";default:return""}},R=function(){var e=Object(n.useContext)(I),t=Object(n.useState)(!1),r=Object(o.a)(t,2),a=r[0],i=r[1],s=Object(n.useState)("nav-link-default"),c=Object(o.a)(s,2),l=c[0],d=c[1];return[l,function(){a?(d("nav-link-default"),i(!1)):("IDLE"!==e.get?d("nav-link-red"):d("nav-link-green"),i(!0))}]};var K=function(){var e=Object(n.useContext)(P),t=Object(n.useContext)(I),r=R(),i=Object(o.a)(r,2),s=i[0],c=i[1];return Object(a.jsx)(l.a.Item,{children:Object(a.jsxs)(h.a,{xs:1,title:Object(a.jsx)("span",{className:s,children:"Algorithms"}),id:"DropdownAlgorithm",onSelect:function(r){return function(r){if("IDLE"===t.get)switch(r){case"Algorithm_Dijkstra":e.set("Algorithm_Dijkstra");break;case"Algorithm_APlus":e.set("Algorithm_APlus");break;case"Algorithm_Greedy_Best_First":e.set("Algorithm_Greedy_Best_First");break;case"Algorithm_Swarm":e.set("Algorithm_Swarm");break;case"Algorithm_Convergent_Swarm":e.set("Algorithm_Convergent_Swarm");break;case"Algorithm_Bidrectional_Swarm":e.set("Algorithm_Bidrectional_Swarm");break;case"Algorithm_Breadth_First":e.set("Algorithm_Breadth_First");break;case"Algorithm_Depth_First":e.set("Algorithm_Depth_First")}}(r)},onMouseEnter:c,onMouseLeave:c,children:[Object(a.jsx)(h.a.Item,{eventKey:"Algorithm_Dijkstra",children:"Dijkstra's Algorithm"}),Object(a.jsx)(h.a.Item,{eventKey:"Algorithm_APlus",children:"A+ Search"}),Object(a.jsx)(h.a.Item,{eventKey:"Algorithm_Greedy_Best_First",children:"Greedy Best-First Search"}),Object(a.jsx)(h.a.Item,{eventKey:"Algorithm_Swarm",children:"Swarm Algorithm"}),Object(a.jsx)(h.a.Item,{eventKey:"Algorithm_Convergent_Swarm",children:"Convergent Swarm Algorithm"}),Object(a.jsx)(h.a.Item,{eventKey:"Algorithm_Bidrectional_Swarm",children:"Bidirectional Swarm Algorithm"}),Object(a.jsx)(h.a.Item,{eventKey:"Algorithm_Breadth_First",children:"Breadth-First Search"}),Object(a.jsx)(h.a.Item,{eventKey:"Algorithm_Depth_First",children:"Depth-First Search"})]})})};var G=function(){var e=Object(n.useContext)(I),t=R(),r=Object(o.a)(t,2),i=r[0],s=r[1];return Object(a.jsx)(l.a.Item,{children:Object(a.jsxs)(h.a,{xs:1,title:Object(a.jsx)("span",{className:i,children:"Mazes & Patterns"}),id:"DropdownMaze",onSelect:function(t){if("IDLE"===e.get)switch(t){case"Maze_Recursive_Division":alert("Maze_Recursive_Division");break;case"Maze_Recursive_Division_vertical":alert("Maze_Recursive_Division_vertical");break;case"Maze_Recursive_Division_horizontal":alert("Maze_Recursive_Division_horizontal");break;case"Maze_Basic_Random":alert("Maze_Basic_Random");break;case"Maze_Basic_Weight_Maze":alert("Maze_Basic_Weight_Maze");break;case"Maze_Simple_stair_pattern":alert("Maze_Simple_stair_pattern")}},onMouseEnter:s,onMouseLeave:s,children:[Object(a.jsx)(h.a.Item,{eventKey:"Maze_Recursive_Division",children:"Recursive Division"}),Object(a.jsx)(h.a.Item,{eventKey:"Maze_Recursive_Division_vertical",children:"Recursive Division(vertical skew)"}),Object(a.jsx)(h.a.Item,{eventKey:"Maze_Recursive_Division_horizontal",children:"Recursive Division(horizontal skew)"}),Object(a.jsx)(h.a.Item,{eventKey:"Maze_Basic_Random",children:"Basic Random Maze"}),Object(a.jsx)(h.a.Item,{eventKey:"Maze_Basic_Weight_Maze",children:"Basic Weight Maze"}),Object(a.jsx)(h.a.Item,{eventKey:"Maze_Simple_stair_pattern",children:"Simple Stair Pattern"})]})})};var W=function(e){var t=e.names,r=e.handlers,i=Object(n.useState)(0),s=Object(o.a)(i,2),c=s[0],d=s[1],u=Object(n.useContext)(I),h=R(),j=Object(o.a)(h,2),b=j[0],g=j[1];return Object(a.jsx)(l.a.Item,{xs:1,children:Object(a.jsx)(l.a.Link,{onClick:function(){"IDLE"===u.get&&(d((function(e){return(e+1)%r.length})),r[c]())},className:b,onMouseEnter:g,onMouseLeave:g,children:t[c]})})};var U=function(e){var t=e.names,r=e.handlers,i=Object(n.useState)(0),s=Object(o.a)(i,2),c=s[0],d=s[1],u=Object(n.useContext)(y),h=Object(n.useContext)(I),j=R(),b=Object(o.a)(j,2),g=b[0],m=b[1],v=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){e.current=!1}),[]),e.current}();return Object(n.useEffect)((function(){v||(!0===u.get?d(1):d(0))}),[u]),Object(n.useEffect)((function(){}),[c]),Object(a.jsx)(l.a.Item,{xs:1,children:Object(a.jsx)(l.a.Link,{onClick:function(){v||"IDLE"===h.get&&r[c]()},className:g,onMouseEnter:m,onMouseLeave:m,children:t[c]})})},T=r(29);function H(e,t){document.getElementById(e.toString()).className=t;var r=[Math.floor(e/b.colSize),e%b.colSize];t===g?z.wall[r]=!0:t===v?z.start=r:t===O?z.end=r:t===m?z.bomb=r:t===f&&(z.wall[r]?delete z.wall[r]:z.bomb[0]===r[0]&&z.bomb[1]===r[1]&&(z.bomb=!1))}function q(e,t,r,a){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=setInterval((function(){r===e.length?(null!==n&&n(),clearInterval(i)):H(e[r][0]*b.colSize+e[r][1],a),r+=1}),t/e.length)}function V(e,t){switch(document.getElementById(e).className){case v:return{kind:v,touch:t.get.start,type:0};case O:return{kind:O,touch:t.get.end,type:0};case m:return{kind:m,touch:t.get.bomb,type:0};case g:return{kind:g,rKind:f,type:1};default:return{kind:f,rKind:g,type:1}}}var J=function(){var e=Object(n.useContext)(x),t=Object(n.useContext)(I),r=Object(n.useContext)(y);return{Start:function(e,r,a){t.set("RUNNING"),console.log("Start"),function(e,t,r){var a=setInterval((function(){r===e.length-1&&clearInterval(a),q(e[r],t,0,_),r+=1}),t)}(e,a,0),setTimeout((function(){return function(e,t,r){q(e,t,r,S,arguments.length>3&&void 0!==arguments[3]?arguments[3]:null)}(r,a,0,(function(){return t.set("IDLE")}))}),a*(e.length+1))},Addbomb:function(){console.log("AddBomb");var t=Math.floor(b.rowSize/2)*b.colSize+Math.floor(b.colSize/2);0!==V(t.toString(),e).type&&(r.set("True"),H(t.toString(),m))},RemoveBomb:function(){console.log("RemoveBomb");for(var e=0;e<b.rowSize*b.colSize;e++)if(document.getElementById(e.toString()).className===m){H(e,f);break}r.set("False")},ClearWalls:function(){console.log("ClearWall");for(var t=0;t<b.rowSize*b.colSize;t++)document.getElementById(t.toString()).className===g&&H(t,f);e.set("")},ClearPath:function(){console.log("ClearPath");for(var e=0;e<b.rowSize*b.colSize;e++)document.getElementById(e.toString()).className!==_&&document.getElementById(e.toString()).className!==S||H(e,f)},ClearBoard:function(){console.log("ClearBoard");for(var t=0;t<b.rowSize*b.colSize;t++)H(t,f);H(Math.floor(b.rowSize/2)*b.colSize+Math.floor(b.colSize/4),v),H(Math.floor(b.rowSize/2+1)*b.colSize-Math.floor(b.colSize/4),O),e.set(""),r.set("False")}}},Q=r(30),X=r(31),Y=function(){function e(){Object(Q.a)(this,e),this.queue=[]}return Object(X.a)(e,[{key:"append",value:function(e){this.queue.push(e)}},{key:"popleft",value:function(){return this.isEmpty()?-1:this.queue.shift()}},{key:"isEmpty",value:function(){return 0===this.queue.length}},{key:"getLength",value:function(){return this.queue.length}}]),e}(),Z=function(){function e(){Object(Q.a)(this,e),this.dict={},this.max_d=0}return Object(X.a)(e,[{key:"set",value:function(e,t){this.dict[e]=t,this.max_d=Math.max(this.max_d,t)}},{key:"get",value:function(e){return e in this.dict?this.dict[e]:-1}},{key:"getShortestPath",value:function(e){if(!(e in this.dict))return[];var t=[e],r=e[0],a=e[1],n=new Set;for(n.add(e.toString());this.max_d>0;){var i=1/0,s=r,c=a;[r-1,a]in this.dict&&!n.has([r-1,a].toString())&&(this.dict[[r-1,a]]<i&&(s=r-1,c=a,i=this.dict[[r-1,a]]),n.add([r-1,a].toString())),[r,a+1]in this.dict&&!n.has([r,a+1].toString())&&(this.dict[[r,a+1]]<i&&(s=r,c=a+1,i=this.dict[[r,a+1]]),n.add([r,a+1].toString())),[r+1,a]in this.dict&&!n.has([r+1,a].toString())&&(this.dict[[r+1,a]]<i&&(s=r+1,c=a,i=this.dict[[r+1,a]]),n.add([r+1,a].toString())),[r,a-1]in this.dict&&!n.has([r,a-1].toString())&&(this.dict[[r,a-1]]<i&&(s=r,c=a-1,i=this.dict[[r,a-1]]),n.add([r,a-1].toString())),r=s,a=c,t.unshift([r,a]),this.max_d=i}return 1===t.length?[]:t}}]),e}();var $=function(e,t){for(var r=1+(!1===z.bomb?0:1),a=[],n=[],i=0;i<r;i++){var s=[],c=new Set,o=new Y,l=new Z,d=0===i?z.start:z.bomb,u=0===i&&r>1?z.bomb:z.end;for(l.set(d,0),o.append([d,0]),c.add(d.toString());o.getLength()>0;){var h=o.popleft(),j=h[0][0],b=h[0][1],g=h[1]+1;if(g>s.length&&s.push([]),[j,b].toString()===u.toString())break;b-1>=0&&!([j,b-1]in z.wall)&&!c.has([j,b-1].toString())&&(o.append([[j,b-1],g]),s[g-1].push([j,b-1]),l.set([j,b-1],g),c.add([j,b-1].toString())),j-1>=0&&!([j-1,b]in z.wall)&&!c.has([j-1,b].toString())&&(o.append([[j-1,b],g]),s[g-1].push([j-1,b]),l.set([j-1,b],g),c.add([j-1,b].toString())),b+1<z.colSize&&!([j,b+1]in z.wall)&&!c.has([j,b+1].toString())&&(o.append([[j,b+1],g]),s[g-1].push([j,b+1]),l.set([j,b+1],g),c.add([j,b+1].toString())),j+1<z.rowSize&&!([j+1,b]in z.wall)&&!c.has([j+1,b].toString())&&(o.append([[j+1,b],g]),s[g-1].push([j+1,b]),l.set([j+1,b],g),c.add([j+1,b].toString()))}for(;-1!==l.get(u)&&s.length>l.get(u);)s.pop();var m=l.getShortestPath(u);if(a=a.concat(s),n=n.concat(m),-1===l.get(u))break}e(a,n,t)},ee=function(){var e=Object(n.useState)("Visualize !"),t=Object(o.a)(e,2),r=t[0],i=t[1],s=Object(n.useState)(""),c=Object(o.a)(s,2),d=c[0],u=c[1],h=Object(n.useContext)(P),j=Object(n.useContext)(I),b=Object(n.useContext)(N),g=J();Object(n.useEffect)((function(){u("success")}),[]),Object(n.useEffect)((function(){var e="";switch(h.get){case"Algorithm_Dijkstra":e="Dijkstra's";break;case"Algorithm_APlus":e="A*";break;case"Algorithm_Greedy_Best_First":e="Greedy";break;case"Algorithm_Swarm":e="Swarm";break;case"Algorithm_Convergent_Swarm":e="Convergent Swarm";break;case"Algorithm_Bidrectional_Swarm":e="Bidrectional Swarm";break;case"Algorithm_Breadth_First":e="BFS";break;case"Algorithm_Depth_First":e="DFS";break;default:e=""}i("Visualize ".concat(e,"!"))}),[h.get]),Object(n.useEffect)((function(){"RUNNING"===j.get?u("danger"):u("success")}),[j.get]);return Object(a.jsx)(l.a.Item,{xs:1,children:Object(a.jsx)(T.a,{id:"navButton",variant:d,size:"lg",onClick:function(){if("IDLE"===j.get)if(""===h.get)i("Pick an Algorithm");else switch(g.ClearPath(),h.get){case"Algorithm_Dijkstra":case"Algorithm_APlus":case"Algorithm_Greedy_Best_First":case"Algorithm_Swarm":case"Algorithm_Convergent_Swarm":case"Algorithm_Bidrectional_Swarm":break;case"Algorithm_Breadth_First":$(g.Start,b.get[1])}},children:r})})};var te=function(e){var t=e.names,r=e.handlers,i=Object(n.useState)(0),s=Object(o.a)(i,2),c=s[0],d=s[1],u=Object(n.useContext)(I),h=R(),j=Object(o.a)(h,2),b=j[0],g=j[1];return Object(a.jsx)(l.a.Item,{xs:1,children:Object(a.jsx)(l.a.Link,{onClick:function(){"IDLE"===u.get&&(d((function(e){return(e+1)%r.length})),r[c]())},className:b,onMouseEnter:g,onMouseLeave:g,children:t[c]})})};var re=function(){var e=Object(n.useState)("Average"),t=Object(o.a)(e,2),r=t[0],i=t[1],s=Object(n.useContext)(I),c=Object(n.useContext)(N),l=R(),d=Object(o.a)(l,2),u=d[0],j=d[1];return Object(n.useEffect)((function(){i(c.get[0])}),[c.get]),Object(a.jsxs)(h.a,{xs:1,title:Object(a.jsxs)("span",{className:u,children:["Speed: ",r]}),id:"DropdownSpeed",onSelect:function(e){if("IDLE"===s.get)switch(e){case"Fast":c.set("Fast");break;case"Average":c.set("Average");break;case"Slow":c.set("Slow")}},onMouseEnter:j,onMouseLeave:j,children:[Object(a.jsx)(h.a.Item,{eventKey:"Fast",children:"Fast"}),Object(a.jsx)(h.a.Item,{eventKey:"Average",children:"Average"}),Object(a.jsx)(h.a.Item,{eventKey:"Slow",children:"Slow"})]})};var ae=function(){var e=J();return Object(a.jsxs)(d.a,{collapseOnSelect:!0,expand:"xl",bg:"dark",variant:"dark",children:[Object(a.jsx)(u,{}),Object(a.jsx)(d.a.Toggle,{"aria-controls":"Collapse"}),Object(a.jsx)(d.a.Collapse,{id:"Collapse",className:"nvbar-collapse",children:Object(a.jsxs)(l.a,{className:"nav-bar",children:[Object(a.jsx)(K,{}),Object(a.jsx)(G,{}),Object(a.jsx)(U,{names:["Add Bomb","Remove Bomb"],handlers:[e.Addbomb,e.RemoveBomb]}),Object(a.jsx)(ee,{}),Object(a.jsx)(te,{names:["Clear Board"],handlers:[e.ClearBoard]}),Object(a.jsx)(W,{names:["Clear Walls & Weights"],handlers:[e.ClearWalls]}),Object(a.jsx)(W,{names:["Clear Path"],handlers:[e.ClearPath]}),Object(a.jsx)(re,{})]})})]})};var ne=function(){var e=[Object(n.useContext)(x),Object(n.useContext)(p),Object(n.useContext)(I)],t=e[0],r=e[1],a=e[2];return{MouseDownHandler:function(e){if("IDLE"===a.get){e.preventDefault(),b.id=e.target.id;var n=V(b.id,t);n.type?(H(b.id,n.rKind),r.set(g)):r.set(n.kind)}},MouseUpHandler:function(e){"IDLE"===a.get&&r.set("")},OnMouseEnterHanlder:function(e){if("IDLE"===a.get){b.newId=e.target.id;var n=V(b.id,t),i=V(b.newId,t);r.get===g&&i.type?(H(b.newId,i.rKind),b.id=b.newId):r.get!==g&&""!==r.get&&i.type&&(H(b.id,n.touch),t.set({componentKind:n.kind,under:i.kind}),H(b.newId,n.kind),b.id=b.newId)}}}};var ie=function(){var e=[b.rowSize,b.colSize,b.size],t=e[0],r=e[1],i=e[2],s=Array.from(Array(t).keys()),c=Array.from(Array(r).keys()),o=ne(),l=[o.MouseDownHandler,o.MouseUpHandler,o.OnMouseEnterHanlder],d=l[0],u=l[1],h=l[2],j=s.map((function(e,t){return Object(a.jsx)("tr",{height:i,children:c.map((function(t,n){return Object(a.jsx)("td",{id:e*r+t,className:f,width:i,onMouseUp:u,onMouseDown:d,onMouseEnter:h},n)}))},t)}));return Object(n.useEffect)((function(){document.getElementById((Math.floor(b.rowSize/2)*b.colSize+Math.floor(b.colSize/4)).toString()).className="start",document.getElementById((Math.floor(b.rowSize/2+1)*b.colSize-Math.floor(b.colSize/4)).toString()).className="end"}),[]),Object(a.jsx)("div",{className:"tablePadding",children:Object(a.jsx)("table",{id:"board",align:"center",border:"1",cellSpacing:"0",children:Object(a.jsx)("tbody",{children:j})})})},se=r(40);var ce=function(){var e=Object(n.useContext)(I);return Object(n.useEffect)((function(){setTimeout((function(){e.set("IDLE")}),1e3)}),[]),"LOADING"===e.get?Object(a.jsx)(se.a,{animation:"border",variant:"warning"}):Object(a.jsx)("div",{id:"UI",children:Object(a.jsx)(ie,{})})};var oe=function(){return Object(a.jsx)("div",{id:"mainInfo",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-Start-Node"}),"Start Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-End-Node"}),"Target Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-Bomb-Node"}),"Bomb Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-Unvisited-Node"}),"Unvisited Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-Visited-Node"}),"Visited Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-ShortestPathNode-Node"}),"Shortest-Path Node "]}),Object(a.jsxs)("li",{children:[" ",Object(a.jsx)("div",{className:"Info-WallNode-Node"}),"Wall Node "]})]})})};var le=function(){var e=Object(n.useState)("Pick an algorithm and visualize it!"),t=Object(o.a)(e,2),r=t[0],i=t[1],s=Object(n.useState)(""),c=Object(o.a)(s,2),l=c[0],d=c[1],u=Object(n.useState)(""),h=Object(o.a)(u,2),j=h[0],b=h[1],g=Object(n.useContext)(P);return Object(n.useEffect)((function(){var e="",t="",r="";switch(g.get){case"Algorithm_Dijkstra":e="Dijkstra's Algorithm",t="weighted",r="guarantees";break;case"Algorithm_APlus":e="A* Search",t="weighted",r="guarantees";break;case"Algorithm_Greedy_Best_First":e="Greedy Best-first Search",t="weighted",r="does not guarantee";break;case"Algorithm_Swarm":e="Swarm Algorithm",t="weighted",r="does not guarantee";break;case"Algorithm_Convergent_Swarm":e="Convergent Swarm Algorithm",t="weighted",r="does not guarantee";break;case"Algorithm_Bidrectional_Swarm":e="Bidrectional Swarm Algorithm",t="weighted",r="does not guarantee";break;case"Algorithm_Breadth_First":e="Breath-first Search",t="unweighted",r="guarantee";break;case"Algorithm_Depth_First":e="Depth-first Search",t="unweighted",r="does not guarantee";break;default:e="Pick an algorithm and visualize it!",t="",r=""}i(e),d(t),b(r)}),[g.get]),""===g.get?Object(a.jsx)("div",{id:"algorithmDescriptor",children:r}):Object(a.jsxs)("div",{id:"algorithmDescriptor",children:[r," is ",Object(a.jsx)("i",{children:Object(a.jsx)("b",{children:l})})," and ",Object(a.jsx)("i",{children:Object(a.jsx)("b",{children:j})})," the shortest path!"]})};var de=function(){var e=Object(n.useReducer)(L,""),t=Object(o.a)(e,2),r=t[0],i=t[1],s=Object(n.useReducer)(M,B),c=Object(o.a)(s,2),l=c[0],d=c[1],u=Object(n.useReducer)(C,D),h=Object(o.a)(u,2),j=h[0],b=h[1],g=Object(n.useReducer)(F,E),m=Object(o.a)(g,2),v=m[0],O=m[1],f=Object(n.useReducer)(A,w),_=Object(o.a)(f,2),S=_[0],z=_[1],R=Object(n.useReducer)(k,""),K=Object(o.a)(R,2),G=K[0],W=K[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(p.Provider,{value:{get:G,set:W},children:Object(a.jsx)(x.Provider,{value:{get:S,set:z},children:Object(a.jsx)(N.Provider,{value:{get:v,set:O},children:Object(a.jsx)(y.Provider,{value:{get:j,set:b},children:Object(a.jsx)(I.Provider,{value:{get:l,set:d},children:Object(a.jsxs)(P.Provider,{value:{get:r,set:i},children:[Object(a.jsx)(ae,{}),Object(a.jsx)(oe,{}),Object(a.jsx)(le,{}),Object(a.jsx)(ce,{})]})})})})})})})},ue=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,58)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),i(e),s(e)}))};r(52);c.a.render(Object(a.jsx)(de,{}),document.getElementById("root")),ue()}},[[53,1,2]]]);
//# sourceMappingURL=main.3bb3a9d9.chunk.js.map