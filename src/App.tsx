import { MainRoutes } from "./routes/MainRoutes";
import * as C from './AppStyles';
import { CartProvider } from '../src/contexts/CartContext';
import { Header } from "./components/Header/index";

const App = () => {    
  return (  
    <CartProvider>
      <C.Container>
          <Header>         
          </Header>      
        <div>        
          <MainRoutes />
        </div>
        <C.Footer>
          <p>Todos os direitos reservados. ©2022 MARVEL</p>
        </C.Footer>
      </C.Container>
    </CartProvider>
  );
}

export default App;