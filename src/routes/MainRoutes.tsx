import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home/index';
import { Cart } from '../pages/Cart/index';
import { NotFound } from '../pages/NotFound/index';
import { ComicInfo } from '../pages/ComicInfo/index';


export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home />},      
        { path: '/hq/:id', element: <ComicInfo />},
        { path: '/carrinho', element: <Cart />},        
        { path: '*', element: <NotFound/>}
    ]);
}