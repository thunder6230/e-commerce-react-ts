import React, {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import {HeaderComponent} from "./components/Header/HeaderComponent";
import {AnimatedRoutes} from "./components/AnimatedRoutes";
import {ProductsContextProvider} from "./context/ProductsContext";

const App:React.FC= () =>{
  return (
  <ProductsContextProvider>
      <BrowserRouter>
          <HeaderComponent />
            <AnimatedRoutes />
      </BrowserRouter>
  </ProductsContextProvider>
  )
}

export default App
