import LoginForm from './components/loginForm';
import RegisterForm from './components/registerFrom';
import LoginFormContainer from './containers/loginForm';
import RegisterFormContainer from './containers/registerForm';
import LoginView from './layouts/login';
import RegisterView from './layouts/register';
import authSaga from './effects/auth';
import { register, authorize, logout } from './actions/auth';
import authReducer from './reducers/auth';
import addUser from './services/addUser';
import checkRoute from './services/checkRoute';
import checkUser from './services/checkUser';


export {
  LoginView,
  RegisterView,
  LoginFormContainer,
  RegisterFormContainer,
  LoginForm,
  RegisterForm,
  authSaga,
  register,
  authorize,
  logout,
  authReducer,
  addUser,
  checkRoute,
  checkUser
};
