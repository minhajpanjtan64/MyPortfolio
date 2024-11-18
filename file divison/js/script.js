
function toggleForm() {
    var form = document.getElementById('contact-form');
    var content = document.getElementById('content');

    if (form.style.display === 'flex') {
        form.style.display = 'none';
        content.classList.remove('blurred');
    } else {
        form.style.display = 'flex';
        content.classList.add('blurred');
    }
}
