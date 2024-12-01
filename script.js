// gets current page name
const currentPage = window.location.pathname.split('/').pop();

// holds a list of all navigation links in the menu
const menuItems = document.querySelectorAll('.navbar nav ul li a');

// highlight current page in the menu
menuItems.forEach(item => {
  if (item.getAttribute('href') === currentPage) {
    item.classList.add('active'); 
  }
});

// fitness plans
function validateForm() {
  const checkboxes = document.querySelectorAll('input[name="goal"]:checked');
  if (checkboxes.length === 0) {
      alert('Please select at least one goal.');
      return false;
  }
  return true;
}

// scrolls all the way to the form
function scrollToForm() {
  document.getElementById('journey').scrollIntoView({ behavior: 'smooth' });
}

// commits