// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(`.price span`);
  // console.log(price); // Verifico que funcione
  const quantity = product.querySelector(`.quantity input`).value;
  //console.log(quantity);
  // Verifico que funcione. Con este no pude hacerlo andar. Le agregue un ID al input
  const subtotal = parseInt(price) * quantity;
  const subtotalTd = product.querySelector('.subtotal span');

  subtotalTd.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach((item) => (total += updateSubtotal(item)));

  //... your code goes here
  // ITERATION 3

  const addTotal = document.querySelector(`#total-value span`);
  addTotal.innerHTML = total;
  //... your code goes here
}

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
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(
    (button = button.addEventListener('click', removeProduct))
  );
});
