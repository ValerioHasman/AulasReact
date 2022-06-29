function SeuNome ({setNome}){
    return (
        <div>
            <label>Digite o nome:</label>
            <input
                type="text"
                placeholder="Nome:"
                onChange={(e) => setNome(e.target.value)}
            />
        </div>
    )
}

export default SeuNome