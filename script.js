const addressInput = document.getElementById("address");
const cityInput = document.getElementById("city");
const stateInput = document.getElementById("state");
const postalCodeInput = document.getElementById("postal-code");
const streetAddress = document.getElementById("street-address");
const countryAddress = document.getElementById("country-address");

const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    ![
      addressInput.value.trim(),
      cityInput.value.trim(),
      stateInput.value.trim(),
      postalCodeInput.value.trim(),
    ].includes("")
  ) {
    displayAddress();
  } else {
    displayError();
  }
  resetValue();
});

resetBtn.addEventListener("click", () => {
  window.location.reload();
});

const displayAddress = () => {
  countryAddress.style.visibility = "visible";
  streetAddress.classList.remove("error-message");
  streetAddress.innerText = addressInput.value;
  countryAddress.innerText =
    cityInput.value.toUpperCase() +
    "," +
    stateInput.value.toUpperCase() +
    "," +
    postalCodeInput.value;
};

const displayError = () => {
  countryAddress.style.visibility = "hidden";
  streetAddress.classList.add("error-message");
  streetAddress.innerHTML = "Address format not correct";
};

function resetValue() {
  addressInput.value = "";
  cityInput.value = "";
  stateInput.value = "";
  postalCodeInput.value = "";
}
