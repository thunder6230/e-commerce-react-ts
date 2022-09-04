import React from "react";
import {BrowserRouter} from "react-router-dom";
import {HeaderComponent} from "./components/Header/HeaderComponent";
import {AnimatedRoutes} from "./components/AnimatedRoutes";
import {ProductsContextProvider} from "./context/ProductsContext";
import {FooterComponent} from "./components/Footer/FooterComponent";

const App:React.FC= () =>{
  return (
  <ProductsContextProvider>
      <BrowserRouter>
          <HeaderComponent />
          <AnimatedRoutes />
          <FooterComponent/>
      </BrowserRouter>
  </ProductsContextProvider>
  )
}

export default App
