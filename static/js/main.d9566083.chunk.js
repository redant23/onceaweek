(this["webpackJsonpescape-room"]=this["webpackJsonpescape-room"]||[]).push([[0],{47:function(n,e,t){n.exports=t(63)},62:function(n,e,t){},63:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(33),i=t.n(o),c=t(10),u=t(34),l=t(35),f=t(44),d=t(36),s=t(45),p=t(16),m=t(11),b=t(26),x={API_KEY:"AIzaSyAld4LY5FCsoABjghFBnqWaKEcxpq_b344",PROJECT_ID:"onceaweek2020",MESSAGING_SENDER_ID:"989418613729",MEASUREMENT_ID:"G-ZC0WB66S7X"},h=(t(51),t(53),x.PROJECT_ID),v=x.MESSAGING_SENDER_ID,g=x.MEASUREMENT_ID,E={apiKey:"".concat(x.API_KEY),authDomain:"".concat(h,".firebaseapp.com"),databaseURL:"https://".concat(h,".firebaseio.com"),projectId:"".concat(h),storageBucket:"".concat(h,".appspot.com"),messagingSenderId:"".concat(v),appId:"1:".concat(v,":web:f39c488e68d4339e6300a0"),measurementId:"".concat(g)};b.initializeApp(E);var j=b.firestore(),O=t(19),w=t(1),y=t(2);function k(){var n=Object(w.a)(["\n\n\theight:          90px;\n\twidth:           100%;\n\tdisplay:         flex;\n\talign-items:     center;\n\tjustify-content: center;\n\n\t.logo {\n\t\twidth:  160px;\n\t\theight: 35.8px;\n\t}\n\n"]);return k=function(){return n},n}var S={HeaderWrapper:y.a.nav(k())},C=function(n){return a.a.createElement(S.HeaderWrapper,null,"\ud5e4\ub354")};function I(){var n=Object(w.a)(["\n\n\tflex: 1 0 auto;\n\tdisplay:         flex;\n\tflex-direction:  column;\n\tflex:            1 0 auto;\n\talign-items: center;\n\twidth:           100%;\n\n\n"]);return I=function(){return n},n}var T=y.a.div(I());function _(){var n=Object(w.a)(["\n\n\tdisplay:        flex;\n\tflex-direction: column;\n\tposition: absolute;\n\twidth:          100%;\n\theight:         100%;\n\n"]);return _=function(){return n},n}var B=y.a.div(_()),z=function(n){var e=n.noneHeader,t=Object(O.a)(n,["noneHeader"]);return console.log("props",t),a.a.createElement(B,null,!e&&a.a.createElement(C,null),a.a.createElement(T,t))};function A(){var n=Object(w.a)(["\n\n\tfont-weight: 700;\n\n"]);return A=function(){return n},n}function R(){var n=Object(w.a)(["\n\n  width: 58px;\n  height: 3px;\n  background-color: #C2C2C2;\n  margin: 10px 0px;\n\n"]);return R=function(){return n},n}function L(){var n=Object(w.a)(["\n\n  display: inline-flex;\n  flex-direction: column;\n\n"]);return L=function(){return n},n}function W(){var n=Object(w.a)(["\n\n  display: flex;\n  flex-direction: column;\n\n  width:     100%;\n  max-width: 300px;\n  height: 320px;\n  border-radius: 4%;\n  background: url(",") center center;\n  background-size: 120%;\n  color: #C2C2C2;\n  font-weight: 700;\n  padding: 10px;\n  font-size: 12px;\n\n"]);return W=function(){return n},n}function D(){var n=Object(w.a)(["\n\n\tflex: 0 0 auto;\n\tdisplay: inline-flex;\n\twidth: 121px;\n\tflex-direction: column;\n\n"]);return D=function(){return n},n}function M(){var n=Object(w.a)(["\n\n\tfont-size: 94px;\n\tline-height: 77px;\n\n"]);return M=function(){return n},n}function F(){var n=Object(w.a)(["\n\n  display:          flex;\n  align-items:      center;\n  justify-content:  center;\n  width:            100%;\n\n"]);return F=function(){return n},n}var N={EscapeRatio:y.a.span(A()),Line:y.a.div(R()),Link:Object(y.a)(c.b)(L()),Room:y.a.div(W(),(function(n){return n.url})),TextBox:y.a.div(D()),TimeLimit:y.a.div(M()),Wrapper:y.a.div(F())},G=function(n){var e=n.datas;if(!e.length)return null;return a.a.createElement(N.Wrapper,null,e.map((function(n){var e=n._id,t=n.thumbnail,r=n.limit,o=n.joined,i=n.escape;return a.a.createElement(N.Room,{key:e,url:t},a.a.createElement(N.TextBox,null,a.a.createElement(N.Link,{to:"room/".concat(e)},a.a.createElement(N.TimeLimit,null,r),a.a.createElement(N.Line,null),a.a.createElement(N.EscapeRatio,null,"\ud0c8\ucd9c\ube44\uc728 ",function(n){var e=n.escape,t=n.joined;return 0!==t?e/t*100:0}({escape:i,joined:o}),"%"))))})))},H=function(){var n=Object(r.useState)(null),e=Object(m.a)(n,2),t=e[0],o=e[1];return Object(r.useEffect)((function(){j.collection("test2").get().then((function(n){var e=[];n.forEach((function(n){e.push(n.data())})),o(e[0].rooms),console.log("result",e[0].rooms)}))}),[]),t?a.a.createElement("div",null,a.a.createElement(z,null,a.a.createElement(G,{datas:t}))):null},U=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"About"))},J=t(43);function K(){var n=Object(w.a)(["\n\n\tpadding: 4px 8px;\n\tcolor: #fff;\n\tbackground-color: #d2d2d2;\n\tborder-radius: 10px;\n\tfont-weight: 700;\n\tcursor: pointer;\n\n"]);return K=function(){return n},n}function P(){var n=Object(w.a)(["\n\n  position: fixed;\n  top: 10px;\n  left: 10px;\n\n  font-size: 60px;\n  font-weight: 900;\n  color: #646464;\n\n  text-shadow:\n    -1px -1px 0 #fff,\n    1px -1px 0 #fff,\n    -1px 1px 0 #fff,\n    1px 1px 0 #fff;\n\n"]);return P=function(){return n},n}function q(){var n=Object(w.a)(["\n\n  padding: 0px 20px 0 5px;\n  box-sizing: border-box;\n\n  input {\n    width: 100%;\n    height: 20px;\n    padding: 4px 6px;\n    border-radius: 4px;\n    border: 1px solid rgba(200,200,200, 80%);\n    background-color: rgba(255,255,255, 80%);\n  }\n\n  button {\n    display: none;\n  }\n\n"]);return q=function(){return n},n}function Y(){var n=Object(w.a)(["\n\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n\n  padding: 10px;\n  box-sizing: border-box;\n\n  background-color: rgba(0, 0, 0, 50%);\n  align-items: center;\n  justify-content: center;\n\n\n"]);return Y=function(){return n},n}function Q(){var n=Object(w.a)(["\n\n  display: inline-flex;\n  flex-direction: column;\n\n"]);return Q=function(){return n},n}function V(){var n=Object(w.a)(["\n\n\n"]);return V=function(){return n},n}function X(){var n=Object(w.a)(["\n\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: flex-start;\n\n\timg {\n\t\twidth: 100%;\n\t}\n\n"]);return X=function(){return n},n}function Z(){var n=Object(w.a)(["\n\n  display: flex;\n  flex-direction: column;\n\n  width:     100%;\n  max-width: 300px;\n  height: 320px;\n  border-radius: 4%;\n  background-color: red;\n  background: url(",") center center;\n  background-size: 120%;\n  color: #C2C2C2;\n  font-weight: 700;\n  padding: 10px;\n  font-size: 12px;\n\n"]);return Z=function(){return n},n}function $(){var n=Object(w.a)(["\n\n\tmargin-bottom: 10px;\n\tbackground-color: rgba(0,0,0, 50%);\n\tpadding: 6px 10px;\n\tbox-sizing: border-box;\n\n"]);return $=function(){return n},n}function nn(){var n=Object(w.a)(["\n\n\tflex: 0 0 auto;\n\tcolor: white;\n\tmargin-top: 15%;\n\n"]);return nn=function(){return n},n}function en(){var n=Object(w.a)(["\n\n\tfont-size: 94px;\n\tline-height: 77px;\n\n"]);return en=function(){return n},n}function tn(){var n=Object(w.a)(["\n\n  flex: 1 0 auto;\n  width: 100%;\n  background: url(",") center no-repeat;\n  background-size: 150%;\n\n"]);return tn=function(){return n},n}var rn={Button:y.a.span(K()),Count:y.a.div(P()),Form:y.a.form(q()),Item:y.a.div(Y()),Link:Object(y.a)(c.b)(Q()),NextActions:y.a.div(V()),Question:y.a.div(X()),Room:y.a.div(Z(),(function(n){return n.url})),Text:y.a.div($()),TextBox:y.a.div(nn()),TimeLimit:y.a.div(en()),Wrapper:y.a.div(tn(),(function(n){return n.coverUrl}))};var an=function(n){var e=n.time,t=Object(r.useState)(e),o=Object(m.a)(t,2),i=o[0],c=o[1],u=null,l=function(){var n={};return i>0&&(n={hours:Math.floor(i/3600%24),minutes:Math.floor(i/60%60),seconds:Math.floor(i%60)}),n},f=Object(r.useState)(l()),d=Object(m.a)(f,2),s=d[0],p=d[1];return Object(r.useEffect)((function(){u=setTimeout((function(){c(i-1),p(l())}),1e3)})),Object(r.useEffect)((function(){return function(){clearTimeout(u)}}),[]),a.a.createElement("div",null,a.a.createElement("span",null,"".concat(s.minutes,"'").concat(s.seconds<10?"0"+s.seconds:s.seconds,'"')))},on=function(n){var e=n.data,t=Object(r.useState)(0),o=Object(m.a)(t,2),i=o[0],c=o[1],u=e.steps[i],l=function(){c(i+1)};return e?a.a.createElement(rn.Wrapper,{coverUrl:u.image},a.a.createElement(rn.Count,null,a.a.createElement(an,{time:60*e.limit})),a.a.createElement(rn.Item,null,a.a.createElement(rn.Question,null,a.a.createElement("img",{src:u.question})),a.a.createElement(rn.TextBox,null,a.a.createElement(rn.Text,null,u.text),a.a.createElement(rn.NextActions,null,!!u.input.length&&a.a.createElement(J.a,{initialValues:{answer:""},onSubmit:function(n,e){var t=e.resetForm,r=Object(O.a)(e,["resetForm"]);setTimeout((function(){!function(n,e){n===u.answer?(l(),e()):(alert("\ud2c0\ub838\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud480\uc5b4\ubcf4\uc138\uc694"),e())}(n.answer,t),r.setSubmitting(!1)}),1e3)}},(function(n){n.resetForm;var e=Object(O.a)(n,["resetForm"]);return a.a.createElement(rn.Form,{onSubmit:e.handleSubmit},u.input.map((function(n,t){return a.a.createElement("input",{key:t,type:n.type,onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.answer,name:"answer"})})),e.errors.name&&a.a.createElement("div",{id:"feedback"},e.errors.name),a.a.createElement("button",{type:"submit"},"Submit"))})),!u.input.length&&a.a.createElement(rn.Button,{onClick:l},"\ub2e4\uc74c"))))):null},cn=function(n){var e=n.match,t=Object(r.useState)(null),o=Object(m.a)(t,2),i=o[0],c=o[1];return Object(r.useEffect)((function(){j.collection("test2").get().then((function(n){var t=[];n.forEach((function(n){t.push(n.data())}));var r=t[0].rooms.find((function(n){return n._id===e.params._id}));c(r)}))}),[]),i?a.a.createElement("div",null,a.a.createElement(z,{noneHeader:!0},a.a.createElement(on,{data:i}))):null},un=function(n){function e(){return Object(u.a)(this,e),Object(f.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(s.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(p.a,{exact:!0,path:"/",component:H}),a.a.createElement(p.a,{path:"/about",component:U}),a.a.createElement(p.a,{path:"/room/:_id",component:cn}))}}]),e}(r.Component),ln=function(){return a.a.createElement(c.a,null,a.a.createElement(un,null))};t(62),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(ln,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.d9566083.chunk.js.map