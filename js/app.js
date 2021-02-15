/*
    Codea feliz :)
    wwww.thecodeloops.com
*/

//Obtener el mensaje desde el url
const { hash } = window.location;
const message = atob(hash.replace('#', ''));

//Si existe el mensaje, mostrarlo
if (message) {
    document.querySelector("#tarjeta-crear").classList.add('hide');
    document.querySelector("#mostrar-mensaje").classList.remove('hide');
    document.querySelector("h2").innerHTML = message;
}

//Capturar el mensaje desde el input
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    document.querySelector('#tarjeta-crear').classList.add('hide');
    document.querySelector('#tarjeta-link').classList.remove('hide');

    const input = document.querySelector('#input');
    const encrypted = btoa(input.value);

    document.querySelector('#link').value = `${window.location}#${encrypted}`;
    
    document.querySelector('#link').select();
});