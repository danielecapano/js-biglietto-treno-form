const PREZZO_KM = 0.21;
const SCONTO_UNDER_18 = 20;
const SCONTO_OVER_65 = 40;
const elDOMName = document.getElementById("nome");
const elDOMInput = document.getElementById("distanza");
const elDOMSelect = document.getElementById("discount");
const elDOMBtnCalc = document.querySelector(".btn-calc");
const elDOMBtnReset = document.querySelector(".btn-reset");

const elDOMPrice = document.getElementById("price");
const elDOMTicketName = document.getElementById("ticket-name");
const elDOMTicketType = document.getElementById("ticket-type");

const elDOMwagon = document.getElementById("wagon");
const elDOMCpCode = document.getElementById("cp-code");

elDOMBtnCalc.addEventListener("click", function () {
  const distanza = elDOMInput.value; // 100
  const age = elDOMSelect.value; // 1
  const prezzoBase = distanza * PREZZO_KM; // 21
  let sconto = 0;
  elDOMTicketType.innerHTML = "Biglietto Standard";

  if (age === "0") {
    sconto = (prezzoBase * SCONTO_UNDER_18) / 100;
    elDOMTicketType.innerHTML = "Biglietto Ridotto 20%";
  } else if (age === "2") {
    sconto = (prezzoBase * SCONTO_OVER_65) / 100;
    elDOMTicketType.innerHTML = "Biglietto Ridotto 40%";
  }

  const prezzoFinale = prezzoBase - sconto;
  elDOMTicketName.innerHTML = elDOMName.value;

  elDOMPrice.innerHTML = prezzoFinale.toFixed(2) + " &euro;";

  elDOMwagon.innerHTML = Math.floor(Math.random() * 10 + 1);
  elDOMCpCode.innerHTML = Math.floor(Math.random() * 100000 + 1);
});

elDOMBtnReset.addEventListener("click", function () {
  elDOMName.value = "";
  elDOMInput.value = "";
});
