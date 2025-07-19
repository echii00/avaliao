import { Link } from "react-router-dom";


export default function Header() {
    return (
        <>
            <div>MEU PET ONLINE</div>

            <nav>
                <Link to='/'>Home</Link>
                
                <Link to='/contato'>Contato</Link>
            </nav>
        </>
    )
}