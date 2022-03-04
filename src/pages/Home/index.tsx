import { ComicType } from '../../types/ComicType';
import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { Comics } from '../../components/Comics/index';
import * as C from './styles';

export const Home = () => {
    const [ComicList, setComicList] = useState<ComicType[]>([]);
    const [loading, setLoading] = useState(false);
    // Validação se a requisição foi concluida ou não para exibir carregando na tela.
    useEffect(() => {
        loadingComics();
    }, []);
    //  Requisição de lista de Quadrinhos
    const loadingComics = async () => {
        setLoading(true);
        const Comics = await api.getAllComics();
        setComicList(Comics);
        setLoading(false);
    }
    // Exibição da lista de Quadrinhos
    return (
        <C.Container>
            {loading && <C.Alert>Carregando...</C.Alert>}
            {ComicList.map((item, index) => (
                <Comics
                    key={index}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    price={item.price}
                    raro={false}
                    item={item} />
            ))}
        </C.Container>
    );

}
