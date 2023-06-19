// Function to display a simple greeting message
function greetUser() {
    const userName = prompt('Please enter your name:');
    if (userName) {
      alert(`Hello, ${userName}! Welcome to my portfolio.`);
    }
  }
  
  // Function to dynamically update the year in the footer
  function updateFooterYear() {
    const footerYear = document.querySelector('#footer-year');
    const currentYear = new Date().getFullYear();
    footerYear.textContent = currentYear;
  }
  
  // Event listener for the greeting button
  const greetButton = document.querySelector('#greet-button');
  greetButton.addEventListener('click', greetUser);
  
  // Event listener to update the footer year on page load
  window.addEventListener('load', updateFooterYear);
  