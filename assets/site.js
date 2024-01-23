document.addEventListener('DOMContentLoaded', function () {
    var primeiro = document.querySelector('.primeiro');
    var segundo = document.querySelector('.segundo');

    setTimeout(function () {
        primeiro.classList.add('hide');
        segundo.classList.remove('hide');
    }, 3000);
});