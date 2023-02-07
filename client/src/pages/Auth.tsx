import Container from "react-bootstrap/Container";
import {Button, Card, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {ERouter} from "../utils/router";
import {login, registration} from "../http/userAPI";
import {useState} from "react";
import {IUser, useUserStore} from "../store/useUserStore";
import {useNavigate} from "react-router-dom";

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === ERouter.LOGIN_ROUTER;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useUserStore(state => state.setUser)
  const auth = useUserStore(state => state.setAuth)
  const navigate = useNavigate();


  const signIn = async () => {
    try {
      let data:IUser;
      if(isLogin){
        data = await login(email,password) as IUser;
      }else {
        data = await registration(email, password) as IUser;
      }
      user(data);
      auth(true);
      navigate(ERouter.SHOP_ROUTER);
    }catch (e){
      alert(e)
    }
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height:window.innerHeight - 54}}>
      <Card className="p-3 w-50">
        <h3 className="m-auto mb-2">{isLogin ? "Авторизация" : 'Регистрация'}</h3>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mb-2"
            placeholder='Введите email'
            value={email}
            onChange={event=>setEmail(event.target.value)}
          />
          <Form.Control
            className="mb-4"
            placeholder='Введите пароль'
            value={password}
            onChange={event=>setPassword(event.target.value)}
          />
          <div className="d-flex align-items-center justify-content-between">
            {isLogin
              ? <div>
                  Нет аккаунта? <NavLink to={ERouter.REGISTRATION_ROUTER}>Зарегистрируйся!</NavLink>
                </div>
              : <div>
                  Есть аккаунт? <NavLink to={ERouter.LOGIN_ROUTER}>Войдите!</NavLink>
                </div>
            }
            <Button onClick={signIn} variant="outline-primary">
              {isLogin ? 'Войти':'Зарегистрироваться'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}