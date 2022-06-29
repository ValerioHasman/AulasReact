function OutraLista ({itens}) {
    return (<>
    
    <h3>Lista de coisas boas:</h3>
    {
        itens.length > 0 ? (
            itens.map((itens, index) => (
                <p key={index}>{itens}</p>
            ))
        ) : <p>Sem dados para serem exibidos</p>
        
    }
    </>)
}

export default OutraLista