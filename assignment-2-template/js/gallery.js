// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the featured image and caption elements
    const featured = document.getElementById('featured');
    const caption = document.getElementById('caption');
    // Get the container for the bottom thumbnails
    const bottomThumbnailsContainer = document.querySelector('.thumbnails.bottom');
    // Variable to keep track of the current active thumbnail
    let currentActiveThumbnail = null;

    // Array of gallery items (JavaScript Objects)
    const galleryItems = [
        { 
            full: 'images/flowers-pink-large.jpg',
            thumb: 'images/flowers-pink-small.jpg',
            alt: 'Pink Flowers',
            info: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany'
        },
        { 
            full: 'images/flowers-purple-large.jpg',
            thumb: 'images/flowers-purple-small.jpg',
            alt: 'Purple Flowers',
            info: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany'
        },
        { 
            full: 'images/flowers-red-large.jpg',
            thumb: 'images/flowers-red-small.jpg',
            alt: 'Red Flowers',
            info: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany'
        },
        { 
            full: 'images/flowers-white-large.jpg',
            thumb: 'images/flowers-white-small.jpg',
            alt: 'White Flowers',
            info: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany'
        },
        { 
            full: 'images/flowers-yellow-large.jpg',
            thumb: 'images/flowers-yellow-small.jpg',
            alt: 'Yellow Flowers',
            info: 'Market in Münster, North Rhine-Westphalia, Germany'
        }
    ];

    // Function to create a thumbnail for each gallery item
    function createThumbnail(item, index) {
        const li = document.createElement('li');  // Create a list item element
        const img = document.createElement('img');  // Create an image element
        img.src = item.thumb;  // Set the thumbnail source
        img.dataset.full = item.full;  // Store the full-size image URL in a data attribute
        img.alt = item.alt;  // Set the alt text
        img.dataset.info = item.info;  // Store the additional info in a data attribute
        li.appendChild(img);  // Append the image to the list item
        bottomThumbnailsContainer.appendChild(li);  // Append the list item to the thumbnails container

        // Event listener for mouseover to remove grayscale filter
        img.addEventListener('mouseover', function() {
            if (!this.classList.contains('active')) {
                this.style.filter = 'grayscale(0%)';
            }
        });

        // Event listener for mouseleave to add grayscale filter
        img.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.filter = 'grayscale(100%)';
            }
        });

        // Event listener for click to set the featured image and caption
        img.addEventListener('click', function() {
            featured.src = this.dataset.full;  // Set the featured image source
            caption.textContent = this.alt;  // Set the caption text

            // If there is a previously active thumbnail, reset its grayscale filter
            if (currentActiveThumbnail && currentActiveThumbnail !== this) {
                currentActiveThumbnail.classList.remove('active');
                currentActiveThumbnail.style.filter = 'grayscale(100%)';
            }

            // Set this thumbnail as active and remove its grayscale filter
            this.classList.add('active');
            this.style.filter = 'grayscale(0%)';
            currentActiveThumbnail = this;  // Update the current active thumbnail
        });
    }

    // Loop through the galleryItems array and create thumbnails
    galleryItems.forEach((item, index) => {
        createThumbnail(item, index);
    });
});
