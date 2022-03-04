import { ComicType } from '../../types/ComicType';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import * as C from './styles';
import { ComicInfoItem } from '../../components/ComicInfoItem';

export const ComicInfo = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [Comic, setComic] = useState<ComicType[]>([]);
    const [loading, setLoading] = useState(false);

    // Validação se a requisição foi concluida e se o parametro id foi passado na url para exibir carregando na tela.
    useEffect(() => {
        if (params.id) {
            loadingComic(params.id);
        }
    }, []);

    //  Requisição de dados do quadrinho selecionado
    const loadingComic = async (id: string) => {
        setLoading(true);
        const ComicGet = await api.getComic(id);
        setComic(ComicGet);
        setLoading(false);
    }    
    // Exibição de detalhes do quadrinho selecionado
    return (
        <C.Container>
            {loading && "Carregando..."}
            {Comic.map((item, index) => (
                <ComicInfoItem
                    key={index}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    price={item.price}
                    item={item}
                />
            ))}
        </C.Container>
    )
}