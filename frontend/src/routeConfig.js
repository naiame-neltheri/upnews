import IndexScreen from './pages/indexscreen.js';
import AboutScreen from './pages/aboutscreen.js';
import LoginScreen from './pages/loginsreen.js';
import NotFound from './pages/notfound.js';

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