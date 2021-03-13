let soucet = document.querySelector("#vysledek")

function vysledek(a, b) {
	soucet.innerHTML = secti(a, b);
}

function secti(a, b) {
  let c = a + b;
  return c;
}



let ctverec = document.querySelector(".ctverecek")

function zmenaBarvy() {
ctverec.style.backgroundColor="green"
}


function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  ctverec.innerHTML= "Gratulace, právě jsi spustila tuto funkci!"
  ctverec.style.width= "500px"
}