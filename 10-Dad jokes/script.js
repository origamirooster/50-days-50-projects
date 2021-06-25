const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


jokeBtn.addEventListener('click', () => {
    generateJoke()

    const laugh = jokeBtn.innerHTML = "<b>HAHA</b>"

    jokeBtn.classList.add('animate__animated', 'animate__shakeY', laugh)
})

generateJoke()

//USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
        
    const data = await res.json()
    
    jokeEl.innerHTML = data.joke
}

jokeBtn.addEventListener('animationend', () => {
    jokeBtn.classList.remove('animate__animated', 'animate__shakeY')
    jokeBtn.innerHTML = "Get Another Joke?"
})

//USING .then
/*
function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })
}
*/
    

