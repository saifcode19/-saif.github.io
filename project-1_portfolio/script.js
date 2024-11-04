

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    
    sections.forEach(sec => {
    
        let top = window.scrollY; // Move this outside the loop to optimize performance
        let offset = sec.offsetTop - 150; // Adjust the offset if needed
        let height = sec.offsetHeight; // Corrected spelling error
        let id = sec.getAttribute('id');

        // Check if the section is in view
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
           
            // Add active class to the link that corresponds to the section in view
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        });
        };
    });
};
