let arr=[];
function insert(){arr.push(document.getElementById("val").value);render();}
function render(){let c=document.getElementById("container");c.innerHTML="";
arr.forEach(v=>{let d=document.createElement("div");d.className="box";d.innerText=v;c.appendChild(d);});}