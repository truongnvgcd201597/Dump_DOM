const getView1 = document.getElementById('view1')
console.log(getView1)

const getView2 = document.querySelector('#view2')
console.log(getView2)

//display style 
getView1.style.display = 'none'
getView2.style.display = 'flex'
getView2.style.flexDirection = 'row'
getView2.style.flexWrap = 'wrap'
getView2.style.margin = '10px'

while(getView2.lastChild){
    getView2.lastChild.remove();
}

const views = document.getElementsByClassName('view')
console.log(views)

const sameView = document.querySelectorAll('.view');
console.log(sameView)

const divs = getView1.querySelectorAll('div');
console.log(divs)

const sameDivs = getView1.getElementsByTagName('div')
console.log(sameDivs)

const evenDivs = getView1.querySelectorAll('div:nth-of-type(2n)')
console.log(evenDivs)

evenDivs.forEach((e)=>{
    e.style.backgroundColor = 'red';
    e.style.width = '200px';
    e.style.height = '200px';
})

const navText = document.querySelector('nav h1');
navText.textContent = 'NVTRUONG'

const navBar = document.querySelector('nav');
navBar.innerHTML = '<h1 style="background-color:red">NVTRUONG</h1>';

console.log(evenDivs[1].parentElement)
console.log(evenDivs[1].parentElement.children)
console.log(evenDivs[1].parentElement.childNodes)
console.log(evenDivs[1].parentElement.hasChildNodes())
console.log(evenDivs[1].parentElement.firstChild)
console.log(evenDivs[1].parentElement.firstElementChild)
console.log(evenDivs[1].parentElement.lastChild)
console.log(evenDivs[1].parentElement.lastElementChild)

const createDivs = (parent, iter) =>{
    const newDivs = document.createElement('div');
    newDivs.textContent = iter;
    newDivs.style.backgroundColor = '#000'
    newDivs.style.width = '100px'
    newDivs.style.height = '100px'
    newDivs.style.display = 'flex'
    newDivs.style.justifyContent = 'center'
    newDivs.style.alignItems = 'center'
    parent.append(newDivs);
}

createDivs(getView2, 10)

for(let i = 0; i <= 12; i++){
    createDivs(getView2, i);
}



