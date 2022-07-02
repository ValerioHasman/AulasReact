import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import style from './Footer.module.css'

function Footer () {
    return (
        <footer>
            <ul className={style.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
                <li><FaWhatsapp/></li>
            </ul>
            Dados de rodapé</footer>
    )
}

export default Footer