let caja = document.getElementById('key');
    caja.style.width = '200px';
    caja.style.height = '200px';
    caja.style.border = 'solid black 1px';
    
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    caja.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
    caja.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
    caja.style.backgroundColor = 'lightblue';
    }
});

//Nuevo div

function nuevoDiv() {
    element = document.getElementById('key2');
    element.style.width = '200px';
    element.style.height = '200px';
    element.style.border = 'solid black 1px';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        nuevoDiv()
        element.style.backgroundColor = 'purple';
    } else if (event.key === 'w') {
        nuevoDiv()
        element.style.backgroundColor = 'gray';
    } else if (event.key === 'e') {
        nuevoDiv()
        element.style.backgroundColor = 'saddlebrown';
    }
});

