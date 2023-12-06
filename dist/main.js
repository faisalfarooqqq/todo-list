(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([t.id,"body{\n  margin: 0;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  height: 100vh;\n  display: flex;\n}\n\n.wrapper{\n  flex: 1;\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 100px 1fr;\n}\n\n.header{\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  background-color: #2D9596;\n  \n}\n\n.sideBar{\n  grid-column: 1 / 2;\n  grid-row: 1 / 3;\n  background-color: #265073;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n}\n\n.main{\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #ECF4D6;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.createNewBtn{\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n\n.projectsContainer{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n}\n\n.projectsContainer li {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  text-decoration: none;\n  color: white;\n}\n\n.createProjecBtn{\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.formContainerHidden {\n  position: fixed;\n  top: -50%;\n  left: -50%;\n  display: none; \n}\n\n.formContainerActive {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #2D9596;\n  padding: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border: 1px solid #265073;\n}\n\n.formHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.formHeader h2 {\n  margin: 0;\n}\n\n.closeIcon {\n  cursor: pointer;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 5px;\n}\n\ninput,\nselect {\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\ntextarea {\n  width: 100%;\n  padding: 8px;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  height: 200px; /* Adjust the height as needed */\n  resize: vertical; /* Allow vertical resizing */\n}\n\nbutton.addButton {\n  background-color: #4caf50;\n  color: white;\n  padding: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton.addButton:hover {\n  background-color: #45a049;\n}\n\n/* Style for select dropdown arrow */\nselect {\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-position: right 8px top 50%;\n  background-repeat: no-repeat;\n  padding-right: 25px;\n}\n\n.projectFormContainerHidden{\n  position: fixed;\n  top: -50%;\n  left: -50%;\n  background-color: #67729D;\n\n}\n\n.projectFormContainerActive{\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #265073;\n  border: 1px solid #265073;\n  padding: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.taskNavBar {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.taskNavBar ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.taskNavBar ul li {\n  margin-bottom: 10px; /* Adjust the margin as needed */\n}\n\n.taskNavBar a {\n  text-decoration: none;\n  color: white; /* or your preferred color */\n  font-size: 18px; /* or your preferred font size */\n}\n\n.projectsNavBar{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n.deleteIcon {\n  width: 20px; /* Adjust the width as needed */\n  height: 20px; /* Adjust the height as needed */\n}\n\n.taskDiv {\n  display: flex;\n  background-color: #FFC5C5;\n  margin: 2px;\n  border: 1px solid #265073;\n  height: 45px;\n  justify-content: stretch;\n  align-items: center;\n}\n\n.taskTitleElement {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex: 2;\n  font-size: 1rem;\n  height: 100%;\n  padding: 2px;\n}\n\n.taskDueDateElement {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  height: 100%;\n  font-size: 1rem;\n\n}\n\n.taskPriorityElement {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  min-height: 100%;\n  font-size: 1rem;\n}\n\n.delBtnElement{\n  flex: 1;\n  background-color: #9d4242;\n  min-height: 50px;\n  font-size: 1rem;\n}\n\n.detailsBtnElement {\n  flex: 1;\n  background-color: #427D9D;\n  min-height: 50px;\n  font-size: 1rem;\n}\n\n\n.taskDetailsDiv{\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #2D9596;\n  padding: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.closeIcon{\n  width: 15px;\n  height: 15px;\n}\n\n.editTaskContainer{\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #DDF2FD;\n  padding: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}",""]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=o(t,r),d=0;d<i.length;d++){var l=n(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{const t=n.p+"bde675c38d54979f589e.svg",e=n.p+"244b66874c46718f7e06.svg",o={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let r;const i=new Uint8Array(16);function a(){if(!r&&(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}const c=[];for(let t=0;t<256;++t)c.push((t+256).toString(16).slice(1));const s=function(t,e,n){if(o.randomUUID&&!e&&!t)return o.randomUUID();const r=(t=t||{}).random||(t.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=r[t];return e}return function(t,e=0){return c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]}(r)};class d{constructor(t,e,n,o,r){this._title=t,this._taskID=s(),this._description=e,this._dueDate=n,this._priority=o,this._projectID=r}get title(){return this._title}set title(t){this._title=t}get description(){return this._description}set description(t){this._description=t}get dueDate(){return this._dueDate}set dueDate(t){this._dueDate=t}get priority(){return this._priority}set priority(t){this._priority=t}get projectID(){return this._projectID}set projectID(t){this._projectID=t}get taskID(){return this._taskID}set taskID(t){this._taskID=t}}class l{constructor(t){this._title=t,this._projectID="Home"===t?"defaultHomeProjectID":s(),this._tasks=[]}get title(){return this._title}set title(t){this._title=t}get projectID(){return this._projectID}set projectID(t){this._projectID=t}addTask(t){this._tasks.push(t)}getTasks(){return this._tasks}}Math.pow(10,8);var u=6e4,p=36e5;function m(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function f(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function g(t,e){var n;m(1,arguments);var o=f(null!==(n=null==e?void 0:e.additionalDigits)&&void 0!==n?n:2);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var r,i=function(t){var e,n={},o=t.split(h.dateTimeDelimiter);if(o.length>2)return n;if(/:/.test(o[0])?e=o[0]:(n.date=o[0],e=o[1],h.timeZoneDelimiter.test(n.date)&&(n.date=t.split(h.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var r=h.timezone.exec(e);r?(n.time=e.replace(r[1],""),n.timezone=r[1]):n.time=e}return n}(t);if(i.date){var a=function(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),o=t.match(n);if(!o)return{year:NaN,restDateString:""};var r=o[1]?parseInt(o[1]):null,i=o[2]?parseInt(o[2]):null;return{year:null===i?r:100*i,restDateString:t.slice((o[1]||o[2]).length)}}(i.date,o);r=function(t,e){if(null===e)return new Date(NaN);var n=t.match(v);if(!n)return new Date(NaN);var o=!!n[4],r=k(n[1]),i=k(n[2])-1,a=k(n[3]),c=k(n[4]),s=k(n[5])-1;if(o)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,c,s)?function(t,e,n){var o=new Date(0);o.setUTCFullYear(t,0,4);var r=7*(e-1)+n+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+r),o}(e,c,s):new Date(NaN);var d=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(x[e]||(E(t)?29:28))}(e,i,a)&&function(t,e){return e>=1&&e<=(E(t)?366:365)}(e,r)?(d.setUTCFullYear(e,i,Math.max(r,a)),d):new Date(NaN)}(a.restDateString,a.year)}if(!r||isNaN(r.getTime()))return new Date(NaN);var c,s=r.getTime(),d=0;if(i.time&&(d=function(t){var e=t.match(y);if(!e)return NaN;var n=b(e[1]),o=b(e[2]),r=b(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,o,r)?n*p+o*u+1e3*r:NaN}(i.time),isNaN(d)))return new Date(NaN);if(!i.timezone){var l=new Date(s+d),g=new Date(0);return g.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),g.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),g}return c=function(t){if("Z"===t)return 0;var e=t.match(D);if(!e)return 0;var n="+"===e[1]?-1:1,o=parseInt(e[2]),r=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,r)?n*(o*p+r*u):NaN}(i.timezone),isNaN(c)?new Date(NaN):new Date(s+d+c)}var h={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},v=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,y=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,D=/^([+-])(\d{2})(?::?(\d{2}))?$/;function k(t){return t?parseInt(t):1}function b(t){return t&&parseFloat(t.replace(",","."))||0}var x=[31,null,31,30,31,30,31,31,30,31,30,31];function E(t){return t%400==0||t%4==0&&t%100!=0}function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function w(t){m(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===I(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function j(t){m(1,arguments);var e=w(t);return e.setHours(0,0,0,0),e}var C={};function T(){return C}function N(t,e){localStorage.setItem(t,JSON.stringify(e))}function L(t){const e=localStorage.getItem(t);return e?JSON.parse(e):console.log("not found")}function S(t){const e=L(t)||[];if(console.log(`Retrieved data for key '${t}':`,e),e&&e.length>0)return e.map((t=>function(t){const e=new l(t._title);return e._projectID=t._projectID,(t._tasks||[]).map((e=>{const n=new d(e._title,e._description,e._dueDate,e._priority);return n.taskID=e._taskID,n.projectID=t._projectID,n})).forEach((t=>{e.addTask(t)})),e}(t)));{const t=function(){const t=new l("Default"),e=new d("Task 1","Description 1","2023-12-01","High"),n=new d("Task 2","Description 2","2023-12-02","Medium");return t.addTask(e),t.addTask(n),t}();return N("Projects",[t]),[t]}}function B(t,e){const n=S("Projects").filter((e=>e.projectID===t));if(n.length>0){const t=n[0].getTasks().filter((t=>t.taskID===e));if(t.length>0){const e=t[0];return console.log("Found task:",e),e}console.log("Task not found in the matching project")}else console.log("Project not found");return null}function _(t){const e=document.querySelector(".main");e.innerHTML="",t.getTasks().forEach((t=>{const n=M(t);e.append(n)}))}function P(t){!function(t){const e=S("Projects");e.forEach((e=>{const n=e.getTasks().filter((e=>e.taskID!==t));e._tasks=[],n.forEach((t=>e.addTask(t)))})),N("Projects",e)}(t),O(S("Projects"))}function U(t){switch(t.toLowerCase()){case"low":return"yellow";case"medium":return"orange";case"high":return"red";default:return"gray"}}function H(){const t=document.querySelector(".taskDetailsDiv");document.body.removeChild(t)}function M(t){const n=document.createElement("div");n.classList.add("taskDiv"),n.dataset.taskId=t.taskID,n.dataset.projID=t.projectID;const o=document.createElement("h2");o.classList.add("taskTitleElement"),o.textContent=t.title;const r=document.createElement("p");r.classList.add("taskDueDateElement"),r.textContent=t.dueDate;const i=document.createElement("p");i.classList.add("taskPriorityElement"),i.textContent=t.priority,i.style.backgroundColor=U(t.priority);const a=document.createElement("button");a.classList.add("detailsBtnElement"),a.textContent="Details",a.setAttribute("data-taskid",t.taskID),a.addEventListener("click",(t=>{const n=t.target.closest(".taskDiv");if(n){const t=n.dataset.taskId;!function(t,n){const o=function(t){const n=document.createElement("div");n.classList.add("taskDetailsDiv"),n.dataset.taskId=t.taskID,n.dataset.projID=t.projectID;const o=new Image;o.src=e,o.alt="Close Icon",o.classList.add("closeIcon"),o.addEventListener("click",(()=>{H()}));const r=document.createElement("p");r.classList.add("taskTitleDetails"),r.textContent="Task: "+t.title;const i=document.createElement("p");i.classList.add("projectDetails"),i.textContent="Project: "+t.projectID;const a=document.createElement("p");a.classList.add("taskDescripDetails"),a.textContent="Description: "+t.description;const c=document.createElement("p");c.classList.add("taskDueDateDetails"),c.textContent="DueDate: "+t.dueDate;const s=document.createElement("p");s.classList.add("taskPriorityDetails"),s.textContent="Priority: "+t.priority,s.style.backgroundColor=U(t.priority);const d=document.createElement("div"),l=document.createElement("button");l.classList.add("editBtn"),l.textContent="Edit",l.setAttribute("data-taskid",t.taskID),l.addEventListener("click",(t=>{const e=t.target.closest(".taskDetailsDiv");if(e){H();const t=e.dataset.taskId;!function(t,e){const n=B(t,e),o=document.createElement("div");o.classList.add("editTaskContainer");const r=document.createElement("form");r.id="editTaskForm";const i=document.createElement("label");i.textContent="Title:";const a=document.createElement("input");a.type="text",a.value=n.title,a.id="editTitle";const c=document.createElement("label");c.textContent="Description:";const s=document.createElement("textarea");s.value=n.description,s.id="editDescription";const d=document.createElement("label");d.textContent="Due Date:";const l=document.createElement("input");l.type="date",l.value=n.dueDate,l.id="editDueDate";const u=document.createElement("label");u.textContent="Priority:";const p=document.createElement("select");["Low","Medium","High"].forEach((t=>{const e=document.createElement("option");e.value=t,e.text=t,p.add(e)})),p.value=n.priority,p.id="editPriority";const m=document.createElement("button");m.type="button",m.textContent="Save";const f=document.createElement("button");f.type="button",f.textContent="Cancel",r.append(i,a,c,s,d,l,u,p,m,f),o.appendChild(r),m.addEventListener("click",(()=>{!function(t){const e=t;console.log(e);const n=document.getElementById("editTitle").value,o=document.getElementById("editDescription").value,r=document.getElementById("editDueDate").value,i=document.getElementById("editPriority").value;if(e.title=n,e.description=o,e.dueDate=r,e.priority=i,""===n.trim()||""===o.trim()||""===r.trim()||""===i.trim())return void console.error("Incomplete or empty task data.");!function(t){if(!(t&&t.taskID&&t.title&&t.description&&t.dueDate&&t.priority))return console.error("Invalid or incomplete task data."),null;const e=S("Projects");e.forEach((e=>{e.getTasks().forEach((e=>{e.taskID===t.taskID&&(e.title=t.title,e.description=t.description,e.dueDate=t.dueDate,e.priority=t.priority)}))})),N("Projects",e)}(e);const a=document.querySelector(".editTaskContainer");document.body.removeChild(a)}(n),O(S("Projects"))})),f.addEventListener("click",(()=>{document.body.removeChild(o)})),document.body.appendChild(o)}(e.dataset.projID,t)}else console.error("Error")}));const u=document.createElement("button");return u.classList.add("delBtn"),u.textContent="Delete",u.setAttribute("data-taskid",t.taskID),u.addEventListener("click",(t=>{P(t.target.getAttribute("data-taskid")),H()})),n.appendChild(o),n.appendChild(r),n.appendChild(a),n.appendChild(c),n.appendChild(s),d.appendChild(l),d.appendChild(u),n.append(d),n}(B(t,n));document.body.appendChild(o)}(n.dataset.projID,t)}else console.error("Error")}));const c=document.createElement("button");return c.classList.add("delBtnElement"),c.textContent="Delete",c.setAttribute("data-taskid",t.taskID),c.addEventListener("click",(t=>{P(t.target.getAttribute("data-taskid"))})),n.appendChild(o),n.appendChild(r),n.appendChild(i),n.append(a),n.append(c),n}function A(){const t=document.getElementById("formContainer");t.classList.toggle("formContainerHidden"),t.classList.toggle("formContainerActive")}function F(){const t=document.getElementById("projectFormContainer");t.classList.toggle("projectFormContainerHidden"),t.classList.toggle("projectFormContainerActive")}function O(e){const n=document.getElementById("projectSelection");n.innerHTML="",e.forEach((t=>{const e=document.createElement("option");e.value=t._projectID,e.text=t.title,n.appendChild(e)}));const o=document.getElementById("projectsContainer");o.innerHTML="",e.forEach((e=>{const n=document.createElement("li");n.textContent=e.title,n.id=e._projectID;const r=new Image;r.src=t,r.alt="Delete Icon",r.classList.add("deleteIcon"),r.addEventListener("click",(t=>{var n;t.stopPropagation(),n=e._projectID,console.log("Deleting project with ID:",n),function(t,e){console.log(`Deleting project with ID ${e} from key ${t}`);const n=L(t)||[];if(n.some((t=>t._projectID===e&&"Default"===t._title)))return void console.log("Cannot delete the default project.");const o=n.filter((t=>t._projectID!==e));N(t,o),console.log("Project deleted. Updated projects:",o)}("Projects",n),O(S("Projects"))})),n.addEventListener("click",(()=>_(e))),n.appendChild(r),o.appendChild(n)})),e.length>0&&_(e[0])}function z(){const t=document.querySelector(".main");t.innerHTML="";const e=function(){const t=S("Projects");let e=[];return t.forEach((t=>{const n=t.getTasks();e.push(...n)})),e.sort(((t,e)=>function(t,e){m(2,arguments);var n=w(t),o=w(e),r=n.getTime()-o.getTime();return r<0?-1:r>0?1:r}(g(t.dueDate),g(e.dueDate)))),e}();0===e.length?t.textContent="No tasks.":e.forEach((e=>{const n=M(e);t.append(n)}))}var R=n(379),Z=n.n(R),$=n(795),q=n.n($),V=n(569),Y=n.n(V),J=n(565),G=n.n(J),W=n(216),K=n.n(W),Q=n(589),X=n.n(Q),tt=n(426),et={};et.styleTagTransform=X(),et.setAttributes=G(),et.insert=Y().bind(null,"head"),et.domAPI=q(),et.insertStyleElement=K(),Z()(tt.Z,et),tt.Z&&tt.Z.locals&&tt.Z.locals;const nt=document.getElementById("addButton"),ot=document.getElementById("createNewBtn"),rt=document.getElementById("closeBtn"),it=document.getElementById("homeLink"),at=document.getElementById("weekLink"),ct=document.getElementById("todayLink"),st=document.getElementById("createProjecBtn"),dt=document.getElementById("addProjectButton"),lt=document.getElementById("closeProjectFormBtn");function ut(){const t=function(){const{taskTitle:t,taskDescription:e,taskDueDate:n,taskPriority:o,selectedProjectID:r}=function(){const t=document.getElementById("title").value,e=document.getElementById("description").value,n=document.getElementById("dueDate").value,o=document.getElementById("priority"),r=o.options[o.selectedIndex].value,i=document.getElementById("projectSelection");return{taskTitle:t,taskDescription:e,taskDueDate:n,taskPriority:r,selectedProjectID:i.options[i.selectedIndex].value}}();if(function(t,e,n){return""!==t.trim()&&""!==e.trim()&&""!==n.trim()}(t,e,n)){const i=function(t,e,n,o,r){return new d(t,e,n,o,r)}(t,e,n,o,r);return i}return alert("Please enter all required information."),null}();if(t){const e=S("Projects"),n=e.find((e=>e._projectID===t.projectID));n.addTask(t),N("Projects",e),_(n),document.getElementById("title").value="",document.getElementById("description").value="",document.getElementById("dueDate").value="",A()}}O(S("Projects")),z(),nt.addEventListener("click",(t=>{t.preventDefault(),ut()})),dt.addEventListener("click",(t=>{t.preventDefault();const e=document.getElementById("projectTitle").value,n=new l(e),o=S("Projects");o.push(n),N("Projects",o),document.getElementById("projectTitle").value="",F(),O(o)})),ot.addEventListener("click",(()=>{A()})),st.addEventListener("click",(()=>{F()})),lt.addEventListener("click",(()=>{console.log("close button was clicked"),F()})),rt.addEventListener("click",(()=>{A()})),it.addEventListener("click",(t=>{t.preventDefault(),console.log("home was clicked"),z()})),at.addEventListener("click",(t=>{t.preventDefault(),console.log("week was clicked"),function(){const t=document.querySelector(".main");t.innerHTML="";const e=function(){const t=new Date;console.log(t);const e=function(t,e){var n,o,r,i,a,c,s,d;m(1,arguments);var l=T(),u=f(null!==(n=null!==(o=null!==(r=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(a=e.locale)||void 0===a||null===(c=a.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==r?r:l.weekStartsOn)&&void 0!==o?o:null===(s=l.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=w(t),g=p.getDay(),h=(g<u?7:0)+g-u;return p.setDate(p.getDate()-h),p.setHours(0,0,0,0),p}(t);console.log(e);const n=function(t,e){var n,o,r,i,a,c,s,d;m(1,arguments);var l=T(),u=f(null!==(n=null!==(o=null!==(r=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(a=e.locale)||void 0===a||null===(c=a.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==r?r:l.weekStartsOn)&&void 0!==o?o:null===(s=l.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=w(t),g=p.getDay(),h=6+(g<u?-7:0)-(g-u);return p.setDate(p.getDate()+h),p.setHours(23,59,59,999),p}(t);console.log(n);const o=S("Projects"),r=[];return o.forEach((t=>{const o=t.getTasks().filter((t=>function(t,e){m(2,arguments);var n=w(t).getTime(),o=w(e.start).getTime(),r=w(e.end).getTime();if(!(o<=r))throw new RangeError("Invalid interval");return n>=o&&n<=r}(new Date(t.dueDate),{start:e,end:n})));r.push(...o)})),r}();0===e.length?t.textContent="No tasks for this week.":e.forEach((e=>{const n=M(e);t.append(n)}))}()})),ct.addEventListener("click",(t=>{t.preventDefault(),console.log("today was clicked"),function(){const t=document.querySelector(".main");t.innerHTML="";const e=function(){const t=new Date,e=S("Projects"),n=[];return e.forEach((e=>{const o=e.getTasks().filter((e=>function(t,e){m(2,arguments);var n=j(t),o=j(e);return n.getTime()===o.getTime()}(g(e.dueDate),t)));n.push(...o)})),n}();0===e.length?t.textContent="No tasks for today.":e.forEach((e=>{const n=M(e);t.append(n)}))}()}))})()})();