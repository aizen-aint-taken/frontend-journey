   document.addEventListener("DOMContentLooded",function(){
    alert("hi")
   })
   
   
   
   // Sidebar toggle functionality
        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const container = document.querySelector('.container');

        // Check if we're on mobile
        function isMobile() {
            return window.innerWidth <= 768;
        }

        menuToggle.addEventListener('click', function() {
            if (isMobile()) {
                // Mobile behavior - sidebar slides over content
                sidebar.classList.toggle('sidebar-hidden');
                
                // Change icon based on sidebar state
                if (sidebar.classList.contains('sidebar-hidden')) {
                    menuToggle.classList.remove('fa-times');
                    menuToggle.classList.add('fa-bars');
                } else {
                    menuToggle.classList.remove('fa-bars');
                    menuToggle.classList.add('fa-times');
                }
            } else {
                // Desktop behavior - layout adjusts
                sidebar.classList.toggle('sidebar-hidden');
                container.classList.toggle('sidebar-collapsed');
                
                // Change icon based on sidebar state
                if (sidebar.classList.contains('sidebar-hidden')) {
                    menuToggle.classList.remove('fa-bars');
                    menuToggle.classList.add('fa-arrow-right');
                } else {
                    menuToggle.classList.remove('fa-arrow-right');
                    menuToggle.classList.add('fa-bars');
                }
            }
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(event) {
            if (isMobile() && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                if (!sidebar.classList.contains('sidebar-hidden')) {
                    sidebar.classList.add('sidebar-hidden');
                    menuToggle.classList.remove('fa-times');
                    menuToggle.classList.add('fa-bars');
                }
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (!isMobile()) {
                
                sidebar.classList.remove('sidebar-hidden');
                container.classList.remove('sidebar-collapsed');
                menuToggle.classList.remove('fa-times', 'fa-arrow-right');
                menuToggle.classList.add('fa-bars');
            } else {
              
                sidebar.classList.add('sidebar-hidden');
                container.classList.remove('sidebar-collapsed');
                menuToggle.classList.remove('fa-arrow-right');
                menuToggle.classList.add('fa-bars');
            }
        });

   
        if (isMobile()) {
            sidebar.classList.add('sidebar-hidden');
        }

        // Clock functionality (keeping your existing clock feature)
        function updateClock() {
            const now = new Date();
            const clockElement = document.getElementById('clock');
            if (clockElement) {
                clockElement.textContent = now.toLocaleTimeString();
            }
        }

        setInterval(updateClock, 1000);
        updateClock();

        // Year update functionality
        const yearElement = document.querySelector('[data-year]');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }