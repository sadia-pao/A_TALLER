let tareas=[];
let filtro="todas";

function agregarTarea(){

if(tarea.value.trim()==="") return;

tareas.push({
texto:tarea.value,
prioridad:prioridad.value,
fecha:fecha.value,
ok:false
});

tarea.value="";
mostrar();
}

function mostrar(){

lista.innerHTML="";

tareas.forEach((t,i)=>{

if(filtro==="pendientes" && t.ok) return;
if(filtro==="completadas" && !t.ok) return;

lista.innerHTML+=`
<div class="tarea ${t.ok?"completa":""}">
<div>
<b>${t.texto}</b><br>
${t.prioridad} | ${t.fecha||"Sin fecha"}
</div>

<div>
<button onclick="check(${i})">✔</button>
<button onclick="borrar(${i})">🗑</button>
</div>
</div>`;
});

total.textContent=tareas.length;
pendientes.textContent=tareas.filter(t=>!t.ok).length;
completadas.textContent=tareas.filter(t=>t.ok).length;
}

function check(i){
tareas[i].ok=!tareas[i].ok;
mostrar();
}

function borrar(i){
tareas.splice(i,1);
mostrar();
}

function filtrar(f){
filtro=f;
mostrar();
}