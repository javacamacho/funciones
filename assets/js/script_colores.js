//Ejercicio 3

let cuadro1 = document.getElementById('caja1');
    cuadro1.style.width = '200px';
    cuadro1.style.height = '200px';
    cuadro1.style.backgroundColor = 'blue';

let cuadro2 = document.getElementById('caja2');
    cuadro2.style.width = '200px';
    cuadro2.style.height = '200px';
    cuadro2.style.backgroundColor = 'red';

let cuadro3 = document.getElementById('caja3');
    cuadro3.style.width = '200px';
    cuadro3.style.height = '200px';
    cuadro3.style.backgroundColor = 'green';

let cuadro4 = document.getElementById('caja4');
    cuadro4.style.width = '200px';
    cuadro4.style.height = '200px';
    cuadro4.style.backgroundColor = 'yellow';


cuadro1.addEventListener('click', function() {
    cuadro1.style.backgroundColor = 'black';
});

cuadro2.addEventListener('click', function() {
    cuadro2.style.backgroundColor = 'black';
});

cuadro3.addEventListener('click', function() {
    cuadro3.style.backgroundColor = 'black';
});

cuadro4.addEventListener('click', function() {
    cuadro4.style.backgroundColor = 'black';
});