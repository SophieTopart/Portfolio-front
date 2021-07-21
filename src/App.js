import RouterApp from './Router'
import GlobalStyle from './assets/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Theme from './assets/styles/Theme'

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={Theme}>  
          <RouterApp />
      </ThemeProvider>
    </div>
  );
}


