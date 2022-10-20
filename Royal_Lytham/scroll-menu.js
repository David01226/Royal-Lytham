// Scroll side menu and backdrop - Open/Close

jQuery(document).ready(function () {
    const openMenu = () => {
        document.querySelector('.scroll-backdrop').className = 'scroll-backdrop active';
        document.querySelector('.scroll-aside').className = 'scroll-aside active';
        document.querySelector('body').classList.add('active') ;
    }
    
    const closeMenu = () => {
        document.querySelector('.scroll-backdrop').className = 'scroll-backdrop';
        document.querySelector('.scroll-aside').className = 'scroll-aside';
        document.querySelector('body').classList.remove('active');
    }
    
    
    
    
    document.getElementById('menuButton').onclick = e => {
        e.preventDefault();
        openMenu();
    }

    document.getElementById('mobile-menuButton').onclick = e => {
        e.preventDefault();
        openMenu();
    }
    
    document.querySelector('.scroll-aside button.close').onclick = e => {
        closeMenu();
    }
    
    document.querySelector('.scroll-backdrop').onclick = e => {
        closeMenu();
    }
});




// Scroll menu visibility on scroll

jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
        checkScroll();
    });

    jQuery(window).resize(function () {
        checkScroll();
    });

    checkScroll();
});

function checkScroll() {
        var scroll = jQuery(window).scrollTop();

        if (scroll <= 176) {
            jQuery('body').removeClass("scrolled");
        } else {
            jQuery('body').addClass("scrolled");
        }
}





// Pop up 

jQuery(document).ready(function () {
    const closePopUp = () => {
        document.querySelector('.booking-box').className = 'booking-box active';
    }

    document.querySelector('.booking-box-close-button').onclick = e => {
        closePopUp();
    }
    
});