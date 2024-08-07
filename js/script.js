document.addEventListener('DOMContentLoaded', () => {
    const galleryImage = document.getElementById('gallery-image');
    const galleryText = document.getElementById('gallery-text');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let galleryItems = [];
    let currentIndex = 0;
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

    // Fetch gallery data from JSON
    fetch('assets/data/gallery.json')
        .then(response => response.json())
        .then(data => {
            galleryItems = data;
            updateGallery();
        })
        .catch(error => console.error('Error fetching gallery data:', error));

    // Update gallery content
    function updateGallery() {
        if (galleryItems.length > 0) {
            const currentItem = galleryItems[currentIndex];
            galleryImage.src = currentItem.image;
            galleryText.textContent = currentItem.text;
        }
    }

    // Show previous item
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
        updateGallery();
    });

    // Show next item
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
        updateGallery();
    });
});
