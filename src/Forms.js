import { useState } from "react";

function FormTarefa() {
    const [tarefa, setTarefa] = useState(
        {

            "Titulo"  : "",
            "desc" : "",
            "vencimento" : "",
            "status" : "Validacao"


        }
    );
    const [listaTarefas, setListaTarefas] = useState([]);
    const [listaValidacoes, setListaValidacoes] = useState([
        "Validacao", "Pendente", "Concluida"
    ]);

    function handleFields(field) {
        setTarefa({
            ...tarefa,  

            [field.target.name] : field.target.value
        });
    }

    function addTarefa() {

        if (tarefa.Titulo.trim() === "" || tarefa.desc.trim() === "") {
            alert("Título e descrição são obrigatórios.");
            return;
        }
        
        setListaTarefas([
            ...listaTarefas, 
            tarefa 
        ]);
        
        setTarefa({
            "Titulo"  : "",
            "desc" : "",
            "vencimento" : "",
            "status" : "Validacao"
        });
    }   

    return (
        <>
        <div name="form-tarefa">
            <h1>Cadastro de Tarefas</h1>
            <p>
                <label>Titulo: </label>
                <input type="text" name="Titulo" onChange={handleFields} value={tarefa.Titulo} />
            </p>
            <p>
                <label>Descrição: </label>
                <input type="text" name="desc" onChange={handleFields} value={tarefa.desc} />
            </p>
            <p>
                <label>Data: </label>
                <input type="text" name="vencimento" onChange={handleFields} value={tarefa.vencimento} />
            </p>
            <p>
                <label>Status: </label>
                <select name="status" value={tarefa.status} onChange={handleFields}>
                    {listaValidacoes.map( (cat, key) => 
                        <option key={key} value={cat}>{cat}</option>
                    )}
                </select>
            </p>
            <p>
                <button onClick={addTarefa}>Save</button>
            </p>
            <p>Nome:{tarefa.Titulo} - {tarefa.desc} - {tarefa.vencimento} - {tarefa.status}</p>
            <table className="tabela">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Vencimento</th>
                        <th>Stats</th>
                    </tr>
                </thead>

                <tbody>
                    {listaTarefas.map((taref, key) => {
                        const color = taref.status === "Pendente" ? "red" : "green";
                    return (
                        <tr key={key}>

                            <td style={{ background: color }}>{taref.Titulo}</td>

                            <td style={{ background: color }}>{taref.desc}</td>

                            <td style={{ background: color }}>{taref.vencimento}</td>

                            <td style={{ background: color }}>{taref.status}</td>
                        </tr>
                    );
                })}
                </tbody>
                
            </table>
            </div>
        </>    
    );
}

export default FormTarefa;