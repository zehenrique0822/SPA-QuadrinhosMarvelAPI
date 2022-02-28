import * as C from './styles';

export type Props = {
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
  }

export const Comics = ({ id, title, thumbnail, prices, raro}: Props) => {

    let img = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;
    let titleUpper = title.toUpperCase();
 
    return (
        <C.Container>
            <C.ContainerComicImg>      
                <img src={`${img}`} alt="Thumbnail HQ"/>  
            </C.ContainerComicImg>
            <C.ContainerComicTitle>
                <p>{titleUpper}</p>
            </C.ContainerComicTitle>
            <C.ContainerComicButton>
                <p>R$ {prices[0].price}</p>
                <button>ADICIONAR AO CARRINHO</button>                
            </C.ContainerComicButton>
        </C.Container>
    );
}