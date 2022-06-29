import {useState} from 'react'

function Condicional () {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        window.alert("Sucesso no envio!")
    }
    function limpaEmail(){
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre-se com o e-mail</h2>
            <form>
                <input
                    type="email"
                    placeholder='Digite o email...'
                    onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar email</button>
            </form>
            {userEmail && (
                <div>
                    <p>O email usuário é: {userEmail}</p>
                    <button onClick={limpaEmail}>Limpar email</button>
                </div>
            )

            }
        </div>
    )
}

export default Condicional