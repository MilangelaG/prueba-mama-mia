import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import pizzasJson from '../data/pizzas.json';
import { CarritoContext } from '../context/CarritoContext.jsx';

const HomePage = () => {
  const {agregarAlCarro} = useContext(CarritoContext);
  const [pizzasDonCangrejo, setPizzas] = useState(pizzasJson);
  const navegate = useNavigate();
  const goToPizza = (pizza_id) => { 
    navegate("/pizza/" + pizza_id) 
  };



  // useEffect(getPokemon, []);

  return (
    <div className='conainer'>
      <div className="row mt-2">
        {pizzasDonCangrejo.map((pizza, index) => (
          <div className='col-4 mt-3'key={index}>
            <div className='card'>
              <h2> {pizza.name} </h2>
              <h3> ${pizza.price} </h3>
              <img src={pizza.img}/>
              <button className='btn btn-sm'
                      onClick={() => goToPizza(pizza.id)}> Ver mas </button>
              <button className='btn btn-sm btn-primary'
                      onClick={() => agregarAlCarro(pizza.id)}> Añadir al carrito </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default HomePage