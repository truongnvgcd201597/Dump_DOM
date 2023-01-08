const quote = document.querySelector('.quote')
let btn = document.getElementById('new-quote')
let person = document.querySelector('.person');


const quoteSlag = [
    {
        quote: 'The way to get started is to quit talking and begin doing.',
        person: 'Walt Disney',
        color: 'red',
    },
    {
        quote: 'The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.',
        person: 'Winston Churchill',
        color: 'green'
    },
    {
        quote: 'Don’t let yesterday take up too much of today.',
        person: 'Will Rogers',
        color: 'blue',
    },
    {
        quote: 'You learn more from failure than from success. Don’t let it stop you. Failure builds character.',
        person: 'Unknown',
        color: 'yellow',
    },
    {
        quote: 'It’s not whether you get knocked down, it’s whether you get up.',
        person: 'Vince Lombardi',
        color: 'orange',
    },
    {
        quote: 'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.',
        person: 'Steve Jobs',
        color: 'purple',
    },
    {
        quote: 'People who are crazy enough to think they can change the world, are the ones who do.',
        person: 'Rob Siltanen',
        color: 'pink',
    },
    {
        quote: 'Failure will never overtake me if my determination to succeed is strong enough.',
        person: 'Og Mandino',
        color: 'brown',
    },
    {
        quote: 'Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.',
        person: 'Mohnish Pabrai',
        color: 'black',
    },
    {
        quote: 'We may encounter many defeats but we must not be defeated.',
        person: 'Maya Angelou',
        color: 'grey',
    },
]

btn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * quoteSlag.length)
    quote.textContent = quoteSlag[random].quote;
    person.textContent = quoteSlag[random].person;
    document.body.style.backgroundColor = quoteSlag[random].color;
})