/* 
//Función entregada
function pintar() {
    ele.style.backgroundColor = 'yellow'
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

*/

//Función modificada
const ele = document.querySelector('#ele1');
ele.style.backgroundColor = 'green'

ele.addEventListener('click', function() {
    ele.style.backgroundColor = 'yellow'
});
