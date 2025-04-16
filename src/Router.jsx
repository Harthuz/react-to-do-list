import { Routes } from "react-router-dom";	
import { Inicial } from "./pages";
import { Sobre } from "./pages";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Inicial />}></Route>
            <Route path="/sobre-nos" element={<Sobre />}></Route>
        </Routes>
    )
}

export { Router }