import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../app/App";
import IziRigPage from "../pages/projects/izirig_suite/IziRigPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/izirig" element={<IziRigPage />} />
            </Routes>
        </BrowserRouter>
    );
}