let tarefas = []

const campoTarefa = document.querySelector('#campoTarefa');
const addTarefa = document.querySelector('#addTarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

    addTarefa.addEventListener('click', (e) => {
    e.preventDefault();

    const textoTarefa = campoTarefa.value.trim();
    if(textoTarefa !== '') {
        tarefas.push({text: textoTarefa, concluido: false});
        alert("Tarefa adicionada com sucesso!")
        campoTarefa.value = '';
        mostrarTarefas();
    }
    })

    function mostrarTarefas() {
        listaTarefas.innerHTML = '';
        tarefas.forEach((tarefa, index) =>  {
            const li = document.createElement('li');
            li.classList.toggle('completo', tarefa.concluido);
            li.innerHTML = `
            <span>${tarefa.next}</span>
            <input type = "checkbox" ${tarefa.concluido ? 'checked' : ''} 
            onClick = "tarefaConcluida(${index})">
            <button class = "editar" onclick = "editarTarefa(${index})>Editar</button>
            <button class = "excluir" onclick="ExcluirTarefa(${index})>Excluir</button>
            `
            listaTarefas.appendChild(li);
        

        });
    }