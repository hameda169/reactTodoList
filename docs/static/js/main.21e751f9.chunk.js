(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(3),r=t.n(c),l=(t(11),t(4)),s=(t(12),t(5)),u=t(1),i={tasks:[],newTask:"",lastId:0,show:"all"},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INIT":return Object(u.a)({},e,{tasks:n.tasks,lastId:n.lastId});case"CHANGE_NEW_TASK_NAME":return Object(u.a)({},e,{newTask:n.newTask});case"CHECK":return Object(u.a)({},e,{tasks:e.tasks.map((function(e){return Object(u.a)({},e,{done:e.id===n.id?!e.done:e.done})}))});case"REMOVE":return Object(u.a)({},e,{tasks:e.tasks.filter((function(e){return e.id!==n.id}))});case"CHANGE_VIEW":return Object(u.a)({},e,{show:n.show});case"ADD_NEW_TASK":return Object(u.a)({},e,{tasks:[].concat(Object(s.a)(e.tasks),[{id:e.lastId,name:e.newTask,done:!1}]),lastId:e.lastId+1,newTask:""});default:return Object(u.a)({},e)}},k=[{id:1,name:"Get Milk",done:!1},{id:2,name:"Go to Gym",done:!1},{id:3,name:"Call Mom",done:!1},{id:4,name:"Work",done:!1},{id:5,name:"Send Email",done:!1}],m=function(e){var n=e.id,t=e.name,a=e.remove,c=e.done,r=e.check;return o.a.createElement("div",{style:{width:null}},o.a.createElement("input",{checked:c,type:"checkbox",onClick:r}),o.a.createElement("span",null,n)," - ",o.a.createElement("span",null,t)," - ",o.a.createElement("span",null,c?"done":"undone"),o.a.createElement("button",{onClick:a},"delete"))};var E=function(){var e=Object(a.useReducer)(d,i,void 0),n=Object(l.a)(e,2),t=n[0],c=n[1];Object(a.useEffect)((function(){return c({type:"INIT",tasks:k,lastId:6})}),[]);var r=Object(a.useCallback)((function(e){return function(){return c(function(e){return{type:"REMOVE",id:e}}(e))}}),[]),s=Object(a.useCallback)((function(e){return function(){return c(function(e){return{type:"CHECK",id:e}}(e))}}),[]),u=Object(a.useCallback)((function(e){return function(){return c(function(e){return{type:"CHANGE_VIEW",show:e}}(e))}}),[]),E=Object(a.useCallback)((function(){return c({type:"ADD_NEW_TASK"})}),[]),b=Object(a.useCallback)((function(e){return c({type:"CHANGE_NEW_TASK_NAME",newTask:e.target.value})}),[]);return o.a.createElement("div",{className:"App"},o.a.createElement("button",{disabled:"all"===t.show,onClick:u("all")},"All"),o.a.createElement("button",{disabled:"done"===t.show,onClick:u("done")},"Done"),o.a.createElement("button",{disabled:"undone"===t.show,onClick:u("undone")},"Undone"),o.a.createElement("br",null),t.tasks.filter((function(e){return"all"===t.show||("done"===t.show?e.done:!e.done)})).map((function(e){return o.a.createElement(m,{id:e.id,name:e.name,remove:r(e.id),check:s(e.id),done:e.done})})),o.a.createElement("input",{type:"text",onChange:b,value:t.newTask}),o.a.createElement("button",{onClick:E},"Add New Task"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.21e751f9.chunk.js.map