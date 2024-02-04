var checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.style.setProperty('--box-shadow', '0 2rem 3rem rgba(0, 0, 0, 0.4)');
        document.documentElement.style.setProperty('--box-color', '#202528');
        document.documentElement.style.setProperty('--color-bg', '#181a1e');
        document.documentElement.style.setProperty('--text-clr', 'white');
        document.documentElement.style.setProperty('--left-clr', 'white');
    } else {
        document.documentElement.style.setProperty('--box-shadow', '0 2rem 3rem rgba(132, 139, 200, 0.18)');
        document.documentElement.style.setProperty('--box-color', 'white');
        document.documentElement.style.setProperty('--color-bg', '#edeffd');
        document.documentElement.style.setProperty('--text-clr', 'black');
        document.documentElement.style.setProperty('--left-clr', 'var(--color-dark)');
    }
});