const colorone = document.getElementById( 'colorone' );
const colortwo = document.getElementById( 'colortwo');
const bodybg = document.getElementById( 'bodybg');
const showdata = document.getElementById('showvalue');

function setbgcolour(){
  bodybg.style.background = 
  `linear-gradient(to right, ${colorone.value}, 
    ${colortwo.value})`;

    showdata.textContent = `copy your code: linear-gradient(
        to right, ${colorone.value} , ${colortwo.value})`;
}
colorone.addEventListener('input', setbgcolour);
colortwo.addEventListener('input',setbgcolour);

