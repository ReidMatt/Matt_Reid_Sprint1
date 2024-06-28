//Execute JavaScript after the DOM is fully loaded
document.addEventListener('DOMContentLoaded',() => {

  //Get the order form element
  const form = document.getElementById('orderform');

  //Add an event listener for form submission
  form.addEventListener('submit', handleFormSubmit);
});

//Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  //Get form field values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const menuItem = document.getElementById('menuItem').value;
  const quantity = parseInt(document.getElementById('quantity').value, 10);
  const creditCard = document.getElementById('creditCard').value;

  //Validate form fields
  if (!validateForm(name, email, menuItem, quantity, creditCard)) {
    return;
  }

  //Display confirmation message if validation is successful
  displayConfirmationMessage(name, menuItem, quantity);
  }
  
  //Function to validate form fields
  function validateForm(name, email, menuItem, quantity, creditCard) {
    if (name.trim() === '' || email.trim() === ''|| menuItem.trim() === '' || isNaN(quantity) || quantity <= 0 || !isValidCreditCard(creditCard)) {
      alert('Please fill in all fields');
      return false;
    }
    return true;
  }

  //Function to validate credit card number
  function isValidCreditCard(creditCard) {
    const regex = /^\d{16}$/;
    return regex.test(creditCard);
  }

  //Function to display confirmation message
  function displayConfirmationMessage(name, menuItem, quantity) {
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = `Thank you, ${name}! Your order for ${quantity} ${menuItem}(s) has been recieved.`;
  }
