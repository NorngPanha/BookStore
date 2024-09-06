document.addEventListener('DOMContentLoaded', function() {
    // Get the "Up Coming" link element
    const upcomingLink = document.getElementById('upcomingLink');

    // Add click event listener to the link
    upcomingLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        // Redirect to the "Up Coming" page
        window.location.href = 'upcoming.html'; // Change to the correct path
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the link element that will handle the redirection
    const backToHomeLink = document.getElementById('homeLink');

    // Add click event listener to the link
    backToHomeLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        // Redirect to the home page
        window.location.href = 'index.html'; // Change to the correct path
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the link element that will handle the redirection
    const backToHomeLink = document.getElementById('aboutLink');

    // Add click event listener to the link
    backToHomeLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        // Redirect to the home page
        window.location.href = 'about.html'; // Change to the correct path
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the link element that will handle the redirection
    const backToHomeLink = document.getElementById('contactLink');

    // Add click event listener to the link
    backToHomeLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        // Redirect to the home page
        window.location.href = 'contact.html'; // Change to the correct path
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const bookList = document.querySelector('.book-list');
    const books = bookList.getElementsByClassName('book');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase().trim();

        Array.from(books).forEach(book => {
            const bookTitle = book.querySelector('h2').textContent.toLowerCase();
            if (bookTitle.includes(query)) {
                book.style.display = '';
            } else {
                book.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Code to run when the document is fully loaded
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for contacting us! We will get back to you soon.');
            form.reset(); // Reset the form fields
        } else {
            alert('Please fill out all fields.');
        }
    });
});
