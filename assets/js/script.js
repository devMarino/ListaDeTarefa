let tarefas = []

const campoTarefa = document.querySelector('#campoTarefa');
const addTarefa = document.querySelector('#addTarefa');
const listaTarefas = document.querySelector('#listaTarefas')

addTarefa.addEventListener('click', (e) => {
    e.preventDefault();

    const textoTarefa = campoTarefa.value.trim();
    if(textoTarefa !== '') {
        tarefas.push({text: textoTarefa, concluido: false});
        alert("Tarefa adicionada com sucesso!")
        campoTarefa.value = '';
        console.log(tarefas);
        

    }
})