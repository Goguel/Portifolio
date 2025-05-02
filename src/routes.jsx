import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
import Page404 from "./pages/Page404";
import PageBase from "./pages/PageBase";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <PageBase>
                            <Home />
                            <Sobre />
                            <Projetos /> 
                            <Contatos />
                        </PageBase>
                    }
                />
               
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
