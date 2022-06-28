import PropTypes from 'prop-types'

function Item ({marcas, ano_lancamento}){
    return (
        <>
        <li>{marcas} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marcas: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marcas: 'Não definido',
    ano_lancamento: 0,
}

export default Item