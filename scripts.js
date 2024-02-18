
const convertButton = document.querySelector(".main-button")
const currencySelectorInitial = document.querySelector(".initial-coin")
const currencySelectorFinal = document.querySelector(".ended-coin")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-main").value
    const currencyValueToConvert = document.querySelector(".currency-value")
    const currencyValueConverted = document.querySelector(".currency-value-result")
    const inputPlaceHolder = document.querySelector(".input-main")

    //trocar o formato da moeda inical
    switch (currencySelectorInitial.value) {
        case "real":
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
            break;

        case "dolar":
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue)
            break;

        case "won":
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-CA", { style: "currency", currency: "KRW" }).format(inputCurrencyValue)
            break;

        case "euro":
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue)
            break;

        case "canadense":
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CAD" }).format(inputCurrencyValue)
            break;
    }

    //realiza o calculo da conversão e trocar formato da moeda final

    if (currencySelectorInitial.value === "real") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / 5.05)
                break;

            case "won":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
                    style: "currency", currency: "KRW",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 3
                }).format(inputCurrencyValue / 0.0037)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / 5.31)
                break;

            case "canadense":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CAD" }).format(inputCurrencyValue / 3.68)
                break;

            case "real":
                alert(`NÃO PODEMOS CONVERTER A REAL PARA REAL.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            default:
                break;
        }
    } else if (currencySelectorInitial.value === "dolar") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                alert(`NÃO PODEMOS CONVERTER A DOLAR PARA DOLAR.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            case "won":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", { style: "currency", currency: "KRW" }).format(inputCurrencyValue * 1332.58)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * 0.95)
                break;

            case "canadense":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CAD" }).format(inputCurrencyValue * 1.35)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * 5.05)
                break;

            default:
                break;
        }
    } else if (currencySelectorInitial.value === "won") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                    style: "currency", currency: "USD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 4
                }).format(inputCurrencyValue * 0.00075)
                break;

            case "won":
                alert(`NÃO PODEMOS CONVERTER A won PARA won.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency", currency: "EUR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 4
                }).format(inputCurrencyValue * 0.00070)
                break;

            case "canadense":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                    style: "currency", currency: "CAD",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 4
                }).format(inputCurrencyValue * 0.0010)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                    style: "currency", currency: "BRL",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 4
                }).format(inputCurrencyValue * 0.0037)
                break;

            default:
                break;
        }
    } else if (currencySelectorInitial.value === "euro") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * 1.05)
                break;

            case "won":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", { style: "currency", currency: "KRW" }).format(inputCurrencyValue * 1436.01)
                break;

            case "euro":
                alert(`NÃO PODEMOS CONVERTER A EURO PARA EURO.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            case "canadense":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "CAD" }).format(inputCurrencyValue * 1.45)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * 5.31)
                break;

            default:
                break;
        }
    } else if (currencySelectorInitial.value === "canadense") {

        switch (currencySelectorFinal.value) {
            case "dolar":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue * 0.74)
                break;

            case "won":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", { style: "currency", currency: "KRW" }).format(inputCurrencyValue * 987.61)
                break;

            case "euro":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue * 0.69)
                break;

            case "canadense":
                alert(`NÃO PODEMOS CONVERTER DOLAR CANADENSE PARA DOLAR CANADENSE.                
TROQUE UMA DAS MOEDAS PARA CONVERTER.`)
                break;

            case "real":
                currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * 3.68)
                break;

            default:
                break;
        }
    }

    //alterar o place Holder do input
    switch (currencySelectorInitial.value) {
        case "dolar":
            inputPlaceHolder.placeholder = "US$ 10,000.00"
            break;

        case "won":
            inputPlaceHolder.placeholder = "10.000,00 ₩"
            break;

        case "euro":
            inputPlaceHolder.placeholder = "10.000,00 €"
            break;

        case "canadense":
            inputPlaceHolder.placeholder = "$ 10.000,00"
            break;

        case "real":
            inputPlaceHolder.placeholder = "R$ 10.000,00"
            break;

        default:
            break;
    }
}

//trocar a foto e nome das moeda selecionadas do inicial
function changeCurrencyInitial() {
    const nameCurrency = document.querySelector(".currency")
    const imageCurrency = document.querySelector(".to-convert")

    switch (currencySelectorInitial.value) {
        case "dolar":
            nameCurrency.innerHTML = "Dólar Americano"
            imageCurrency.src = "./assets/dolar.png"
            break;

        case "won":
            nameCurrency.innerHTML = "Won Sul-Coreano"
            imageCurrency.src = "./assets/Won Sul-coreano.png"
            break;

        case "euro":
            nameCurrency.innerHTML = "Euro"
            imageCurrency.src = "./assets/euro.png"
            break;

        case "canadense":
            nameCurrency.innerHTML = "DOLAR CANADENSE"
            imageCurrency.src = "./assets/Dólar Canadense.png"
            break;

        case "real":
            nameCurrency.innerHTML = "Real"
            imageCurrency.src = "./assets/real.png"
            break;
    }

    convertValues()
}

//trocar a foto e nome das moeda selecionadas no final
function changeCurrency() {
    const nameCurrency = document.querySelector(".currency-converted")
    const imageCurrency = document.querySelector(".converted")

    switch (currencySelectorFinal.value) {
        case "dolar":
            nameCurrency.innerHTML = "Dólar Americano"
            imageCurrency.src = "./assets/dolar.png"
            break;

        case "won":
            nameCurrency.innerHTML = "Won Sul-Coreano"
            imageCurrency.src = "./assets/Won Sul-coreano.png"
            break;

        case "euro":
            nameCurrency.innerHTML = "Euro"
            imageCurrency.src = "./assets/euro.png"
            break;

        case "canadense":
            nameCurrency.innerHTML = "DOLAR CANADENSE"
            imageCurrency.src = "./assets/Dólar Canadense.png"
            break;

        case "real":
            nameCurrency.innerHTML = "Real"
            imageCurrency.src = "./assets/real.png"
            break;
    }

    convertValues()
}

currencySelectorInitial.addEventListener("change", changeCurrencyInitial)
currencySelectorFinal.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)