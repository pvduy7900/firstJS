// 1. define amount
let amount = prompt("how much amount?")



// 2. define from currency
let from = prompt("which currency you have?")

// 3. define To currency
let to = prompt("which currency you want to change?")


// 4. define currency ratio(23 000)
let usd_vnd = 23229.74
let usd_eur = 0.925069
let eur_vnd = 25160.89


let result = 0;

if (from === "usd" && to === "vnd") {
    result = usdToVnd();
} else if (from === "vnd" && to === "usd") {
    result = vndToUsd();
} else if (from === "usd" && to === "eur") {
    result = usdToEur();
} else if (from === "eur" && to === "usd") {
    result = eurToUsd();
} else if (from === "vnd" && to === "eur") {
    result = vndToEur();
} else if (from === "eur" && to === "vnd") {
    result = eurToVnd();
} else {
    result = toItSelf();
}

// 5. define converting function
function usdToVnd() {
    return amount * usd_vnd
}
function vndToUsd() {
    return amount / usd_vnd
}
function usdToEur() {
    return amount * usd_eur
}
function eurToUsd() {
    return amount / usd_eur
}
function eurToVnd() {
    return amount * eur_vnd
}
function vndToEur() {
    return amount / eur_vnd
}
function toItSelf() {
    return amount
}
console.log(from, " to ", to, " is ", result)

document.getElementById("demo").innerHTML =