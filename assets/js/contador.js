var valorContador =0;

function mas() {
  valorContador++;
  document.getElementById("contador").innerHTML = valorContador;
}

function menos() {
  valorContador--;
  document.getElementById("contador").innerHTML = valorContador;
}

function reset() {
  valorContador = 0;
  document.getElementById("contador").innerHTML = valorContador;
}

// Evento MAS
const buttonMas = document.querySelector("#mas");

buttonMas.addEventListener("click", function(){
    mas();
});

// Evento menos
const buttonMenos = document.querySelector("#menos");

buttonMenos.addEventListener("click", function(){
    menos();
});

// Evento menos
const buttonReset = document.querySelector("#reset");

buttonReset.addEventListener("click", function(){
    reset();
});
