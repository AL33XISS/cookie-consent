document.addEventListener('DOMContentLoaded', function () {

    const cookieContainer = document.querySelector('.container');
    const closeCookie = document.querySelector('.icon-close');
    const eatCookie = document.querySelector('.btn-accept');


    // Load localstorage
    const recoverMemory = localStorage.getItem('recoverMemory');

    if (recoverMemory) {
        cookieContainer.classList.add('disabled');
    }

    // Accept cookies
    eatCookie.addEventListener('click', () => {
        localStorage.setItem('recoverMemory', 'accepted');
        cookieContainer.classList.add('disabled');
    });


    // Reject cookies
    closeCookie.addEventListener('click', () => {
        localStorage.setItem('recoverMemory', 'rejected');
        cookieContainer.classList.add('disabled');
    });

});




