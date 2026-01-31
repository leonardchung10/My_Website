const petName = document.getElementById("petName")
const breedList = document.getElementById("breedList")
const petForm = document.getElementById("petForm")
const petImage = document.getElementById("petImage")
const petGreet = document.getElementById("petGreet")

fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        for(let x in data.message) {
            breedList.innerHTML += "<option value=" + x + ">" + x + "</option>";
        }
    })
