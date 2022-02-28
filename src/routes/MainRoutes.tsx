import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home/home';
import { NotFound } from '../pages/NotFound';


export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home />},        
        { path: '*', element: <NotFound/>}
    ]);
}