import RouterApp from "./Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./assets/styles/Theme";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Header />
        <RouterApp />
        <Footer />
        <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
      </ThemeProvider>
    </div>
  );
}
