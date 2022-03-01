import { ComicType } from '../../types/ComicType';
import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { Comics } from '../../components/Comics/index';
import * as C from  './styles';

export const Home = () => {

    const [ComicList, setComicList] = useState<ComicType[]>([]);
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        loadingComics();
    }, []);
  
    //  Requisição de lista de Comics
    const loadingComics = async () => {
        setLoading(true);
        const Comics = await api.getAllComics();  
        setComicList(Comics); 
        setLoading(false);                
    } 
    
        let RareList:any = [];
        function RareGenerator() {            
            let valueMax = ComicList.length;
            let number:any = Math.ceil(Math.random() * valueMax); // Gerar número aleatório
            while (RareList.indexOf(number) >= 0) {  // Verificar se já existe e enquanto o numero existir, escolher outro
                number = Math.ceil(Math.random() * valueMax);
            }
            RareList.push(number); // Adicionar este numero à array de numeros sorteados
        }
        let percentage = Math.round(ComicList.length * 10 / 100);
        for(let i = 0; i <= percentage; i++){
            RareGenerator();
        }
        // Exibição da lista de Quadrinhos
    return (
        <C.Container> 
            {loading && "Carregando..."}            
            {ComicList.map((item, index) => ( 
                <Comics
                    key={index}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    prices={item.prices} 
                    raro={false} 
                    item={item}/>
            ))}           
        </C.Container>
    );

}
