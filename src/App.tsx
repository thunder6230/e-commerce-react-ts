import React from "react";
import {BrowserRouter} from "react-router-dom";
import {HeaderComponent} from "./components/Header/HeaderComponent";
import {AnimatedRoutes} from "./components/AnimatedRoutes";
import {ProductsContextProvider} from "./context/ProductsContext";
import {FooterComponent} from "./components/Footer/FooterComponent";
import {AccountContextProvider} from "./context/AccountContext";

const App:React.FC= () =>{
  return (
      <AccountContextProvider>
          <ProductsContextProvider>
              <BrowserRouter>
                  <HeaderComponent />
                  <AnimatedRoutes />
                  <FooterComponent/>
              </BrowserRouter>
          </ProductsContextProvider>
      </AccountContextProvider>
  )
}

export default App
