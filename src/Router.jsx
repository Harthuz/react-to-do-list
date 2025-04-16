import { Routes, Route } from 'react-router-dom';
import { Inicial } from "./pages";
import { Sobre } from "./pages";
import { LayoutPadrao } from "./layouts/LayoutPadrao";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route path="inicial" element={<Inicial />} />
                <Route path="sobre-nos" element={<Sobre />} />
            </Route>
        </Routes>
    );
};

export { Router };