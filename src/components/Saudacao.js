function Saudacao({nome}){

    function gerarSaudacao (texto){
        return `Olá, ${texto}, tudo bem?`
    }

    return ( <>
        {nome && <p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao