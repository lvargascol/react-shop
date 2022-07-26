//type rafce

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Password from "../containers/Password";
import Recovery from "../containers/Recovery";
import '../styles/global.css';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const App = () => {
    return(
        <BrowserRouter>
          <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new-password" element={<Password/>}/>
                <Route path="/password-recovery" element={<Recovery/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
          </Layout>
        </BrowserRouter>

    );
}

export default App;