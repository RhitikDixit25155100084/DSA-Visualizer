async function run(){
let v=document.getElementById("vis");
v.innerHTML="";
for(let i=0;i<5;i++){
let d=document.createElement("div");
d.innerText="Step "+i;
d.style.background="cyan";
d.style.margin="5px";
v.appendChild(d);
await new Promise(r=>setTimeout(r,500));
}
}