window.onload = () => {
  /*
    Realice un requerimiento asincrónico al URL "http://localhost:3001/clientes".
    Cargue el resultado en el elemento select#inputGroupSelect01
    */
  const customers_list = document.querySelector("select#inputGroupSelect01");
  const orders_table = document.querySelector("tbody#ordenes_tablas");

  fetch("http://localhost:3001/customers")
    .then(response => response.json())
    .then(customers => {
      Array.from(customers).forEach(customer => {
        let new_option = `<option value="${customer.id}">${customer.name}</option>`;
        customers_list.innerHTML += new_option;
      });
    })
    .catch(console.error);


  /*
  Reaccione al evento change del elemento select#inputGroupSelect01. (REFERENCIA: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
  Realice un requerimiento asincrónico al URL "http://localhost:3002/facturas/cliente/:idCliente" con el identificador del cliente seleccionado.
  Cargue los resultados en el elemento table#ordenes_tablas.
  */

  customers_list.addEventListener("change", event => {
    //Change the route
    let url = `http://localhost:3002/invoices/customer/${event.target.value}`;
    fetch(url)
      .then(response => response.json())
      .then(orders => {
        orders_table.innerHTML = "";
        orders.forEach(order => {
          let new_row = `
          <tr>
              <td>${order._id}</td>
              <td>${order.invoiceDate}</td>
              <td>${order.productID}</td>
              <td>${order.amount}</td>
              <td>${order.unit_price}</td>
              <td>${order.partial_price}</td>
          </tr>
          `;
          orders_table.innerHTML += new_row;
        });
      })
      .catch(console.error);
  });
};

