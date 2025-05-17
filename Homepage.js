document.addEventListener('DOMContentLoaded', function() {
  // Überprüfe ob Bootstrap geladen ist
  if(typeof bootstrap === 'undefined') {
    console.error('Bootstrap nicht geladen!');
    return;
  }

  // Initialisiere Dropdowns
  var dropdowns = document.querySelectorAll('.dropdown-toggle');
  dropdowns.forEach(function(dropdown) {
    new bootstrap.Dropdown(dropdown);
  });
});