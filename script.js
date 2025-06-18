
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });

  // script.js
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.scroll-container');
  const prevBtn   = document.querySelector('.scroll-btn.prev');
  const nextBtn   = document.querySelector('.scroll-btn.next');
  const scrollAmount = 320; // px per click (section width + gap)

  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // Optional: hide buttons when can't scroll further
  const updateButtons = () => {
    prevBtn.style.visibility = container.scrollLeft > 0 ? 'visible' : 'hidden';
    nextBtn.style.visibility = 
      container.scrollLeft + container.clientWidth < container.scrollWidth 
        ? 'visible' : 'hidden';
  };

  container.addEventListener('scroll', updateButtons);
  window.addEventListener('resize', updateButtons);
  updateButtons();
});


