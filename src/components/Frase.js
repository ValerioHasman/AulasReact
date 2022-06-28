import styles from './Frases.module.css'

function Frase (){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>
                Essa é uma frase escrita digitadamente!
            </p>
        </div>
    )
}

export default Frase