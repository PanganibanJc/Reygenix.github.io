// Get the dropdown button and content
const homebutton = document.querySelector('.homebutton');
const dropdownhome = document.querySelector('.dropdownhome');

// Toggle the dropdown content on button click
homebutton.addEventListener('click', () => {
    // Toggle the display property
    if (dropdownhome.style.display === 'block') {
        dropdownhome.style.display = 'none';
    } else {
        dropdownhome.style.display = 'block';
    }
});

// Close the dropdown if clicked outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-button')) {
        if (dropdownhome.style.display === 'block') {
            dropdownhome.style.display = 'none';
        }
    }
});
