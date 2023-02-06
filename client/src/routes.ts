import { Admin } from "./pages/Admin"
import { Basket } from "./pages/Basket";
import { Shop } from "./pages/Shop";
import {ERouter} from "./utils/router";
import {Auth} from "./pages/Auth";
import {Device} from "./pages/Device";

export const authRoutes = [
  {
    path:ERouter.ADMIN_ROUTER,
    Component:Admin
  },
  {
    path:ERouter.BASKET_ROUTER,
    Component:Basket
  },
]

export const publicRoutes = [
  {
    path:ERouter.SHOP_ROUTER,
    Component:Shop
  },
  {
    path:ERouter.LOGIN_ROUTER,
    Component:Auth
  },
  {
    path:ERouter.REGISTRATION_ROUTER,
    Component:Auth
  },
  {
    path:ERouter.DEVICE_ROUTER + '/:id',
    Component:Device
  },
]