import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext.jsx'

const CarritoPage = () => {
  const {pedido, agregarAlCarro} = useContext(CarritoContext);
  
  const navegate = useNavigate();
  const reload = () => { navegate("") };

  const groupBy = (xs, key) => {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const eliminarDelCarro = (pizza_id) => { 
    let selected = pedido.find(selected_pizza => selected_pizza.id === pizza_id)

    var index = pedido.indexOf(selected);
    if (index !== -1) {
      pedido.splice(index, 1);
    }
    alert("Se elimino correctamente")
  };
  const pedidoAgrupado = groupBy(pedido, 'id')
  const total = () => {
    let suma = 0
    Object.keys(pedidoAgrupado).map((id) => (
      pedidoAgrupado[id].map( (pizza) => {
        suma += pizza.price
      })
    ))
    return suma
  }

  const table = () => {
    return(
      <table  className='table table-striped'>
        <thead>
          <tr>
            <th> Nombre </th>
            <th> Cantidad </th>
            <th> Precio C/U </th>
            <th> Total </th>
          </tr>
        </thead>
        <tbody>
            {Object.keys(pedidoAgrupado).map((id) => (
              <tr key={id}>
                <td> { pedidoAgrupado[id][0].name } </td>
                <td>
                  <button className='btn btn-sm' onClick={() => {
                    eliminarDelCarro(id)
                    reload()
                  }}> - </button> 
                    { pedidoAgrupado[id].length }
                  <button className='btn btn-sm' onClick={() => {
                    agregarAlCarro(id)
                    reload()
                  }}> + </button> 

                </td>
                <td> { pedidoAgrupado[id][0].price } </td>
                <td> { pedidoAgrupado[id][0].price * pedidoAgrupado[id].length } </td>
              </tr>
            ))}
            
        </tbody>
        <hr />
        <h3> Total ${total()} </h3>
      </table>
    );
  }
  const notFound = () => {
    return(
      <div className="alert alert-primary">
        No se encuentra ningun elemento en el carrito
      </div>
    )
  }

  return (
    <div className='conainer'>
      {(pedido.length == 0) ? notFound() : table() }
    </div>
    
  )
}

export default CarritoPage