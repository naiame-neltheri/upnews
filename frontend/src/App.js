import {
	Switch,
	Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import routes from './routeConfig.js';
import Navbar from './components/navbar.js';
import Container from './fragments/container.js';
import Liner from './fragments/liner.js';

function App() {
  return(
    <ThemeProvider theme = { theme }>
        <Container display="block">
            <Navbar/>
            <Liner />
    		<Switch>
                { routes.map((route, i) => (<RouteWithSubRoutes key = {i} {...route} />)) }
    		</Switch>
        </Container>
    </ThemeProvider>
  )
}

function RouteWithSubRoutes(route) {
    return(
        <Route
            path = {route.path}
            render = {props => (<route.component {...props} routes = {route.routes}/>)}
        />
    );
}

export default App;
    // <Route path="/" component = {IndexScreen}>
    //                 </Route>
    //                 <Route path="/about" component = {AboutScreen}>
    //                 </Route>
                // 

                // <Route path="/about">
                //     <AboutScreen />
                // </Route>
                // <Route exact path="/">
                //     <IndexScreen />
                // </Route>
                // <Route path="*">
                //     <NotFound />
                // </Route>