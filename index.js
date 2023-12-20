
function setDefaultTab() {
  toggleTab('tab2');
}

function toggleTab(tabId) {
  var divvElements = document.querySelectorAll(".divv");

  divvElements.forEach(function(divv) {
    divv.classList.remove("active-tab");
  });

  var clickedDivv = document.querySelector(
    "[onclick=\"toggleTab('" + tabId + "')\"]"
  );
  clickedDivv.classList.add("active-tab");

  var radioButtons = document.querySelectorAll(".tab-radio");
  radioButtons.forEach(function(radio) {
    radio.classList.remove("active-tab");
  });

  var clickedRadio = clickedDivv.querySelector(".tab-radio");
  clickedRadio.classList.add("active-tab");

  clickedRadio.checked = true;
}


