
import './App.css'
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import { CarritoContext } from './context/CarritoContext.jsx';
import pizzasJson from './data/pizzas.json';

const App = () => {
  const [pedido, setPedido] = useState([]);
  const agregarAlCarro = (pizza_id) => { 
    let selected = pizzasJson.find(selected_pizza => selected_pizza.id === pizza_id)
    pedido.push(selected)
    alert("Se agrego correctamente")
  };

  return (
    <div>
      <CarritoContext.Provider value={{pedido, setPedido, agregarAlCarro}}>
        <NavBar/>
        <AppRouter/>
      </CarritoContext.Provider>      
    </div>
  );
};

export default App;


