let arr=[];
function gen(){arr=[];for(let i=0;i<10;i++)arr.push(Math.floor(Math.random()*100));render();}
function render(){let b=document.getElementById("bars");b.innerHTML="";
arr.forEach(v=>{let d=document.createElement("div");d.style.height=v+"px";d.style.width="20px";d.style.display="inline-block";d.style.background="cyan";b.appendChild(d);});}
async function sort(){for(let i=0;i<arr.length;i++){for(let j=0;j<arr.length-i-1;j++){if(arr[j]>arr[j+1]){[arr[j],arr[j+1]]=[arr[j+1],arr[j]];render();await new Promise(r=>setTimeout(r,100));}}}}