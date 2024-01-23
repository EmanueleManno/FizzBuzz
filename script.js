//VERIFICO SE FUNZIONA
console.log("JS OK");

//PRENDO L'ELEMENTO CONTA DAL DOM
const countElement = document.getElementById("conta");

//STAMPO I NUMERI DA 1 A 100
for (let i = 1; i <= 100; i++) {
  //CONTENUTO BASE:
  let content = i;

  //SE SONO MULTIPLI SIA DI 3 e 5 e QUINDI DI 15
  if (i % 15 === 0) content = "FizzBuzz";
  //SE SONO SOLO MULTIPLI DI 3
  else if (i % 3 === 0) content = "Fizz";
  //SE SONO SOLO MULTIPLI DI 5
  else if (i % 5 === 0) content = "Buzz";

  //STAMPO IN PAGINA:
  let myClass = isNaN(content) ? content.toLowerCase() : "";
  countElement.innerHTML += `<li class="${myClass}">${content}</li>`;
}
