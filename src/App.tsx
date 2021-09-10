import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components'
import { globalContext, ContextProvider } from './context';
import GlobalStyle from './components/Global';
import Routes from './Routers';

function Wrapper() {
  const context = useContext(globalContext);
  return (
    <ThemeProvider theme={context.theme}>
      <GlobalStyle />
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}
function App() {

  return (
    <ContextProvider>
      <Wrapper />
    </ContextProvider>
  );
}

export default App;
