const lista = document.getElementById("lista");
const alertaAdicionado = document.getElementById("alertaAdicionado");
let pacientes = [];


criaLista(true);

function criaLista(primeiravez){
    if(primeiravez != true){
        lista.innerHTML="";
        }
    for(i=0;i<pacientes.length;i++){
        let li = document.createElement("li");
        li.id = "paciente";
        li.classList.add("list-group-item");
        li.innerText=i+1+"º "+pacientes[i];
        lista.appendChild(li);
    }
}

function novoPaciente(){
    let paciente = prompt("Digite o nome do paciente");
    console.log(pacientes);
    pacientes.push(paciente);
    criaLista();
    alertaAdicionado.style.visibility = "visible";
    setTimeout(someAlerta, 2000);

}

function someAlerta(){
    alertaAdicionado.style.visibility = "hidden";
}

function atenderPaciente(){
    pacientes.shift();
    criaLista();
}