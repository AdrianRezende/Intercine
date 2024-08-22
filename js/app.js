var img1 = "img/pass.png"
var img2 = "img/word.png"

let btn = document.querySelector('#mostrar');
btn.addEventListener('click', function() {
    let input = document.querySelector('#senha');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        document.getElementById("mostrar").src = img2;
    } else {
        input.setAttribute('type', 'password');
        document.getElementById("mostrar").src = img1;
    }
});