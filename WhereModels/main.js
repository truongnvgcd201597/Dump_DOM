const openButton = document.getElementById('open-btn');
const modalDisplay = document.getElementById('modal-container')
const closeButton = document.getElementById('close-btn');


openButton.addEventListener('click', ()=>{
    modalDisplay.style.display = 'block'
})

closeButton.addEventListener('click', ()=>{
    modalDisplay.style.display = 'none'
})

window.addEventListener('click', (e)=>{
    if(e.target === modalDisplay){
        modalDisplay.style.display = 'none'
    }
})