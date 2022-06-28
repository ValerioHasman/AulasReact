function Pessoa ({foto, nome, idade, profissao}){
    return <div>
        <img src={foto} width="255px"/>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
    </div>
}

export default Pessoa