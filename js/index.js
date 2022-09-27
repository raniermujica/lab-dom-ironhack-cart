// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input'); //aqui he accedido a las dos etiquetas correspondientes en el HTML
  priceText = price.innerText;
  priceQuantity = quantity.value; //aqui he accedico al número y al valor de esas etiquetas, ya me da valores.
  let quantityXprice = priceText * priceQuantity; //los valores obtenido se multiplican para formar un resultado
  let subTotal = product.querySelector('.subtotal span'); //aqui creo una variable para almacenar el valor del resultado anterior y le digo en que parte del documento HTML se va a almacenar
  subTotal.innerHTML = quantityXprice; //aqui le digo internamente al DOM que actualice el valor de la casilla subtotal con el resultado de la operacion anterior
  return quantityXprice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let otherProduct = document.querySelectorAll(".product");
  let finalTotal = 0;
  otherProduct.forEach((prices) => {
    console.log(prices);
    finalTotal += updateSubtotal(prices);
  });
  

  // ITERATION 3
  let sumTotal = document.querySelector("#total-value span")
  sumTotal.innerHTML = finalTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementById('remove');
  removeBtn.addEventListener('click', calculateAll);

 
});
