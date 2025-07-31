// constants
let contrastToggle = false;
let modalToggle = false; 
const scaleFactor = 1/20;

// emailJS 
function sendMail(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__state--loading');
    const success = document.querySelector('.modal__state--success');
    const failure = document.querySelector('.modal__state--failure');
    loading.classList += ' modal__state--visible';
    emailjs
        .sendForm (
            'service_q7gtzns',
            'template_2u5ueuo',
            event.target,
            'yR5_YHQrmAdt_LIwO'
        ).then(() => {
            loading.classList.remove('modal__state--visible');
            success.classList += ' modal__state--visible'
        }).catch(() => {
            loading.classList.remove('modal__state--visible');
            failure.classList += ' modal__state--visible';
        });
};

// modal
function toggleModal() {
    modalToggle = !modalToggle;
    if (modalToggle) {
        document.body.classList += " modal--open"
    }
    else {
        document.body.classList.remove('modal--open');
    }
}

// burger menu

// contrast mode
function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove('dark-theme');
    }
}

// cursor gravity effect
    

// add star¬ish things that rotate with mouse movement
function moveStars(event) {
    const stars = document.querySelectorAll('.star');
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    console.log(x, y);

    for (let i = 0; i < stars.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        stars[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
}

// POST SITE LAUNCH
// Jupiter red spot?
// accessibility options