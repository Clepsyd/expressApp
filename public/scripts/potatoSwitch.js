window.onload = function() {

  const potatoDiv = document.getElementById("potatoDiv");

  this.createCoolPotato = function () {
    const normalPotato = document.getElementById("normalPotato");

    const coolPotato = document.createElement('IMG')
    coolPotato.id = "coolPotato"
    coolPotato.src = 'images/coolPotato.jpg'
    coolPotato.addEventListener("click", createNormalPotato)

    potatoDiv.removeChild(normalPotato);
    potatoDiv.appendChild(coolPotato);
  }

  this.createNormalPotato = function () {
    const coolPotato = document.getElementById("coolPotato");

    const normalPotato = document.createElement('IMG')
    normalPotato.id = "normalPotato"
    normalPotato.src = 'images/potato.png'
    normalPotato.addEventListener("click", createCoolPotato)

    potatoDiv.removeChild(coolPotato);
    potatoDiv.appendChild(normalPotato);
  }

}