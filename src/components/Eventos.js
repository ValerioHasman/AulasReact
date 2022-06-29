import Button from './Eventos/Button'

function Eventos () {
    var numero = 1
    function meuEvento() {
        window.alert(`Opa, Fui disparado ${numero++} vezes`)
    }
    function segundoEvento() {
        window.alert(`Opa, Fui disparado ${numero++} vezes`)
    }
    return (
        <div>
            <label>Clique para disparar o evento:</label>
            <Button event={meuEvento} text="Primeiro evento"  />
            <Button event={segundoEvento} text="Segundo evento"  />
            <br />
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Eventos