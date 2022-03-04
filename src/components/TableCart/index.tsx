import * as C from './styles'
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const TableCart = () => {

    const { cart, removeFromCart, changeItemAmount } = useContext(CartContext);

    // Função para troca de quantidade no carrinho na qual é realizado após evento acontecer no input de quantidade
    const changeAmount = (key: any) => (evt: any) => {
        const newQty = Number(evt.target.value);
        changeItemAmount(key, newQty);
    }
    // Conta de quantidade de itens no carrinho para validar se exibe ou não carrinho
    const cartCount = Object.keys(cart).reduce((prev, curr) => {
        return prev + cart[curr].amount;
    }, 0);
    // Conta para pegar valor total dos itens do carrinho
    const cartValue = Object.keys(cart).reduce((prev, curr) => {
        return prev + cart[curr].amount * cart[curr].item.price;
    }, 0);
    // Exibição do carrinho
    return (
        <C.Div>
            {cartCount === 0 && <C.Alert>Sem itens no carrinho</C.Alert>}
            {cartCount >= 1 && <C.Container>
                <C.ContainerList>
                    <C.TableCart>
                        <tr>
                            <td>HQ</td>
                            <td>Nome</td>
                            <td>Preço Unitário</td>
                            <td>Quantidade</td>
                            <td>Subtotal</td>
                            <td>Remover</td>
                        </tr>
                        {Object.keys(cart).map((key) => {
                            return (
                                <tr key={key}>
                                    <td><img src={`${cart[key].item.thumbnail.path}/portrait_small.${cart[key].item.thumbnail.extension}`} alt="" /></td>
                                    <td>{cart[key].item.title}</td>
                                    <td>R$ {cart[key].item.price.toFixed(2)}</td>
                                    <td><C.Input type="number" defaultValue={cart[key].amount} min="0" onBlur={changeAmount(key)}></C.Input></td>
                                    <td>R$ {(cart[key].item.price * cart[key].amount).toFixed(2)}</td>
                                    <td><C.Button onClick={() => removeFromCart(key)}>Remover item</C.Button></td>
                                </tr>
                            );
                        })}
                    </C.TableCart>
                </C.ContainerList>
                <C.ContainerCart>
                    <C.Table>
                        <tr>
                            <td colSpan={2}>TOTAL NO CARRINHO</td>
                        </tr>
                        <tr><td>Subtotal:</td><td>R$ {cartValue.toFixed(2)}</td></tr>
                        <tr><td>Cupom:</td><td>R$ </td></tr>
                        <tr><td>Total:</td><td>R$ {cartValue.toFixed(2)}</td></tr>
                    </C.Table><br />
                    <C.Button>FINALIZAR COMPRA</C.Button>
                    <p>CUPOM</p>
                    <C.InputCp placeholder="Código do cupom"></C.InputCp>
                    <C.Button>Aplicar cupom</C.Button>
                </C.ContainerCart>
            </C.Container>}
        </C.Div>
    );
}