// Optional: Add interactivity for dropdown
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
    });
});
