const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
         }
        // else {
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements01 = document.querySelectorAll('.hidden01');
const hiddenElements02 = document.querySelectorAll('.hidden02');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements01.forEach((el) => observer.observe(el));
hiddenElements02.forEach((el) => observer.observe(el));