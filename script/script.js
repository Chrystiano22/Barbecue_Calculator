
let inputAdults = document.getElementById("adults")
let inputKids = document.getElementById("kids")
let inputDuration = document.getElementById("duration")

let result = document.getElementById('result')

function Calculate() {

    let adults = inputAdults.value
    let kids = inputKids.value
    let duration = inputDuration.value

    let amountMeat = MeatByPerson(duration) * adults + (MeatByPerson(duration) / 2 * kids)
    let amountBeer = BeerByPerson(duration) * adults
    let amountDrink = DrinkByPerson(duration) * adults + (MeatByPerson(duration) / 2 * kids)

    result.innerHTML = `<p>${amountMeat / 1000} Kg of meat </p>`
    result.innerHTML += `<p>${Math.ceil(amountBeer / 355)} cans of beer </p>`
    result.innerHTML += `<p>${Math.ceil(amountDrink / 2000)} bottles of soda and water </p>`
}

function MeatByPerson(duration) {
    if (duration >= 6) {
        return 650
    } else {
        return 400
    }
}

function BeerByPerson(duration) {
    if (duration >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function DrinkByPerson(duration) {
    if (duration >= 6) {
        return 1500
    } else {
        return 1000
    }
}