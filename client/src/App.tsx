import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/AppRouter";
import {NavBar} from './components/NavBar/NavBar'
import {useEffect, useState} from "react";
import {check} from "./http/userAPI";
import {IUser, useUserStore} from "./store/useUserStore";
import {Spinner} from "react-bootstrap";
function App() {

  const [loading, setLoading] = useState(true);

  const user = useUserStore(state => state.setUser)
  const auth = useUserStore(state => state.setAuth)

  useEffect(()=>{
    check().then(data=>{
      user(data as IUser);
      auth(true)
    }).finally(()=> setLoading(false));
  },[])

  if(loading){
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
