// Get the modal section and the cancel button
const modal = document.getElementById('modal');
const cancelButton = document.getElementById('cancel-button');

// Get all the "Place Order" buttons
const orderButtons = document.querySelectorAll('#button');

// Add an event listener to each "Place Order" button
orderButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Prevent the default behavior of the button
    e.preventDefault();

    // Show the modal
    modal.classList.remove('hidden');

    // Add an event listener to the cancel button
    cancelButton.addEventListener('click', () => {
      // Hide the modal
      modal.classList.add('hidden');
    });

    // Add an event listener to the "Create Task" button
    document.querySelector('button.bg-black').addEventListener('click', () => {
      // Get the order name from the input field
      const orderName = document.querySelector('input[name="input"]').value;

      // Create a new order object
      const order = {
        name: orderName,
        // Add other order details here if needed
      };

      // Send the order to the server or perform any other action
      console.log('Order has been made:', order);

      // Hide the modal
      modal.classList.add('hidden');
    });
  });
});