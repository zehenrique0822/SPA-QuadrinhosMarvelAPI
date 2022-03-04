import * as C from './styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    }
    price: number;
    item: any
}

export const ComicInfoItem = ({ title, thumbnail, price, item }: Props) => {

    const { addCart } = useContext(CartContext);
    let img = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

    return (
        <C.Container>
            <C.ContainerItem>
                <img src={`${img}`} alt="Thumbnail HQ" />
            </C.ContainerItem>
            <C.ContainerItem>
                <h1>{title}</h1>
                <p>Disponibilidade: Em estoque</p>
                <p>R$ {price}</p>
                <button onClick={() => addCart(item)}>ADICIONAR AO CARRINHO</button>
                <Link to={`/carrinho`}><button>FINALIZAR COMPRA</button></Link>
            </C.ContainerItem>
        </C.Container>
    );
}