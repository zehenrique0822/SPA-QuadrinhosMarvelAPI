import { HqType } from '../../types/HqType';
import { useEffect, useState } from "react";
import { api } from '../../services/api';
import { Comics } from '../../components/Comics/index';
import * as C from  './styles';
// import { CartContext } from '../../contexts/CartContext';

export const Home = () => {

    const [HqList, setHqList] = useState<HqType[]>([]);
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        loadingHqs();
    }, []);
  
    //  Requisição de lista de HQs
    const loadingHqs = async () => {
        setLoading(true);
        const Hqs = await api.getAllHqs();  
        setHqList(Hqs); 
        setLoading(false);                
    } 
    
        let RareList:any = [];
        function RareGenerator() {            
            let valueMax = HqList.length;
            let number:any = Math.ceil(Math.random() * valueMax); // Gerar número aleatório
            while (RareList.indexOf(number) >= 0) {  // Verificar se já existe e enquanto o numero existir, escolher outro
                number = Math.ceil(Math.random() * valueMax);
            }
            RareList.push(number); // Adicionar este numero à array de numeros sorteados
        }
        let percentage = Math.round(HqList.length * 10 / 100);
        for(let i = 0; i <= percentage; i++){
            RareGenerator();
        }
        // Exibição da lista de Quadrinhos
    return (
        <C.Container> 
            {loading && "Carregando..."}
            {HqList.map((item, index) => ( 
                <Comics
                    key={index}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    prices={item.prices} 
                    raro={false} />
            ))}
        </C.Container>
    );
}
