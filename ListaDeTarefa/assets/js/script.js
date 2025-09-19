let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

const campoTarefa = document.querySelector('#campoTarefa');
const addTarefa = document.querySelector('#addTarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

function salvarStorage(){
    const tarefasConvertidas = JSON.stringify(tarefas);
    localStorage.setItem('tarefas', tarefasConvertidas);
}

/*
function mostrarStorage(){
    const conversaoTarefas = JSON.parse(tarefas)
    localStorage.getitem(conversaoTarefas);
}
*/



addTarefa.addEventListener('click', (e) => {
e.preventDefault();

const textoTarefa = campoTarefa.value.trim();
if(textoTarefa !== '') {
    tarefas.push({text: textoTarefa, concluido: false});
    alert("Tarefa adicionada com sucesso!")
    campoTarefa.value = '';
    mostrarTarefas();
}
});

    
function mostrarTarefas() {
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) =>  {
        const li = document.createElement('li');
        li.classList.toggle('completo', tarefa.concluido);
        li.innerHTML = `
        <span>${tarefa.text}</span>
        <input type = "checkbox" ${tarefa.concluido ? 'checked' : ''} 
        onClick = "tarefaConcluida(${index})">
        <button class = "editar" onclick="editarTarefa(${index})">Editar</button>
        <button class="excluir" onclick="excluirTarefa(${index})">Excluir</button>
        `
        listaTarefas.appendChild(li);

    });
}

function excluirTarefa(index){
    if (confirm('Você deseja excluir a tarefa? ')) {
        tarefas.splice(index, 1);
        mostrarTarefas();
        salvarStorage();
    }
}

function editarTarefa(index){
    const novaTarefa = prompt(`Editando a tarefa: ${tarefas[index].text}`);
    if (novaTarefa !== null && novaTarefa.trim() !== ''){
        tarefas[index].text = novaTarefa.trim();
        mostrarTarefas();
        salvarStorage();
    }
}

function tarefaConcluida(index){
    tarefas[index].concluido =! tarefa[index].concluido;
    mostrarTarefas();
    salvarStorage();
}
mostrarTarefas();
