
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Simulate form submission
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
      submitButton.disabled = true;
      
      setTimeout(() => {
        document.getElementById('successMessage').style.display = 'block';
        this.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          document.getElementById('successMessage').style.display = 'none';
        }, 5000);
      }, 2000);
    });
    
    // Mobile menu toggle (if needed)
    document.querySelector('.fa-bars').addEventListener('click', function() {
      const nav = document.querySelector('.choices-nav');
      nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    });
  