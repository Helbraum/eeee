document.getElementById('miniForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;  // Get form information
    const message = document.getElementById('message').value;
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  });
  document.getElementById('miniForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Form is recorded!');  // Display a notification after form submission
  });