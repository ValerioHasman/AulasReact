import Item from './Item'

function List (){
    return (
        <>
        <h2>Lista ai</h2>
        <ul>
            <Item marcas="textil" ano_lancamento={1988}/>
            <Item marcas="manansa" ano_lancamento={1978}/>
            <Item marcas="bangare" ano_lancamento={1999}/>
            <Item />
        </ul>
        </>
    )
}

export default List