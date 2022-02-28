import { MainRoutes } from "./routes/MainRoutes";
import * as C from './AppStyles';

const App = () => {
  return (
    <C.Container>
        <C.Header>
        <C.HeaderItem><img src="../assets/img/marvel-comics-logo.png" alt="Logo Marvel Comics"/></C.HeaderItem>
        <C.HeaderItem>
          <nav>
            <ul>
            <li><a>Cupons</a></li>
            <li><a>Carrinho</a></li>
            </ul>
          </nav>
        </C.HeaderItem>
        </C.Header>      
      <div>        
         <MainRoutes />
      </div>
      <C.Footer>
        <p>Todos os direitos reservados. ©2022 MARVEL</p>
      </C.Footer>
    </C.Container>
  );
}

export default App;