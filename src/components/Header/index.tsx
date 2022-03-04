import * as C from './styles';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext  } from '../../contexts/CartContext';

export const Header = ({children}:any) => {

    const { cart } = useContext(CartContext);    
    const cartCount = Object.keys(cart).reduce((prev, curr) => {
        return prev + cart[curr].amount;
    }, 0);
        
    return (
        <C.Header>
        <C.HeaderItem>
            <Link to="/"><img src="../assets/img/marvel-comics-logo.png" alt="Logo Marvel Comics"/></Link>
            </C.HeaderItem>
        <C.HeaderItem>
        <nav>
            <ul>
            <li><Link to="/carrinho">Carrinho ({cartCount})</Link></li>
            </ul>
        </nav>
        </C.HeaderItem>
        </C.Header>
    );
}