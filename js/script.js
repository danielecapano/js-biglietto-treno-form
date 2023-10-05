const PREZZO_KM = 0.21;
const SCONTO_UNDER_18 = 20;
const SCONTO_OVER_65 = 40;
const elDOMInput = document.getElementById("distanza");
const elDOMSelect = document.getElementById("discount");
const elDOMBtn = document.querySelector(".btn-calc");
const elDOMPrice = document.querySelector(".price");

elDOMBtn.addEventListener("click", function () {
  const distanza = elDOMInput.value; // 100
  const age = elDOMSelect.value; // 1
  const prezzoBase = distanza * PREZZO_KM; // 21
  let sconto = 0;
  if (age === "0") {
    sconto = (prezzoBase * SCONTO_UNDER_18) / 100;
  } else if (age === "2") {
    sconto = (prezzoBase * SCONTO_OVER_65) / 100;
  }

  const prezzoFinale = prezzoBase - sconto;
  console.log(prezzoBase, sconto);
  elDOMPrice.innerHTML = prezzoFinale.toFixed(2);
});
