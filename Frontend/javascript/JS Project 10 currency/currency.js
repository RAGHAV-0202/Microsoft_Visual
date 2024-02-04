const fromCurr = document.querySelector('.fromCurr select');
const toCurr = document.querySelector('.toCurr select');
const amountInput = document.querySelector('.amount');
const exchangeRateDisplay = document.querySelector('.excRate');

function change() {
    var fromIMG = document.querySelector('.fromCurrFlag').src
    var toIMG = document.querySelector('.toCurrFlag').src

    document.querySelector('.toCurrFlag').src = fromIMG
    document.querySelector('.fromCurrFlag').src = toIMG

    var from = fromCurr.value
    var to = toCurr.value

    toCurr.value = from
    fromCurr.value = to


    
    getExchangeRate()
}


[fromCurr, toCurr].forEach((select, i) => {
  for (let curCode in Country_List) {
    const selected = (i === 0 && curCode === "USD") || (i === 1 && curCode === "GBP") ? "selected" : "";
    select.insertAdjacentHTML("beforeend", `<option value="${curCode}" ${selected}>${curCode}</option>`);
  }
  select.addEventListener("change", () => {
    const code = select.value;
    const imgTag = select.parentElement.querySelector('img');
    imgTag.src = `https://flagcdn.com/48x36/${Country_List[code].toLowerCase()}.png`;

    getExchangeRate()
  });
});


async function getExchangeRate() {
  const amount = amountInput.value || 1;
  exchangeRateDisplay.innerHTML = "Getting Exchange Rate...";
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/dc3fdea5c62d1f3cb1a8cf76/latest/${fromCurr.value}`);
    const result = await response.json();
    const exchangeRate = result.conversion_rates[toCurr.value];
    const totalExRate = (amount * exchangeRate).toFixed(2);
    exchangeRateDisplay.innerHTML = `${amount} ${fromCurr.value} = ${totalExRate} ${toCurr.value}`;
  } catch (error) {
    exchangeRateDisplay.innerHTML = "Something went wrong...";
  }
}

window.addEventListener('load', getExchangeRate);



