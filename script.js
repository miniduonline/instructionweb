
// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Add button hover effect
  const installButton = document.getElementById('installButton');
  installButton.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
  });
  installButton.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
  });

  // Add animation to feature cards
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-5px)';
          this.style.transition = 'transform 0.3s ease';
      });
      card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
      });
  });

  // Add installation button click handler
  installButton.addEventListener('click', function() {
      // Replace this URL with your actual Chrome Web Store URL
      window.location.href = 'https://chrome.google.com/webstore/detail/your-extension-id';
  });

  // Add feature list animation
  const features = document.querySelectorAll('#features li');
  features.forEach((feature, index) => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateX(-20px)';
      setTimeout(() => {
          feature.style.transition = 'all 0.5s ease';
          feature.style.opacity = '1';
          feature.style.transform = 'translateX(0)';
      }, 100 * index);
  });
});