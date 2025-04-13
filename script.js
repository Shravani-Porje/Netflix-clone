// script.js

// FAQ accordion toggle
document.querySelectorAll('.accordian input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        const allContent = document.querySelectorAll('.accordian .content');
        allContent.forEach(content => {
            content.style.maxHeight = null;
            content.style.padding = "0 20px";
        });

        const selected = radio.nextElementSibling.nextElementSibling;
        if (radio.checked) {
            selected.style.maxHeight = selected.scrollHeight + "px";
            selected.style.padding = "20px";
        }
    });
});

// Email form submission
document.querySelectorAll('.email-signup').forEach((form) => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        if (email) {
            alert(`Thanks for signing up with: ${email}`);
            emailInput.value = ""; // Clear input after submission
        } else {
            alert("Please enter a valid email address.");
        }
    });
});
