import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme'
import IndexScreen from './pages/IndexScreen.js';

function App() {
  return(
    <ThemeProvider theme = { theme }>
      <IndexScreen/>
    </ThemeProvider>
  )
}

export default App;