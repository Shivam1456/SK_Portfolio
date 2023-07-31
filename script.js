// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSectionId = link.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight;
  
        window.scroll({
          top: targetOffset,
          behavior: 'smooth'
        });
      });
    });
  });
  


 