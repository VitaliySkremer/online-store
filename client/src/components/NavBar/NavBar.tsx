import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {useUserStore} from "../../store/useUserStore";
import {NavLink} from "react-router-dom";
import {ERouter} from "../../utils/router";
import {Button} from "react-bootstrap";

export const NavBar = () => {

  const user = useUserStore(state => state.user)
  const isAuth = useUserStore(state => state.isAuth)
  const setIsAuth = useUserStore(state => state.setAuth)

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={ERouter.SHOP_ROUTER}>Online-store</NavLink>
        <Nav className="ml-auto">
          {isAuth
            ?<Button variant={'outline-light'} className='me-2'>Выйти</Button>
            :<Button variant={'outline-light'} className='me-2' onClick={()=>setIsAuth(!isAuth)}>Авторизация</Button>
          }
          <Button variant={'outline-light'}>Панель администратора</Button>
        </Nav>
      </Container>
    </Navbar>
  )
}