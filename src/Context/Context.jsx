import React, { createContext, useState, useContext } from 'react';

const Context = createContext();

export const Provider = ({ children }) => {


    // Aqui van los estados que se van a compartir entre componentes
    const [state, setState] = useState("");
  
    // Aqui van los métodos que se van a compartir entre componentes
    const updateState = (newValue) => {
      setState(newValue);
    };
  
    return (
        // Aqui se envía el estado y los métodos a los componentes
      <Context.Provider value={{ state, updateState }}>
        {children}
      </Context.Provider>
    );
  };

  // Aqui se exporta el contexto para que los componentes puedan acceder a él 
  // Ejemplo: const { state, updateState } = useContext();
  export const UseContext = () => useContext(Context);