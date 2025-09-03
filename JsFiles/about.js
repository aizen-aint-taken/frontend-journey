  

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.card-hover').forEach(card => {
      observer.observe(card);
    });

    // Add smooth hover effects for skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
      tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-2px)';
      });
      
      tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
      });
    });

    // Add click handlers for buttons (placeholder functionality)
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      });
    });
