import NotFound from './pages/notfound.js';
import LoginScreen from './pages/loginsreen.js';
import IndexScreen from './pages/indexscreen.js';
import AboutScreen from './pages/aboutscreen.js';
import RegisterScreen from './pages/registerscreen.js';

const routes = [
	{
		path: "/about",
		component: AboutScreen
	},
	{
		path: "/login",
		component: LoginScreen
	},
	{
		path: "/register",
		component: RegisterScreen
	},
	{
		path: "/",
		component: IndexScreen,
		exact: true
	},
	{
		path: "*",
		component: NotFound
	}
]

export default routes;