import styles from "./home.module.css";
import imgcao from "../../../public/dog.jpg"
import imggato from "../../../public/gato.webp"
export default function Home(){
    return(

        <>
        <div className={styles.home}>
        <h2> O que fazemos</h2>
        <h3>venda de produtos</h3>
        <p>Temos uma loja bem completa com tudo para cães, gatos, aves e até peixes</p>
            <ul>
                <li>Rações de várias marcas e tipos</li>
                <li>Petiscos e suplementos</li>
                <li>Brinquedos</li>
                <li>Camas, casinhas e arranhadores</li>
            </ul>
        <h3>banho e tosa</h3>
        <p>Temos uma equipe treinada e cuidadosa que faz banho e tosa com muito amor. Usamos produtos de qualidade, específicos para cada tipo de pele e pelagem. Oferecemos:</p>   
            <ul>
                <li>Tosa higiênica</li>
                <li>Tosa padrão da raça</li>
                <li>Hidratação e outros tratamentos estéticos</li>
            </ul>
        <h2>Seção: Gatos</h2>

        <img src={imggato} alt="" />
        <p>Aqui no Pet Shop , sabemos que gatos são únicos — independentes, sensíveis e cheios de personalidade. Por isso, oferecemos um atendimento totalmente pensado para o bem-estar e o conforto dos felinos.</p>

        <h2>Seção: Cães</h2>
        
        <img src={imgcao} alt="" />
        <p>No Pet Shop o seu melhor amigo recebe o cuidado, o carinho e a atenção que merece em todas as etapas da vida. Nosso atendimento é feito com amor e respeito, sempre pensando no bem-estar dos cães e na tranquilidade dos tutores.</p>
    </div>
    </>
    )
}