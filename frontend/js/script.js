document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const menu = document.getElementById('menu');
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
    
    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const dropdownContent = link.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });
});
