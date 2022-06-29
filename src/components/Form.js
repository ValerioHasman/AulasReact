import { useState } from 'react'

function Form (){
    function cadastrou(e) {
        e.preventDefault()
        window.alert("Casatrado com sucesso!!! " + name)
    }

    const [name , setName] = useState('Valério')
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Preencha o formulário</h1>
            <form onSubmit={cadastrou}>
                <label htmlFor="name">Nome:</label>
                <input
                    id="name"
                    name="name"
                    placeholder="Digite o seu nome:"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br />
                <label htmlFor="password">Senha:</label>
                <input
                    id="password"
                    name="password"
                    placeholder="Digite o seu nome:"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    ) 
}

export default Form