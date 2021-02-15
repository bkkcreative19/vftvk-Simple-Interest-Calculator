const amountDOM = document.querySelector("#amount");
const rateDOM = document.querySelector("#rate");
const yearsDOM = document.querySelector("#years");
const rateText = document.querySelector(".rate-text");

const date = new Date(Date.now());
const form = document.querySelector("form");
// PA = P(1 + rt) where P is the Principal amount of money to be invested at an Interest Rate
// R% per period for t Number of Time Periods. Where r is in decimal form; r=R/100; r and t are in the same units of time.
const result = document.querySelector("#result");
rateText.textContent = `${rateDOM.value}%`;
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log(yearsDOM.value);
  const rate = rateDOM;
  const answer =
    amountDOM.value *
    (1 + parseFloat(rateDOM.value / 100) * Number(yearsDOM.value));
  const newAnswer = answer - Number(amountDOM.value);

  result.textContent = `
  If you deposit ${amountDOM.value},
  at an interest rate of ${rateDOM.value}%.
  You will receive an amount of ${newAnswer.toFixed()},
  in the year ${date.getUTCFullYear() + Number(yearsDOM.value)}
  `;
}

rateDOM.addEventListener("input", () => {
  rateText.textContent = `${rateDOM.value}%`;
});
