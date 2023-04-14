import React, { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import pizzasJson from '../data/pizzas.json';
import { CarritoContext } from '../context/CarritoContext.jsx'

const PizzaInfoPage = () => {
  let { id } = useParams();
  const [pizza, setPizza] = useState(() => {
    return pizzasJson.find(selected_pizza => selected_pizza.id === id)
  });
  const {agregarAlCarro} = useContext(CarritoContext);

  const navegate = useNavigate();
  const goBack = () => { navegate("/Home") };
  return (
    <div className='conainer'>
      <hr />
      <div className='row'>
        <div className='col-6 overflow-hidden'>
          <img src={pizza.img}/>
        </div>
        <div className='col-6'>
          <h3> {pizza.name[0].toUpperCase() + pizza.name.substring(1)} </h3>
          <hr />
          <p> {pizza.desc}</p>
          <hr />
          <ul>
            {pizza.ingredients.map((ingrediente, index) => (
              <li key={index}> {ingrediente} </li>
            ))}
          </ul>
          <h3><small> ${pizza.price} </small></h3>
          <hr />
          <button className='btn' onClick={goBack}> Ir atras </button>
          <button className='btn btn-primary' onClick={() => {agregarAlCarro(pizza.id)}}> Añadir al carrito </button>
        </div>
      </div>
    </div>
    
  )
}

export default PizzaInfoPage