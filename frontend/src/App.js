import {
	Switch,
	Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import routes from './routeConfig.js';
import Header from './components/header.js';
import Container from './fragments/container.js';
import Navbar from './components/navbar.js';
import Liner from './fragments/liner.js';
import Signature from './fragments/signature.js';

function App() {
  return(
    <ThemeProvider theme = { theme }>
        <Container display="block" p = {[0, 0, 1, 1]} m = {[0, 0, 0, 0]}>
            <Header/>
            <Liner />
            <Navbar />
            <Liner />
    		<Switch>
                { routes.map((route, i) => (<RouteWithSubRoutes key = {i} {...route} />)) }
    		</Switch>
            <Container>
                <Signature>&copy;2021, All rights reserved</Signature>
            </Container>
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