import { ComicType } from '../../types/ComicType';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import * as C from  './styles';
import { ComicInfoItem } from '../../components/ComicInfoItem';

export const ComicInfo = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [Comic, setComic] = useState<ComicType[]>([]);
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        if(params.id) {
            loadingComic(params.id);
        }
    }, []);
  
    //  Requisição de lista de Comics
    const loadingComic = async (id:string) => {
        setLoading(true);
        const ComicGet = await api.getComic(id);  
        setComic(ComicGet); 
        setLoading(false);                
    } 
    
console.log(Comic);
    return(
        <C.Container>
            {loading && "Carregando..."}   
             {Comic.map((item, index) => ( 
                <ComicInfoItem
                    key={index}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    prices={item.prices}
                    item={item}
                    />
            ))}     
        </C.Container>
    )
}