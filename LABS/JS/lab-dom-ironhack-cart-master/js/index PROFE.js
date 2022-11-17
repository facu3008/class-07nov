// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(`.price span`);
  // console.log(price); // Verifico que funcione
  const quantity = product.querySelector(`.quantity input`);
  console.log(quantity);

  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;
  // Verifico que funcione. Con este no pude hacerlo andar. Le agregue un ID al input
  const subtotalValue = priceValue * quantityValue;
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('.product');
  let totalValue = 0;

  for (let product of products) {
    totalValue += updateSubtotal(product);
  }
  document.querySelector('#total-value span').innerText = totalValue;
}
// products.forEach((item) => (total += updateSubtotal(item)));

// //... your code goes here
// // ITERATION 3

// const addTotal = document.querySelector(`#total-value span`);
// addTotal.innerHTML = total;
//... your code goes here

// // ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log('The target in remove is:', target);
//... your code goes here

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  // const removeButtons = document.querySelectorAll('.btn-remove');
  // removeButtons.forEach(
  //   (button = button.addEventListener('click', removeProduct))
});
