import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from '@emotion/react';
import theme from "./themes/mainTheme";

import Registration from "./pages/Registration/Registration"
import Login from "./pages/Login/Login"

const motionWrapper = (element) => (<motion.div initial={{ filter: "blur(1vw)" }} animate={{ filter: "" }} exit={{ filter: "blur(1vw)" }}>{element}</motion.div>)

const App = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/registration" element={motionWrapper(<Registration />)} />
                <Route path="/login" element={motionWrapper(<Login />)} />
            </Routes>
        </AnimatePresence>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
