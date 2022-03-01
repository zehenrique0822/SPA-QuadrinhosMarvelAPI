import * as C from './styles';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext  } from '../../contexts/CartContext';

type Props = {
    id: number;
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
    raro: boolean;
    item: any
  } 

export const Comics = ({ id, title, thumbnail, prices, raro, item}: Props) => {

    const { addCart } = useContext(CartContext);
    let img = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
    let titleUpper = title.toUpperCase();    
    return (
        <C.Container>
            <C.ContainerComicImg>      
            <Link to={`/hq/${id}`}><img src={`${img}`} alt="Thumbnail HQ"/></Link>
            </C.ContainerComicImg>
            <C.ContainerComicTitle>
                <p>{titleUpper}</p>
            </C.ContainerComicTitle>
            <C.ContainerComicButton>
                <p>R$ {prices[0].price}</p>
                <button onClick={() => addCart(item)}>ADICIONAR AO CARRINHO</button>            
            </C.ContainerComicButton>            
        </C.Container>
    );
}