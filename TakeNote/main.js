const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
const accordion = document.querySelectorAll('.content-container');

accordion.forEach((item) => {
    item.addEventListener('click', () => {
        question.classList.toggle('active');
        answer.classList.toggle('active');
    });
});