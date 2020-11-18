let btn = document.querySelector('.button');
const content = document.querySelector('.content');
const esc = document.querySelector('.exist');

esc.addEventListener('click',escClick);

btn.addEventListener('click', btnClick);

function btnClick() {
    console.log(content.classList);
    
// if (content.classList.contains('box-hidden')) {
//     btn.textContent = 'Скрыть';
// } else {
//     btn.textContent = 'привет';
// }
    content.classList.remove('box-hidden');
    

}
function escClick() {
    console.log(esc.classList);
    content.classList.toggle('box-hidden');
}

const headers = document.querySelectorAll("[data-name = 'accordeon-title']");
console.log("headers" ,headers);

headers.forEach(function(item) {
    item.addEventListener("click", headerClick);
    
});

function headerClick() {
    console.log('Fired');
    console.log("TCL: item");
    let letme = this.nextElementSibling;
    letme.classList.toggle('hidden'); 
}