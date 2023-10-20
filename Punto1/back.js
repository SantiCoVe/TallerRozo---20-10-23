document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    colorPicker.addEventListener('input', function() {
        const color = colorPicker.value;
        header.style.backgroundColor = color;
        footer.style.backgroundColor = color;
    });
});