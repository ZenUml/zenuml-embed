import{r as n,Z as m}from"./core.3bf32fc3.js";const d=n.child({name:"main"}),e=document.querySelector("pre.zenuml");var o;const c=((o=e==null?void 0:e.textContent)==null?void 0:o.trim())||`
// comment
A
A.method`,t=new m(e);console.log("set zenUML to window");window.zenUml=t;t.render(c,{theme:"theme-default"}).then(r=>{d.debug("render resolved",r)});window.parentLogger=n;
