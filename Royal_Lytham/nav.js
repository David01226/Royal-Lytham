// More-info-side-Hamburger-Menu

jQuery(document).ready(function () {
    const openMenu = () => {
        document.querySelector('.backdrop').className = 'backdrop active';
        document.querySelector('aside').className = 'active';
        document.querySelector('body').className = 'active';
        document.querySelector('.container').className = 'container active';
    }
    
    const closeMenu = () => {
        document.querySelector('.backdrop').className = 'backdrop';
        document.querySelector('aside').className = '';
        document.querySelector('body').className = '';
        document.querySelector('.container').className = 'container';
    }
    
    
    
    
    document.getElementById('moreButton').onclick = e => {
        e.preventDefault();
        openMenu();
    }
    
    document.querySelector('aside button.close').onclick = e => {
        closeMenu();
    }
    
    document.querySelector('.backdrop').onclick = e => {
        closeMenu();
    }
});

