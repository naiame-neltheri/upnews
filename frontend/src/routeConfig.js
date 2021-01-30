import IndexScreen from './pages/indexscreen.js';
import AboutScreen from './pages/aboutscreen.js';
import NotFound from './pages/notfound.js';

const routes = [
	{
		path: "/about",
		component: AboutScreen
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