const btnRecuperar = document.querySelector(".btn-recuperar");
const btnRegistrarme = document.querySelector(".btn-registrarme");
const btnLoguin = document.querySelector(".btn-loguin");

const divloguin = document.querySelector("#form-loguin");
const divRecuperar = document.querySelector("#form-recuperar");
const divRegistrarme = document.querySelector("#form-registrarme");

btnRecuperar.addEventListener('click', function() {
    alert('recuperar contraseña');
    this.parentNode.parentNode.className="invisible"
    divRecuperar.className="visible";
    divRegistrarme.className="invisible";
  })

  btnRegistrarme.addEventListener('click', function() {
    alert('Registrarme');
    this.parentNode.parentNode.className="invisible"
    divloguin.className="invisible";
    divRegistrarme.className="visible";
  })

  btnLoguin.addEventListener('click', function() {
    alert('Loguin');
    divloguin.className="visible";
    divRegistrarme.className="invisible";
    divRecuperar.className="invisible";
  })