(this.webpackJsonpusercode=this.webpackJsonpusercode||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(2),c=n.n(r);var o=function(e){return a.a.createElement("button",{className:e.player,onClick:e.click},e.player)};var u=function(e){const t=e.moves;return a.a.createElement("div",{id:"game-grid"},t.map((t,n)=>a.a.createElement(o,{key:n,player:t,click:()=>e.click(n)})))};var i=function(){const[e,t]=Object(l.useState)(new Array(9).fill("")),[n,r]=Object(l.useState)("X"),[c,o]=Object(l.useState)(null);function i(e){const t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let n of t){const[t,l,a]=n;if(e[t]&&e[t]===e[l]&&e[t]===e[a])return e[t]}return e.every(e=>""!==e)?"Tie":null}return Object(l.useEffect)(()=>{"O"!==n||c||setTimeout(()=>{const n=function(e){const t=e.map((e,t)=>""===e?t:null).filter(e=>null!==e);if(t.length>0){e[t[Math.floor(Math.random()*t.length)]]="O"}return e}([...e]);t(n);const l=i(n);l?o(l):r("X")},500)},[n,e,c]),a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Tic-Tac-Toe"),a.a.createElement(u,{moves:e,click:function(l){if(c||""!==e[l]||"O"===n)return;const a=[...e];a[l]=n,t(a);const u=i(a);u?o(u):r("O")}}),c?a.a.createElement("p",null,a.a.createElement("strong",null,"Tie"===c?"It's a Tie!":c+" Wins!")):a.a.createElement("p",null,"Turn: ",a.a.createElement("strong",{className:n},n)),a.a.createElement("p",null,a.a.createElement("button",{onClick:function(){t(new Array(9).fill("")),r("X"),o(null)}},"New Game")))};var s=function(){return a.a.createElement(i,null)};n(12);c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)))},3:function(e,t,n){e.exports=n(13)}},[[3,1,2]]]);
//# sourceMappingURL=main.d6775831.chunk.js.map