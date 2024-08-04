document.addEventListener("DOMContentLoaded", function() {
    const sections = [
        { id: 'home', name: 'Home' },
        { id: 'collection', name: 'Collection' },
        { id: 'about', name: 'About Us' },
        { id: 'contact', name: 'Contact' }
    ];

    const navbar = document.getElementById('navbar');

    sections.forEach(section => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${section.id}`;
        a.textContent = section.name;
        li.appendChild(a);
        navbar.appendChild(li);
    });

    navbar.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
