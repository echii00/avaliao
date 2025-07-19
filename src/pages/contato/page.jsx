import styles from "./contato.module.css";


export default function Contato(){
    return(
        <>
        <div className={styles.contato}>        
            <h2>Contato</h2>
            <ul>
                <li>E-mail:contato@meupetonline.com</li>
                <li>Telefone: (11) 99999-9999</li>       
            </ul>

                <h2>Redes Socias:</h2>
            <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>WhatsApp</li>
            </ul></div>
        </>
    )
}