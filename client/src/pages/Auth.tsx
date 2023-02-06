import Container from "react-bootstrap/Container";
import {Button, Card, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {ERouter} from "../utils/router";

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === ERouter.LOGIN_ROUTER

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height:window.innerHeight - 54}}>
      <Card className="p-3 w-50">
        <h3 className="m-auto mb-2">{isLogin ? "Авторизация" : 'Регистрация'}</h3>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mb-2"
            placeholder='Введите email'
          />
          <Form.Control
            className="mb-4"
            placeholder='Введите пароль'
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
            <Button variant="outline-primary">
              {isLogin ? 'Войти':'Зарегистрироваться'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}