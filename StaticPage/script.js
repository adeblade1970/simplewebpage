document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        if (name && email && message) {
            alert(`Thank you for your message, ${name}! We will get back to you soon.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
