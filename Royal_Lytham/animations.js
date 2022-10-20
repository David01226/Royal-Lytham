// This causes things to fade in from the bottom as the page scrolls when .fade-in class is added


jQuery(document).ready(function () {

    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else{
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, 
    appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });


});

// https://www.youtube.com/watch?v=huVJW23JHKQ&t=245s







// This increases the fade down when hovering over the header menu at the top of the page

jQuery(document).ready(function () {

    const addClass = () => {
        document.querySelector('.fade-down').classList.add('hover');
    }

    const removeClass = () => {
        document.querySelector('.fade-down').classList.remove('hover');
    }

    document.querySelector('.main-header').onmouseenter = e => {
        e.preventDefault();
        addClass();
    }

    document.querySelector('.main-header').onmouseleave = e => {
        e.preventDefault();
        removeClass();
    }

});