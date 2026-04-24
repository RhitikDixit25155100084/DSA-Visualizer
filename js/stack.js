let stack=[];
function push(){stack.push(document.getElementById("val").value);render();}
function render(){let s=document.getElementById("stack");s.innerHTML="";
stack.slice().reverse().forEach(v=>{let d=document.createElement("div");d.className="box";d.innerText=v;s.appendChild(d);});}