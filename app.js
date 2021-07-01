const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    removeCurrentJoke()
    if(jokes.firstElementChild === null) {
        const jokeText = await getDadJoke();
        const jokeHead = document.createElement('H1')
        const newLI = document.createElement('LI');
        newLI.classList.add('list-group-item')
        newLI.setAttribute('id', 'joke-item')
        jokeHead.append(jokeText)
        newLI.append(jokeHead);
        jokes.append(newLI)
    }
}

const removeCurrentJoke = () => {
    if(jokes.firstElementChild !== null) {
        jokes.removeChild(jokes.firstChild)
    }
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

button.addEventListener('click', addNewJoke)