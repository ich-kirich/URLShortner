import { Container, StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
