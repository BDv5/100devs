//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value

fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`)
    .then(res => res.json()) // parse response as JSON

    .then(data => {

        console.log(data)

        for (let i = 0; i <= data.drinks.length; i++) {
            displayDrink(i)                                        
        }

        function displayDrink(i) {
            setTimeout(function() {
                document.querySelector('h2').innerText = data.drinks[i].strDrink
                document.querySelector('img').src = data.drinks[i].strDrinkThumb
                document.querySelector('h3').innerText = data.drinks[i].strInstructions
                console.log(i)
                }, 2000 * i) 
        }

    })
    

    .catch(err => {
        console.log(`error ${err}`)
    })

}
