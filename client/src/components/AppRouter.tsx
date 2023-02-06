import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {useUserStore} from "../store/useUserStore";

export const AppRouter = () => {

  const isAuth = useUserStore(state => state.isAuth);

  return (
    <Routes>
      {isAuth && authRoutes.map(({path,Component})=>
        <Route key={path} path={path} element={<Component/>}/>
      )}
      {publicRoutes.map(({path,Component})=>
        <Route key={path} path={path} element={<Component/>}/>
      )}
      <Route path='*' element={<Navigate to='/' replace/>}/>
    </Routes>
  )
}