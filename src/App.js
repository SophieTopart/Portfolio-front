import RouterApp from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./assets/styles/Theme";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Header />
        <RouterApp />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
