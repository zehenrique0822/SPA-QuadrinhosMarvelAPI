import * as C from  './styles';
import { useContext } from 'react';
import { CartContext  } from '../../contexts/CartContext';

type Props = {
    title: string;
    thumbnail: {
      path: string;
      extension: string;
    }
    prices: [
      {
      type: string,
      price: number
     }
    ]
    item: any
  } 

export const ComicInfoItem = ({ title, thumbnail, prices, item }: Props) => {
    
    const { addCart } = useContext(CartContext);
    let img = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

    return(
        <C.Container>
            <C.ContainerItem>
                <img src={`${img}`} alt="Thumbnail HQ"/>
            </C.ContainerItem>
            <C.ContainerItem>
                <h1>{title}</h1>
                <p>Disponibilidade: Em estoque</p>
                <p>R$ {prices[0].price === 0 ? 9.99 : prices[0].price}</p>
                <button onClick={() => addCart(item)}>ADICIONAR AO CARRINHO</button>
                <button>FINALIZAR COMPRA</button>
            </C.ContainerItem>
        </C.Container>
    );
}