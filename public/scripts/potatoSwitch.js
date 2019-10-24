window.onload = function() {

  const potatoDiv = document.getElementById("potatoDiv");
  const potatoText = document.getElementById("potatoText");

  const createCoolPotato = function () {
    const coolPotato = document.createElement('IMG');
    coolPotato.id = "coolPotato";
    coolPotato.src = 'images/coolPotato.jpg';
    coolPotato.addEventListener("click", changePotato);
    return coolPotato
  }

  const createNormalPotato = function () {
    const normalPotato = document.createElement('IMG');
    normalPotato.id = "normalPotato";
    normalPotato.src = 'images/potato.png';
    normalPotato.addEventListener("click", changePotato);
    return normalPotato
  }

  function changePicture() {
    let potatoPic = potatoDiv.getElementsByTagName("img")[0];
    potatoDiv.removeChild(potatoPic);
    potatoPic.id == "normalPotato" ?
      potatoDiv.appendChild(createCoolPotato()) :
      potatoDiv.appendChild(createNormalPotato());
  }

  function changeText() {
    potatoText.innerHTML != "Swag potato here, click me if you can't handle it..." ?
      potatoText.innerHTML = "Swag potato here, click me if you can't handle it..." :
      potatoText.innerHTML = "Oooh... I'm boring again... Click me ?";
  }

  function changePotato () {
    changePicture();
    changeText();
  }

  globalThis.changePotato = changePotato;
}