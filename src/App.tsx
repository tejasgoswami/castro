import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { HttpApiServiceProvider } from './utils/HttpApi.service';
import { APIServiceProvider } from './utils/Api.service';

function App() {

  const getRoutes = () => {
    return <AppRoutes />;
  };

  return (
    <BrowserRouter>
      <HttpApiServiceProvider>
        <APIServiceProvider>
          <div className="App">
            <Header />
            <div>{getRoutes()}</div>
            <Footer />
          </div>
        </APIServiceProvider>
      </HttpApiServiceProvider>
    </BrowserRouter>
  );
}

export default App;
