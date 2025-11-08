document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.header__burger-button');
    const navigation = document.querySelector('.header__navigation');

    if (burgerButton && navigation) {
        burgerButton.addEventListener('click', function() {
            navigation.classList.toggle('is-open');
            const isOpen = navigation.classList.contains('is-open');
            this.setAttribute('aria-expanded', isOpen);
        });
    }
});