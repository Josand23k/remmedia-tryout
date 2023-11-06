/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
  
    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
  });
