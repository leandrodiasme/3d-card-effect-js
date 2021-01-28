//Selecionado o card, container e os itens:
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

const btnNike = document.querySelector("#nike");
const btnAdidas = document.querySelector("#adidas");
const btnMizuno = document.querySelector("#mizuno");


//Evento de animação:
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animação funcionando:
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

//Animação parando:
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});

// Trocar tênis para Nike

function changeToNike(){
    title.innerHTML = "Nike";
    sneaker.src = "img/sneaker-nike.png";
    description.innerHTML = "SINCE HIS GAME-WINNING SHOT THAT BROUGHT CHAMPIONSHIP GLORY TO NORTH CAROLINA, JORDAN HAS BEEN AT THE FOREFRONT OF BASKETBALL CONSCIOUSNESS.";
    btnNike.classList.add("active");
    btnAdidas.classList.remove("active");
    btnMizuno.classList.remove("active");
}

// Trocar tênis para Adidas

function changeToAdidas(){
    title.innerHTML = "Adidas";
    sneaker.src = "img/sneaker-adidas.png";
    description.innerHTML = "MIXING ADIDAS STYLES OF THE 80S AND 90S, PAIRED WITH THE COMFINESS OF ADIPRENE X, THESE ZX SHOES HAVE BEEN DESIGNED IN A STREAMLINED LOOK, INSPIRED BY THE ARCHIVES."
    btnAdidas.classList.add("active");
    btnNike.classList.remove("active");
    btnMizuno.classList.remove("active");
}

// Trocar tênis para Mizuno

function changeToMizuno(){
    title.innerHTML = "Mizuno";
    sneaker.src = "img/sneaker-mizuno.png";
    description.innerHTML = "THE MIZUNO WAVE SKY IS A BRAND NEW SHOE MADE TO TAKE THE PLACE OF THE WAVE ENIGMA. THIS SHOE REPRESENTS THE HIGHEST LEVEL OF CUSHION MIZUNO OFFERS THAT IS MOSTLY FOAM BASED."
    btnMizuno.classList.add("active");
    btnAdidas.classList.remove("active");
    btnNike.classList.remove("active");
}