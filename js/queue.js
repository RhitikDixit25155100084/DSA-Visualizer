let q=[];
function enqueue(){q.push(document.getElementById("val").value);render();}
function render(){let c=document.getElementById("queue");c.innerHTML="";
q.forEach(v=>{let d=document.createElement("div");d.className="box";d.innerText=v;c.appendChild(d);});}