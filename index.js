const clientNameInput = document.querySelector("#client-name");
const clientNameText = document.querySelector(".client-name");
clientNameInput.addEventListener("input", () => {
  updateValues(clientNameInput.value, clientNameText, clientNameInput, 22);
});

const cardNumberInput = document.querySelector("#card-number");
const cardNumberText = document.querySelector(".card-number");
cardNumberInput.addEventListener("input", () => {
  updateValues(cardNumberInput.value, cardNumberText, cardNumberInput, 19);
});

const monthNumberInput = document.querySelector("#month-number");
const yearNumberInput = document.querySelector("#year-number");

const expirationDateText = document.querySelector(".expiration-date");

monthNumberInput.addEventListener("input", () => {
  updateValues(
    monthNumberInput.value + `/${yearNumberInput.value}`,
    expirationDateText,
    expirationDateText,
    2
  );
});

yearNumberInput.addEventListener("input", () => {
  updateValues(
    `${monthNumberInput.value}/` + yearNumberInput.value,
    expirationDateText,
    expirationDateText,
    2
  );
});

const cvcNumberInput = document.querySelector("#cvc-number");
const cvcNumberText = document.querySelector(".csv-number");
cvcNumberInput.addEventListener("input", () => {
  updateValues(cvcNumberInput.value, cvcNumberText, false, cvcNumberInput, 3);
});

function updateValues(value, element, input, maxLength) {
  console.log(maxLength);
  // if (input.value.length > input.maxLength) {
  //   console.log(input.value.length);
  // }

  if (element.className == "card-number") {
    // const separatedCardNumber = value
    //   .replace(/\W/gi, "")
    //   .replace(/(.{4})/g, "$1 ");
    input.value = value;
    element.innerHTML = value;
  } else {
    console.log("entro aqui");
    element.innerHTML = value.substring(0, maxLength);
    input.value = value.substring(0, maxLength);
  }
}
