const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = bookingForm.querySelector('input[name="name"]').value.trim();
    const email = bookingForm.querySelector('input[name="email"]').value.trim();
    const date = bookingForm.querySelector('input[name="date"]').value;
    const guests = bookingForm.querySelector('input[name="guests"]').value;

    const message =
      "New Table Booking\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Date: " + date + "\n" +
      "Guests: " + guests;

    const whatsappUrl =
      "https://wa.me/919876543210?text=" + encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
    bookingForm.reset();
  });
}
