(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4815)}])},4815:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),o=n(7294),i=n(4051),a=n.n(i),c=n(5858);function u(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,c,"next",e)}function c(e){u(i,r,o,a,c,"throw",e)}a(void 0)}))}}function l(){var e=function(e){1===x?i(e.target.value):2===x&&p(e.target.value)},t=(0,o.useState)(""),n=t[0],i=t[1],u=(0,o.useState)(""),l=u[0],p=u[1],d=(0,o.useState)(1),x=d[0],h=d[1];function f(){return(f=s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!==n&&1===x?p("."==n?c.formatEther("0."):c.formatEther(n)):""==n&&p("");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!==l&&2===x?i("."==l?c.parseUnits("0.",18):String(c.parseUnits(String(l),18))):""==l&&i("");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(){var e=s(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Unable to copy to clipboard.",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[n]),(0,o.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[l]),(0,r.jsxs)("div",{className:"text-center py-10 ",children:[(0,r.jsx)("h1",{className:"text-[2rem] text-white mb-5 font-bold",children:"Calculator"}),(0,r.jsxs)("div",{className:"grid grid-flow-col grid-cols-2 w-[90%] mx-auto mb-10",children:[(0,r.jsx)("button",{className:"bg-gradient-to-br from-purple-400 to-purple-600 text-[1.3rem] px-2 text-white font-bold rounded-xl py-4 w-[70%] mx-auto hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-800 duration-500",onClick:function(){h(1),p(""),i("")},children:"Wei to Eth"}),(0,r.jsx)("button",{className:"bg-gradient-to-br from-blue-400 to-blue-600 text-[1.3rem] px-2 text-white font-bold rounded-xl py-4 w-[70%] mx-auto hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800 duration-500",onClick:function(){h(2),p(""),i("")},children:"Eth to Wei"})]}),1==x&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"number",min:0,className:"bg-transparent text-white border-white border-2 p-3 rounded-xl text-[1.5rem]",placeholder:"Value in wei",value:n,onChange:e}),(0,r.jsxs)("h2",{className:"mt-10 border-4 mx-auto border-white rounded-full h-[70px] flex items-center justify-center text-[1.3rem] text-white w-[90%]",children:[l," ether"]}),(0,r.jsx)("button",{className:"bg-white text-purple-700 px-4 py-2 rounded-2xl my-5",onClick:function(){b(l)},children:"Copy"})]}),2==x&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"number",min:0,className:"bg-transparent text-white border-white border-2 p-3 rounded-xl text-[1.5rem]",placeholder:"Value in Ether",value:l,onChange:e}),(0,r.jsxs)("h2",{className:"mt-10 border-4 mx-auto border-white rounded-full h-[70px] flex items-center justify-center text-[1.3rem] text-white w-[90%]",children:[n," wei"]}),(0,r.jsx)("button",{className:"bg-white text-purple-700 px-4 py-2 rounded-2xl my-5",onClick:function(){b(n)},children:"Copy"})]})]})}function p(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){p(i,r,o,a,c,"next",e)}function c(e){p(i,r,o,a,c,"throw",e)}a(void 0)}))}}function x(){var e=(0,o.useState)(""),t=e[0],n=e[1],i=(0,o.useState)(""),c=i[0],u=i[1],s=(0,o.useState)(""),l=s[0],p=s[1];function x(){return(x=d(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(t.target.value);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=d(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new Date(1e3*t),u(n.toLocaleString()),p(n.toGMTString());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(){var e=d(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error("Unable to copy to clipboard.",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[t]),(0,r.jsxs)("div",{className:"text-center py-10 ",children:[(0,r.jsx)("h1",{className:"text-[2rem] text-white mb-5 font-bold",children:"Epoch Time Converter"}),(0,r.jsx)("input",{type:"number",min:0,className:"bg-transparent text-white border-white border-2 p-3 rounded-xl text-[1.5rem]",placeholder:"Time",value:t,onChange:function(e){return x.apply(this,arguments)}}),(0,r.jsx)("h1",{className:"bg-white rounded-xl w-fit mx-auto font-semibold text-[1.2rem] text-purple-800 py-2 px-3 mt-5",children:c}),(0,r.jsx)("button",{className:"bg-white text-purple-700 px-4 py-2 rounded-2xl my-5",onClick:function(){f(c)},children:"Copy"}),(0,r.jsx)("h1",{className:"bg-white rounded-xl w-fit mx-auto font-semibold text-[1.2rem] text-purple-800 py-2 px-3 mt-5",children:l}),(0,r.jsx)("button",{className:"bg-white text-purple-700 px-4 py-2 rounded-2xl my-5",onClick:function(){f(l)},children:"Copy"})]})}var h=n(8181);function f(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){f(i,r,o,a,c,"next",e)}function c(e){f(i,r,o,a,c,"throw",e)}a(void 0)}))}}function b(){var e=(0,o.useState)("encoder"),t=(e[0],e[1],(0,o.useState)("")),n=t[0],i=t[1],c=(0,o.useState)(""),u=c[0],s=c[1];function l(){return(l=m(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(t.target.value);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=m(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=h.$,s(t.encode(["string"],[n]));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[n]),(0,r.jsxs)("div",{className:"w-[400px] text-center",children:[(0,r.jsx)("div",{}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"text-[2rem] text-white mb-5 font-bold",children:"Encoder"}),(0,r.jsx)("input",{className:"bg-transparent text-white border-white border-2 p-3 rounded-xl text-[1.5rem]",placeholder:"Enter String",value:n,onChange:function(e){return l.apply(this,arguments)}}),(0,r.jsx)("div",{className:"w-[300px] mx-auto mt-10 text-[1.3rem] rounded-xl py-2 px-2 bg-yellow-300 overflow-scroll",children:(0,r.jsx)("p",{children:u})})]})]})}var v=function(){var e=(0,o.useState)("calculator"),t=e[0],n=e[1];return(0,r.jsxs)("div",{className:"w-[400px] h-[550px] bg-gradient-to-br from-blue-400 to-purple-700 rounded-lg",children:[(0,r.jsxs)("div",{className:"grid grid-flow-col grid-cols-5",children:[(0,r.jsx)("button",{className:"bg-blue-500",onClick:function(){n("calculator")},children:"Calculator"}),(0,r.jsx)("button",{className:"bg-blue-500",onClick:function(){n("time")},children:"Time Converter"}),(0,r.jsx)("button",{className:"bg-blue-500",onClick:function(){n("coder")},children:"Coder"})]}),"calculator"==t&&(0,r.jsx)(l,{}),"time"==t&&(0,r.jsx)(x,{}),"coder"==t&&(0,r.jsx)(b,{})]})}},6601:function(){}},function(e){e.O(0,[598,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);